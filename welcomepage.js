//spinner and welcome page

let spinnerWrapper = document.querySelector(".spinner-wrapper");
let title = document.getElementById("title");

export const spinnerDisappear = () => {
  spinnerWrapper.style.display = "none";
  title.innerHTML = "Welcome to my website!";
};
