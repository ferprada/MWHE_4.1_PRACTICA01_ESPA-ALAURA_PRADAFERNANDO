// HEADER
document.addEventListener("DOMContentLoaded", function () {
  var miHeader = document.getElementById("miHeader");

  miHeader.addEventListener("click", function () {
      alert("Hiciste clic en el encabezado");
  });
});



// MIRROR
function changeImage(element) {
  element.src = "hover_" + element.alt.split(" ")[1] + ".jpg";
}

function resetImage(element) {
  element.src = element.alt.split(" ")[1] + ".jpg";
}



// FOOTER
function subscribe() {
  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value;

  console.log(`Correo electrónico suscrito: ${emailValue}`);
}