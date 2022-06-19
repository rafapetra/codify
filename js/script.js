// BUSINESS Logic

//hiding the results
function hideResults() {
  document.getElementById("swift").style.display = "none";
  document.getElementById("javascript").style.display = "none";
  document.getElementById("phyton").style.display = "none";


}

// UI Logic

//gather the data
window.onload = function() {
  hideResults();

  document.querySelector("form").onsubmit = function(event) {
    hideResults();
    event.preventDefault();
    const button1 = document.getElementById("option1");
    const button2 = document.getElementById("option2");
    const button3 = document.getElementById("option3");
    const button4 = document.getElementById("option4");
    const button8 = document.getElementById("option8");
    const button11 = document.getElementById("option11");
    const button15 = document.getElementById("option15");







    if (button1.checked && button8.checked && button11.checked && button15.checked) {
      document.getElementById("swift").style.display = "block";
    }else if (button2.checked) {
      document.getElementById("phyton").style.display = "block";
    }else if (button3.checked) {
      document.getElementById("javascript").style.display = "block";
    }else if (button1.checked) {
      document.getElementById("swift").style.display = "block";
    }


  }
}







