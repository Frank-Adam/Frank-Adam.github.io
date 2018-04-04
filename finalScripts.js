/* Initial Home Page */
    function setHome() {
    delHome("icons");
    createHome(myDiv);
}
    function setTime() {
    delHome("icons");
    createTime();
    createHomeLinkTme();
}
    function setCalc() {
    delHome("icons");
    createCalc();
    createHomeLinkCalc();
}
    function setCurr() {
    delHome("icons");
    createCurrency();
    createHomeLinkCurr();
}
    function setWeath() {
    delHome("icons");
    createWeather();
    createHomeLinkWth();
}

/* clear home page */
    function delHome(myDiv) {
    var node1 = document.getElementById(myDiv);
    node1.parentNode.removeChild(node1);
}
/* home link */
    function createHomeLinkTme() {
    var existingNode = document.getElementById("1script");
    var parent = document.createElement("div"); //home button
    var homeImg = document.createElement("img");
    document.body.insertBefore(parent, existingNode);
    parent.id="hme";
    homeImg.src="house.png";
    homeImg.width ="30px";
    homeImg.height="30px";
    homeImg.style.animation="shimmy 5s infinite";
    homeImg.style.animationDelay="25s";
    homeImg.onclick=function() {delHome("tFlex");
                                delHome("btnTimes");
                                delHome("timeDiv");
                                delHome("timeDivM");
                                delHome("secs");
                                delHome("hme");
                                createHome();};
    parent.appendChild(homeImg);
}
    function createHomeLinkCalc() {
    var existingNode = document.getElementById("1script");
    var parent = document.createElement("div"); //home button
    var homeImg = document.createElement("img");
    document.body.insertBefore(parent, existingNode);
    parent.id="hme";
    homeImg.src="house.png";
    homeImg.width ="30px";
    homeImg.height="30px";
    homeImg.style.animation="shimmy 10s infinite";
    homeImg.style.animationDelay="25s";
    homeImg.onclick=function() {delHome("clc"); delHome("hme"); createHome();};
    parent.appendChild(homeImg);
    parent.style.animation="slideIn 1.5s linear";
}
    function createHomeLinkWth() {
    var existingNode = document.getElementById("1script");
    var parent = document.createElement("div"); //home button
    var homeImg = document.createElement("img");
    document.body.insertBefore(parent, existingNode);
    parent.id="hme";
    homeImg.src="house.png";
    homeImg.width ="30px";
    homeImg.height="30px";
    homeImg.style.animation="shimmy 10s infinite";
    homeImg.style.animationDelay="25s";
    homeImg.onclick=function() {delHome("weatherHeader"); delHome("weatherDiv"); delHome("hme"); createHome();};
    parent.appendChild(homeImg);
    parent.style.animation="up 3s linear";
}
    function createHomeLinkCurr() {
    var existingNode = document.getElementById("1script");
    var parent = document.createElement("div"); //home button
    var homeImg = document.createElement("img");
    document.body.insertBefore(parent, existingNode);
    parent.id="hme";
    homeImg.src="house.png";
    homeImg.width ="30px";
    homeImg.height="30px";
    homeImg.style.animation="shimmy 10s infinite";
    homeImg.style.animationDelay="25s";
    homeImg.onclick=function() {delHome("curr"); delHome("hme"); createHome();};
    parent.appendChild(homeImg);
    parent.style.animation="left 3s linear";
}

