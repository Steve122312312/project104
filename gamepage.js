// random value generated
var y =  Math.floor(Math,random() * 10 +1)
  var guess= 1

  function submit(){
    guess = y
  }
// counting the number of guesses
// made for correct Guess

  
// function for number guessed by user     

if(x==y){
    alert("CONGRATULATIONS!!!"+playername+"YOU GUESSED IT RIGGHT IN"+ guess +"GUESS")

}
else if(x > y){
    guess++
    alert("OOPS SORRY!! TRY A SMALLER NUMBER")
}
else{
    guess++
    alert("OOPS SORRY!! TRY A GREATER NUMBER")
}
function playagain(){
    y =Math.floor(Math.random() * 10 + 1)
}