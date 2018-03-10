/* clear home page */
function delHome() {
    var node1 = document.getElementById("icons");
    node1.parentNode.removeChild(node1);
    
}

/* recreate home page */
function createHome() {
    var parent = document.createElement("div");
    var node1 = document.createElement("div");
    var node2 = document.createElement("div");
    var node3 = document.createElement("div");
    var node4 = document.createElement("div");
    var node5 = document.createElement("div");
    var node6 = document.createElement("div");
    
    document.body.appendChild(parent);
    parent.id="icons";
    parent.appendChild(node1);
    parent.appendChild(node2);
    parent.appendChild(node3);
    parent.appendChild(node4);
    parent.appendChild(node5);
    parent.appendChild(node6);
    
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    var img3 = document.createElement("img");
    var img4 = document.createElement("img");
    var img5 = document.createElement("img");
    var img6 = document.createElement("img");
    
    img1.src = 'time.png';
    img1.id = 'i1';
    img2.src = 'calc.png';
    img2.id = 'i2';
    img3.src = 'currency.png';
    img3.id = 'i3';
    img4.src = 'weather.png';
    img4.id = 'i4';
    img5.src = 'video.png';
    img5.id = 'i5';
    img6.src = 'help.png';
    img6.id = 'i6';
    
    node1.appendChild(img1);
    node2.appendChild(img2);
    node3.appendChild(img3);
    node4.appendChild(img4);
    node5.appendChild(img5);
    node6.appendChild(img6);
}

/*create calculator */
function createCalc() {    
    var parent1 = document.createElement("div"); //header
    var parent2 = document.createElement("nav"); //nav
    var parent3 = document.createElement("main"); //main
    var parent4 = document.createElement("div"); //article

    var disp = document.createElement("div"); //display
    var calcButtons = document.createElement("div");//calculator buttons
        var e1 = document.createElement("div");
        var e2 = document.createElement("div");
        var e3 = document.createElement("div");
        var e4 = document.createElement("div");
        var e5 = document.createElement("div");
        var e6 = document.createElement("div");
        var e7 = document.createElement("div");
        var e8 = document.createElement("div");
        var e9 = document.createElement("div");
        var e0 = document.createElement("div");
        var ep = document.createElement("div");
        var em = document.createElement("div");
        var eml = document.createElement("div");
        var ed = document.createElement("div");
        var edec = document.createElement("div");
        var ex = document.createElement("div");
        var ec = document.createElement("div");
        var eq = document.createElement("div");
    
    document.body.appendChild(parent1);
    document.body.appendChild(parent2);
    document.body.appendChild(parent3);
    document.body.appendChild(parent4);
    
    parent1.id="header";
    var hdrText = document.createTextNode("Calculator");
    parent1.appendChild(hdrText);
    
    parent3.appendChild(calcButtons); //create the calc buttons
    calcButtons.id="box1";
        calcButtons.appendChild(e1);
            e1.id="e1";
            e1.onClick="addNum(1)";
            var e1T=document.createTextNode("1");
            e1.appendChild(e1T);
            
        calcButtons.appendChild(e2);
            e2.id="e2";
            e2.onClick="addNum(2)";
            var e2T=document.createTextNode("2");
            e2.appendChild(e2T);
            
        calcButtons.appendChild(e3);
            e3.id="e3";
            e3.onClick="addNum(3)";
            var e3T=document.createTextNode("3");
            e3.appendChild(e3T);
            
        calcButtons.appendChild(e4);
            e4.id="e4";
            e4.onClick="addNum(4)";
            var e4T=document.createTextNode("4");
            e4.appendChild(e4T);
            
        calcButtons.appendChild(e5);
            e5.id="e5";
            e5.onClick="addNum(5)";
            var e5T=document.createTextNode("5");
            e5.appendChild(e5T);
            
        calcButtons.appendChild(e6);
            e6.id="e6";
            e6.onClick="addNum(6)";
            var e6T=document.createTextNode("6");
            e6.appendChild(e6T);
            
        calcButtons.appendChild(e7);
            e7.id="e7";
            e7.onClick="addNum(7)";
            var e7T=document.createTextNode("7");
            e7.appendChild(e7T);
            
        calcButtons.appendChild(e8);
            e8.id="e8";
            e8.onClick="addNum(8)";
            var e8T=document.createTextNode("8");
            e8.appendChild(e8T);
            
        calcButtons.appendChild(e9);
            e9.id="e9";
            e9.onClick="addNum(9)";
            var e9T=document.createTextNode("9");
            e9.appendChild(e9T);
            
        calcButtons.appendChild(e0);
            e0.id="e0";
            e0.onClick="addNum(0)";
            var e0T=document.createTextNode("0");
            e0.appendChild(e0T);
        
        //special characters
        calcButtons.appendChild(ep);
            ep.id="ep";
            ep.onClick="addNum('+')";
            var epT=document.createTextNode("+");
            ep.appendChild(epT);
            
        calcButtons.appendChild(em);
            em.id="em";
            em.onClick="addNum('-')";
            var emT=document.createTextNode("-");
            em.appendChild(emT);
            
        calcButtons.appendChild(eml);
            eml.id="eml";
            eml.onClick="addNum('*')";
            var emlT=document.createTextNode("*");
            eml.appendChild(emlT);
            
        calcButtons.appendChild(ed);
            ed.id="ed";
            ed.onClick="addNum('/')";
            var edT=document.createTextNode("/");
            ed.appendChild(edT);
            
        calcButtons.appendChild(edec);
            edec.id="edec";
            edec.onClick="addNum('.')";
            var edecT=document.createTextNode(".");
            edec.appendChild(edecT);
            
        calcButtons.appendChild(ex);
            ex.id="ex";
            ex.onClick="addNum('^')";
            var exT=document.createTextNode("^");
            ex.appendChild(exT);
            
        calcButtons.appendChild(ec);
            ec.id="ec";
            ec.onClick="addNum('C')";
            var ecT=document.createTextNode("C");
            ec.appendChild(ecT);
            
        calcButtons.appendChild(eq);
            eq.id="eq";
            eq.onClick="calcNum()";
            var eqT=document.createTextNode("=");
            eq.appendChild(eqT);
            
        parent4.appendChild(disp);
        disp.id="display";
}


/* calc operations */
function addNum(numb) {
    var display = document.getElementById("display");
    if(numb == 'C') {
        display.innerHTML = '';
    } else {
        display.innerHTML = display.innerHTML + numb;
    }
}
function calcNum() {
    //do math
    var mathDiv = document.getElementById("display");
    var userMath = mathDiv.innerHTML;
    console.log(userMath);
    var answer = math.eval(userMath);
    mathDiv.innerHTML = 'Answer: ' + answer;
}

/* color calculator */
function getIds(header, weather1, weather2, weather3, weatherDiv, weatherHeader, display, box1) {
    var header = document.getElementById("header");
    var weather1 = document.getElementById("weather1");
    var weather2 = document.getElementById("weather2");
    var weather3 = document.getElementById("weather3");
    var weatherDiv = document.getElementById("weatherDiv");
    var weatherHeader = document.getElementById("weatherHdr");
    var display = document.getElementById("display");
    var box1 = document.getElementById("box1");
}

/* create currency */

/* create weather */

/*create video */

/* create help */

