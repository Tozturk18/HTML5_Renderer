/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/14/2023
 * Last edited on 03/15/2023
 * File Name: Vector3.js
 * 
 * Description:
 * This script creates a 3 Dimensional Vector which can be
 * used for positioning objects in the Renderer
 * 
 * Insparations:
 * Three.js
 */

/* --- VECTOR3 --- 
 *  The Vector3 Object is a 3 dimensional vector.
 *  Constructor Parameters:
 *  -   x:  The X Coordinate of the Vector
 *  -   y:  The Y Coordinate of the Vector
 *  -   z:  The Z Coordinate of the Vector
 *  Methods:
 *  -   rotate(): Applies a Quaternion for rotation
 *  -   update(): Updates the Vector to new Coordinates
*/
class Vector3 {

    /* --- Constructor --- */
    constructor( x, y, z ) {

        // Save the parameters
        this.x = x;
        this.y = y;
        this.z = z;

        this.length = Math.sqrt(x*x + y*y + z*z);
        //this.angle = [ Math.atan2( x, y ), Math.atan2( x, z ), Math.atan2( z, y ) ];

    } /* --- End of Constructor --- */

    /* --- rotate() --- */
    /* This function takes in a Quaternion and rotates
     * the current Vector3 according to the given quaternion
     * and then updates it's coordinates accordingly.
     * 
     * Parameters:
     * - Quaternion: A 4D Matrix that includes a 3D Vector and an angle to turn
     * 
     * Returns:
     * - NULL
     */
    rotate( quaternion ) {

        // Failsafe
        if (quaternion.length != 0) {
            // Create a duplicate of Vector3 variables
            const vx = this.x;
            const vy = this.y;
            const vz = this.z;

            // Create a duplicate of Quaternion Variables
            const qx = quaternion.x;
            const qy = quaternion.y;
            const qz = quaternion.z;
            const qw = quaternion.w;

            // Calculate the new coordinates using Rodrigues' rotation formula
            // https://en.m.wikipedia.org/wiki/Rodrigues'_rotation_formula
            this.x = vx*Math.cos(qw) + (qy*vz - qz*vy)*Math.sin(qw) + qx*(qx*vx+qy*vy+qz*vz)*(1-Math.cos(qw));
            this.y = vy*Math.cos(qw) + (qz*vx - qx*vz)*Math.sin(qw) + qy*(qx*vx+qy*vy+qz*vz)*(1-Math.cos(qw));
            this.z = vz*Math.cos(qw) + (qx*vy - qy*vx)*Math.sin(qw) + qz*(qx*vx+qy*vy+qz*vz)*(1-Math.cos(qw));

            this.length = Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
            //this.angle = [ Math.atan2( this.x, this.y ), Math.atan2( this.x, this.z ), Math.atan2( this.z, this.y ) ];
        }

    } /* --- End of rotate() --- */

    /* --- update() --- */
    /* This function allows to update the Vector to the
     * given coordinates
     * 
     * Parameters:
     * - x:  The X Coordinate of the Vector
     * - y:  The Y Coordinate of the Vector
     * - z:  The Z Coordinate of the Vector
     * 
     * Returns:
     * - NULL
     */
    update( x, y, z ) {

        // Update the Vector using new parameters
        this.x = x;
        this.y = y;
        this.z = z;
    } /* --- End of update --- */

} /* --- End of Vector3 --- */

/* --- Exports --- */
export {
    Vector3
};
/* --- End of Exports --- */