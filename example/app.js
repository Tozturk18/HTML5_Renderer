import * as HYPER from '../libs/HYPERJS.js';

const renderer = new HYPER.Renderer( window.innerWidth, window.innerHeight );

const scene = new HYPER.Scene();

const camera = new HYPER.Camera( window.innerWidth/window.innerHeight, 1 );

const squareGeometry = new HYPER.SquareGeometry(100,100,0);

const squareMaterial = new HYPER.BasicMaterial({
    color:          "#0000ff",
    fill:           true,
    strokeColor:    "#ff0000",
    strokeWidth:    5
});

const square = new HYPER.Mesh(squareGeometry, squareMaterial);

scene.add(square);

function animate() {
    requestAnimationFrame(animate);

    square.rotate( new HYPER.Quaternion(1,0,0,0.005) );

    renderer.render(scene,camera);
}

animate();


window.onresize = () => {
    renderer.setSize( window.innerWidth, window.innerHeight );
};