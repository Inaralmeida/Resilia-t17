var tagH1dom = document.querySelector("h1");
var tagH1Jq = $(".h1");

tagH1dom.style.backgroundColor = "black";

tagH1Jq.css("background", "black");

$("#btn").click(function () {
  $.ajax({
    url: "https://randomuser.me/api",
    success: function (resposta) {
      var objPessoa = resposta.results[0];
      console.log(objPessoa);
      console.log(objPessoa.name.first);
    },
    error: function (erro) {
      console.log(erro);
    },
  });
});
