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
Lists.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("task-done");
  }
});

// Delete The Selected Item From the List
Lists.addEventListener("click", removeItem);
function removeItem(e) {
  if (e.target.classList.contains("btn-delete")) {
    if (confirm("Are You Sure?")) {
      let li = e.target.parentElement;
      Lists.removeChild(li);
    }
  }
}

// Delete ALL The Item From the List
const btnDeleteAll = document
  .querySelector(".btn-delete-all")
  .addEventListener("click", () => {
    Lists.innerHTML = "";
  });
