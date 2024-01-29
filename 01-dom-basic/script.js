let button = document.getElementById("btnchangeTheme");

button.addEventListener('click',()=>{
    document.querySelector("body").style.backgroundColor ="black";
    document.querySelector("body").style.color= 'white';
});

alart('Hello world');