class modal {

    titleEl;
    htmlTitle;
    contentEL;

    /**
     * 
     * @param {*} HtmlEl l'élèment html répresentant le modal
     */
    constructor(HtmlEl) {
        this.modalEl = HtmlEl
    }
    setTitle(title) {
        this.title = title;
        this.titleEl = document.querySelector(".modal .modal-title h1");
        this.titleEl.innerText = title;
    }
    setHtmlTitle(htmlTitle){
        this.htmlTitle = htmlTitle;
        this.titleEl = document.querySelector(".modal .modal-title h1");
        this.titleEl.innerText = " "
        this.titleEl.appendChild(htmlTitle)
        console.log(this.titleEl.innerHtml)
    }
    setContent() {

    }
    show() {
        this.modalEl.style.display = "flex";
    }
    hide() {
        this.modalEl.style.display = "none";
    }

}
export default modal