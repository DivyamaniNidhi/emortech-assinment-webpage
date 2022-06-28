function checkPassword(event){
    var newP = document.getElementById("pwd1").value;
    var confirmP = document.getElementById("pwd2").value;
    var error = document.getElementById("error");
    
    var letters=  /^[A-Za-z]+$/;


if(newP!="" && confirmP!=""){
    if(newP==confirmP){
        if(!letters.test(newP)){
            error.textContent = "Password must contain alphabet characters only."
            return false;
        }
        else if(newP.length<8){
            error.textContent = "Password must have atleast 8 characters."
            Form.newP.focus();
            return false;
        }
            
    }
    else{
        error.textContent = "Passwords do not match."
        return false;
    }
}
else{
    error.textContent = "All fields are required."
    return false;
}

newP = ""
    confirmP = ""
    document.getElementById("formPage").style.display = "none"
    document.getElementById("resultPage").style.display = "block"


}
