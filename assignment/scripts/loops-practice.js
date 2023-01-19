console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i=0; i<6; i++) {  
  console.log(i);
} //had to change the 4 from the example to 6 so that the loop can get to 5.

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i=3; i<6; i++) {  
  console.log(i);
} //had to change the value of the index to start at 3

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i=2; i<11; i++) {  
  console.log(i);
}


// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');


// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array

let text = "";
for (let i = 0; i < stars.length; i += 1) {
  console.log(stars[i]);
} 


// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
let max= stars.length;
let start= 0;

while (start < max) {
  console.log(stars[start]);
  start += 1;
} 

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
let numbers = ['1', '2', '3', '4', '5'];

let maximum= numbers.length;
let startPoint= 0;

while(startPoint < maximum){
  console.log(numbers[startPoint]);
  startPoint +=1;
  
} 

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

let counter = 10;
while (counter >= 5) {
  console.log(counter);
  counter--;
}
//This took me SO long for some reason. This link helped a lot 
//https://launchschool.com/books/javascript/read/loops_iterating