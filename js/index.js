var userName=document.getElementById('userName');
var userEmail=document.getElementById('userEmail');
var userPassword=document.getElementById('userPassword');
var signUpButton= document.getElementById('signUpButton');
var message= document.getElementById('message');
var dataContainer=[];
if(localStorage.getItem("users") !=null){
    dataContainer=JSON.parse(localStorage.getItem("users"))
}
console.log(dataContainer);
function Signup(){
    var data ={
        name:userName.value ,
        email:userEmail.value,
        password:userPassword.value
    }
    if( checkInput()==true){
        alertMessage("faild","white","green")
    }else
    {
        if(validtionName()||validtionEmail()==true){
            if( emailUsers()==true){
                alertMessage("exit email","white","green")
            }else{
                dataContainer.push(data);
                localStorage.setItem("users",JSON.stringify(dataContainer))
                alertMessage("Succed","white","green");
                clearForm()
            }
        }else{
            alertMessage("exit email","white","green")
        }
       
    }   
}
function alertMessage(text,colorbac,color){
    message.innerHTML=text;
    message.classList.replace('d-none','d-block');
    message.style.color=color;
    message.style.backgroundColor=colorbac;
}
function clearForm(){
    userName.value="";
    userEmail.value="";
    userPassword.value="";
}
function checkInput(){
    if( userName.value ==''|| userEmail.value==''||userPassword.value==''){
        return true
    }else{
        return false
    }
}
function emailUsers(){
    for(var i=0;i<dataContainer.length;i++){
        if(dataContainer[i].email==userEmail.value){
            return true
        }else{
            return false;
        }
    }
}
function validtionName(){
    var regex=/^[A-Z][a-z]{2,}$/
    return regex.test( userName.value);
}
function validtionEmail(){
    var regex=/^[A-Z][a-z]{2,}[0-9]{2,}\@gmail\.com$/
    return regex.test(userEmail.value);
}

signUpButton.addEventListener('click',Signup)


