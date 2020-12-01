"use strict";
// exports.__esModule = true;
// exports.Deck = void 0;
var SuitEnum;
(function (SuitEnum) {
    SuitEnum["HEART"] = "Heart";
    SuitEnum["DIAMOND"] = "Diamond";
    SuitEnum["SAPDE"] = "Spade";
    SuitEnum["CLUB"] = "Club";
})(SuitEnum || (SuitEnum = {}));
;
var NumberEnum;
(function (NumberEnum) {
    NumberEnum["ACE"] = "Ace";
    NumberEnum["TWO"] = "Two";
    NumberEnum["THREE"] = "Three";
    NumberEnum["FOUR"] = "Four";
    NumberEnum["FIVE"] = "Five";
    NumberEnum["SIX"] = "Six";
    NumberEnum["SEVEN"] = "Seven";
    NumberEnum["EIGHT"] = "Eight";
    NumberEnum["NINE"] = "Nine";
    NumberEnum["TEN"] = "Ten";
    NumberEnum["JACK"] = "Jack";
    NumberEnum["QUEEN"] = "Queen";
    NumberEnum["KING"] = "King";
})(NumberEnum || (NumberEnum = {}));
;
var Card = /** @class */ (function () {
    function Card(suit, num) {
        this.faceUp = false;
        this.suit = suit;
        this.num = num;
    }
    Card.prototype.getSuit = function () {
        return this.suit;
    };
    Card.prototype.getNum = function () {
        return this.num;
    };
    Card.prototype.getFaceUp = function () {
        return this.faceUp;
    };
    Card.prototype.flip = function () {
        this.faceUp = !this.faceUp;
    };
    return Card;
}());
;
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        this.shuffle(this.getIndices());
    }
    // init ORIGIN_DECK
    Deck.initializer = function () {
        for (var suit in SuitEnum) {
            for (var num in NumberEnum) {
                Deck.ORIGIN_CARDS.push(new Card(SuitEnum[suit], NumberEnum[num]));
            }
        }
    };
    Deck.prototype.getIndices = function () {
        var indices = [];
        for (var i = 0; i < 52; i++) {
            indices[i] = i;
        }
        return indices;
    };
    // get a random number in remain numbers
    Deck.prototype.getRandomIndex = function (indices) {
        return Math.floor(Math.random() * (indices.length - 1));
    };
    Deck.prototype.shuffle = function (indices) {
        while (indices.length > 0) {
            var index = this.getRandomIndex(indices);
            this.cards.push(Deck.ORIGIN_CARDS[indices[index]]);
            indices.splice(index, 1);
        }
    };
    Deck.prototype.getCards = function () {
        return this.cards;
    };
    Deck.ORIGIN_CARDS = [];
    return Deck;
}());
// exports.Deck = Deck;
Deck.initializer();
var cards = new Deck().getCards();
