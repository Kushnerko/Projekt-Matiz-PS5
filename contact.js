class ContactFormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.nameInput = document.getElementById('name');
        this.emailInput = document.getElementById('email');
        this.messageInput = document.getElementById('message');
        this.successMsg = document.getElementById('success-msg');

        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.validateForm();
        });
    }

    showError(inputElement, errorId, message) {
        document.getElementById(errorId).textContent = message;
        inputElement.classList.add('input-error');
    }

    clearErrors() {
        const errorDisplays = document.querySelectorAll('.error-msg');
        errorDisplays.forEach(el => el.textContent = '');
        
        const errorInputs = document.querySelectorAll('.input-error');
        errorInputs.forEach(el => el.classList.remove('input-error'));
        
        this.successMsg.textContent = '';
    }

    validateForm() {
        this.clearErrors();
        let isValid = true;

        const nameValue = this.nameInput.value.trim();
        if (nameValue.length < 3) {
            this.showError(this.nameInput, 'name-error', 'Imię musi zawierać minimum 3 znaki.');
            isValid = false;
        }

        const emailValue = this.emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailValue)) {
            this.showError(this.emailInput, 'email-error', 'Podaj poprawny adres e-mail (np. test@domena.pl).');
            isValid = false;
        }

        const messageValue = this.messageInput.value.trim();
        if (messageValue.length < 10) {
            this.showError(this.messageInput, 'message-error', 'Wiadomość jest za krótka. Napisz coś więcej (min. 10 znaków).');
            isValid = false;
        }

        if (isValid) {
            this.successMsg.textContent = 'Dziękujemy! Twoja wiadomość została wysłana pomyślnie.';
            this.form.reset();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ContactFormValidator('contact-form');
});