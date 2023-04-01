// Sélection du formulaire et des champs à valider
const form = document.querySelector("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phoneNumber");

// Fonction pour afficher une alerte avec un message
function showAlert(message) {
  alert(message);
}

// Fonction de validation du champ nom
function validateName() {
  const nameValue = nameInput.value.trim(); // Récupération de la valeur saisie
  if (nameValue === "") {
    // Si le champ est vide, on affiche une alerte
    showAlert("Le champ Nom doit être rempli !");
    return false;
  } else if (/\d/.test(nameValue)) {
    // Si le champ contient des chiffres, on affiche une alerte
    showAlert("Le champ Nom ne doit pas contenir de chiffres !");
    return false;
  }
  return true; // Si tout est OK, on renvoie true
}

// Fonction de validation du champ email
function validateEmail() {
  const emailValue = emailInput.value.trim(); // Récupération de la valeur saisie
  if (emailValue === "") {
    // Si le champ est vide, on affiche une alerte
    showAlert("Le champ Adresse e-mail doit être rempli !");
    return false;
  } else if (!/\S+@\S+\.\S+/.test(emailValue)) {
    // Si la valeur saisie ne correspond pas à un email valide, on affiche une alerte
    showAlert("Veuillez saisir une adresse e-mail valide !");
    return false;
  }
  return true; // Si tout est OK, on renvoie true
}

// Fonction de validation du champ téléphone
function validatePhone() {
  const phoneValue = phoneInput.value.trim(); // Récupération de la valeur saisie
  if (phoneValue === "") {
    // Si le champ est vide, on affiche une alerte
    showAlert("Le champ Téléphone doit être rempli !");
    return false;
  } else if (!/^[0-9]{10}$/.test(phoneValue)) {
    // Si la valeur saisie ne correspond pas à un numéro de téléphone valide, on affiche une alerte
    showAlert("Veuillez saisir un numéro de téléphone valide !");
    return false;
  }
  return true; // Si tout est OK, on renvoie true
}

// Fonction de validation globale du formulaire
function validateForm() {
  const isNameValid = validateName(); // Validation du champ nom
  const isEmailValid = validateEmail(); // Validation du champ email
  const isPhoneValid = validatePhone(); // Validation du champ téléphone
  return isNameValid && isEmailValid && isPhoneValid; // Si tous les champs sont valides, on renvoie true
}

// Ajout d'un événement de soumission du formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Annulation de l'envoi du formulaire
  if (validateForm()) {
    // Si le formulaire est valide, on affiche une alerte avec un message de confirmation
    showAlert("Merci pour votre message !");
    form.reset(); // On réinitialise le formulaire
  }
});
