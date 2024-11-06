let btn = document.querySelector("#btn")

btn.addEventListener("click", () =>{
    let text = prompt("Введите текст для заголовков");
    document.querySelector("#h1").textContent = text;
    alert("Двумерный массив")
})


let button = document.querySelector("#btn1")
button.addEventListener('click', () =>{
    let txt = prompt("Введите текст для заголовка");
    document.querySelector('#h2').textContent = txt;
    alert("Однмерный массив")
})





