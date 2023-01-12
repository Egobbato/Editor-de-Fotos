const inputs = document.querySelectorAll(".controle input");

function handleUpdade() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => {
  input.addEventListener("change", handleUpdade);
});
inputs.forEach((input) => {
  input.addEventListener("mousemove", handleUpdade);
});
