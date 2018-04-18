var deck = [];
var card = {};
var suits = ["hearts", "diamonds", "clubs", "spades"];
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
    //console.log(playdeck);
    PCards.push(playdeck[0], playdeck[2]);
    DCards.push(playdeck[1], playdeck[3]);
    PPCards = PCards;
    console.log(PPCards);
    //console.log("Dealers cards" + DCards);

}
//displaythe cards for dealer and player
function displayCards() {
    $('.pcard1').css('background-color', 'white');
    $('.pcard2').css('background-color', 'white');
    $('.dcard1').css('background-color', 'white');
    if (DCards[0].Suit == "hearts") {
        document.getElementById("dc1").innerHTML = DCards[0].Value + "<br>" + "♥";
    } else if (DCards[0].Suit == "diamonds") {
        document.getElementById("dc1").innerHTML = DCards[0].Value + "<br>" + "♦";
    } else if (DCards[0].Suit == "spades") {
        document.getElementById("dc1").innerHTML = DCards[0].Value + "<br>" + "♠";
    } else if (DCards[0].Suit == "clubs") {
        document.getElementById("dc1").innerHTML = DCards[0].Value + "<br>" + "♣";
    }



    if (PCards[0].Suit == "hearts") {
        document.getElementById("pc1").innerHTML = PCards[0].Value + "<br>" + "♥";
    } else if (PCards[0].Suit == "diamonds") {
        document.getElementById("pc1").innerHTML = PCards[0].Value + "<br>" + "♦";
    } else if (PCards[0].Suit == "spades") {
        document.getElementById("pc1").innerHTML = PCards[0].Value + "<br>" + "♠";
    } else if (PCards[0].Suit == "clubs") {
        document.getElementById("pc1").innerHTML = PCards[0].Value + "<br>" + "♣";
    }

    if (PCards[1].Suit == "hearts") {
        document.getElementById("pc2").innerHTML = PCards[1].Value + "<br>" + "♥";
    } else if (PCards[1].Suit == "diamonds") {
        document.getElementById("pc2").innerHTML = PCards[1].Value + "<br>" + "♦";
    } else if (PCards[1].Suit == "spades") {
        document.getElementById("pc2").innerHTML = PCards[1].Value + "<br>" + "♠";
    } else if (PCards[1].Suit == "clubs") {
        document.getElementById("pc2").innerHTML = PCards[1].Value + "<br>" + "♣";
    }
}

function hitOrStick() {
    if (event.target.id === "hit") {
        var newcard = Math.floor(Math.random() * deck.length);
        NPCards.push(deck[newcard]);
        if (NPCards.length === 1) {
            $(".pcard3").css("background-color", "white").css("border", "1px solid black").css("border-radius", "15px");
            if (NPCards[0].Suit === "hearts") {
                document.getElementById("pc3").innerHTML = NPCards[0].Value + "<br>" + "♥";
            } else if (NPCards[0].Suit === "diamonds") {
                document.getElementById("pc3").innerHTML = NPCards[0].Value + "<br>" + "♦";
            } else if (NPCards[0].Suit === "spades") {
                document.getElementById("pc3").innerHTML = NPCards[0].Value + "<br>" + "♠";
            } else if (NPCards[0].Suit === "clubs") {
                document.getElementById("pc3").innerHTML = NPCards[0].Value + "<br>" + "♣";
            }
            calculateCards();
        }
        if (NPCards.length === 2) {
            $(".pcard4").css("background-color", "white").css("border", "1px solid black").css("border-radius", "15px");
            if (NPCards[1].Suit === "hearts") {
                document.getElementById("pc4").innerHTML = NPCards[1].Value + "<br>" + "♥";
            } else if (NPCards[1].Suit === "diamonds") {
                document.getElementById("pc4").innerHTML = NPCards[1].Value + "<br>" + "♦";
            } else if (NPCards[1].Suit === "spades") {
                document.getElementById("pc4").innerHTML = NPCards[1].Value + "<br>" + "♠";
            } else if (NPCards[1].Suit === "clubs") {
                document.getElementById("pc4").innerHTML = NPCards[1].Value + "<br>" + "♣";
            }
            calculateCards();
        }
        if (NPCards.length === 3) {
            $(".pcard5").css("background-color", "white").css("border", "1px solid black").css("border-radius", "15px");
            if (NPCards[2].Suit === "hearts") {
                document.getElementById("pc5").innerHTML = NPCards[2].Value + "<br>" + "♥";
            } else if (NPCards[2].Suit === "diamonds") {
                document.getElementById("pc5").innerHTML = NPCards[2].Value + "<br>" + "♦";
            } else if (NPCards[2].Suit === "spades") {
                document.getElementById("pc5").innerHTML = NPCards[2].Value + "<br>" + "♠";
            } else if (NPCards[2].Suit === "clubs") {
                document.getElementById("pc5").innerHTML = NPCards[2].Value + "<br>" + "♣";
            }
            calculateCards();
        }
    } else if (playerOption === "stick") {
        //  console.log("Hello");
        calculateCards();
        dealerdraw();
    }
}

