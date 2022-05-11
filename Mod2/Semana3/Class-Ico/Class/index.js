class Carro {
  constructor(ano, placa, cor, dono, chassi) {
    this.modelo = "Uno";
    this.nRodas = 4;
    this.nPortas = 4;
    this.potencia = 1.0;
    this.placa = placa;
    this.cor = cor;
    this.dono = dono;
    this.chassi = chassi;
    this.ano = ano;
  }

  buzinar() {
    return "Bi-bi";
  }

  abastecer(valor) {
    return `Você está R$ ${valor} mais pobre`;
  }
}

const carro1 = new Carro(
  2022,
  "TUR1722",
  "Azul",
  "Inara",
  "99brblwhexzg0107721"
);

console.log(carro1);

const carro2 = new Carro(
  2022,
  "WIL2000",
  "Prata",
  "William",
  "99brblwhexzg0102000"
);

console.log(carro2);
