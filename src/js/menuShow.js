export class menuShow {
    constructor (mobilemenu){
        this.mobile_menu = document.querySelector(mobilemenu);
        this.activeClass = "active";
        this.currentItem = 0;
    }

    init(){
        if(this.mobile_menu.classList.contains(this.activeClass)){
            this.mobile_menu.classList.remove(this.activeClass)
        }
        else {
            this.mobile_menu.classList.add(this.activeClass)
        }
    }

}

