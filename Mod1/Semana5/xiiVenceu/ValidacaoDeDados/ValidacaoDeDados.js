function validaEmail() {
  var email = prompt("Digite seu email");

  while (true) {
    if (email.indexOf("@") > 2 && email.indexOf(".") > 7) {
      alert("Email Valido");
      break;
    } else {
      alert("Email invalido");
      email = prompt("Digite seu email");
    }
  }
}
validaEmail();
