const getColor = () => {
  // Hex Code
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16); // hexadecimal code we have to pass that is 16
  document.body.style.backgroundColor = randomCode;
  document.getElementById("color-code").innerText = randomCode;
};

document.getElementById("btn").addEventListener("click", getColor);

getColor();
