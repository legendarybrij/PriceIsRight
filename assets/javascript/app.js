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
var questionThree = ["For $400, Can you name this famous actor?", "Anthony Hawk","Christian Bale", "Tom Hanks", "Richard Gere", "Tom Hanks", 400];
var questionFour = ["For $800, Can you name this famous actor?", "Anthony Hawk","Christian Bale", "Tom Hanks", "Richard Gere", "Tom Hanks", 800];
var questionFive = ["For $1600, Can you name this famous actor?", "Anthony Hawk","Christian Bale", "Tom Hanks", "Richard Gere", "Tom Hanks", 1600];
var questionSix = ["For $3200, Can you name this famous actor?", "Anthony Hawk","Christian Bale", "Tom Hanks", "Richard Gere", "Tom Hanks", 3200];
var questionSeven = ["For $6400, Can you name this famous actor?", "Anthony Hawk","Christian Bale", "Tom Hanks", "Richard Gere", "Tom Hanks", 6400];
var questionEight = ["For $12800, Can you name this famous actor?", "Anthony Hawk","Christian Bale", "Tom Hanks", "Richard Gere", "Tom Hanks", 12800];
var questionNine = ["For $25600, Can you name this famous actor?", "Anthony Hawk","Christian Bale", "Tom Hanks", "Richard Gere", "Tom Hanks", 25600];
var questionTen = ["For $51200, Can you name this famous actor?", "Anthony Hawk","Christian Bale", "Tom Hanks", "Richard Gere", "Tom Hanks", 51200];

var rightAudio = document.createElement("audio");
rightAudio.setAttribute("src","assets/images/correct.mp3");
var wrongAudio = document.createElement("audio");
wrongAudio.setAttribute("src","assets/images/wrong.mp3");
var timesUp = document.createElement("audio");
timesUp.setAttribute("src","assets/images/timesup.mp3");



/*var kate = document.createElement("img");
kate.scr = "assets/images/kate.jpg";*/

var kate = "assets/images/kate.jpg";
var tom = "assets/images/tom.jpg";
var changeImage = [kate,tom];


var questions = [questionOne, questionTwo];

//document.getElementById("image").innerHTML = "assets/images/kate.jpg";

$(document).ready(function(){
       $("#image").hide();
        $("#start").on("click", function(){
            $("#question").addClass("alert alert-primary");
            $("#start").hide();
            $("#image").show();

                game.start(); 
                game.check();
           
          
        });
                
        


});





var game = {
            init: function() {

                text = $("<div>");
                questionOne = ["What is your name?", "Mike","Jason", "John", "Maria", "John"];
                questionTwo = ["For $200, Can you name this famous actor?", "Anthony Hawk","Christian Bale", "Tom Hanks", "Richard Gere", "Tom Hanks", 200];
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
            
            },
            check: function(){
                
                $(".answer").on("click", function(event){

                            target = event.target.id;
                            number =target.slice(-1);
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
                                $(".answer").hide();
                                $("#rightAnswer").removeClass("alert alert-success alert-danger alert-info");
                                $("#rightAnswer").show();
                                $("#rightAnswer").text("Ahh oh...That was incorrect. The right answer is: " + questions[curQuestion][5] );
                                $("#rightAnswer").addClass("alert alert-danger");
                            }

                            
                                curQuestion++;
                                setTimeout(game.start, 8500);
                                clearInterval(timeMachine);
                                time=30;
                    
                });

            
            },
            start: function(){
                
                    //text = $("<div>");
                
                if(curQuestion<questions.length)
                {
                    $("#image").attr("src", changeImage[curQuestion]);
                    $(".answer").show();
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
                $("#correct").text("Correct: "+correct);
                $("#incorrect").text("Incorrect: "+incorrect);
                $("#unanswered").text("Unanswered: "+unanswered);
                if(won>0)
                {
                $("#money").text("Congratulations....You just have Won: $"+won);
                }else
                {
                    $("#money").text("Sorry you couldn't win anything this time");
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
