let cat = ["махтарио","базилио","бамбуби","валли","зоро","соня","антон","кокс"];
let dog = ["филин","филип","муха","мухтар","тимофей","егор","степан","кость"];

let button = document.createElement("button");
button.className = "button";
button.textContent = "Напиши свое имя" ;
document.querySelector("body").appendChild(button);



button.onclick = function dd(){
    let a = prompt("Напишите имя: ");
    let d = parseInt(cat.indexOf(a));
    let b = parseInt(dog.indexOf(a));
    if (d >= 0){
        alert("Похоже вы кот");
        window.location.href = ("https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%88%D0%BA%D0%B0")
    }
    if (b >=0){
        alert("Похоже вы собака");
        window.location.href = ("https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B1%D0%B0%D0%BA%D0%B0")
    }
    if ((d < 0) && (b < 0)){
        alert("Похоже вы человек");
        window.location.href = ("https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA")
    }
}

