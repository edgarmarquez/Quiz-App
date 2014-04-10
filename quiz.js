$(document).ready(function(){
   
   var numberRight = 0;
   var numberWrong = 0;

   //Right Answers displayed.
  $("#right").click(function(){
  	$(".right_answer, .balls, .next").slideDown("slow");
  	$(".wrong, #right").prop('disabled', true);
     numberRight++;
  })

   $("#right2").click(function(){
	$(".right_answer2, .balls2, .next2").slideDown("slow");
	$(".wrong2").prop('disabled', true);
     numberRight++;

  })

   $("#right3").click(function(){
    $(".right_answer3, .balls3, .next3").slideDown("slow");
    $(".wrong3").prop('disabled', true);
	 numberRight++;  
  })

   $("#right4").click(function(){
    $(".right_answer4, .balls4, .next4").slideDown("slow");
    $(".wrong4").prop('disabled', true);
     numberRight++;
  })

   $("#right5").click(function(){
 	$(".right_answer5, .balls5, .next5").slideDown("slow");
 	$(".wrong5").prop('disabled', true);
 	 numberRight++;	
  })

   //Wrong_Answer displayed
	   $(".wrong").click(function(){
	   $(".wrong_answer, .next").slideDown("slow");
	   $("#right").prop('disabled', true);
	   
	   })

	   $(".wrong2").click(function(){
	   $(".wrong_answer, .next2").slideDown("slow"); 
	   $("#right2").prop('disabled', true);
	    
	   })

	   $(".wrong3").click(function(){
	   $(".wrong_answer, .next3").slideDown("slow");
	   $("#right3").prop('disabled', true);
	   
	   })

	   $(".wrong4").click(function(){
	   $(".wrong_answer, .next4").slideDown("slow");
	   $("#right4").prop('disabled', true);
	  
	   })

	   $(".wrong5").click(function(){
	   $(".wrong_answer, .next5").slideDown("slow");
	   $("#right5").prop('disabled', true);
	   
	   })


	 //Removing user's answers and switching set of questions
	    $(".next").on('click',function(){
	      $(".right_answer, .wrong_answer, .next, .questions").slideUp("slow");
	       $(" .questions2").slideDown("slow");        
	    })

	    $(".next2").on('click',function(){
	      $(".right_answer2, .wrong_answer, .next2, .questions2").slideUp("slow");
	       $(" .questions3").slideDown("slow");         
	    })

	    $(".next3").on('click',function(){
	      $(".right_answer3, .wrong_answer, .next3, .questions3").slideUp("slow");
	       $(" .questions4").slideDown("slow");         
	    })

	    $(".next4").on('click',function(){
	      $(".right_answer4, .wrong_answer, .next4, .questions4").slideUp("slow");
	       $(" .questions5").slideDown("slow");         
	    })

	    $(".next5").on('click',function(){
	      $(".right_answer5, .wrong_answer, .next5, .questions5").slideUp("slow");
	      if(numberRight == 5){
             $(".winner,.try_again").slideDown("slow");
	      }else if(numberRight !== 5){
             $(".loser, .try_again").slideDown("slow");
             $("#number").text(numberRight - numberWrong);
	      }	             
	    })

	    //Hiding Set of Questions
	    $(function () {
		  $('.questions, .questions2, .questions3, .questions4, .questions5').hide();
		 });

        //Starting over
        $(".try_again").click(function(){
          window.location.reload();  
        });
         
	 	   $(window).load(function(){
	         $(".questions").fadeIn(3000);
	 	   })
     
});
