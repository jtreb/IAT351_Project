var num = 5;
var deletenum = -1;
function addTerm() {
  if(num < 7){
  console.log("plan"+num);
    var x = document.getElementById("plan"+num);
        x.style.display = "block";
        num = num +1;

  }
  else if(num === 7){
    console.log("plan"+num);
      var x = document.getElementById("plan"+num);
          x.style.display = "block";
      num = num +1;
      var plus = document.getElementById("plusbtn");
      plus.style.opacity = "0.5";


  }
}

function deleteTerm0() {
  deletenum = 0;
  var modal = document.getElementById('confirm');
  modal.style.display = "block";
}
function deleteTerm1() {
  deletenum = 1;
  var modal = document.getElementById('confirm');
  modal.style.display = "block";
}
function deleteTerm2() {
  deletenum = 2;
  var modal = document.getElementById('confirm');
  modal.style.display = "block";
}
function deleteTerm3() {
  deletenum = 3;
  var modal = document.getElementById('confirm');
  modal.style.display = "block";
}
function deleteTerm4() {
  deletenum = 4;
  var modal = document.getElementById('confirm');
  modal.style.display = "block";
}
function deleteTerm5() {
  deletenum = 5;
  var modal = document.getElementById('confirm');
  modal.style.display = "block";
}
function deleteTerm6() {
  deletenum = 6;
  var modal = document.getElementById('confirm');
  modal.style.display = "block";
}
function deleteTerm7() {
  deletenum = 7;
  var modal = document.getElementById('confirm');
  modal.style.display = "block";
}
function  yesconfirm() {
  var x = document.getElementById("plan"+deletenum);
      x.style.display = "none";
      num = num-1;
  var modal = document.getElementById('confirm');
    modal.style.display = "none";
    var plus = document.getElementById("plusbtn");
    plus.style.opacity = "1";
}

function  noconfirm() {
  var modal = document.getElementById('confirm');
    modal.style.display = "none";
}

function openshare(){

  var modal = document.getElementById('sharemodal');
  modal.style.display = "block";
}

function  closeshare() {
  var modal = document.getElementById('sharemodal');
    modal.style.display = "none";
}
