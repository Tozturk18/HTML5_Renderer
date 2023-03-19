/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/16/2023
 * Last edited on 03/16/2023
 * File Name: RenderLight.js
 * 
 * Description:
 * This script is a primary script to render lights as a
 * source of light with a concentration of light sphere around it.
 * This file acts as a temporary rendering script for a 
 * light object. However when different light types are
 * programmed then they ill have their own files.
 * 
 * Insparations:
 * Three.js
 */

import { Vector3 } from "../../Utils/Vector3/Vector3.js";

/* --- renderLight() --- 
 *  This function renders the Light Object with given parameters.

 *  Parameters:
 *  -   object: This is the object to render using the LightRenderer
 *  -   camera: This is the camera used in rendering the object with perspective
 *  -   renderer: This is the renderer object, that contains the Canvas DOMElement
 *
 * Returns:
 *  -   NULL
*/
function renderLight( object, camera, renderer ) {

    object.path = new Path2D();

    renderer.ctx.save();
    renderer.ctx.beginPath();

    const anchor1 = new Vector3(
        (object.position.x) * camera.aspect,
        -(object.position.y) * camera.aspect,
        0
    );

    object.path.arc(
        anchor1.x,
        anchor1.y,
        object.luminousity * camera.aspect,
        0,
        2*Math.PI
    );
        
    var grd = renderer.ctx.createRadialGradient(
    object.position.x* camera.aspect,
    -object.position.y* camera.aspect,
    object.luminousity/10,
    object.position.x* camera.aspect,
    -object.position.y* camera.aspect,
    object.luminousity
    );
    renderer.ctx.closePath();

    grd.addColorStop( 0, object.color );
    grd.addColorStop( 1, "#ffffff00" );

    renderer.ctx.fillStyle = grd;
    renderer.ctx.fill(object.path);

    renderer.ctx.restore();

} /* --- End of renderLight() --- */

/* --- Exports --- */
export {
    renderLight
}
/* --- End of Exports --- */