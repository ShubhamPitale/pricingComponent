const rangeSlider = document.getElementById("myslider");
const views = document.querySelector(".views");
const price = document.querySelector(".price");
const check = document.querySelector(".check");

rangeSlider.oninput = function () {
  const value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right,hsl(174, 77%, 80%) 0%,hsl(174, 77%, 80%) " +
    value +
    "%,hsl(224, 65%, 95%) " +
    value +
    "% ,hsl(224, 65%, 95%) 100%)";

  rangeSlider.style.setProperty("--sliderColor", "hsl(174, 96%, 31%)");
  let costValue;
  if (check.checked) {
    costValue = +this.value - +this.value * 0.25;
    switch (costValue) {
      case 6:
        views.textContent = "10K";
        price.textContent = `$${costValue}.00`;
        break;
      case 9:
        views.textContent = "50K";
        price.textContent = `$${costValue}.00`;
        break;
      case 12:
        views.textContent = "100K";
        price.textContent = `$${costValue}.00`;
        break;
      case 18:
        views.textContent = "500K";
        price.textContent = `$${costValue}.00`;
        break;
      case 27:
        views.textContent = "1M";
        price.textContent = `$${costValue}.00`;
        break;
    }
  } else {
    costValue = +this.value;
    switch (costValue) {
      case 8:
        views.textContent = "10K";
        price.textContent = `$${costValue}.00`;
        break;
      case 12:
        views.textContent = "50K";
        price.textContent = `$${costValue}.00`;
        break;
      case 16:
        views.textContent = "100K";
        price.textContent = `$${costValue}.00`;
        break;
      case 24:
        views.textContent = "500K";
        price.textContent = `$${costValue}.00`;
        break;
      case 36:
        views.textContent = "1M";
        price.textContent = `$${costValue}.00`;
        break;
    }
  }
};
