function car_down () {
    var x = 0;
    var x = document.getElementById("car").offsetTop;
    var xn = x + 50;
    document.getElementById("car").style.top = xn+"px";

}
function car_up () {
    var x = 0;
    var x = document.getElementById("car").offsetTop;
    var xn = x - 50;
    document.getElementById("car").style.top = xn+"px"
}
function car_left () {
    var x = 0;
    var x = document.getElementById("car").offsetLeft;
    var xn = x - 50;
    document.getElementById("car").style.left = xn+"px"
}
function car_right () {
    var x = 0;
    var x = document.getElementById("car").offsetLeft;
    var xn = x + 50;
    document.getElementById("car").style.left = xn+"px"
}

var x = document.getElementById("car");
x.addEventListener("click", car_down, false);
