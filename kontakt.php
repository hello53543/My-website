<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  $to = "timeo.lutz@swisscom.com"; // Hier Ihre E-Mail-Adresse eintragen
  $subject = "Kontaktanfrage von $name";
  $headers = "From: $email";
  
  mail($to, $subject, $message, $headers);
  
  echo "Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.";
}
?>