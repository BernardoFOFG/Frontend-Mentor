// validador de não preenchimento
const alertInput = document.createElement("p");
alertInput.innerText = "Preencha essa opção!";
alertInput.className = "alertInput";

// update name card & read name card
const newNameCard = document.querySelector("#value-name");
newNameCard.addEventListener("input", () => {
  const nameCard = document.querySelector("#name-card");
  nameCard.innerText =
    newNameCard.value.length === 0
      ? "Jane Appleseed"
      : newNameCard.value.toUpperCase();

  const inputAlert = document.querySelector("#alert-name");

  if (newNameCard.value.length === 0) {
    newNameCard.style.borderColor = "hsl(0, 100%, 66%)";
    inputAlert.appendChild(alertInput);
  } else {
    newNameCard.style.borderColor = "hsl(279, 6%, 55%)";
    document.querySelector(".alertInput").style.display = "none";
  }
});

//update number card
const newNumberCard = document.querySelector("#value-numberCard");
newNumberCard.addEventListener("input", () => {
  const numberCard = document.querySelector("#number-card");
  numberCard.innerText =
    newNumberCard.value.length === 0
      ? "1234 5678 9123 0000"
      : newNumberCard.value.replace(
          /^(\d{4})(\d{4})(\d{4})(\d{4})/,
          "$1 $2 $3 $4"
        );

  const inputAlert = document.querySelector("#alert-number");
  if (newNumberCard.value.length < 16) {
    newNumberCard.style.borderColor = "hsl(0, 100%, 66%)";
    document.querySelector(".alertInput").style.display = "flex";
    inputAlert.appendChild(alertInput);
  } else {
    newNumberCard.style.borderColor = "hsl(279, 6%, 55%)";
    document.querySelector(".alertInput").style.display = "none";
  }
});

// update MM && YY card valid
const newDateVal = document.querySelector("#value-dateVal");
newDateVal.addEventListener("input", () => {
  const dateVal = document.querySelector("#dateVal-card");
  dateVal.innerText =
    newDateVal.value.length === 0
      ? "00/00"
      : newDateVal.value.replace(/^(\d{2})(\d{2})/, "$1/$2");

  const inputAlert = document.querySelector("#alert-date");
  if (newDateVal.value.length === 0) {
    newDateVal.style.borderColor = "hsl(0, 100%, 66%)";
    document.querySelector(".alertInput").style.display = "flex";
    inputAlert.appendChild(alertInput);
  } else {
    newDateVal.style.borderColor = "hsl(279, 6%, 55%)";
    document.querySelector(".alertInput").style.display = "none";
  }
});

// update code verification card
const newCVC = document.querySelector("#value-cvc");
newCVC.addEventListener("input", () => {
  const CVC = document.querySelector("#cvc-card");
  CVC.innerText = newCVC.value.length === 0 ? "000" : newCVC.value;

  const inputAlert = document.querySelector("#alert-cvc");
  if (newCVC.value.length === 0) {
    newCVC.style.borderColor = "hsl(0, 100%, 66%)";
    document.querySelector(".alertInput").style.display = "flex";
    inputAlert.appendChild(alertInput);
  } else {
    newCVC.style.borderColor = "hsl(279, 6%, 55%)";
    document.querySelector(".alertInput").style.display = "none";
  }
});

// verificando o values dos inputs
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("form").style.display = "none";
  document.querySelector(".submit-form").style.display = "flex";
});

// restartando a pagina, para um novo registro!
document.querySelector("#add-details").addEventListener("click", () => {
  alert("Card details added successfully");
  location.reload();
});
