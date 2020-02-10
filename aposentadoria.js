const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

const calculcocontribuicao = idade + contribuicao

const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculcocontribuicao >= 95
const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculcocontribuicao >= 85

if ( homemPodeAposentar || mulherPodeAposentar ) {
    console .log('Silvana, você pode se aposentar!')

} else {
    console .log('Silvana, você nao pode se aposentar!')
}