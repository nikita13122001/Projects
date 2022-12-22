window.addEventListener("load",keyBinds)

function keyBinds(){
    
   var length1= document.getElementsByClassName("btn").length;
   for(var i=0;i<length1;i++)
   {
    document.getElementsByClassName("btn")[i].addEventListener("click",function(){
        btntext=this.innerHTML;
       var value1= document.getElementById("input");
       value1.value = value1.value+btntext;
        
    })
   }
    document.getElementById("result").addEventListener("click",calc);
    document.getElementById("clear").addEventListener("click",clear);

   
}
function calc(){
var input1=document.getElementById("input").value;

 var equal1=calc1.equal(input1);

 document.getElementById("input").value=equal1;
}

function clear(){
    document.getElementById("input").value="";
}