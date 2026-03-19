    document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const statusMsg = document.getElementById("statusMsg");

  if (!name || !email || !message) {
    statusMsg.style.color = "red";
    statusMsg.textContent = "Please fill out all fields.";
    return;
  }

  const mailtoLink = `mailto:haransrihari533@gmail.com?subject=Message%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nEmail: " + email)}`;

  window.location.href = mailtoLink;

  statusMsg.style.color = "green";
  statusMsg.textContent = "Opening your email app...";
});
function downloadPDF() {
    const link = document.createElement("a");
    link.href = "files/sample.pdf"; // path to your PDF
    link.download = "MyFile.pdf";   // file name after download
    link.click();
}