const timeContainer = document.getElementById("jsTime");

let limitedTime = 31;
let decreaseTime = null;

const decrease = () => {
  limitedTime = limitedTime - 1;
  timeContainer.innerText = limitedTime;
  if (limitedTime < 0) {
    timeContainer.innerText = "";
    limitedTime = 31;
    clearInterval(decreaseTime);
  }
};

export const handleTimeOut = () => {
  decreaseTime = setInterval(decrease, 1000);
};

export const handleResetTimeout = () => {
  limitedTime = 31;
  timeContainer.innerText = "";
  clearInterval(decreaseTime);
};
