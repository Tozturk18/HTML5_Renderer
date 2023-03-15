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
import { Quaternion } from "../Utils/Quaternion/Quaternion.js";
/* --- End of Imports --- */

/* --- MESH --- 
 *  The Mesh Object stores the Geometry and the Material properties
 *  of the object to render and 
 *  Constructor Parameters:
 *  -   Geometry: The Geometry of the Mesh to be rendered
 *  -   Material: The Material of the Mesh to be rendered
*/
class Mesh {

    /* --- Constructor --- */
    constructor( geometry, material ) {

        // Save the paramters
        this.geometry = geometry || null;
        this.material = material || null;

        this.position = new Vector3(0,0,0);
        this.rotation = new Quaternion(0,0,0,1);

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

} /* --- End of Mesh --- */

/* --- Exports --- */
export {
    Mesh
};
/* --- End of Exports --- */