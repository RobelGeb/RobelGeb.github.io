var serial; // variable to hold an instance of the serialport library
var portName = 'COM5' //rename to the name of your port
var dataarray = []; //array for signal readings
var x; //variables for coordinates
var y;


function setup() {
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);       // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing
 
  serial.list();                      // list the serial ports
  serial.open(portName);              // open a serial port
  createCanvas(500, 500);
  background(100, 100, 100);
}
 
// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
   print(i + " " + portList[i]);
 }
}

function serverConnected() {
  print('connected to server.');
}
 
function portOpen() {
  print('the serial port opened.')
}
 
function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  print('The serial port closed.');
}

function serialEvent() {
  if (serial.available()) {
    var datastring = serial.readLine(); // readin some serial
    var newarray; 
    try {
      newarray = JSON.parse(datastring); // can we parse the serial
      } catch(err) {
          //console.log(err);
    }
    if (typeof(newarray) == 'object') {
      dataarray = newarray;
    }
    //maps coordinates for use in canvas
    x = map(dataarray[0], 516, 1023, 0, width);
    y = map(dataarray[1], 516, 1023, 0, height);
    //if coordinates reach the edges of the canvas, send a signal 
    //to the arduino to turn the led red until its moved back
    if (x == width || x == 0 || y == 0 || y == height) {
      serial.write(0);
    } else {
      serial.write(1);
    }
    console.log("got back " + x + " " + y);
  } 
}

//draws small circles around the canvas that emulate a line
function draw() {
  noStroke();
  fill(0);
  ellipse(x, y, 5, 5);
}