document.addEventListener("DOMContentLoaded", function() {
    const uploadButton = document.getElementById("uploadButton");
    const fileContainer = document.querySelector(".file-container");

    uploadButton.addEventListener("click", function() {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.multiple = true;
        fileInput.style.display = "none";

        fileInput.addEventListener("change", function() {
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

                viewButton.addEventListener("click", function() {
                    const blob = new Blob([file], { type: file.type });
                    const url = URL.createObjectURL(blob);
                    window.open(url, '_blank');
                });

                deleteButton.addEventListener("click", function() {
                    fileDiv.remove();
                });

                fileDiv.appendChild(fileName);
                fileDiv.appendChild(viewButton);
                fileDiv.appendChild(deleteButton);

                fileContainer.appendChild(fileDiv);

                reader.onload = function(event) {
                    const fileContent = event.target.result;
                };

                reader.readAsText(file);
            }
        });

        fileInput.click();
    });
});

document.getElementById("saveButton").addEventListener("click", function() {
    alert("Form Saved!");
});

document.getElementById("resetButton").addEventListener("click", function() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.querySelector(".file-container").innerHTML = "";
    alert("Form Reset!");
});
// JavaScript for Save and Reset Buttons

// Save Button
document.getElementById("saveButton").addEventListener("click", function() {
    // You can add your save functionality here
    alert("Form Saved!");
});

// Reset Button
document.getElementById("resetButton").addEventListener("click", function() {
    // You can add your reset functionality here
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.querySelector(".file-container").innerHTML = ""; // Clears uploaded files
    alert("Form Reset!");
});
