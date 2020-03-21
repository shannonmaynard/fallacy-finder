function NextQuiz(){
  s_ind++;
  document.querySelector("#title h2").innerHTML = scenarios[s_ind].title;
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