/* recreate home page */
    function createHome() {
    var existingNode = document.getElementById("1script");
    var parent = document.createElement("div");
    var node1 = document.createElement("div");
    var node2 = document.createElement("div");
    var node3 = document.createElement("div");
    var node4 = document.createElement("div");
    
    document.body.insertBefore(parent , existingNode);
    parent.id="icons";
    parent.appendChild(node1);
    parent.appendChild(node2);
    parent.appendChild(node3);
    parent.appendChild(node4);
    parent.style.animation="spin 1s ease-in-out";
    
    var img1 = document.createElement("img");
    var img2 = document.createElement("img");
    var img3 = document.createElement("img");
    var img4 = document.createElement("img");
    
    img1.src = 'time.png';
    img1.id = 'i1';
    img2.src = 'calc.png';
    img2.id = 'i2';
    img3.src = 'currency.png';
    img3.id = 'i3';
    img4.src = 'weather.png';
    img4.id = 'i4';
    
    
    node1.appendChild(img1);
    node2.appendChild(img2);
    node3.appendChild(img3);
    node4.appendChild(img4);
    
    img1.onclick=function() {setTime();};
    img2.onclick=function() {setCalc();};
    img3.onclick=function() {setCurr();};
    img4.onclick=function() {setWeath();};

    node1.style.animation="shimmy1 1s infinite";
    node1.style.animationDelay="3s";
    node2.style.animation="shimmy2 1s infinite";
    node2.style.animationDelay="5.5s";
    node3.style.animation="shimmy3 1s infinite";
    node3.style.animationDelay="9s";
    node4.style.animation="shimmy4 1s infinite";
    node4.style.animationDelay="10s";
    
}
/*create calculator */
    function createCalc() { 
    var parent = document.createElement("div");
    var node1 = document.createElement("div"); //header
    var node2 = document.createElement("nav"); //home link
    var node3 = document.createElement("main"); //main
    var node4 = document.createElement("div"); //article
    var existingNode = document.getElementById("1script");
    
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
    
    document.body.insertBefore(parent , existingNode);
    parent.id="clc";
    parent.appendChild(node1);
    parent.appendChild(node2);
    parent.appendChild(node3);
    parent.appendChild(node4);
    parent.style.animation="down 2.5s ease-in-out";
    
    node1.id="header";
    var hdrText = document.createTextNode("Calculator");
    node1.appendChild(hdrText);
    node1.style.animation="down .25s ease-in-out";
    
    node3.appendChild(calcButtons); //create the calc buttons
    calcButtons.id="box1";
        calcButtons.appendChild(e1);
            e1.id="e1";
            e1.onclick=function() {addNum(1);};
            var e1T=document.createTextNode("1");
            e1.appendChild(e1T);
            
        calcButtons.appendChild(e2);
            e2.id="e2";
            e2.onclick=function() {addNum(2);};
            var e2T=document.createTextNode("2");
            e2.appendChild(e2T);
            
        calcButtons.appendChild(e3);
            e3.id="e3";
            e3.onclick=function() {addNum(3);};
            var e3T=document.createTextNode("3");
            e3.appendChild(e3T);
            
        calcButtons.appendChild(e4);
            e4.id="e4";
            e4.onclick=function() {addNum(4);};
            var e4T=document.createTextNode("4");
            e4.appendChild(e4T);
            
        calcButtons.appendChild(e5);
            e5.id="e5";
            e5.onclick=function() {addNum(5);};
            var e5T=document.createTextNode("5");
            e5.appendChild(e5T);
            
        calcButtons.appendChild(e6);
            e6.id="e6";
            e6.onclick=function() {addNum(6);};
            var e6T=document.createTextNode("6");
            e6.appendChild(e6T);
            
        calcButtons.appendChild(e7);
            e7.id="e7";
            e7.onclick=function() {addNum(7);};
            var e7T=document.createTextNode("7");
            e7.appendChild(e7T);
            
        calcButtons.appendChild(e8);
            e8.id="e8";
            e8.onclick=function() {addNum(8);};
            var e8T=document.createTextNode("8");
            e8.appendChild(e8T);
            
        calcButtons.appendChild(e9);
            e9.id="e9";
            e9.onclick=function() {addNum(9);};
            var e9T=document.createTextNode("9");
            e9.appendChild(e9T);
            
        calcButtons.appendChild(e0);
            e0.id="e0";
            e0.onclick=function() {addNum(0);};
            var e0T=document.createTextNode("0");
            e0.appendChild(e0T);
        
        //special characters
        calcButtons.appendChild(ep);
            ep.id="ep";
            ep.onclick=function() {addNum('+');};
            var epT=document.createTextNode("+");
            ep.appendChild(epT);
            
        calcButtons.appendChild(em);
            em.id="em";
            em.onclick=function() {addNum('-');};
            var emT=document.createTextNode("-");
            em.appendChild(emT);
            
        calcButtons.appendChild(eml);
            eml.id="eml";
            eml.onclick=function() {addNum('*');};
            var emlT=document.createTextNode("*");
            eml.appendChild(emlT);
            
        calcButtons.appendChild(ed);
            ed.id="ed";
            ed.onclick=function() {addNum('/');};
            var edT=document.createTextNode("/");
            ed.appendChild(edT);
            
        calcButtons.appendChild(edec);
            edec.id="edec";
            edec.onclick=function() {addNum('.');};
            var edecT=document.createTextNode(".");
            edec.appendChild(edecT);
            
        calcButtons.appendChild(ex);
            ex.id="ex";
            ex.onclick=function() {addNum('^');};
            var exT=document.createTextNode("^");
            ex.appendChild(exT);
            
        calcButtons.appendChild(ec);
            ec.id="ec";
            ec.onclick=function() {addNum('C');};
            var ecT=document.createTextNode("C");
            ec.appendChild(ecT);
            
        calcButtons.appendChild(eq);
            eq.id="eq";
            eq.onclick=function() {calcNum();};
            var eqT=document.createTextNode("=");
            eq.appendChild(eqT);
            
        node4.appendChild(disp);
        disp.id="display";
}
/* calc operations */
    function addNum(numb) {
    var display = document.getElementById("display");
    var currAnswer = display.innerHTML;
    currAnswer = currAnswer.substring(0,3);
    if(currAnswer === 'Ans') {
        display.innerHTML='';
    }
            
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
    mathDiv.innerHTML = 'Answer: ' + answer.toLocaleString();
}


