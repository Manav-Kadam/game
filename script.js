    var playing =  false;
    var score;
    var lifeLeft;
    var step;
    var fruits;
    var action;
    $(function () {

        $("#startreset").click
        (function(){

    if(playing == true){

    location.reload();

    }

    else{

    playing = true;

    score = 0;

    $("#scorevalue").html(score);

    $("#trial").show();

    lifeLeft = 3;
    addHeart();
    $("#gameOver").hide();
    $("#startreset").html("Reset Game");

    startAction();


    }
        });

         //slice
          $("#fruit1").mouseover(function(){
            score++;
            $("#scorevalue").html(score);
            $("#slice1")[0].play();  //sound
            clearInterval(action); //stop and hide fruit
            $("#fruit1").hide("explode",400);
            setTimeout(startAction,450);
          });

    function addHeart(){
        $("#trial").empty();
        for( i=0;i<lifeLeft;i++){

            $("#trial").append("<img src='images/heart.png' class='que'>");
            }
    }

    function startAction(){

        //generate fruit
        $("#fruit1").show();
        chooseFruit();  //choose random fruit
        if(window.screen.width < 600){
        $("#fruit1").css({'left':Math.round(170*Math.random()) , 'top':-200 });
        $("#instruction").html("touch fruit");}
        else{
            $("#fruit1").css({'left':Math.round(550*Math.random()) , 'top':-250 });
        }
        //generate random step
        step = 1+Math.round(5*Math.random());  // change step
        
        // move fruit down 1oms
        action = setInterval (function(){
        
            // move fruit by one step
            $("#fruit1").css('top', $("#fruit1").position().top + step);
    

            //check fruit height is low 
            if($("#fruit1").position().top > $("#fruitcontainer").height()){
                // check if life left
    
                if(lifeLeft > 1){
                    
                    //generate fruit
                $("#fruit1").show();

            
                chooseFruit();
            
                $("#fruit1").css({'left':Math.round(550*Math.random()) , 'top':-250 });
        
                    step = 1+Math.round(5*Math.random())  // change step
                    
                    //reduce one  life
                    lifeLeft--; 

    
                    addHeart(); //remove one life
        
                }
    else{ //game over
        playing = false;
        
        $("#startreset").html("Start Game");
        $("#gameOver").show();
        $("#gameOver").html("<p>GAME OVER !</p> <p>YOUR SCORE IS "+score+"</p>")
        stopAction();
        $("#trial").hide();
        $("#slice")[0].play();
    }
    }
    },10); 
    }

    function chooseFruit(){
        $("#fruit1").attr('src','images/'+Math.round(9*Math.random()+1)+".png");
    }

    function stopAction(){
        clearInterval(action);
        $("#fruit1").hide();
    }
        
    });
