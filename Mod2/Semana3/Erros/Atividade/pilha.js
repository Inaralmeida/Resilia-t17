class Pilha {
  constructor() {
    this.pilha = [];
  }

  empilhar(item) {
    this.pilha.push(item);
  }

  desempilhar() {
    try {
      if (this.pilha.length === 0) throw new Error("Pilha vazia");
      console.log(this.pilha.pop());
    } catch (error) {
      console.error(error);
    }
  }

  mostraPilha() {
    console.log(this.pilha);
  }
}
