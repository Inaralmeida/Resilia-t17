class Anotacoes {
  constructor(titulo, notas) {
    this.titulo = this.verificaTipoDoItem(titulo);
    this.notas = this.verificaTipoDoItem(notas);
  }

  verificaTipoDoItem(item) {
    try {
      if (typeof item === "string") {
        return item;
      } else {
        throw new Error("Tipo invalido");
      }
    } catch (e) {
      console.error(e);
    }
  }
}

const anotacoes = new Anotacoes(1, "1235");

console.log(anotacoes);
