//declaração do objeto
const user = {
  _name: "Lina",
  setName: (newName) => {
    this._name = newName;
  },
  getName: () => {
    return this._name;
  },
};

console.log(user.getName());
user.setName("Marilia");
console.log(user.getName());
user.setName("Gloria");

//Exemplo com possível tratador de evento + callback
function eventHandler(text, func) {
  console.log(text, func());
}

eventHandler("normalzão", user.getName);
eventHandler("Usando bind", user.getName.bind(user));
eventHandler("Usando =>", () => user.getName());

const btn = document.getElementById("btn");

btn.addEventListener("click", (event) => {});
