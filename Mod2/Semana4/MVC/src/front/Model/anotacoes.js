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

  verificaNota(titulo, nota) {
    console.log(titulo, notas);
  }
}
