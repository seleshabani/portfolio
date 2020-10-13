class Slider {
    
    constructor(imgEl,imgs,imgsL,url) {
        this.imgEl = imgEl;
        this.imgs = imgs;
        this.imgsL = imgsL;
        this.imgUrl = "";
        this.start = 0;
        this.url = url;
    }
    /**
     * @param {*} url url vers le dossier img
     * @param {*} s callback en cas de succées
     * @param {*} er callback en cas d'échec
     */
    getImg(url,s,er) {
        let xhr = new XMLHttpRequest;
        xhr.open("GET",url,true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if(xhr.status === 200) {
                    s(xhr.responseURL)
                }
            }else {
                er(xhr)
            }
        }
        xhr.send()
    }
    slide() {
        setInterval(() => {
            this.imgUrl = this.url + this.imgs[this.start];
            this.getImg(this.imgUrl,(img) => {
                this.imgEl.setAttribute("src",img)
                this.imgEl.classList.add('animate-profil-invers');
                this.start = this.start + 1;
                this.imgsL = this.imgsL - 1;
                if(this.imgsL === 0) {
                    this.start = 0;
                    this.imgsL = this.imgs.length;
                }
            },(erM)=>{})
            this.imgEl.classList.remove('animate-profil-invers');
        },4000);
    }
}
export default Slider;
