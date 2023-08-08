// //id="Monthly-traffic"
// //id="Monthly-orders"
// //id="Monthly-revenue"

// //id="selected-value"(range)(jo screen me mention hogi) // done
// // input ki id (#slider hai) // done

// //id="btn3months"  // done
// //id="btn6months"    // done
// // id="btn9months"    // done
// //id="btn12months"     // done

// //class="ROI-percent"(percentage)
// //id="slider-value" (percentage) // done
// //id="result-amount" (number)
// //class="selected-time (3,6,9,12)  // done
// //id="ROI"(number)

// // ******input boxes**************************************************************************
// // let traffic = document.querySelector("#Monthly-traffic");
// // let orders = document.querySelector("#Monthly-orders");
// // let revenue = document.querySelector("#Monthly-revenue");
// // let result = document.querySelector("#result-amount");

// //range***************************************************************************************
// let aboveRange = document.querySelector("#selected-value");
// let belowRange = document.querySelector("#slider-value");
// let slider = document.querySelector("#slider");

// //initial range commits
// aboveRange.textContent = slider.value + "%";
// belowRange.textContent = slider.value + "%";

// //final range commits
// slider.addEventListener("input", function () {
//   aboveRange.textContent = slider.value + "%";
//   belowRange.textContent = slider.value + "%";
// });

// //handling buttons*****************************************************************************
// let month3 = document.querySelector("#btn3months");
// let month6 = document.querySelector("#btn6months");
// let month9 = document.querySelector("#btn9months");
// let month12 = document.querySelector("#btn12months");
// let belowTime = document.querySelectorAll(".selected-time");

// // month3.addEventListener("click", function () {
// //   for (let time of belowTime) {
// //     time.textContent = month3.textContent;
// //   }
// //   calculateAndDisplayROI();
// // });

// // month6.addEventListener("click", function () {
// //   for (let time of belowTime) {
// //     time.textContent = month6.textContent;
// //   }
// //   calculateAndDisplayROI();
// // });

// // month9.addEventListener("click", function () {
// //   for (let time of belowTime) {
// //     time.textContent = month9.textContent;
// //   }
// //   calculateAndDisplayROI();
// // });

// // month12.addEventListener("click", function () {
// //   for (let time of belowTime) {
// //     time.textContent = month12.textContent;
// //   }
// //   calculateAndDisplayROI();
// // });

// month3.addEventListener("click", function () {
//   updateSelectedTime(month3.textContent);
//   calculateAndDisplayROI();
// });

// month6.addEventListener("click", function () {
//   updateSelectedTime(month6.textContent);
//   calculateAndDisplayROI();
// });

// month9.addEventListener("click", function () {
//   updateSelectedTime(month9.textContent);
//   calculateAndDisplayROI();
// });

// month12.addEventListener("click", function () {
//   updateSelectedTime(month12.textContent);
//   calculateAndDisplayROI();
// });

// function updateSelectedTime(newTime) {
//   let belowTime = document.querySelectorAll(".selected-time");
//   belowTime.forEach((time) => {
//     time.textContent = newTime;
//   });
// }

// function extractMonthsFromString(str) {
//   return parseInt(str.split(" ")[0]);
// }

// //calculations***************************************************************************************
// // let me first manage my time frames
// // let selectedTimePeriod = 3;

// // function setTimePeriod(month) {
// //   selectedTimePeriod = month;
// // }

// // month3.addEventListener("click", function () {
// //   setTimePeriod(3);
// // });

// // month6.addEventListener("click", function () {
// //   setTimePeriod(6);
// // });

// // month9.addEventListener("click", function () {
// //   setTimePeriod(9);
// // });

// // month12.addEventListener("click", function () {
// //   setTimePeriod(12);
// // });

// // **final output*******************************************************************************
// function calculateAndDisplayROI() {
//   let trafficInput = parseFloat(
//     document.querySelector("#Monthly-traffic").value
//   );
//   let ordersInput = parseFloat(document.querySelector("#Monthly-orders").value);
//   let revenueInput = parseFloat(
//     document.querySelector("#Monthly-revenue").value
//   );
//   let sliderValue = parseFloat(document.querySelector("#slider").value);

