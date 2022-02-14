import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default class WebGLManager {
    scene: THREE.Scene = new THREE.Scene();
    renderer: THREE.WebGLRenderer
    camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    ambientLight: THREE.AmbientLight = new THREE.AmbientLight(0xffffff);
    controls: OrbitControls

    constructor(canvas: HTMLCanvasElement) {
        this.renderer = new THREE.WebGLRenderer({ canvas });
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.setup();
    }
    update() {
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
    setup() {
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.position.z = 5;
        this.ambientLight.position.set(5, 5, 5);
        this.scene.add(this.ambientLight);
    }
}