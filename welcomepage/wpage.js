const checkbox = document.getElementById("firstCheckbox");
const button = document.getElementById ("acceptButton");
const icon =document.getElementById("icon")

button.addEventListener ("click", function (){
    if (checkbox.checked == true){
        window.location.href = "../benchmarkpage/benchmark.html"
    } else { 
        alert("Accept the conditions")
    }
});




