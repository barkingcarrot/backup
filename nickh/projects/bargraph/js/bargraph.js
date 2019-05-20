var canvas;
var context;
var Val_Max;
var Val_Min;
var sections;
var xScale;
var yScale;
var y;

var itemName = ["USA", "China", "Japan", "Germany", "India", "France", "UK", "Italy", "Brazil", "Canada", "South Korea", "Russia", "Spain", "Australia", "Mexico"];
var itemValue = [18.6,11.2,4.9,3.4,2.2,2.1,2.05,1.8,1.7,1.5,1.4,1.2,1.246,1.23,1.21,1.07];

function init() {
    console.log("Hooray, i have made it inside of init :)))")
    sections = 15;
    Val_Max = 20;
    var stepSize = 2;
    var columnSize = 50;
    var rowSize = 60;
    var margin = 10;
    var header = "In Trillion $USD"

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.fillStyle = "#000";
    
    yScale = (canvas.height - columnSize - margin) / (Val_Max);
    xScale = (canvas.width - rowSize) / (sections + 1);

    context.strokeStyle = "#FF0000";
    context.beginPath();
    context.font = "30 pt Arial";
    context.fillText(header, 0, columnSize - margin);
    context.font = "30 pt Helvetica";
    var count = 0;
    for (scale = Val_Max; scale >= 0; scale = scale - stepSize) {
        y = columnSize + (yScale * count * stepSize);
        context.fillText(scale, margin, y + margin);
        context.moveTo(rowSize, y);
        context.lineTo(canvas.width, y);
        count++;
    }
    context.stroke();

    context.font = "30 pt Verdana";
    context.textBaseline = "bottom";
    for (i = 0; i < 15; i++) {
        computeHeight(itemValue[i]);
        context.fillText(itemName[i], xScale * (i + 1), y - margin);
    }
    
    context.fillStyle = "#0000FF";
    context.shadowColor = 'rgba(128,128,128, 0.5)';

    context.shadowOffsetX = 9;
    context.shadowOffsetY = 3;

    context.translate(0, canvas.height - margin);
    context.scale(xScale, -1 * yScale);

    for (i = 0; i < 15; i++) {
        context.fillRect(i + 1, 0, 0.3, itemValue[i]);
    }

}

function computeHeight(value) {
    y = canvas.height - value * yScale;
}