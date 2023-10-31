// Übersetzungen für Deutsch
const translationsDe = {
  homepage: "Startseite",
  skills: "Fähigkeiten",
  contact: "Kontakt",
  homepage_footer: "Startseite",
  skills_footer: "Fähigkeiten",
  contact_footer: "Kontakt",
  footer_bottom: "@2023 Meine Website. Alle Rechte vorbehalten",
  card: "Ich kann ohne Probleme eine Webseite mit den wichtigsten Funktionen erstellen, ohne dafür Hilfsmittel zu verwenden.",
  card1: "Ich kann HTML code, mithilfe von CSS auf einer Webseite positionieren und gestalten.",
  card2: "Ich kann einfache Funktionen mit Java Script erstellen und z.B. in eine Webseite einbinden.",
  card3: "Ich weiss, wie man Git verwendet und kenne die wichtigsten Befehle davon.",
  card4: "Ich weiss, wie mit Jira gearbeitet wird und wie man als Team damit arbeitet."
};

// Übersetzungen für Englisch
const translationsEn = {
  homepage: "Homepage",
  skills: "Skills",
  contact: "Contact",
  homepage_footer: "Homepage",
  skills_footer: "Skills",
  contact_footer: "Contact",
  footer_bottom: "@2023 My website. all rights reserved",
  card: "I can easily create a web page with the most important functions without using any tools.",
  card1: "I can position and style HTML code on a web page using CSS.",
  card2: "I can create simple functions with Java Script and embed them in a web page, for example.",
  card3: "I know how to use Git and know the main commands of it.",
  card4: "I know how to work with Jira and how to work with it as a team."
};

// Übersetzungen für Französisch
const translationsFr = {
  homepage: "Page d'accueil",
  skills: "Compétences",
  contact: "Contact",
  homepage_footer: "Page d'accueil",
  skills_footer: "Compétences",
  contact_footer: "Contact",
  footer_bottom: "@2023 Mon site web. tous droits réservés",
  card: "Je peux créer sans problème une page web avec les fonctions principales sans utiliser d'outils.",
  card1: "Je peux positionner et mettre en forme un code HTML sur une page web à l'aide de CSS.",
  card2: "Je peux créer des fonctions simples avec Java Script et les intégrer par exemple dans une page web.",
  card3: "Je sais comment utiliser Git et je connais les principales commandes de Git.",
  card4: "Je sais comment travailler avec Jira et comment l'utiliser en tant qu'équipe."
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

  //Übersetzung für Links_Footer
  document.getElementById("homepage_footer").textContent = translation.homepage_footer;
  document.getElementById("skills_footer").textContent = translation.skills_footer;
  document.getElementById("contact_footer").textContent = translation.contact_footer;

  //Übersetzung für Rechte_Footer
  document.getElementById("footer_bottom").textContent = translation.footer_bottom;

  //Übersetzung für timeline_content
  document.getElementById("card").textContent = translation.card;
  document.getElementById("card1").textContent = translation.card1;
  document.getElementById("card2").textContent = translation.card2;
  document.getElementById("card3").textContent = translation.card3;
  document.getElementById("card4").textContent = translation.card4;

}

// Initialisierung mit der ausgewählten Sprache
updateContent(selectedLanguage);

// Event-Handler für Änderungen der Sprachauswahl
languageSelect.addEventListener("change", function () {
  const selectedLanguage = languageSelect.value;
  updateContent(selectedLanguage);
});

function showText(card) {
  var text = card.querySelector(".text");
  text.style.opacity = "1";
  text.style.maxHeight = "40px";
}

// Funktion zum Ausblenden des Texts beim Verlassen der Karte
function hideText(card) {
  var text = card.querySelector(".text");
  text.style.opacity = "0";
  text.style.maxHeight = "0";
}

// Finde alle Karten und füge Eventlistener hinzu
var cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.addEventListener("mouseover", function () {
    showText(card);
  });

  card.addEventListener("mouseout", function () {
    hideText(card);
  });
});