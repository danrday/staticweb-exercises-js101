/*

var seconds = 1;
var secPerMin = 60;
var minPerHour = 60;
var hourPerDay = 24;
var dayPerYear = 365;

console.log(((secPerMin*minPerHour*hourPerDay*dayPerYear)*10) + " seconds in a decade");

var hoursPerYear = hourPerDay*dayPerYear;

console.log("One year in hours:", hoursPerYear) ;

var ageInSeconds = 29*secPerMin*minPerHour*hourPerDay*dayPerYear;

console.log("How many seconds old I am:", ageInSeconds);

if (ageInSeconds > 1000000000000000) {
  console.log("I'm Old");
} else {
  console.log("I'm Young")
}


*/

for (var i = 0; i < 100; i+=10) {
  console.log(i)
}



var newArray = [];

for (var i = 8; i > 1  ; i/=2) {
  console.log(i);
  newArray.push(i);
}

console.log(newArray);



var secondArray = [];

for (i = 100; i > 0; i--) {
  if ((i % 2) > 0) {
  secondArray.push(i);
  }
  else {
    secondArray.unshift(i);
  }
}

console.log(secondArray);
