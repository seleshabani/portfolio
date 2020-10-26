import Slider from "./slider.js";
import modal from "./modal.js";

let imgs = ["sele.jpg","sele2.jpg"];
let imgsL = imgs.length;
const imgEl = document.querySelector(".img-profil");
const url = "img/";
const overlay = document.querySelector(".overlay");
const modalEL = document.querySelector(".modal");
const iconsComp = document.querySelectorAll("[data-icone]");
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

// 
iconsComp.forEach((icone)=>{
    icone.addEventListener("click",()=>{
        overlay.style.display = "flex";
        let CopyIcone = icone.cloneNode(true);
        modalObj.setHtmlTitle(CopyIcone);
        modalObj.setContent("bonjour")
        modalObj.show()
    })
},modalObj)
