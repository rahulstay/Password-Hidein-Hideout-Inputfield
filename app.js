let imgcon = document.getElementById("imgcon");
let inputcon = document.getElementById("inputcon");

imgcon.onclick = function () {
    if (inputcon.type === "password") {
        inputcon.type = "text";
        imgcon.src = "./assets/eye-visible.png";
    } else {
        inputcon.type = "password";
        imgcon.src = "./assets/eye-notvisible.png";
    }
};
