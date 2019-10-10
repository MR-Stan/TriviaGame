gameObject = {

    // use gifs instead of images
    // question bank
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    questionArr : [

        { 
            question : "",
            answer : [],
            image : "<img src='assets/images/' alt='' class='image'>"
        },

        { 
            question : "",
            answer : [],
            image : "<img src='assets/images/' alt='' class='image'>"
        },

        { 
            question : "",
            answer : [],
            image : "<img src='assets/images/' alt='' class='image'>"
        },
        
        { 
            question : "",
            answer : [],
            image : "<img src='assets/images/' alt='' class='image'>"
        },

        { 
            question : "",
            answer : [],
            image : "<img src='assets/images/' alt='' class='image'>"
        },
        
        { 
            question : "",
            answer : [],
            image : "<img src='assets/images/' alt='' class='image'>"
        },

        { 
            question : "",
            answer : [],
            image : "<img src='assets/images/' alt='' class='image'>"
        },
        
        { 
            question : "",
            answer : [],
            image : "<img src='assets/images/' alt='' class='image'>"
        },

        { 
            question : "",
            answer : [],
            image : "<img src='assets/images/' alt='' class='image'>"
        },
        
        { 
            question : "",
            answer : [],
            image : "<img src='assets/images/' alt='' class='image'>"
        },

        { 
            question : "",
            answer : [],
            image : "<img src='assets/images/' alt='' class='image'>"
        },
        
        { 
            question : "",
            answer : [],
            image : "<img src='assets/images/' alt='' class='image'>"
        }
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

                $("<div/>").attr("id", "questionsRight").appendTo("#questionCount");

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