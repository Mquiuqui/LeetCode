function romanToInt(s: string): number {
    
    const RomanObject:{ [key:string]: number} = 
    {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    let conta = 0 

    for(let i = 0; i <s.length; i++){
        const valorAtual = RomanObject[s[i]]
        const proximoValor = RomanObject[s[i+1]]
    
        if(proximoValor > valorAtual){
            conta -= valorAtual
        } else {
            conta += valorAtual
        }
    
    }

    return conta
};

console.log(romanToInt('V'))