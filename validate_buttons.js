function validateText() {
  const textInput = document.getElementById("text");
  const errorMessage = document.getElementById("text_error");
  if (textInput.value === "") {
    errorMessage.innerHTML = "Text cannot be empty";
    return false;
  } else if (textInput.value.length > 1024) {
    errorMessage.innerText = "Text should be no more than 24 characters";
    return false;
  } else {
    errorMessage.innerText = "";
  }
  return true;
}

function validateId() {
  const idInput = document.querySelectorAll("input[name^='id']");
  for (var i = 0; i < idInput.length; i++) {
    const errorMessage = document.querySelector("div[id='id_error_" + i + "']");
    if (idInput[i].value.trim() === "") {
      errorMessage.innerHTML = "ID cannot be empty";
      return false;
    } else if (/^\s|\s$/.test(idInput[i].value)) {
      errorMessage.innerHTML = "ID cannot have leading or trailing spaces.";
      return false;
    } else {
      errorMessage.innerText = "";
    }
  }
  return true;
}

function validateTitle() {
  const titleInput = document.querySelectorAll("input[name^='title']");
  for (var i = 0; i < titleInput.length; i++) {
    const errorMessage = document.querySelector(
      "div[id='title_error_" + i + "']"
    );
    if (titleInput[i].value === "") {
      errorMessage.innerHTML = "Title cannot be empty";
      return false;
    } else if (titleInput[i].value.length > 20) {
      errorMessage.innerHTML = "Title should not exceed 20 characters";
      return false;
    } else {
      errorMessage.innerText = "";
    }
  }
  return true;
}

function validateInput() {
  const resultText = validateText();
  const resultId = validateId();
  const resultTitle = validateTitle();
  if (resultId && resultText && resultTitle) {
    return true;
  } else {
    return false;
  }
}
