/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/14/2023
 * Last edited on 03/14/2023
 * File Name: LineGeometry.js
 * 
 * Description:
 * This script creates the object which hold the geometrical
 * information to draw a line from the given Mesh position
 * to the given geometry position
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

/* --- LINE GEOMETRY --- 
 *  The Line Geomtry Object is a geometrical object to
 *  generate a Line Mesh
 *  Constructor Parameters:
 *  -   x_end:  The 2nd X Coordinate of the Line Mesh
 *  -   y_end:  The 2nd Y Coordinate of the Line Mesh
 *  -   z_end:  The 2nd Z Coordinate of the Line Mesh
 *  Methods:
 *  -   NULL
 */
class LineGeometry {

    /* --- Constructor --- */
    constructor( x_end, y_end, z_end ) {

        // Save the parameters as a Vector3
        this.endPosition = new Vector3( x_end, y_end, z_end );

        // Save the type of the geometry
        this.type = "Line";

        // Initialize a HTML5 Canvas 2D Path to store the drawing as an object
        this.path = new Path2D();

    } /* --- End of Constructor --- */

} /* --- End of LineGeometry --- */

/* --- Exports --- */
export {
    LineGeometry
};
/* --- End of Exports --- */