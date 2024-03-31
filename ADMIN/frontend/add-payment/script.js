var today = new Date();

// Extract the parts of the date
var day = today.getDate();
var month = today.getMonth() + 1; // January is 0!
var year = today.getFullYear();

// Format the date as needed (e.g., "MM/DD/YYYY")
var formattedDate = month + '/' + day + '/' + year;

// Update the element with class "date" with the formatted date
document.querySelector('.date').textContent = formattedDate;