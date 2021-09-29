//Declaration and initailisation of variables
var w = window.innerWidth;
var h = window.innerHeight;
var titImg;
var titImgWidth;
var container;
var containerWidth;
var containerHeight;
var optA;
var optB;
var opaq;
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

optA = document.querySelector('#opt1');
document.body.addEventListener('click', function (event) {
    if (optA.contains(event.target)) {
        document.getElementById("opt2").checked = false;
        if (document.getElementById('opt1').checked) {
            $("div.btn-next-Container").css("opacity","1.0");
        } else {
            $("div.btn-next-Container").css("opacity","0.7");
        }
    } 
});

optB = document.querySelector('#opt2');
document.body.addEventListener('click', function (event) {
    if (optB.contains(event.target)) {
        document.getElementById("opt1").checked = false;
        if (document.getElementById('opt2').checked) {
            $("div.btn-next-Container").css("opacity","1.0");
        } else {
            $("div.btn-next-Container").css("opacity","0.7");
        }
    } 
});
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