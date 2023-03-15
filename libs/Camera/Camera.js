/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/15/2023
 * Last edited on 03/15/2023
 * File Name: Camera.js
 * 
 * Description:
 * This script is used to generate the Camera Object which allows
 * rendering to be done. The Camera Object acts as a pseudo camera
 * and the main purpose of it is to change and alter the coordinate
 * system in the Renderer to look like there is an affective camera.
 * 
 * You can have multiple camera at different locations which can be switched
 * to give instant changes of perspectives
 * 
 * Insparations:
 * Three.js
 */

/* --- Imports --- */
import { Quaternion } from "../Utils/Quaternion/Quaternion.js";
import { Vector3 } from "../Utils/Vector3/Vector3.js";
/* --- End of Imports --- */

/* --- CAMERA --- 
 *  The Camera Object is a pseudo object allowing users to
 *  enact the uses of a Camera such as aspect ratio, FOV, etc.
 *  This tool enables transitions, and perspective manupulation.
 * 
 *  Constructor Parameters:
 *  -   aspect: The aspect ratio of the camera
 *  -   FOV:    The FOV of the camera
 * 
 *  Methods:
 *  -   update():            Allows for the camera to be actively moved
 *  -   bind():              Allows for activation of key bindings
 *  -   unBindd():           Allows for deactivation of key bindings
 *  -   #bindWASDKeys():     Allows WASD keys to be used for moving the camera
 *  -   #bindArrowKeys():    Allows Arrow keys to be used for moving the camera
 *  -   #bindQEKeys():       Allows Q & E Keys to be used for rotation the camera
 *  -   #bindMouse():        Allows Mouse actions to control the camera
*/
class Camera {

    /* --- Constructor --- */
    constructor( aspect, FOV ) {

        // Save parameters
        this.aspect = aspect;
        this.FOV = FOV;

        // Set the Init position of the camera
        this.position = new Vector3(0,0,-10);

        // Set the Sensitivity for camera movements
        this.sensitivity = 5;
        this.rotationSensitivity = 0.05;

        // Set the Camera Control Modes
        this.keyMap = {};

        /* --- this.controls Definition --- */
        this.controls = [ false, false, false, false ]; 
        /* controls[0] -> MouseControl
         * controls[1] -> WASDControl
         * controls[2] -> ArrowControl
         * controls[3] -> QEControl
         */

        this.startVect = new Vector3(0,0,0);
        this.mouseDown = false;
        this.clientX = 0;
        this.clientY = 0;


    } /* --- End of Constructor --- */

    /* --- update() --- */
    /* This function allows for camera to be updated into
     * a new position or rotation. This allows for more
     * controlled manner.
     * 
     * Parameters:
     * - NULL
     * 
     * Returns:
     * - NULL
     */
    update() {

        this.controls.forEach( (control, index) => {

            // Check if the control is ON because no need to update if it's off
            if ( control ) {

                // Check the current Control to Update
                switch (index) {

                    // Update the Mouse Control
                    case 0:
                        console.log("Mouse Updated");
                        break;

                    // Update the WASD Control
                    case 1:
                        console.log("WASD Updated");
                        break;

                    // Update the Arrow Control
                    case 2:
                        console.log("Arrow Updated");
                        break;

                    // Update the QE Control
                    case 3:
                        console.log("QE Updated");
                        break;
                
                    default:
                        console.log("Index is out of Camera Control bounds!");
                        break;
                }

            }


            
        });

    }

    #keySet(event) {
        this.keyMap[event.key] = true;  // Set the current key to HIGH
    }

    #keyUnset(event) {
        this.keyMap[event.key] = false; // Set the current key to LOW
    }

    bind( controls ) {

        // Check if any Camera Control (other than mouse) is already turned on
        if ( !this.controls.includes( true, 1) ) {

            // Add keydown event listener
            window.addEventListener('keydown', this.#keySet);
    
            // Add keyup event listener
            window.addEventListener('keyup', this.#keyUnset);
        }

        controls.forEach(control => {

            switch (control) {

                // Case where Control to Bind is Mouse
                case "Mouse":
                    this.controls[0] = true;

                    // Add Scroll Control
                    window.addEventListener('wheel', (event) => {
                        console.log( "Scroll!\n" );
                    });

                    // Add Mouse Control
                    window.addEventListener('pointerdown', (event) => {
                        console.log( "MouseDown" );

                        this.startVect = new Vector3(event.clientX, event.clientY, 0);
                        this.mouseDown = true;
                    })

                    window.addEventListener('pointerup', (event) => {
                        console.log( "MouseUp" );
                        this.mouseDown = false;
                    })

                    window.addEventListener('pointermove', (event) => {

                        if ( this.mouseDown ) {

                            const x = (event.clientX - window.innerWidth/2);
                            const y = (event.clientY - window.innerHeight/2);

                            const currentVect = new Vector3(x, y, 0);
                            const dotProd = this.startVect.dot(currentVect);
                            const angle = dotProd / ( this.startVect.length * currentVect.length );

                            const quat = new Quaternion();
                            quat.fromVector(currentVect, angle);

                            this.position.rotate(quat);

                            console.log(this.position);
                        }

                    });
                    break;

                // Case where Control to Bind is WASD keys
                case "WASD":
                    this.controls[1] = true;
                    break;

                // Case where Control to Bind is Arrow keys
                case "Arrow":
                    this.controls[2] = true;
                    break;

                // Case where Control to Bind is QE keys
                case "QE":
                    this.controls[3] = true;
                    break;
            
                // Failsafe
                default:
                    console.log("Entered Control" + control + "could not be found!\n");
                    break;
            }

        });
 
    } /* --- End of bind() --- */

    /*wtf(event) {
        //console.log( "X: " + event.clientX + "\n" );
        //console.log( "Y: " + event.clientY + "\n" );

        const currentVect = new Vector3(event.clientX, event.clientY, 0);

        console.log(this.startVect);

        //const dotProd = this.startVect.dot(currentVect);

        //const angle = dotProd / ( this.startVect.length * currentVect.length );

        //console.log("Angle moved: " + angle + "\n");

        //this.position.rotate( new Quaternion(event.clientX, event.clientY, 0, ) )
    }*/

    unbind( controls ) {

        // Itterate for each control to unbind
        controls.forEach(control => {

            switch (control) {

                // Case where Control to Unbind is Mouse
                case "Mouse":
                    this.controls[0] = false;

                    window.removeEventListener('wheel');
                    window.removeEventListener('pointerover');
                    break;

                // Case where Control to Unbind is WASD keys
                case "WASD":
                    this.controls[1] = false;
                    break;

                // Case where Control to Unbind is Arrow keys
                case "Arrow":
                    this.controls[2] = false;
                    break;

                // Case where Control to Unbind is QE keys
                case "QE":
                    this.controls[3] = false;
                    break;
            
                // Failsafe
                default:
                    console.log("Entered Control" + control + "could not be found!\n");
                    break;
            }

        });

        // Check if all the bindings are OFF
        if ( !this.controls.includes( true, 1 ) ) {

            // Remove all the Event Listeners
            window.removeEventListener('keydown');
            window.removeEventListener('keyup');
        }
        
    }

} /* --- End of Camera --- */

/* --- Exports --- */
export {
    Camera
};
/* --- Exports --- */