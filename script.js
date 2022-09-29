var context = new AudioContext()
var sound = context.createOscillator()
var volume = new GainNode(context,{gain:0.1})
var frequency = 1
var pitch = true
let frequency_change_val = 100
let time_out = 100
let maininterval;
let range_witdh = 500
let pitch_point = 300
sound.start()
var connected = false
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
    console.log(time_out)
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
}