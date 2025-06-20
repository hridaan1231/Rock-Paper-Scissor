let Userclick=document.querySelector(".dropdown");
 let print=document.querySelector(".bone");
 let msg=document.querySelector(".msg");
  let msgq=document.querySelector(".counter");
    let msgg=document.querySelector(".counter-c");
    let reset=document.querySelector(".reset-btn")
  score=0;
  scorec=0
   Userclick.addEventListener("change",()=>{
   let val=Userclick.value;

   
   let choices=["Rock","Paper","Scissor"];
   let randIdx=Math.floor(Math.random()*3);
   let computerChoice=choices[randIdx];
     print.innerText=computerChoice;

   if(val===computerChoice){
     msg.innerText="Draw!!!"
    
   }
   else if(val==="Rock" && computerChoice==="Scissor"){
    console.log("you won!");
      msg.innerText="Wonn!!!"
      score=score+1;
      msgq.innerText=score;
      

   }
    else if(val==="Rock" && computerChoice==="Paper"){
    console.log("you lost!");
      msg.innerText="Lost!!!"
        scorec=scorec+1;
      msgg.innerText=scorec;

   }
    else if(val==="Paper" && computerChoice==="Rock"){
    console.log("you won!");
      msg.innerText="Wonnn!!!"
      score=score+1;
      msgq.innerText=score;
      

   }
    else if(val==="Paper" && computerChoice==="Scissor"){
    console.log("you lost!");
      msg.innerText="Lostt!!!"
        scorec=scorec+1;
      msgg.innerText=scorec;
      

   }
   else if(val==="Scissor" && computerChoice==="Paper"){
    console.log("you won!");
      msg.innerText="Wonn!!!"
      score=score+1;
       msgq.innerText=score;

   }
   else if(val==="Scissor" && computerChoice==="Rock"){
    console.log("you lost!");
      msg.innerText="Losttt!!!"
        scorec=scorec+1;
      msgg.innerText=scorec;

   }});
   
reset.addEventListener("click", () => {
  msg.innerText = "";
  msgq.innerText = "0";
  msgg.innerText = "0";
  score = 0;
  scorec = 0;
});

   
 

   
