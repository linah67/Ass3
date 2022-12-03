function computerPlay(){
    let choice=Math.floor(Math.random()*2);
    //console.log(choice);
    if(choice==0){
        return "Rock";
    }else if(choice==1){
        return "Paper";
    }else{
        return "Scissors";
    }
}
var computerSelection=computerPlay();
//console.log(computerSelection);
var playersSel=prompt("please choose Rock, paper or scissors").toLowerCase()
var result=""
function Plays(playersSel,computerSelection){
    console.log(`computer chose ${computerSelection}`)
    if(playersSel=="rock"){
        if(computerSelection=="Paper"){
            result="Computer Won!";
        }else if(computerSelection=="Scissors"){
            result="Player Won!";
        }else{
            result="Tie";
        }
    }else if(playersSel=="scissors"){
        if(computerSelection=="Paper"){
            result="Player Won!";
        }else if(computerSelection=="Scissors"){
            result="Tie";
        }else{
            result="Computer Won!";

        }
    }else if(playersSel=="paper"){
        if(computerSelection=="Paper"){
            result="Tie"
        }else if(computerSelection=="Scissors"){
            result="Computer Won!";
        }else{
            result="Player Won!";
        }
    }
    return result;
}
console.log(Plays(playersSel,computerSelection))

function game(){
    var computerScore=0;
    var playerScore=0;
    for(let i=0;i<5;i++){
        let computerChoice=computerPlay();
        console.log(`computer chose ${computerChoice}`)
        let playerChoice=prompt("please choose Rock, paper or scissors").toLowerCase()
        var outcome=Plays(computerChoice,playerChoice)
        console.log(Plays(computerChoice,playerChoice))
        console.log(outcome)
        
        if(outcome=="Computer Won!"){
            computerScore+=1;
        }else if(outcome=="Player Won!"){
            playerScore+=1;
        }
    }
    if(playerScore>computerScore){
        return("Player Won!")
    }else if(computerScore>playerScore){
        return("Computer Won!")
    }else{
        return ("Tie!")
    }
}
//console.log(game())