let formStepsNum = 0;

document.addEventListener("DOMContentLoaded", function () {
  const prevBtns = document.querySelectorAll(".btn-prev");
  const nextBtns = document.querySelectorAll(".btn-next");
  const progress = document.getElementById("progress");
  const formSteps = document.querySelectorAll(".form-step");
  const progressSteps = document.querySelectorAll(".progress-step");

  nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (formStepsNum === 2) {
        return;
      }

      formStepsNum++;
      updateFormSteps();
      updateProgressbar();
    });
  });

  prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      formStepsNum--;
      updateFormSteps();
      updateProgressbar();
    });
  });

  function updateFormSteps() {
    formSteps.forEach((formStep) => {
      formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active");
    });

    formSteps[formStepsNum].classList.add("form-step-active");
  }

  function updateProgressbar() {
    progressSteps.forEach((progressStep, idx) => {
      if (idx < formStepsNum + 1) {
        progressStep.classList.add("progress-step-active");
      } else {
        progressStep.classList.remove("progress-step-active");
      }
    });

    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width =
      ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
  }
});

// Move validatePassword outside the event listener
function validatePassword() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }

  return true;
}

const form = document.querySelector(".form");
form.addEventListener("submit", (e) => {
  if(!validatePassword()){
  e.stopPropagation();
  e.preventDefault();
  }
});
