/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/14/2023
 * Last edited on 03/14/2023
 * File Name: RenderLine.js
 * 
 * Description:
 * This script contains the HTML5 Canvas script to render
 * a line between 2 given points in the coordinate HyperJS
 * coordinate system.
 * 
 * Insparations:
 * Three.js
 */

/* --- renderLine() --- 
 *  This function 
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