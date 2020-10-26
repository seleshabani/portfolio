class modal {

    titleEl;
    htmlTitle;
    contentEL;

    /**
     * 
     * @param {*} HtmlEl l'élèment html répresentant le modal
     */
    constructor(HtmlEl) {
        this.modalEl = HtmlEl;
        this.titleEl = document.querySelector(".modal .modal-title h1");
        this.contentEL = document.querySelector(".modal .modal-content");
    }
    setTitle(title) {
        this.title = title;
        this.titleEl.innerText = title;
    }
    setHtmlTitle(htmlTitle){
        this.htmlTitle = htmlTitle;
        this.titleEl = document.querySelector(".modal .modal-title h1");
        this.titleEl.innerText = " "
        this.titleEl.appendChild(htmlTitle)
      //  console.log(this.titleEl.innerHtml)
    }
    setContent(content) {
        console.log(this.contentEL)
        this.contentEL.innerText = content;
    }
    show() {
        this.modalEl.style.display = "flex";
    }
    hide() {
        this.modalEl.style.display = "none";
    }

}
export default modal