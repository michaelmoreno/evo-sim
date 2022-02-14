import WebGLManager from './webgl';

export default class Simulation {
    webGLManager: WebGLManager;

    constructor(canvas: HTMLCanvasElement) {
        this.webGLManager = new WebGLManager(canvas);
    }
    addMesh(mesh: THREE.Mesh) {
        this.webGLManager.scene.add(mesh);
    }
    frameLoop() {
        this.webGLManager.update();
        requestAnimationFrame(() => this.frameLoop());
    }
    start() {
        this.frameLoop();
    }
}