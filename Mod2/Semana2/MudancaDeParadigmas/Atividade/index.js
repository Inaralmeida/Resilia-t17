var dog = {
  nome: "",

  latir: function () {
    alert("Au-au");
  },
  comer: function () {
    alert("o dog comeu");
  },
  verDog: function () {
    console.log(dog);
  },
};

var btnSubmit = document.querySelector("#submit");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  var nome = document.querySelector("#nome").value;
  dog.nome = nome;
});

var latir = document.querySelector("#latir");
latir.addEventListener("click", function (e) {
  e.preventDefault();
  dog.latir();
});
