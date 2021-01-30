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

    if (time <= '03:00:00'){
        typeWriter('hai tasya.. tidur udah malem hehehe')
    }

    if (time <= '11:00:00'){
        typeWriter('haii tasya..good morning, have a good day yaaaa')
    }

    if (time <= '15:00:00'){
        typeWriter('haii tasya, selamat siangg, semoga harimu menyenangkan yaa hehehe')
    }
    

    if (time <= '18:00:00'){
        typeWriter('haii tasya..selamat sore, bagai mana hari mu? semoga harimu menyenangkan yaa hehehe')
    }

    if (time <= '23:59:00'){
        typeWriter('haii tasya.. selamat malam, bagai mana hari mu? jangan tidur malem-malem yaaaa')
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
