let scene, camera, renderer, cube;

function init(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color('green');
    camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({antialias: true});
    
    document.body.appendChild(renderer.domElement);
    
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    //const material = new THREE.MeshBasicMaterial({color: 0x0000ff});

    const texture = new THREE.TextureLoader().load('textures/brick_bump.jpg');
    const material = new THREE.MeshStandardMaterial({map: texture});
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    //add lighting

    const light = new THREE.DirectionalLight();
    light.position.set(0,1,2);
    scene.add(light);
    
    camera.position.z = 5;
}




function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

window.addEventListener('resize', onWindowResize, false);
init();
animate();