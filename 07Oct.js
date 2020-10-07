// assign a variable name then assign it to a new name 
// var name= "Ponatshego"
//     name="Ramagaga"
//     console.log(name) 

// split the following string : Welcome to this javascript Guide! and join it 
// var str = "Welcome to this javascript Guide!"
// var res = str.split('').splice('').join();
// console.log(str)

// multiply  all the numbers in an array by 4
// var numbers=[2,4,6,8]
// var mulplied=[]
// for (var i = 0; i < numbers.length; i++){
//     console.log(numbers[i] * 4)
//  numbers[i] * 4;

// OR


// var numbers=[2,4,6,8]
// var multiplied=[]
// for (var i = 0; i < numbers.length; i++){
// multiplied.push(numbers[i] * 4)

// }
// console.log(multiplied)


// print out numbers from 0 to 20....
    function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumTo(100) );
