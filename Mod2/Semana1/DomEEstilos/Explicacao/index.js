function operaArray(arr, func) {
  var retornoFuncao = func(arr);
  console.log(retornoFuncao);
  return retornoFuncao;
}
console.log(operaArray([1, 2], soma));

function soma(arr) {
  return arr[0] + arr[1];
}

// function somaArray(arr) {
//   var soma = 0;
//   for (var i=0; i < arr.length; i++) {
//       soma += arr[i];
//   }
//   return soma;
// }

// console.log(operaArray([1,2,3], somaArray))
