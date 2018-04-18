var deck = [];
var card = {};
var suits = ["♥", "♦", "♣", "♠"];
var values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J"];
let deck_random;
let playdeck = [];
let PCards = [];
let PPCards;
let DCards = [];
let NPCards = [];
let PDA = 0;
let playerOption;
let playervalue, dealervalue;
let balance = 100;

document.getElementById("balance").innerHTML = "balance is: " + balance;
let theButtons = $('.playersmoney .bet');
let playerchoice = $('.playerchoices');

firstHalfButtonEventListener();

function firstHalfButtonEventListener() {
    console.log();
    $(theButtons).click(firstHalf.bind(this));
}

playerchoice.each(function(i, button) {
    $(button).click(function(event) {
        playerOption = event.target.id;
        // console.log(playerOption);
        hitOrStick();
    });
});


//player makes a bet
function makeBet() {
    var betmade = document.getElementById('amount').value;
    balance = balance - betmade;
    document.getElementById("balance").innerHTML = "balance is: " + balance;
    //console.log(betmade);
}

//make the eck containing 53 cards
function makedeck() {
    for (var s = 0; s < suits.length; s++) {
        for (var v = 0; v < values.length; v++) {
            card = { Suit: suits[s], Value: values[v] };
            deck.push(card);
        }
    }
    return deck;
}

//shuffle deck and get four cards
function shuffledeck() {
    for (let i = 0; i < 4; i++) {
        var deck_random = Math.floor(Math.random() * deck.length);
        playdeck.push(deck[deck_random]);
    }
    //return deck_random;
}

//assign 2 cards for the player and dealer
function drawdeck() {
    PCards.push(playdeck[0], playdeck[2]);
    DCards.push(playdeck[1], playdeck[3]);
    PPCards = PCards;
    console.log(PCards);
}
//displaythe cards for dealer and player
function displayCards() {
    $('.pcard1').css('background-color', 'white');
    $('.pcard2').css('background-color', 'white');
    $('.dcard1').css('background-color', 'white');
    document.getElementById("dc1").innerHTML = DCards[0].Value + "<br>" + DCards[0].Suit;
    for (let i = 0; i < PCards.length; i++) {
        let a = i;
        $('#pc' + a).html(PCards[i].Value + "<br>" + PCards[i].Suit);
    }
}
//if the players clicks hit or stick
function hitOrStick() {
    if (event.target.id === "hit") {
        var newcard = Math.floor(Math.random() * deck.length);
        NPCards.push(deck[newcard]);


        if (NPCards.length === 1) {
            $(".pcard3").css("background-color", "white").css("border", "1px solid black").css("border-radius", "15px");
            document.getElementById("pc2").innerHTML = NPCards[0].Value + "<br>" + NPCards[0].Suit;
            // if (NPCards[0].Suit === "♥") {
            //     document.getElementById("pc3").innerHTML = NPCards[0].Value + "<br>" + "♥";
            // } else if (NPCards[0].Suit === "diamonds") {
            //     document.getElementById("pc3").innerHTML = NPCards[0].Value + "<br>" + "♦";
            // } else if (NPCards[0].Suit === "spades") {
            //     document.getElementById("pc3").innerHTML = NPCards[0].Value + "<br>" + "♠";
            // } else if (NPCards[0].Suit === "clubs") {
            //     document.getElementById("pc3").innerHTML = NPCards[0].Value + "<br>" + "♣";
            // }
            calculateCards();
        }
        if (NPCards.length === 2) {
            $(".pcard4").css("background-color", "white").css("border", "1px solid black").css("border-radius", "15px");
            document.getElementById("pc3").innerHTML = NPCards[1].Value + "<br>" + NPCards[1].Suit;
            // if (NPCards[1].Suit === "♥") {
            //     document.getElementById("pc4").innerHTML = NPCards[1].Value + "<br>" + "♥";
            // } else if (NPCards[1].Suit === "diamonds") {
            //     document.getElementById("pc4").innerHTML = NPCards[1].Value + "<br>" + "♦";
            // } else if (NPCards[1].Suit === "spades") {
            //     document.getElementById("pc4").innerHTML = NPCards[1].Value + "<br>" + "♠";
            // } else if (NPCards[1].Suit === "clubs") {
            //     document.getElementById("pc4").innerHTML = NPCards[1].Value + "<br>" + "♣";
            // }
            calculateCards();
        }
        if (NPCards.length === 3) {
            $(".pcard5").css("background-color", "white").css("border", "1px solid black").css("border-radius", "15px");
            document.getElementById("pc4").innerHTML = NPCards[2].Value + "<br>" + NPCards[2].Suit;
            // if (NPCards[2].Suit === "♥") {
            //     document.getElementById("pc5").innerHTML = NPCards[2].Value + "<br>" + "♥";
            // } else if (NPCards[2].Suit === "diamonds") {
            //     document.getElementById("pc5").innerHTML = NPCards[2].Value + "<br>" + "♦";
            // } else if (NPCards[2].Suit === "spades") {
            //     document.getElementById("pc5").innerHTML = NPCards[2].Value + "<br>" + "♠";
            // } else if (NPCards[2].Suit === "clubs") {
            //     document.getElementById("pc5").innerHTML = NPCards[2].Value + "<br>" + "♣";
            // }
            calculateCards();
        }
    } else if (playerOption === "stick") {
        //  console.log("Hello");
        calculateCards();
        dealerdraw();
    }
}
//dealers function
function dealerdraw() {
    $('.dcard2').css('background-color', 'white');
    if (DCards[1].Suit === "hearts") {
        document.getElementById("dc2").innerHTML = DCards[1].Value + "<br>" + "♥";
    } else if (DCards[1].Suit === "diamonds") {
        document.getElementById("dc2").innerHTML = DCards[1].Value + "<br>" + "♦";
    } else if (DCards[1].Suit === "spades") {
        document.getElementById("dc2").innerHTML = DCards[1].Value + "<br>" + "♠";
    } else if (DCards[1].Suit === "clubs") {
        document.getElementById("dc2").innerHTML = DCards[1].Value + "<br>" + "♣";
    }
    var dealerdecision = Math.floor((Math.random() * 10) + 1);
    if (dealerdecision % 2 == 0) {
        var newcard = Math.floor(Math.random() * deck.length);
        DCards.push(deck[newcard]);
        console.log(DCards);
        calculateDealersCards();
    } else {
        calculateDealersCards();
    }
}

