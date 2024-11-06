// N1
// let m = [];
// for (i = 0; i<4; i++){
//     m [i] = [];
//     for (j = 0; j < 4; j++){
//         m [i][j] = Math.floor(Math.random()*4);
//     }
// }
// let h = m.concat();
// console.log(h)

// N2
// function dd(){
//     let t = prompt();
//     let r = prompt();
//     let m = [];
//     for (i = 0; i<t; i++){
//             m [i] = [];
//             for (j = 0; j < r; j++){
//                 m [i][j] = Math.floor(Math.random()*9);
//             }
//         }
//         console.log(m)
// }
// console.log(dd())

// N3
// function createMatrix(rows) {
//     let matrix = [];
//     for (let i = 0; i < rows; i++) {
//       let row = [];
//       for (let j = 0; j < rows; j++) {
//         let randomNumber = Math.floor(Math.random() * 10);
//         row.push(randomNumber);
//       }
//       matrix.push(row);
//     }
//     let mainDiagonalSum = 0;
//     let secondaryDiagonalSum = 0;
//     for (let i = 0; i < rows; i++) {
//       mainDiagonalSum += matrix[i][i];
//       secondaryDiagonalSum += matrix[i][rows - i - 1];
//     }
//     if (mainDiagonalSum !== secondaryDiagonalSum) {
//       matrix[rows - 1][rows - 1] = mainDiagonalSum - secondaryDiagonalSum;
//     }
//     return matrix;
//   }
//   let rows = 4;
//   let matrix = createMatrix(rows);
//   console.log(matrix);

// N4
// let x = parseFloat(prompt());
// let y = parseFloat(prompt());
// let radius = parseFloat(prompt('Введите радиус окружности:'));

// let dis = Math.sqrt(x * x + y * y);

// if (dis <= radius) {
//   console.log('Точка находится внутри окружности');
// } else {
//   console.log('Точка находится вне окружности');
// }









