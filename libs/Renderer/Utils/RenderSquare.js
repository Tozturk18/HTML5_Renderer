/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/14/2023
 * Last edited on 03/16/2023
 * File Name: RenderLine.js
 * 
 * Description:
 * This script contains the HTML5 Canvas script to render
 * a Square or a rectangle with given height, length, and depth values.
 * This allows to draw regular squares, rectangles, cubes with ease.
 * Compared to BasicRender this function allows for a simpler way to  generate cubes.
 * 
 * Insparations:
 * Three.js
 */

/* --- renderSquare() --- 
 *  This function renders a Cube Object with given parameters.
 *
 *  Parameters:
 *  -   object: This is the object to render using the QuareRenderer
 *  -   camera: This is the camera used in rendering the object with perspective
 *  -   renderer: This is the renderer object, that contains the Canvas DOMElement
 *
 * Returns:
 *  -   NULL
*/
function renderSquare( object, camera, renderer ) {

    object.geometry.path = new Path2D();

    renderer.ctx.save();
    renderer.ctx.beginPath();

    // Move to the Origin of the Object
    object.geometry.path.moveTo( 
        (object.position.x) * camera.aspect, 
        -(object.position.y) * camera.aspect 
    );

    object.geometry.vertexes.forEach(vertex => {
        
        // Move to the Next Vector of the Object
        object.geometry.path.lineTo( 
            (object.position.x + vertex.x - vertex.x*0.00001*camera.FOV*vertex.z ) * camera.aspect, 
            -(object.position.y + vertex.y - vertex.y*0.00001*camera.FOV*vertex.z) * camera.aspect
        );

    });

    // Fix the Line Break issue
    object.geometry.path.lineTo(
        (object.position.x + object.geometry.vertexes[0].x - object.geometry.vertexes[0].x*0.00001*camera.FOV*object.geometry.vertexes[0].z ) * camera.aspect, 
        -(object.position.y + object.geometry.vertexes[0].y - object.geometry.vertexes[0].y*0.00001*camera.FOV*object.geometry.vertexes[0].z) * camera.aspect
    );

    renderer.ctx.closePath();

    if (object.material.stroke) {
        renderer.ctx.strokeStyle = object.material.strokeColor;
        renderer.ctx.lineWidth = object.material.strokeWidth;
        renderer.ctx.stroke(object.geometry.path);
    }
    
    if (object.material.fill) {
        renderer.ctx.fillStyle = object.material.color;
        renderer.ctx.fill(object.geometry.path);
    }

    renderer.ctx.restore();

} /* --- End of renderLine() --- */

/* --- Exports --- */
export {
    renderSquare
}
/* --- End of Exports --- */