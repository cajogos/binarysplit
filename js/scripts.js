var MIN, MAX, GUESS,
    playBox, restartBtn, minValueInput, maxValueInput,
    guessDiv, arrowUp, arrowDown;

window.onload = function ()
{
    start();

    playBox = document.getElementById('play-box');
    restartBtn = document.getElementById('restart-btn');
    minValueInput = document.getElementById('min-value');
    maxValueInput = document.getElementById('max-value');
    guessDiv = document.getElementById('guess-div');
    arrowUp = document.getElementById('arrow-up');
    arrowDown = document.getElementById('arrow-down');

    guessDiv.innerHTML = GUESS;

    restartBtn.onclick = function ()
    {
        reStart()
    };

    /**
     * @param {KeyboardEvent} e
     */
    document.body.onkeydown = function (e)
    {
        switch (e.keyCode)
        {
            case 38: // UP ARROW
                MIN = GUESS;
                fixGuess();
                break;
            case 40: // DOWN ARROW
                MAX = GUESS;
                fixGuess();
                break;
            case 13: // RETURN KEY
                alert('I WIN!');
                playBox.style.borderColor = 'green';
                playBox.style.background = 'limegreen';
                playBox.style.color = 'white';
                break;
            case 32: // SPACE KEY
                reStart();
                break;
        }
    };
};

function start()
{
    MIN = 0;
    MAX = 1000;
    fixGuess();

    MAX = MAX + 1;
}

function reStart()
{
    playBox.style.borderColor = 'black';
    playBox.style.background = 'white';
    playBox.style.color = 'black';

    var minInput = parseInt(minValueInput.value, 10);
    var maxInput = parseInt(maxValueInput.value, 10);

    MIN = (!isNaN(minInput)) ? minInput : 0;
    MAX = (!isNaN(maxInput)) ? maxInput : 1000;

    minValueInput.value = MIN;
    maxValueInput.value = MAX;

    fixGuess();
}

function fixGuess()
{
    console.log(MIN, MAX, GUESS); // TODO: Remove

    GUESS = parseInt((MAX + MIN) / 2, 10);
    if (guessDiv !== undefined)
    {
        guessDiv.innerHTML = GUESS;
    }
}