function binary(num) {
    let rest = num
    let bin = ''
    while (rest > 1) {
        bin = `${rest % 2}${bin}`
        rest = Math.floor(rest / 2)
    }
    console.log(`O número ${num} em base dois é 1${bin}`);
    noBinary(`1${bin}`)
}

function noBinary(num) {
    let noBin = 0
    for (let index = 0; index < num.length; index++) {
        if (num[index] != '0') {
            noBin = noBin + (2 ** (num.length - index - 1))
        }
    }
    console.log(`O número em base dez é ${noBin}`);
}