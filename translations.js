const translations = {
    en: {
      greeting: "Hello, I am Timeo Lutz",
      age: "I am 15 years old",
      hobbies: "In my free time, I enjoy sports",
      family: "I like to spend time with my family and friends",
      computer: "I am often on my PC/laptop"
    },
    de: {
      greeting: "Hallo, ich bin Timeo Lutz",
      age: "Ich bin 15 Jahre alt",
      hobbies: "In meiner Freizeit mache ich gerne Sport",
      family: "Ich verbringe gerne Zeit mit meiner Familie und meinen Freunden",
      computer: "Ich bin oft am PC/Laptop"
    }
  };
  
  // Funktion zum Übersetzen des Inhalts
  function translateContent(language) {
    const elements = document.querySelectorAll("[data-translate]");
  
    elements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (translations[language] && translations[language][key]) {
        element.textContent = translations[language][key];
      }
    });
  }
  
  // Event-Listener für das Dropdown-Menü
  const languageSelect = document.getElementById("language-select");
  
  languageSelect.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    translateContent(selectedLanguage);
  });
  
  // Standardübersetzung beim Laden der Seite (z. B. Englisch)
  document.addEventListener("DOMContentLoaded", () => {
    translateContent("en");
  });