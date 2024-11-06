
document.getElementById("yy").style.display = "none";


function sayHi() {
    document.getElementById("ww").style.display = "none";
    if (document.getElementById("ww").style.display = "none"){
        document.getElementById("yy").style.display = "";
    }
    
    function sss(){
        document.getElementById("yy").style.display = "none";
    if (document.getElementById("yy").style.display = "none"){
        document.getElementById("ww").style.display = "";
    }
    }
    
    setTimeout(sss,10000)
    
}
  
setTimeout(sayHi, 10000); 








let time = new Date();
document.getElementById("dd").onclick = function hh(){
document.getElementById("ff").textContent = time;
}
console.log(hh());