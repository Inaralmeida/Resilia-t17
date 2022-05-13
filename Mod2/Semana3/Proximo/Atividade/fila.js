class Fila {
  constructor() {
    this.fila = [];
  }

  chegada(...itens) {
    this.fila.push(...itens);
  }
  partida() {
    try {
      if (this.fila.length === 0) throw new Error("Fila vazia");
      const itemRetirado = this.fila.shift();
      console.log(itemRetirado);
    } catch (e) {
      console.error(e);
    }
  }

  mostraFila() {
    return this.fila;
  }
}

const objetoFila = new Fila();
objetoFila.chegada("Rodrigo");
console.log(objetoFila.mostraFila());
objetoFila.partida();
objetoFila.partida();
console.log(objetoFila.mostraFila());
