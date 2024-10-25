const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const phone=document.getElementById("phone");
const messages=document.getElementById("messages");

form.addEventListener('submit',e =>{
  e.preventDefault();
  checkInput();
});

function checkInput(){
  const usernamevalue = username.value.trim();
  const emailvalue = email.value.trim();
  const passwordvalue = password.value.trim();
  const phonevalue = phone.value.trim();
  const messagesvalue = messages.value.trim();

  if(usernamevalue === ''){
    setError(username,'Username cannot be blank');
  }
  else{
    setSuccess(username);
  }
  if(emailvalue === ''){
      setError(email,'Email cannot be blank');
  }
  else if(!isEmail(emailvalue))
  {
    setError(email,'Not a valid Email');
  }
  else{
    setSuccess(email);
  }

if(passwordvalue === ''){
  setError(password,'password cannot be blank');
}
else{
  setSuccess(password);
}
if(phonevalue === ''){
  setError(phone,'phone cannot be blank');
}
else{
  setSuccess(phone);
}
if(messagesvalue === ''){
  setError(messages,'message cannot be blank');
}
else{
  setSuccess(messages);
}
}
function setError(input,message){
  const f = input.parentElement;
  const small = f.querySelector('small');
  f.className = 'f error';
  small.innerText = message;
  
}
function setSuccess(input){
  const f = input.parentElement;
  f.className = 'f success'
}
function isEmail(email){
  
  return  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

















