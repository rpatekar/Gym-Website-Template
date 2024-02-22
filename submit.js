let submit = document.getElementById("submit");
 submit.addEventListener("click", function(){
    let name = document.getElementById("name")
    let pass = document.getElementById("pass")

    
    if(name.value == "" && pass.value == ""){
        alert("Please Enter Name and Password")
    }else{
        alert("Thanks for Connecting");
        
    }
 })