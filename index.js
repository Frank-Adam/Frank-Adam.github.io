var userList = [];
                
function getNumbers() {
var userInt = parseInt(prompt("Please enter any whole number"));
                    
    for (i = 0; i < userInt + 1; i++) {
        userList.push(i);
    }
                
    document.getElementById("userBox").innerHTML = userList.toString();
                    
    chngNumbers(userList);
}
                
function chngNumbers(userList) {
    alert("I'll print your list but also have a little fun with it too...")
                    
    for (i = 0; i < userList.length; i++) {
        if(userList[i] % 2 == 0) {
            userList[i] = userList[i] * i;
        }
    document.getElementById("userBox2").innerHTML = userList.toString();
    userList = [];
}
