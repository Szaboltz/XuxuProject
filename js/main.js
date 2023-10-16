function NeverNo() {
    var button = document.getElementById("op");
    const min = 100;
    const max = 500;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    button.innerHTML = `<div id="op" style="margin: ${randomNumber}px;">
    <button onclick="Yes()" id="sim">Sim</button>
    <button onmouseover="NeverNo()" id="nao">Não</button>
    </div>`
}

function Yes() {
    alert("Te amo!")
}

