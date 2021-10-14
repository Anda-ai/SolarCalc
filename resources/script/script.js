// var choiceSolar;
// var choiceBattery;
var opaq;
var solutiontype;
var quotekind;
var length_a;
var length_b;
var length_c;
var number = 0;

//Solution type or Quate kind.................................................................

const choiceSolar = document.getElementById('solar');
choiceSolar.addEventListener('click', function(event) {
    
    if (event.target.contains(choiceSolar)) {
        
        if(document.location.pathname === "/Projects/SolarCheck/Calculator/SolarCalc/solutiontype.html"){
            localStorage.setItem('solutiontype', 'solar');
        }
        else if(document.location.pathname === "/Projects/SolarCheck/Calculator/SolarCalc/quote-kind.html"){
            localStorage.setItem('quotekind', 'broad');
        }
        else{
            localStorage.setItem('solutiontype', 'WTF');
        }
        
        document.getElementById("solar-item").checked = true;
        document.getElementById("battery-item").checked = false;
        
        if (document.getElementById("solar-item").checked) {
            $("button.calc-Container").css("opacity","1.0");
        } else {
            $("button.calc-Container").css("opacity","0.7");
        }
    } 
});

const choiceBattery = document.getElementById('battery');
choiceBattery.addEventListener('click', function(event) {
    if (event.target.contains(choiceBattery)) {
        console.log(event.target);
        console.log(event.target.contains(choiceBattery));
        console.log(document.location.pathname);
        if(document.location.pathname === "/Projects/SolarCheck/Calculator/SolarCalc/solutiontype.html"){
            localStorage.setItem('solutiontype', 'battery');
        }
        else if(document.location.pathname === "/Projects/SolarCheck/Calculator/SolarCalc/quote-kind.html"){
            localStorage.setItem('quotekind', 'accurate');
        }
        else{
        }
        document.getElementById("battery-item").checked = true;
        document.getElementById("solar-item").checked = false;
        console.log(document.getElementById("battery-item").checked);
        console.log(document.getElementById("solar-item").checked);
        if (document.getElementById("battery-item").checked) {
            $("button.calc-Container").css("opacity","1.0");
        } else {
            $("button.calc-Container").css("opacity","0.7");
        }
    } 
});

// ELECTRICITY USAGE page ....................................................................

const unit_a = document.getElementsByClassName('a');
document.body.addEventListener('click', function(event) {
    if (unit_a.contains(event.target)) {
        document.onkeydown = function(e) {
            checkFill();
        };
        document.body.onkeyup = function(e){
            checkFill();
        };
    } 
});

const unit_b = document.getElementsByClassName('b');
document.body.addEventListener('click', function(event) {
    if (unit_b.contains(event.target)) {
        document.onkeydown = function(e) {
            checkFill();
        };
        document.body.onkeyup = function(e){
            checkFill();
        };
    }  
});

const unit_c = document.getElementsByClassName('c');
document.body.addEventListener('click', function(event) {
    if (unit_c.contains(event.target)) {
        document.onkeydown = function(e) {
            checkFill();
        };
        document.body.onkeyup = function(e){
            checkFill();
        };
    } 
});

// Info page..........................................................................

document.body.addEventListener('click', function (event) {
    if (choiceSolar.contains(event.target)) {
            checkOpt();
    }
});
var battery = document.querySelector('#autocomplete');
document.body.addEventListener('click', function (event) {
    if (battery.contains(event.target)) {
        document.onkeypress = function(e) {
            checkOpt();
        };
        document.body.onkeyup = function(e){
            checkOpt();
        };
    } 
});
function checkOpt(){
    value = choiceSolar.options[choiceSolar.selectedIndex].value;
    length = document.getElementById('autocomplete').value.length;
    if(( value === "single" | value === "three" ) && ( length > 0 )){
        $("button.calc-Container").css("opacity","1.0");
    }
    else{
         $("button.calc-Container").css("opacity","0.7");
    }
}
function checkFill(){
    length_a = unit_a.value.length;
    length_b = unit_b.value.length;
    length_c = unit_c.value.length;
    if((length_a > 0) && (length_b > 0) && (length_c > 0)){
        $("button.calc-Container").css("opacity","1.0");
    }
    else{
        $("button.calc-Container").css("opacity","0.7");
    }
}


//INDEX page.........................................................................
var p = window.location.pathname;
 if ((p.length === 0) || (p === "/") || (p.match(/^\/?index/)))
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
    else if(document.location.pathname === "/Projects/SolarCheck/Calculator/SolarCalc/solutiontype.html"){
        solutiontype = localStorage.getItem('solutiontype');
        if(solutiontype === "solar"){
            document.getElementById("info").action = "/Projects/SolarCheck/Calculator/SolarCalc/info.html";
        }
        else if(solutiontype === "battery"){
            document.getElementById("info").action = "/Projects/SolarCheck/Calculator/SolarCalc/battery-backup.html";
        }
        else{

        }
    }
    //battery-backup page............................................................
    else if(document.location.pathname === "/Projects/SolarCheck/Calculator/SolarCalc/battery-backup.html"){
        document.getElementById("info").action = "/Projects/SolarCheck/Calculator/SolarCalc/info.html";
    }
    //achieve page...................................................................
    else if(document.location.pathname === "/Projects/SolarCheck/Calculator/SolarCalc/achieve.html"){
        document.getElementById("info").action = "/Projects/SolarCheck/Calculator/SolarCalc/quote-kind.html";
    }
    //quote page...................................................................
    else if(document.location.pathname === "/Projects/SolarCheck/Calculator/SolarCalc/quote-kind.html"){
        quotekind = localStorage.getItem('quotekind');
        if(solutiontype === "broad"){
            document.getElementById("info").action = "/Projects/SolarCheck/Calculator/SolarCalc/info.html";
        }
        else if(solutiontype === "accurate"){
            document.getElementById("info").action = "/Projects/SolarCheck/Calculator/SolarCalc/battery-backup.html";
        }
        else{

        }
    }
    //electricity-usage page.........................................................
    else if(document.location.pathname === "/electricity-usage.html"){
        quotekind = localStorage.getItem('quotekind');
        if(quotekind === "broad"){
            document.getElementById("info").action = "/Projects/SolarCheck/Calculator/SolarCalc/cost-confirm.html";
        }
        else if(quotekind === "accurate"){
            document.getElementById("info").action = "/Projects/SolarCheck/Calculator/SolarCalc/customise.html";
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
