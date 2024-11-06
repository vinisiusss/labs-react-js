let tem = ["Футбол","Хоккей","Фильмы"];
let pp = Math.floor(Math.random((tem))*3);
let football = ["Мяч пинают ногой?","Футбол придумали в Англии?","В футюол играют люди?","Мяч квадратный?","Матч идет 90 минут?","2 тайма?","Головой можно бить?","Мяч один?","В футбол играют 11 человек?","Ворота круглые?"];
let soccer = ["Шайба черная?","Хоккей придумали в Англии?","В хоккей играют люди?","Шайба квадратный?","Матч идет 80 минут?","2 периода?","Головой можно бить В хоккее?","Щайба один?","В хоккей играют 11 человек?","В хоккей играют в шортах?"];
let movies = ["Бывают ли финтастические фильмы?","Кино придумали в 1999 году?","Люди смотрят кино дома?","Фильмы снимают только в голивуде?","Ваше любимое кино титаник?","Вы смотрите кино на платформе винк?","Оператор пишет сценарий к фильмам?","Только роботы снимаются в кино?","Фильмы можно смотреть только на телефоне","Кино начали снимать в 1889 году?"];



let vopros = null;
if (pp == 0){
    vopros = football;
}
if (pp == 1){
    vopros = soccer;
}
if (pp == 2){
    vopros = movies;
}

document.getElementById("js").style.display = "none";

document.getElementById("btn").onclick = function dd(){
    
    alert("Ваш тест будет про" + "  " + "<" + tem[pp] + ">");
    
    document.getElementById("main").style.display = 'none';
    document.getElementById("js").style.display = '';
   
    document.getElementById("h1").textContent = "Ваша тема" + " " + tem[pp];
    document.getElementById("p").textContent = 'Начать тест';
    
    function gg(){
        document.getElementById("p").textContent = vopros[i];
        flag +=1;
        i++; 
        console.log(i)
        if (flag == ll){    
            ll+=1;    
        }
    }   

    let flag = 0;
    let ll =  1;
    let i = 0;
    const button = document.querySelector("#button")
    button.addEventListener("click", () => {
        if(i < 10) {
            gg()
        }
        else {
            document.getElementById("js").style.display = 'none';
            let h3 = document.createElement("h3");
            h3.textContent = 'Тест закончен';
            document.querySelector("body").appendChild(h3);          
        }
        
    })
    
    
}  









