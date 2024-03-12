document.addEventListener("DOMContentLoaded", function() {
    const uploadForm = document.getElementById("uploadForm");
    const fileInput = document.getElementById("fileInput");
    const fileContainer = document.querySelector(".file-container");

    uploadForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const files = fileInput.files;

        // Loop through each file
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            // Create elements for displaying file
            const fileDiv = document.createElement("div");
            const fileName = document.createElement("p");
            const viewButton = document.createElement("button");
            const deleteButton = document.createElement("button");

            fileName.textContent = file.name;
            viewButton.textContent = "View";
            deleteButton.textContent = "Delete";

            // Add classes to elements
            fileDiv.classList.add("file");
            fileName.classList.add("file-name");
            viewButton.classList.add("button", "view-button");
            deleteButton.classList.add("button", "delete-button");

            // Add event listeners for buttons
            viewButton.addEventListener("click", function() {
                // Implement view functionality here
                alert("Viewing: " + file.name);
            });

            deleteButton.addEventListener("click", function() {
                // Implement delete functionality here
                fileDiv.remove();
            });

            // Append elements to fileDiv
            fileDiv.appendChild(fileName);
            fileDiv.appendChild(viewButton);
            fileDiv.appendChild(deleteButton);

            // Add fileDiv to fileContainer
            fileContainer.appendChild(fileDiv);

            // Read the file as text and display its contents
            reader.onload = function(event) {
                const fileContent = event.target.result;
                // Display file content if needed
            };

            reader.readAsText(file);
        }
    });
});
