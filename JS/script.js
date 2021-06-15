/*
PARTE 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. 
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.

-----------------------------------------------------------------------------------

PARTE 2
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  
Ricordatevi, è un array, quindi? for.

-------------------------------------------------------------------------------------

PARTE 3
Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - 
di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.
Consigli:
Le slide e il codice scritto oggi in classe vi saranno molto utili. Riguardatevi anche i video se possono essere utili. 
Ragionate per step, un passo alla volta, e vedrete che alla fine il tutto risulterà molto semplice
*/

var outputHtml = document.getElementById("output");

var student = {
    nome: "dayron",
    cognome: "aguilera",
    anni: 36,
}
// var class1B = {
//     student: [],
// }  
    // var studentName = prompt('Inserisci il nome studente');
    // var studentSurname = prompt('Inserisci il cognome studente');
    // var studentAge = parseInt( prompt('Inserisci l\'età'));

    // // lo facciamo in un modo un po' "anonimo", per evitare dopo
    // // di sovrascrivere lo stesso oggetto.
    // class1B.student.push({
    //     name: studentName,
    //     surname: studentSurname,
    //     age: studentAge,
    // });


for (var key in student) {
    outputHtml.innerHTML = (key, student[key]);
}

// var htmlString = '';

// for (var key in class1B) {  // ciclo nell'oggetto

//     if (key === 'student') { // qui scelgo l'array
//         htmlString += '<li>' + key + ': ';

//         for (var x = 0; x < class1B[key].length; x++) { // ciclo l'array dei passengers
//             htmlString += class1B[key][x]['name'] + ', ';
//         }

//         htmlString += '</li>';

//     } else {
//         htmlString += '<li>' + key + ': ' + class1B[key] + '</li>'
//     }
    
// }
// outputHtml.innerHTML = htmlString;

