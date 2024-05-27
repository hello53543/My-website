// Übersetzungen für Deutsch
const translationsDe = {
  homepage: "Startseite",
  skills: "Fähigkeiten",
  contact: "Kontakt",
  hobbies: "Hobbys",
  hobby1: "Zeit mit Familie",
  hobby2: "Rausgehen mit Freunden",
  hobby3: "Muay Thai/Thaiboxen",          
  hobby4: "Dinge ausprobieren an meinem PC",
  ueber_mich: "Über mich",
  fakt1: "Mein Name ist Timeo Lutz",
  fakt2: "Ich bin 16 Jahre alt",
  fakt3: "Ich arbeite bei der Swisscom",
  fakt4: "Ich lerne den Beruf 'Informatiker Applikationsentwicklung'",
  fakt5: "Ich befinde mich im ersten Lehrjahr",
  arbeit: "Arbeit",
  arbeit1: "Ich bin momentan im ersten Lehrjahr.",
  arbeit2: "Mein Arbeitsplatz befindet sich an der Pfingstweidstrasse 51",
  arbeit3: "Ich befinde mich momentan im Automation Team.",
  arbeit4: "Ich konnte bereits viel lernen und ich bin motiviert mich weiterhin zu verbessern und neues kennenzulernen.",
  homepage_footer: "Startseite",
  skills_footer: "Fähigkeiten",
  contact_footer: "Kontakt",
  footer_bottom: "@2023 Meine Website. Alle Rechte vorbehalten"
};

// Übersetzungen für Englisch
const translationsEn = {
  homepage: "Homepage",
  skills: "Skills",
  contact: "Contact",
  hobbies: "Hobbies",
  hobby1: "Time with family",
  hobby2: "Going out with friends",
  hobby3: "Muay Thai/Thai Boxing",
  hobby4: "Trying out things on my PC",
  ueber_mich: "About Me",
  fakt1: "My name is Timeo Lutz",
  fakt2: "I am 16 years old",
  fakt3: "I work at Swisscom",
  fakt4: "I learn the profession computer scientist(Application development)",
  fakt5: "I am in my first year of apprenticeship",
  arbeit: "Work",
  arbeit1: "I am currently in the first year of my apprenticeship",
  arbeit2: "My workplace is at Pfingstweidstrasse 51",
  arbeit3: "I am currently in the automation team.",
  arbeit4: "I was already able to learn a lot and I am motivated to continue to improve and learn new things.",
  homepage_footer: "Homepage",
  skills_footer: "Skills",
  contact_footer: "Contact",
  footer_bottom: "@2023 My website. all rights reserved"
};

// Übersetzungen für Französisch
const translationsFr = {
  homepage: "Page d'accueil",
  skills: "Compétences",
  contact: "Contact",
  hobbies: "Loisirs",
  hobby1: "Temps en famille",
  hobby2: "Sortir avec des amis",
  hobby3: "Muay Thai/Boxe thaïlandaise",
  hobby4: "Essayer des choses sur mon PC",
  ueber_mich: "À propos de moi",
  fakt1: "Je m'appelle Timeo Lutz",
  fakt2: "J'ai 16 ans",
  fakt3: "Je travaille chez Swisscom",
  fakt4: "J'apprends le métier de 'Développeur d'applications informatiques'",
  fakt5: "Je suis en première année d'apprentissage",
  arbeit: "Travail",
  arbeit1: "Je suis actuellement en première année d'apprentissage.",
  arbeit2: "Mon lieu de travail est à la Pfingstweidstrasse 51",
  arbeit3: "Je suis actuellement dans l'équipe d'automatisation.",
  arbeit4: "J'ai déjà pu apprendre beaucoup et je suis motivé pour continuer à m'améliorer et à apprendre de nouvelles choses.",
  homepage_footer: "Page d'accueil",
  skills_footer: "Compétences",
  contact_footer: "Contact",
  footer_bottom: "@2023 Mon site web. tous droits réservés"
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

  // Übersetzung für Überschrift "Hobbys"
  document.getElementById("hobbies").textContent = translation.hobbies;
  document.getElementById("hobby1").textContent = translation.hobby1;
  document.getElementById("hobby2").textContent = translation.hobby2;
  document.getElementById("hobby3").textContent = translation.hobby3;
  document.getElementById("hobby4").textContent = translation.hobby4;

  // Übersetzung für Links
  document.getElementById("homepage").textContent = translation.homepage;
  document.getElementById("skills").textContent = translation.skills;
  document.getElementById("contact").textContent = translation.contact;

  // Übersetzung für Überschrift "Über mich"
  document.getElementById("ueber_mich").textContent = translation.ueber_mich;
  document.getElementById("fakt1").textContent = translation.fakt1;
  document.getElementById("fakt2").textContent = translation.fakt2;
  document.getElementById("fakt3").textContent = translation.fakt3;
  document.getElementById("fakt4").textContent = translation.fakt4;
  document.getElementById("fakt5").textContent = translation.fakt5;

  // Übersetzung für Überschrift "Arbeit"
  document.getElementById("arbeit").textContent = translation.arbeit;
  document.getElementById("arbeit1").textContent = translation.arbeit1;
  document.getElementById("arbeit2").textContent = translation.arbeit2;
  document.getElementById("arbeit3").textContent = translation.arbeit3;
  document.getElementById("arbeit4").textContent = translation.arbeit4;

  //Übersetzung für Links_Footer
  document.getElementById("homepage_footer").textContent = translation.homepage_footer;
  document.getElementById("skills_footer").textContent = translation.skills_footer;
  document.getElementById("contact_footer").textContent = translation.contact_footer;

  //Übersetzung für Rechte_Footer
  document.getElementById("footer_bottom").textContent = translation.footer_bottom;

}

// Initialisierung mit der ausgewählten Sprache
updateContent(selectedLanguage);

// Event-Handler für Änderungen der Sprachauswahl
languageSelect.addEventListener("change", function () {
  const selectedLanguage = languageSelect.value;
  updateContent(selectedLanguage);
});


