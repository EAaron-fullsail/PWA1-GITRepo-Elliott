/**
 * Duel Part 2 
 * Date: 12/5/14
 * Aaron Elliott 

 Assignment 1
 Part 2/3 of series
*/

// self-executing function
(function(){ // anon js function 

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

    var PlayerOne = ['Kabal','20','100'],
    PlayerTwo = ['Kabal','20','100'];

    //initiate round
    var round=0;  // Decalare variable 

    function fight(){ // Init fight function 
        alert(PlayerOne[0]+":"+PlayerOne[2]+"  *START*  "+PlayerTwo[0]+":"+PlayerTwo[2]); // Alert with starting health with each player
        for (var i = 0; i < 10; i++) // for loop to deal damage
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = PlayerOne[1] * .5; // Declare the minDamage for player one
            var minDamage2 = PlayerTwo[1] * .5; // Declare the minDamage for player one            
            var f1 = Math.floor(Math.random()*(PlayerOne[1]-minDamage1)+minDamage1); // Randomize the damage dealt by player one
            var f2 = Math.floor(Math.random()*(PlayerTwo[1]-minDamage2)+minDamage2); // Randomize the damage dealt by player one

            //inflict damage
            PlayerOne[2]-=f1; // Decrement the damage dealt by player one
            PlayerTwo[2]-=f2; // Decrement the damage dealt by player one

            console.log(PlayerOne[0]+": "+PlayerOne[2] + " " + PlayerTwo[1]+":"+PlayerTwo[2]); // Log the action to the console

            //check for victor
            var result = winnerCheck(); // Call the winner check function
            console.log(result);        // Log the result variable to the console
            if (result==="no winner") // check to see if there was a winner 
            {
                round++; // No? Increment the round variable 
                alert(PlayerOne[0]+":"+PlayerOne[2]+"  *ROUND "+round+" OVER"+"*  "+PlayerTwo[0]+":"+PlayerTwo[2]); // Alert this to the user

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