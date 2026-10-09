const btnTema = document.getElementById("btnTema");

const sunImg = document.getElementById("sun");
const moonImg = document.getElementById("moon");

const containerNavigation = document.querySelector("cont-atualizacao");

btnTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    
    moonImg.style.display = "none";
    sunImg.style.display = "flex";
  } else {
    moonImg.style.display = "flex";
    sunImg.style.display = "none";
  }
});