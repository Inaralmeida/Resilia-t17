function mastigar() {
  var numeroDaMastigada = 1;
  while (numeroDaMastigada <= 20) {
    document.write(
      `<p> Mastigada de numero <strong>${numeroDaMastigada}</strong></p>`
    );
    numeroDaMastigada++;
  }

  document.write(`<p>Engolir a comida</p>`);
}

mastigar();
