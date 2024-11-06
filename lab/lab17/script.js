
//N1
// function dd(){
//     let div = document.createElement("div");
//     div.className = 'div1';
//     document.querySelector("body").appendChild(div);

//     let img = document.createElement("img");
//     img.src = 'https://static.wikia.nocookie.net/breakingbad/images/e/e7/BB-S5B-Walt-590.jpg/revision/latest?cb=20210608161743&path-prefix=ru';
//     document.querySelector("div").appendChild(img);

//     let p = document.createElement("p");
//     p.textContent = "Уолтер Уайт";
//     document.querySelector("div").appendChild(p);
// }

// function ff(){
//     let div = document.createElement("div");
//     div.className = 'div1';
//     document.querySelector("body").appendChild(div);

//     let img = document.createElement("img");
//     img.src = 'https://thumbs.dfs.ivi.ru/storage15/contents/2/a/accfc091321a01fa58a15330e482e4.jpg/858x483/?q=85';
//     document.querySelector("div").appendChild(img);

//     let p = document.createElement("p");
//     p.textContent = "Обезьяна";
//     document.querySelector("div").appendChild(p);
// }

// function ss(){
//     let div = document.createElement("div");
//     div.className = 'div1';
//     document.querySelector("body").appendChild(div);

//     let img = document.createElement("img");
//     img.src = 'https://static.wikia.nocookie.net/transformers/images/0/01/Optimus_prime.png/revision/latest?cb=20200327155859&path-prefix=ru';
//     document.querySelector("div").appendChild(img);

//     let p = document.createElement("p");
//     p.textContent = "Оптимус Прайм";
//     document.querySelector("div").appendChild(p);
// }
// console.log(dd())
// console.log(ff())
// console.log(ss())



rr.onclick = function dd(){
    let r = prompt("Что вы любите больше: кино, книги, автомобили");
    if (r == 'кино'){
        alert("гарри Поттер, Трансформеры, обезьяны")
    }
    if (r == "книги"){
        alert("Семь смертей эвелины хардкасл, одинокий остров, малибу")
    }
    if (r == "автомобили"){
        alert("ХАВАЛ, БМВ, АУДИ")
    }
}
console.log(dd())




