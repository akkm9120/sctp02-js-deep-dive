let button = document.getElementById("btnchangeTheme");

button.addEventListener('click',()=>{
    if( document.querySelector("body").style.backgroundColor == "white"){
    document.querySelector("body").style.backgroundColor ="black";
    document.querySelector("body").style.color= 'white';
    document.querySelector("#container").style.backgroundColor= "white";}
    else{
        document.querySelector("body").style.backgroundColor ="white";
        document.querySelector("body").style.color= 'black';
        document.querySelector("#container").style.backgroundColor= "violet ";
    }
});


let newdiv = document.createElement("div")
newdiv.setAttribute("id","container");


document.body.appendChild(newdiv);
document.querySelector("#container").style.height= "50vh";
document.querySelector("#container").style.width="50vw"; 
document.querySelector("#container").style.backgroundColor="violet";
// document.querySelector("#container").addEventListener("mouseover",()=>{
//     document.querySelector("#container").backgroundColor = "yellow";
// })


alart('Hello world');