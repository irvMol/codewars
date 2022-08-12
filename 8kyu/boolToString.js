// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
 var word
   
 if (!bool)
 {
    word = "no"
 }

 else word = "yes"
console.log(word) 
}

boolToWord(false)