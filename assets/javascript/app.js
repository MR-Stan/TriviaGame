gameObject = {

    // question bank
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    questionArray : [

        { 
            question : "What year did the demolition of the Berlin Wall begin?",
            answer : {
                wrong : [
                    "1967",
                    "1991",
                    "1776"
                ],
                correct : "1989"
            },
            image : "<img src='assets/images/reagansmash.gif' alt='gif of cartoon Ronald Reagan smashing the Berlin Wall' class='image'>"
        },

        { 
            question : "What year did Queen Elizabeth I die?",
            answer : {
                wrong : [
                    "1999",
                    "1566",
                    "1787"
                ],
                correct : "1603"
            },
            image : "<img src='assets/images/queen.jpg' alt='image of Queen Elizabeth I' class='image'>"
        },

        { 
            question : "Who was the cult leader of the Waco Siege in 1993?",
            answer : {
                wrong : [
                    "Charles Manson",
                    "David Miscavige",
                    "Jim Jones"
                ],
                correct : "David Koresh"
            },
            image : "<img src='assets/images/koresh.jpg' alt='image of David Koresh' class='image'>"
        },
        
        { 
            question : "What was Michael Jackson known as?",
            answer : {
                wrong : [
                    "The Prince of Pop",
                    "The King of Music",
                    "The King of Sing"
                ],
                correct : "The King of Pop"
            },
            image : "<img src='assets/images/moonwalk.gif' alt='gif of Michael Jackson moonwalking' class='image'>"
        },

        { 
            question : "Doctor Ivo “Eggman” Robotnik is the enemy of which video game character?",
            answer : {
                wrong : [
                    "Crash Bandicoot",
                    "Mario",
                    "Banjo"
                ],
                correct : "Sonic the Hedgehog"
            },
            image : "<img src='assets/images/sonic.gif' alt='gif of Sonic the Hedgehog' class='image'>"
        },
        
        { 
            question : "Which video game company’s franchises include Mortal Kombat, Spy Hunter and Rampage?",
            answer : {
                wrong : [
                    "Atari",
                    "Nintendo",
                    "Sega"
                ],
                correct : "Midway Games Inc."
            },
            image : "<img src='assets/images/midway.jpg' alt='image of Midway Games Inc. logo' class='image'>"
        },

        { 
            question : "Mario first appeared in which classic video game?",
            answer : {
                wrong : [
                    "Super Mario Brothers",
                    "Mario Brother",
                    "Mario Party"
                ],
                correct : "Donkey Kong"
            },
            image : "<img src='assets/images/dk.gif' alt='gif of Donkey Kong dancing' class='image'>"
        },
        
        { 
            question : "What is the sum of the angles of a triangle?",
            answer : {
                wrong : [
                    "360 degrees",
                    "90 degrees",
                    "270 degrees"
                ],
                correct : "180 degrees"
            },
            image : "<img src='assets/images/triangle.gif' alt='gif of a triangle' class='image'>"
        },

        { 
            question : "What is the most commonly diagnosed cancer in men?",
            answer : {
                wrong : [
                    "Testicular",
                    "Thyroid",
                    "Ovarian"
                ],
                correct : "Prostate"
            },
            image : "<img src='assets/images/prostate.gif' alt='gif of colonoscopy' class='image'>"
        },
        
        { 
            question : "Which US city has been hit by the most tornadoes?",
            answer : {
                wrong : [
                    "Topeka",
                    "Amarillo",
                    "Pueblo"
                ],
                correct : "Oklahoma City"
            },
            image : "<img src='assets/images/tornado.gif' alt='gif of a tornado' class='image'>"
        },

    ],

    // gameObject variables
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    index : 0,
    right : 0,
    wrong : 0,
    unanswered : 0,
    counter : 0, 
    timer : "",
    
    // HTML 
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    createElements : function() {

        // headerDiv to hold the game title
        $("<div/>").attr("id", "headerDiv").appendTo("header");

        // displays initial instructions
        $("<div/>").attr("id", "introDiv").appendTo("main");

        $("#introDiv").append("Welcome to the Random Trivia Trivia Game! <br> Guess the correct answer to each question to win. <br> Press 'Start' to begin!")

        // displays questionCount, timer, 
        $("<div/>").attr("id", "gameStatus").appendTo("main");

            // displays questions correct / wrong count
            $("<div/>").attr("id", "questionCount").appendTo("#gameStatus");

                $("<div/>").attr("id", "questionsCorrect").appendTo("#questionCount");

                $("<div/>").attr("id", "questionsWrong").appendTo("#questionCount");
            
            $("<div/>").attr("id", "timer").appendTo("#gameStatus");

            $("<div/>").attr("id", "question").appendTo("#gameStatus");

            $("<div/>").attr("id", "buttonContainer").appendTo("main");

            $("<button>", {text : "Start", id : "startBtn", class : "button"}).appendTo("#buttonContainer");

        // at end display total correct / wrong and total time spent
    },

    // CSS 
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    // ------------------------------------------------------------------------------------------------------------------------------------------------------

 
    // reset game
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    reset : function() {
        $("main").empty();
        this.createElements();
        $("#gameStatus").hide();


        // $.each(this.questionArray, function (index) {

        //     $("#characterContainer").append("<div id='character" + index + "'</div>");
        //     $("#character" + index).addClass("character");
        //     $("#character" + index).attr({
        //         'data-name' : gameObject.characters[index].name,
        //         'data-hp' : gameObject.characters[index].hp,
        //         'data-ap' : gameObject.characters[index].ap,
        //         'data-ca' : gameObject.characters[index].ca
        //     });

        // });
        $("#startBtn").click(function() { 
            gameObject.start();
        });
        },

        startTimer : function() {
            this.counter = 30;
            $("#timer").text("Time Remaining: " + this.counter + " seconds");
            this.timer = setInterval(function(){
                gameObject.counter--;
                $("#timer").text("Time Remaining: " + gameObject.counter + " seconds");
            }, 1000);
        },

        start : function() {
            this.index = Math.floor(Math.random()*(this.questionArray.length))
            $("#startBtn").hide();
            $("#introDiv").hide();
            $("#gameStatus").show();
            this.displayQuestion();
            this.displayAnswers();
            this.startTimer();

            // on click choose question[random index] and display various properties

        },

        displayQuestion : function() {
            console.log(this.index);
            $("#question").text(this.questionArray[this.index].question);
            
        },

        displayAnswers : function() {
            for (let i = 0; i < 3; i++) {
                
            }
        },

        answerQuestion : function() {
            clearInterval(this.timer);
        },

        timesUp : function() {
            this.unanswered++;
        },

        answerWrong : function() {
            this.wrong++;
        },

        answerRight : function() {
            this.right++;
        },

        endGame : function() {

        },


}



    // reset timer
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    // on button click reset timer to 30 seconds
    
    // checkAnswer(answer) - not sure how to do this
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

gameObject.reset();