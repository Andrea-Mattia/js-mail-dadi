/**
 *  EMAIL CHECKING
 *  - Ask user email
 *  - check if it's in the list
 *  - Print a confirmation message
 */

function myFunction1() {
    // inserimento nell'html della scelta eseguita
    document.getElementById('title').innerHTML = 'Controllo email nel database.';
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