var canvas;
var context;
var Val_max;
var Val_min;
var sections;
var xScale;
var yScale;
// Values for the Data Plot, they can also be obtained from an external file
var Diastolic = [100, 92, 95, 90, 100, 97, 103, 96, 87, 91, 93, 88, 85, 91, 86, 84, 81, 76, 79, 83, 85, 73, 74, 70, 68, 71, 65, 64, 61, 58, 65];
var Systolic = [170, 167, 163, 159, 164, 162, 160, 157, 160, 156, 153, 152, 145, 152, 156, 158, 154, 151, 146, 142, 145, 141, 139, 141, 138, 140, 142, 139, 144, 141, 138];
var Glucose = [90, 95, 97, 87, 84, 86, 83, 81, 85, 80, 78, 75, 73, 76, 74, 72, 70, 73, 74, 70, 69, 67, 70, 72, 74, 76, 77, 79, 82, 84, 81];
var PulseOx = [110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 44, 42, 41, 42, 46, 49, 44, 42, 41, 40, 42, 43, 42, 45, 47, 50, 52];
var wellBeing = [110, 113, 109, 107, 105, 106, 103, 96, 95, 92, 93, 91, 89, 93, 96, 95, 97, 99, 102, 101, 105, 104, 106, 105, 102, 100, 99, 101, 103, 105, 104];

    function init() {
        // set these values for your data 
        sections = 30;
        Val_max = 220;
        Val_min = 40;
        var stepSize = 20;
        var columnSize = 50;
        var rowSize = 50;
        var margin = 10;
        var xAxis = [" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];


        canvas = document.getElementById("canvas");
        context = canvas.getContext("2d");
        context.fillStyle = "#FF0000"
         context.font = "24px Verdana"

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
            plotData(Diastolic);
            context.strokeStyle = "#0FF000";
            plotData(Systolic);
            context.strokeStyle = "#FF00FF";
            plotData(Glucose);
            context.strokeStyle = "#0FF0FF";
            plotData(PulseOx);
            context.strokeStyle = "#FFFFFF";
            plotData(wellBeing);
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

    if (company === "Diastolic") {
        Diastolic[monthIndex] = profit;
        context.strokeStyle = "#FF0066";
        plotData(Diastolic);
    }  else if (company === "Systolic") {
        Systolic[monthIndex] = profit;
        context.strokeStyle = "#0FF000";
        plotData(Systolic);
    } else {
        console.log("Something went wrong with company update");
    }

}