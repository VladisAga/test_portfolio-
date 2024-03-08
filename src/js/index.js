import { validateForm } from './formValidation.js';

const formToSend = document.getElementById('form');

const saveFormData = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const readyToSend = Object.fromEntries(formData);
    const formValidity = validateForm();
    if (formValidity) {
        sendFormValue(readyToSend);
        console.log(readyToSend);
    }
};

function sendFormValue(data) {
    fetch('http://localhost:3000/validFormData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    )
        .then(console.log('Данные успешно отправлены'))
        .catch('Данные не отправились :(')
}

formToSend.addEventListener('submit', saveFormData);