const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "styles.css";

document.head.appendChild(cssLink);

const sliderEl = document.querySelector("#range");
const sliderValue = document.querySelector("#range-number");

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value;

  sliderValue.value = tempSliderValue;

  const progress = (tempSliderValue / sliderEl.max) * 100;

  sliderEl.style.background = `linear-gradient(to right, var(--track) ${progress}%, var(--track-bg) ${progress}%)`;
});

sliderValue.addEventListener("input", (event) => {
  let tempSliderValue;
  if (!sliderValue.value) {
    tempSliderValue = 0;
  } else if (sliderValue.value > sliderValue.max) {
    tempSliderValue = sliderValue.max;
    sliderValue = sliderValue.max;
  } else {
    tempSliderValue = event.target.value;
  }
  sliderEl.value = tempSliderValue;

  const progress = (tempSliderValue / sliderEl.max) * 100;
  sliderEl.style.background = `linear-gradient(to right, var(--track) ${progress}%, var(--track-bg) ${progress}%)`;
});
