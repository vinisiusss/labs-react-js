// Самостаятельная
//N1
// let num = [];
// for (let i = 0; i < 3; i++){
//     num[i] = prompt("введите число: "); 
// }
// num.sort((a, b) => a - b);
// let r = num.length - 1;
// console.log(num, "максимальное: ",num[r]);
//N2
// let num = ["3","2","1"];
// console.log(num.join(' больше, чем '));


// N1
// let o = 149; // Одна астрономическая еденица = 149 млн
// let planets = [
//     {name: "Меркурий", dis: "588"},
//     {name: "Марс", dis: "228"},
//     {name :"Земля", dis: "159"},
//     {name :"Нептун", dis: "4055"},
//     {name: "Юпитер", dis: "99"}
// ];
// let p = [];
// for (i = 0; i < planets.length; i++){
//     if (parseInt(planets[i].dis) > o){
//         p.push(planets[i]);
//     }
// }
// console.log(p);
//одна остномическая еденица = 149 млн км, dis = сокращенное растояние до солнца в млн

// N2
// const r = [
//     {name: "Волков", rost: "191", ves: "70"},
//     {name: "Таров", rost: "202", ves: "77"},
//     {name: "Лесничих", rost: "166", ves: "70"},
//     {name: "Пономарев", rost: "199", ves: "88"},
//     {name: "Фролов", rost: "180", ves: "80"},
//     {name: "Наумкин", rost: "200", ves: "60"}
// ];
// let p = [];
// for(i = 0; i < r.length; i++){
//     if ((parseInt(r[i].rost) > 190) && (parseInt(r[i].ves) < 80)) {
//         p.push(r[i]);
//     }
// }
// console.log(p);

// N3
// let k = {};
// k["Продукт 1"] = { Вес: 100, Калорийность: 200 };
// k["Продукт 2"] = { Вес: 150, Калорийность: 300 };
// k["Продукт 3"] = { Вес: 120, Калорийность: 250 };
// k["Продукт 4"] = { Вес: 80, Калорийность: 150 };
// k["Продукт 5"] = { Вес: 200, Калорийность: 400 };
// k["Продукт 6"] = { Вес: 90, Калорийность: 180 };
// k["Продукт 7"] = { Вес: 110, Калорийность: 220 };

// let min = Infinity;
// let продукт1, продукт2;
// for (let prА in k) {
//   for (let prБ in k) {
//     if (prА !== prБ) {
//       let sum = k[prА].Калорийность + k[prБ].Калорийность;
//       if (sum < min) {
//         min = sum;
//         продукт1 = prА;
//         продукт2 = prБ;
//       }
//     }
//   }
// }
// console.log("Названия продуктов:", продукт1, продукт2);
// console.log("Суммарный вес:", k[продукт1].Вес + k[продукт2].Вес);
