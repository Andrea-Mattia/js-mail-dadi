/**
 *  EMAIL CHECKING
 *  - Ask user email
 *  - check if it's in the list
 *  - Print a confirmation message
 */

function myFunction1() {
    // inserimento nell'html della scelta eseguita
    document.getElementById('title').innerHTML = 'Controllo email nel database';
    // DEFINIZIONE VARIABILI

    // assunzione del dato inserito
    var userEmail = document.getElementById('email').value;

    var list = ['andrea.mattia94@gmail.com', 'ciao@bello.it', 'paolo.duzioni@gmail.com', 'prova123@gmail.com'];
    
    var userFound = false;

    // for cycle
    for (var i = 0; i < list.length; i++) {
        if (list[i] == userEmail) {
            userFound = true;
            break;
        }
    }

    // inserimento risposta nell'html
    if (userFound) {
        document.getElementById('response').innerHTML = 'Utente presente nel database';
    } else {
        document.getElementById('response').innerHTML = 'Utente non trovato. Si prega di riprovare.';
    }
}


/**
 *  RANDOM DICE GAME
 * - generate a random number from 1 to 6 for pc and player
 * - check who have the highest score
 * - declare winner
 */

function myFunction2() {
    // inserimento nell'html della scelta eseguita
    document.getElementById('title').innerHTML = 'Gioco dei dadi';
    // DEFINIZIONE VARIABILI

    //genera un numero casuale da 1 a 6 compresi
    var pcDice = Math.floor(Math.random() * 6) + 1;
    // inserimento del numero generato nell'html
    document.getElementById('pc-dice'). innerHTML = 'PC: ' + pcDice;
    //genera un numero casuale da 1 a 6 compresi
    var playerDice = Math.floor(Math.random() * 6) + 1;
    // inserimento del numero generato nell'html
    document.getElementById('player-dice'). innerHTML = 'Player: ' + playerDice;

    //controllo del vincitore
    if (pcDice > playerDice) {
        document.getElementById('result').innerHTML = 'Ha vinto il PC. Hai perso :(';
    } else if (playerDice > pcDice) {
        document.getElementById('result'). innerHTML = 'HAI VINTO!!!';
    } else {
        document.getElementById('result').innerHTML = 'Incredibile ma vero, Pareggio!';
    }
}