const formEmail = document.getElementById('name');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const pass = document.getElementById('pass');
const passConfirm = document.getElementById('passConfirm');
const submitBtn = document.getElementById('submitBtn');

const submitForm = () => {
    //Validate email
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (formEmail.value.match(emailFormat)) {
        formEmail.setCustomValidity('');
        formEmail.checkValidity();
    } else {
        formEmail.setCustomValidity('Enter a valid Email');
    }

    //Validate Country
    country.addEventListener('input', () => {
        country.setCustomValidity('');
        country.checkValidity();
    });

    country.addEventListener('invalid', () => {
        if (country.value === '') {
            country.setCustomValidity('Please enter proper country');
        }
    });

    //Validate Zip
    let zipFormat = /^\d{5}(-\d{4})?$/;

    if (zip.value.match(zipFormat)) {
        zip.setCustomValidity('');
        zip.checkValidity();
    } else {
        zip.setCustomValidity('Enter a valid Zip Code');
    }

    //Validate Password
    let passwordFormat = /^[A-Za-z]\w{4,25}$/;

    if (pass.value.match(passwordFormat)) {
        pass.setCustomValidity('');
        pass.checkValidity();
    } else {
        pass.setCustomValidity('Enter a valid password with at least 5 characters');
    }

    //confirm Password
    if (passConfirm.value === pass.value) {
        pass.setCustomValidity('');
        pass.checkValidity();
    } else if (passConfirm.value !== pass.value) {
        passConfirm.setCustomValidity('Passwords Must Match');
    } else {
        passConfirm.setCustomValidity('Enter Valid Password');
    }
}

submitBtn.addEventListener('click', submitForm);