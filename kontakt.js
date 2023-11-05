// Übersetzungen für Deutsch
const translationsDe = {
  homepage: "Startseite",
  skills: "Fähigkeiten",
  contact: "Kontakt",
  titleContact: "In Kontakt kommen",
  contactInformation: "Kontaktinformationen",
  contactMe: "Kontaktieren Sie mich",
  nameLabel: "Name:",
  emailLabel: "E-Mail:",
  messageLabel: "Nachricht:",
  submitButton: "Absenden"
};

// Übersetzungen für Englisch
const translationsEn = {
  homepage: "Homepage",
  skills: "Skills",
  contact: "Contact",
  titleContact: "Get in Touch",
  contactInformation: "Contact Information",
  contactMe: "Contact Me",
  nameLabel: "Name:",
  emailLabel: "Email:",
  messageLabel: "Message:",
  submitButton: "Submit"
};

// Übersetzungen für Französisch
const translationsFr = {
  homepage: "Page d'accueil",
  skills: "Compétences",
  contact: "Contact",
  titleContact: "Nous contacter",
  contactInformation: "Informations de contact",
  contactMe: "Contactez-moi",
  nameLabel: "Nom:",
  emailLabel: "E-mail:",
  messageLabel: "Message:",
  submitButton: "Envoyer"
};

// Hier wird die ausgewählte Sprache ermittelt (z.B., "de", "en", "fr")
const languageSelect = document.getElementById("language-select");
const selectedLanguage = languageSelect.value;

// Funktion zum Aktualisieren der Inhalte basierend auf der ausgewählten Sprache
function updateContent(language) {
  const translations = {
    de: translationsDe,
    en: translationsEn,
    fr: translationsFr
  };

  const translation = translations[language];

  // Übersetzung für Links
  document.getElementById("homepage").textContent = translation.homepage;
  document.getElementById("skills").textContent = translation.skills;
  document.getElementById("contact").textContent = translation.contact;

  // Übersetzungen für Kontaktseite
  document.getElementById("title-contact").textContent = translation.titleContact;
  document.getElementById("contact-information").textContent = translation.contactInformation;
  document.getElementById("contact-me").textContent = translation.contactMe;
  document.getElementById("name-label").textContent = translation.nameLabel;
  document.getElementById("email-label").textContent = translation.emailLabel;
  document.getElementById("message-label").textContent = translation.messageLabel;
  document.getElementById("submit-button").textContent = translation.submitButton;
}

// Initialisierung mit der ausgewählten Sprache
updateContent(selectedLanguage);

// Event-Handler für Änderungen der Sprachauswahl
languageSelect.addEventListener("change", function () {
  const selectedLanguage = languageSelect.value;
  updateContent(selectedLanguage);
});

function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  alert(`Nachricht von ${name} (${email}):\n\n${message}`);

  // Optional: Das Formular zurücksetzen
  document.getElementById("contact-form").reset();
}
