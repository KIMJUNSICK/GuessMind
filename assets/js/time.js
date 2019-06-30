const timeContainer = document.getElementById("jsTime");

const TIME_LIMITED = 31;
let limitedTime = TIME_LIMITED;
let decreaseTime = null;

const decrease = () => {
  limitedTime = limitedTime - 1;
  timeContainer.innerText = limitedTime;
  if (limitedTime < 0) {
    timeContainer.innerText = "";
    limitedTime = TIME_LIMITED;
    clearInterval(decreaseTime);
  }
};

export const handleTimeOut = () => {
  decreaseTime = setInterval(decrease, 1000);
};

export const handleResetTimeout = () => {
  limitedTime = TIME_LIMITED;
  timeContainer.innerText = "";
  clearInterval(decreaseTime);
};
