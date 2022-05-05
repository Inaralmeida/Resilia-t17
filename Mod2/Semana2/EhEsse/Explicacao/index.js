var dog = {
  nome: "pluto",
  raca: "vira lata",
  porte: "medio",

  //GETTERS
  getNome: function () {
    return this.nome;
  },
  getRaca: function () {
    return this.raca;
  },
  getPorte: function () {
    return this.porte;
  },

  //SETTERS
  setNome: function (novoNome) {
    this.nome = novoNome;
  },
  setPorte: function (novoPorte) {
    this.porte = novoPorte;
  },

  alterarNome: function (novoNome) {
    if (typeof novoNome === "string") {
      this.setNome(novoNome);
      return "Nome alterado com sucesso";
    } else {
      return "Nome invalido";
    }
  },
};
