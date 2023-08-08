//Dynamic range setter
let aboveRange = document.querySelector("#selected-value");
let belowRange = document.querySelector("#slider-value");
let slider = document.querySelector("#slider");

aboveRange.textContent = slider.value + "%";
belowRange.textContent = slider.value + "%";

slider.addEventListener("input", function () {
  aboveRange.textContent = slider.value + "%";
  belowRange.textContent = slider.value + "%";
});

//dynamic month setter
let finalTime = 0;
let btns = document.querySelectorAll(".btn");
let times = document.querySelectorAll(".selected-time");
for (let btn of btns) {
  btn.addEventListener("click", function () {
    finalTime = parseInt(btn.textContent.slice(0, 2));
    for (let time of times) {
      time.textContent = btn.textContent;
    }
    calculateAndDisplayROI();
  });
}

function calculateAndDisplayROI() {
  let traffic = parseInt(document.querySelector("#Monthly-traffic").value);
  let orders = parseInt(document.querySelector("#Monthly-orders").value);
  let revenue = parseInt(document.querySelector("#Monthly-revenue").value);
  let sliderValue = parseInt(document.querySelector("#slider").value);

  let result =
    ((orders / traffic) * (sliderValue / 100) * traffic * (revenue / orders) -
      revenue) *
    finalTime;
  console.log(result);

  let cost = finalTime * 3500;
  console.log(cost);
  let ROI = result - cost;
  console.log(ROI);
  let ROIPercent = result !== 0 ? (ROI / result) * 100 : 0;
  ROIPercent = Math.min(ROIPercent, 100);
  console.log(ROIPercent);

  document.querySelector("#result-amount").textContent = result.toFixed(2);
  document.querySelector("#ROI").textContent = ROI.toFixed(2);
  let ROIPercentElements = document.querySelectorAll(".ROI-percent");
  ROIPercentElements.forEach((element) => {
    element.textContent = `(${ROIPercent.toFixed(2)}%)`;
  });
}

calculateAndDisplayROI();