/* create currency */
    function createCurrency() {
    //following D.Cenatiempo's group instruction
    let getAPIDataCurr = function() {
        var xmlHttp = new XMLHttpRequest();
        var xmlHttp2 = new XMLHttpRequest();
            
        xmlHttp.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                //console.log(this.responseText);
                processJSONCurr(this.responseText);
            }
    };
            
    //get the api data
    xmlHttp.open("GET","https://forex.1forge.com/1.0.3/convert?from=USD&to=EUR&quantity=100&api_key=sjTn03IhIRiIcKLGIBRUjPJavekOUYSr",true);
    xmlHttp.send();
            
    getMarketData();
    }
        
    let getMarketData = function() {
    var xmlHttp2 = new XMLHttpRequest();
            
    xmlHttp2.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
        //console.log(this.responseText);
            processJSON2Curr(this.responseText);
        }
    };
            
    xmlHttp2.open("GET","https://forex.1forge.com/1.0.3/market_status?api_key=sjTn03IhIRiIcKLGIBRUjPJavekOUYSr",true);
    xmlHttp2.send();
    }

var parent = document.createElement("div");
    var node1 = document.createElement("div"); //header
    var node2 = document.createElement("div"); //input
    var node2a = document.createElement("input");
    var node3 = document.createElement("button"); //button
    var node4 = document.createElement("div"); //output
    var existingNode = document.getElementById("1script");
    
    document.body.insertBefore(parent , existingNode);
    parent.id="curr";
    parent.appendChild(node1);
    parent.appendChild(node2);
    node2.appendChild(node2a);
    parent.appendChild(node3);
    parent.appendChild(node4);
    
    
    
    node1.id="currHdr";
    var hdrText = document.createTextNode("Euro Currency Converter");
    node1.appendChild(hdrText);
    node1.style.animation="left 2.5s ease-in-out";
    
    node2a.id="input";
    node2a.setAttribute("type", "text");
    node2a.placeholder="$0.00";
    var node2Txt = document.createTextNode(">> Input USD Amount");
    node2a.appendChild(node2Txt);
    node2a.style.animation="right 2.5s ease-in-out";
    
    node3.onclick=function() {getAPIDataCurr();};
    var node3Txt = document.createTextNode("Get Current Euro Conversion");
    node3.appendChild(node3Txt);
    node3.style.animation="left 2.5s ease-in-out";
    
    node4.id="output";
    node4.style.animation="right 2.5s ease-in-out";
}   

    //currency data
    function processJSONCurr(text) {
    var data = JSON.parse(text);
    var input = parseFloat(document.getElementById("input").value);
    var USD = parseFloat(input).toFixed(2);
    var EUR = ((parseFloat(data.value) / 100) * USD).toFixed(2);
    var final = document.getElementById("output");
            
    if(isNaN(input)) {
        final.innerHTML = "No USD Entered"
    } else {
        var output = "$" + USD + " converts to: &euro;" + EUR;
        var final = document.getElementById("output");
        final.innerHTML = output;
                
        var source = document.getElementById("source");
        var div1 = document.getElementById("1");
        var div2 = document.getElementById("2");
        var div3 = document.getElementById("3");
        var myDate = new Date (parseInt(data.timestamp * 1000));
                
        source.style.display="block";
        div1.style.display="block";
        div2.style.display="block";
        div3.style.display="block";
        div1.innerHTML="API current Euro value: " + data.value;
        div2.innerHTML="API current conversion text: " + data.text;
        div3.innerHTML="API current epoch timestamp: " + data.timestamp + " (converted date: " + myDate.toLocaleString() + ")";
    }
}
    function processJSON2Curr(text) {
    var data = JSON.parse(text);
    var marketY = document.getElementById("marketYes");
    var marketN = document.getElementById("marketNo");
                
    if(data.market_is_open == true) {
        marketY.style.display="block";
    } else {
        marketN.style.display="block";
    }
                
    var div4 = document.getElementById("4");
    div4.style.display="block";
    div4.innerHTML="API current market 'is open' status: " + data.market_is_open;
}

    

