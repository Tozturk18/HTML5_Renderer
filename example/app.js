import * as Hyper from '../libs/HyperJS.js';

const renderer = new Hyper.Renderer( window.innerWidth, window.innerHeight );

const scene = new Hyper.Scene();

const camera = new Hyper.Camera( 10, 10);

console.log("Hello!");

const quat = new Hyper.Quaternion( 0, 1, 0, 1.57079632679 );

const vector = new Hyper.Vector3( 1, 0, 0 );

camera.bind( ["Mouse"] );

camera.update();

vector.rotate( quat );

console.log(quat);
console.log(vector);