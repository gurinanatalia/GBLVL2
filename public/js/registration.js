let nameInput = document.querySelector('.name');
let nameRegExp = /^[a-z]+\s?$/i;

let lastnameInput = document.querySelector('.lastname');
let lastnameRegExp = /^[a-z]+\s?$/i;

let telInput = document.querySelector('.tel');
let telRegExp = /^\+7\(\d{3}\)\d{3}-\d{4}\s?$/;

let emailInput = document.querySelector('.email');
let emailRegExp = /(^[a-z]+@[a-z]+\.[a-z]+\s?$)|(^[a-z]+\.[a-z]+@[a-z]+\.[a-z]+\s?$)|(^[a-z]+-[a-z]+@[a-z]+\.[a-z]+\s?$)/i;


let regButton =  document.querySelector('.registration__button');
regButton.addEventListener('click', () => {
    let resultName = nameInput.value.match(nameRegExp);
    resultName === null ? console.log('Имя должно содержать только латинские буквы') : console.log('Имя содержит только латинские буквы');

    let resultLastname = lastnameInput.value.match(lastnameRegExp);
    resultLastname === null ? console.log('Фамилия должна содержать только латинские буквы') : console.log('Фамилия содержит только латинские буквы');

    let resultTel = telInput.value.match(telRegExp);
    resultTel === null? console.log('Формат телефона должен быть +7(000)000-0000') : console.log('Формат телефона корректный: +7(000)000-0000');

    let resultEmail = emailInput.value.match(emailRegExp);
    resultEmail === null? console.log('Формат email должен быть mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru') : console.log('Формат email корректный');
});

