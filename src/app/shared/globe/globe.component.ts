import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import ThreeGlobe from 'three-globe';
import * as THREE from 'three';

@Component({
  selector: 'app-globe',
  templateUrl: './globe.component.html',
  styleUrls: ['./globe.component.scss']
})
export class GlobeComponent implements OnInit {

  @ViewChild('rendererContainer') rendererContainer: ElementRef;
  N = 300;
  gData = [...Array(this.N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3,
    color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
  }));

  Globe = new ThreeGlobe()
  .globeImageUrl('../../../assets/earth-blue-marble.jpg')
  .pointsData(this.gData)
  .pointAltitude('size')
  .pointColor('color');

  renderer = new THREE.WebGLRenderer();
  scene;
  camera;
  // tbControls;

  constructor() { 
    this.scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer();
    this.camera = new THREE.PerspectiveCamera();
    this.camera.aspect = window.innerWidth/window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.camera.position.z = 500;
    // this.tbControls = new THREE.TrackballControls(this.camera, renderer.domElement);
    // this.tbControls.minDistance = 101;
    // this.tbControls.rotateSpeed = 5;
    // this.tbControls.zoomSpeed = 0.8;
  }

  ngAfterViewInit() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  animate() {
    window.requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
}

  ngOnInit(): void {
    // this.scene.add(this.Globe);
    // this.scene.add(new THREE.AmbientLight(0xbbbbbb));
    // this.scene.add(new THREE.DirectionalLight(0xffffff, 0.6));
  }

}
