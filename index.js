var s_ind = 0;
var user_answer = 0;
var correct_answer = 0;
var scenarios = [
  
  //quiz 1
  {
    title:"Scenario 1",
    desc:"My sixth-grade teacher said that all old people are bad drivers. So it must be true.",
    img:"comps/Picture/imgs/carcrash.jpg",

    answer:2,
    option1:"Bandwagon",
    option1def:"Believing that the opinion of the majority is always right. Because everyone believes it so you should too.",
    option2:"Genetic Fallacy",
    option2def:"When you judge someone based on their origin (who they are, where they come from), instead of relying on actual evidence",
    option3:"Appeal to Fear",
    option3def:"When fear, which isn’t based on evidence, is used to get others to accept something or do something.",
    
    wrong:{
      wrongimage:"comps/wrong/owl3.png",
      wrongtitle:"Wrong!",
      wrongreason:`This is the <B>‘Genetic'</B> fallacy! <br><br>
      Mr. Harris is teaching his student
      that all old people are bad drivers. Perhaps in his experience
      he’s seen many old people with bad driving. He’s judged them 
      based on their genetics!`
    },
    correct:{
      correctimage:"comps/wrong/owl1.png",
      correcttitle:"Correct!",
      correctreason:`This is the <B>‘Genetic'</B> fallacy! <br><br>
      Mr. Harris is teaching his student
      that all old people are bad drivers. Perhaps in his experience
      he’s seen many old people with bad driving. He’s judged them 
      based on their genetics!`
    }

  },

    //quiz 2
  {
    title:"Scenario 2",
    desc:"A mother tells her children to go to bed on time or else they will get haunted by the boogie man.",
    img:"comps/Picture/imgs/Boogie.jpg",
    answer:3,
    
    option1:"Two Wrongs Make a Right",
    option1def:"When someone argues that it's okay for you to do something wrong as long as somebody else did a wrong thing first.",
    option2:"Genetic Fallacy",
    option2def:"When you judge someone based on their origin (who they are, where they come from), instead of relying on actual evidence",
    option3:"Appeal to Fear",
    option3def:"When fear, which isn’t based on evidence, is used to get others to accept something or do something.",
    
    wrong:{
      wrongimage:"comps/wrong/owl3.png",
      wrongtitle:"Wrong!",
      wrongreason:`This is the <B>‘Apeal to Fear’ fallacy!</B> <br><br>
      The mother is using fear to ger her son to do what she wants; go to bed on time! With the son fearing the arrival of a boogie man if he doesn't go to sleep on time, the mother's appeal to fear has worked, even though there is no boogieman!`
    },
    correct:{
      correctimage:"comps/wrong/owl1.png",
      correcttitle:"Correct!",
      correctreason:`The mother is using fear to ger her son to do what she wants; go to bed on time! With the son fearing the arrival of a boogie man if he doesn't go to sleep on time, the mother's appeal to fear has worked, even though there is no boogieman!`
    }
  },
  
    //quiz 3
  {
    title:"Scenario 3",
    desc:"Timmy's father tells him not to hit others, but if he gets hit first, its okay.",
    img:"comps/Picture/imgs/twowrongs.jpg",
    answer:3,
    
    option1:"Middle Ground",
    option1def:"Believing that a compromise between two extreme options or beliefs, must be the truth. Meeting in the middle of an argument.",
    option2:"Personal Incredulity",
    option2def:"Because something is difficult to understand, you think it's probably not true.",   
    option3:"Two Wrongs Make a Right",
    option3def:"When someone argues that it's okay for you to do something wrong as long as somebody else did a wrong thing first.",
    
    wrong:{
      wrongimage:"comps/wrong/owl3.png",
      wrongtitle:"Wrong!",
      wrongreason:`This is the <B>‘Two Wrongs Make a Right’ fallacy!</B> <br><br>
      Timmy’s father is teaching his son that violence should be met with violence because the other started it first. He’s teaching him that if someone does him wrong first, it’s okay to respond the same way. However, two wrongs don't make a right!`
    },
    correct:{
      correctimage:"comps/wrong/owl1.png",
      correcttitle:"Correct!",
      correctreason:`This is the <B>‘Two Wrongs Make a Right’ fallacy!</B> <br><br>
      Timmy’s father is teaching his son that violence should be met with violence because the other started it first. He’s teaching him that if someone does him wrong first, it’s okay to respond the same way. However, two wrongs don't make a right!`
    }
  },

    //quiz 4
  {
    title:"Scenario 4",
    desc:"Jane ignores an email that says she should forward it or she will be unlucky. On the way home that day she had a flat tire. She wishes she had sent that email.",
    img:"comps/Picture/imgs/question.jpg",
    answer:1,
    
    option1:"Questionable Cause",
    option1def:`When someone wrongly says that one thing caused another, just because the events happened close together.`,
    option2:"Appeal to Authority",
    option2def:`Believing that because someone with a high authority says something, it must be true.`,   
    option3:"Bandwagon",
    option3def:"Believing that the opinion of the majority is always right. Because everyone believes it so you should too.",
    
    wrong:{
      wrongimage:"comps/wrong/owl3.png",
      wrongtitle:"Wrong!",
      wrongreason:`This is the <B>‘Questionable Cause’ fallacy!</B> <br><br>
      Jane thinks that, because she didn’t listen to the email, she actually became unlucky and this caused her to have a flat tire. The truth is probably much more normal, like she ran over something sharp and punctured a tire. The email causing her to have a flat tire is very questionable!`
    },
    correct:{
      correctimage:"comps/wrong/owl1.png",
      correcttitle:"Correct!",
      correctreason:`This is the <B>‘Questionable Cause’ fallacy!</B> <br><br>
      Jane thinks that, because she didn’t listen to the email, she actually became unlucky and this caused her to have a flat tire. The truth is probably much more normal, like she ran over something sharp and punctured a tire. The email causing her to have a flat tire is very questionable!`
    }
  },

  
    //quiz 5
  {
    title:"Scenario 5",
    desc:"Sally likes to read instead of playing sports. Lately, though, she’s been made fun of and her friends call her a nerd for reading. So, she decides to quit reading and play sports instead.",
    img:"comps/Picture/imgs/Bandwagon.jpg",
    answer:1,
   
    option1:"Bandwagon",
    option1def:"Believing that the opinion of the majority is always right. Because everyone believes it so you should too.",
    option2:"Personal Incredulity",
    option2def:"Because something is difficult to understand, you think it's probably not true.",   
    option3:"Appeal to Authority",
    option3def:`Believing that because someone with a high authority says something, it must be true.`,
    
    wrong:{
      wrongimage:"comps/wrong/owl3.png",
      wrongtitle:"Wrong!",
      wrongreason:`This is the <B>‘Bandwagon’ fallacy!</B> <br><br>
      Sally has given in to the opinion of the majority. She assumes that because there are many people who think her hobby is uncool, it must be true. So she changes her hobby to what many people consider a cool hobby. She’s jumped on the bandwagon!`
    },
    correct:{
      correctimage:"comps/wrong/owl1.png",
      correcttitle:"Correct!",
      correctreason:`This is the <B>‘Bandwagon’ fallacy!</B> <br><br>
      Sally has given in to the opinion of the majority. She assumes that because there are many people who think her hobby is uncool, it must be true. So she changes her hobby to what many people consider a cool hobby. She’s jumped on the bandwagon!`
    }
  }

]




