let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let n3 = document.getElementById("n3");
let n4 = document.getElementById("n4");
let n5 = document.getElementById("n5");
let n6 = document.getElementById("n6");
let n7 = document.getElementById("n7");
let n8 = document.getElementById("n8");
let n9 = document.getElementById("n9");
let result = document.getElementById("result");
let clear = document.getElementById("clear");
function print(value)
{
  //let result = document.getElementById("result");
  console.log(result.textContent)
  if(result.innerText=== '0') 
  {
     document.getElementById("result").innerHTML = value;
  }
  else
  {
    document.getElementById("result").innerHTML += value;
  }
}

function printop(value)
{
    document.getElementById("result").innerHTML += value;
}




function clears()
{
    document.getElementById("result").innerHTML="0";
}

function calculate() 
{
    
    try {
        result.textContent = eval(result.textContent);
    } catch (e) {
        console.log(e)
        console.log(e.message )
        alert(e.message)
        result.textContent = 0
    }
    
   
}








