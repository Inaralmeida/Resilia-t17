//REST É UTILIZADO COMO PARAMETRO
//SPREAD É UTILIZADO PARA ESPELHAR ARRAY E OBJ

//REST

function calculaMediaTurma(...notas) {
  console.log(...notas);
  let media = 0;
  for (let i = 0; i < notas.length; i++) {
    media += notas[i];
  }
  // console.log(media);
}

calculaMediaTurma(2, 6, 7, 9, 4);

// calculaMediaTurma(3, 5, 0);

// calculaMediaTurma();

//SPREAD

const pessoa = {
  nome: "Enrico",
  idade: "22",
};

const carro = {
  marca: "BMW",
  ano: 2022,
};

const vendaDOCarro = {
  ...pessoa,
  ...carro,
};

console.log(vendaDOCarro);
