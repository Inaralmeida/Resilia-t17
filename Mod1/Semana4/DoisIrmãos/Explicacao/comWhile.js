function mastigar() {
  var numeroDaMastigada = 1;
  var tipoDeComida = "sopa";
  while (numeroDaMastigada <= 20) {
    if (tipoDeComida === "sopa") {
      console.log("Não precisa mastigar");
      break;
    }
    document.write(
      `<p> Mastigada de numero <strong>${numeroDaMastigada}</strong></p>`
    );
    numeroDaMastigada++;
  }

  document.write(`<p>Engolir a comida</p>`);
}

mastigar();
