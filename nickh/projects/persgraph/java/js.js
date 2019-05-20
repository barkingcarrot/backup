var canvas;
var context;
var Val_max;
var Val_min;
var sections;
var xScale;
var yScale;
// Values for the Data Plot, they can also be obtained from an external file
var English = [100, 99, 95, 96, 92, 93, 100, 95, 89, 86];
var Science = [100, 91, 85, 82, 79, 83, 100, 99, 94, 90];
var Math = [100, 94, 87, 84, 80, 86, 100, 97, 94, 90];

    function init() {
        // set these values for your data 
        sections = 10;
        Val_max = 100;
        Val_min = 0;
        var stepSize = 10;
        var columnSize = 50;
        var rowSize = 50;
        var margin = 10;
        var xAxis = [" ", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May"];


        canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");
        context.fillStyle = "#FF0000"
         context.font = "30px Verdana"

        yScale = (canvas.height - columnSize - margin) / (Val_max - Val_min);
        xScale = (canvas.width - rowSize) / sections;

         context.strokeStyle = "#0000FF"; // color of grid lines
            context.beginPath();
            // print Parameters on X axis, and grid lines on the graph
            for (i = 1; i <= sections; i++) {
                var x = i * xScale;
                context.fillText(xAxis[i], x, columnSize - margin);
                context.moveTo(x, columnSize);
                context.lineTo(x, canvas.height - margin);
            }
            // print row header and draw horizontal grid lines
            var count = 0;
            for (scale = Val_max; scale >= Val_min; scale = scale - stepSize) {
                var y = columnSize + (yScale * count * stepSize);
                context.fillText(scale, margin, y + margin);
                context.moveTo(rowSize, y)
                context.lineTo(canvas.width, y)
                count++;
            }
            context.stroke();

            context.translate(rowSize, canvas.height + Val_min * yScale);
            context.scale(1, -1 * yScale);

            // Color of each dataplot items

            context.strokeStyle = "#FF0066";
            plotData(English);
            context.strokeStyle = "#9933FF";
            plotData(Science);
            context.strokeStyle = "#000";
            plotData(Math);
        }

        function plotData(dataSet) {
            context.beginPath();
            context.moveTo(0, dataSet[0]);
            for (i = 1; i < sections; i++) {
                context.lineTo(i * xScale, dataSet[i]);
            }
            context.stroke();
        }

function update() {
    console.log("Hooray my buttons works");
    var company = document.querySelector("#company").value;
    console.log("I read the company as: ", company);
    var month = document.querySelector("#month").value;
    console.log("I read the month as: ", month);
    var profit = parseFloat(document.querySelector("#profit").value);
    console.log("I read the profit as: ", profit);


    var monthIndex;
    if (month === "Jan") {
        monthIndex = 0;
    } else if (month === "Feb") {
        monthIndex = 1;
    } else if (month === "Mar") {
        monthIndex = 2;
    } else if (month === "Apr") {
        monthIndex = 3;
    } else if (month === "May") {
        monthIndex = 4;
    } else if (month === "Jun") {
        monthIndex = 5;
    } else if (month === "Jul") {
        monthIndex = 6;
    } else if (month === "Aug") {
        monthIndex = 7;
    } else if (month === "Sept") {
        monthIndex = 8;
    } else if (month === "Oct") {
        monthIndex = 9;
    } else if (month === "Nov") {
        monthIndex = 10;
    } else if (month === "Dec") {
        monthIndex = 11;
    } else {
        console.log("Something went wrong in my month conditional");
    }
    console.log("Month Index: ", monthIndex);

    if (company === "English") {
        English[monthIndex] = profit;
        context.strokeStyle = "#FF0066";
        plotData(English);
    } else if (company === "Science") {
        Science[monthIndex] = profit;
        context.strokeStyle = "#9933FF";
        plotData(Science);
    } else if (company === "Math") {
        Math[monthIndex] = profit;
        context.strokeStyle = "#000";
        plotData(Math);
    } else {
        console.log("Something went wrong with company update");
    }

}