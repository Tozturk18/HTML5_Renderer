/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/14/2023
 * Last edited on 03/14/2023
 * File Name: Vector3.js
 * 
 * Description:
 * This script creates a 3 Dimensional Vector which can be
 * used for positioning objects in the Renderer
 * 
 * Insparations:
 * Three.js
 */

/* --- VECTOR3 --- 
 *  The Vector3 Object is a 3 dimensional vector.
 *  Constructor Parameters:
 *  -   x:  The X Coordinate of the Vector
 *  -   y:  The Y Coordinate of the Vector
 *  -   z:  The Z Coordinate of the Vector
 *  Methods:
 *  -   NULL
*/
class Vector3 {

    /* --- Constructor --- */
    constructor( x, y, z ) {

        // Save the parameters
        this.x = x;
        this.y = y;
        this.z = z;

        this.length = Math.sqrt(x*x + y*y + z*z);
        this.angle = [ Math.atan2( x, y ), Math.atan2( x, z ) ];

    } /* --- End of Constructor --- */

} /* --- End of Vector3 --- */

/* --- Exports --- */
export {
    Vector3
};
/* --- End of Exports --- */