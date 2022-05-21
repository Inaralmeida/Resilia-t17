class View {
  mostraNotaNaTela(nota) {
    //Criando tags
    const containerNota = $("<article>");
    const notas = $("<p>").text(nota.notas);
    const titulo = $("<h3>").text(nota.titulo);

    containerNota.append(titulo);
    containerNota.append(notas);

    $("#notes").append(containerNota);
  }
}
