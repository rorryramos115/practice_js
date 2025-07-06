document.addEventListener("DOMContentLoaded", () => {
  const fruitSelect = document.getElementById("fruitSelect");
  const output = document.getElementById("output");

  fruitSelect.addEventListener("input", () => {
    const selected = fruitSelect.value;
    output.textContent = selected
      ? `You selected: ${selected}`
      : "Please select a fruit.";
  });
});
