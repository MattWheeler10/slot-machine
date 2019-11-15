//Mr Seagull Wrote this - IT IS AWESOMMMMMMMEEEEEEEEEEE

document.getElementById("Start").addEventListener("click",spin)

const images = document.getElementById("slotImages")
let bet;

const r1img = document.getElementById("r1")
const r2img = document.getElementById("r2")
const r3img = document.getElementById("r3")
const wins = document.getElementById("wins")

//Set balance to 500
let balance = 500;

function loser(){
    document.getElementById("status").src = "images/Fail.png"
}
function winner(){
    document.getElementById("status").src = "images/BigWin.png"
     
    if (document.getElementById("r1").getAttribute("src")=="images/Grapes.png"){
        balance += bet*2;
        wins.innerHTML = ("YOU WIN: Grapes *2")
        console.log("YOU WIN: Grapes *2")
    }else if(document.getElementById("r1").getAttribute("src")=="images/Lemon.png"){
        balance += bet*3;
        wins.innerHTML = ("YOU WIN: Lemon *3")
        console.log("YOU WIN: Lemon *3")
    }else if(document.getElementById("r1").getAttribute("src")=="images/Watermelon.png"){
        balance += bet*4;
        wins.innerHTML = ("YOU WIN: Watermelon *4")
        console.log("YOU WIN: Watermelon *4")
    }else if(document.getElementById("r1").getAttribute("src")=="images/Strawberry.png"){
        balance += bet*5;
        wins.innerHTML = ("YOU WIN: Strawberry *5")
        console.log("YOU WIN: Strawberry *5")
    }else if(document.getElementById("r1").getAttribute("src")=="images/Orange.png"){
        balance += bet*6;
        wins.innerHTML = ("YOU WIN: Oranges *6")
        console.log("YOU WIN: Oranges *6")
    }
}
function spin(){
    bet = document.getElementById("bet1").value
    balance = balance - bet
    //alert(bet)
    let final = []
    final.push(spinReel("r1"))
    final.push(spinReel("r2"))
    final.push(spinReel("r3"))
    //Check if the reels match up by checking 1 and 0 & 0 and 2
    if (final[0] == final[1] && final[0] == final[2]){
        winner()
    }
    else{
        loser()
    update_theScrene()
}
}    
function spinReel(reel){
    let i = Math.floor(Math.random()*6)
    if (i == 0){
        document.getElementById(reel).src = "images/Cherry.png"
    }
    if (i == 1){
        document.getElementById(reel).src = "images/Grapes.png"
    }
    if (i == 2){
        document.getElementById(reel).src = "images/Lemon.png"
    }
    if (i == 3){
        document.getElementById(reel).src = "images/Orange.png"
    }
    if (i == 4){
        document.getElementById(reel).src = "images/Strawberry.png"
    }
    if (i == 5){
        document.getElementById(reel).src = "images/Watermelon.png"
    }
    return i
}
const update_theScrene = () => {
    document.getElementById("balanceDisplay").textContent = balance;
}