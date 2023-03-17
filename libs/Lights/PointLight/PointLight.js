/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/14/2023
 * Last edited on 03/14/2023
 * File Name: LineGeometry.js
 * 
 * Description:
 * This script contains the barebones of point light object
 * that has a qualities of a point light such as luminousity
 * 
 * Imports:
 * - Vector3.js  HyperJS 3D Vector Library
 * 
 * Insparations:
 * - Three.js
 */

/* --- Imports --- */
import { Vector3 } from '../../Utils/Vector3/Vector3.js';
/* --- End of Imports --- */

/* --- POINT LIGHT --- 
 *  The Point Light object allows users to cast light and shadows
 *  on an from objects. This allows for a better immersion of 3D world.
 * 
 *  Constructor Parameters:
 *  -   position:       The position of the point light object as Vector3
 *  -   luminousity:    The limunosity of the point light object
 *  -   color:          The color of the light
 * 
 *  Methods:
 *  -   NULL
 */
class PointLight {

    /* --- Constructor --- */
    constructor( position, luminousity, color ) {

        // Save the paramters
        this.position = position || new Vector3( 0, 0, 0 );
        this.luminousity = luminousity || 10;
        this.color = color || "#ffffff";

        this.type = "Light"

        this.path = new Path2D();

    } /* --- End of Constructor() --- */
} /* --- End of PointLight --- */

/* --- Exports --- */
export {
    PointLight
};
/* --- End of Exports --- */