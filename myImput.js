const form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const input = document.getElementById("myTaskList");
  const toDoList = document.getElementById("task");

  const newThing = document.createElement("li");
  newThing.classList.add("ul");
  newThing.innerHTML = `<li class="myLi">${input.value}</li>
  <button class = "button1" onclick="deleteLine(event)">D</button>
    <button class= "button2" onclick="strike(event)">S</button>
`;

  toDoList.appendChild(newThing);
});

const strike = function (e) {
  const line = e.target.closest("li");
  line.style.textDecoration = "line-through";
};
const deleteLine = function (e) {
  console.log("eliminato", e.target);
  console.log(e.target.parentElement);
  e.target.parentElement.remove();
};

form.reset();
