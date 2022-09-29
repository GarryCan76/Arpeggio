let context = new AudioContext();
let sound = context.createOscillator();
let volume = new GainNode(context,{gain:0.1});
let frequency = 1;
let pitch = true;
let frequency_change_val = 100;
let time_out = 100;
let maininterval;
let range_witdh = 500;
let pitch_point = 300;
let connected = false;
const visual_fs = [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20];

sound.start()
volume.connect(context.destination)
function play() {
    if (connected === false){
        context.resume()
        sound.connect(volume)
        connected = true
    } else {
        connected = false
        sound.disconnect(volume)
    }
    console.log(connected)
}
volslider.oninput = function (){
    volslider_span.innerHTML = this.value
    volume.gain.value = this.value
}
frequency_change.oninput = function () {
    frequency_change_span.innerHTML = this.value
    frequency_change_val = parseInt(this.value);
}
timer.oninput = function () {
    timer_span.innerHTML = this.value
    time_out = parseInt(this.value)
    clearInterval(maininterval)
    maininterval = setInterval(picher, time_out)
}
range.oninput = function () {
    range_span.innerHTML = this.value
    range_witdh = parseInt(this.value)
}
pitcher.oninput = function () {
    pitch_span.innerHTML = this.value
    pitch_point = parseInt(this.value)
}
maininterval = setInterval(picher,time_out)
function picher() {
    if (pitch === true){
        frequency = frequency + frequency_change_val;
        if (frequency > pitch_point + range_witdh){
            pitch = false;
        }
        sound.frequency.value = frequency;
    } else if (pitch === false){
        frequency = frequency - frequency_change_val;
        if (frequency < pitch_point){
            pitch = true;
        }
        sound.frequency.value = frequency;
    }
    visual_fs.shift()
    visual_fs.push(frequency / 10)
    console.log(visual_fs)
    if (connected === true) {
        document.getElementById("vnode_1").style.height = "" + visual_fs[0] + "px";
        document.getElementById("vnode_2").style.height = "" + visual_fs[1] + "px";
        document.getElementById("vnode_3").style.height = "" + visual_fs[2] + "px";
        document.getElementById("vnode_4").style.height = "" + visual_fs[3] + "px";
        document.getElementById("vnode_5").style.height = "" + visual_fs[4] + "px";
        document.getElementById("vnode_6").style.height = "" + visual_fs[5] + "px";
        document.getElementById("vnode_7").style.height = "" + visual_fs[6] + "px";
        document.getElementById("vnode_8").style.height = "" + visual_fs[7] + "px";
        document.getElementById("vnode_9").style.height = "" + visual_fs[8] + "px";
        document.getElementById("vnode_10").style.height = "" + visual_fs[9] + "px";
        document.getElementById("vnode_11").style.height = "" + visual_fs[10] + "px";
        document.getElementById("vnode_12").style.height = "" + visual_fs[11] + "px";
    }
}