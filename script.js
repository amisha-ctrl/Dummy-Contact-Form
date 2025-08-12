const submit = document.querySelector("button");
const sendername = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
function sendMessage(e){
    e.preventDefault();
    const name_error = document.getElementById("name-container");
    const email_error = document.getElementById("email-container");
    name_error.innerText = "";
    name_error.style.backgroundColor = "transparent";
    name_error.style.padding = "0px";
    email_error.innerText = "";
    email_error.style.backgroundColor = "transparent";
    email_error.style.padding = "0px";
    let isValid = true;
    if(sendername.value.trim()!=="" && email.value.trim()!=="" && message.value.trim()!==""){
        if( !/^[A-Za-z\s]+$/.test(sendername.value.trim()) ){
            name_error.innerText = "Only Strings are allowed in your Name.";
            name_error.style.color = "darkred";
            name_error.style.textAlign = "center";
            name_error.style.fontSize = "12px";
            name_error.style.backgroundColor = "white";
            name_error.style.padding = "5px 15px";
            name_error.style.borderRadius = "10px";
            isValid = false;
        }
        else if( !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim()) ){
            email_error.innerText = "Invalid Email Address.";
            email_error.style.color = "darkred";
            email_error.style.textAlign = "center";
            email_error.style.fontSize = "12px";
            email_error.style.backgroundColor = "white";
            email_error.style.padding = "5px 15px";
            email_error.style.borderRadius = "10px";
            isValid = false;
        }
        else{
            submit.innerHTML = 'Sent <i class="fa-solid fa-envelope-circle-check"></i>';
            submit.disabled = true;
            sendername.value = "";
            email.value = "";
            message.value = "";
            setTimeout(() => {
                submit.innerHTML = 'Send <i class="fa-solid fa-paper-plane"></i>';
                submit.disabled = false;
            }, 3000); // 3000ms = 3 seconds
        }
    }
    else{
        alert("Please Input the Required field Correctly.");
    }
}
