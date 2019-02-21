/* You'll create a trivia game that shows only one question until the player answers it or their time runs out.

* If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

* The scenario is similar for wrong answers and time-outs.

  * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
  * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

* On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).*/
//put questions in double array with position 0 as question and pos 1 to 4 as answers.
//loop through array once click on one of the answers go to next array


var text = $("<div>");
var curQustion = 0;
var correct = 0; 
var actors = ["kate", "jane"];
var source = "assets/images/"+actors[curQustion]+".jpg";
var target = "";
var number = 0;
//var img = 
//var img = "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/03/8-1.jpg?q=50&fit=crop&w=963";
var questionOne = ["What is your name?", "Mike","Jason", "John", "Maria", "John"];
var questionTwo = ["What is your age?", "11","30", "19", "25", "19"];
var rightAudio = document.createElement("audio");
rightAudio.setAttribute("src","assets/images/correct.mp3");


var questions = [questionOne, questionTwo];
//document.getElementById("source").innerHTML = "assets/images/kate.jpg";

$(document).ready(function(){
       $("#image").hide();
        $("#start").on("click", function(){
            $("#start").hide();
          // document.getElementById("image").innerHTML = "assets/images/kate.jpg";
            $("#image").show();
            game.start(); 
            game.check();
         
        });
                
        


});





var game = {
            init: function() {

                text = $("<div>");
                curQustion = 0;
                questionOne = ["What is your name?", "Mike","Jason", "John", "Maria", "John"];
                questionTwo = ["What is your age?", "11","30", "19", "25"];
            
            },
            check: function(){
                $(".answer").on("click", function(event){
                    target = event.target.id;
                    number =target.slice(-1);
                    if(questions[curQustion][5]===questions[curQustion][number])
                    {
                            rightAudio.play();
                            
                    }else{
                        
                    }
                    curQustion++;
                    game.start(); 
                   
                    
                });

            
            },
            start: function(){
                
                    //text = $("<div>");
                    
                  //  $(".answer").show();
                    $("#question").text(questions[curQustion][0]);
                    $("#question").append(text);

                    $("#answers1").text(questions[curQustion][1]);
                  //  $("#answers1").append(text);
                    $("#answers2").text(questions[curQustion][2]);
                  //  text = $("<div>");
                 //   $("#answers2").append(text);
                    $("#answers3").text(questions[curQustion][3]);
                 //   text = $("<div>");
                   // $("#answers3").append(text);
                    $("#answers4").text(questions[curQustion][4]);
                
                

                

                



            },

};


  

/*function set() {
    setTimeout(function(){ }, 3000);
  }*/