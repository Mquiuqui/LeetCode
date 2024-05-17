function isPalindrome(x: number): boolean {

    if(x < 0){
        return false
    }
    const palavra = x.toString()
    const palavra_inverso = palavra.split('').reverse().join('')

    return palavra_inverso === palavra

};
