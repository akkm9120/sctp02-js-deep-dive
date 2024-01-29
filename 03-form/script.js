
document.getElementById("btnBmi").addEventListener('click', ()=>
{

    let w=document.getElementById("weight").value;
let weight=w;
let h=document.getElementById("height").value;
let height=h;
    console.log(w,h)
    let bmi =  weight / (height**2);

    document.getElementById("output").innerHTML="Your BMI is "+ bmi;
});

let __x__;