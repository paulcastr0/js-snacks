let word1 = prompt("The first word is: ");
let word2 = prompt("The second word is : ");

if(word1.lenght > word2.lenght) {
    console.log(word2 + word1)
}else if(word2.length == word1.length){
    console.log("The word has the same length. Try again!")
}else{
    console.log(word1 + word2)
}
