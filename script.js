const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "styles.css";

document.head.appendChild(cssLink);

const sliders = document.querySelectorAll("input[type=range]");

// slider init
(function () {
  sliders.forEach((slider) => {
    if (slider.getAttribute("rs-track-color")) {
      const trackColor = slider.getAttribute("rs-track-color");
      slider.style.setProperty("--track", trackColor);
    }

    if (slider.getAttribute("rs-track-bg")) {
      const trackBg = slider.getAttribute("rs-track-bg");
      slider.style.setProperty("--track-bg", trackBg);
    }

    if (slider.getAttribute("rs-thumb-color")) {
      const thumbColor = slider.getAttribute("rs-thumb-color");
      slider.style.setProperty("--thumb-color", thumbColor);
    }

    if (slider.getAttribute("rs-hover-disable")) {
      slider.style.setProperty("--thumb-hover-bg", "transparent");
      slider.style.setProperty("--thumb-active-bg", "transparent");
    }

    // define conditional slider input
    if (
      typeof slider.closest("[rs-parent]").querySelector("[rs-input-field]") !==
      "undefined"
    ) {
      var sliderInput = slider
        .closest("[rs-parent]")
        .querySelector("[rs-input-field]");
    }

    const updateSlider = (value) => {
      const tempSliderValue = value > slider.max ? slider.max : value || 0;
      slider.value = tempSliderValue;
      if (sliderInput) {
        sliderInput.value = tempSliderValue;
      }
      const progress = (tempSliderValue / slider.max) * 100;
      slider.style.background = `linear-gradient(to right, var(--track) ${progress}%, var(--track-bg) ${progress}%)`;
    };

    if (sliderInput) {
      sliderInput.addEventListener("input", (event) => {
        updateSlider(parseFloat(event.target.value));
      });
    }

    slider.addEventListener("input", (event) => {
      updateSlider(parseFloat(event.target.value));
    });

    updateSlider(parseFloat(slider.value));
  });
})();
