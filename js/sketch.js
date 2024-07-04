//////////////////////////
/* EDIT VALUES BELOW TO MATCH DEVICE SLIDERS*/
const CCSLIDER1 = 0;
const CCSLIDER2 = 0;
const CCSLIDER3 = 0;
const CCSLIDER4 = 0;
const CCSLIDER5 = 0;
const CCSLIDER6 = 0;
const CCSLIDER7 = 0;
const CCSLIDER8 = 0;
const CCSLIDER9 = 0;
let myController;
//////////////////////////
// built in P5 function gets called at the beginning
function setup() {
    createCanvas(innerWidth, innerHeight);
    background(0);
    WebMidi
        .enable()
        .then(onEnabled)
        .catch(err => alert(err));
}
// gets called by MIDI library once MIDI enabled
function onEnabled() {
    // Display available MIDI input devices
    if (WebMidi.inputs.length < 1) {
        console.log("No device detected.");
    } else {
        WebMidi.inputs.forEach((device, index) => {
            console.log(`${index}: ${device.name}`);
        });
    }
    myController = WebMidi.inputs[0];
    myController.channels[1].addListener("controlchange", allCC);

}
// gets called when a MIDI control change message is intercepted
function allCC(e) {
    console.log("controller number = "+e.controller.number+", value = "+ e.data[2]);
    let ratio = e.data[2] / 127
    switch (e.controller.number) {
        case CCSLIDER1: 
            break;
        case CCSLIDER2: 
            break;
        case CCSLIDER3: 
            break;
        case CCSLIDER4: 
            break;
        case CCSLIDER5: 
            break;
        case CCSLIDER6: 
            break;
        case CCSLIDER7: 
            break;
        case CCSLIDER8: 
            break;
        case CCSLIDER9:
            break;    
    }
}
// gets triggered when the space bar is pressed
function keyPressed(){
    if(key == ' '){
        drawShape(random(width), random(height))
    }
}
function drawShape(x,y) {
    circle(x, y, 10);
}
