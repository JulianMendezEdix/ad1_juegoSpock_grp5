
// Definition of variables

let plyNum = 0;
let plyName = '';
let plyOption = 0;
let imgSel;
let imgComSel;
let comWins = 0;
let plyWins = 0;
let result;

/* OPTIONS CODE:
*  0 = Rock    1 = Paper    3 = Scissors     7 = Lizard     20 = Spock
*/

document.addEventListener('DOMContentLoaded', ()=> {

    option();

});

/**
 * Function Aleathory option from Computer
 * @returns comOption - int number 
 */
function comPlay () {
    imgComSel = document.getElementById('imgComSel');
    const numbers = [0, 1, 3, 7, 20];
    randomIndex = Math.floor(Math.random() * numbers.length);
    comOption = numbers[randomIndex];
    switch (comOption){
        case 0: 
            imgComSel.src = "img/rock.png";
            break;
        case 1:
            imgComSel.src = "img/paper.png";
            break;
        case 3: 
            imgComSel.src = "img/scissors.png";
            break;
        case 7:
            imgComSel.src = "img/lizard.png";
            break;
        case 20:
            imgComSel.src = "img/spock.png";
            break;
    }
    return(comOption);
    };

/**
 * Select the option to play and starts the play and comPlay functions.
 * 
 */
function option () {
    imgSel = document.getElementById('imgSel');
    opt0 = document.getElementById('opt0');
    opt0.addEventListener('click', ()=> { 
            plyOption = 0;
            imgSel.src = "img/rock.png";
            console.log(play(plyOption,comPlay()));

    })

    opt1 = document.getElementById('opt1');
    opt1.addEventListener('click', ()=> { 
            plyOption = 1;
            imgSel.src = "img/paper.png";
            console.log(play(plyOption,comPlay()));
    })

    opt3 = document.getElementById('opt3');
    opt3.addEventListener('click', ()=> { 
            plyOption = 3;
            imgSel.src = "img/scissors.png";
            console.log(play(plyOption,comPlay()));
    })

    opt7 = document.getElementById('opt7');
    opt7.addEventListener('click', ()=> { 
            plyOption = 7;
            imgSel.src = "img/lizard.png";
            console.log(play(plyOption,comPlay()));
    })

    opt20 = document.getElementById('opt20');
    opt20.addEventListener('click', ()=> { 
            plyOption = 20;
            imgSel.src = "img/spock.png";
            console.log(play(plyOption,comPlay()));
    })

};


/** 
 * Play algorithm. 
 * We have thougth in all possible cases, and then, we  have reduced 
 * cases by uniting "player 1 wins" in the default case. (And then we could quit all
 * the return(2) in every case and do a multiple case)
 * @param plyOption - Player Option
 * @param comOption - Computer Otion
 * @returns - Player Number who wins (or 0 if TIE)
*/
function play (plyOption, comOption) {

    result = plyOption - comOption;
    switch (result) {
        case 0:
            return(0);
        case -1:
        /*case 1:
            console.log('Player 1 wins');
            break;*/
        /*case -3:
            console.log('Player 1 wins');
            break;*/
        case 2:
        /*case -7:
            console.log('Player 1 wins');
            break;*/
        case 7:            
        case -20:                            
        /*case 20:
            console.log('Player 1 wins');
            break;*/
        case -2:        
        /*case 2:
            console.log('Player 1 wins');
            break;*/
        case -6:
        /*case 6:
            console.log('Player 1 wins');
            break;*/
        /*case -19:
            console.log('Player 1 wins');
            break;*/
        case 19:
        /*case -4:
            console.log('Player 1 wins');
            break;*/
        case 4:
        case -17:
        /*case 17:
            console.log('Player 1 wins');
            break;*/
        /*case -13:
            console.log('Player 1 wins');
            break;*/
        case 13:
            comWins++;
            setResult(plyWins, comWins);
            return(2);
        default:
            plyWins++;
            setResult(plyWins, comWins);
            return(1);
    }
};

function setResult (plyWins, comWins) {

    result = document.getElementById('result');
    result.textContent = plyWins + " - " + comWins;
}

