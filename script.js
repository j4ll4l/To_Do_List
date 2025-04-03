// Récupération des éléments du DOM
const addBtn = document.querySelector("#btnAdd");
const addBtnMobile = document.querySelector("#btnAddMobile");
const showBtn = document.querySelector("#showAdd");
const listGroup = document.querySelector("ul");
console.log(addBtn);


/**
 * 
 * Vérifie si le champ est vide ou si la tâche existe déjà.
 * Affiche un toast en fonction de l'action effectuée.
 * @function createTask
 */
function createTask() {
  const textTask = document
    .querySelector("#textTask")
    .value.toLowerCase()
    .trim();
  const InputGroup = document.querySelectorAll("li>input");


  // Vérification si le champ est vide
  if (!textTask) {
     //TOAST EMPTY
    let toastEmpty = document.getElementById("emptyToast");
    let toast1 = new bootstrap.Toast(toastEmpty);
    toast1.show();
    return;
  }

  // Vérification si la tâche existe déjà
  for (const input of InputGroup) {
    if (input.id == textTask) {

      //TOAST ERROR
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
  //Creation des elements  // Création des éléments pour la tâche  const newLi = document.createElement("li");
  const newInput = document.createElement("input");
  const newLabel = document.createElement("label");


  // Attributs pour les éléments
  newLi.className = "list-group-item";
  newInput.className = "form-check-input me-1 ";
  newInput.setAttribute("id", textTask);
  newInput.setAttribute("type", "checkbox");
  newLabel.textContent = textTask.charAt(0).toUpperCase() + textTask.slice(1);
  newLabel.setAttribute("for", textTask);
  newLabel.className = "form-check-label stretched-link";


  // Ajoute les éléments dans le DOM
  newLi.appendChild(newInput);
  newLi.appendChild(newLabel);
  listGroup.appendChild(newLi);

  
  //TOAST ADD
  let toastAdd = document.getElementById("addToast");
  let toast3 = new bootstrap.Toast(toastAdd);
  toast3.show();


  // Ajoute un événement pour vérifier si la tâche est complétée
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
 * Fonction pour afficher ou masquer la liste des tâches.
 * 
 * @function showTask
 * @param {Event} e
 */
function showTask(e) {
  const divParent = e.target.parentElement;
  if (divParent.classList.contains("close")) {
    divParent.classList.remove("close");
    divParent.classList.add("open");
    divParent.classList.add("animate__backInDown");
    showBtn.textContent = "HIDE TASK'S";
  } else {
    divParent.classList.remove("open");
    divParent.classList.add("animate__backOutUp");
    divParent.classList.add("close");
    showBtn.textContent = "SHOW TASK'S";
  }
}

// Ajoute les écouteurs d'événements
addBtn.addEventListener("click", createTask);
addBtnMobile.addEventListener("click", createTask);
showBtn.addEventListener("click", showTask);
