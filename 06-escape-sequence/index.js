const prompt = require("prompt-sync")();

// let name = prompt("What is your Name : ");

// console.log(`Dear ${name}:
// I can't believe that it's been more than six months since we spoke. You remember the song?
// Should auld acquaintance be forgot,
// and never brought to mind?
// Should auld acquaintance be forgot,
// and auld lang syne?

// "Merry X'mas and a Happy New Year!" 
// `);

// let input = prompt("Enter a date ( YYYY-MM-DD ) : ");
// console.log(`The Year entered is ${input.slice(0,4)}`)


// let input = prompt('Enter a file with extension : ');

// console.log(`your file extenstion is ${input.slice(-4,)}`);


// let string = "ma ma ma ma meee ya";

// console.log(`ma in your string appear : ${string.includes('ma')} times`);


// let isweekEnd = prompt('Is it weekend (y/n) : ').toUpperCase();

// if(isweekEnd.trim()[0]=='Y')
// {
//     console.log('Okay Beer Time.')
// }


//     let numbers = [4, 12, 8, 15, 7, 10, 11, 13, 21];
// for (let n of numbers) {
//     if (n % 3 == 0) {
//         console.log(n);
//     }
// }


// let x = [4, 12, 8, 15, 7, 10, 11, 13, 21];

// for (let y of x){
//   if( y % 3 == 0){
//     console.log(y);
//   }   
// }
    
function alarm(){
    console.log('REMINDER!');

}

setTimeout(alarm,2000);