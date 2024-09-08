export class Carousel {
    constructor(itemsSelector, prevButtonSelector, nextButtonSelector) {
        this.items = document.querySelectorAll(itemsSelector);
        this.currentItem = 0;
        this.prevButton = document.querySelector(prevButtonSelector);
        this.nextButton = document.querySelector(nextButtonSelector);

        this.prevButton.addEventListener('click', () => this.showPrevious());
        this.nextButton.addEventListener('click', () => this.showNext());
        
        this.items[this.currentItem].classList.add('active');
    }

    showPrevious() {
        this.items[this.currentItem].classList.remove('active');
        this.currentItem = (this.currentItem - 1 + this.items.length) % this.items.length;
        this.items[this.currentItem].classList.add('active');
    }

    showNext() {
        this.items[this.currentItem].classList.remove('active');
        this.currentItem = (this.currentItem + 1) % this.items.length;
        this.items[this.currentItem].classList.add('active');
    }

}