//   let selectedTimePeriodText =
//     document.querySelector(".selected-time").textContent;
//   let selectedTimePeriod = extractMonthsFromString(selectedTimePeriodText);

//   let result =
//     ((ordersInput / trafficInput) *
//       (sliderValue / 100) *
//       trafficInput *
//       (revenueInput / ordersInput) -
//       revenueInput) *
//     selectedTimePeriod;

//   let cost = selectedTimePeriod * 3500;
//   let ROI = result - cost;
//   let ROIPercent = (ROI / result) * 100;

//   document.getElementById("result-amount").textContent = `${result.toFixed(2)}`;
//   document.getElementById("ROI").textContent = `${ROI.toFixed(2)}`;
//   const ROIPercentElements = document.querySelectorAll(".ROI-percent");
//   ROIPercentElements.forEach((element) => {
//     element.textContent = `(${ROIPercent.toFixed(2)}%)`;
//   });
// }

// *****************************************************************************************
let aboveRange = document.querySelector("#selected-value");
let belowRange = document.querySelector("#slider-value");
let slider = document.querySelector("#slider");

aboveRange.textContent = slider.value + "%";
belowRange.textContent = slider.value + "%";

slider.addEventListener("input", function () {
  aboveRange.textContent = slider.value + "%";
  belowRange.textContent = slider.value + "%";
});

let month3 = document.querySelector("#btn3months");
let month6 = document.querySelector("#btn6months");
let month9 = document.querySelector("#btn9months");
let month12 = document.querySelector("#btn12months");
let belowTime = document.querySelectorAll(".selected-time");

month3.addEventListener("click", function () {
  updateSelectedTime(month3.textContent);
  calculateAndDisplayROI();
});

month6.addEventListener("click", function () {
  updateSelectedTime(month6.textContent);
  calculateAndDisplayROI();
});

month9.addEventListener("click", function () {
  updateSelectedTime(month9.textContent);
  calculateAndDisplayROI();
});

month12.addEventListener("click", function () {
  updateSelectedTime(month12.textContent);
  calculateAndDisplayROI();
});

function updateSelectedTime(newTime) {
  let belowTime = document.querySelectorAll(".selected-time");
  belowTime.forEach((time) => {
    time.textContent = newTime;
  });
}

function extractMonthsFromString(str) {
  return parseInt(str.split(" ")[0]);
}

function calculateAndDisplayROI() {
  let trafficInput = parseFloat(
    document.querySelector("#Monthly-traffic").value
  );
  let ordersInput = parseFloat(document.querySelector("#Monthly-orders").value);
  let revenueInput = parseFloat(
    document.querySelector("#Monthly-revenue").value
  );
  let sliderValue = parseFloat(document.querySelector("#slider").value);

  let selectedTimePeriodText =
    document.querySelector(".selected-time").textContent;
  let selectedTimePeriod = extractMonthsFromString(selectedTimePeriodText);

  //   let result =
  //     ((ordersInput / trafficInput) *
  //       (sliderValue / 100) *
  //       trafficInput *
  //       (revenueInput / ordersInput) -
  //       revenueInput) *
  //     selectedTimePeriod;

  result =
    ((ordersInput / trafficInput) *
      (sliderValue / 100) *
      trafficInput *
      (revenueInput / ordersInput) -
      revenueInput) *
    selectedTimePeriod;

  let cost = selectedTimePeriod * 3500;
  let ROI = result - cost;
  let ROIPercent = (ROI / result) * 100;

  document.getElementById("result-amount").textContent = `${result.toFixed(2)}`;
  document.getElementById("ROI").textContent = `${ROI.toFixed(2)}`;
  const ROIPercentElements = document.querySelectorAll(".ROI-percent");
  ROIPercentElements.forEach((element) => {
    element.textContent = `(${ROIPercent.toFixed(2)}%)`;
  });
}

calculateAndDisplayROI();
