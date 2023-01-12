
const idRand = (longitud) => {

    let todo = process.env.NUM_PASSWORD + process.env.LETRAS_PASSWORD + process.env.SIMBOLOS_PASSWORD

    let idAleatorio = ""

    for (let x = 0; x < longitud; x++) {
        let aleatorio = Math.floor(Math.random() * todo.length);
        idAleatorio += todo.charAt(aleatorio);
    }
    return idAleatorio
}


module.exports = {
    idRand
}