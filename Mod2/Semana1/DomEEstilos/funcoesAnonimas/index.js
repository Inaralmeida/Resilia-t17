var saudacao = function (nome) {
  return `Olá ${nome}`;
};

console.log(saudacao("Turma"));

function operaArray(arr, func) {
  return func(arr);
}

console.log(
  operaArray([1, 2, 3], function (arr) {
    var soma = 0;
    for (var i = 0; i < arr.length; i++) {
      soma += arr[i];
    }
    return soma;
  })
);
