function generateJSON() {
  var textValue = document.getElementById("text").value;
  var titleValue = document.getElementById("title").value;
  var buttonValue = document.getElementById("button").value;

  if (textValue === "") {
    alert("Text cannot be empty");
    return false;
  }
  if (titleValue === "") {
    alert("Title cannot be empty");
    return false;
  }
  if (buttonValue === "") {
    alert("Button value cannot be empty");
    return false;
  } else {
    var sections = [];

    var sectionObject = {
      title: titleValue,
    };

    sections.push(sectionObject);

    var jsonObject = {
      type: "list",
      body: {
        type: "text",
        text: textValue,
      },
      action: {
        button: buttonValue,
        sections: sections,
      },
    };

    var jsonString = JSON.stringify(jsonObject);
    
    var previousModal = document.getElementById("jsonModal");
    if (previousModal) {
      previousModal.remove();
    }

    var modal =
      '<div class="modal fade" id="jsonModal" tabindex="-1" aria-labelledby="jsonModalLabel" aria-hidden="true">';
    modal += '<div class="modal-dialog modal-dialog-centered">';
    modal += '<div class="modal-content">';
    modal += '<div class="modal-header">';
    modal += '<h5 class="modal-title" id="jsonModalLabel">Generated JSON</h5>';
    modal +=
      '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';
    modal += "</div>";
    modal += '<div class="modal-body">';
    modal +=
      '<textarea id="jsonTextarea" class="form-control" readonly style="height: 200px;">' +
      jsonString +
      "</textarea>";
    modal += "</div>";
    modal += '<div class="modal-footer">';
    modal +=
      '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>';
    modal +=
      '<button type="button" class="btn btn-primary" data-clipboard-target="#jsonTextarea">Copy to Clipboard</button>';
    modal += "</div>";
    modal += "</div>";
    modal += "</div>";
    modal += "</div>";

    document.body.insertAdjacentHTML("beforeend", modal);

    var jsonModal = new bootstrap.Modal(document.getElementById("jsonModal"));
    jsonModal.show();

    var clipboard = new ClipboardJS(".btn-primary");
    clipboard.on("success", function (e) {
      console.log("Copied to clipboard");
      jsonModal.hide();
    });
  }
}

function validateListButton() {
  const buttonInput = document.getElementById("button");
  const errorMessage = document.getElementById("button_error");
  if (buttonInput === "") {
    errorMessage.innerHTML = "Button cannot be empty";
    return false;
  } else if (buttonInput.value.length > 20) {
    errorMessage.innerHTML = "Button input should not exceed 20 characters.";
    return false;
  } else {
    errorMessage.innerText = "";
  }
  return true;
}