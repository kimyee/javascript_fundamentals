// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numChildren, partner, location, job){
	alert("You will be a " + job + " in " + location + ", and married to " + partner + " with " + numChildren + " kids");
}
tellFortune(4, "Peter Pan", "San Diego", "fairy");
tellFortune(9, "Sandy", "Squidoland", "magician");
tellFortune(7, "Jamie", "Neverland", "wizard");

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYr, currentYr){
	var plusOne = currentYr - birthYr
	var minusOne = currentYr - birthYr - 1 

	alert( "You are either " + minusOne + " or " + plusOne);

};

calculateAge(1987, 2013);
calculateAge(2000, 2013);
calculateAge(2010, 2013);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amount){
	var maxAge = 50;
	var numSupply = (maxAge - age) * amount
	alert("You will need " + numSupply + " to last you until the ripe old age of " + maxAge);
}
calculateSupply(49, 10);
calculateSupply(3, 3);
calculateSupply(20, 6);

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumfrence(){
	radius = 5;
	var circumference = 2 * Math.PI * radius;

	alert("The circumference is " + circumference);
}

function calcArea(){
		// var radius = 5;
		var area = Math.PI * Math.pow(radius, 2);

	alert("The area is " + area);
}

calcCircumfrence() + calcArea();

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFahrenheit(){
	var celsius = 20;
	var convert_to_fahrenheit = celsius * 9/5 + 32;

	alert(celsius + "°C is " + convert_to_fahrenheit + "°F.");
}

function fahrenheitToCelsius(){
	var fahrenheit = 20;
	var convert_to_celsius = (fahrenheit - 32) * 5/9;

	alert(fahrenheit + "°F is " + convert_to_celsius + "°C.");
}

celsiusToFahrenheit() + fahrenheitToCelsius();

