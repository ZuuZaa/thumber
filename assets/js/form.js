const userForm = document.querySelector(".user-info");

const getFormData = (e) => {
    e.preventDefault()
    const firstName = document.querySelector("#first-name").value;
    const laststName = document.querySelector("#last-name").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;
    
    const userData = {
        firstName,
        laststName,
        email,
        subject,
        message
    }

    e.target.reset();
    console.log(userData)
}

userForm.addEventListener("submit", getFormData)
