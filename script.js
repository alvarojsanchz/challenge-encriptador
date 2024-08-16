const textoInput = document.querySelector(".decrypted-value");
const encriptar = document.querySelector(".encrypt");
const desencriptar = document.querySelector(".decrypt");
const mostrarTexto = document.getElementById("cambio-texto");
const mostrarTextoMovil = document.getElementById("cambio-texto-movil");
const muneco = document.getElementById("muneco");
const infoTexto = document.getElementById("info-texto");
const infoTextoMovil = document.getElementById("info-texto-movil");
const encryptedText = document.getElementById("encrypted-text");
const copiar = document.getElementById("hidden-btn");
const copiarMovil = document.getElementById("hidden-btn-movil");

let reemplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]
encriptar.addEventListener('click', () => {
    const texto = textoInput.value.toLowerCase();

    function encriptar(str) {
        for (let i = 0; i < reemplazar.length; i++) {
            str = str.replaceAll(reemplazar[i][0], reemplazar[i][1]);
        }
        return str;
    }    
    const textoEncriptado = encriptar(texto)

    mostrarTexto.innerHTML = textoEncriptado;
    mostrarTextoMovil.innerHTML = textoEncriptado;
    muneco.style.display = "none";
    infoTexto.style.display = "none";
    infoTextoMovil.style.display = "none";
    encryptedText.classList.remove("encrypted-text")
    encryptedText.classList.add("show-text")
    copiar.classList.remove("hidden-btn")
    copiar.classList.add("show-btn")
    copiarMovil.classList.remove("hidden-btn-movil")
    copiarMovil.classList.add("show-btn-movil")
})

desencriptar.addEventListener('click', () => {
    const texto = textoInput.value.toLowerCase();

    function desencriptar(str) {
        for(let i = 0; i < reemplazar.length; i++) {
            str = str.replaceAll(reemplazar[i][1], reemplazar[i][0]);
        };
        return str
    }

    const textoDesencriptado = desencriptar(texto)

    mostrarTexto.innerHTML = textoDesencriptado;
    mostrarTextoMovil.innerHTML = textoDesencriptado;
    muneco.style.display = "none";
    infoTexto.style.display = "none";
    infoTextoMovil.style.display = "none";
    encryptedText.classList.remove("encrypted-text")
    encryptedText.classList.add("show-text")
})

copiar.addEventListener('click', () => {
    const texto = mostrarTexto.innerText
    navigator.clipboard.writeText(texto)
    swal("", "Copiado en el portapapeles!", "success");

    mostrarTexto.innerHTML = "Ningún mensaje fue encontrado"
    muneco.style.display = "";
    infoTexto.style.display = "";
    textoInput.value = "";
    textoInput.placeholder = "Ingrese el texto aquí";
    encryptedText.classList.remove("show-text");
    encryptedText.classList.add("encrypted-text");
    copiar.classList.remove("show-btn");
    copiar.classList.add("hidden-btn");
})

copiarMovil.addEventListener('click', () => {
    const texto = mostrarTextoMovil.innerText
    navigator.clipboard.writeText(texto)
    swal("", "Copiado en el portapapeles!", "success");

    textoInput.value = "";
    textoInput.placeholder = "Ingrese el texto aquí";
    mostrarTextoMovil.innerHTML = "Ningún mensaje fue encontrado"
    infoTextoMovil.style.display = ""
    copiarMovil.classList.remove("show-btn-movil")
    copiarMovil.classList.add("hidden-btn-movil")
})