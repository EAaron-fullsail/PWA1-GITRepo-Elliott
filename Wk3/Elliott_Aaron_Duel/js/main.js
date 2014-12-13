/**
 * Duel Part 2 
 * Date: 12/5/14
 * Aaron Elliott 

 Assignment 1
 Part 2/3 of series
*/

// self-executing function
(function(){ // anon js function 

    var doc = document,
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

    var playerOne = {pName:'Kabal', damage:'20', health:'100'},
    playerTwo = {pName:'Kratos', damage:'20', health:'100'};

    var playerOneHUD = doc.getElementById('player_one'),
    playerTwoHUD = doc.getElementById('player_two'),
    playerOneName = playerOneHUD.getElementsByTagName('p')[0],
    playerOneHealth = playerOneHUD.getElementsByTagName('p')[1],
    playerTwoName = playerTwoHUD.getElementsByTagName('p')[0],
    playerTwoHealth = playerTwoHUD.getElementsByTagName('p')[1];



    playerOneName.innerHTML = playerOne.pName;
    playerTwoName.innerHTML = playerTwo.pName;
    playerOneHealth.innerHTML = playerOne.health;
    playerTwoHealth.innerHTML = playerTwo.health;

    //initiate round
    var round=0;  // Decalare variable 

    function fight(){ // Init fight function 

        //random formula is - Math.floor(Math.random() * (max - min) + min);
        var minDamage1 = playerOne.damage * .5; // Declare the minDamage for player one
        minDamage2 = playerTwo.damage * .5, // Declare the minDamage for player one            
        f1 = Math.floor(Math.random()*(playerOne.damage-minDamage1)+minDamage1), // Randomize the damage dealt by player one
        f2 = Math.floor(Math.random()*(playerTwo.damage-minDamage2)+minDamage2); // Randomize the damage dealt by player one

        //inflict damage
        playerOne.health-=f1; // Decrement the damage dealt by player one
        playerTwo.health-=f2; // Decrement the damage dealt by player one

        console.log(playerOne.pName+": "+playerOne.health + " " + playerTwo.damage+":"+playerTwo.health); // Log the action to the console

        //check for victor
        var result = winnerCheck(); // Call the winner check function
        console.log(result);        // Log the result variable to the console
        if (result==="no winner") // check to see if there was a winner 
        {
            round++; // No? Increment the round variable 
            alert(playerOne.pName+":"+playerOne.health+"  *ROUND "+round+" OVER"+"*  "+playerTwo.pName+":"+playerTwo.health); // Alert this to the user

        } else{
            alert(result); // Yes? Alert the result to the user
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
    var actionButton = doc.getElementsByClassName('buttonblue');
    /*******  The program gets started below *******/
    //actionButton.onclick = fight(); // Call the fight function to start the program

})();