
const form=document.querySelector("#form")
const username=document.querySelector('#username')
const mail=document.querySelector('#mail')
const password=document.querySelector('#password')
const cpassword=document.querySelector('#cpassword')

form.addEventListener('submit',(s)=>{
    
    if(!validateFn()){
        s.preventDefault();
    }
})
function validateFn(){
    const usernameVal=username.value.trim()
    const mailVal=mail.value.trim()
    const passwordVal=password.value.trim()
    const cpasswordVal=cpassword.value.trim()
    let success=true;

    if(usernameVal===''){
        success=false
        setError(username,'Username is Required')
    }
    else{
        setSuccess(username)
    }
    if(mailVal==='')
    {
        success=false
        setError(mail,'Email is Required')
    }
    else if(!validateMail(mailVal)){
        success=false
        setError(mail,'Please enter a valid mail')
    }
    else{
        setSuccess(mail)
    }

    if(passwordVal===''){
        success=false
        setError(password,'Password is Required')
    }
    else if(passwordVal.length<8){
        success=false
        setError(password,'Passwors must be 8 character')
    }
    else{
        setSuccess(password)
    }
    if(cpasswordVal===''){
        success=false
        setError(cpassword,'Confirm password must be Required')
    }
    else if(cpasswordVal!==passwordVal){
        success=false
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    return success;

} 

function setError(element,message){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error');

    errorElement.innerText=message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}

function setSuccess(element){
    const inputGroup=element.parentElement;
    const errorElement=inputGroup.querySelector('.error')

    errorElement.innerText='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')

}
const validateMail=((mail)=>{
    return String(mail)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
});