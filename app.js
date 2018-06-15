function check() {
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let correct = 0;

    if (question1 === "Washington D.C.") {
        correct++;
}
    if (question2 ==="Donald Trump") {
        correct++;
}
    if (question3 === "Tiger Woods") {
        correct++;
    }
    
 
let messages = ["Great Job!", "That's Alright.", "You have failed the Trump Empire."];
let pictures = ["lose.png", "alright.gif", "win.gif" ];

let range ='';

    if (correct < 1) {
        range = 2;
    }
    if (correct > 0 && correct < 3) {
        range = 1;
    }
    if (correct > 2) {
        range = 0;
    }
    
 
 
 
 
// document.getElementById("after_submit").style.visibility ="visible"; 
document.getElementById("after_submit").style.color = "dark grey"; 


document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct."; 
document.getElementById("picture").src = pictures[range];
console.log(correct);
};