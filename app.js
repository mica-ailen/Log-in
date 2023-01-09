//Variables

/*email = document.getElementById("input-text").value;
password = document.getElementById("input-password").value;*/
btn = document.getElementById("login");

let attempt = 2;

//Functions

const validate = () => {
  email = document.getElementById("input-text").value;
  password = document.getElementById("input-password").value;
  if (email == "micho@gmail.com" && password == "helloword090.") {
    alert("Login successfully");
    window.location = "welcome.html";
  } else {
    attempt--; // Decrementing by one.
    alert("You have left " + attempt + " attempt;");
    // Disabling fields after 2 attempts.
    if (attempt == 0) {
      email.disabled = true;
      password.disabled = true;
      btn.disabled = true;
    }
  }
};
//spinner and welcome page

let spinnerWrapper = document.querySelector(".spinner-wrapper");
let title = document.getElementById("title");

const spinnerDisappear = () => {
  spinnerWrapper.style.display = "none";
  title.innerHTML = "Welcome to my website!";
};

window.addEventListener("load", function () {
  window.setTimeout(spinnerDisappear, 4000);
});
