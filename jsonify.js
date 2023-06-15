// Function to add event listeners for the close buttons
function addCloseButtonListeners() {
    var closeBtns = document.getElementsByClassName("close");
    for (var i = 0; i < closeBtns.length; i++) {
      closeBtns[i].addEventListener("click", function() {
        this.parentElement.parentElement.remove();
      });
    }
  }
  
  // Validate JSON button
  document.getElementById("validate-btn").addEventListener("click", function() {
    var jsonInput = document.getElementById("json-input").value;
    var output = document.getElementById("output");
  
    try {
      JSON.parse(jsonInput);
      output.innerHTML = "<div class='alert alert-success'>Valid JSON <span class='close'>&times;</span></div>";
      setTimeout(function() {
        output.firstChild.classList.add("fade-out");
        setTimeout(function() {
          output.innerHTML = "";
        }, 1000);
      }, 5000);
  
      addCloseButtonListeners(); // Add event listeners for the close buttons
    } catch (error) {
      output.innerHTML = "<div class='alert alert-danger'>Invalid JSON <span class='close'>&times;</span></div>";
      
      addCloseButtonListeners(); // Add event listeners for the close buttons
    }
  });
  
  // Format JSON button
  document.getElementById("format-btn").addEventListener("click", function() {
    var jsonInput = document.getElementById("json-input").value;
  
    try {
      var parsedJSON = JSON.parse(jsonInput);
      var formattedJSON = JSON.stringify(parsedJSON, null, 2);
      document.getElementById("json-input").value = formattedJSON;
    } catch (error) {
      console.log(error);
    }
  });
  
  // Stringify JSON button
  document.getElementById("stringify-btn").addEventListener("click", function() {
    var jsonInput = document.getElementById("json-input").value;
  
    try {
      var parsedJSON = JSON.parse(jsonInput);
      var stringifiedJSON = JSON.stringify(parsedJSON);
      document.getElementById("json-input").value = stringifiedJSON;
    } catch (error) {
      console.log(error);
    }
  });
  
  // Save JSON button
  document.getElementById("save-btn").addEventListener("click", function() {
    var jsonInput = document.getElementById("json-input").value;
    // Implement logic to save the JSON data
  });
  
  // Generate JSON button
  document.getElementById("generate-btn").addEventListener("click", function() {
    var jsonInput = document.getElementById("json-input").value;
  
    // Display JSON input in modal popup
    var generatedTextArea = document.getElementById("generated-json");
    generatedTextArea.value = jsonInput;
  
    // Show the modal
    var modal = document.getElementById("myModal");
    modal.classList.add("show");
  });
  
  // JavaScript code to close the modal when clicking the close button
  const modal = document.getElementById("myModal");
  const closeBtn = document.getElementById("close-btn");
  
  closeBtn.addEventListener("click", function() {
    modal.classList.remove("show");
  });
  
  // Copy to clipboard button
  document.getElementById("copy-btn").addEventListener("click", function() {
    var generatedTextArea = document.getElementById("generated-json");
    generatedTextArea.select();
    document.execCommand("copy");
  
    // Close the modal
    modal.classList.remove("show");
  });
  