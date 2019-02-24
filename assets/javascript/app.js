/* You'll create a trivia game that shows only one question until the player answers it or their time runs out.

* If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

* The scenario is similar for wrong answers and time-outs.

  * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
  * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

* On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).*/
//put questions in double array with position 0 as question and pos 1 to 4 as answers.
//loop through array once click on one of the answers go to next array


var text = $("<div>");
var curQuestion = 0;
var correct = 0; 
var incorrect = 0;
var unanswered =0;
var won = 0;
//var source = "assets/images/"+actors[curQuestion]+".jpg";
var target = "";
var timeMachine = 0;
var time = 30;
var number = 0;
//var img = 
//var img = "https://static2.thequizimages.com/wordpress/wp-content/uploads/2018/03/8-1.jpg?q=50&fit=crop&w=963";
var questionOne = ["For $100, Can you name this famous actor?", "Katherine Heigl","Jennifer Aniston", "Rachel McAdams", "Kate Winslet", "Kate Winslet",100];
var questionTwo = ["For $200, Can you name this famous actor?", "Anthony Hawk","Christian Bale", "Tom Hanks", "Richard Gere", "Tom Hanks", 200];
var questionThree = ["For $300, Can you name this famous actor?", "Emma Stone","Hilary Duff", "Jennifer Lawrence", "Anne Hathaway", "Jennifer Lawrence", 300];
var questionFour = ["For $400, Can you name this famous actor?", "Patrick Dempsey","Leonardo DiCaprio", "John Stamos", "Ryan Phillippe", "Leonardo DiCaprio", 400];
var questionFive = ["For $500, Can you name this famous actor?", "Kaley Cuoco","Natalie Portman", "Charlize Theron", "Isla Fisher", "Charlize Theron", 500];
var questionSix = ["For $600, Can you name this famous actor?", "Michael Caine","Tom Hanks", "Sean Penn", "Robert De Niro", "Robert De Niro", 600];
var questionSeven = ["For $700, Can you name this famous actor?", "Kristen Bell","Rachel McAdams", "Laura Vandervoort", "Diane Kruger", "Rachel McAdams", 700];
var questionEight = ["For $800, Can you name this famous actor?", "Al Pacino","Richard Gere", "Nicolas Cage", "Robert de Niro", "Al Pacino", 800];
var questionNine = ["For $900, Can you name this famous actor?", "Olivia Wilde","Yvonne Strahovski", "Scarlett Johansson", "Amy Adams", "Scarlett Johansson", 900];
var questionTen = ["For $1000, Can you name this famous actor?", "David Denman","Edward Norton", "Eric Dane", "Nathan Fillion", "Edward Norton", 1000];

var rightAudio = document.createElement("audio");
rightAudio.setAttribute("src","assets/images/correct.mp3");
var wrongAudio = document.createElement("audio");
wrongAudio.setAttribute("src","assets/images/wrong.mp3");
var timesUp = document.createElement("audio");
timesUp.setAttribute("src","assets/images/timesup.mp3");
var intro =  document.createElement("audio");
intro.setAttribute("src","assets/images/intro.mp3");

var commonDown =  document.createElement("audio");
commonDown.setAttribute("src","assets/images/commondown.mp3");


/*var kate = document.createElement("img");
kate.scr = "assets/images/kate.jpg";*/


var changeImage = ["kate", "tom", "jennifer", "leonardo", "charlize", "robert", "rachel", "alpacino", "scarlett", "edward"];
//var pic = "assets/images/"+changeImage[curQuestion]+".jpg";

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight, questionNine, questionTen];

//document.getElementById("image").innerHTML = "assets/images/kate.jpg";



$(document).ready(function(){
    
       $("#image").hide();
       $("#restart").hide();
        $("#start").on("click", function(){
            intro.play();
            commonDown.play();
            $("#question").addClass("alert alert-primary");
            $("#start").hide();
            $("#image").show();

                game.start(); 
                game.check();
        });

        $("#restart").on("click", function(){
            $("#image").show();
                game.init();
                game.start(); 
               // game.check();
        });

});





