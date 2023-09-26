const elementoChute = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || 
window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

recognition.addEventListener('error', (e) => {
    console.log("Error")
    console.log(e)
});

recognition.addEventListener('nomatch', (e) => {
    console.log("NoMatch")
    console.log(e)
});

function onSpeak(e) {
    chute = e.results[0][0].transcript;
    exibeChuteNaTela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
    }

recognition.addEventListener('end', () => recognition.start())