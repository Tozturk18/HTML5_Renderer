/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/14/2023
 * Last edited on 03/14/2023
 * File Name: RenderLine.js
 * 
 * Description:
 * This script contains the HTML5 Canvas script to render
 * a line between 2 given points in the coordinate HyperJS
 * coordinate system.
 * 
 * Insparations:
 * Three.js
 */

/* --- renderLine() --- 
 *  This function renders the Line Object with given parameters.

 *  Parameters:
 *  -   object: This is the object to render using the LineRenderer
 *  -   camera: This is the camera used in rendering the object with perspective
 *  -   renderer: This is the renderer object, that contains the Canvas DOMElement
 *
 * Returns:
 *  -   NULL
*/
function renderLine( object, camera, renderer, lights ) {

    // Create a new HTML5 Canvas Path
    object.geometry.path = new Path2D();

    // Save the Canvas Context
    renderer.ctx.save();
    // Begin the Path
    renderer.ctx.beginPath();

    // Move to the Origin of the Object
    object.geometry.path.moveTo( 
        object.position.x * camera.aspect, 
        object.position.y * camera.aspect 
    );

    // Move to the Next Vector of the Object
    object.geometry.path.lineTo( 
        object.position.x + object.geometry.vertexes[0].x * camera.aspect, 
        object.position.y + object.geometry.vertexes[0].y * camera.aspect
    );

    // Check if the stroke enabled
    if (object.material.stroke) {
        // Create a stroke for the object
        renderer.ctx.strokeStyle = object.material.strokeColor;
        renderer.ctx.lineWidth = object.material.strokeWidth;
        renderer.ctx.stroke(object.geometry.path);
    }

    // Finish and Close the Path
    renderer.ctx.closePath();
    // Restore the Canvas Context
    renderer.ctx.restore();

} /* --- End of renderLine() --- */

/* --- Exports --- */
export {
    renderLine
}
/* --- End of Exports --- */