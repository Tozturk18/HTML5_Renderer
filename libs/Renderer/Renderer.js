/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/13/2023
 * Last edited on 03/14/2023
 * File Name: Renderer.js
 * 
 * Description:
 * This script contains the code for Renderer object that allows
 * 2D (and/or 3D) rendering using HTML5 Canvas
 * 
 * 
 * Insparations:
 * Three.js
 */

import { renderLine } from "./Utils/RenderLine.js";

/* --- RENDERER --- 
 *  The renderer object instantiates the canvas to render the 2D and/or
 *  3D objects and creates the environment to play around.
 *  Constructor Parameters:
 *  -   Width: This is the width of the Renderer (Ideally Width = window.innerWidth)
 *  -   Height: This is the height of the Renderer (Ideally Height = window.innerHeight)
 *
 *  Methods:
 *  -   setSize( width, height );       // Sets the size of the renderer to the given width and height
 *  -   render( scene, camera );        // Renders the current scene (List of objects) according to the camera object
 *  -   #renderObject( scene, camera ); // Private Method, Renders each object in the scene one by one
 * 
 * Imported Methods:
 *  -   renderLine( object, camera );  // Using HTML5 Canvas script render a given Line Object
 *  -   renderSquare( object, camera );// Using HTML5 Canvas script render a given Square Object
 *  -   renderCircle( object, camera );// Using HTML5 Canvas script render a given Circle Object
 *  -   renderText( object, camera );  // Using HTML5 Canvas script render a given Text Object
 *  -   renderPolygon( object, camera);// Using HTML5 Canvas script render a given Polygone Object (These are regular polygones with given # sides)
 *  -   renderVertex( object, camera );// Using HTML5 Canvas script render a given Vertex Object (These are irregular polygones with given verticies)
*/
class Renderer {

    /* --- CONSTRUCTOR --- */
    constructor( width, height ) {

        // Store the given parameters Globally
        this.width = width;
        this.height = height;

        // Instantiate an HTML5 Canvas element
        this.domElement = document.createElement('canvas');

        // Append the new Canvas DOMElement to BODY of HTML
        document.querySelector('body').append(this.domElement);

        // Fit the Canvas
        this.domElement.width = width;
        this.domElement.height = height;

        // Get Canvas Context
        this.ctx = this.domElement.getContext('2d'); // This is the basis of our 2D (and 3D) rendering
        
        /* Change coordinate system from (0,0) being the top right corner
         * to (0,0) being the very midle of the screen.
         */
        this.ctx.translate( this.width/2, this.height/2 );
        this.ctx.moveTo( this.width/2, this.height/2 );

        // Disable Right Click for user experience (you can remove it)
        this.domElement.oncontextmenu = function(e) { e.preventDefault(); e.stopPropagation(); }

    } /* --- End of Constructor --- */

    /* --- setSize() --- */
    /* Change the size of the renderer
     * Parameters:
     * -    width: The new width of the rendering element
     * -    height: The new height of the rendering element
     * Return:
     * -    NULL
    */
    setSize( width, height ) {

        // Store the given parameters Globally
        this.width = width;
        this.height = height;

        // Change the domElement
        this.domElement.width = this.width;
        this.domElement.height = this.height;
    } /* --- End of setSize() --- */

    /* --- render() --- */
    /* Render the current objects in the scene using HTML5 Canvas
     * Parameters:
     * -    scene: The scene object containing all the other screen objects
     * -    camera: The camera to render with
     * Return:
     * -    NULL
    */
    render( scene, camera ) {

        // Refresh the Canvas domElement
        this.domElement.width+=0; // causes the canvas to resize (to the same size)

        // Refresh the camera aspect ratio
        camera.aspect = this.width/this.height;

        // Iterate through each object in the scene and render one by one
        this.#renderObject( scene, camera );
    } /* --- End of render() --- */

    /* --- #renderObject() --- */
    /* Iterate through each element in the scene and render them
     * using specific HTML5 Canvas script
     * Parameters:
     * -    scene: The scene object containing all the other screen objects
     * -    camera: The camera to render with
     * Returns:
     * -    INT: returns 1 if the object was rendered successfully and 0 if not rendered
     */
    #renderObject( scene, camera ) {

        // Reset the Canvas Context with respect to the camera
        this.ctx.translate(this.width/2, this.height/2);

        // Iterate through each object in the scene
        scene._objects.forEach(object => {
            
            switch (object.geometry.type) {
                case "Line":
                    renderLine( object, camera, this );
                    console.log("Renered a Line Object!\n");
                    break;

                case "Square":
                    
                    break;

                case "Circle":
                    
                    break;

                case "Text":
                    
                    break;

                case "Polygon":
                    
                    break;

                case "Vertex":
                    
                    break;
            
                default:
                    console.log("Could not render " + object.geometry.type + "!\n");
                    return 0;
                    break;
            }

            return 1;

        });

    } /* --- End of #renderObject() --- */

} /* --- End of RENDERER --- */

export { Renderer };