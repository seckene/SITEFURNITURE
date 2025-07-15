let paye = document.querySelector(".paye");
let navdroit = document.querySelector(".navdroit"); // <-- Ajouté pour cibler l'élément à afficher
let moue=document.querySelector(".paye2");
console.log(paye);
console.log(moue);

paye.addEventListener("click", () => {
  navdroit.style.display = "block";
  paye.style.display = "none";
});

moue.addEventListener("click", () => {
  navdroit.style.display = "none";
  paye.style.display = "flex";
});