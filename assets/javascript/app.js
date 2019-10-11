gameObject = {

    // use gifs instead of images
    // question bank
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    questionArr : [

        { 
            question : "In which year did the demolition of the Berlin Wall begin?",
            answer : {
                wrong : [
                    "1967",
                    "1991",
                    "1776"
                ],
                correct : "1989"
            },
            image : "<img src='assets/images/' alt='' class='image'>"
        },

        { 
            question : "In which year was the death of Queen Elizabeth I?",
            answer : {
                wrong : [
                    "1999",
                    "1566",
                    "1787"
                ],
                correct : "1603"
            },
            image : "<img src='assets/images/' alt='' class='image'>"
        },

        { 
            question : "Who was the cult leader of the Waco Siege in 1993?",
            answer : {
                wrong : [],
                correct : "David Koresh"
            },
            image : "<img src='assets/images/' alt='' class='image'>"
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
            image : "<img src='assets/images/' alt='' class='image'>"
        },

        { 
            question : " Doctor Ivo “Eggman” Robotnik is the enemy of which video game character?",
            answer : {
                wrong : [],
                correct : "Sonic the Hedgehog"
            },
            image : "<img src='assets/images/' alt='' class='image'>"
        },
        
        { 
            question : "Which video game company’s franchises included Mortal Kombat, Spy Hunter and Rampage?",
            answer : {
                wrong : [],
                correct : "Midway Games Inc."
            },
            image : "<img src='assets/images/' alt='' class='image'>"
        },

        { 
            question : "Mario first appeared in which classic video game?",
            answer : {
                wrong : [],
                correct : "Donkey Kong"
            },
            image : "<img src='assets/images/' alt='' class='image'>"
        },
        
        { 
            question : "What is the sum of the angles of a triangle?",
            answer : {
                wrong : [],
                correct : "180 degrees"
            },
            image : "<img src='assets/images/' alt='' class='image'>"
        },

        { 
            question : "What is the most commonly diagnosed cancer in men?",
            answer : {
                wrong : [],
                correct : "Prostate"
            },
            image : "<img src='assets/images/' alt='' class='image'>"
        },
        
        { 
            question : "Which US city has been hit by the most tornadoes?",
            answer : {
                wrong : [],
                correct : "Oklahoma City"
            },
            image : "<img src='assets/images/' alt='' class='image'>"
        },

    ],

    // gameObject variables
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    // HTML element method
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    createElements : function() {

        // headerDiv to hold the game title
        $("<div/>").attr("id", "headerDiv").appendTo("header");

        // displays initial instructions
        $("<div/>").attr("id", "introDiv").appendTo("main");

        // displays questionCount, timer, 
        $("<div/>").attr("id", "gameStatus").appendTo("main");

            // displays questions correct / wrong count
            $("<div/>").attr("id", "questionCount").appendTo("#gameStatus");

                $("<div/>").attr("id", "questionsCorrect").appendTo("#questionCount");

                $("<div/>").attr("id", "questionsWrong").appendTo("#questionCount");
            
            $("<div/>").attr("id", "timer").appendTo("#gameStatus");

            $("<div/>").attr("id", "question").appendTo("#gameStatus");

            // create answer buttons in reset and append to #buttonContainer

            $("<div/>").attr("id", "buttonContainer").appendTo("main");

            $("<button>", {text : "Start", id : "startBtn", class : "button"}).appendTo("#buttonContainer");

        // at end display total correct / wrong and total time spent
    },

    // CSS method
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

    // ------------------------------------------------------------------------------------------------------------------------------------------------------

 
    // reset game
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    reset : function() {
        $("main").empty();
        this.createDivs();
        $("#gameStatus").hide();
        $("#introDiv").show();

        $.each(this.characters, function (index) {
            gameObject.enemiesRemaining = (Math.max(index) - 1);
            $("#characterContainer").append("<div id='character" + index + "'</div>");
            $("#character" + index).addClass("character");
            $("#character" + index).attr({
                'data-name' : gameObject.characters[index].name,
                'data-hp' : gameObject.characters[index].hp,
                'data-ap' : gameObject.characters[index].ap,
                'data-ca' : gameObject.characters[index].ca
            });
            $("#character" + index).append(this.img);
            $("#character" + index).append("<br>" + this.name);
            $("#character" + index).append("<br>Health: " + this.hp); 
        });
        // on click for start button
        },
}

    // reset timer
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    // on button click reset timer to 30 seconds
    
    // checkAnswer(answer) - not sure how to do this
    // ------------------------------------------------------------------------------------------------------------------------------------------------------

gameObject.reset();