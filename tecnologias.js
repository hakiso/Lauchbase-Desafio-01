const usuarioss = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];


for (let usuario of usuarioss) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
}


//Busca por Tecnologia
 function CSScheker(usuario) {
     for (let tecnologia of usuario.tecnologias) {
         if (tecnologia == 'CSS') return true
     }


     return false

 }

 for (let i = 0; i < usuarios.length; i++ ) {
     const usuariosTrabalhacomCSS = CSScheker(usuarios[i])

     if(usuariosTrabalhacomCSS) {
         console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
     }

 }


 
  

  
