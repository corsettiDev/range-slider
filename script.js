const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "styles.css";

document.head.appendChild(cssLink);

const sliders = document.querySelectorAll("[rs-range]");

// slider init
(function () {
  sliders.forEach((slider) => {
    // define slider style overrides
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

    if (slider.getAttribute("rs-thumb-border-color")) {
      const thumbBorderColor = slider.getAttribute("rs-thumb-border-color");
      slider.style.setProperty("--thumb-border", thumbBorderColor);
    }

    // define conditional slider input
    if (
      typeof slider.closest("[rs-parent]").querySelector("[rs-input]") !==
      "undefined"
    ) {
      var sliderInput = slider
        .closest("[rs-parent]")
        .querySelector("[rs-input]");
    }

    // slider update function
    const updateSlider = (value) => {
      const tempSliderValue = value > slider.max ? slider.max : value || 0;
      slider.value = tempSliderValue;
      if (sliderInput) {
        sliderInput.value = tempSliderValue;
      }
      const progress = (tempSliderValue / slider.max) * 100;
      slider.style.background = `linear-gradient(to right, var(--track, black) ${progress}%, var(--track-bg, #ccc) ${progress}%)`;
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
