/////////////////payment script /////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const uploadButton = document.getElementById("uploadButton");
  const fileContainer = document.querySelector(".file-container");

  uploadButton.addEventListener("click", function () {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.multiple = true;
    fileInput.style.display = "none";

    fileInput.addEventListener("change", function () {
      const files = fileInput.files;

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        const fileDiv = document.createElement("div");
        const fileName = document.createElement("p");
        const viewButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        fileName.textContent = file.name;
        viewButton.textContent = "View";
        deleteButton.textContent = "Delete";

        fileDiv.classList.add("file");
        fileName.classList.add("file-name");
        viewButton.classList.add("button", "view-button");
        deleteButton.classList.add("button", "delete-button");

        viewButton.addEventListener("click", function () {
          const blob = new Blob([file], { type: file.type });
          const url = URL.createObjectURL(blob);
          window.open(url, "_blank");
        });

        deleteButton.addEventListener("click", function () {
          fileDiv.remove();
        });

        fileDiv.appendChild(fileName);
        fileDiv.appendChild(viewButton);
        fileDiv.appendChild(deleteButton);

        fileContainer.appendChild(fileDiv);

        reader.onload = function (event) {
          const fileContent = event.target.result;
        };

        reader.readAsText(file);
      }
    });

    fileInput.click();
  });
});

document.getElementById("saveButton").addEventListener("click", function () {
  alert("Form Saved!");
});

document.getElementById("resetButton").addEventListener("click", function () {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.querySelector(".file-container").innerHTML = "";
  alert("Form Reset!");
});











////////////////////uplaod image //////////////////
function handleUpload() {
  const fileInput = document.getElementById("fileInput");
  fileInput.click(); // Simulate a click on the file input element
  fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imageSrc = e.target.result;
        const displayImage = document.getElementById("displayImage");
        displayImage.src = imageSrc;
      };
      reader.readAsDataURL(file);
    }
  });
}
// Function to delete the displayed image
function deleteImage() {
  const displayImage = document.getElementById("displayImage");
  displayImage.src = "";
  const fileInput = document.getElementById("fileInput");
  fileInput.value = ""; // Clear the file input
}




///////////////////////////////reset and save //////////////////////
document.addEventListener("DOMContentLoaded", function () {
  // Function to handle Reset button click
  document
    .getElementById("resetButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      resetForm();
    });
  // Function to handle Save button click
  document
    .getElementById("saveButton")
    .addEventListener("click", function (event) {
      event.preventDefault();
      saveForm();
    });
  // Function to reset form fields
  function resetForm() {
    // Reset input values
    document.querySelector(".user-name").value = "";
    document.querySelector(".user-email").value = "";
    document.querySelector(".user-phone").value = "";
    document.querySelector(".user-password").value = "";
    document.querySelector(".shop-id").value = "";
    document.querySelector(".start-date").value = "";
    document.querySelector(".security-code").value = "";
    document.querySelector(".user-state").value = "";
    document.querySelector(".user-district").value = "";
    document.querySelector(".user-town").value = "";
    document.querySelector(".user-pincode").value = "";
    // Reset image display and upload label
    document.getElementById("displayImage").src = "";
    document.getElementById("uploadLabel").innerText = "Upload";
    // Clear any uploaded files
    var fileContainer = document.querySelector(".file-container");
    fileContainer.innerHTML = "";
  }
  // Function to save form data (you can customize this based on your needs)
  function saveForm() {
    // Here you can collect form data and perform your save operations
    let name = document.querySelector(".user-name").value;
    let email = document.querySelector(".user-email").value;
    let phone = document.querySelector(".user-phone").value;
    let password = document.querySelector(".user-password").value;
    // Get other form values as needed
    // For demonstration, let's log the values to console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Password:", password);
    // Log other form values as needed
  }
});
