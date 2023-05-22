function encriptarStr(mensajeNuevo) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensajeNuevo.length; i++) {
        switch (mensajeNuevo[i]) {
            case 'e':
                mensajeEncriptado += "enter";
                break;
            case 'i':
                mensajeEncriptado += "imes";
                break;
            case 'a':
                mensajeEncriptado += "ai";
                break;
            case 'o':
                mensajeEncriptado += "ober";
                break;
            case 'u':
                mensajeEncriptado += "ufat";
                break;
        
            default:
                mensajeEncriptado += mensajeNuevo[i];
                break;
        }
    }
    mensaje.textContent = mensajeEncriptado;
}

function desencriptarStr(mensajeEncriptado) {
    let mensajeDesencriptado = "";
    let i = 0;

    while (i < mensajeEncriptado.length) {
        let currentChar = mensajeEncriptado[i];

        if (currentChar === "e" && mensajeEncriptado.substring(i, i + 5) === "enter") {
            mensajeDesencriptado += "e";
            i += 5;
        } else if (currentChar === "i" && mensajeEncriptado.substring(i, i + 4) === "imes") {
            mensajeDesencriptado += "i";
            i += 4;
        } else if (currentChar === "a" && mensajeEncriptado.substring(i, i + 2) === "ai") {
            mensajeDesencriptado += "a";
            i += 2;
        } else if (currentChar === "o" && mensajeEncriptado.substring(i, i + 4) === "ober") {
            mensajeDesencriptado += "o";
            i += 4;
        } else if (currentChar === "u" && mensajeEncriptado.substring(i, i + 4) === "ufat") {
            mensajeDesencriptado += "u";
            i += 4;
        } else {
            mensajeDesencriptado += currentChar;
            i++;
        }
    }

    return mensajeDesencriptado;
}


let textarea = document.getElementById("encriptar");
let defaultMessage = "Ingrese su mensaje...";
textarea.value = defaultMessage;

const boton = document.getElementById("boton-copiar");
const btnEncriptar = document.getElementById("btnencriptar");
const btnDesencriptar = document.getElementById("btndesencriptar");
const mensaje = document.getElementById("mensajeNuevo")


if(textarea.value === defaultMessage){
    boton.style.display = "none"
    mensaje.style.display = "none"
}

textarea.addEventListener("focus", function(){
    if(textarea.value === defaultMessage){
        textarea.value = "";
    }
});

textarea.addEventListener("blur", function(){
    let mensajeNoEncontrado = document.getElementById("notFoundMessage");
    if(textarea.value === ""){
        textarea.value = defaultMessage;
        boton.style.display = "none"
        mensaje.style.display = "none"
        mensajeNoEncontrado.style.display = "block";
    }
});

boton.addEventListener('click', function(){
    let range = document.createRange();
    range.selectNodeContents(mensaje);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    navigator.clipboard.writeText(mensaje.textContent);
    window.getSelection().removeAllRanges();
    boton.style.backgroundImage = "url(images/check.svg)";

    setTimeout(function(){
        boton.style.backgroundImage = "url(images/copy.svg)";
        boton.style.transition = "1s";
    }, 4000);
});

btnEncriptar.addEventListener('click', function(){
    if(textarea.value != defaultMessage && textarea.value != ""){
        let mensajeNoEncontrado = document.getElementById("notFoundMessage");
        mensajeNoEncontrado.style.display = "none";
        boton.style.display = "block"
        mensaje.style.display = "block"
        let contenido = textarea.value;
        if(textarea.value != ""){
            encriptarStr(contenido);
        }
    }
});

btnDesencriptar.addEventListener('click', function(){
    if(textarea.value != defaultMessage && textarea.value != ""){
        let mensajeNoEncontrado = document.getElementById("notFoundMessage");
        mensajeNoEncontrado.style.display = "none";
        boton.style.display = "block"
        mensaje.style.display = "block"
        let contenido = textarea.value;
        if(textarea.value != ""){
            let mensajeDesencriptado = desencriptarStr(contenido);
            mensaje.textContent = mensajeDesencriptado;
        }
    }
});
