
// document.getElementById("btnBmi").addEventListener('click', ()=>
// {

//     let w=document.getElementById("weight").value;
// let weight=w;
// let h=document.getElementById("height").value;
// let height=h;
//     console.log(w,h)
//     let bmi =  weight / (height**2);

//     document.getElementById("output").innerHTML="Your BMI is "+ bmi;
// });


for (let i = 0; true; i++) {
    const num = parseFloat(prompt("Enter a number (negative to stop):"));
  
    if (num < 0) {
      break; // Exit the loop if a negative number is entered
    }
  
    console.log("You entered:", num);
    // Do something with the positive number here, e.g., store it in an array
  }
  
  console.log("All entered numbers:", numbers); // Assuming you stored them in an array
  