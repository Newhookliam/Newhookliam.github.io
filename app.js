const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    document.body.style.backgroundColor = 'olive';
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    if (r <= 100 && g <= 100 && b <= 100) {
        h1.style.color = "white";
    }
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

