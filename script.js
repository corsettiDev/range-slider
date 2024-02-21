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
      // track
      "rs-track-color": "--track",
      "rs-track-bg": "--track-bg",
      "rs-track-border-radius": "--track-border-radius",
      // thumb
      "rs-thumb-color": "--thumb-color",
      "rs-thumb-size": "--thumb-size",
      // thumb border
      "rs-thumb-border-color": "--thumb-border",
      "rs-thumb-border-size": "--thumb-border-size",
      "rs-thumb-border-style": "--thumb-border-style",
      "rs-thumb-border-color": "--thumb-border-color",
      "rs-thumb-border-radius": "--thumb-border-radius",
      // hover effect
      "rs-thumb-hover-size": "--thumb-hover-size",
      "rs-thumb-hover-bg": "--thumb-hover-bg",
      // active effect
      "rs-thumb-active-size": "--thumb-active-size",
      "rs-thumb-active-bg": "--thumb-active-bg",
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
      slider.style.background = `linear-gradient(to right, var(--track, black) ${progress}%, var(--track-bg, lightGray) ${progress}%)`;
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
