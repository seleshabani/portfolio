class modal {

    titleEl;
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