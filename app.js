document.addEventListener('DOMContentLoaded', function() { 
    const textarea = document.querySelector('.entrada-texto');
    const buttonCopyElement = document.querySelector('.copy-button'); 
    const outputElement = document.querySelector('.output');

    textarea.addEventListener('input', function() {
        // Remove caracteres inválidos e converte para minúsculas
        let textoFormatado = textarea.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        textoFormatado = textoFormatado.replace(/[^a-z\s]/g, ''); // Permite letras minúsculas e espaços
        
        // Atualiza o valor do textarea com o texto formatado
        textarea.value = textoFormatado;
    });

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text);
            console.log('Texto copiado para a área de transferência:', text);
        } catch (error) {
            console.log('Erro ao copiar texto:', error);
        }
    }

    const copy = () => {
        buttonCopyElement.onclick = () => {
            const text = outputElement.textContent.trim() === "" ? "Você nao copiou nada" : outputElement.textContent;
            copyToClipboard(text);
        }
    }

    copy();
});

function criptografar() {
    const textarea = document.querySelector('.entrada-texto')

    let textoDigitado = textarea.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    let result = textoDigitado.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    return result;
}

function outputInsertCrip() {
    const outputElement = document.querySelector('.output');
    const textoCriptografado = criptografar();

    outputElement.textContent = textoCriptografado; // Insere o texto criptografado na div output
}

function descriptografia() {
    const textarea = document.querySelector('.entrada-texto');

    let textoDigitado = textarea.value; // Obtemos o valor do textarea

    let result = textoDigitado.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    return result;
}

function outputInsertDescript(){
    const outputElement = document.querySelector('.output');
    const textoDescriptografado = descriptografia();

    outputElement.textContent = textoDescriptografado;
}

function limparInput() {
    document.querySelector('.entrada-texto').value = '';
}


