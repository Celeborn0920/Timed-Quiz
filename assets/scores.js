var scoreUl = document.querySelector("#score-list");

var records = JSON.parse(localStorage.getItem("record"));
var homeBtn = document.querySelector("#homeBtn")

for (let i = 0; i < records.length; i++) {
    var newLi = document.createElement("li");
    newLi.textContent = records[i].initials + " - " + records[i].score;

    scoreUl.appendChild(newLi)
    
}

homeBtn.addEventListener("click", function() {
    window.location = "./index.html"
})