var w = window.innerWidth;
var h = window.innerHeight;
var screenWidth = window.screen.width;
var titImg;
var titImgWidth;
var instructionText;
var instructionTextWidth;
var calc;
var calcWidth;
$("html").css("width",w+"px");
$("html").css("height",h+"px");
$("body").css("width",w+"px");
$("body").css("height",h+"px");
//Check if device is mobile , iPad or Desktop and set sizes accordingly
function checkDevice(){
    if(w<=(0.3*screenWidth)){
        // $("div.instruction-text").css("margin-top","10vh");
        $("button.calc").css("margin-top","35vh");
        $("div.calc-Container").css("width","80vw");
        $("div.calc-Container").css("height","40px");
        $("button.calc").css("width","80vw");
        $("button.calc").css("height","40px");
    }
    else if(w>=(0.3*screenWidth) && w<(0.7*screenWidth)){
        // $("div.instruction-text").css("margin-top","15vh");
        $("button.calc").css("margin-top","30vh");
        $("div.calc-Container").css("width","30vw");
        $("div.calc-Container").css("height","50px");
        $("button.calc").css("width","30vw");
        $("button.calc").css("height","50px");
    }
    else if(w>=(0.7*screenWidth)){
        // $("div.instruction-text").css("margin-top","25vh");
        $("button.calc").css("margin-top","10vh");
        $("div.calc-Container").css("width","20vw");
        $("div.calc-Container").css("height","60px");
        $("button.calc").css("width","20vw");
        $("button.calc").css("height","60px");
    }
    else{}
    titImg = document.querySelector('div.logo');
    titImgWidth = titImg.offsetWidth;
    instructionText = document.querySelector('div.instruction-text');
    instructionTextWidth = instructionText.offsetWidth;
    calc = document.querySelector('button.calc');
    calcWidth = calc.offsetWidth;
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        //NO CODE YET
    }
    else{
        // $("div.logo").css("margin-left",(( 0.5 * w ) - ( 0.5 * titImgWidth))+"px");
        // $("div.instruction-text").css("margin-left",(( 0.5 * w ) - ( 0.5 * instructionTextWidth))+"px");
        // $("div.calc-Container").css("margin-left",(( 0.5 * w ) - ( 0.5 * calcWidth))+"px");
    }
}
function setSizes(){
    w = window.innerWidth;
    h = window.innerHeight;
    $("html").css("width",w+"px");
    $("html").css("height",h+"px");
    $("body").css("width",w+"px");
    $("body").css("height",h+"px");
    checkDevice();
}
setSizes();
window.addEventListener("resize", setSizes);