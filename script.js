document.addEventListener("DOMContentLoaded", () => {
  console.log("Website vollständig geladen.");

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", () => {
      alert("Vielen Dank für Ihre Nachricht!");
    });
  }
});
