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
    let playervalue, dealervalue;
    let balance = 100;

    document.getElementById("balance").innerHTML = "balance :£" + balance;
    let theButtons = $('.playersmoney .bet');
    let playerchoice = $('.playerchoices');
    let newg = $('.playerchoices .new-game');


    firstHalfButtonEventListener();
    newGameButtonEventListener();

    function firstHalfButtonEventListener() {
        console.log();
        $(theButtons).click(firstHalf.bind(this));
    }

    function newGameButtonEventListener() {
        $(newg).click(function() {
            $('.pcard1').css('background-color', 'brown');
            $('.pcard1').empty();
            $('.pcard2').css('background-color', 'brown');
            $('.pcard2').empty();
            $('.pcard3').css('background-color', 'inherit').css("border", " ").css("border-radius", "");
            $('.pcard3').empty();
            $('.pcard4').css('background-color', 'inherit').css("border", " ").css("border-radius", "");
            $('.pcard4').empty();
            $('.pcard5').css('background-color', 'inherit').css("border", " ").css("border-radius", "");
            $('.pcard5').empty();
            $('.dcard1').css('background-color', 'brown');
            $('.dcard1').empty();
            $('.dcard2').css('background-color', 'brown');
            $('.dcard2').empty();
            $('.dcard3').css('background-color', 'inherit')
            $('.dcard3').css("border", " ")
            $('.dcard3').css("border-radius", " ");
            $('.dcard3').empty();
            $('.dcard4').css('background-color', 'inherit').css("border", "").css("border-radius", "");
            $('.dcard4').empty();
            $('.dcard5').css('background-color', 'inherit').css("border", " ").css("border-radius", "");
            $('.dcard5').empty();
            $('#message').html('BlackJack');
            PCards = [];
            DCards = [];
            playdeck = [];
            NPCards = [];
            console.log("playerOption");
        });
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
        document.getElementById("balance").innerHTML = "balance :£" + balance;
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
        playdeck = [];
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
        console.log("Player Cards" + PCards);
        console.log("Dealer Cards" + DCards);
    }
    //displaythe cards for dealer and player
    function displayCards() {
        //$('.pcard0').css('background-color', 'white');
        //$('.pcard1').css('background-color', 'white');
        //$('.dcard1').css('background-color', 'white');

        for (let i = 0; i < PCards.length; i++) {
            let a = i;
            console.log(PCards[i].Value + PCards[i].Suit);
            let card = PCards[i].Value + PCards[i].Suit;
            console.log(card);
            //document.getElementById("pcard" + a).innerHTML = PCards[i].Value + "<br>" + PCards[i].Suit;
            $('#pcard' + a).css("background", "url(imgs/" + card + ".svg)");
            document.getElementById('pcard' + a).style.backgroundSize = "150px 200px";
            console.log('imgs/' + card + '.svg');
            //document.getElementById('#pcard' + a).style.backgroundImage = url('imgs/' + card + '.svg');
            //$('#pc' + a).html(PCards[i].Value + "<br>" + PCards[i].Suit);

        }

        // if (DCards[0].Suit = "♥") {
        //     document.getElementById("dc1").innerHTML = DCards[0].Value + "<br>" + "♥";
        // } else if (DCards[0].Suit = "♦") {
        //     document.getElementById("dc1").innerHTML = DCards[0].Value + "<br>" + "♦";
        // } else if (DCards[0].Suit = "♠") {
        //     document.getElementById("dc1").innerHTML = DCards[0].Value + "<br>" + "♠";
        // } else if (DCards[0].Suit = "♣") {
        //     document.getElementById("dc1").innerHTML = DCards[0].Value + "<br>" + "♣";
        // }
        let dcard = DCards[0].Value + DCards[0].Suit;
        console.log("imgs/" + dcard + ".svg");
        $('#dcard0').css("background", "url(imgs/" + dcard + ".svg)");
        document.getElementById('dcard0').style.backgroundSize = "150px 200px";
        //$("#dc1").html(DCards[0].Value + "<br>" + DCards[0].Suit);

    }
    //if the players clicks hit or stick
    function hitOrStick() {
        if (event.target.id === "hit") {
            var newcard = Math.floor(Math.random() * deck.length);
            NPCards.push(deck[newcard]);
            if (NPCards.length === 1) {
                $(".pcard3").css("background-color", "white").css("border-radius", "15px");
                $("#pc2").html(NPCards[0].Value + "<br>" + NPCards[0].Suit);
                calculateCards();
            }
            if (NPCards.length === 2) {
                $(".pcard4").css("background-color", "white").css("border-radius", "15px");
                $("#pc3").html(NPCards[1].Value + "<br>" + NPCards[1].Suit);
                calculateCards();
            }
            if (NPCards.length === 3) {
                $(".pcard5").css("background-color", "white").css("border-radius", "15px");
                $("#pc4").html(NPCards[2].Value + "<br>" + NPCards[2].Suit);
                calculateCards();
            }
        } else if (playerOption === "stick") {
            calculateCards();
            dealerdraw();
        } else if (playerOption === "new-game") {
            // $('.pcard1').css('background-color', 'brown');
            // $('.pcard1').empty();

            // $('.pcard2').css('background-color', 'brown');
            // $('.pcard2').empty();

            // $('.pcard3').css('background-color', 'inherit').css("border", " ").css("border-radius", "");
            // $('.pcard3').empty();

            // $('.pcard4').css('background-color', 'inherit').css("border", " ").css("border-radius", "");
            // $('.pcard4').empty();

            // $('.pcard5').css('background-color', 'inherit').css("border", " ").css("border-radius", "");
            // $('.pcard5').empty();

            // $('.dcard1').css('background-color', 'brown');
            // $('.dcard1').empty();

            // $('.dcard2').css('background-color', 'brown');
            // $('.dcard2').empty();

            // $('.dcard3').css('background-color', 'inherit')
            // $('.dcard3').css("border", " ")
            // $('.dcard3').css("border-radius", " ");
            // $('.dcard3').empty();

            // $('.dcard4').css('background-color', 'inherit').css("border", "").css("border-radius", "");
            // $('.dcard4').empty();

            // $('.dcard5').css('background-color', 'inherit').css("border", " ").css("border-radius", "");
            // $('.dcard5').empty();
            // $('#message').html('BlackJack');

            console.log(playdeck + PCards + DCards + NPCards);
        }
    }
    //dealers function
    function dealerdraw() {

        $('.dcard2').css('background-color', 'white');
        $("#dc2").html(DCards[1].Value + "<br>" + DCards[1].Suit);

        console.log(DCards);

        calculateDealersCards();
        if (DDA < 17) {
            var newcard = Math.floor(Math.random() * deck.length);
            DCards.push(deck[newcard]);
            if (DCards.length == 3) {
                $('.dcard3').css('background-color', 'white').css("border-radius", "15px");
                $("#dc3").html(DCards[2].Value + "<br>" + DCards[2].Suit);
                calculateDealersCards();
            } else if (DCards.length == 4) {
                $('.dcard4').css('background-color', 'white').css("border-radius", "15px");
                $("#dc4").html(DCards[3].Value + "<br>" + DCards[3].Suit);
                calculateDealersCards();
            } else if (DCards.length == 5) {
                $('.dcard5').css('background-color', 'white').css("border-radius", "15px");
                $("#dc5").html(DCards[3].Value + "<br>" + DCards[3].Suit);
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

        if (PDA > 21) {
            $('.playerchoice').click(false);
            $('#message').html('The House Wins');
            dealerdraw();
        }
    }

    function calculateDealersCards() {
        let total = 0;
        let cardvalue = 0;
        for (const key in DCards) {
            if (typeof DCards[key].Value != "string") {
                total += DCards[key].Value;
            } else if (DCards[key].Value === 'K' || DCards[key].Value === 'Q' || DCards[key].Value === 'J') {
                cardvalue += 10;
            } else if (DCards[key].Value === 'A') {
                cardvalue += 1;
            }
        }
        DDA = total + cardvalue;
        console.log(DDA);
        if (PDA > 21) {
            $('.playerchoice').click(false);
            $('#message').html('You Lose');
            //Output You Lose
        } else if (DDA > PDA) {
            $('#message').html('The house always Wins');
        } else if (DDA === PDA) {
            $('#message').html('Draw');
        } else if (PDA > DDA) {
            $('#message').html('You Win');
        }
    }