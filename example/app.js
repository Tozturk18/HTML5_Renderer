import * as HYPER from '../libs/HYPERJS.js';

const renderer = new HYPER.Renderer( window.innerWidth, window.innerHeight );

const scene = new HYPER.Scene();

const camera = new HYPER.Camera( window.innerWidth/window.innerHeight, 1 );

const basicGeometry = new HYPER.BasicGeometry([
    new HYPER.Vector3(0,0,0),
    new HYPER.Vector3(200,0,0), 
    new HYPER.Vector3(200,100,0)
]);
//const lineGeometry = new HYPER.LineGeometry( 200, 100, 0);
const lineMaterial = new HYPER.BasicMaterial({
    color:          "#00ff00",
    strokeColor:    "#ff0000",
    strokeWidth:    1
});

//const line = new HYPER.Mesh( lineGeometry,lineMaterial );
const line = new HYPER.Mesh( basicGeometry,lineMaterial );

line.position = new HYPER.Vector3(200,0,0);

scene.add(line);

renderer.render(scene,camera);

function animate() {
    requestAnimationFrame(animate);

    line.rotate( new HYPER.Quaternion(0,1,0,0.005) );

    //line.geometry.endPosition.rotate( new HYPER.Quaternion(0,0,1,0.1) );

    //console.log(line.geometry.endPosition);

    renderer.render(scene,camera);
}

animate();


window.onresize = () => {
    renderer.setSize( window.innerWidth, window.innerHeight );
};