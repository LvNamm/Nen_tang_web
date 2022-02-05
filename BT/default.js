var btn = document.getElementById("btn")
btn.addEventListener('click',click_determine);
function click_determine(){
    var question1 = document.getElementById("question1");
    var answer1 = question1.options[question1.selectedIndex].value;
    var question2 = document.getElementById("question2");
    var answer2 = question2.options[question2.selectedIndex].value;
    var question3 = document.getElementById("question3");
    var answer3 = question3.options[question3.selectedIndex].value;
    var img = document.getElementById("img");
    var tianw = document.getElementById("title-answer");
    var teanw = document.getElementById("text_anwser");
    if(answer1==question1.options[1].value && answer2==question2.options[1].value && answer3==question3.options[1].value){
        var tianw = document.getElementById("title-answer");
        tianw.textContent = "You are Human";
        var teanw = document.getElementById("text_anwser");
        teanw.textContent = "Well, you look like a human";
        img.src ="human.jpg";
    }
    else if(answer1==question1.options[0].value && answer2==question2.options[0].value && answer3==question3.options[2].value){
        tianw.textContent = "You are Alien";
        teanw.textContent = "Well, you look like a Alien";
        img.src ="alien.jfif";
    }
    else{
        tianw.textContent = "you are truly bizarre person";
        teanw.textContent = "?????????????????";
        img.src ="shocked.jpg";
    }
}