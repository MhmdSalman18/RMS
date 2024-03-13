// Get references to the elements
const onlineRadio = document.getElementById("type-online");
const offlineRadio = document.getElementById("type-offline");
const submitButton = document.getElementById("submitButton");

// Add event listener to the online and offline radio buttons
onlineRadio.addEventListener("change", function() {
  // Check if online radio button is checked
  if (onlineRadio.checked) {
    // Change the button text
    submitButton.textContent = "Pay Online";
  }
});

offlineRadio.addEventListener("change", function() {
  // Check if offline radio button is checked
  if (offlineRadio.checked) {
    // Change the button text
    submitButton.textContent = "Send request to admin";
  }
});
