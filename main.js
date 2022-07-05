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

// // call for jokes api
const btn2 = document.querySelector('#btn');
const jokes = document.querySelector('#jokes');

const fetchData = async () => {

    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
}
const addNewJoke = async () => {
    try {

        const jokeText = await fetchData();
        const newLi = document.createElement('LI');
        newLi.append(jokeText);
        jokes.append(newLi);

    }
    catch (e) {
        return 'No jokes available'
    }
}

btn2.addEventListener('click', addNewJoke)

// end of jokes API
