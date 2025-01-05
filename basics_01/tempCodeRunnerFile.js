function convert(){
input=document.getElementById("input").value;
ctof=document.getElementById("ctof").checked;
ftoc=document.getElementById("ftoc").checked;
result=document.getElementById("result");
let temp;
    if (ctof){
        temp= (number(input) * 9/5) + 32;
result.textContent=`${temp}`;
    }
else if(ftoc){
     temp=(number(input)-32)*5/9;
   result.textContent=`${temp}`;
  }

else 
result= "select a conversion";
}
