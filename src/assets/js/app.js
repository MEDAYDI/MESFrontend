const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const signupBtn = document.querySelector(".btnSignUp");
const cont = document.querySelector(".cont");

sign_up_btn.addEventListener("click", () => {
  cont.classList.add("sign-up-mode");

});


signupBtn.addEventListener("click",()=>{
  cont.classList.remove("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  cont.classList.remove("sign-up-mode");
});



