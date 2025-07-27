let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const compMove=document.querySelector("#comp-move");

const getCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randInx=Math.floor(Math.random()*3);
    return options[randInx];
    
}

const drawGame=()=>{
    msg.innerHTML="Game was Draw.";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerHTML=userScore;
        msg.innerHTML=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="teal";
    }else{
        compScore++;
        compScorePara.innerHTML=compScore;
        msg.innerHTML=`You Lost! Your ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="orange";
    }
};
const playGame=(userChoice)=>{
    const compChoice=getCompChoice();
    const compChoiceCap=compChoice.toUpperCase();
    compMove.innerHTML=`Computer's Choice: ${compChoiceCap}`;
    if(userChoice==compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice=="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice=="paper"){
            userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});