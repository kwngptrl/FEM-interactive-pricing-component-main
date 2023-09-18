const rangeSlider = document.querySelector("#slider");
const pageviews = document.querySelector(".pageviews");
const plan = document.querySelector(".plan");
const pageViewPerMonth = [["10K", 8, "10,000"], ["50K", 12, "50,000"], ["100K", 16, "100,000"], ["500K", 24, "500,000"], ["1M", 36, "1,000,000"]];
const radioButtons = document.querySelectorAll('input[name="billing"]');

function addProgress(tempSliderValue, selectedBilling) {
  selectedBilling = radioButtons.item(0).checked ? radioButtons.item(0).value : radioButtons.item(1).value;
  pageviews.textContent = pageViewPerMonth[tempSliderValue][0];
  plan.innerText = `$${(pageViewPerMonth[tempSliderValue][1] * selectedBilling).toFixed(2)}`;
  const progress = (tempSliderValue / rangeSlider.max) * 100;
  rangeSlider.style.background = `linear-gradient(to right, var(--soft-cyan-full-slider-bar) ${progress}%, var(--neutral-light-grayish-blue) ${progress}%)`;
  rangeSlider.ariaValueText = `${pageViewPerMonth[tempSliderValue][2]} pageviews for ${pageViewPerMonth[tempSliderValue][1] * selectedBilling} dollars per month`;
}

rangeSlider.addEventListener("input", (event) => {
  /* console.log(event.target.value); */
  addProgress(event.target.value);
});


window.onload = (event) => {
  for(const radioButton of radioButtons){
    radioButton.addEventListener('change', () => {
      addProgress(rangeSlider.value);
    });
  }
  addProgress(rangeSlider.value);
}