/**35. Create a Show/Hide Password Toggle */

let passwordInput = document.querySelector("#password")
let button = document.querySelector("button")

button.addEventListener("click", () => {

   let isPassword = passwordInput.type === "password"
  
   // agar abhi type "password" hai --> matlab hidden hai, type "text" karo and button ko Hide pe set karo
   if(passwordInput.type === "password"){

        passwordInput.type = "text";
        button.innerText = "Hide";
   } else {

        // agar abhi type "text" hai --> matlab dikh raha hai, type "password" karo and button ko Show pe set karo
        passwordInput.type = "password";
        button.innerText  = "Show";
   }
})


