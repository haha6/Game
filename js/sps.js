/* Start of variable declaration */
var youScore;
var roboScore;
var youResult;
var roboResult;
var youChoice;
var roboChoice;

// Selected option
var selectedRock = "optionRock";
var selectedScissor = "optionScissor";
var selectedPaper = "optionPaper";
var youSelected;
var roboSelected;

// Message
var tieMessage = "Tie.";
var youWonMessage = "You won!";
var youLostMessage = "You lost.";
var roboWonMessage = "Robo won!";
var roboLostMessage = "Robo lost.";

// Selected image
var tieRockImage = "res/image/tie_rock.jpg";
var tieScissorImage = "res/image/tie_scissor.jpg";
var tiePaperImage = "res/image/tie_paper.jpg";
var winRockImage = "res/image/win_rock.jpg";
var winScissorImage = "res/image/win_scissor.jpg";
var winPaperImage = "res/image/win_paper.jpg";
var loseRockImage = "res/image/lose_rock.jpg";
var loseScissorImage = "res/image/lose_scissor.jpg";
var losePaperImage = "res/image/lose_paper.jpg";
/* End of variable declaration */

/* Start of begin game */
$(function(){
    resetValues();    
});

$("#newGame").click(function(){
    if(confirm("Score will be reset. Do you want to start a new game?") == true)
    {
        resetValues();
    }
});

function resetValues(){
    youScore = 0;
    roboScore = 0;
    youResult = "You";
    roboResult = "Robo";
    youChoice = "";
    roboChoice = "";
    youSelected = "";
    roboSelected = "";
    $("#youScore").text(youScore);
    $("#roboScore").text(roboScore);
    $("#youResult").text(youResult);
    $("#roboResult").text(roboResult);
    $("#youChoice").attr("src", "res/image/kid.png");
    $("#roboChoice").attr("src", "res/image/robo.png");
}
/* End of begin game */

/* Start of selected option */
$(".youOption").click(function(){
    youSelectedOption(this);
    roboSelectedOption();
    
    if(youSelected == roboSelected)
    {
        tie();    
    }
    else if((youSelected == selectedRock && roboSelected == selectedScissor) || 
            (youSelected == selectedScissor && roboSelected == selectedPaper) ||
            (youSelected == selectedPaper && roboSelected == selectedRock))
    {
        youWon();
    }
    else if((youSelected == selectedRock && roboSelected == selectedPaper) ||
            (youSelected == selectedScissor && roboSelected == selectedRock) ||
            (youSelected == selectedPaper && roboSelected == selectedScissor))
    {
        youLost();
    }
});

function youSelectedOption(selectedOption)
{
    youSelected = selectedOption.id;
}

function roboSelectedOption()
{
    var num = generateRandomNumber();
    if(num == 1)
    {
        roboSelected = selectedRock;
    }
    else if (num == 2)
    {
        roboSelected = selectedScissor;
    }
    else if (num == 3)
    {
        roboSelected = selectedPaper;
    }
}

function generateRandomNumber()
{
    var num = Math.floor((Math.random() * 3) + 1);
    return num;
}
/* End of select option */

/* Start of tie */
function tie()
{
    if(youSelected == selectedRock)
    {
        tieWithRock();
    }
    else if (youSelected == selectedScissor)
    {
        tieWithScissor();
    }
    else if (youSelected == selectedPaper)
    {
        tieWithPaper();
    }
    $("#youResult").text(tieMessage);
    $("#roboResult").text(tieMessage);
}

function tieWithRock()
{
    $("#youChoice").attr("src", tieRockImage);
        $("#roboChoice").attr("src", tieRockImage);
}

function tieWithScissor()
{
    $("#youChoice").attr("src", tieScissorImage);
        $("#roboChoice").attr("src", tieScissorImage);
}

function tieWithPaper()
{
    $("#youChoice").attr("src", tiePaperImage);
    $("#roboChoice").attr("src",tiePaperImage);
}
/* End of tie */

/* Start of player win */
function youWon()
{
    if(youSelected == selectedRock)
    {
        youWonWithRock();
    }
    else if (youSelected == selectedScissor)
    {
        youWonWithScissor();
    }
    else if (youSelected == selectedPaper)
    {
        youWonWithPaper();
    }
    $("#youResult").text(youWonMessage);
    $("#roboResult").text(roboLostMessage);
    youPlusOnePoint();
}

function youWonWithRock()
{
    $("#youChoice").attr("src", winRockImage);
    $("#roboChoice").attr("src", loseScissorImage);
}

function youWonWithScissor()
{
    $("#youChoice").attr("src",winScissorImage);
    $("#roboChoice").attr("src", losePaperImage);
}

function youWonWithPaper()
{
    $("#youChoice").attr("src",winPaperImage);
    $("#roboChoice").attr("src",loseRockImage);
}
/* End of player win */

/* Start of player lost */
function youLost()
{
    if(youSelected == selectedRock)
    {
        youLostWithRock();
    }
    else if (youSelected == selectedScissor)
    {
        youLostWithScissor();
    }
    else if (youSelected == selectedPaper)
    {
        youLostWithPaper();
    }
    $("#youResult").text(youLostMessage);
    $("#roboResult").text(roboWonMessage);
    roboPlusOnePoint();
}

function youLostWithRock()
{
    $("#youChoice").attr("src", loseRockImage);
    $("#roboChoice").attr("src",winPaperImage);
}

function youLostWithScissor()
{
    $("#youChoice").attr("src",loseScissorImage);
    $("#roboChoice").attr("src",winRockImage);
}

function youLostWithPaper()
{
    $("#youChoice").attr("src",losePaperImage);
    $("#roboChoice").attr("src",winScissorImage);
}
/* End of player lost */

/* Start of score calculation */
function youPlusOnePoint()
{
    youScore = youScore + 1;
    $("#youScore").text(youScore);
}

function roboPlusOnePoint()
{
    roboScore = roboScore + 1;
    $("#roboScore").text(roboScore);    
}
/* End of score calculation */
