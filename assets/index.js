function startTime() {

    var x = document.getElementById("myAudio");
    var today = new Date();
    var d = today.getDate();
    var M = today.getMonth();
    var y = today.getFullYear();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var b = M + 1

    var time = h + ":" + m + ":" + s;
    var date = d + " / " + b + " / " + y;

    document.getElementById('time').innerHTML =
    time;   

    document.getElementById('date').innerHTML =
    date;   
    var t = setTimeout(startTime, 500);

    x.play();

    if (time < '03:00:00'){
        typeWriter('hai mayy.. tidur udah malem hehehe  -fadhil')
    }

    if (time < '10:00:00'){
        typeWriter('haii mayy..good morning, have a good day yaaaa -fadhil')
    }

    if (time < '20:00:00'){
        typeWriter('haii mayy, gimana hari nya? semoga menyenangkan yaa hehehe -fadhil')
    }
    

    if (time <= '23:59:00'){
        typeWriter('haii mayy..good night, gimana hari ini? semoga menyenangkan yaa hehehe, jangan tidur malem-malem yaaaa -fadhil')
    }
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

var i = 0;
var speed = 100000;

function typeWriter(txt) {
  if (i < txt.length) {
    document.getElementById("msg").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var nodesjs = new NodesJs({
    id: 'nodes',
    width: window.innerWidth,
    height: window.innerHeight,
    particleSize: 2,
    lineSize: 1,
    particleColor: [255, 255, 255, 0.3],
    lineColor: [255, 255, 255],
    backgroundFrom: [237, 151, 57],
    backgroundTo: [242, 127, 0],
    backgroundDuration: 4000,
    nobg: false,
    number: window.hasOwnProperty('orientation') ? 30: 100,
    speed: 20,
    pointerCircleRadius: 150
});

 

