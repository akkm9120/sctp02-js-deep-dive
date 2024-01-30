document.getElementById("btnCalculate").addEventListener("click",()=>{
    let w = document.getElementById("weight").value;
    let h = document.getElementById("height").value;
    let bmi = w/h**2 ; 
    let weightCategory;

    let result = document.getElementById("result");
    result.classList.remove("alert-danger"); 
result.classList.remove("alert-success");

    if (bmi < 18.5) {
        weightCategory = "underweight";
        // add the alert-danger class to the output which is id result
        result.classList.add("alert-danger");
    } else if(bmi <= 25) {
        weightCategory = "normal"
        // add the alert-success class to the output
        result.classList.add("alert-success");
    } else if(bmi <= 30) {
        weightCategory = "overweight";
        // add the alert-warning class to the output
        result.classList.add("alert-warning");
    } else {
        weightCategory = "obese";
        // add the alert-danger class to the output
        result.classList.add("alert-danger");
    }


    result.innerHTML = "Your BMI is " + bmi + " and you are considered to be " + weightCategory;
    result.style.display = "block";
});

document.querySelector("#result").style.display = "none";
