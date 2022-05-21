class Gerente extends Funcionari {
  constructor(nome, idade, cpf, cargo) {
    super(nome, idade, cpf, cargo);
    this.acesso = "ger00";
    this.salario = 50000;
  }

  ajudarOTime() {
    return `${this.nome} ajudou o time`;
  }

  darFeedback() {
    return `${this.nome} deu um feedback`;
  }
}
