import Slider from "./slider.js";
import modal from "./modal.js";
import textData from "./textData.js";

let imgs = ["sele.jpg","sele2.jpg"];
let imgsL = imgs.length;
const imgEl = document.querySelector(".img-profil");
const url = "img/";
const overlay = document.querySelector(".overlay");
const modalEL = document.querySelector(".modal");
const iconsComp = document.querySelectorAll("[data_icone]");
const Sldr = new Slider(imgEl,imgs,imgsL,url);
const modalObj = new modal(modalEL);


Sldr.slide()
imgEl.addEventListener("click",() => {
    overlay.style.display = "flex";
    modalObj.setTitle("Sele Shabani");
    modalObj.setContent(textData["seleshabani"]);
    modalObj.show()
})
overlay.addEventListener("click",() => {
    overlay.style.display = "none";
    modalObj.hide();
})

// 
iconsComp.forEach((icone)=>{
    icone.addEventListener("click",(e)=>{
        overlay.style.display = "flex";
        let CopyIcone = icone.cloneNode(true);
        let name = e.target.attributes["data_icone"].value
        modalObj.setHtmlTitle(CopyIcone);
        modalObj.setContent(textData[name]);
        modalObj.show()
    })
},modalObj)
