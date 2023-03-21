const widget = document.getElementById("widget");
const widgetBox = document.createElement("div");
widgetBox.id = "widget-box";

widget.addEventListener("click", () => {
  if (widgetBox.style.display === "block") {
    widgetBox.style.opacity = "0";
    setTimeout(() => {
      widgetBox.style.display = "none";
      widgetBox.style.width = "200px";
      widgetBox.style.height = "200px";
      textField.style.display = "none";
      formatButton.style.display = "none";
      jsonifyButton.style.display = "none";
      message.style.display = "none";
      widgetBox.style.opacity = "1";
    }, 300);
  } else {
    widgetBox.style.display = "block";
    widgetBox.style.opacity = "0";
    setTimeout(() => {
      widgetBox.style.width = "400px";
      widgetBox.style.height = "400px";
      textField.style.display = "block";
      formatButton.style.display = "inline-block";
      jsonifyButton.style.display = "inline-block";
      message.style.display = "block";
      widgetBox.style.opacity = "1";
    }, 100);
  }
});

const textField = document.createElement("textarea");
textField.id = "jsonify";
textField.placeholder = "Paste your stuff here...";
textField.style.width = "90%";
textField.style.height = "70%";
textField.style.marginTop = "20px";
textField.style.marginLeft = "20px";
textField.style.padding = "10px";
textField.style.borderRadius = "5px";
textField.style.resize = "none";
textField.style.border = "1px solid #ccc";
textField.style.fontSize = "16px";
textField.style.fontFamily = "Arial, sans-serif";
textField.style.display = "none";
widgetBox.appendChild(textField);

const formatButton = document.createElement("button");
formatButton.innerHTML = "Format";
formatButton.style.margin = "10px 20px";
formatButton.style.padding = "10px 20px";
formatButton.style.marginLeft = "100px";
formatButton.style.borderRadius = "5px";
formatButton.style.fontSize = "16px";
formatButton.style.fontFamily = "Arial, sans-serif";
formatButton.style.display = "none";
widgetBox.appendChild(formatButton);

const jsonifyButton = document.createElement("button");
jsonifyButton.innerHTML = "JSONify";
jsonifyButton.style.margin = "10px 0";
jsonifyButton.style.padding = "10px 20px";
jsonifyButton.style.borderRadius = "5px";
jsonifyButton.style.fontSize = "16px";
jsonifyButton.style.fontFamily = "Arial, sans-serif";
jsonifyButton.style.display = "none";
widgetBox.appendChild(jsonifyButton);

const message = document.createElement("div");
message.style.marginLeft = "20px";
message.style.marginLeft = "160px";
message.style.fontFamily = "Arial, sans-serif";
message.style.display = "none";
widgetBox.appendChild(message);

formatButton.addEventListener("click", () => {
  try {
    const json = JSON.parse(textField.value);
    textField.value = JSON.stringify(json, null, 2);
    message.innerHTML = "JSON is valid!";
    message.style.color = "green";
  } catch (e) {
    message.innerHTML = "Invalid JSON!";
    message.style.color = "red";
  }
});

jsonifyButton.addEventListener("click", () => {
  try {
    generateButtonsFromJSON();
  } catch (e) {
    message.innerHTML = "Invalid JSON!";
    message.style.color = "red";
  }
});

widgetBox.style.position = "fixed";
widgetBox.style.bottom = "100px";
widgetBox.style.right = "20px";
widgetBox.style.borderRadius = "5px";
widgetBox.style.backgroundColor = "#fff";
widgetBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
widgetBox.style.opacity = "0";
widgetBox.style.transition = "all 0.3s ease-in-out";

document.body.appendChild(widgetBox);
