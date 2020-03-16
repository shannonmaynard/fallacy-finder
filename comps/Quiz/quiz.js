function NextQuiz(){
  s_ind++;
  document.querySelector("#quizpage #title").innerHTML = scenarios[s_ind].title;
}