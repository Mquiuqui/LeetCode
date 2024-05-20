function isValid(s: string): boolean {
  const stack: string[] = [];
  const bracketPairs: { [key: string]: string } = {
      ')': '(',
      '}': '{',
      ']': '['
  };

  for (let char of s) {
      if (char === '(' || char === '{' || char === '[') {
          stack.push(char);
      } else {
          const topElement = stack.pop();
          if (topElement !== bracketPairs[char]) {
              return false;
          }
      }
  }

  return stack.length === 0;
}
