const form = document.getElementById('form');

form.addEventListener('submit',handelSubmit);

function handelSubmit(event){
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const dob = document.querySelector('#dob');
    const gender = document.querySelector('input[type = "radio"]:checked');
    const religian = document.querySelector('input[type = "checkbox"]:checked');
    const depertment = document.querySelector('#depertment');
    const feedback = document.getElementById('feedback');

event.preventDefault();

const data = {
    name:name.value,
    email:email.value,
    password:password.value,
    dob:dob.value,
    gender:gender.value,
    religian:religian.value,
    depertment:depertment.value,
    feedback:feedback.value
}

console.log(data);
}

