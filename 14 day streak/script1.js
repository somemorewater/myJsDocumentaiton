const input = document.querySelector("#username"),
h2 = document.querySelector("#username-output");



input.addEventListener("keyup", display);

function  display() {
    localStorage.setItem('user', input.value);
    let userDetail = localStorage.getItem("user");
    h2.innerHTML = userDetail;
    return userDetail;
}

h2.innerHTML = display();