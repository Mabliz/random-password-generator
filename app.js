var password = document.getElementById("password");

function genPassword() {

   var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_-|:;,+=][{{\<>/?";
   var passwordLength = 15;
   var password = "";

   for (var i = 0; i <= passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber +1);
   }
   document.getElementById("password").value = password;
}





   
