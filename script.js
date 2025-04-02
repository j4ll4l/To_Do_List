//Je recupere mes elements dans le DOM
const addBtn = document.querySelector("#btnAdd");
const showBtn = document.querySelector("#showAdd");
const listGroup = document.querySelector("ul");
console.log(addBtn);

/**
 *
 * @returns
 * @function
 */
function createTask() {
  const textTask = document
    .querySelector("#textTask")
    .value.toLowerCase()
    .trim();
  const InputGroup = document.querySelectorAll("li>input");

  if (!textTask) {
    let toastEmpty = document.getElementById("emptyToast");
    let toast1 = new bootstrap.Toast(toastEmpty);
    toast1.show();
    return;
  }
  for (const input of InputGroup) {
    if (input.id == textTask) {
      let toastError = document.getElementById("errorToast");
      let toast2 = new bootstrap.Toast(toastError);
      toast2.show();
      return;
    }
    input.addEventListener("check", function () {
      if (input.ariaChecked) {
        input.remove();
      }
    });
  }
  //Creation des elements
  const newLi = document.createElement("li");
  const newInput = document.createElement("input");
  const newLabel = document.createElement("label");
  //Attribute pour les elements
  newLi.className = "list-group-item";
  newInput.className = "form-check-input me-1 ";
  newInput.setAttribute("id", textTask);
  newInput.setAttribute("type", "checkbox");
  newLabel.textContent = textTask.charAt(0).toUpperCase() + textTask.slice(1);

  newLabel.setAttribute("for", textTask);
  newLabel.className = "form-check-label stretched-link";
  //Ajoute elements dans le DOM
  newLi.appendChild(newInput);
  newLi.appendChild(newLabel);
  listGroup.appendChild(newLi);
  if (listGroup.classList.contains("d-none")) {
    listGroup.classList.remove("d-none");
    showBtn.textContent = "HIDE TASK'S";
  }

  let toastAdd = document.getElementById("addToast");
  let toast3 = new bootstrap.Toast(toastAdd);
  toast3.show();

  //
  newInput.addEventListener("change", function () {
    if (this.checked) {
      setTimeout(() => newLi.remove(), 600);
      let toastComplete = document.getElementById("completeToast");
      let toast4 = new bootstrap.Toast(toastComplete);
      toast4.show();
    }
  });
}

/**
 * @function
 */
function showTask() {
  let classListGroup = listGroup.className;
  if (!listGroup.classList.contains("d-none")) {
    listGroup.classList.add("d-none");
    showBtn.textContent = "SHOW TASK'S";
  } else {
    listGroup.classList.remove("d-none");
    showBtn.textContent = "HIDE TASK'S";
  }
}

addBtn.addEventListener("click", createTask);
showBtn.addEventListener("click", showTask);
