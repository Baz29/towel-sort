
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
let matrix2 =[];
let result = [];


if (!matrix) {return []} else {

for (let i = 0; i < matrix.length; i++) {
  if ((i % 2) === 0 ) {
  matrix2 = matrix[i].sort((a, b) => a - b);
  result = result.concat(matrix2)} 
  else {matrix2 = matrix[i].sort((a, b) => b - a);
  result = result.concat(matrix2)}
  }
  return result;}



}

