import * as THREE from 'three';
import Simulation from './simulation';


const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const sim = new Simulation(canvas);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
export const cube = new THREE.Mesh(geometry, material);

sim.addMesh(cube);


sim.start();

