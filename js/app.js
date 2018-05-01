    let deck = [];
    let card = {};
    let suits = ["♥", "♦", "♣", "♠"];
    let values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J"];
    let deck_random;
    let playdeck = [];
    let PCards = [];
    let PPCards;
    let DCards = [];
    let NPCards = [];
    let PDA = 0;
    let DDA = 0;
    let playerOption;
    let balance = 100;
    let betmade;
    let pwin = false;

    document.getElementById("balance").innerHTML = "balance :£" + balance;
    let theButtons = $('.playersmoney .bet');
    let playerchoice = $('.playerchoices');
    let newg = $('.playerchoices .new-game');


    firstHalfButtonEventListener();


    function firstHalfButtonEventListener() {
        $(theButtons).click(firstHalf.bind(this));
    }

    playerchoice.each(function(i, button) {
        $(button).click(function(event) {
            playerOption = event.target.id;
            hitOrStick();
        });
    });


    //player makes a bet
    function makeBet() {
        betmade = document.getElementById('amount').value;
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
        playdeck = [];
        for (let i = 0; i < 4; i++) {
            var deck_random = Math.floor(Math.random() * deck.length);
            playdeck.push(deck[deck_random]);
        }
    }

    //assign 2 cards for the player and dealer
    function drawdeck() {
        PCards.push(playdeck[0], playdeck[2]);
        DCards.push(playdeck[1], playdeck[3]);
        PPCards = PCards;
    }
    //displaythe cards for dealer and player
    function displayCards() {
        for (let i = 0; i < PCards.length; i++) {
            let a = i;
            let card = PCards[i].Value + PCards[i].Suit;
            $('#pcard' + a).css("background", "url(imgs/" + card + ".svg)");
            $('#pcard' + a).fadeIn(3000);
            document.getElementById('pcard' + a).style.backgroundSize = "145px 200px";
        }
        let dcard = DCards[0].Value + DCards[0].Suit;
        $('#dcard0').css("background", "url(imgs/" + dcard + ".svg)");
        $('#dcard0').fadeIn(3000);
        document.getElementById('dcard0').style.backgroundSize = "145px 200px";
        $('#dcard1').css("background", "url(imgs/cardback.jpg)");
        document.getElementById('dcard1').style.backgroundSize = "145px 200px";

    }
    //if the players clicks hit or stick
    function hitOrStick() {
        if (event.target.id === "hit") {
            var newcard = Math.floor(Math.random() * deck.length);
            NPCards.push(deck[newcard]);
            if (NPCards.length === 1) {
                let card = NPCards[0].Value + NPCards[0].Suit;
                $('#pcard2').css("background", "url(imgs/" + card + ".svg)");
                document.getElementById('pcard2').style.backgroundSize = "145px 200px";;
                calculateCards();
            }
            if (NPCards.length === 2) {
                let card = NPCards[1].Value + NPCards[1].Suit;
                $('#pcard3').css("background", "url(imgs/" + card + ".svg)");
                document.getElementById('pcard3').style.backgroundSize = "145px 200px";;
                calculateCards();
            }
            if (NPCards.length === 3) {
                let card = NPCards[2].Value + NPCards[2].Suit;
                $('#pcard4').css("background", "url(imgs/" + card + ".svg)");
                document.getElementById('pcard4').style.backgroundSize = "145px 200px";
                calculateCards();
            }
        } else if (playerOption === "stick") {
            calculateCards();
            dealerdraw();
        } else if (playerOption === "new-game") {
            $('#pcard0').css('background', '');
            $('#pcard0').empty();
            $('#pcard1').css('background', '');
            $('#pcard1').empty();
            $('#pcard2').css('background', '');
            $('#pcard2').empty();
            $('#pcard3').css('background', '');
            $('#pcard3').empty();
            $('#pcard4').css('background', '');
            $('#pcard4').empty();
            $('#dcard0').css('background', '');
            $('#dcard0').empty();
            $('#dcard1').css('background', '');
            $('#dcard1').empty();
            $('#dcard2').css('background', '');
            $('#dcard2').empty();
            $('#dcard3').css("background", " ");
            $('#dcard3').empty();
            $('#dcard4').css('background', '');
            $('#dcard4').empty();
            $('#message').html('BlackJack');
            PCards = [];
            DCards = [];
            playdeck = [];
            NPCards = [];
            deck = [];
            balance = balance;

            if (pwin === true) {
                let winnings = betmade * 2;
                balance = balance + winnings;
                document.getElementById("balance").innerHTML = "balance :£" + balance;
                document.getElementById('amount').value = "";
            } else {
                balance = balance - betmade;
                document.getElementById("balance").innerHTML = "balance :£" + balance;
                document.getElementById('amount').value = "";
            }

        }
    }
    //dealers function
    function dealerdraw() {
        let dcard = DCards[1].Value + DCards[1].Suit;
        $('#dcard1').css("background", "url(imgs/" + dcard + ".svg)");
        document.getElementById('dcard1').style.backgroundSize = "145px 200px";
        calculateDealersCards();
        console.log(DDA);
        if (DDA <= 17) {
            calculateDealersCards();
            var newcard = Math.floor(Math.random() * deck.length);
            DCards.push(deck[newcard]);
            if (DCards.length === 3) {
                let dcard = DCards[2].Value + DCards[2].Suit;
                $('#dcard2').css("background", "url(imgs/" + dcard + ".svg)");
                document.getElementById('dcard2').style.backgroundSize = "145px 200px";
                calculateDealersCards();
            }
            if (DCards.length === 4) {
                let dcard = DCards[3].Value + DCards[3].Suit;
                $('#dcard3').css("background", "url(imgs/" + dcard + ".svg)");
                document.getElementById('dcard3').style.backgroundSize = "145px 200px";
                calculateDealersCards();
            }
            if (DCards.length === 5) {
                let dcard = DCards[4].Value + DCards[4].Suit;
                $('#dcard4').css("background", "url(imgs/" + dcard + ".svg)");
                document.getElementById('dcard4').style.backgroundSize = "145px 200px";
                calculateDealersCards();
            }
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
        }

        //giving values to cards that values are either integer:2 => 10 or K,J,Q,A
        for (const key in PPCards) {
            if (typeof PPCards[key].Value != "string") {
                total += PPCards[key].Value;
            } else if (PPCards[key].Value === 'K' || PPCards[key].Value === 'Q' || PPCards[key].Value === 'J') {
                cardvalue += 10;
            } else if (PPCards[key].Value === 'A') {
                cardvalue += 11;
            }
        }

        PDA = total + cardvalue;
        console.log(PDA);
        if (PDA > 21) {
            $('.playerchoices').click(false);
            $('#message').html('The House Wins');
            dealerdraw();
            pwin = false;
        }
    }

    function calculateDealersCards() {
        let total = 0;
        let cardvalue = 0;
        console.log(DCards);
        for (const key in DCards) {
            if (typeof DCards[key].Value != "string") {
                total += DCards[key].Value;
            } else if (DCards[key].Value === 'K' || DCards[key].Value === 'Q' || DCards[key].Value === 'J') {
                cardvalue += 10;
            } else if (DCards[key].Value === 'A') {
                cardvalue += 11;
            }
        }
        DDA = total + cardvalue;
        console.log(DDA);

        if (PDA > 21) {
            console.log(PDA);
            $('.playerchoices').click(false);
            pwin = false;
            $('#message').html('You Lose');
        } else if (PDA < DDA) {
            if (DDA < 21) {
                console.log(PDA + " " + DDA);
                $('#message').html('You lose');
                pwin = false;
            }
        } else if (DDA === PDA) {
            console.log(PDA + " " + DDA);
            $('#message').html('You lose');
            pwin = false;
        } else if (PDA > DDA) {
            if (PDA <= 21) {
                console.log(PDA + " " + DDA);
                $('#message').html('You Win');
                pwin = true;
            }
        }
    }