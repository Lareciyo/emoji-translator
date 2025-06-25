document.getElementById("submit-button").addEventListener("click", function () {
    
  const inputText = document.getElementById("translator-input").value.trim();
  const resultsEl = document.getElementById("results");
  const selectedOption = document.querySelector("input[name='translation-section']:checked").value;

  resultsEl.innerText = "";

  if (!inputText && selectedOption !== "random") {
    resultsEl.innerText = "Please enter some text.";
    return;
  }

  switch (selectedOption) {
    case "encode":
      resultsEl.innerText = encode(inputText);
      break;

    case "translate":
      resultsEl.innerText = translate(inputText)
      break;

    case "madlib":
      resultsEl.innerText = madlib(inputText)
      break;

    case "search":
      const matches = search(inputText);
      
      if (matches.length === 0) {
        resultsEl.innerText = "No emojis found.";
      } else {
        matches.forEach(match => {
          const p = document.createElement("p");
          p.innerText = match.symbol;
          resultsEl.appendChild(p);
        });
      }
      break;

    case "random":
      const options = ["encode", "translate", "madlib", "search"];
      const randIndex = Math.floor(Math.random() * options.length);
      const randomMode = options[randIndex];

      document.querySelector(`input[value="${randomMode}"]`).checked = true;
      document.getElementById("submit-button").click();
      break;

    default:
      resultsEl.innerText = "Unknown translation option selected.";
  }
});
