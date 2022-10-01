
function rst(){
    document.getElementById('registration').reset()

    document.getElementById("nameValid").style.display='none';
    document.getElementById("nameInValid").style.display='none';
    document.getElementById("lastNameValid").style.display='none';
    document.getElementById("lastNameInValid").style.display='none';
    document.getElementById("emailValid").style.display='none';
    document.getElementById("emailInValid").style.display='none';
    document.getElementById("passwordValid").style.display='none';
    document.getElementById("passwordInValid").style.display='none';
    document.getElementById("confirmPasswordValid").style.display='none';
    document.getElementById("confirmPasswordInValid").style.display='none';
    document.getElementById("checkValid").style.display='none';
    document.getElementById("checkInValid").style.display='none';
    
}
function checkd(){
    let name1 = document.getElementById("name").value;
    let name2 = document.getElementById("lastName").value;
    let email = document.getElementById("emaill").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let check = document.getElementById("check").checked;
 
     let noError = true;
    if(name1.length>2 && !(name1.isNaN))
    {
        document.getElementById("nameValid").style.display='block';
        document.getElementById("nameInValid").style.display='none';
        
    }
    else
    {
        noError= false;
        document.getElementById("nameInValid").style.display='block';
        document.getElementById("nameValid").style.display='none';
    }

    if(name2.length>2 && !(name2.isNaN))
    {
        document.getElementById("lastNameValid").style.display='block';
        document.getElementById("lastNameInValid").style.display='none';
    
    }
    else
    {
        noError = false;
        document.getElementById("lastNameInValid").style.display='block';
        document.getElementById("lastNameValid").style.display='none';
    }
   if(email.includes('@') && email.includes('.') && 
      email.indexOf('@')!=0 && email!= "" && 
      email.lastIndexOf('.')<email.length-2) 
     {
        
        document.getElementById("emailValid").style.display='block';
        document.getElementById("emailInValid").style.display='none';
        
     }
   else
   {
      noError = false;
    document.getElementById("emailValid").style.display='none';
    document.getElementById("emailInValid").style.display='block';
   }
   

//    password conditions
      let passCheck = false;
    if(password.length>=8 && (password.includes('@') || password.includes('$') ||
       password.includes('#')) && (password.includes('0') || password.includes('1') ||
       password.includes('2') || password.includes('3') || password.includes('4') ))
       { 
          passCheck = true;
        document.getElementById("passwordValid").style.display='block';
        document.getElementById("passwordInValid").style.display='none';

       }
    else
    {   noError = false;
        document.getElementById("passwordValid").style.display='none';
        document.getElementById("passwordInValid").style.display='block';
    }

    // confirmPassword condintion
    if(passCheck && confirmPassword===password)
    {
        document.getElementById("confirmPasswordValid").style.display='block';
        document.getElementById("confirmPasswordInValid").style.display='none';
    }
    else
    {
        noError = false;
        document.getElementById("confirmPasswordValid").style.display='none';
        document.getElementById("confirmPasswordInValid").style.display='block';
    }
    if(check)
    {
        document.getElementById("checkValid").style.display='block';
        document.getElementById("checkInValid").style.display='none';
    }
    else
    {    noError = false;
        document.getElementById("checkValid").style.display='none';
        document.getElementById("checkInValid").style.display='block';   
    }

    if(noError)
    {
        window.alert("Your details have been saved successfully!")
        rst();
    }
}