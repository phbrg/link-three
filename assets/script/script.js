// caixa de alerta
const alertaBox = document.querySelector(".alerta");
let saida = document.querySelector(".saida");

function alerta(text, tempo) {
    alertaBox.style.display = "flex";
    saida.innerHTML = text;

    setTimeout(() => {
        alertaBox.style.display = "none";
    }, tempo)
}


// copiar discord
const disc = "nickname";
async function copyDisc() {
  try {
    await navigator.clipboard.writeText(disc);
    alerta("Discord nickname copied!", 3000);
  } catch (err) {
    alerta("Failed to copy discord nickname", 3000);
  }
}

// copiar @
let nome = document.querySelector("#nome").innerHTML;
async function copyName() {
  try {
    await navigator.clipboard.writeText(nome);
    alerta("Nickname copied!", 3000);
  } catch (err) {
    alerta("Failed to copy nickname", 3000);
  }
}

// surprise
var clicks = 0;
const picture = document.querySelector("#picture");

function surprise() {
    clicks++

    if(clicks >= 10) {
        clicks = 0
        alerta("You discovered a secret 🤫", 5000);
        picture.style.filter = "drop-shadow(0px 0px 10px #0066ffac)";

        setTimeout(() => {
            picture.style.filter = "drop-shadow(0px 0px 10px transparent)";
        }, 10000)
    }
}

console.log("made with ❤️ by ph")