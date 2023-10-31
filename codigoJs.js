let showResultWin;
let showResultLose;
let selectRival = 0;
let selectRivalC;
let plyOption;
let plyOptionC;
let scoreP = 0;
let scoreC = 0;
let player = "";
let scoreWindow = document.getElementById("rP");
let playerWinsCount =0;
let compWinsCount = 0;
let empate="";
let opt1 = "", opt2 = "", opt3 = "", opt4 = "", opt5 = "";

/*unir botones con las 5 diferentess elecciones y que al hacerlo cambie a 
la imagen correspondiente e inicie las funciones que permiten a la máquina 
jugar y calcular el resultado.
*/

function plySelect(resultado) {

    selectRival = rivalPlay();

    switch (resultado) {
        case 1: plyOption = 1; matchResult(1, selectRival); document.getElementById("imgPlayerSel").src = "img/rock.png"; break;
        case 2: plyOption = 2; matchResult(2, selectRival); document.getElementById("imgPlayerSel").src = "img/paper.png"; break;
        case 3: plyOption = 3; matchResult(3, selectRival); document.getElementById("imgPlayerSel").src = "img/scissors.png"; break;
        case 4: plyOption = 4; matchResult(4, selectRival); document.getElementById("imgPlayerSel").src = "img/lizard.png"; break;
        case 5: plyOption = 5; matchResult(5, selectRival); document.getElementById("imgPlayerSel").src = "img/spock.png"; break;
    }
}

/*elección aleatoria de la máquina entre las 5 opciones posibles y cambio 
a la imagen correspondiente.
*/

function rivalPlay(selectRival) {
    imgRivalSel = document.getElementById('imgRivalSel');
    randomRival = Math.floor(Math.random() * (5-1 + 1)+1);
    selectRival = randomRival;
    switch (selectRival){
        case 1: 
            imgRivalSel.src = "img/rock.png";
            break;
        case 2:
            imgRivalSel.src = "img/paper.png";
            break;
        case 3: 
            imgRivalSel.src = "img/scissors.png";
            break;
        case 4:
            imgRivalSel.src = "img/lizard.png";
            break;
        case 5:
            imgRivalSel.src = "img/spock.png";
            break;
        }
    return selectRival;
    }

/*resuelve el enfrentamiento en cada selección según los valores asignados 
a cada opción.
*/
function matchResult(plyOptionC, selectRival){
    switch (plyOptionC){
    case 1:
        if ((selectRival!== 5) && (selectRival!== 2)){
            ++scoreP;
            document.getElementById("victoria").innerHTML = "¡Has ganado!";
            showPoints(scoreP, scoreC);
            break;

        }else {

            ++scoreC;
            document.getElementById("rP").innerHTML = "Has perdido...";
            showPoints(scoreP, scoreC);
            break;
        }

    case 2:
        if ((selectRival!== 3) && (selectRival!== 4)){

            ++scoreP;
            document.getElementById("victoria").innerHTML = "¡Has ganado!";
            showPoints(scoreP, scoreC);
            break;

        }else {

            ++scoreC;
            document.getElementById("victoria").innerHTML = "Has perdido...";
            showPoints(scoreP, scoreC);
            break;
        }break;

    case 3:
        if ((selectRival!== 1) && (selectRival!== 5)){

            ++scoreP;
            document.getElementById("victoria").innerHTML = "¡Has ganado!";
            showPoints(scoreP, scoreC);
            break;

        }else {

            ++scoreC;
            document.getElementById("victoria").innerHTML = "Has perdido...";
            showPoints(scoreP, scoreC);
            break;
        }break;

    case 4:
        if ((selectRival!== 1) && (selectRival!== 3)){

            ++scoreP;
            document.getElementById("victoria").innerHTML ="¡Has ganado!";
            showPoints(scoreP, scoreC);
            break;

        }else {

            ++scoreC;
            document.getElementById("victoria").innerHTML = "Has perdido...";
            showPoints(scoreP, scoreC);
            break;
        }break;

    case 5:
        if ((selectRival!== 4) && (selectRival!== 2)){

            ++scoreP;
            document.getElementById("victoria").innerHTML = "¡Has ganado!";
            showPoints(scoreP, scoreC);
            break;

        }else {

            ++scoreC;
            document.getElementById("victoria").innerHTML = "Has perdido...";
            showPoints(scoreP, scoreC);
            break;
        }break;
        default:
            if(plyOptionC === selectRival); 
                showPoints(scoreP, scoreC);
        break;
    }
}

function showPoints (scoreP, scoreC){
    scoreP = scoreP;
    scoreC = scoreC;

    document.getElementById("rP").innerHTML = player + ": " + scoreP;
    document.getElementById("rC").innerHTML = "Rival: " + scoreC;    
}

function tryagain() {
    scoreP = 0;
    scoreC = 0;
    alert("¡Prepárate para una nueva partida!");
    player = prompt("¿Cuál es tu nombre?")
    while (player === "") {
        player = prompt("Pon tu nombre, maleducado")
    }
    document.getElementById("rP").innerHTML = player + ": " + scoreP;
    document.getElementById("rC").innerHTML = "Rival: " + scoreC; 
    document.getElementById("victoria").innerHTML = "Quién ganará..."
}

window.onload = function () {
    r = confirm("¿Te apetece una partida?");
    player = prompt("¿Cuál es tu nombre")
    while (player === "") {
        player = prompt("Pon tu nombre, maleducado")
    }
    document.getElementById("rP").innerHTML = player + ": " + scoreP;
    if (r == false ){
        window.close();
    }
} 

	

    



