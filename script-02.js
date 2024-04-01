//Create a conditional statement that compares two numbers. 
//You can choose if those numbers will be equal, less than, greater than, less than or equal to, or greater than or equal to each other. 
//Include an if, else if, and else statement. 
//Create an alert that gives your user feedback based on the number. 
//Test your statement with different numbers to make sure all alerts work.

let num1 = 10;
//let num1 = 2;
//let num1 = 12;
let num2 = 10;

	if (num1 === num2){
		alert ("Correcto-Mundo! Numbers are Equal");
	}
	else if (num1 > num2){
		alert ("Whoops, numbers do not match! Your first number is too big.");
	}
	else if (num1 < num2){
		alert ("Your first number is too small, try again pookie!");
	}
	else if (num1 >= num2){
		alert ("Your first number is greater than or equal to num2 broski, try again.");
	}
	else if (num1 <= num2){
		alert ("your first number is less than or equal to number 2, try again please!");
	}
	else {
		alert ("Woah.. i can't even compare these numbers. lolz try again maybe ?");
	}
