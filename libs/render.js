/* Render Library
 * Created by Ozgur Tuna Ozturk on 03/13/2023
 * File Name: render.js
 * 
 * Description:
 * This script uses the default HTML5 Canvas programming to create
 * 2D and 3D renderings.
 * 
 * Insparations:
 * Three.js
 */

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
 *  -   #sceneIterate( scene, camera ); // This is a private method that is used by render() to render each object in the scene one by one
 *  -   #renderLine( object, camera );  // Using HTML5 Canvas script render a given Line Object
 *  -   #renderSquare( object, camera );// Using HTML5 Canvas script render a given Square Object
 *  -   #renderCircle( object, camera );// Using HTML5 Canvas script render a given Circle Object
 *  -   #renderText( object, camera );  // Using HTML5 Canvas script render a given Text Object
 *  -   #renderPolygon( object, camera);// Using HTML5 Canvas script render a given Polygone Object (These are regular polygones with given # sides)
 *  -   #renderVertex( object, camera );// Using HTML5 Canvas script render a given Vertex Object (These are irregular polygones with given verticies)
*/
class Renderer {

    /* --- CONSTRUCTOR --- */
    constructor( width, height ) {

        // Store the given parameters Globally
        this.width = width;
        this.height = height;

        // Instantiate an HTML5 Canvas element
        this.domElement = document.createElement('canvas');

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
    // Change the size of the renderer
    setSize( width, height ) {

        // Store the given parameters Globally
        this.width = width;
        this.height = height;

        // Change the domElement
        this.domElement.width = this.width;
        this.domElement.height = this.height;
    } /* --- End of setSize() --- */



} /* --- End of RENDERER --- */