/* create weather */
    function getIds(header, weather1, weather2, weather3, weatherDiv, weatherHeader) {
            var header = document.getElementById("header");
            var weather1 = document.getElementById("weather1");
            var weather2 = document.getElementById("weather2");
            var weather3 = document.getElementById("weather3");
            var weatherDiv = document.getElementById("weatherDiv");
            var weatherHeader = document.getElementById("weatherHdr");
        }
        
    function createWeather() {
    //create the weather elements
    var existingNode = document.getElementById("1script");
    var node1 = document.createElement("div"); //weather Header
    var parent = document.createElement("div"); //weatherDiv
    var node2 = document.createElement("div"); //wther 1
    var node3 = document.createElement("div"); //wther 2
    var node4 = document.createElement("div"); //wther 3
    document.body.insertBefore(node1 , existingNode);
    node1.id="weatherHeader";
    var t = document.createTextNode("Current Weather");
    node1.appendChild(t);
    document.body.insertBefore(parent , existingNode);
    parent.id="weatherDiv";
    parent.appendChild(node2);
    parent.appendChild(node3);
    parent.appendChild(node4);
    parent.style.animation="right 3s ease-in-out";
    
    node2.id="weather1";
    node3.id="weather2";
    node4.id="weather3";
    
    getAPIData();
}
    
        let getAPIData = function() {
            var xmlHttp = new XMLHttpRequest();
            var xmlHttp2 = new XMLHttpRequest();
            var xmlHttp3 = new XMLHttpRequest();
            
            xmlHttp.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200) {
                        processJSON(this.responseText);
                        console.log(processJSON(this.responseText));
                }
                };
            xmlHttp2.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200) {
                        processJSON2(this.responseText);
                        console.log(processJSON2(this.responseText));
                }
                };
            xmlHttp3.onreadystatechange = function() {
                if(this.readyState == 4 && this.status == 200) {
                        processJSON3(this.responseText);
                        console.log(processJSON3(this.responseText));
                }
            };
            //get the api data
            xmlHttp.open("GET","http://api.wunderground.com/api/50e1cf137699800c/geolookup/conditions/q/NY/New_York.json",true);
            xmlHttp.send();
           
            xmlHttp2.open("GET","http://api.wunderground.com/api/50e1cf137699800c/geolookup/conditions/q/ID/Rexburg.json",true);
            xmlHttp2.send();
            
            xmlHttp3.open("GET","http://api.wunderground.com/api/50e1cf137699800c/geolookup/conditions/q/CA/Los_Angeles.json",true);
            xmlHttp3.send();
        }
        function processJSON(text) {
            var data = JSON.parse(text);
            var weatherDiv = document.getElementById("weather1");
            weatherDiv.innerHTML = 'New York, NY' + '<br>' + 'Temps:' + '<br>' + data['current_observation']['temp_f'] + '&deg;F / ' + data['current_observation']['temp_c'] + '&deg;C';
            var elem = document.createElement("img");
            elem.setAttribute("src", data['current_observation']['icon_url']);
            document.getElementById("weather1").appendChild(elem);
            
        }
        function processJSON2(text) {
            var data = JSON.parse(text);
            var weatherDiv = document.getElementById("weather2");
             weatherDiv.innerHTML = 'Rexburg, ID' + '<br>' + 'Temps:' + '<br>' + data['current_observation']['temp_f'] + '&deg;F / ' + data['current_observation']['temp_c'] + '&deg;C';
            var elem = document.createElement("img");
            elem.setAttribute("src", data['current_observation']['icon_url']);
            document.getElementById("weather2").appendChild(elem);
           
        }
        function processJSON3(text) {
            var data = JSON.parse(text);
            var weatherDiv = document.getElementById("weather3");
             weatherDiv.innerHTML = 'Los Angeles, CA' + '<br>' + 'Temps:' + '<br>' + data['current_observation']['temp_f'] + '&deg;F / ' + data['current_observation']['temp_c'] + '&deg;C';
            var elem = document.createElement("img");
            elem.setAttribute("src", data['current_observation']['icon_url']);
            document.getElementById("weather3").appendChild(elem);
           
        }
        
