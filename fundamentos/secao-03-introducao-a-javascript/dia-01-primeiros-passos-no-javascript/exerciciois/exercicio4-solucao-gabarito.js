let degreeAngleA = 66;
let degreeAngleB = 15;
let degreeAngleC = 100;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
    if(sumOfAngles === 180) {
        console.log(true);
    } else {
        console.log(false);
    };
}  else {
    console.log('Erro: ângulo inválido');
}