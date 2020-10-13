import {Slider} from "./Slider.js";
import modal from "./modal.js";

const imgEl = document.querySelector(".img-profil");
const url = window.location.href + "/img/";
let imgs = ["sele.jpg","sele2.jpg"];
let imgsL = imgs.length;
const overlay = document.querySelector(".overlay");
const modalEL = document.querySelector(".modal");

const Sldr = new Slider(imgEl,imgs,imgsL,url);
const modalObj = new modal(modalEL);

Sldr.slide()

imgEl.addEventListener("click",() => {
    overlay.style.display = "flex";
    modalObj.setTitle("Sele Shabani");
    modalObj.show()
})
overlay.addEventListener("click",() => {
    overlay.style.display = "none";
    modalObj.hide();
})