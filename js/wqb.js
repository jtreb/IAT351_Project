function showiat100(){
  var x = event.pageX;
  var y = event.pageY;

  var modal = document.getElementById('iat100modal');

  // modal.style.top = y+"px";
  // modal.style.left = x+"px";
  modal.style.position = "absolute";
  // modal.style.top = "50%";
  // modal.style.right = "0";
  // modal.style.transform = "translate(0, -25%)";
  modal.style.display = "block";
  // modal.style.width = "50%";
  modal.style.position = "fixed";
}



function showiat103(){
  var x = event.pageX;
  var y = event.pageY;

  var modal = document.getElementById('iat103modal');
modal.style.position = "absolute";
modal.style.position = "fixed";
modal.style.display = "block";
}
function showiat309(){
  var x = event.pageX;
  var y = event.pageY;

  var modal = document.getElementById('iat309modal');
modal.style.position = "absolute";
modal.style.position = "fixed";
modal.style.display = "block";
}

function showcmpt166(){
  var x = event.pageX;
  var y = event.pageY;

  var modal = document.getElementById('cmpt166modal');
modal.style.position = "absolute";
modal.style.position = "fixed";
modal.style.display = "block";
}
function showcmpt225(){
  var x = event.pageX;
  var y = event.pageY;

  var modal = document.getElementById('cmpt225modal');
modal.style.position = "absolute";
modal.style.position = "fixed";
modal.style.display = "block";
}

function showmacm101(){
  var x = event.pageX;
  var y = event.pageY;

  var modal = document.getElementById('macmmodal');
modal.style.position = "absolute";
modal.style.position = "fixed";
modal.style.display = "block";
}

function showmacm1012(){
  var x = event.pageX;
  var y = event.pageY;

  var modal = document.getElementById('macm2modal');
modal.style.position = "absolute";
modal.style.position = "fixed";
modal.style.display = "block";
}
function showcrim101(){
  var x = event.pageX;
  var y = event.pageY;

  var modal = document.getElementById('crim101modal');
modal.style.position = "absolute";
modal.style.position = "fixed";
modal.style.display = "block";
}

function showcogs100(){
  var x = event.pageX;
  var y = event.pageY;

  var modal = document.getElementById('cogs100modal');
modal.style.position = "absolute";
modal.style.position = "fixed";
modal.style.display = "block";
}
function showphil100(){
  var x = event.pageX;
  var y = event.pageY;

  var modal = document.getElementById('phil100modal');
modal.style.position = "absolute";
modal.style.position = "fixed";
modal.style.display = "block";
}
function showarch131(){
  var x = event.pageX;
  var y = event.pageY;

  var modal = document.getElementById('arch131modal');
modal.style.position = "absolute";
modal.style.position = "fixed";
modal.style.display = "block";
}

function showbpk142(){
  var x = event.pageX;
  var y = event.pageY;

  var modal = document.getElementById('bpk142modal');
modal.style.position = "absolute";
modal.style.position = "fixed";
modal.style.display = "block";
}
function showcmpt1662(){
  var x = event.pageX;
  var y = event.pageY;

  var modal = document.getElementById('cmpt1662modal');
modal.style.position = "absolute";
modal.style.position = "fixed";
modal.style.display = "block";
}

function showcogs1002(){
  var x = event.pageX;
  var y = event.pageY;

  var modal = document.getElementById('cogs1002modal');
modal.style.position = "absolute";
modal.style.position = "fixed";
modal.style.display = "block";
}
function showarch100(){
  var x = event.pageX;
  var y = event.pageY;

  var modal = document.getElementById('arch100modal');
modal.style.position = "absolute";
modal.style.position = "fixed";
modal.style.display = "block";
}
function showbus237(){
  var x = event.pageX;
  var y = event.pageY;

  var modal = document.getElementById('bus237modal');
modal.style.position = "absolute";
modal.style.position = "fixed";
modal.style.display = "block";
}
function closeallinfo(){
  var senderElement = event.target;
  console.log(senderElement);

if(senderElement != document.getElementById('iat309c')){
 var modal = document.getElementById('iat309modal');
 modal.style.display = "none";
}
if(senderElement != document.getElementById('iat103c')){
 var modal = document.getElementById('iat103modal');
 modal.style.display = "none";
}
if(senderElement != document.getElementById('cmpt166c')){
 var modal = document.getElementById('cmpt166modal');
 modal.style.display = "none";
}
if(senderElement != document.getElementById('cmpt225c')){
 var modal = document.getElementById('cmpt225modal');
 modal.style.display = "none";
}
if(senderElement != document.getElementById('macm101c')){
 var modal = document.getElementById('macmmodal');
 modal.style.display = "none";
}
if(senderElement != document.getElementById('crim101c')){
 var modal = document.getElementById('crim101modal');
 modal.style.display = "none";
}
if(senderElement != document.getElementById('cogs100c')){
 var modal = document.getElementById('cogs100modal');
 modal.style.display = "none";
}
if(senderElement != document.getElementById('cogs1002c')){
 var modal = document.getElementById('cogs1002modal');
 modal.style.display = "none";
}
if(senderElement != document.getElementById('phil100c')){
 var modal = document.getElementById('phil100modal');
 modal.style.display = "none";
}
if(senderElement != document.getElementById('arch131c')){
 var modal = document.getElementById('arch131modal');
 modal.style.display = "none";
}
if(senderElement != document.getElementById('bpk142c')){
 var modal = document.getElementById('bpk142modal');
 modal.style.display = "none";
}
if(senderElement != document.getElementById('cmpt1662c')){
 var modal = document.getElementById('cmpt1662modal');
 modal.style.display = "none";
}
if(senderElement != document.getElementById('macm1012c')){
 var modal = document.getElementById('macm2modal');
 modal.style.display = "none";
}
if(senderElement != document.getElementById('arch100c')){
 var modal = document.getElementById('arch100modal');
 modal.style.display = "none";
}
if(senderElement != document.getElementById('bus237c')){
 var modal = document.getElementById('bus237modal');
 modal.style.display = "none";
}
}
