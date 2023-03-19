/* HyperJS HTML5 Canvas Renderer Library
 * Created by Ozgur Tuna Ozturk on 03/14/2023
 * Last edited on 03/16/2023
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
 *  -   dot():    Returns the dot product between this vector and another vector
 *  -   corss():  Returns the cross product between this vector and another vector
 *  -   dist():   Returns the distance between this vector and another vector
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

            //console.log(this.x);

            

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

    /* --- dot() --- */
    /* This function allows users the operate a dot product between 
     * this 3D Vector and another 3D Vector passed as a parameter
     * Mathematically it will look like:
     * u . v = (u_x * v_x) + (u_y * v_y) + (u_z * v_z)
     * 
     * Parameters:
     * - vector:  A 3D Vector to operate dot product on
     * 
     * Returns:
     * - INT: The dot product of the two 3D vectors
     */
    dot( vector ) {

        //  Return the DOT Product of this 3D vector and another 3D vector
        return ( ( this.x * vector.x ) + ( this.y * vector.y ) + ( this.z * vector.z ) );
    } /* --- End of dot() --- */

    /* --- cross() --- */
    /* This function allows users the operate a cross product between 
     * this 3D Vector and another 3D Vector passed as a parameter
     * Mathematically it will look like:
     * u x v = (u_y * v_z - u_z * v_y) + (u_z * v_x - u_x * v_z) + (u_x * v_y - u_y * v_x)
     * 
     * Parameters:
     * - vector:  A 3D Vector to operate cross product on
     * 
     * Returns:
     * - Vector3: The cross product of the two 3D vectors
     */
    cross( vector ) {

        // Return the CROSS Product  of this 3D Vector and another 3D Vector
        return new Vector3(
            this.y*vector.z - this.z*vector.y,
            this.z*vector.x - this.x*vector.z,
            this.x*vector.y - this.y*vector.x
        );
    } /* --- End of cross() --- */

    /* --- dist() --- */
    /* This function calculates the distance between two Vector3
     * Objects, allowsing for easy calculation of distance.
     * 
     * Parameters:
     * - vector:  A 3D Vector
     * 
     * Returns:
     * - INT: Retuns the distance between two vectors
     */
    dist( vector ) {

        // Return the Distance between two vector3s
        // In this case it is the distance between two points in 3D Space
        return Math.sqrt( ( vector.x - this.x )**2 + ( vector.y - this.y )**2 );
    } /* --- End of dist() --- */

} /* --- End of Vector3 --- */

/* --- Exports --- */
export {
    Vector3
};
/* --- End of Exports --- */