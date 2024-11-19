const formData = document.forms["contact-form"]
const submitButton = document.getElementById("contact-button")

document.addEventListener("DOMContentLoaded", (e) => {
    const {fullName, phone, email, message} = getFormData()
    const isFormValid = fullName && phone && email && message;
    submitButton.disabled = !isFormValid;

    if (submitButton.disabled) {
        submitButton.classList.remove("bg-copper");
        submitButton.classList.add("bg-slate-300");
    } else {
        submitButton.classList.remove("bg-slate-300");
        submitButton.classList.add("bg-copper");
    }
})

formData.addEventListener("input", (e) => {
        const {fullName, phone, email, message} = getFormData()

        if (fullName && phone && email && message) {
            submitButton.disabled = false;
            submitButton.classList.remove("bg-slate-300");
            submitButton.classList.add("bg-copper");
        }
    })

formData.addEventListener("submit", (e) => {
        e.preventDefault();
        const {fullName, phone, email, message} = getFormData()
        const result = validateForm()

        if (result) {
            alert("Form submitted successfully.")
            console.log(`Full Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`);
            formData.reset()
        } else {
            alert("Invalid email or password");
        }
    })


function validateForm() {
        const {fullName, phone, email, message} = getFormData()
        let phoneRegex = /^\(?(\d{2})\)?[\s-]?\d{4}[\s-]?\d{4}$/
        let emailRegex = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/

        return !(!phoneRegex.test(phone) || !emailRegex.test(email));
    }

function getFormData(){
        const fullName = formData["full-name"].value;
        const phone = formData["phone"].value;
        const email = formData["email"].value;
        const message = formData["message"].value;

        return {
            fullName,
            phone,
            email,
            message,
        }
    }


