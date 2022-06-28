const form = document.querySelector('#submitForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const details = document.querySelector('#details');
const email = document.querySelector('#email');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const firstInput = firstName.value;
    const newLi = document.createElement('LI');
    newLi.innerText = firstInput;
    details.append(newLi);

    const lastInput = lastName.value;
    const newLi2 = document.createElement('LI');
    newLi2.innerText = lastInput;
    details.append(newLi2);

    const emailInput = email.value;
    const newLi3 = document.createElement('LI');
    newLi3.innerText = emailInput;
    details.append(newLi3);

    firstName.value = '';
    lastName.value = '';
    email.value = '';
});