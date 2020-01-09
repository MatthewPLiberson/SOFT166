
function start() {

    $.ajax({
        url:"http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/1/state/",
        type: "PUT",
        data: JSON.stringify({"on":true,"bri":254,"hue":one}),
    });

    $.ajax({
        url:"http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/4/state/",
        type: "PUT",
        data: JSON.stringify({"on":true,"bri":254,"hue":four}),
    });

    $.ajax({
        url:"http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/2/state/",
        type: "PUT",
        data: JSON.stringify({"on":true,"bri":254,"hue":two}),
    });

    $.ajax({
        url:"http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/5/state/",
        type: "PUT",
        data: JSON.stringify({"on":true,"bri":254,"hue":five}),
    });

    $.ajax({
        url:"http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/3/state/",
        type: "PUT",
        data: JSON.stringify({"on":true,"bri":254,"hue":three}),
    });
    
    $.ajax({
        url:"http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/6/state/",
        type: "PUT",
        data: JSON.stringify({"on":true,"bri":254,"hue":six}),
    });


}
function reset() {
    AllLightsOFF();
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
    redLight();
    blueLight();
    yellowLight();
    greenLight();
    brownLight();
    purpleLight();
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
function AllLightsON() {
    for (i=1;i<=7;i++){

        $.ajax({
            url: "http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/" + i + "/state/",
            type: "PUT",
            data: JSON.stringify({"on": true, "hue": one}),

        });
    }
}
function redLight() {
    $('#1').click(function () {
        togglelight($(this));
        $.ajax({
            url:"http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/1/state/",
            type: "PUT",
            data: JSON.stringify({"on":true,"bri":254,"hue":one}),
        });
    })
}

function blueLight() {
    $('#4').click(function () {
        togglelight($(this));
        $.ajax({
            url:"http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/4/state/",
            type: "PUT",
            data: JSON.stringify({"on":true,"bri":254,"hue":four}),
        });
    })
}

function yellowLight() {
    $('#2').click(function () {
        togglelight($(this));
        $.ajax({
            url:"http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/2/state/",
            type: "PUT",
            data: JSON.stringify({"on":true,"bri":254,"hue":two}),
        });
    })
}

function greenLight() {
    $('#5').click(function () {
        togglelight($(this));
        $.ajax({
            url:"http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/5/state/",
            type: "PUT",
            data: JSON.stringify({"on":true,"bri":254,"hue":five}),
        });
    })
}

function brownLight() {
    $('#3').click(function () {
        togglelight($(this));
        $.ajax({
            url:"http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/3/state/",
            type: "PUT",
            data: JSON.stringify({"on":true,"bri":254,"hue":three}),
        });
    })
}

function purpleLight() {
    $('#6').click(function () {
        togglelight($(this));
        $.ajax({
            url:"http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/6/state/",
            type: "PUT",
            data: JSON.stringify({"on":true,"bri":254,"hue":six}),
        });
    })
}
