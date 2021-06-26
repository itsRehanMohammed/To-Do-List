// Variables and Constant
const Form = document.getElementById("form");
const inputTitle = document.getElementById("title");
const btnAdd = document.querySelector(".btn-add");
const Lists = document.querySelector(".lists");
const msg = document.querySelector(".msg");

// Title Section (Add Task To Your List)
btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputTitle.value === "") {
    msg.innerHTML = "Please fill this Field";
    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${inputTitle.value}`));
    Lists.appendChild(li);
    const btn = document.createElement("input");
    btn.setAttribute("type", "submit");
    btn.value = "Delete";
    btn.className = "btn-delete";
    li.appendChild(btn);
  }
  inputTitle.value = "";
});

// Do changes When Task is Done
Lists.addEventListener("click", (r) => {
  if (r.target.tagName === "LI") {
    r.target.classList.toggle("task-done");
  }
  false;
});

// Delete The Selected Item From the List
const btnDelete = document.querySelectorAll(".btn-delete").forEach(
  (element) =>
    (element.onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    })
);

// Delete ALL The Item From the List
const btnDeleteAll = document
  .querySelector(".btn-delete-all")
  .addEventListener("click", () => {
    Lists.innerHTML = "";
  });
