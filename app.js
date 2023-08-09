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
let finalTime = 6;
let btns = document.querySelectorAll(".btn");
let times = document.querySelectorAll(".selected-time");

for (let btn of btns) {
  btn.addEventListener("click", function () {
    finalTime = parseInt(btn.textContent.slice(0, 2));
    for (let time of times) {
      time.textContent = btn.textContent;
    }

    for (let btn of btns) {
      btn.classList.remove("focus");
    }

    btn.classList.add("focus");
    calculateAndDisplayROI();
  });
}

for (let time of times) {
  time.textContent = `${finalTime} months`;
}

let defaultButton = document.querySelector("#btn6months");
if (defaultButton) {
  defaultButton.classList.add("focus");
}

//result calculator
function calculateAndDisplayROI() {
  let traffic = parseInt(document.querySelector("#Monthly-traffic").value);
  let orders = parseInt(document.querySelector("#Monthly-orders").value);
  let revenue = parseInt(document.querySelector("#Monthly-revenue").value);
  let sliderValue = parseInt(document.querySelector("#slider").value);

  let result =
    ((orders / traffic) * (sliderValue / 100) * traffic * (revenue / orders) -
      revenue) *
    finalTime;

  console.log("result = ", result);

  let cost = finalTime * 3500;
  console.log("cost", cost);

  let ROI = result - cost;
  console.log("ROI = ", ROI);

  let ROIPercent = result !== 0 ? (ROI / result) * 100 : 0;

  // let ROIPercent = (ROI / result) * 100;
  ROIPercent = Math.min(ROIPercent, 100);
  console.log("ROIPercent", ROIPercent);

  let RESULT = document.querySelector("#result-amount");
  // parseInt(RESULT.textContent.toFixed(0));
  RESULT.textContent = parseInt(result.toFixed(0));

  let roi = document.querySelector("#ROI");
  // parseInt(roi.textContent.toFixed(0));
  roi.textContent = parseInt(ROI.toFixed(0));

  let ROIPercentElements = document.querySelectorAll(".ROI-percent");
  for (let element of ROIPercentElements) {
    element.textContent = `(${ROIPercent.toFixed(0)}%)`;
  }
}

calculateAndDisplayROI();
