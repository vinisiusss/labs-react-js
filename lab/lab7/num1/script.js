let button = document.createElement("button");
button.className = "button";
button.textContent = "Напиши свое имя" ;
document.querySelector("body").appendChild(button);

button.onclick = function dd (){
    let a = prompt("Введите имя: ");
    if (a.length > 5){
        alert("Какое длинное имя");
    } else {
        alert("Коротко, но миленько");
    }
}