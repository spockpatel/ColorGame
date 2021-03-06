var num = 6;
var colors = generateRandomColors(num);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector('#messageDisplay');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click',function(){
    easyBtn.classList.add ('selected');
    hardBtn.classList.remove ('selected');
    num=3;
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = 'none';
        }
    }
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "#232323";
    resetButton.textContent = "New color";
});
hardBtn.addEventListener('click',function(){
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    num=6;
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
        
    }
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "#232323";
    resetButton.textContent = "New color";
});

resetButton.addEventListener('click',function(){
     colors = generateRandomColors(num);
     pickedColor = pickColor();
     colorDisplay.textContent = pickedColor;
     for(var i = 0;i<squares.length;i++)
    {
    squares[i].style.backgroundColor = colors[i];
    }
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "#232323";
    resetButton.textContent = "New color";
});

colorDisplay.textContent = pickedColor;


for(var i = 0;i<squares.length;i++)
{

    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play Again?";
        }
        else{
            messageDisplay.textContent = "Try again!";
            this.style.backgroundColor = "#232323";
        }
    });
}

function changeColors(color){
    for(var i = 0 ;i<colors.length;i++)
    {
        squares[i].style.backgroundColor = color;
    }   
}


function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num)
{
    var arr = [];

    for(var i=0;i<num;i++)
    {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);

    return  "rgb(" + r + ", " + g +", "+ b + ")";
}