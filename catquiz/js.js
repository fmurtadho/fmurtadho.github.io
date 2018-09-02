function myFunction() {
    var txt;
    var person = prompt("Please enter your name:", ".......");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person + "! I bet you can't pass this cat quiz !";
    }
    alert(txt);
}

document.getElementById("form1").onsubmit=function() {
    one = parseInt(document.querySelector('input[name = "one"]:checked').value);
    two = parseInt(document.querySelector('input[name = "two"]:checked').value);
    three = parseInt(document.querySelector('input[name = "three"]:checked').value);
    four = parseInt(document.querySelector('input[name = "four"]:checked').value);
    bonus = parseInt(document.querySelector('input[name = "bonus"]:checked').value);
    
    
    var result = one + two + three + four + bonus;
    
    document.getElementById("grade").innerHTML = result;

    var grading = [
        {score:0,feedback:"Go get a dog!", image: "https://media.giphy.com/media/mCRJDo24UvJMA/giphy.gif"},
        {score:25,feedback:"Spend more time browsing cat videos on the internet!", image: "https://media.giphy.com/media/3sbjDDsJwGGAYXfDBY/giphy.gif"},
        {score:50,feedback:"Browse more cat memes !", image: "https://media.giphy.com/media/5biwHbZQegvmbQaw2a/giphy.gif"},
        {score:75,feedback:"So close. Try again.", image: "https://media.giphy.com/media/rFkkzMyByYRkQ/giphy.gif"},
        {score:100,feedback:"Excellent! You're a cat person!", image: "https://media.giphy.com/media/ln8uIqIsfNNKM/giphy.gif"},
        {score:125,feedback:"hmm..........<br><b>ARE YOU A CAT?</b>", image: "https://media.giphy.com/media/3p7nyaE9N8Y1y/giphy.gif"}
    ];
   

   for ( var i = 0 ; i < grading.length ; i ++){
       if(result == grading[i].score) {
           result2 = grading[i].feedback + "<br /><img src='" + grading[i].image + "' width='300'  />";
       }
   }


document.getElementById("grade2").innerHTML = result2; 

return false;
}