gameObject = {

    // question / answer bank
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
                correct : "Midway Games Inc"
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
    qCount : 1,
    
    // HTML elements
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    createElements : function() {

        // displays initial instructions
        $("<div/>").attr("id", "introDiv").appendTo("main");

        $("#introDiv").append("Welcome to the Random Trivia Trivia Game! <br><br> Guess the correct answer to each question to win. <br><br> Press 'Start' to begin!")

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
            
            $("<div/>").attr("id", "timer").css("color", "rgb(232,198,39)").appendTo("main");

            $("<div/>").attr("id", "question").appendTo("main");

            $("<div/>").attr("id", "result").appendTo("main");

                $("<div/>").attr("id", "resultText").appendTo("#result");

                $("<div/>").attr("id", "resultImg").appendTo("#result");

            $("<div/>").attr("id", "buttonContainer").appendTo("main");

            $("<button>", {text : "Start", id : "startBtn", class : "button"}).appendTo("#buttonContainer");

            $("<button>", {text : "Play Again", id : "resetBtn", class : "button"}).appendTo("#buttonContainer");

            $("<button>", {text : "Next Question", id : "nextBtn", class : "button"}).appendTo("#buttonContainer"); // need to remove
    },

    // starts game
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    start : function() {
        this.createElements();
        $("#gameStatus, #nextBtn, #resetBtn").hide();
        $("#startBtn").click(function() { 
            $("#startBtn").hide();
            $("#introDiv").hide();
            gameObject.nextQuestion();
        });
    },

    // timer controls
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    startTimer : function() {
        this.counter = 10; // timer starts at 10 seconds
        $("#timer").text("Time Remaining: " + this.counter + " seconds");
        // every second the counter is decremented by 1 and displayed on the page
        this.timer = setInterval(function(){
            gameObject.counter--;
            $("#timer").text("Time Remaining: " + gameObject.counter + " seconds");
            // the timer will stop when it reaches 0 and will change colors based on time left
            if (gameObject.counter === 0) {
                clearInterval(gameObject.timer);
                gameObject.timesUp();
            }
            else if (gameObject.counter < 4) {
                $("#timer").css("color", "red");
            }
            else if (gameObject.counter < 6) {
                $("#timer").css("color", "darkorange");
            }
            else if (gameObject.counter < 8) {
                $("#timer").css("color", "orange");
            }
        }, 992);
    },

    // determining answers corresponding to picked question, randomizing answer order, displaying answers
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    displayAnswers : function() {
        // localIndex used for answer button Id's
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
        // randomNumber used to determine correct answer button location
        let randomNumber = Math.floor(Math.random() * Math.floor(3));
        // if randomNumber is 0, place the correct answer button before all other answer buttons
        if (randomNumber === 0) {
            $("<button>").attr("class", "answerBtn") 
            .text(gameObject.questionArray[gameObject.index].answer.correct) 
            .data("name", gameObject.questionArray[gameObject.index].answer.correct)
            .insertBefore("#btn0");
        }
        // if randomNumber is 1 or 2 place the correct answer button after this number button
        else {
            $("<button>").attr("class", "answerBtn")
            .text(gameObject.questionArray[gameObject.index].answer.correct)
            .data("name", gameObject.questionArray[gameObject.index].answer.correct)
            .insertAfter("#btn" + randomNumber);
        }
        $(".answerBtn").show();
    },

    // when an answer is picked
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    answerQuestion : function() {
        $(".answerBtn").click(function() { 
            // stop timer
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

    // removes object from questionArray after a question has been answered
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    removeQuestion : function() {
        this.questionArray.splice(this.index, 1);
        this.checkArray();
    },


    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    timesUp : function() {
        this.unanswered++;
        $("#unanswered").text(this.unanswered);
        $("#question").hide();
        $("#resultText").text("You ran out of time! The correct answer was " + gameObject.questionArray[gameObject.index].answer.correct + ".");
        $("#resultImg").html(gameObject.questionArray[gameObject.index].image);
        this.checkArray();
    },


    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    answerWrong : function() {
        this.wrong++;
        $("#wrong").text(this.wrong);
        $("#question").hide();
        $("#resultText").text("Wrong! The correct answer was " + gameObject.questionArray[gameObject.index].answer.correct + ".");
        $("#resultImg").html(gameObject.questionArray[gameObject.index].image);
        this.checkArray();
    },


    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    answerRight : function() {
        this.right++;
        $("#correct").text(this.right);
        $("#question").hide();
        $("#resultText").text("Nice job! " + gameObject.questionArray[gameObject.index].answer.correct + " was the right answer!");
        $("#resultImg").html(gameObject.questionArray[gameObject.index].image);
        this.checkArray();
    },


    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    checkArray : function() {
        this.qCount++;
        $(".answerBtn").remove();
        $("#gameStatus").show();
        $("#nextBtn").show(); // need to replace with timeout
        $("#nextBtn").click(function(e) {  
            if (gameObject.qCount === 20) {
                gameObject.endGame();
            }
            else {
            e.stopImmediatePropagation()
            gameObject.removeQuestion();
            gameObject.nextQuestion();
            }
        });
    },

    // if more questions are available, determine and display next question
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    nextQuestion : function() {
        // determining index of next object in questionArray
        this.index = Math.floor(Math.random()*(this.questionArray.length))
        // resetting timer color
        $("#timer").css("color", "rgb(232,198,39)")
        // emptying divs related to previous answer
        $("#resultText, #resultImg").empty();
        $("#gameStatus, #nextBtn").hide();
        // showing the next question
        $("#question").text(this.questionArray[this.index].question).show();
        this.displayAnswers();
        this.startTimer();
        this.answerQuestion();
    },

    // after all questions have been answered
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    endGame : function() {
        $("#nextBtn").remove();
        $("#timer, #resultText, #resultImg").hide();
        $("#introDiv").text("Here's how you did: ")
        $("#questionsCorrect, #questionsWrong, #questionsUnanswered").css("display", "block");
        $("#correct, #wrong, #unanswered").css("margin", "0");
        $("#gameStatus, #introDiv, #resetBtn").show();
        $("#resetBtn").click(function(e) {  
            e.stopImmediatePropagation();
            window.location.reload();
        });    
    },
}

gameObject.start();