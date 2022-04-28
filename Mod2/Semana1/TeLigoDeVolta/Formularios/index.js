var submit = document.querySelector("button");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  var input = document.querySelector("#nome").value;
});

var link = document.querySelector("#link");
link.addEventListener("click", function (event) {
  event.preventDefault();
});
