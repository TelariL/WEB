function addLink() {
    const container = document.getElementById("linksContainer");
    const url = prompt("Введите URL ссылки:");
    if (!url) return;

    const text = prompt("Введите текст ссылки:");
    if (!text) return;

    const link = document.createElement("a");
    link.href = url;
    link.textContent = text;
    link.target = "_blank";


    link.addEventListener("mouseout", function () {
        link.style.color = getRandomColor();
        link.style.fontSize = getRandomFontSize();
        link.style.textDecoration = "none";
    });

    container.appendChild(link);
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomFontSize() {
    const sizes = [20, 24, 28, 32, 36, 40, 44, 48];
    return sizes[Math.floor(Math.random() * sizes.length)] + "px";
}