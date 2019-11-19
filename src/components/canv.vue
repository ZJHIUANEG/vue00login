<template>
  <div class="canva"></div>
</template>

<script>
import * as THREE from "three";

export default {
  mounted: function() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    //var controls = new THREE.TrackballControls(camera);

    var render = new THREE.WebGLRenderer();
    render.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(render.domElement);
    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load(require("../image/earth.png"));
    var material = new THREE.MeshBasicMaterial({
      color: 0xb3dd,
      map: texture,
      // wireframe: true,
      shading: THREE.FlatShading
    });
    var sphere = new THREE.SphereGeometry(1, 32, 32);
    var mesh = new THREE.Mesh(sphere, material);
    scene.add(mesh);

    function animate() {
      requestAnimationFrame(animate);
      mesh.rotation.y += 0.005;
      //controls.update();
      render.render(scene, camera);
      // renderer.setClearColor(0xffffff, 0.0);
    }
    animate();
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  outline: 0;
}
#container {
  width: 100%;
  height: 660px;
  position: absolute;
}
</style>
