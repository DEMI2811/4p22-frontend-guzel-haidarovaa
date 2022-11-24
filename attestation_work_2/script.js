'use strict';

const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const passwordrepeatError = document.getElementById('passwordrepeat-error');
const button = document.getElementById('submit');

button.addEventListener('click', (event) => {

const email = document.getElementById('email').value;
const inputEmail = document.querySelector('input[name=email]');
const password = document.getElementById('password').value;
const inputPassword = document.querySelector('input[name=password]');
const passwordrepeat = document.getElementById('passwordrepeat').value;
const inputPasswordrepeat = document.querySelector('input[name=passwordrepeat]');
const aboutme = document.getElementById('textarea').value;
const checkbox = document.getElementById('checkbox').checked;
let gender;

event.preventDefault();

function getGender() {
  const man = document.getElementById('radio1');
  const woman = document.getElementById('radio2');

  if (man.checked) {
      gender = 'MAN';
  } else if (woman.checked) {
      gender = 'WOMAN';
  }
}

getGender();
   
    
    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    if (!validateEmail(email)) {
      inputEmail.style.borderColor = 'rgba(238, 36, 36, 1)';
      emailError.innerText = "Email введён некорректно";
    }
    
    if (!email) {
      inputEmail.style.borderColor = 'rgba(238, 36, 36, 1)';
      emailError.innerText = "Поле обязательно для заполнения";
    }

    if (password.length < 8) {
      inputPassword.style.borderColor = 'rgba(238, 36, 36, 1)';
      passwordError.innerText = "Пароль должен содержать не менее 8 символов";
    }

    if (password === "") {
      inputPassword.style.borderColor = 'rgba(238, 36, 36, 1)';
      passwordError.innerText = "Поле обязательно для заполнения";
    }

    if (passwordrepeat === "") {
      inputPasswordrepeat.style.borderColor = 'rgba(238, 36, 36, 1)';
      passwordrepeatError.innerText = "Пароли не совпадают";
      }

    if (passwordrepeat != password) {
      inputPasswordrepeat.style.borderColor = 'rgba(238, 36, 36, 1)';
      passwordrepeatError.innerText = "Пароли не совпадают";
    }

    else {
      if(validateEmail(email) === true && password.length >= 8 && password === passwordrepeat) {
        inputPasswordrepeat.style.borderColor = '#787878';
        inputPassword.style.borderColor = '#787878';
        inputEmail.style.borderColor = '#787878';
        emailError.innerText = '';
        passwordrepeatError.innerText = '';
        passwordError.innerText = '';

        makeUser()
        
      }
    }


    function makeUser() {

      let user = new Object();

        user.email = email;
        user.password = password;
        user.aboutme = aboutme;
        user.agree = checkbox;
        user.gender = gender;

        return console.log(user)
      }

      
})