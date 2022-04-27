function abrir() {
  //cria a tag p
  var tagP = document.createElement("p");

  //Adicionando o texto a atag
  tagP.innerHTML = "Estamos Abertos";
  console.log(tagP);

  //Encontrando o body
  var pai = document.querySelector("#pai");

  //Adiciona a tag
  pai.append(tagP);
}

function fechar() {
  var tagp = document.querySelector("p");
  tagp.innerText = "Estamos Fechados";
}
