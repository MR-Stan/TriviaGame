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

        // displays initial instructions
        $("<div/>").attr("id", "introDiv").appendTo("main");

        $("#introDiv").append("Welcome to the Random Trivia Trivia Game! <br> Guess the correct answer to each question to win. <br> Press 'Start' to begin!")

        // displays questionCount, timer, 
        $("<div/>").attr("id", "gameStatus").appendTo("main");

            // displays questions correct / wrong count
            $("<div/>").attr("id", "questionCount").appendTo("#gameStatus");

                $("<div/>").attr("id", "questionsCorrect").appendTo("#questionCount");

                    $("#questionsCorrect").text("Correct: ");

                        $("<div/>").attr("id", "correct").text("0").appendTo("#questionsCorrect");

                $("<div/>").attr("id", "questionsWrong").appendTo("#questionCount");

                    $("#questionsWrong").text("Wrong:");

                        $("<div/>").attr("id", "wrong").text("0").appendTo("#questionsWrong");

                $("<div/>").attr("id", "questionsUnanswered").appendTo("#questionCount");

                    $("#questionsUnanswered").text("Unanswered: ");

                        $("<div/>").attr("id", "unanswered").text("0").appendTo("#questionsUnanswered");
            
            $("<div/>").attr("id", "timer").appendTo("main");

            $("<div/>").attr("id", "question").appendTo("main");

            $("<div/>").attr("id", "buttonContainer").appendTo("main");

            $("<button>", {text : "Start", id : "startBtn", class : "button"}).appendTo("#buttonContainer");

            $("<button>", {text : "Next Question", id : "nextBtn", class : "button"}).appendTo("#buttonContainer");
    },

    // reset game
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    reset : function() {
        $("main").empty();
        this.createElements();
        $("#gameStatus").hide();
        $("#nextBtn").hide();
        $("#startBtn").click(function() { 
            gameObject.start();
        });
    },

    startTimer : function() {
        this.counter = 15;
        $("#timer").text("Time Remaining: " + this.counter + " seconds");
        this.timer = setInterval(function(){
            gameObject.counter--;
            $("#timer").text("Time Remaining: " + gameObject.counter + " seconds");
            if (gameObject.counter === 0) {
                clearInterval(gameObject.timer);
                gameObject.timesUp();
            }
        }, 1000);
    },

    start : function() {
        $("#startBtn").hide();
        $("#introDiv").hide();
        this.nextQuestion();
    },

    displayQuestion : function() {
        $("#question").text(this.questionArray[this.index].question);
    },

    displayAnswers : function() {
        let localIndex = 0;
        // creating buttons for wrong answers, button id's 0-2
        for (let i = 0; i < 3; i++) {
            $("<button>").attr({
                id : "btn" + localIndex,
                class : "answerBtn"
            }).text(gameObject.questionArray[gameObject.index].answer.wrong[localIndex])
            .data("name", gameObject.questionArray[gameObject.index].answer.wrong[localIndex])
            .appendTo("#buttonContainer");
            localIndex++;
        }
        let randomNumber = Math.floor(Math.random() * Math.floor(3));
        // determining placement of correct answer button
        if (randomNumber === 0) {
            $("<button>").attr("class", "answerBtn") 
            .text(gameObject.questionArray[gameObject.index].answer.correct) 
            .data("name", gameObject.questionArray[gameObject.index].answer.correct)
            .insertBefore("#btn0");
        }
        else {
            $("<button>").attr("class", "answerBtn")
            .text(gameObject.questionArray[gameObject.index].answer.correct)
            .data("name", gameObject.questionArray[gameObject.index].answer.correct)
            .insertAfter("#btn" + randomNumber);
        }
        $(".answerBtn").show();
    },

    answerQuestion : function() {
        $(".answerBtn").click(function() { 
            clearInterval(gameObject.timer);
            // checking to see if selected button matches the correct answer
            if ($(this).data("name") === gameObject.questionArray[gameObject.index].answer.correct) {
                gameObject.answerRight();
            }
            else {
                gameObject.answerWrong();
            }
        });
    },

// after answering need to display text saying right / wrong, which answer was right (if answered wrong), display image, and then call removeQuestion

    removeQuestion : function() {
        this.questionArray.splice(this.index, 1);
        this.checkArray();
    },

    timesUp : function() {
        this.unanswered++;
        $("#unanswered").text(this.unanswered);
        $("#question").hide();
        //$(".answerBtn").remove();
        // display text saying You ran out of time! The correct answer is
        // show associated image
        this.checkArray();

    },

    answerWrong : function() {
        this.wrong++;
        $("#wrong").text(this.wrong);
        $("#question").hide();
        //$(".answerBtn").remove();
        // display text saying Wrong! The correct answer is ...
        // show associated image
        this.checkArray();
    },

    answerRight : function() {
        this.right++;
        $("#correct").text(this.right);
        $("#question").hide();
        //$(".answerBtn").remove();
        // display text saying Correct!
        // show associated image
        this.checkArray();
    },

    checkArray : function() {
        $(".answerBtn").remove();
        if (this.questionArray.length === 1) {
            console.log("last question");
            this.endGame();
        }
        else {
            $("#gameStatus").show();
            $("#nextBtn").show();
            $("#nextBtn").click(function(e) {  
                e.stopImmediatePropagation()
                gameObject.removeQuestion();
                gameObject.nextQuestion();
            });
        }
    },

    nextQuestion : function() {
        this.index = Math.floor(Math.random()*(this.questionArray.length))
        $("#gameStatus").hide();
        $("#nextBtn").hide();
        $("#question").show();
        this.displayQuestion();
        this.displayAnswers();
        this.startTimer();
        this.answerQuestion();
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