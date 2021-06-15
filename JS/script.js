/*
PARTE 1
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. 
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.
*/

var outputHtml = document.getElementById("output");

var student = {
    nome: "dayron",
    cognome: "aguilera",
    anni: 36,
}

for (var key in student) {
    outputHtml.innerHTML += student[key] + ' ';
}

/*
PARTE 2
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.  
Ricordatevi, è un array, quindi? for.
*/
// seconda parte ---------------------------
var output2 = document.getElementById("output2");

var class1A = [
    
    { name: "dayron", cognome: "aguilera",},
    { name: "noemi", cognome: "patermo",},
    { name: "tony", cognome: "d'agata",},
    
]
   
for (var i = 0; i < class1A.length; i++) {

    // per stampare tutte le proprietà key: value dell'oggetto
    for (var key in class1A[i]) {
        output2.innerHTML += class1A[i][key] + ' ';
    }
    
}

/*
PARTE 3
Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - 
di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.
Consigli:
Le slide e il codice scritto oggi in classe vi saranno molto utili. Riguardatevi anche i video se possono essere utili. 
Ragionate per step, un passo alla volta, e vedrete che alla fine il tutto risulterà molto semplice
*/
// terza parte ------------------------------
var output = document.getElementById("output3");

var class1b = {
    students: [],
}


var studentName = prompt('Inserisci il nome ');
var studentSurname = prompt('Inserisci il cognome ');
var studentAge = prompt('Inserisci gli anni');

// lo facciamo in un modo un po' "anonimo", per evitare dopo
// di sovrascrivere lo stesso oggetto.
class1b.students.push({
    name: studentName,
    surname: studentSurname,
    age: studentAge,
});

for (var i = 0; i < class1b.students.length; i++) {

    // per stampare tutte le proprietà key: value dell'oggetto
    for (var key in class1b.students[i]) {
        output.innerHTML += class1b.students[i][key] + ' ';
    }   
}
