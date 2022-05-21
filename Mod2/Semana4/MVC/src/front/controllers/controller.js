// A controler controla

class Controller {
  constructor() {
    this.array = [];
  }
  adcionaNota() {
    //Busca informações no HTML
    const titulo = $("#titulo").val();
    const nota = $("#descricaoTarefa").val();

    //Passa informações para a model
    const respostaModel = new Anotacoes(titulo, nota);
    console.log(respostaModel);

    //Instancia a view
    const view = new View();
    //Passando o objeto da nota para o metodo
    view.mostraNotaNaTela(respostaModel);
  }
}

const controller = new Controller();

$("#add-nota").click((e) => {
  e.preventDefault();
  controller.adcionaNota();
});

const amelia = new Gato();
