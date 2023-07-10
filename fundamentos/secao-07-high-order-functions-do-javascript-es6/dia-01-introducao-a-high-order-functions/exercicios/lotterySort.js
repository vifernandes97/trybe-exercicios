const verificaNumerosIguais = (meuNumero, numeroSorteado) => meuNumero === numeroSorteado;

const sorteio = (meuNumero, verificaNumerosIguais) => {
    const sorteiaNumero = Math.floor((Math.random() * 5) + 1);

    return verificaNumerosIguais(meuNumero, sorteiaNumero) ? 'Você ganhou' : 'Tente novamente!';
};

console.log(sorteio(3, verificaNumerosIguais))