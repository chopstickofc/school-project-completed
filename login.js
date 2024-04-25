document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var formData = new FormData(this);

    // Convert form data to JSON
    var jsonObject = {};
    formData.forEach(function(value, key){
        jsonObject[key] = value;
    });

    // Simulate login verification (replace with actual verification logic)
    var username = jsonObject.username;
    var password = jsonObject.password;

    if (username === "exampleUser" && password === "examplePassword") {
        // Login successful, redirect or perform other actions
        console.log("Login successful");
    } else {
        // Display error message
        var errorMessageElement = document.getElementById("errorMessage");
        errorMessageElement.textContent = "Incorrect username or password. Please try again.";
        errorMessageElement.style.color = "red";
    }
});
