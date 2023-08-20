var userEmailLogin = document.getElementById('userEmailLogin');
var userPasswordLogin = document.getElementById('userPasswordLogin');
var loginBtn = document.getElementById('loginBtn');
var message = document.getElementById('message');
var dataContainer = []
if (localStorage.getItem("users") != null) {
    dataContainer = JSON.parse(localStorage.getItem("users"))
}
function loginup() {
    if (checkInput() == true) {
        message.innerHTML = "free";
        message.classList.replace('d-none', 'd-block');
        message.style.color = "red";
    } else {
        if (checklist() == true) {
            window.location.href = 'home.html'
        } else {
            message.innerHTML = "falid";
            message.classList.replace('d-none', 'd-block');
            message.style.color = "red";
        }
    }
    function checklist() {
        for (var i = 0; i < dataContainer.length; i++) {
            if (dataContainer[i].email == userEmailLogin.value && dataContainer[i].password == userPasswordLogin.value) {
                return true;
            }
        }
    }
    function checkInput() {
        if (userEmailLogin.value == '' || userPasswordLogin.value == '') {
            return true
        } else {
            return false
        }
    }
    loginBtn.addEventListener('click', loginup)