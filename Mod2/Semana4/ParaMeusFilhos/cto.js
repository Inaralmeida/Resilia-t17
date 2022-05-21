class CTO extends Funcionari {
  constructor(nome, idade, cpf, cargo) {
    super(nome, idade, cpf, cargo);
    this.acesso = "cto00";
    this.salario = 10000;
  }

  contratar() {
    return `${this.nome} contatrou`;
  }
  demitir() {
    return `${this.nome} demitiu`;
  }
}
