const rr = [
    ["Суп", "колледж" ],
    ["Картошка", "дистант" ],      
    ["Овощи", "колледж" ],
    ["Пельмени", "колледж" ],
    ["Нагетсы", "дистант" ],
    ["блины", "колледж" ],
    ["яйца", "магазины"]
]
let button = document.createElement("button");
button.className = "button";
button.textContent = "Узнать расписание на день" ;
document.querySelector("body").appendChild(button);

button.onclick = function dd(){
    let a = prompt("На какой день недели хотите узнать расписание");
    if (a == "понедельник"){
        alert(rr[0]);
        window.location.href = ("https://ci.nsu.ru/");
    }
    if (a == "вторник"){
        alert(rr[1]);
        window.location.href = ("https://classroom.google.com/u/0/c/NjIwODYzNzYwNzU0/a/NjM1MzAwOTcwNTIz/details?hl=ru");
    }
    if (a == "среда"){
        alert(rr[2]);
        window.location.href = ("https://ci.nsu.ru/");
    }
    if (a == "четверг"){
        alert(rr[3]);
        window.location.href = ("https://ci.nsu.ru/");
    }
    if (a == "пятница"){
        alert(rr[4]);
        window.location.href = ("https://classroom.google.com/u/0/c/NjIwODYzNzYwNzU0/a/NjM1MzAwOTcwNTIz/details?hl=ru");
    }
    if (a == "суббота"){
        alert(rr[5]);
        window.location.href = ("https://ci.nsu.ru/");
    }
    if (a == "воскресенье"){
        alert(rr[6]);
        window.location.href = ("https://ci.nsu.ru/");
    }
}