const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "styles.css";

document.head.appendChild(cssLink);

// const sliderEl = document.querySelector("#range");
// const sliderValue = document.querySelector("#range-number");

const sliders = document.querySelectorAll("input[type=range]");

// slider init
(function () {
  sliders.forEach((slider) => {
    const sliderValue = slider.nextElementSibling;

    const updateSlider = (value) => {
      const tempSliderValue = value > slider.max ? slider.max : value || 0;
      slider.value = tempSliderValue;
      sliderValue.value = tempSliderValue;
      const progress = (tempSliderValue / slider.max) * 100;
      slider.style.background = `linear-gradient(to right, var(--track) ${progress}%, var(--track-bg) ${progress}%)`;
    };

    sliderValue.addEventListener("input", (event) => {
      updateSlider(parseFloat(event.target.value));
    });

    slider.addEventListener("input", (event) => {
      updateSlider(parseFloat(event.target.value));
    });

    updateSlider(parseFloat(slider.value));
  });
})();
