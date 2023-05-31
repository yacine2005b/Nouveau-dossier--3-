const containerEl = document.getElementById('container')
const leftEl = document.getElementById('left')
const rightEl = document.getElementById('right')

const userEmailEl = document.getElementById('user-email')
const invalidEmailEl = document.getElementById('invalid-email')
const emailInputEl = document.getElementById('email')
const submitBtnEl = document.getElementById('submit-btn')

const confirmedMessageEl = document.getElementById('confirmed-message')
const dismissMessageEl = document.getElementById('dismiss-message')

function formSuccess() {
    confirmedMessageEl.classList.add('active')
    containerEl.classList.add('success')
    leftEl.style.display = 'none'
    rightEl.style.display = 'none'
}
function validateEmail(email) {
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
     return emailRegex.test(email)
}
submitBtnEl.addEventListener('click',(e) => {
    e.preventDefault()
    const email = emailInputEl.value.trim()
    if(validateEmail(email)) {
        formSuccess()
        userEmailEl.innerText = email
        emailInputEl.value = ''
        invalidEmailEl.classList.remove('active')
        emailInputEl.classList.remove('active')
    }else {
        invalidEmailEl.classList.add('active')
        emailInputEl.classList.add('active')
    }
})
dismissMessageEl.addEventListener('click',() => {
    leftEl.style.display = 'block'
    rightEl.style.display = 'block'
    containerEl.classList.remove('success')
    confirmedMessageEl.classList.remove('active')
})
