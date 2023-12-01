//we are creating one object for images
const handOptions={
    "rock":"/RockImg.png",
    "scissor":"/ScissorImg.png",
    "paper":"/paperImg.png",
}

let UserScore=0;
let ComputerScore=0;

//function for yourhandoption
const pickUserHand = (hand) =>{
   
   //to hide current page 
  let hands= document.querySelector(".hand");
  hands.style.display = "none";
    
  //to show the next page
  let contest=document.querySelector(".contest");
  contest.style.display="flex";
    
    //set user image
  document.getElementById("userpickimage").src=handOptions[hand];
   let cpHand=pickComputerHand();
   referee(hand,cpHand);


    
}



const pickComputerHand = (hand) => {
    let hands = ["rock","scissor","paper"];
    let cpHand=hands[Math.floor(Math.random() * hands.length)];

    //set computer image
    document.getElementById("computerpickimage").src=handOptions[cpHand];
    return cpHand;
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissors") {
    setDecision("YOU LOSE!");
  }
  if (setDecision == "YOU WIN!"){
    let winnercup=document.querySelector(".nextBtn");
    winnercup.style.display="flex";
    
  }
  if(setDecision == "COMPUTER WIN!"){
    let winnercup=document.querySelector(".nextBtn");
    winnercup.style.display="flex";
    
  }
  
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    yourScore(UserScore + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissors") {
    setDecision("YOU WIN!");
    yourScore(UserScore + 1);
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "scissors") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissors" && cpHand == "rock") {
    setDecision("YOU LOSE!");
  }
  if(userHand=="rock" && cpHand=="paper"){
    setDecision("COMPUTER WIN!");
    compScore(ComputerScore + 1);
    
  }
  if(userHand=="paper" && cpHand=="scissor"){
    setDecision("COMPUTER WIN!");
    compScore(ComputerScore + 1);
  }
  if(userHand=="scissor" && cpHand=="rock"){
    setDecision("COMPUTER WIN!");
    compScore(ComputerScore + 1);
  }
};



const setDecision = (decision) =>{
  document.querySelector(".decision h1").innerText=decision;
  
}
function yourScore(newscore) {
  UserScore = newscore;
  document.querySelector(".y-count").innerText = newscore;
  
}
const compScore=(newscore)=>{
  document.querySelector(".c-count").innerText=score;
  compScore=newscore;
}
const replay= () =>{
  let contest=document.querySelector(".contest");
  contest.style.display="none";

  let hands= document.querySelector(".hand");
  hands.style.display="flex";
  let hurraypage= document.querySelector(".hurraypage");
  hurraypage.style.display="none";
  let container=document.querySelector(".container");
  container.style.display="none";
}
const rule = () =>{
  let rulebox = document.querySelector(".rulebox");
  rulebox.style.display="flex";
}
const crossBtn = () =>{
  let rulebox = document.querySelector(".rulebox");
  rulebox.style.display="none";
}
const nextBtn = () =>{
  let head= document.querySelector(".head");
  head.style.display="none";
  let hand= document.querySelector(".hand");
  hand.style.display="none";
  let contest= document.querySelector(".contest");
  contest.style.display="none";
  let hurraypage= document.querySelector(".hurraypage");
  hurraypage.style.display="flex";
  let container=document.querySelector(".container");
  container.style.display="flex";
}
