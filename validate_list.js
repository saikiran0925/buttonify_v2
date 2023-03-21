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

function validateListTitle() {
  const titleInput = document.querySelectorAll("input[name^='title']");
  for (var i = 0; i < titleInput.length; i++) {
    const errorMessage = document.querySelector(
      "div[id='title_error_" + i + "']"
    );
    if (titleInput[i].value === "") {
      errorMessage.innerHTML = "Title cannot be empty";
      return false;
    } else if (titleInput[i].value.length > 24) {
      errorMessage.innerHTML = "Title should not exceed 24 characters";
      return false;
    } else {
      errorMessage.innerText = "";
    }
  }
  return true;
}

function validateListDesc() {
  const descriptionInput = document.querySelectorAll(
    "input[name^='description']"
  );
  for (var i = 0; i < descriptionInput.length; i++) {
    const errorMessage = document.querySelector(
      "div[id='desc_error_" + i + "']"
    );
    if (descriptionInput[i].value.length > 72) {
      errorMessage.innerHTML = "Description should not exceed 72 characters.";
      return false;
    } else {
      errorMessage.innerText = "";
    }
  }
  return true;
}

function validateListInput() {
  const resultButton = validateListButton();
  const resultTitle = validateListTitle();
  const resultDesc = validateListDesc();
  if (resultButton && resultTitle && resultDesc) {
    return true;
  } else {
    return false;
  }
}
