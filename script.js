const toggleBtn = document.getElementById("toggleBioBtn");
const bio = document.getElementById("bio");
const nameInput = document.getElementById("nameInput");
const liveName = document.getElementById("liveName");
const profileForm = document.getElementById("profileForm");
const formName = document.getElementById("formName");
const profileName = document.getElementById("profileName");
const card = document.getElementById("profileCard");

// Click Event
toggleBtn.addEventListener("click", function() {
  bio.classList.toggle("hidden");//bio=paragraph;classlist-classes manipulation;toggle-on/off
});

// Input Event
nameInput.addEventListener("input", function() {
  liveName.textContent = nameInput.value || "John Doe";
});

// Submit Event
profileForm.addEventListener("submit", function(e) {
  e.preventDefault();
  profileName.textContent = formName.value;
  formName.value = "";
});

// Mouseover + Keydown (bonus interactivity)
card.addEventListener("mouseover", function() {
  card.classList.add("highlight");
});

card.addEventListener("mouseout", function() {
  card.classList.remove("highlight");
});

document.addEventListener("keydown", function(e) {
  if (e.key === "h") {
    card.classList.toggle("highlight");
  }
});