function dealerdraw() {
    //   console.log("dealer says hi");
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
    calculateDealersCards();
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



// if (PCards[0].Value == "K") {
//     playervalue = 10 + parseInt(PCards[1].Value);
//     console.log(playervalue);
// } else if (PCards[0].Value == "Q") {
//     playervalue = 10 + parseInt(PCards[1].Value);
//     console.log(playervalue);
// } else if (PCards[0].Value == "J") {
//     playervalue = 10 + parseInt(PCards[1].Value);
//     console.log(playervalue);
// } else if (PCards[0].Value == "A") {
//     playervalue = 1 + parseInt(PCards[1].Value);
//     console.log(playervalue);
// }

// if (PCards[1].Value == "K") {
//     playervalue = 10 + parseInt(PCards[0].Value);
//     console.log(playervalue);
// } else if (PCards[1].Value == "Q") {
//     playervalue = 10 + parseInt(PCards[0].Value);
//     console.log(playervalue);
// } else if (PCards[1].Value == "J") {
//     playervalue = 10 + parseInt(PCards[0].Value);
//     console.log(playervalue);
// } else if (PCards[1].Value == "A") {
//     playervalue = 1 + parseInt(PCards[0].Value);
//     console.log(playervalue);
// }

// //dealers card calculated if they have "K","A","Q","J"
// if (DCards[0].Value == "K") {
//     playervalue = 10 + parseInt(DCards[1].Value);
//     console.log(playervalue);
// } else if (DCards[0].Value == "Q") {
//     playervalue = 10 + parseInt(DCards[1].Value);
//     console.log(playervalue);
// } else if (DCards[0].Value == "J") {
//     playervalue = 10 + parseInt(DCards[1].Value);
//     console.log(playervalue);
// } else if (DCards[0].Value == "A") {
//     playervalue = 10 + parseInt(DCards[1].Value);
//     console.log(playervalue);
// }

// if (DCards[1].Value == "K") {
//     playervalue = 10 + parseInt(DCards[0].Value);
//     console.log(playervalue);
// } else if (DCards[1].Value == "Q") {
//     playervalue = 10 + parseInt(DCards[0].Value);
//     console.log(playervalue);
// } else if (DCards[1].Value == "J") {
//     playervalue = 10 + parseInt(DCards[0].Value);
//     console.log(playervalue);
// } else if (DCards[1].Value == "A") {
//     playervalue = 10 + parseInt(DCards[0].Value);
//     console.log(playervalue);
// }

//}


function doesTheHouseWin() {
    //if 
    if (playervalue > 21) {
        //Output You Lose
    } else if (playervalue < 21) {
        if (condition) {

        }
    }
}

// function doesTheHouseWin() {

//     if (PCards[0].Value == "K") {
//         playervalue = 10 + parseInt(PCards[1].Value);
//     } else if (PCards[0].Value == "Q") {
//         playervalue = 10 + parseInt(PCards[1].Value);
//     } else if (PCards[0].Value == "J") {
//         playervalue = 10 + parseInt(PCards[1].Value);
//     } else if (PCards[0].Value == "A") {
//         playervalue = 10 + parseInt(PCards[1].Value);
//     }


//     dealervalue = parseInt(DCards[0].Value) + parseInt(DCards[1].Value);
//     playervalue = parseInt(PCards[0].Value) + parseInt(PCards[1].Value);
//     console.log(playervalue);
// };