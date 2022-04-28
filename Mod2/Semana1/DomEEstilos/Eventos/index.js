var container = document.querySelector("#container");
var body = document.body;
container.addEventListener("click", function (event) {
  console.log(event);
  container.style.background = "blue";
});

container.addEventListener("dblclick", function () {
  container.style.background = "#ffb200";
});

body.addEventListener("scroll", function () {
  container.style.background = "red";
});
