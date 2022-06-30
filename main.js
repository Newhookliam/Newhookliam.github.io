const btn = document.querySelector('#project');
const content = document.querySelector('.dropdown-content');
const dropdown = document.querySelector('.dropdown');
const items = document.querySelector('.dropdown', 'dropdown-content');

btn.addEventListener('mouseover', function () {
    content.classList.toggle('show');
})

items.addEventListener('mouseleave', function () {
    content.classList.remove('show');
})