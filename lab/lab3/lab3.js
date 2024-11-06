// N1
// let str = "каК Я лЮблю уЧиться".toLowerCase();
// function ff(str){
//     return str[0].toUpperCase() + str.substring(1);
// }
// console.log(ff(str));

// N2
// let kg = prompt("Введите свой вес в киллограмах:");
// let result = kg / 16;
// let result2 = kg * (1000/400);
// console.log("Ваш вес в пудах:", result);
// console.log("Ваш вес в футах:", result2);



//N3
let div = document.createElement("div");
div.className = "div-main";
document.querySelector("body").appendChild(div)

let h1 = document.createElement("h1");
h1.textContent = "Узнайте свой вес в Собаках"
document.querySelector("div").appendChild(h1)

let input = document.createElement("input");
input.placeholder = "Введите свой вес в кг";
input.id = "22";
input.setAttribute("type", "number");
document.querySelector("div").appendChild(input);


let button = document.createElement("button");
button.textContent = 'Посчитать';
document.querySelector("div").appendChild(button); 




button.onclick = function abn() { 
    let sum =  parseInt( document.getElementById("22").value);
    let gr = sum * 1000;
    let fut = (sum * 1000) / 453;
    let unc = (sum * 1000) / 28;
    alert("Ваш вес в граммах: " + gr + "     Ваш вес в фунтах: " + fut + "    Ваш вес в унции: " + unc);
}

