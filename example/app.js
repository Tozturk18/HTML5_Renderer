import * as Hyper from '../libs/HyperJS.js';

const renderer = new Hyper.Renderer( window.innerWidth, window.innerHeight );

const scene = new Hyper.Scene();

const camera = new Hyper.Camera( 1, 1 );

console.log("Hello!");

const lineGeometry = new Hyper.LineGeometry( 200, 100, 10);
const lineMaterial = new Hyper.BasicMaterial({
    strokeColor: "#ff0000",
    strokeWidth: 10
});

const line = new Hyper.Mesh( lineGeometry,lineMaterial );

scene.add(line);

renderer.render(scene,camera);