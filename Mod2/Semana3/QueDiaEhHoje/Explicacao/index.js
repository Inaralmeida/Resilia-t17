const valor = 12;
const dataString = "11/05/2022";

const sohData = new Date();
const epoch = new Date(valor); //epoch time (inteiro)
const dateString = new Date(dataString); //string em formato de data
const detalhado = new Date(2022, 05, 11, 20, 25, 00, 00);

console.log(sohData);
console.log(epoch);
console.log(dateString);
console.log(detalhado);

const data = new Date(1998, 9, 10);
const diaSemana = data.getDay(); //Dia da semana de 0 a 6
const dia = data.getDate(); //Dia da semana de 0 a 6
const ano = data.getFullYear(); //Ano completo (4 dígitos)
const mes = data.getMonth();
console.log(dia, mes, ano);
