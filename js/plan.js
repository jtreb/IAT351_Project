var num = 5;
var deletenum = -1;
var terms = ["Fall 2016","Spring 2017", "Summer 2017", "Fall 2017", "Spring 2018", "Summer 2018", "Fall 2018", "Spring 2019"];

function addTerm() {
  if(num < 8){
  console.log("plan"+num);
    var x = document.getElementById("plan"+num);
        x.style.display = "block";
        num = num +1;

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

function opensem(){

  var modal = document.getElementById('semmodal');
  modal.style.display = "block";
}

function  closesem() {
  var modal = document.getElementById('semmodal');
    modal.style.display = "none";
}
function  nextsem() {
    var e = document.getElementById ("addcourses");
    e.style.display = "block";
}
function  changespecs() {
    var e = document.getElementById ("reqselect");
    var req = e.options [e.selectedIndex] .value;

    console.log(req);
    if(req == 0){
         var a = document.getElementById ("specreqselect0");
          a.style.display = "block";

          var b = document.getElementById ("specreqselect1");
          b.style.display = "none";

          var c = document.getElementById ("specreqselect2");
          c.style.display = "none";
          console.log(req);
    }

   if(req == 1){
        var a = document.getElementById ("specreqselect0");
         a.style.display = "none";

         var b = document.getElementById ("specreqselect1");
         b.style.display = "block";

         var c = document.getElementById ("specreqselect2");
         c.style.display = "none";
         console.log(req);
   }

  if(req == 2){
       var x = document.getElementById ("specreqselect0");
        x.style.display = "none";

        var y = document.getElementById ("specreqselect1");
        y.style.display = "none";

        var z = document.getElementById ("specreqselect2");
        z.style.display = "block";
        console.log(req);

             var a = document.getElementById ("courseselect0");
              a.style.display = "none";

              var b = document.getElementById ("courseselect1");
              b.style.display = "none";

              var c = document.getElementById ("courseselect2");
              c.style.display = "none";

              var d = document.getElementById ("courseselect3");
              d.style.display = "none";

              var e = document.getElementById ("courseselect4");
              e.style.display = "none";

              var f = document.getElementById ("courseselect5");
              f.style.display = "none";

              var g = document.getElementById ("courseselect6");
              g.style.display = "none";

              var h = document.getElementById ("courseselect7");
              h.style.display = "block";
              console.log(req);
  }
}

function  changecoursesmajor() {
    var z = document.getElementById ("specreqselect0");
    var req = z.options [z.selectedIndex] .value;

    console.log(req);
    if(req == 0){
         var a = document.getElementById ("courseselect0");
          a.style.display = "block";

          var b = document.getElementById ("courseselect1");
          b.style.display = "none";

          var c = document.getElementById ("courseselect2");
          c.style.display = "none";

          var d = document.getElementById ("courseselect3");
          d.style.display = "none";

          var e = document.getElementById ("courseselect4");
          e.style.display = "none";

          var f = document.getElementById ("courseselect5");
          f.style.display = "none";

          var g = document.getElementById ("courseselect6");
          g.style.display = "none";

          var h = document.getElementById ("courseselect7");
          h.style.display = "none";
          console.log(req);
    }

   if(req == 1){
        var a = document.getElementById ("courseselect0");
         a.style.display = "none";

         var b = document.getElementById ("courseselect1");
         b.style.display = "block";

         var c = document.getElementById ("courseselect2");
         c.style.display = "none";

         var d = document.getElementById ("courseselect3");
         d.style.display = "none";

         var e = document.getElementById ("courseselect4");
         e.style.display = "none";

         var f = document.getElementById ("courseselect5");
         f.style.display = "none";

         var g = document.getElementById ("courseselect6");
         g.style.display = "none";

         var h = document.getElementById ("courseselect7");
         h.style.display = "none";
         console.log(req);
   }

  if(req == 2){
       var a = document.getElementById ("courseselect0");
        a.style.display = "none";

        var b = document.getElementById ("courseselect1");
        b.style.display = "none";

        var c = document.getElementById ("courseselect2");
        c.style.display = "block";

        var d = document.getElementById ("courseselect3");
        d.style.display = "none";

        var e = document.getElementById ("courseselect4");
        e.style.display = "none";

        var f = document.getElementById ("courseselect5");
        f.style.display = "none";

        var g = document.getElementById ("courseselect6");
        g.style.display = "none";

        var h = document.getElementById ("courseselect7");
        h.style.display = "none";
        console.log(req);
  }
  if(req == 3){
       var a = document.getElementById ("courseselect0");
        a.style.display = "none";

        var b = document.getElementById ("courseselect1");
        b.style.display = "none";

        var c = document.getElementById ("courseselect2");
        c.style.display = "none";

        var d = document.getElementById ("courseselect3");
        d.style.display = "block";

        var e = document.getElementById ("courseselect4");
        e.style.display = "none";

        var f = document.getElementById ("courseselect5");
        f.style.display = "none";

        var g = document.getElementById ("courseselect6");
        g.style.display = "none";

        var h = document.getElementById ("courseselect7");
        h.style.display = "none";
        console.log(req);
  }
}

function  changecourseswqb() {
    var z = document.getElementById ("specreqselect1");
    var req = z.options [z.selectedIndex] .value;

    console.log(req);
    if(req == 0){
         var a = document.getElementById ("courseselect0");
          a.style.display = "none";

          var b = document.getElementById ("courseselect1");
          b.style.display = "none";

          var c = document.getElementById ("courseselect2");
          c.style.display = "none";

          var d = document.getElementById ("courseselect3");
          d.style.display = "none";

          var e = document.getElementById ("courseselect4");
          e.style.display = "block";

          var f = document.getElementById ("courseselect5");
          f.style.display = "none";

          var g = document.getElementById ("courseselect6");
          g.style.display = "none";

          var h = document.getElementById ("courseselect7");
          h.style.display = "none";
          console.log(req);
    }

   if(req == 1){
        var a = document.getElementById ("courseselect0");
         a.style.display = "none";

         var b = document.getElementById ("courseselect1");
         b.style.display = "none";

         var c = document.getElementById ("courseselect2");
         c.style.display = "none";

         var d = document.getElementById ("courseselect3");
         d.style.display = "none";

         var e = document.getElementById ("courseselect4");
         e.style.display = "none";

         var f = document.getElementById ("courseselect5");
         f.style.display = "block";

         var g = document.getElementById ("courseselect6");
         g.style.display = "none";

         var h = document.getElementById ("courseselect7");
         h.style.display = "none";
         console.log(req);
   }

  if(req == 2){
       var a = document.getElementById ("courseselect0");
        a.style.display = "none";

        var b = document.getElementById ("courseselect1");
        b.style.display = "none";

        var c = document.getElementById ("courseselect2");
        c.style.display = "none";

        var d = document.getElementById ("courseselect3");
        d.style.display = "none";

        var e = document.getElementById ("courseselect4");
        e.style.display = "none";

        var f = document.getElementById ("courseselect5");
        f.style.display = "none";

        var g = document.getElementById ("courseselect6");
        g.style.display = "block";

        var h = document.getElementById ("courseselect7");
        h.style.display = "none";
        console.log(req);
  }
}

function addcoursetoterm(){

  var sel = document.getElementById("semselect");
  num = sel.options [sel.selectedIndex] .value;
    var x = document.getElementById("plan"+num);
        x.style.display = "block";
  var j = 0;
  var list = document.getElementById("courseselect"+j);
  while(list.style.display == "none"){
    j=j+1;
    list = document.getElementById("courseselect"+j);
  }
  for(var i = 0; i<4;i++){
    var name =  document.getElementById("tempcourse"+i).innerHTML;

    var j = 0;
    var term = document.getElementById("plan"+num);
    var course = document.getElementById("plan"+num+""+j);
    while(course.style.display == "block"){
      j=j+1;
      course = document.getElementById("plan"+num+""+j);
    }
    if(name != ""){
      course.innerHTML = name;
      course.style.display  = "block";
    }
}
}

function tempaddcourse(){

  var sel = document.getElementById("semselect");
  num = sel.options [sel.selectedIndex] .value;
  var j = 0;
  var list = document.getElementById("courseselect"+j);
  while(list.style.display == "none"){
    j=j+1;
    list = document.getElementById("courseselect"+j);
  }
    var name = list.options [list.selectedIndex] .text;

    var i = 0;
    var term = document.getElementById("plan"+num);
    var course = document.getElementById("tempcourse"+i);
    while(course.style.display == "block"){
      i=i+1;
      course = document.getElementById("tempcourse"+i);
    }
    course.innerHTML = name;
    course.style.display  = "block";
}