function firstHalf() {
    makeBet();
    makedeck();
    shuffledeck();
    drawdeck();
    displayCards();
}

function calculateCards() {
    let total = 0;
    let cardvalue = 0;
    if (NPCards.length === 0) {
        null
    } else {
        PPCards = PCards.concat(NPCards);
        console.log(PPCards);
    }

    //giving values to cards that values are either integer:2 => 10 or K,J,Q,A
    for (const key in PPCards) {
        if (typeof PPCards[key].Value != "string") {
            total += PPCards[key].Value;
        } else if (PPCards[key].Value === 'K' || PPCards[key].Value === 'Q' || PPCards[key].Value === 'J') {
            cardvalue += 10;
        } else if (PPCards[key].Value === 'A') {
            cardvalue += 1;
        }
    }

    PDA = total + cardvalue;
    console.log(total + " " + cardvalue + " " + PDA);


    if (PDA > 21) {
        $('.playerchoice').click(false);
        $('#message').html('You Lose');
        //Output You Lose
    }
}

function calculateDealersCards() {
    let total = 0;
    let cardvalue = 0;
    if (NPCards.length === 0) {
        null
    } else {
        PPCards = PCards.concat(NPCards);
        console.log(PPCards);
    }

    //giving values to cards that values are either integer:2 => 10 or K,J,Q,A
    for (const key in PPCards) {
        if (typeof PPCards[key].Value != "string") {
            total += PPCards[key].Value;
        } else if (PPCards[key].Value === 'K' || PPCards[key].Value === 'Q' || PPCards[key].Value === 'J') {
            cardvalue += 10;
        } else if (PPCards[key].Value === 'A') {
            cardvalue += 1;
        }
    }

    PDA = total + cardvalue;
    console.log(total + " " + cardvalue + " " + PDA);


    if (PDA > 21) {
        $('.playerchoice').click(false);
        $('#message').html('You Lose');
        //Output You Lose
    }
}