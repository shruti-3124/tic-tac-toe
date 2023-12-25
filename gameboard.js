let box = document.querySelectorAll('.boxes');
let resetbtn=document.querySelector('.reset');
let messagebox=document.querySelector('.msgcontainer');
let newbtn=document.querySelector('#new');
let winnermsg=document.querySelector('#winner');
const pattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
let turnX=true;
box.forEach((boxes) =>{
boxes.addEventListener("click",()=>{
if(turnX){
boxes.innerText="X";
turnX=false;
}
else{
boxes.innerText="O";
turnX=true;
}
boxes.disabled=true;
getWinner();
})
});
const enableboxes=()=>{
for(let b of box){
b.disabled=false;
b.innerText=""
}
};
const disableboxes=()=>{
for(let b of box){
b.disabled=true;
}
};
const resetgame=()=>{
turnX=true;
enableboxes();
messagebox.classList.add('hide');
}
const isWinner=(winner)=>{
  winnermsg.innerText=`Congratulations! winner is ${winner}`;
  messagebox.classList.remove('hide');
  disableboxes();
}
const getWinner=()=>{
for (let p of pattern){
let pos1val =box[p[0]].innerText;
let pos2val =box[p[1]].innerText;
let pos3val =box[p[2]].innerText;
if(pos1val!=""&&pos2val!=""&&pos3val!=""){
if(pos1val===pos2val&&pos2val===pos3val){
console.log("winner");
isWinner(pos1val);
}
}
}
}
newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
