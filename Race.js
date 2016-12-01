function car_down () {x = 0;
    x = document.getElementById("car").offsetTop;
    xn = x + 50;
    document.getElementById("car").style.top = xn+"px"
}
function car_up () {
    x = 0;
    x = document.getElementById("car").offsetTop;
    xn = x - 50;
    document.getElementById("car").style.top = xn+"px"
}
function car_left () {
    x = 0;
    x = document.getElementById("car").offsetLeft;
    xn = x - 50;
    document.getElementById("car").style.left = xn+"px"
}
function car_right () {
    x = 0;
    x = document.getElementById("car").offsetLeft;
    xn = x + 50;
    document.getElementById("car").style.left = xn+"px"
}