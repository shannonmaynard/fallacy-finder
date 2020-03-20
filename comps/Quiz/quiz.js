function NextQuiz(){
  s_ind++;
  document.querySelector("#quizpage #title").innerHTML = scenarios[s_ind].title;
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