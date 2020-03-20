function NextQuiz(){
  s_ind++;
  document.querySelector("#quizpage #title h2").innerHTML = scenarios[s_ind].title;
  document.querySelector("#q1 p").innerHTML = scenarios[s_ind].question;
  document.querySelector("#owl_quiz img").src = scenarios[s_ind].image;
  document.querySelector("#option1 h3").innerHTML = scenarios[s_ind].option1;
  document.querySelector("#text_def p").src = scenarios[s_ind].option1def;
}

function ChangeBtnColorOption1(){
document.getElementById("option1").style.backgroundColor = "#41c9ff";
document.getElementById("option2").style.backgroundColor = "#bfedff";
document.getElementById("option3").style.backgroundColor = "#bfedff";
}

function ChangeBtnColorOption2(){
  document.getElementById("option1").style.backgroundColor = "#bfedff";
  document.getElementById("option2").style.backgroundColor = "#41c9ff";
  document.getElementById("option3").style.backgroundColor = "#bfedff";
  }

  function ChangeBtnColorOption3(){
    document.getElementById("option1").style.backgroundColor = "#bfedff";
    document.getElementById("option2").style.backgroundColor = "#bfedff";
    document.getElementById("option3").style.backgroundColor = "#41c9ff";
    }