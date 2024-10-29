const clock = document.querySelector('.clock');
function runclock() {
  var time = new Date();

  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var txt = "AM";
  if (hrs > 12) {
    hrs = hrs - 12;
    txt = "PM";
  }
  else if (hrs == 0) {
    hrs = 12;
    txt = "AM";
  }
  if (hrs < 10) {
    hrs = '0' + hrs;
  }
  if (min < 10) {
    min = '0' + min;
  }
  if (sec < 10) {
    sec = '0' + sec;
  }
  clock.innerHTML = `${hrs} : ${min} : ${sec} : ${txt}`;


  // another type

  var h=document.querySelectorAll('.h');
  var m=document.querySelectorAll('.m');
var s=document.querySelectorAll('.s');
hrs=hrs.toString();
h[0].innerHTML=hrs[0];
 h[1].innerHTML=hrs[1];
min=min.toString();
  m[0].innerHTML=min[0];
  m[1].innerHTML=min[1];
sec=sec.toString();
  s[0].innerHTML=sec[0];
  s[1].innerHTML=sec[1];
  
}


runclock();
setInterval(runclock,1000);

