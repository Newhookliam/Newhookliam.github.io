const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    document.body.style.backgroundColor = 'olive';
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})


function textColor() {
    for (let i = 0; i < newColor.length; i++) {
        let colorR;
        colorR = newcolor < 20;
        h1.style.color[i] = "white";
    }
}