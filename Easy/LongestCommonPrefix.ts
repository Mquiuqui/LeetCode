function longestCommonPrefix(strs: string[]): string {
    
    if (strs.length === 0) {
      return "";
    }
  
  let prefix = strs[0];
  
  for (let i = 1; i < strs.length; i++) {
      let string = strs[i];
      while (string.indexOf(prefix) !== 0 && prefix.length > 0) {
          prefix = prefix.substring(0, prefix.length - 1);
      }
      if (prefix === "") {
          return "";
      }
  }
  
  return prefix;
};