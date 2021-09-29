//Declaration and initailisation of variables
var w = window.innerWidth;
var h = window.innerHeight;
var titImg;
var titImgWidth;
var container;
var containerWidth;
var containerHeight;
var value;
//Check if device is mobile , iPad or Desktop and set sizes accordingly
function checkDevice(){
    container = document.querySelector('div.logo-container');
    containerWidth = container.offsetWidth;
    containerHeight = container.offsetHeight;
    titImg = document.querySelector('div.logo');
    titImgWidth = titImg.offsetWidth;
    titImgHeight = titImg.offsetHeight;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        //NO CODE YET
    }
    else{
        $("div.logo").css("margin-left",(( 0.5 * containerWidth ) - ( 0.5 * titImgWidth))+"px");
    }
}
function setSizes(){
    w = window.innerWidth;
    h = window.innerHeight;
    checkDevice();
}
setSizes();
window.addEventListener("resize", setSizes);

var opt1 = document.querySelector('div.optA');
document.body.addEventListener('click', function (event) {
    if (opt1.contains(event.target)) {
        $("div.optA").css("border-color","#ff9c1c");
    } else {
        $("div.optA").css("border-color","gray");
    }
});

var opt2 = document.querySelector('div.optB');
document.body.addEventListener('click', function (event) {
    if (opt2.contains(event.target)) {
        $("div.optB").css("border-color","#ff9c1c");
    } else {
        $("div.optB").css("border-color","gray");
    }
});

var optA = document.querySelector('select.optA');
document.body.addEventListener('click', function (event) {
    if (optA.contains(event.target)) {
            checkOpt();
    }
});

var optB = document.querySelector('#autocomplete');
document.body.addEventListener('click', function (event) {
    if (optB.contains(event.target)) {
        document.onkeypress = function(e) {
                checkOpt();
        };
        document.body.onkeyup = function(e){
            checkOpt();
        };
    } 
});
function checkOpt(){
    value = optA.options[optA.selectedIndex].value;
    length = document.getElementById('autocomplete').value.length;
    if(( value === "single" | value === "three" ) && ( length > 0 )){
        $("div.btn-next-Container").css("opacity","1.0");
    }
    else{
         $("div.btn-next-Container").css("opacity","0.7");
    }
}
//Verify all the information required is filled
function verifyAction(event){
    opaq = document.querySelector("div.btn-next-Container").style.opacity;
    if(opaq < 1.0){
        event.preventDefault();
    }
    else{
        //Do nothing
    }
}