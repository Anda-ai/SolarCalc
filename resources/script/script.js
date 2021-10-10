var optA;
var optB;
var opaq;
var solutiontype;
var quotekind;
var unit_a;
var unit_b;
var unit_c;
var length_a;
var length_b;
var length_c;
var number = 0;
//Solution type or Quate kind.................................................................
optA = document.querySelector('#opt1');
document.body.addEventListener('click', function (event) {
    if (optA.contains(event.target)) {
        if(document.location.pathname === "/solutiontype.html"){
            localStorage.setItem('solutiontype', 'solar');
        }
        else if(document.location.pathname === "/quote-kind.html"){
            localStorage.setItem('quotekind', 'broad');
        }
        else{
        }
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
        if(document.location.pathname === "/solutiontype.html"){
            localStorage.setItem('solutiontype', 'battery');
        }
        else if(document.location.pathname === "/quote-kind.html"){
            localStorage.setItem('quotekind', 'accurate');
        }
        else{
        }
        document.getElementById("opt1").checked = false;
        if (document.getElementById('opt2').checked) {
            $("button.calc-Container").css("opacity","1.0");
        } else {
            $("button.calc-Container").css("opacity","0.7");
        }
    } 
});
unit_a = document.querySelector('.a');
document.body.addEventListener('click', function (event) {
    if (unit_a.contains(event.target)) {
        document.onkeypress = function(e) {
            checkFill();
        };
        document.body.onkeyup = function(e){
            checkFill();
        };
    } 
});
unit_b = document.querySelector('.b');
document.body.addEventListener('click', function (event) {
    if (unit_b.contains(event.target)) {
        document.onkeypress = function(e) {
            checkFill();
        };
        document.body.onkeyup = function(e){
            checkFill();
        };
    }  
});
unit_c = document.querySelector('.c');
document.body.addEventListener('click', function (event) {
    if (unit_c.contains(event.target)) {
        document.onkeypress = function(e) {
            checkFill();
        };
        document.body.onkeyup = function(e){
            checkFill();
        };
    } 
});
//Info page..........................................................................

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
function checkFill(){
    length_a = document.querySelector('.a').value.length;
    length_b = document.querySelector('.b').value.length;
    length_c = document.querySelector('.c').value.length;
    if(length_a > 0 && length_b > 0 && length_c > 0){
        $("button.calc-Container").css("opacity","1.0");
    }
    else{
        $("button.calc-Container").css("opacity","0.7");
    }
}
//INDEX page.........................................................................
var p = window.location.pathname;
 if (p.length === 0 || p === "/" || p.match(/^\/?index/))
     $("button.calc-Container").css("opacity","1.0");
 //customise page.........................................................................
if(document.location.pathname === "/customise.html"){
     $("button.calc-Container").css("opacity","1.0");
     document.getElementById("info").action = "/cost-confirm.html";
}
//Verify all the information required is filled..............
function verifyAction(event){
    opaq = document.querySelector("button.calc-Container").style.opacity;
    if(opaq < 1.0){
        event.preventDefault();
    }
    else{
        //Do nothing
    }
    //info page......................................................................
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
    //solutiontype page..............................................................
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
    //battery-backup page............................................................
    else if(document.location.pathname === "/battery-backup.html"){
        document.getElementById("info").action = "/info.html";
    }
    //achieve page...................................................................
    else if(document.location.pathname === "/achieve.html"){
        document.getElementById("info").action = "/quote-kind.html";
    }
    //quote page...................................................................
    else if(document.location.pathname === "/quote-kind.html"){
        quotekind = localStorage.getItem('quotekind');
        if(solutiontype === "broad"){
            document.getElementById("info").action = "/info.html";
        }
        else if(solutiontype === "accurate"){
            document.getElementById("info").action = "/battery-backup.html";
        }
        else{

        }
    }
    //electricity-usage page.........................................................
    else if(document.location.pathname === "/electricity-usage.html"){
        quotekind = localStorage.getItem('quotekind');
        if(quotekind === "broad"){
            document.getElementById("info").action = "/cost-confirm.html";
        }
        else if(quotekind === "accurate"){
            document.getElementById("info").action = "/customise.html";
        }
        else{

        }
    }
    else{
    }
}
function verifyEmail(){
    alert("Email needs to be verified");
}
function decrement(id){
    number = $('input#'+id+'.number').val();
    if(number > 0 && number < 100){
        number--;
        $('input#'+id+'.number').val(number);
    }
    else{
        $('input#'+id+'.number').val("99");
    }
}
function increment(id){
    number = $('input#'+id+'.number').val();
    if(number >= 0 && number < 98){
        number++;
        $('input#'+id+'.number').val(number);
    }
    else{
        $('input#'+id+'.number').val("99");
    }
}
