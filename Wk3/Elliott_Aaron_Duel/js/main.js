/**
 * Duel Part 2 
 * Date: 12/12/14
 * Aaron Elliott 

 Assignment 1
 Part 3/3 of series
*/

// self-executing function
(function(){ // anon js function 

    doc = document,
    win = window; 

    console.log("FIGHT!!!");

    //player name
    //var playerOneName = "Kabal"; // Declare player ones name as 
    //var playerTwoName = "Kratos";    // Declare Player two's name as Kratos

    //player damage
    //var player1Damage = 20;  // Declare the min Damage for player one
    //var player2Damage = 20;  // Declare the min Damage for player two

    //player health
    //var playerOneHealth = 100; // Declare the health for player one
    //var playerTwoHealth = 100; // Declare the health for player two

    var playerOne = {pName:'Kabal', damage:'20', health:'100'}, // object for player one
    playerTwo = {pName:'Kratos', damage:'20', health:'100'}; // object for player two

    //initiate round
    var round=0;  // Decalare variable 


    function fight(){ // Init fight function 

        var playerOneHUD = doc.getElementById('player_one'), // target the player one hud
        playerTwoHUD = doc.getElementById('player_two'),// target the player two hud
        playerOneName = playerOneHUD.getElementsByTagName('p')[0], // target the player one  health
        playerOneHealth = playerOneHUD.getElementsByTagName('p')[1], // target the player two heath
        playerTwoName = playerTwoHUD.getElementsByTagName('p')[0],// target the player one name
        playerTwoHealth = playerTwoHUD.getElementsByTagName('p')[1];// target the player two name


        playerOneName.innerHTML = playerOne.pName; // set the html to player's name
        playerTwoName.innerHTML = playerTwo.pName;// set the html to player's name
        playerOneHealth.innerHTML = "Health:" + playerOne.health;// set the html to player's health
        playerTwoHealth.innerHTML = "Health" + playerTwo.health;// set the html to player's health


        //alert(playerOne.pName+":"+playerOne.health+"  *START*  "+playerTwo.pName+":"+playerTwo.health); // Alert with starting health with each player

        var output = doc.getElementById('fight_output'); // taget the output container
        output.innerHTML = playerOne.pName+"  *VS*  "+playerTwo.pName; // set the inner html to the player's name
        doc.getElementById('btn').onclick = function() // for loop to deal damage
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = playerOne.damage * .5; // Declare the minDamage for player one
            minDamage2 = playerTwo.damage * .5, // Declare the minDamage for player one            
            f1 = Math.floor(Math.random()*(playerOne.damage-minDamage1)+minDamage1), // Randomize the damage dealt by player one
            f2 = Math.floor(Math.random()*(playerTwo.damage-minDamage2)+minDamage2); // Randomize the damage dealt by player one

            //inflict damage
            playerOneHealth.innerHTML = playerOne.health-=f1; // Decrement the damage dealt by player one
             playerTwoHealth.innerHTML = playerTwo.health-=f2; // Decrement the damage dealt by player one

            console.log(playerOne.pName+": "+playerOne.health + " " + playerTwo.damage+":"+playerTwo.health); // Log the action to the console

            //check for victor
            var result = winnerCheck(); // Call the winner check function
            console.log(result);        // Log the result variable to the console
            if (result==="no winner") // check to see if there was a winner 
            {
                round++; // No? Increment the round variable 
                output.innerHTML = playerOne.pName+":"+playerOne.health+"  *ROUND "+round+" OVER"+"*  "+playerTwo.pName+":"+playerTwo.health; // Alert this to the user

            } else{
               output.innerHTML = result; // Yes? Alert the result to the user
               doc.getElementById('btn').onclick = null;
            };
        };
    };
    function winnerCheck(){ // Start winnercheck function 
        var result="no winner"; // Declare the winner check variable 
        if (playerOne.health<1 && playerTwo.health<1) // See if both players have health remaining 
        {
            result = "You Both Die";  // set result variable to "You Both Die"
    
        } else if(playerOne.health<1){ // Did player one die?  
            result =PlayerTwo.pName+" WINS!!!" // set result variable to "Player 2 Wins"
      
        } else if (playerTwo.health<1) // Did player two die? 
        {
            result = playerOne.pName+" WINS!!!" // set result variable to "Player 1 Wins"


        };
       return result;
    };

    /*******  The program gets started below *******/
    fight(); // Call the fight function to start the program

})();