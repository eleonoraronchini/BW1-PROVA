const checkbox = document.getElementById("firstCheckbox");
const button = document.getElementById ("acceptButton");

button.addEventListener ("click", function (){
    if (checkbox.checked == true){
        window.location.href = "../benchmarkpage/benchmark.html"
    } else { 
        alert("Accept the conditions")
    }
});
