/* Variables de los divs */
let speech = document.querySelector('#speech');
let country = document.querySelector('#country');
let discutir = document.querySelector('#discutir');
let friendship = document.querySelector('#friendship');
let protagónico = document.querySelector('#protagónico');
let analisis = document.querySelector('#analisis');

/* Variable para los personajes */
let shark = 0;
let ghost = 0;
let wiki = 0;
let tinder = 0;

let divShark;
let divWiki;
let divGhost;
let divTinder;
let result = document.querySelector('.Delegate');

/* Pregunta 1 */
let button1 = document.querySelector('.question1');
button1.onclick = function(){
    let answer1 = document.querySelector('input[name="speech"]:checked').value;
    console.log(answer1);
    if (answer1 === "Genial"){
        shark = shark +5;
        wiki = wiki +3;
        tinder = tinder +1;
    }else if (answer1 === "Mal"){
        ghost = ghost +5;
        tinder = tinder +3;
        wiki = wiki +1;
    }else if (answer1 === "Normal"){
        wiki = wiki +5;
        tinder = tinder +3;
        shark = shark +1;
        ghost = ghost +1;
    };
    country.style.display='block';
    speech.style.display='none';
    button1.style.display='none';
    button2.style.display='block';
}

/* Pregunta 2 */
let button2 = document.querySelector('.question2');
button2.onclick = function(){
    let answer2 = document.querySelector('input[name="country"]:checked').value;
    console.log(answer2);
    if (answer2 === "Pontecias"){
        shark = shark +5;
        wiki = wiki +3;
        tinder = tinder +1;
    }else if (answer2 === "Desarrollados"){
        ghost = ghost +5;
        shark = shark +3;
        wiki = wiki +1;
    }else if (answer2 === "Unknown"){
        wiki = wiki +5;
        ghost = ghost +3;
        shark = shark +1;
    }else if (answer2 === "Undefined"){
        tinder = tinder +5;
        ghost = ghost +3;
        shark = shark +1;
        wiki = wiki +1;
    };
    discutir.style.display='block';
    country.style.display='none';
    button2.style.display='none';
    button3.style.display='block';
}

/* Pregunta 3 */
let button3 = document.querySelector('.question3');
button3.onclick = function(){
    let answer3 = document.querySelector('input[name="discutir"]:checked').value;
    console.log(answer3);
    if (answer3 === "Positive"){
        shark = shark +5;
        wiki = wiki +3;
        tinder = tinder +1;
    }else if (answer3 === "Negative"){
        ghost = ghost +5;
        tinder = tinder +3;
        wiki = wiki +1;
    }else if (answer3 === "Undefined"){
        tinder = tinder +5;
        wiki = wiki +3;
        ghost = ghost +1;
    };
    friendship.style.display='block';
    discutir.style.display='none';
    button3.style.display='none';
    button4.style.display='block';
}

/* Pregunta 4 */
let button4 = document.querySelector('.question4');
button4.onclick = function(){
    let answer4 = document.querySelector('input[name="freindship"]:checked').value;
    console.log(answer4);
    if (answer4 === "Positive"){
        tinder = tinder +5;
        wiki = wiki +3;
        shark = shark +1;
    }else if (answer4 === "Negative"){
        ghost = ghost +5;
        wiki = wiki +3;
        shark = shark +1;
    }else if (answer4 === "Undefined"){
        shark = shark +3;
        wiki = wiki +1;
    };
    protagónico.style.display='block';
    friendship.style.display='none';
    button4.style.display='none';
    button5.style.display='block';
}

/* Análisis de personaje */
let button5 = document.querySelector('.question5');
button5.onclick = function(){
    let answer5 = document.querySelector('input[name="protagónico"]:checked').value;
    console.log(answer5);
    if (answer5 === "Positive"){
        shark = shark +5;
        tinder = tinder +3;
        wiki = wiki +1;
    }else if (answer5 === "Negative"){
        ghost = ghost +5;
        wiki = wiki +3;
        tinder = tinder +1;
    };
    analisis.style.display='block';
    let title = document.querySelector('h1');
    let container = document.querySelector('.container');
    title.style.display="none";
    container.style.boxShadow = "none";
    protagónico.style.display='none';
    button5.style.display='none';
    if (shark > ghost && shark > tinder && shark > wiki){
        result.innerHTML = "Shark";
        divShark = document.querySelector('.description_shark');
        divShark.style.display = 'block';
    }else if (wiki > ghost && wiki > tinder && wiki > shark){
        result.innerHTML = "Wiki";
        divWiki = document.querySelector('.description_wiki');
        divWiki.style.display = 'block';
    }else if (tinder > wiki && tinder > ghost && tinder > shark){
        result.innerHTML = "Tinder";
        divTinder = document.querySelector('.description_tinder');
        divTinder.style.display = 'block';
    }else if (ghost > wiki && ghost > tinder && ghost > shark){
        result.innerHTML = "Ghost";
        divGhost = document.querySelector('.description_ghost');
        divGhost.style.display = 'block';
    };    
}
