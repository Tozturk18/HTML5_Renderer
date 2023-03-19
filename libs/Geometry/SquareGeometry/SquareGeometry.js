/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/16/2023
 * Last edited on 03/16/2023
 * File Name: SquareGeometry.js
 * 
 * Description:
 * This script creates the object which hold the geometrical
 * information to draw a Square, a Rectangle, and a Cube from the given Mesh position
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

/* --- SQUARE GEOMETRY --- 
 *  The Square Geomtry Object is a geometrical object to
 *  generate a Square, Rectangle, Cube Mesh
 * 
 *  Constructor Parameters:
 *  -   length:  The length of the Mesh
 *  -   height:  The height of the Mesh
 *  -   depth:   The depth (width) of  the Mesh
 * 
 *  Methods:
 *  -   NULL
 */
class SquareGeometry {

    /* --- Constructor --- */
    constructor( length = 10, height = 10, depth = 0 ) {

        this.length = length;
        this.height = height;
        this.depth = depth;

        // Save the parameters as a Vector3
        this.vertexes = [
            new Vector3( length, 0, 0 ),
            new Vector3( length, height, 0 ),
            new Vector3( 0, height, 0),
            new Vector3( 0, 0, 0)
        ];

        // Save the type of the geometry
        this.type = "Square";

        // Initialize a HTML5 Canvas 2D Path to store the drawing as an object
        this.path = new Path2D();

    } /* --- End of Constructor --- */

} /* --- End of SquareGeometry --- */

/* --- Exports --- */
export {
    SquareGeometry
};
/* --- End of Exports --- */