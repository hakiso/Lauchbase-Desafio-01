const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

if (contribuicao >= 30) {
    if (idade >= 85){
        console.log('Silvana, você pode se aposentar!');
    } else {
        console.log('Silvana, você ainda não pode se aposentar!');
    };
} else {
    console.log('Silvana, você ainda não pode se aposentar!');
}