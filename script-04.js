//Create function that takes in one argument that is passed through a conditional statement with if, else ifs, and else. 
//Return the result as an alert or console.log. 
//Test all of your conditions to make sure you can receive all of your results back.

let num = 1;

function guessWho(value) {
    if (num == 1) {
        return("Sienna");
    } 
    else if (num == 2) {
        return("Idris");
    } 
    else if (num == 3) {
        return("Valentina");
    } 
    else {
        return("Theres only 3 people Relevant to me -.-");
    }
}

console.log(guessWho(1));
// console.log(guessWho(2));
// console.log(guessWho(3));
// console.log(guessWho(4));

