/* ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️   SAVE AND RESET  ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️ */

document.addEventListener("DOMContentLoaded", function() {
    const resetButton = document.getElementById("resetButton");
    const saveButton = document.getElementById("saveButton");
  
    // Function to reset the form fields to null
    resetButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      const name1 = document.getElementById("name1");
      const email = document.getElementById("email");
      const name2 = document.getElementById("password");
      const name3 = document.getElementById("phone");
  
      name1.value = "";
      email.value = "";
      name2.value = "";
      name3.value = "";
    });
  
    // Function to save the form data (you can customize this part)
    saveButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      const name1 = document.getElementById("name1").value;
      const email = document.getElementById("email").value;
      const name2 = document.getElementById("password").value;
      const name3 = document.getElementById("phone").value;
  
      // You can perform actions here to save the data, for example, send it to a server
      console.log("Name 1:", name1);
      console.log("Email:", email);
      console.log("Name 2:", name2);
      console.log("Name 3:", name3);
  
      // Optionally, you can show a success message to the user
      alert("Form data saved!");
    });
  });
  