import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-users-cards',
  templateUrl: './users-cards.component.html',
  styleUrls: ['./users-cards.component.scss']
})
export class UsersCardsComponent implements OnInit {

    @Input() cards
    @Input() cardsPerRow: number = 2;
    cardsMatrix = [[]]

    constructor() {
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.initCards()
    }

    ngOnInit() {
        this.initCards()
    }

    initCards() {
        if (this.cards === undefined || this.cards === null) {
            console.error('[Cards] cards are not defined.');
            return;
        }

        // dynamic number of elements
        // sm	540px	Set grid width to 540px when (min-width: 576px)
        // md	720px	Set grid width to 720px when (min-width: 768px)
        // lg	960px	Set grid width to 960px when (min-width: 992px)
        // xl	1140px	Set grid width to 1140px when (min-width: 1200px)

        let width = window.innerWidth
        console.log(width)
        if (width <= 540) {
            this.cardsPerRow = 2;
        }
        if (width > 540 && width <= 960) {
            this.cardsPerRow = 4;
        }
        if (width > 960 && width <= 1140) {
            this.cardsPerRow = 6;
        }
        if (width > 1140) {
            this.cardsPerRow = 8;
        }

        this.cardsMatrix = this.getCardsMatrix()
    }

    onClick(card: any): void {

    }

    getCardsPerRow(): number {
        return this.cardsPerRow;
    }

    getCardsMatrix() {

        // console.log(JSON.stringify(this.cards, null, 2))

        let cards = this.cards.reduce((acc, card, currentIndex) => {
            if (currentIndex % this.getCardsPerRow() == 0 && currentIndex !== 0) {
                acc.push([]);
            }
            acc[acc.length - 1].push(card);
            return acc;
        }, [[]]);

        console.log(JSON.stringify(cards, null, 2))
        return cards
    }

    getWidthClass(): string {
        let cardsPerRow = this.getCardsPerRow();
        if (cardsPerRow === 2) {
            return 'width-50';
        } else if (cardsPerRow === 3) {
            return 'width-33';
        } else if (cardsPerRow === 4) {
            return 'width-25';
        }
        return null;
    }
}

