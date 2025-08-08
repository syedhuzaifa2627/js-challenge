alert("Welcome to my Number Game!")


const answer = 8
var userGuess = prompt("Enter a number between 1 to 10.")

if(userGuess == answer){
    alert("Correct Answer!")
}
else if(userGuess > answer){
    alert("You are too close")
}
else if( userGuess < answer && userGuess > 5){
    alert("You are getting closer")
}
else if(userGuess < answer && userGuess < 5){
    alert("You are very far away")
}
 
alert("Thank you for playing! \n I Appreciate that")