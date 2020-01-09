//When start button is clicked, runs this function.
function start() {
    generateLastStep();
    info.innerHTML = 'Watch the sequence!';
    timeout = setTimeout(simonSays, 2000);
}

//Adds a random variable from 0-5 into an array called 'stepList'
function generateLastStep() {
    stepList.push(rand(0, 5));
}

//Plays a sound based on what button has been clicked.
function playSound(id) {
    sounds[id].play();
}

//An array storing sounds that are called based off the id variable.
var sounds = [
    new Audio('Sounds/simonSound1.mp3'),
    new Audio('Sounds/simonSound2.mp3'),
    new Audio('Sounds/simonSound3.mp3'),
    new Audio('Sounds/simonSound4.mp3'),
    new Audio('Sounds/simonSound1.mp3'),
    new Audio('Sounds/simonSound2.mp3')
];

//Declaration of variables
var fields = document.querySelectorAll('.field');
var info = document.querySelector('#info');
var startButton = document.querySelector('#start');
var resetButton = document.querySelector('#reset');
var inputEnabled = false;
var stepList = [];
var currentStep = 0;
var timeout;

//A for loop that runs 6 times because there are 6 fields.
for(var i=0; i<fields.length; i++) {
    const val = i;
    fields[i].onclick = function() { //This function runs when a field is clicked.
        if(!inputEnabled) return;
        playSound(val);
        if(val === stepList[currentStep]) {
            if(currentStep+1 === stepList.length) {
                inputEnabled = false;
                if(stepList.length < 5) {
                    generateLastStep();
                    AllLightsOFF();
                    info.innerHTML = "Well done!";
                    timeout = setTimeout(simonSays, 2000);
                    currentStep = 0;
                }
                else {
                    info.innerHTML = "Congratulations! You won!";
                    timeout = setTimeout(reset, 2000);
                    AllLightsCorrect();
                }
            }
            else {
                currentStep++;
            }
        }
        else {
            AllLightsWRONG();
            info.innerHTML = "Wrong!Try Again.";
            inputEnabled = false;
            setTimeout(function() {
                    currentStep = 0;
                    inputEnabled = false;
                    info.innerHTML = "Watch the sequence!";
                    timeout = setTimeout(simonSays, 2000);

            }, 2000);

        }
    }
}

//Resets variables.
function reset() {
    AllLightsOFF();
    startButton.disabled = false;
    stepList = [];
    currentStep = 0;
    inputEnabled = false;
    clearTimeout(timeout);
    info.innerHTML = "Welcome to Simon Game!";
}

//Displays what step you are currently on.
function simonSays() {
    if(currentStep > stepList.length-1) {
        currentStep = 0;
        info.innerHTML = stepList.length+' steps';
        inputEnabled = true;
        return;
    }

    var id = stepList[currentStep];
    playSound(id);
    fields[id].className += ' active';
    setTimeout(function() {
        fields[id].className = fields[id].className.replace(' active', '');
        currentStep++;
        setTimeout(function () {
        },);
        if(id===0){
            $.ajax({
                url: "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/" + 1 + "/state/",
                type: "PUT",
                data: JSON.stringify({"on": true, "bri": 254, "hue": one}),
            });
        }
        else if(id===1) {
            $.ajax({
                url: "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/" + 4 + "/state/",
                type: "PUT",
                data: JSON.stringify({"on": true, "bri": 254, "hue": four}),
            });
        }
        if(id===2){
            $.ajax({
                url: "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/" + 2 + "/state/",
                type: "PUT",
                data: JSON.stringify({"on": true, "bri": 254, "hue": two}),
            });
        }
        else if(id===3) {
            $.ajax({
                url: "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/" + 5 + "/state/",
                type: "PUT",
                data: JSON.stringify({"on": true, "bri": 254, "hue": five}),
            });
        }
        if(id===4){
            $.ajax({
                url: "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/" + 3 + "/state/",
                type: "PUT",
                data: JSON.stringify({"on": true, "bri": 254, "hue": three}),
            });
        }
        else if(id===5) {
            $.ajax({
                url: "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/" + 6 + "/state/",
                type: "PUT",
                data: JSON.stringify({"on": true, "bri": 254, "hue": six}),
            });
        }

        timeout = setTimeout(simonSays, 0.3*1000); // give time for transition to finish

    }, 0.6*1000);

    info.innerHTML = "Watch the sequence!";
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var lightState;

function getLightURI(element)
{
    var IP = "http://192.168.0.50/api/";
    var username = "stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz";
    var lights = "/lights/";
    var URI = IP + username + lights;
    return URI + element.attr("id")+"/";
}

function togglelight(element)
{
    var getState = $.getJSON(getLightURI(element), function (data)
    {
        var state = data["state"]["on"];
        if (state)
        {
            state = false;
        }
        else
        {
            state = true;
        }

        lightState = {"on" : state};

        $.ajax({
            url: getLightURI(element) + "state/",
            type: "PUT",
            data: JSON.stringify(lightState)
        })
    });
}

$(document).ready(function()
{

});

function AllLightsOFF() {
    for (i=1;i<=7;i++){
        $.ajax({
            url:"http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/"+i+"/state/",
            type: "PUT",
            data: JSON.stringify({"on":false}),
        });
    }
}
function AllLightsCorrect() {
    for (i = 1; i <= 7; i++) {
        $.ajax({
            url: "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/" + i + "/state/",
            type: "PUT",
            data: JSON.stringify({"on": true, "bri": 254, "hue": 25500}),
        });
    }
}
function AllLightsWRONG() {
    for (i = 1; i <= 7; i++) {
        $.ajax({
            url: "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/" + i + "/state/",
            type: "PUT",
            data: JSON.stringify({"on": true, "bri": 254, "hue": 65535}),
        });
    }
}

var one=65535;
var four=46920;
var two=12750;
var five=25500;
var three=5655;
var six=56000;
