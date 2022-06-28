const input = document.querySelector('#inputItem');
const ulImportant = document.querySelector('#important');
const radImportant = document.querySelector('#radioImportant');
const btn = document.querySelector('#btn');
const radNice = document.querySelector('#radioNice');
const ulNice = document.querySelector('#nice');
const combinedUl = document.querySelectorAll('.UL');

btn.addEventListener('click', function (e) {
    if (radImportant.checked) {
        e.preventDefault();
        const item = input.value;
        const newLi = document.createElement('LI');
        newLi.innerText = item;
        ulImportant.append(newLi);
        ulImportant.style.listStyle = 'none';
        ulImportant.style.textAlign = 'center';

        input.value = "";
        e.stopImmediatePropagation();
    }
});

btn.addEventListener('click', function (e) {
    if (radNice.checked)
        e.preventDefault();
    const item2 = input.value;
    const newLi2 = document.createElement('LI');
    newLi2.innerText = item2;
    ulNice.append(newLi2);
    ulNice.style.listStyle = 'none';
    ulNice.style.textAlign = 'center';

    input.value = "";
})

ulNice.addEventListener('click', function (e) {
    e.target.nodeName === "LI" && e.target.remove();
})
ulImportant.addEventListener('click', function (e) {
    e.target.nodeName === "LI" && e.target.remove();
})



