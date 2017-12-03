var num = 1;

function addTerm() {
  if(num < 3){
  console.log("plan"+num);
    var x = document.getElementById("plan"+num);
        x.style.display = "block";
    num = num +1;
  }
  else if(num === 3){
    console.log("plan"+num);
      var x = document.getElementById("plan"+num);
          x.style.display = "block";
      num = num +1;
      var y = document.getElementById("plusbtn");
      y.style.opacity = "0.5";
  }
}
