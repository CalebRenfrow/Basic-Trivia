$(document).ready(function() {
var answersArray = ["a","a","d","c","b"];

var time=30;
var downTick=setInterval(timer, 1000); 
$("#time").html(time);
    
    function timer()
    {
      time=time-1;
      if(time == 1){
        $("#seconds-left").html(" second left");
      }
      if (time <= 0)
      {
        countScore();
        $(location).attr('href', 'tally-page.html');
      }
    
     $("#time").html(time);
    }

function countScore(){
    var correctA = 0;
    var incorrectA = 0;
    var unansweredA = 0;
    for(var i = 1; i <= answersArray.length; i++)
    {
        
      
         if ($('[name=q'+i.toString()+']:checked').val()== answersArray [i-1])
        {
                correctA++;
        }
        else if (!($('[name=q'+i.toString()+']').is(':checked')))         
         {   
            unansweredA++;
        }
        else{
           incorrectA++; 
        }
        
    }

    sessionStorage.setItem("correctAnswered",correctA);
    sessionStorage.setItem("incorrectAnswered",incorrectA);
    sessionStorage.setItem("unAnswered",unansweredA);
    
    };

    function showScore(){
    
    $("#correct").html(sessionStorage.correctAnswered);
    $("#incorrect").html(sessionStorage.incorrectAnswered);
    $("#unanswered").html(sessionStorage.unAnswered);
    }

    
$("#start-box").on("click",function(){
    $(location).attr('href', 'questions.html');
    
});

$("#done-box").on("click",function(){
    countScore();
   $(location).attr('href', 'tally-page.html');
});


        showScore();

});