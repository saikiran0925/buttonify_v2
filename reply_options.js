numButtons = 1;
var numReply = 0;

function removeButtonFunction(buttonNum) {
  var buttonToRemove = document.getElementById("reply_" + buttonNum);
  buttonToRemove.remove();
}

function addOption() {
  var option = document.getElementById("optionInput").value;
  var repliesDiv = document.getElementById("replies");

  var replyDiv = document.createElement("div");
  replyDiv.id = "reply_" + numButtons;

  var optionLabel = document.createElement("label");
  optionLabel.htmlFor = "text" + numButtons;
  optionLabel.innerHTML = "Option " + (numButtons + 1);

  var optionInput = document.createElement("input");
  optionInput.type = "text";
  optionInput.id = "text_" + numButtons;
  optionInput.name = "text_" + numButtons;
  optionInput.value = option;

  var buttonContainerDiv = document.createElement("div");
  buttonContainerDiv.className = "button-container text-center";

  var removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "btn btn-danger remove-button";
  removeButton.setAttribute(
    "onclick",
    "removeButtonFunction(" + numButtons + ")"
  );
  removeButton.innerHTML = "Remove";

  replyDiv.appendChild(optionLabel);
  replyDiv.appendChild(optionInput);
  buttonContainerDiv.appendChild(removeButton);
  replyDiv.append(buttonContainerDiv);
  repliesDiv.appendChild(replyDiv);
  numButtons++;
}

function generateText() {
  var optionsDiv = document.getElementById("replies");
  var options = optionsDiv.getElementsByTagName("input");
  var allReplies = "";
  for (var i = 0; i < options.length; i++) {
    var option = options[i].value;
    // var reply = "Reply " + i + " 👉 for *" + option + "*\n";
    var reply = "Reply " + ( i + 1) + " \u{1F449} for *" + option + "*\n";
    allReplies += reply;
  }
  console.log(allReplies);

  var previousModal = document.getElementById("jsonModal");
  if (previousModal) {
    previousModal.remove();
  }

  var modal =
    '<div class="modal fade" id="jsonModal" tabindex="-1" aria-labelledby="jsonModalLabel" aria-hidden="true">';
  modal += '<div class="modal-dialog modal-dialog-centered">';
  modal += '<div class="modal-content">';
  modal += '<div class="modal-header">';
  modal += '<h5 class="modal-title" id="jsonModalLabel">Generated Text</h5>';
  modal +=
    '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';
  modal += "</div>";
  modal += '<div class="modal-body">';
  modal +=
    '<textarea id="jsonTextarea" class="form-control" readonly style="height: 200px;">' +
    allReplies +
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

function generateTextFromString() {
  var inputField = document.getElementById("jsonify");
  var repliesDiv = document.getElementById("replies");
  repliesDiv.innerHTML = "";

  const text = inputField.value;
  const lines = text.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    autoPopulate(line);
  }
}

function autoPopulate(line){
    var repliesDiv = document.getElementById("replies");

    var reply = document.createElement("div");
    reply.id = "reply_" + numReply;

    var optionLabel = document.createElement("label");
    optionLabel.htmlFor = "text" + numReply;
    optionLabel.innerHTML = "Option " + (numReply + 1);
  
    var optionInput = document.createElement("input");
    optionInput.type = "text";
    optionInput.id = "text_" + numReply;
    optionInput.name = "text_" + numReply;
    optionInput.value = line;


    var buttonContainerDiv = document.createElement("div");
    buttonContainerDiv.className = "button-container text-center";
  
    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "btn btn-danger remove-button";
    removeButton.setAttribute(
      "onclick",
      "removeButtonFunction(" + numReply + ")"
    );
    removeButton.innerHTML = "Remove";
  
    reply.appendChild(optionLabel);
    reply.appendChild(optionInput);
    buttonContainerDiv.appendChild(removeButton);
    reply.append(buttonContainerDiv);
    repliesDiv.appendChild(reply);
    numReply++;   
}
