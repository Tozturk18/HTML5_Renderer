/*  HyperJS HTML5 Canvas Renderer Library
 *  Created by Ozgur Tuna Ozturk on 03/14/2023
 *  Last edited on 03/14/2023
 *  File Name: HyperJS.js
 * 
 *  Description:
 *  This script acts as a node to combine all the other libraries 
 *  into one compact JavaScript file.
 * 
 *  Insparations:
 *  Three.js
 * 
 *  Imports:
 *  -   Renderer:       This library creates a Canvas DOMelement and renders objects on it
 *  -   Scene:          This library contains all the Screen objects to be rendered
 *  -   LineGeometry:   This library contains the geometricla information to draw a Line
 * 
 *  Exports:
 *  -   Renderer
 *  -   Scene
 *  -   LineGeometry
 */

/* --- Imports --- */
import { Renderer } from "./Renderer/Renderer.js";
import { Scene } from "./Scene/Scene.js";
import { Camera } from "./Camera/Camera.js";
import { Mesh } from "./Mesh/Mesh.js";
import { Vector3 } from "./Utils/Vector3/Vector3.js";
import { Quaternion } from "./Utils/Quaternion/Quaternion.js";
import { LineGeometry } from './Geometry/LineGeometry/LineGeometry.js';
import { SquareGeometry } from "./Geometry/SquareGeometry/SquareGeometry.js";
import { BasicGeometry } from "./Geometry/BasicGeometry/BasicGeometry.js";
import { BasicMaterial } from "./Materials/BasicMaterial/BasicMaterial.js";
import { PhongMaterial } from "./Materials/PhongMaterial/PhongMaterial.js";
import { PointLight } from "./Lights/PointLight/PointLight.js";
/* --- End of Imports --- */


/* --- Exports --- */
export {
    Renderer,
    Scene,
    Camera,
    Mesh,
    Vector3,
    Quaternion,
    LineGeometry,
    SquareGeometry,
    BasicGeometry,
    BasicMaterial,
    PhongMaterial,
    PointLight
};
/* --- End of Exports --- */