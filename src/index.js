module.exports = function check(str, bracketsConfig) {
  let stack = [];
  str = str.split('');
  
  if (str.length % 2 !== 0) return false;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j][0] !== bracketsConfig[j][1]) { 
        if (str[i] === bracketsConfig[j][0]) {
          stack.push(str[i]);
        } else if (str[i] === bracketsConfig[j][1] && stack[stack.length - 1] === bracketsConfig[j][0] && stack.length !== 0) {
            stack.pop()
          } 
        } else if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
          if (stack.length === 0 && str[i] === bracketsConfig[j][0]) {
            stack.push(str[i]);   
          } else if (str[i] === bracketsConfig[j][1] && stack[stack.length - 1] === bracketsConfig[j][0] && stack.length !== 0) {
            stack.pop() 
            } 
       }
    }
  }
  return (stack.length === 0) ? true : false;     
}
