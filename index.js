let usuarios = [{
    nome: "Rodrigo",
    email: "Rodrigo@gmail.com",
    idade: 29,
}, {
    nome: "Maria",
    email: "Maria@gmail.com", 
    idade: 38,

}]
console.log("Qual email você quer pesquisar?");

process.stdin.on("data", function (data) {
    let email = data.toString().trim();
    let usuario;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email == email) {
            usuario = usuarios[i];
        }
    }

    if (usuario) {
        console.log(usuario);
    } else {
        console.log("usuario não encontrado");
    }
});

