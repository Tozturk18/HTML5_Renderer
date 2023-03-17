/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/14/2023
 * Last edited on 03/14/2023
 * File Name: Mesh.js
 * 
 * Description:
 * This script creates a Mesh Object that will be rendered.
 * 
 * Imports:
 * - Vector3    HyperJS 3D Vector Object
 * - Quaternion HyperJS Quaternion Object
 * 
 * Insparations:
 * Three.js
 */

/* --- Imports --- */
import { Vector3 } from "../Utils/Vector3/Vector3.js";
//import { Quaternion } from "../Utils/Quaternion/Quaternion.js";
/* --- End of Imports --- */

/* --- MESH --- 
 *  The Mesh Object stores the Geometry and the Material properties
 *  of the object to render
 * 
 *  Constructor Parameters:
 *  -   Geometry: The Geometry of the Mesh to be rendered
 *  -   Material: The Material of the Mesh to be rendered
 * 
 *  Methods:
 *  -   rotate(): Allows for the rotation of the Mesh around an axis
*/
class Mesh {

    /* --- Constructor --- */
    constructor( geometry, material ) {

        // Save the paramters
        this.geometry = geometry || null;
        this.material = material || null;

        this.position = new Vector3(0,0,0);
        //this.rotation = new Quaternion(0,0,0,1);

        // Line Mesh Color Failsafe
        if (this.geometry.type == "Line") {
            if (this.material.type != "Basic") {
                console.log("Cannot have a GradientMaterial on a line");
                return;
            } else if (this.material.color != "#ffffff") {
                this.material.strokeColor = this.material.color;
            }
        }

    } /* --- End of Constructor --- */

    /* --- rotate() --- */
    /* This function allows for the rotation of this Mesh around a specific vector.
     * This function uses a Quaternion to rotate.
     * This function extends the rotate() function on HYPER Vector3 object
     * 
     * Parameters:
     * - Quaternion: This is the Quaternion used to rotate.
     * 
     * Returns:
     * - NULL
     */
    rotate( quaternion ) {
        
        // Iterate through each vertex in the Mesh
        this.geometry.vertexes.forEach( (vertex) => {
            
            // Rotate each vertex around the Quaterion
            vertex.rotate(quaternion);
        });
    } /* --- End of rotate() --- */

} /* --- End of Mesh --- */

/* --- Exports --- */
export {
    Mesh
};
/* --- End of Exports --- */