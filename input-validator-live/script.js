let input = document.querySelector("#username");
// input.ariaValueMax.len
input.addEventListener('change',handleChange);

function handleChange(){
    if(input.value.length >15){
        document.querySelector("#text").innerHTML="username too long";
        document.querySelector("#text").style.color="red";
    }
    else{
       
            document.querySelector("#text").innerHTML="username ok";
            document.querySelector("#text").style.color="green";
        
    }
}