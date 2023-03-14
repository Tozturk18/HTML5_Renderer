/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/14/2023
 * Last edited on 03/14/2023
 * File Name: BasicMaterials.js
 * 
 * Description:
 * This script contains the code to create a basic material library for
 * creating meshes in HyperJS.
 * This BasicMaterial Object can determine the (fill) color, stroke color,
 * stroke width, opacity, and whether to map an image onto the Mesh.
 * 
 * Insparations:
 * Three.js
 */

/* --- BasicMaterial --- 
 *  The BasicMaterial Object controls the material properties of a Mesh
 *  rendered. These properties are the (fill) color, stroke color, stroke
 *  width, and map (fill) an image.
 *  Constructor Parameters:
 *  -   Values: a JSON variable that holds the values for each BasicMaterial Properties
*/
class BasicMaterial {

    /* --- Constructor --- */
    constructor( values ) {

        // Save the fill color
        this.color = values.color || "#ffffff";
        // Save the stroke color
        this.strokeColor = values.strokeColor || "#000000"
        // Save the stroke width
        this.strokeWidth = values.strokeWidth || 1;
        // Save the mapped image
        this.map = values.img || null;
        // Save the opacity
        this.opacity = values.opacity || 1;
        // Save the type of Material
        this.type = "Basic";
    } /* --- End of Constructor --- */

}

/* --- Exports --- */
export {
    BasicMaterial
}
/* --- End of Exports --- */