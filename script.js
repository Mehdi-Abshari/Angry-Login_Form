// -- Varibales
// Slecting body
let body = document.querySelector("body");
// Selecting user name input
let usernameRef = document.querySelector("#username");
// Selecting password input
let passwordRef = document.querySelector("#password");
// Selecting submit button
let submitBtn = document.querySelector("#submit");
// Selecting paragraf
let messegeRef = document.querySelector("#messege-ref");

// -- Functions
let isUsernamevalid = () => {
  // Username should be contain more than 3 characters. Should begin with alphabetic character can contain numbers
  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
  return usernameRegex.test(usernameRef.value);
};
let isPasswordvalid = () => {
  // Password should be atleast 8 characters long. Should contain atleast 1 number, 1 special symbol, 1 lower case and 1 upper case
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  return passwordRegex.test(passwordRef.value);
};

// -- Events
usernameRef.addEventListener("input", () => {
  if (!isUsernamevalid()) {
    usernameRef.style.cssText =
      "border-color: #fe2e2e; background-color: #ffc2c2";
  } else {
    usernameRef.style.cssText =
      "border-color: #34bd34; background-color: #c2ffc2";
  }
});
passwordRef.addEventListener("input", () => {
  if (!isPasswordvalid()) {
    passwordRef.style.cssText =
      "border-color: #fe2e2e; background-color: #ffc2c2";
  } else {
    passwordRef.style.cssText =
      "border-color: #34bd34; background-color: #c2ffc2";
  }
});
submitBtn.addEventListener("mouseover", () => {
  // If either password or username is invalid then do this...
  if (!isUsernamevalid() || !isPasswordvalid()) {
    // Get the current position or submit btn
    let containerRect = document
      .querySelector(".container")
      .getBoundingClientRect();
    let submitRect = submitBtn.getBoundingClientRect();
    let offset = submitRect.left - containerRect.left;
    console.log(offset);

    // If the button is on the left hand side.. move it to the right hand side
    if (offset <= 100) {
      submitBtn.style.transform = "translatex(14.5em)";
    }
    // Vice versa
    else {
      submitBtn.style.transform = "translatex(0)";
    }
  }
});
submitBtn.addEventListener("click", () => {
  let container = document.querySelector(".container");
  container.style.display = "none";

  let titabImg = document.createElement("img");
  titabImg.classList.add("titabImg");
  titabImg.setAttribute("src", "/Images/Titab.jpg");
  body.appendChild(titabImg);
});
