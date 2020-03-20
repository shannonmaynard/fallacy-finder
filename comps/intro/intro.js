//Henry's example

//function ShowQuiz(){
    //document.querySelector("#second-page").style.display = "none";
   // document.querySelector("#quizpage").style.display = "flex";
  //}

  function ShowSecondPage(){
    document.querySelector("#first-page").style.display = "none";
    document.querySelector("#second-page").style.display = "flex";
    document.querySelector("#quizpage").style.display = "none";
    document.querySelector("#correctbox").style.display = "none";
    document.querySelector("#body").style.display = "none";
    document.querySelector("#congratspage").style.display = "none";
    document.querySelector("#fail-page").style.display = "none";
  }

