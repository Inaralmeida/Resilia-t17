class Controller {
  adcionaNota() {
    const titulo = 1235;
    const nota = "tchau";

    const model = new Anotacoes(titulo, nota);
    model.verificaNota(titulo, nota);
  }
}

const controller = new Controller();
controller.adcionaNota();
