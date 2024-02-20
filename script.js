const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.href = "script.css";

document.head.appendChild(cssLink);

const sliders = document.querySelectorAll("[rs-range]");

// slider init
(function () {
  sliders.forEach((slider) => {
    // set custom attributes
    const attributes = {
      "rs-track-color": "--track",
      "rs-track-bg": "--track-bg",
      "rs-thumb-color": "--thumb-color",
      "rs-thumb-border-color": "--thumb-border",
    };

    for (const [attr, prop] of Object.entries(attributes)) {
      const value = slider.getAttribute(attr);
      if (value) {
        slider.style.setProperty(prop, value);
      }
    }

    // disable hover effect

    if (slider.getAttribute("rs-hover-disable")) {
      slider.style.setProperty("--thumb-hover-bg", "transparent");
      slider.style.setProperty("--thumb-active-bg", "transparent");
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
