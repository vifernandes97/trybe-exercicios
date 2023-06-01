let chessPiece = 'BISPO';

switch(chessPiece.toLowerCase()){
    case 'bispo':
    console.log('Movimentos diagonais')
    break;
    case 'torre':
        console.log('Movimentos lineares')
    break;
    case 'rainha':
        console.log('Movimentos diagonais e lineares')
    break;
    default:
        console.log('Erro, peça inválida');
}