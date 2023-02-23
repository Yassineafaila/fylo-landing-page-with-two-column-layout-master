const list = document.querySelector(".navlist")
const hamburger = document.querySelector(".menu");
const xmark = document.querySelector(".xmark")
const inputcheck = document.querySelector("#email");
const checkemail=document.querySelector("#checkemail")
const warning = document.querySelector(".warning");
const alertmessage=document.querySelector(".alert")
const button=document.querySelector(".button")
hamburger.addEventListener("click", function () {
    list.classList.add("active")
    xmark.classList.add("show")
    hamburger.classList.add("hide")
})
xmark.addEventListener("click", function () {
    list.classList.remove("active");
    xmark.classList.remove("show");
    hamburger.classList.remove("hide");
});
inputcheck.addEventListener("blur", function () {
    if (inputcheck.value === "") {
        inputcheck.style.border = "1px solid red";
        warning.style.display = "flex"
        warning.style.alignSelf = "flex-start"
        button.style.alignItems="flex-start"
        warning.style.margin="10px 0px  5px 0px"
    } else {
        inputcheck.style.border = "2px solid hsl(170, 45%, 43%)";
        warning.style.display = "none";
    }
})
checkemail.addEventListener("blur",function(){
    if(checkemail.value===""){
        checkemail.style.border = "1px solid red"
        checkemail.style.margin="0px"
        alertmessage.style.display = "block";
        alertmessage.style.margin = "0px 0px  20px 0px";
    }else{
        checkemail.style.border = "2px solid hsl(170, 45%, 43%)";
        alertmessage.style.display = "none";
    }
})