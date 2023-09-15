let aboveRange = document.querySelector('#selected-value');
let belowRange = document.querySelector('#slider-value');
let slider = document.querySelector('#slider');

aboveRange.textContent = slider.value + '%';
belowRange.textContent = slider.value + '%';

slider.addEventListener('input', function () {
  aboveRange.textContent = slider.value + '%';
  belowRange.textContent = slider.value + '%';
  finalResult();
});
// *********************************************************************
let finalTime = 6;
let btns = document.querySelectorAll('.btn');
let times = document.querySelectorAll('.selected-time');

for (let btn of btns) {
  btn.addEventListener('click', function () {
    // console.log('Btn clicked', btn.textContent);
    finalTime = parseInt(btn.textContent.slice(0, 2));
    // console.log('Updated finalTime:', finalTime);

    // console.log('Btn clicked', finalTime, 'months');

    for (let time of times) {
      time.textContent = btn.textContent;
    }

    for (let btn of btns) {
      btn.classList.remove('focus');
    }

    btn.classList.add('focus');
    finalResult();
  });
}
// **********************************************************************
for (let time of times) {
  time.textContent = `${finalTime} months`;
}

let defaultButton = document.querySelector('#btn6months');
if (defaultButton) {
  defaultButton.classList.add('focus');
}
// *****************************************************************
function finalResult() {
  let traffic = parseInt(document.querySelector('#Monthly-traffic').value);
  let orders = parseInt(document.querySelector('#Monthly-orders').value);
  let revenue = parseInt(document.querySelector('#Monthly-revenue').value);
  let sliderValue = parseInt(document.querySelector('#slider').value);

  //debugging
  // console.log('traffic', traffic);
  // console.log('orders', orders);
  // console.log('revenue', revenue);
  // console.log('sliderValue', sliderValue);
  // console.log('finalTime', finalTime);

  // prettier-ignore
  let result = (((((orders/traffic) * (sliderValue / 100)) * traffic) * (revenue / orders)))* finalTime;
  // console.log('result', result);
  let cost = finalTime * 3500;
  // console.log('cost', cost);
  let ROI = result - cost;
  // console.log('ROI', ROI);
  // let ROIPercent = (ROI / result) * 100;
  let ROIPercent = result !== 0 ? (ROI / result) * 100 : 0;
  // console.log('ROIPercent', ROIPercent);

  // console.log('result', result);
  // console.log('cost', cost);
  // console.log('ROI', ROI);
  // console.log('ROIPercent', ROIPercent);

  let formattedResult = result.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  let formattedROI = ROI.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // ***********Inserting content into screen********

  let RESULT = document.querySelector('#result-amount');
  RESULT.textContent = `${formattedResult}`;

  let roi = document.querySelector('#ROI');
  roi.textContent = `${formattedROI}`;

  let ROIPercenter = document.querySelector('#ROI-percent');
  ROIPercenter.innerText = `(${ROIPercent.toFixed(2)}%)`;
}

finalResult();
