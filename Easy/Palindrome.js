function isPalindrome(x) {
    if (x < 0) {
        return false;
    }
    var palavra = x.toString();
    var palavra_inverso = palavra.split('').reverse().join('');
    return palavra_inverso === palavra;
}
;
