var userList = [];
var intCheck = 0;

function getNumbersMobile() {
    
    document.getElementById("userBox").innerHTML = "";
    document.getElementById("userBox2").innerHTML = "";
    
    do {
        var userInt = parseInt(prompt("Please enter any whole number between 1 and 10"));
        if (userInt < 1 || userInt > 10) {
            alert("Number entered is out of range. Please enter a number between 1 and 10 only.");
        } else {            
            for (i = 1; i < userInt + 1; i++) {
                userList.push(i);
                intCheck = 1;
            }
        }
    } 
    while (intCheck === 0);
   
   
    document.getElementById("userBox").innerHTML = userList.toString();
    chngNumbers(userList, userInt);
}
                
function chngNumbers(userList, userInt) {
    
    var myNumb = userInt;
    var myChar = 65;
    
    alert("I'll print a list from 1 to " + myNumb + " on the screen but also print a funny list too...")
                    
    for (i = 0; i < userList.length; i++) {
        if(userList[i] % 2 === 0) {
            userList[i] = String.fromCharCode(myChar);
            if (myChar > 89) {
                myChar = 65
            } else {
                myChar = myChar + 1;
            }
        }
    }
    
    document.getElementById("userBox2").innerHTML = userList.toString();
}