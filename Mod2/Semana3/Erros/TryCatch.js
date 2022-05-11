const mochila = {
  dono: "Inara",
  estado: "novo",
  itens: ["estojo", "caderno", "lancheira"],
  nome: "Rariscreuda",

  guarda(item) {
    this.itens.push(item);
  },
};

//Try === tentar
// try {

//   mochila.guardar("lapis");
//   console.log("Objeto guardado com sucesso");
// } catch (erro) {
//   console.error(erro);
// }

// document.write("Funciona");

const btn = document.querySelector("button");

btn.addEventListener("click", function (e) {
  const tagErro = document.querySelector("#error");

  e.preventDefault();
  const data = document.querySelector("#nome").value;

  try {
    if (data.toLowerCase() === "resilia") {
      document.write(nome);
      tagErro.style.display = "none";
    } else {
      throw new Error("Nome invalido");
    }
  } catch (erro) {
    tagErro.style.display = "block";
    console.error(erro);
  }
});
