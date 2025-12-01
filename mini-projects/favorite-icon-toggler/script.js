function colorizeTitle(selector, colors) {
  const title = document.querySelector(selector);

  let result = "";
  for (let i = 0; i < title.textContent.length; i++) {
    const letter = title.textContent[i];
    const color = colors[i % colors.length];
    result += `<span style="color:${color}">${letter}</span>`;
  }

  title.innerHTML = result;
}

colorizeTitle("h1", ["red", "green"]);

const buttons = document.querySelectorAll(".favorite-icon");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("filled");
    if (button.classList.contains("filled")) {
      button.innerHTML = "&#10084;";  
    } else {
      button.innerHTML = "&#9825;";  
    }

  });

});
