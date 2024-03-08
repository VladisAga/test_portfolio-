export function validateForm() {
    const form = document.getElementById('form');
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const textArea = form.querySelector('#comment');

    const showError = (element, message) => {
        element.style.border = '3px solid red';
        const time = setTimeout(() => {
            element.style.border = '1px solid black';
        }, 2000);
        const errorMessage = document.createElement('span');
        const nextElement = element.nextElementSibling;
        errorMessage.textContent = message;
        errorMessage.classList.add('error-text');
        if (nextElement && element.nextElementSibling.tagName !== 'SPAN') {
            element.after(errorMessage);
        }
        return () => clearTimeout(time);
    }

    const removeError = (element) => {
        const nextElement = element.nextElementSibling;
        if (nextElement && element.nextElementSibling.tagName === 'SPAN') {
            const sibling = element.nextElementSibling;
            sibling.remove();
        }
    }

    const validateTextArea = (element, errorMessage) => {
        if (element.value.trim() === '') {
            showError(element, errorMessage);
        } else {
            removeError(element);
            return true;
        }
    }
    const validateInput = (element, errorMessage) => {
        if (element.value.trim() === '' || element.value.match(/[1-9]/)) {
            showError(element, errorMessage);
        } else {
            removeError(element);
            return true;
        }
    }

    const validateEmailInput = (element, errorMessage) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(element.value)) {
            showError(element, errorMessage);
        } else {
            removeError(element);
            return true;
        }
    }

    const inputResult = validateInput(nameInput, '*Данные только в буквенном формате');
    const textAreaResult = validateTextArea(textArea, '*Данные отсутствуют');
    const emailResult = validateEmailInput(emailInput, '*Неправильный формат email адреса');

    if (inputResult && textAreaResult && emailResult) {
        return true;
    } else {
        return false;
    }
}

