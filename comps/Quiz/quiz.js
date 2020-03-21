function NextQuiz(){
  document.querySelector("#correctbox").style.display = "none";
  document.querySelector("#body").style.display = "none";
  document.querySelector("#quizpage").style.display = "flex";
  if(s_ind > 4) {
    if(correct > 3){
      document.querySelector("#congratspage").style.display = "flex";
      document.querySelector("#fail-page").style.display = "none";
    } else {
      document.querySelector("#congratspage").style.display = "none";
      document.querySelector("#fail-page").style.display = "flex";
    }
  } else {
  s_ind++;
  document.querySelector(".title h2").innerHTML = scenarios[s_ind].title;
  document.querySelector("#q1 p").innerHTML = scenarios[s_ind].desc;
  document.querySelector("#img").src = scenarios[s_ind].img;
 
  //title and definition for the different option 1 - eg. Bandwagon and its definition
  document.querySelector(".definitions1 h3").innerHTML = scenarios[s_ind].option1;
  document.querySelector(".definitions1 p").innerHTML = scenarios[s_ind].option1def;
  
  //title and definition for the different option 2 
  document.querySelector(".definitions2 h3").innerHTML = scenarios[s_ind].option2;
  document.querySelector(".definitions2 p").innerHTML = scenarios[s_ind].option2def;
  
  //title and definition for the different option 2 
  document.querySelector(".definitions3 h3").innerHTML = scenarios[s_ind].option3;
  document.querySelector(".definitions3 p").innerHTML = scenarios[s_ind].option3def;
}
}




function CheckAnswers(){
  if (user_answer === scenarios[s_ind].answer){
  document.querySelector("#correctbox").style.display = "flex";
  document.querySelector("#quizpage").style.display = "none";
  correct_answer++;
  
  document.querySelector("#correct-page-owl img").src = scenarios[s_ind].correct.correctimage;
  document.querySelector("#words-in-correct-box").innerHTML = scenarios[s_ind].correct.correctreason;

} else {
  document.querySelector("#body").style.display = "flex";
  document.querySelector("#quizpage").style.display = "none";

  document.querySelector("#wrong-page-owl img").src = scenarios[s_ind].wrong.wrongimage;
  document.querySelector("#wrong2").innerHTML = scenarios[s_ind].wrong.wrongreason;
}
}



function ChangeBtnColorOption1(){
user_answer = 1;
document.getElementById("option1").style.backgroundColor = "#41c9ff";
document.getElementById("option2").style.backgroundColor = "#bfedff";
document.getElementById("option3").style.backgroundColor = "#bfedff";
}

function ChangeBtnColorOption2(){
  user_answer = 2;
  document.getElementById("option1").style.backgroundColor = "#bfedff";
  document.getElementById("option2").style.backgroundColor = "#41c9ff";
  document.getElementById("option3").style.backgroundColor = "#bfedff";
  }

  function ChangeBtnColorOption3(){
    user_answer = 3;
    document.getElementById("option1").style.backgroundColor = "#bfedff";
    document.getElementById("option2").style.backgroundColor = "#bfedff";
    document.getElementById("option3").style.backgroundColor = "#41c9ff";
    }