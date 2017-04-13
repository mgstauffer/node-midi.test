
const THREE = require('three'); // older modules are imported like this. You shouldn't have to worry about this much
import Framework from './framework'
var midi = require('midi')
//import midi from '../../libs/node-midi/midi.js'

//import our code
//
//  import ...my class... from './my-file.js'
//

// called after the scene loads
function onLoad(framework) {
  var scene = framework.scene;
  var camera = framework.camera;
  var renderer = framework.renderer;
  var gui = framework.gui;
  var stats = framework.stats;
  
  // set camera position
  camera.position.set(0, 20, 20);
  camera.lookAt(new THREE.Vector3(0,0,0));
  camera.fov = 40;
  camera.updateProjectionMatrix();
  //scene.add(adamCube);

  // edit params and listen to changes like this
  // more information here: https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage
  gui.add(camera, 'fov', 0, 180).onChange(function(newVal) {
    camera.updateProjectionMatrix();
  });

  //add an object
  var geom = new THREE.CubeGeometry(2,3,4);
  var material = new THREE.MeshBasicMaterial( 0x5500aa );
  var mesh = new THREE.Mesh(geom, material);
  scene.add( mesh );

  //test node-midi

}

//////
//
// called on frame updates
//
function onUpdate(framework) {
  //console.log(`the time is ${new Date()}`);
  var msec = Date.now();
  var dTimeSec = (msec - framework.prevTime) / 1000.0;
  if( typeof framework.crowd != 'undefined'){
    framework.prevTime = msec;
  }
  //console.log(adamMaterial.uniforms.uTimeMsec.value);
}

// when the scene is done initializing, it will call onLoad, then on frame updates, call onUpdate
Framework.init(onLoad, onUpdate);