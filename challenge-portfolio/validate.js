function handleFormSubmit(event){
    event.preventDefault();

    const name = document.getElementById("nome");
    const email = document.getElementById("email");
    const subject = document.getElementById("assunto");
    const message = document.getElementById("mensagem");

    const nameError =document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const subjectError = document.getElementById("subject-error");
    const messageError = document.getElementById("message-error");

    let isValid = true;

    if(name.value.trim() === ''){
        nameError.innerText = "Não seja timído! Por favor, me diga o seu nome.";
        isValid = false;
    } else {
        nameError.innerText = "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value.trim() === ''){
        emailError.innerText = "Como vou te responder sem saber qual é o seu email?";
        isValid = false;
    }else if(!emailRegex.test(email.value)){
        emailError.innerText = "Por favor, insira um email válido";
        isValid = false;
    }else{
        emailError.innerText = ""
    }

    if(subject.value.trim() === ''){
        subjectError.innerText = "Se não tiver assunto eu vou achar que é spam e vou apagar sem abrir.";
        isValid = false;
    }else{
        subjectError.innerText = "";
    }

    if(message.value.trim() === ''){
        messageError.innerText = "Me conte sobre o que você quer falar!";
        isValid = false;
    }else {
        messageError.innerText = ""
    }
    
    if(!isValid){
        return;
    }

    name.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';

    console.log("Formulário ok")
}

document.querySelector(".formcontato__form").addEventListener("submit", handleFormSubmit);