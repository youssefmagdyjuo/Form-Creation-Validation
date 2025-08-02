document.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById('registration-form');
    form.addEventListener('submit',(e)=>{
        const feedbackDiv = document.getElementById('form-feedback');
    e.preventDefault();
    const usernameInput = document.getElementById('username').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    let isVaild = true;
    const messages  = [];
    if(usernameInput === '' || usernameInput.length < 3){
        messages.push('Username must be at least 3 characters long');
        isVaild = false;}
    if(emailInput === '' || !emailInput.includes('@') || !emailInput.includes('.')){
        messages.push('Please enter a valid email address');
        isVaild = false;}
    if(passwordInput === '' || passwordInput.length < 8){
        messages.push('Password must be at least 8 characters long');
        isVaild = false;}
        feedbackDiv.style.display = 'block';
    if(isVaild){
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
    } else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = '#dc3545';
    }
})
})
