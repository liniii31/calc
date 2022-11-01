let buttons = document.getElementsByClassName("button");
let display= "";
let result = document.getElementsByClassName("input")[0];
result.innerHTML=display;
for(let button of buttons){
  button.addEventListener("click",function(e){
    if(e.target.innerHTML === "C"){
      display="";
    }else if(e.target.innerHTML === "="){
      let result =eval(display);
        display=result.toString();
    }else{
      display+=e.target.innerHTML;
      
    }
    result.innerHTML=display;
    console.log(display);     
});
}
