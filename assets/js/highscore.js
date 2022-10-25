// Functiom of creating the list of Scores 
function checkList() {

    var olListElm = document.querySelector("#list");

    var newInfo = JSON.parse(localStorage.getItem("newInfo")) || [];

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
