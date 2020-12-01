enum SuitEnum {
    HEART = "Heart",
    DIAMOND = "Diamond",
    SAPDE = "Spade",
    CLUB = "Club"
};

enum NumberEnum {
    ACE = "Ace",
    TWO = "Two",
    THREE = "Three",
    FOUR = "Four",
    FIVE = "Five",
    SIX = "Six",
    SEVEN = "Seven",
    EIGHT = "Eight",
    NINE = "Nine",
    TEN = "Ten",
    JACK = "Jack",
    QUEEN = "Queen",
    KING = "King"
};

class Card {
    private suit: SuitEnum;
    private num: NumberEnum;
    private faceUp: Boolean = false;

    constructor(suit: SuitEnum, num: NumberEnum) {
        this.suit = suit;
        this.num = num;
    }

    public getSuit(): SuitEnum {
        return this.suit;
    }

    public getNum(): NumberEnum {
        return this.num;
    }

    public getFaceUp(): Boolean {
        return this.faceUp;
    }

    public flip(): void {
        this.faceUp = !this.faceUp;
    }
};

export class Deck {
    public static ORIGIN_CARDS: Array<Card> = [];

    private cards: Array<Card> = [];

    constructor() {
        this.shuffle(this.getIndices());
    }

    // init ORIGIN_DECK
    public static initializer(): void {
        for (const suit in SuitEnum) {
            for (const num in NumberEnum) {
                Deck.ORIGIN_CARDS.push(new Card(SuitEnum[suit], NumberEnum[num]));
            }
        }
    }

    private getIndices(): Array<number> {
        let indices: Array<number> = [];
        for (let i: number = 0; i < 52; i++) {
            indices[i] = i;
        }
        return indices;
    }

    // get a random number in remain numbers
    private getRandomIndex(indices: Array<number>): number {
        return Math.floor(Math.random() * (indices.length - 1));
    }

    private shuffle(indices: Array<number>): void {
        while (indices.length > 0) {
            let index: number = this.getRandomIndex(indices);
            this.cards.push(Deck.ORIGIN_CARDS[indices[index]]);
            indices.splice(index, 1);
        }
    }

    public getCards(): Array<Card> {
        return this.cards;
    }
}

Deck.initializer();

let cards: Array<Card> = new Deck().getCards();


