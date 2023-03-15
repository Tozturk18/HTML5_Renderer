/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/15/2023
 * Last edited on 03/15/2023
 * File Name: Quaternion.js
 * 
 * Description:
 * This script is used to create a Quaternion object that
 * helps HyperJS Objects to rotate without using Euclodian angles.
 * 
 * Using Quaternion as oppose to Euclodian angles is for
 * efficiency and reliablity. This method allows for more
 * general uses.
 * 
 * Insparations:
 * Three.js
 */

/* --- QUATERNION --- 
 *  The Quaternion Object is a 4x1 dimensional Matrix.
 *  Constructor Parameters:
 *  -   x:  The X Coordinate of the Vector
 *  -   y:  The Y Coordinate of the Vector
 *  -   z:  The Z Coordinate of the Vector
 *  -   w:  The W angle (in radians) around the XYZ Vector
 *  Methods:
 *  -   normalize(): Gets the normalized version of the quaternion
 *  -   fromVector(): Uses a 3D Vector and an angle to generate the Quaternion
 *  -   setDegrees(): Allows for setting the rotation angle in degrees
*/
class Quaternion {

    /* --- Constructor --- */
    constructor( x = 0, y = 0, z = 0, w = 1) {

        // Save the parameters
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;

        this.length = Math.sqrt( x*x + y*y + z*z + w*w );

        this.normalize();
    }

    /* --- normalize() --- */
    /* This function normalizes the Quaternion by
     * multiplying the Quaternion with its complex conjugate.
     * 
     * Parameters:
     * - NULL
     * 
     * Returns:
     * - NULL
     */
    normalize() {

        this.length = Math.sqrt( this.x*this.x + this.y*this.y + this.z*this.z + this.w*this.w );

        // Fail Safe for dividing by zero
        if (this.length != 0) {
            this.x = this.x / this.length;
            this.y = this.y / this.length;
            this.z = this.z / this.length;
            this.w = this.w;
        }

    } /* --- End of normalize() --- */

    /* --- fromVector() --- */
    /* This function constructs the Quaterion object using
     * a 3D Vector and an angle in radians
     *
     * Parameters:
     * - vector: 3D Vector to rotate around
     * - angle: rotation angle in radians
     */
    fromVector( vector, angle ) {

        // Populate the Quaternion
        this.x = vector.x;
        this.y = vector.y;
        this.z = vector.z;
        this.w = angle;

        this.length = Math.sqrt( vector.x*vector.x + vector.y*vector.y + vector.z*vector.z + angle*angle );

        this.normalize();
    } /* --- End of fromVector() --- */

    /* --- setDegrees() --- */
    /* This function changes the angle of the Quaterion
     * using degrees rather than radians.
     *
     * Parameters:
     * - angle: rotation angle in degrees
     */
    setDegrees( angle ) {

        // Convert the parameter into radians
        this.w = angle * ( Math.PI / 180 );
    }

} /* --- End of Quaternion --- */

/* --- Exports --- */
export {
    Quaternion
};
/* --- End of Exports --- */