var mousePressed = false;
var lastX, lastY;
var ctx;

function InitMouseDraw() {
    
    canvas = document.getElementById('drawCanvas');
    ctx = canvas.getContext("2d");

    $('#drawCanvas').mousedown(function (e) {
        mousePressed = true;
        InitMouseDraw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
    });

    $('#drawCanvas').mousemove(function (e) {
        if(mousePressed) {
            InitMouseDraw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        };
    });

    $('#drawCanvas').mouseup(function (e) {
        mousePressed = false;
    });

    $('#drawCanvas').mouseleave(function (e) {
        mousePressed = false;
    });

    }

    function Draw(x, y, isDown) {
        if (isDown) {
            ctx.beginPath();
            ctx.strokeStyle = $('#selColor').val();
            ctx.lineWidth = $('#selWidth').val();
            ctx.lineJoin = "round";
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.closePath();
            ctx.stroke();
        
        }
        lastX = x;
        lastY = y;
    }

    function clearArea() {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }