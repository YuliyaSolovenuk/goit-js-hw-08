
import throttle from 'lodash.throttle';


const formEl = document.querySelector('.feedback-form')

const {email, message} = formEl.elements;

const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};


formEl.addEventListener('submit', onFormSubmit);

formEl.addEventListener('input', throttle(onFormInput, 500))


 populateInput()

 function onFormInput(ev) {
    
    formData[ev.target.name] = ev.target.value
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))

 }


function onFormSubmit(ev) {
    ev.preventDefault();

    if (!email.value  || !message.value.trim()) {
        return alert("Please fill in the blanks!")
    }
    console.log({email: email.value, message: message.value})

    ev.target.reset();

    localStorage.removeItem(STORAGE_KEY)

    formData = {}
}


 function populateInput(ev) {
    if(formData) {
        email.value = formData.email || ""
        message.value = formData.message || ""
    }
   // console.log('empty')
 }