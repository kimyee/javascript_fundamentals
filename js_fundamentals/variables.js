// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numChildren  = 0
			,	partner  = "a carrot"
			, place = "Neverland"
			, jobTitle = "rockstar";

alert("You will be a " + jobTitle + " in " + place + ", and married to " + partner + " with " + numChildren + " kids.");
			
  

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var year    = 2013
	, birthyr = 2000;

	alert(year - birthyr);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var age = 5
	, maxAge = 10
	, amount = 6
	, lifeSupply = 30  
alert("You will need " + lifeSupply + " to last you until the ripe old age of " + maxAge);

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 5
	, circumference = Math.PI * radius * 2
	, area = Math.PI * Math.pow(radius,2);

alert("The circumference is " + circumference);
alert("The area is " + area);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 20
	, convert_to_fahrenheit = celsius * 9/5 + 32
	, fahrenheit = 20
	, convert_to_celsius = (fahrenheit - 32) * 5/9;

alert(celsius + "°C is " + convert_to_fahrenheit + "°F. " + 
			fahrenheit + "°F is " + convert_to_celsius + "°C.");



