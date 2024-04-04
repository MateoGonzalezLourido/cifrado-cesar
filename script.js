function cifradoCesar(texto, desplazamiento) {
    let textoCifrado = ''
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i]
        if (letra === ' ') {
            textoCifrado += ' '
            continue
        }
        //cifrar
        const code = texto.charCodeAt(i)//obtener codigo ascii
        if (letra.toUpperCase() === letra) {
            // Cifrado mayúsculas
            textoCifrado += String.fromCharCode(((code - 65 + (desplazamiento% 26)) % 26) + 65);
        } else {
            // Cifrado minúsculas
            textoCifrado += String.fromCharCode(((code - 97 + (desplazamiento% 26)) % 26) + 97);
        }
    }
    return textoCifrado
}
function descifradoCesar(texto, desplazamiento) {
    let textoDescifrado = ''
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i]
        if (letra === ' ') {
            textoDescifrado += ' '
            continue
        }
        //cifrar
        const code = texto.charCodeAt(i)//obtener codigo ascii
        if (letra.toUpperCase() === letra) {
            // Cifrado mayúsculas
            let letraCambiar = code - 65 - (desplazamiento % 26)
            if (letraCambiar < 0) letraCambiar += 65
            textoDescifrado += String.fromCharCode((letraCambiar % 26) + 65);
        } else {
            // Cifrado minúsculas
            let letraCambiar = code - 97 - (desplazamiento % 26)
            if (letraCambiar < 0) letraCambiar += 97
            textoDescifrado += String.fromCharCode(((code - 97 - desplazamiento) % 26) + 97);
        }
    }
    return textoDescifrado
}

//eventos
document.querySelector('#bt-cifrar').addEventListener('click', () => {
    const texto = document.querySelector('#textoCifrar').value
    const desplazamiento = Number(document.querySelector('#numeroCifrado').value)
    document.querySelector('#textoCifrado').value = cifradoCesar(texto, desplazamiento)
})
document.querySelector('#bt-descifrar').addEventListener('click', () => {
    const texto = document.querySelector('#textoCifrar').value
    const desplazamiento = Number(document.querySelector('#numeroCifrado').value)
    document.querySelector('#textoCifrado').value = descifradoCesar(texto, desplazamiento)
})