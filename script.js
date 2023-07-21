// console.log("hi");
let music = new Audio("../audio/gamemusic.wav");
let even = new Audio("../audio/eventmusic.wav");
let gameover = new Audio("../audio/gameover.wav");
let turn= "X";
let isgameover =false;

const changeturn=()=>{
    return turn==="X"?"0": "X";
}


const gamewin=()=>{
    let boxtexts= document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[1]].innerText===boxtexts[e[2]].innerText)&&(boxtexts[e[0]].innerText!=="")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " won"; 
            isgameover=true;
            document.querySelector('.imageInfo').getElementsByTagName('img')[0].style.width= "35rem";
            gameover.play();
        }
    })

}


// main logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeturn();
            even.play();
            gamewin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="turn for "+ turn;
            }
            
        }
    })
})

reset.addEventListener('click',()=>{
    let boxtextss = document.querySelectorAll('.boxtext');
    Array.from(boxtextss).forEach(element => {
        element.innerText = "";
        turn = "X";
        isgameover = false;
        document.getElementsByClassName("info")[0].innerText="turn for "+ turn;
        document.querySelector('.imageInfo').getElementsByTagName('img')[0].style.width= "0rem";
    });
})




