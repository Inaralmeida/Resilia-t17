class Funcionari {
  constructor(nome, idade, cpf, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cpf = cpf;
    this.cargo = cargo;
  }

  iniciarExpediente() {
    return `${this.nome} começou a trabalhar`;
  }
  finalizarExpediente() {
    return `${this.nome} parou de trabalhar`;
  }
}
