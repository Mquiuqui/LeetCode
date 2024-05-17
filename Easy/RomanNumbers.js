function romanToInt(s) {
    var RomanObject = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    var conta = 0;
    for (var i = 0; i < s.length; i++) {
        var valorAtual = RomanObject[s[i]];
        var proximoValor = RomanObject[s[i + 1]];
        if (proximoValor > valorAtual) {
            conta -= valorAtual;
        }
        else {
            conta += valorAtual;
        }
    }
    return conta;
}
;
console.log(romanToInt('V'));
