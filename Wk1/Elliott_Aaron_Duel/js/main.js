/**
 * Duel Part 1 
 * Date: 12/5/14
 * Aaron Elliott 

 Assignment 1
 Part 1/3 of series
*/

// self-executing function
(function(){ // anon js function 

    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Kabal"; // Declare player ones name as 
    var playerTwoName = "Kratos";    // Declare Player two's name as Kratos

    //player damage
    var player1Damage = 20;  // Declare the min Damage for player one
    var player2Damage = 20;  // Declare the min Damage for player two

    //player health
    var playerOneHealth = 100; // Declare the health for player one
    var playerTwoHealth = 100; // Declare the health for player two

    //initiate round
    var round=0;  // Decalare variable 

    function fight(){ // Init fight function 
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth); // Alert with starting health with each player
        for (var i = 0; i < 10; i++) // for loop to deal damage
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5; // Declare the minDamage for player one
            var minDamage2 = player2Damage * .5; // Declare the minDamage for player one            
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); // Randomize the damage dealt by player one
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2); // Randomize the damage dealt by player one

            //inflict damage
            playerOneHealth-=f1; // Decrement the damage dealt by player one
            playerTwoHealth-=f2; // Decrement the damage dealt by player one

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth); // Log the action to the console

            //check for victor
            var result = winnerCheck(); // Call the winner check function
            console.log(result);        // Log the result variable to the console
            if (result==="no winner") // check to see if there was a winner 
            {
                round++; // No? Increment the round variable 
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth); // Alert this to the user

            } else{
                alert(result); // Yes? Alert the result to the user
                break; // end
            };

          };
    };

    function winnerCheck(){ // Start winnercheck function 
        var result="no winner"; // Declare the winner check variable 
        if (playerOneHealth<1 && playerTwoHealth<1) // See if both players have health remaining 
        {
            result = "You Both Die";  // set result variable to "You Both Die"
        } else if(playerOneHealth<1){ // Did player one die?  
            result =playerTwoName+" WINS!!!" // set result variable to "Player 2 Wins"
        } else if (playerTwoHealth<1) // Did player two die? 
        {
            result = playerOneName+" WINS!!!" // set result variable to "Player 1 Wins"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight(); // Call the fight function to start the program

})();