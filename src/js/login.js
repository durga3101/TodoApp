function validate() {
    var uname=document.forms["myForm"]["username"].value;
    var pwd=document.forms["myForm"]["password"].value;
   
    
    if(isNull(uname)){
        alert("Enter username");
        return false;
    }
    if(isNull(pwd)){
        alert("Enter password");
        return false;
    }
    else{
        return true;
    }
    function isNull(field) {
        return field.length == 0;
    }
}
