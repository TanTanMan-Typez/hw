var x = 0;
var y = 0;
var draw_circle = "";
var draw_rect = "";

var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening, please speak";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    var speech = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Speech has been recognised as: " + speech;

    if (speech == "circle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);

        document.getElementById("status").innerHTML = "Drawing circle";
        draw_circle = "set";
    } else if (speech == "rectangle")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);

        document.getElementById("status").innerHTML = "Drawing rectangle";
        draw_rect = "set";
    }
}

function setup()
{
    canvas = createCanvas(900, 600);
}

function draw()
{
    if (draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 50);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle has been drawn";
        draw_circle = "";
    } else if (draw_rect == "set")
    {
        width = Math.floor(Math.random() * 100);
        height = Math.floor(Math.random() * 200);
        rect(x, y, width, height);
        document.getElementById("status").innerHTML = "Rectangle has been drawn";
        draw_rect = "";
    }
}