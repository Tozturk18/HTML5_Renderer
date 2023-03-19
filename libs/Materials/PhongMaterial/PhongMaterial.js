/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/16/2023
 * Last edited on 03/16/2023
 * File Name: PhongMaterial.js
 * 
 * Description:
 * This script contains the code to create a phong material library for
 * creating meshes in HyperJS.
 * This PhongMaterial Object extends from the BasicMaterial however,
 * it allows shadow casting, reflections, and roughness on the surface.
 * 
 * Insparations:
 * Three.js
 */

/* --- PhongMaterial --- 
 *  The PhongMaterial Object controls the material properties of a Mesh
 *  rendered. These properties extends from the BasicMaterials and adds
 *  reflection and roughness.
 *  width, and map (fill) an image.
 *  Constructor Parameters:
 *  -   Values: a JSON variable that holds the values for each BasicMaterial Properties
*/
class PhongMaterial {

    /* --- Constructor --- */
    constructor( values ) {

        // Save the fill color
        this.color = values.color || "#ffffff";
        // Save the fill preference
        this.fill = values.fill || false;

        // Save the stroke color
        this.strokeColor = values.strokeColor || "#000000"
        // Save the stroke width
        this.strokeWidth = values.strokeWidth || 1;
        // Save the stroke preference
        this.stroke = values.stroke || true;

        // Save the mapped image
        this.map = values.map || null;
        // Save the opacity
        this.opacity = values.opacity || 1;
        // Save the type of Material
        this.type = "Phong";
    } /* --- End of Constructor --- */

}

/* --- Exports --- */
export {
    PhongMaterial
}
/* --- End of Exports --- */