var optA;
var optB;
var opaq;
var solutiontype;
//Solution type..............................................................
optA = document.querySelector('#opt1');
document.body.addEventListener('click', function (event) {
    if (optA.contains(event.target)) {
        localStorage.setItem('solutiontype', 'solar');
        document.getElementById("opt2").checked = false;
        if (document.getElementById('opt1').checked) {
            $("button.calc-Container").css("opacity","1.0");
        } else {
            $("button.calc-Container").css("opacity","0.7");
        }
    } 
});

optB = document.querySelector('#opt2');
document.body.addEventListener('click', function (event) {
    if (optB.contains(event.target)) {
        localStorage.setItem('solutiontype', 'battery');
        document.getElementById("opt1").checked = false;
        if (document.getElementById('opt2').checked) {
            $("button.calc-Container").css("opacity","1.0");
        } else {
            $("button.calc-Container").css("opacity","0.7");
        }
    } 
});
//Info.........................................................................


var opt1 = document.querySelector('select.optA');
document.body.addEventListener('click', function (event) {
    if (optA.contains(event.target)) {
            checkOpt();
    }
});

var opt2 = document.querySelector('#autocomplete');
document.body.addEventListener('click', function (event) {
    if (opt2.contains(event.target)) {
        document.onkeypress = function(e) {
            checkOpt();
        };
        document.body.onkeyup = function(e){
            checkOpt();
        };
    } 
});
function checkOpt(){
    value = opt1.options[opt1.selectedIndex].value;
    length = document.getElementById('autocomplete').value.length;
    if(( value === "single" | value === "three" ) && ( length > 0 )){
        $("button.calc-Container").css("opacity","1.0");
    }
    else{
         $("button.calc-Container").css("opacity","0.7");
    }
}
//Verify all the information required is filled.................................................
function verifyAction(event){
    opaq = document.querySelector("button.calc-Container").style.opacity;
    if(opaq < 1.0){
        event.preventDefault();
    }
    else{
        //Do nothing
    }
    //info...........................................................
    if(document.location.pathname === "/info.html"){
        solutiontype = localStorage.getItem('solutiontype');
        if(solutiontype === "solar"){
            document.getElementById("info").action = "/achieve.html";
        }
        else if(solutiontype === "battery"){
            document.getElementById("info").action = "/quote-kind.html";
        }
        else{

        }
    }
    //solutiontype...........................................................
    else if(document.location.pathname === "/solutiontype.html"){
        solutiontype = localStorage.getItem('solutiontype');
        if(solutiontype === "solar"){
            document.getElementById("info").action = "/info.html";
        }
        else if(solutiontype === "battery"){
            document.getElementById("info").action = "/battery-backup.html";
        }
        else{

        }
    }
    //battery-backup...........................................................
    else if(document.location.pathname === "/battery-backup.html"){
        document.getElementById("info").action = "/info.html";
    }
    //achieve...........................................................
    else if(document.location.pathname === "/achieve.html"){
        document.getElementById("info").action = "/quote-kind.html";
    }
    else if(document.location.pathname === "/quote-kind.html"){
        document.getElementById("info").action = "/electricity-usage.html";
        
    }
}
