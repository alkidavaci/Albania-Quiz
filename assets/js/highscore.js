//Define variable
var clearScores = document.querySelector("#clearscores"); 
var olListElm = document.querySelector("#list");

// Functiom of creating the list of Scores 
function checkList() {

    var newInfo = JSON.parse(localStorage.getItem("newInfo")) || [];

    // Show only 5 high scores 
    newInfo = newInfo.splice(0, 5)

    // Sort the array before we create the list
    newInfo = newInfo.sort((a, b) => b.score - a.score)

    // Loop to create the list elements
    for (let i = 0; i < newInfo.length; i++) {
        var newLi = document.createElement("li");
        newLi.textContent = newInfo[i].user + " - " + newInfo[i].score
        olListElm.append(newLi)
    }
}
// Call function to create the list
checkList();


// Clear local storage
function clearLocalStorage(){
    localStorage.clear();
    newInfo=[];
    olListElm.innerHTML=""
  }

// Event Listener to cleare storage
clearScores.addEventListener("click", clearLocalStorage)
