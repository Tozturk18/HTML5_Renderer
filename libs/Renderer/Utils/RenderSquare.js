/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/14/2023
 * Last edited on 03/14/2023
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

import { Vector3 } from "../../Utils/Vector3/Vector3.js";

/* --- renderLine() --- 
 *  This function renders a Cube Object with given parameters.

 *  Parameters:
 *  -   height: This is the height of the Cube
 *  -   length: This is the length of the Cube
 *  -   depth: This is the depth (or the Width) of the Cube
 *
 * Returns:
 *  -   NULL
*/
function renderSquare( object, camera, renderer ) {

    object.geometry.path = new Path2D();

    renderer.ctx.save();
    renderer.ctx.beginPath();

    const anchor1 = new Vector3(
        (object.position.x - object.geometry.vertexes[0].x/2) * camera.aspect,
        -(object.position.y - object.geometry.vertexes[0].y/2) * camera.aspect,
        0
    );

    const anchor2 = new Vector3(
        object.geometry.vertexes[0].x * camera.aspect,
        -(object.geometry.vertexes[0].y) * camera.aspect,
        0
    );

    object.geometry.path.rect(
        anchor1.x,
        anchor1.y,
        anchor2.x,
        anchor2.y
    );

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