/* create time */
    function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
    function runTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        if(h<12) {
            document.getElementById('timeDiv').innerHTML =h + ":" + m;
        } else {
            document.getElementById('timeDiv').innerHTML =(h-12) + ":" + m;
        }
        
        if(h<12) {
            document.getElementById('timeDivM').innerHTML ="0" + h + ":" + m;
        } else {
            document.getElementById('timeDivM').innerHTML =h + ":" + m; 
        }
    
        document.getElementById('secs').innerHTML = s;
        var t = setTimeout(runTime, 500);
    }
    
    function createTime() {
    var parent = document.createElement("div");//tFlex
    var parent1 = document.createElement("div");//btnTimes
    var node1 = document.createElement("div"); //tHdr
    var node2 = document.createElement("button"); //bStd
    var node3 = document.createElement("button"); //bMil
    var node4 = document.createElement("div"); //timeDiv
    var node5 = document.createElement("div"); //timeDivM
    var node6 = document.createElement("div"); //secs
    var existingNode = document.getElementById("1script");
    
    
    document.body.insertBefore(parent , existingNode);
    document.body.insertBefore(parent1 , existingNode);
    parent.id="tFlex";
    parent1.id="btnTimes"
    parent.appendChild(node1);
    parent1.appendChild(node2);
    parent1.appendChild(node3);
    document.body.insertBefore(node4, existingNode);
    document.body.insertBefore(node5, existingNode);
    document.body.insertBefore(node6, existingNode);
    var tFlexText = document.createTextNode("Current Time");
    var bStdText = document.createTextNode("Standard Time");
    var bMilText = document.createTextNode("Military Time");
    parent.appendChild(tFlexText);
    node2.appendChild(bStdText);
    node3.appendChild(bMilText);
    node2.onclick=function() {timeStd();};
    node3.onclick=function() {timeMil();};
    
    node1.id="tHdr";
    node2.id="bStd";
    node3.id="bMil";
    node4.id="timeDiv";
    node5.id="timeDivM";
    node6.id="secs";
    
    parent.style.animation="up 3s ease-in-out";
    parent1.style.animation="down 1.5s ease-in-out";
    
        runTime();
    }
   
    

    function timeStd() {
        document.getElementById("timeDivM").style.display="none";
        var stdDiv = document.getElementById("timeDiv");
        var milSecs = document.getElementById("secs");
        stdDiv.style.display="flex";
        stdDiv.style.alignContent="stretch";
        stdDiv.style.fontFamily="Orbitron";
        stdDiv.style.fontSize="4em";
        stdDiv.style.color="darkblue";
        stdDiv.style.padding="10px";
        milSecs.style.marginLeft="210px";
    }
    function timeMil() {
        document.getElementById("timeDiv").style.display="none";
        var milDiv = document.getElementById("timeDivM");
        var milSecs = document.getElementById("secs");
        milDiv.style.display="flex";
        milDiv.style.alignContent="stretch";
        milDiv.style.fontFamily="Orbitron";
        milDiv.style.fontSize="4em";
        milDiv.style.color="darkblue";
        milDiv.style.textShadow="5px 2px lightblue";
        milDiv.style.padding="10px";
        milSecs.style.marginLeft="260px";
    }
