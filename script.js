const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "styles.css";

document.head.appendChild(cssLink);

const sliderEl = document.querySelector("#range");
const sliderValue = document.querySelector("#range-number");

const sliders = document.querySelectorAll("input[type=range]");

// slider init
(function () {
  sliders.forEach((slider) => {
    const sliderValue = slider.nextElementSibling;
    sliderValue.addEventListener("input", (event) => {
      let tempSliderValue;
      if (!sliderValue.value) {
        tempSliderValue = 0;
      } else if (sliderValue.value > sliderValue.max) {
        tempSliderValue = sliderValue.max;
        sliderValue.value = sliderValue.max;
      } else {
        tempSliderValue = event.target.value;
      }
      slider.value = tempSliderValue;

      const progress = (tempSliderValue / slider.max) * 100;
      slider.style.background = `linear-gradient(to right, var(--track) ${progress}%, var(--track-bg) ${progress}%)`;
    });

    const progress = (slider.value / slider.max) * 100;
    slider.style.background = `linear-gradient(to right, var(--track) ${progress}%, var(--track-bg) ${progress}%)`;

    slider.addEventListener("input", (event) => {
      const tempSliderValue = event.target.value;

      sliderValue.value = tempSliderValue;

      const progress = (tempSliderValue / slider.max) * 100;

      slider.style.background = `linear-gradient(to right, var(--track) ${progress}%, var(--track-bg) ${progress}%)`;
    });
  });
})();
