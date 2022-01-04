const buttons = document.getElementsByClassName("custom-button");

for (let button of buttons) {
  const buttonText = button.getAttribute("data-text");
  button.innerHTML = customButtonForApp(buttonText);
}
