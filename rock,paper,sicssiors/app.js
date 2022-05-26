// create hoders for varianes 
let user = 0;
let comp = 0;
const user_score =  document.getElementById("User_Score_span");
const comp_score =  document.getElementById("comp_score_span");
const scoreBorad = document.querySelector(".scoreborad")
const result = document.querySelector(".result");
const options =  document.getElementById("options");    
const rock =  document.getElementById("Rock");
const paper =  document.getElementById("Paper");
const sicciors =  document.getElementById("Sicciors");

function getCompChoiche () {
    const compChoice = ["Rock", "Paper", "Sicciors"];
    return compChoice[Math.floor(Math.random() * 3)]
}

function Game(userChoice){
    const compchoice = getCompChoiche();
    switch (userChoice + compchoice ){
        case "RockSicciors":
        case "PaperRock":
        case "SicciorsPaper":
            win(compchoice, userChoice);
            break;
        case "SicciorsRock":
        case "RockPaper":
        case "PaperSicciors":
            lost(compchoice , userChoice);
            break;
        case "RockRock":
        case "PaperPaper":
        case "SicciorsSicciors":
            draw(compchoice, userChoice);
            break;
    
    }

}
function win(compChoice, userChoice){
    ++user;
    user_score.innerHTML = user;
    comp_score.innerHTML= comp;
    result.innerHTML = userChoice + " beats " + compChoice + " you won! ";
    // color for win()
    document.getElementById(userChoice).classList.add("green-glow")
    setTimeout(function(){ document.getElementById(userChoice).classList.remove("green-glow")}, 1000);
}

function lost(compChoice , userChoice){
    ++comp;
    comp_score.innerHTML = comp;
    user_score.innerHTML = user;
    result.innerHTML = compChoice + " beats " + userChoice + " you lost better luck next time";
    // color for lost
    document.getElementById(userChoice).classList.add("red-glow")
    setTimeout(function(){ document.getElementById(userChoice).classList.remove("red-glow")}, 1000);
}
function draw(compChoice, userChoice){
    comp_score.innerHTML = comp;
    user_score.innerHTML = user;
    result.innerHTML = compChoice + " and " + userChoice + " its a draw";
}
function main() {

    rock.addEventListener("click",function(){
        Game("Rock");
    })

    paper.addEventListener("click",function(){
        Game("Paper");
    })

    sicciors.addEventListener("click", function(){
        Game("Sicciors");
    })

}

main()

