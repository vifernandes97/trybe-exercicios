let angulo1 = 59;
let angulo2 = 60;
let angulo3 = 60;
let trianguloValido = 180;
message = '';

if(angulo1 + angulo2 + angulo3 === trianguloValido) {
    console.log('O triângulo é valido');
}
else if(angulo1 + angulo2 + angulo3 < trianguloValido) {
    console.log('A soma dos angulos é menor que 180, logo o triangulo não é valido');
}
else {
    console.log('A soma dos angulos é maior que 180, logo o triangulo não é valido');
}