var game = {
            init: function() {

                //text = $("<div>");
                curQuestion = 0;
                correct = 0; 
                incorrect = 0;
                unanswered =0;
                won = 0;
                //var source = "assets/images/"+actors[curQuestion]+".jpg";

                target = "";
                timeMachine = 0;
                time = 30;
                number = 0;
              //  $("#rightAnswer").text("");
            
            },
            check: function(){
                
                $(".answer").on("click", function(event){
                    clearInterval(timeMachine);
                            target = event.target.id;
                            number = target.slice(-1);
                            
                            if(questions[curQuestion][5]===questions[curQuestion][number])
                            {   
                                    rightAudio.play();
                                    correct++;
                                    won+=questions[curQuestion][6];
                                    $(".answer").hide();
                                    $("#rightAnswer").removeClass("alert alert-success alert-danger alert-info");
                                    $("#rightAnswer").show();
                                    $("#rightAnswer").text("You got it Right. The right answer is: " + questions[curQuestion][5] +". Cheers!!" );
                                    $("#rightAnswer").addClass("alert alert-success");
                                    
                                    
                            }else{
                                wrongAudio.play();
                                incorrect++;
                                won-=100;
                                $(".answer").hide();
                                $("#rightAnswer").removeClass("alert alert-success alert-danger alert-info");
                                $("#rightAnswer").show();
                                $("#rightAnswer").text("Ahh oh...That was incorrect. For every wrong answer you will loose 100 dollars. The right answer is: " + questions[curQuestion][5] );
                                $("#rightAnswer").addClass("alert alert-danger");
                            }

                            
                                curQuestion++;
                                setTimeout(game.start, 8500);
                                clearInterval(timeMachine);
                                time=30;
                    
                });

            
            },
            start: function(){
                
                if(curQuestion<questions.length)
                {   
                    $("#image").attr("src", "assets/images/"+changeImage[curQuestion]+".jpg");
                    $(".answer").show();
                    $(".result").hide();
                     $("#restart").hide();
                    $("#rightAnswer").hide();
                   document.getElementById("timeMachine").innerHTML = "Time Left: " + time;
                   reduceTime();
                   //initialize questions and answers
                    $("#question").text(questions[curQuestion][0]);
                    $("#question").append(text);

                    $("#answers1").text(questions[curQuestion][1]);
                
                    $("#answers2").text(questions[curQuestion][2]);
               
                    $("#answers3").text(questions[curQuestion][3]);
            
                    $("#answers4").text(questions[curQuestion][4]);
                
                }else
                {
                    game.finished();
                    $("#restart").show();
                }


            },
            timesUp: function(){
                
                timesUp.play();
                $(".answer").hide();
                $("#rightAnswer").removeClass("alert alert-success alert-danger alert-info");
                $("#rightAnswer").show();
                $("#rightAnswer").text("Ahh oh...Your time is up. The right answer is: " + questions[curQuestion][5] );
                $("#rightAnswer").addClass("alert alert-info");
                    curQuestion++;
                    unanswered++;
                    setTimeout(game.start, 8500);
                    clearInterval(timeMachine);
                    time=30;
                
            },
            finished:function(){
                $("#question").hide();
                $(".answer").hide();
                $("#rightAnswer").hide();
                $("#timeMachine").empty();
                $("#image").hide();
                $(".result").show();
                $("#restart").show();
                $("#correct").text("Correct: "+correct);
                $("#incorrect").text("Incorrect: "+incorrect);
                $("#unanswered").text("Unanswered: "+unanswered);
                if(won>0)
                {
                $("#money").text("Congratulations!!You just have Won: $"+won);
                }else
                {
                    $("#money").text("Sorry You Couldn't Win Anything This Time!!");
                }
            }


};


  

function reduceTime() {
    
    timeMachine = setInterval(decrease, 1000);
  }

  function decrease(){
    
    if(time>0)
      { 
        time--;
        document.getElementById("timeMachine").innerHTML = "Time Left: " + time;
      }else{

          game.timesUp();

      }
    
      
  }
