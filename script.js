// nav-bar
const menuToggle = document.querySelector(".menu-toggle input");

const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// banner
var nama = prompt("masukkan nama anda");
document.getElementById("nama").innerText = nama;

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// validation
function validateform() {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;

  var dt = new Date();
  var nama = document.forms["form-msg"]["nama"].value;
  var date = document.forms["form-msg"]["date"].value;
  var gender = document.forms["form-msg"]["gender"].value;
  var message = document.forms["form-msg"]["messages"].value;

  if (nama == "" || date == "" || gender == "" || message == "") {
    alert("Input tidak boleh kosong");
    return false;
  }

  document.getElementById("date-time").innerHTML = dt;
  document.getElementById("nama-sender").innerText = nama;
  document.getElementById("birthdate").innerText = date = formattedToday;
  document.getElementById("gender").innerText = gender;
  document.getElementById("message").innerText = message;
  return false;
}
