AFRAME.registerComponent("obstacle", {
  init: function () {
    for (let i = 1; i <= 20; i++) {
      let pos = {
        x: Math.random() * 3000 + -1000,
        y: Math.random() * 2 + -1,
        z: Math.random() * 3000 + -1000,
      };
      let id = `bird${i}`;
      this.createBird(id, pos);
    }
  },
  createBird: function (id, position) {
    let terrain = document.querySelector("#terrain");
    let bird = document.createElement("a-entity");
    bird.setAttribute("id", id);
    bird.setAttribute("position", position);
    bird.setAttribute("scale", { x: 500, y: 500, z: 500 });
    bird.setAttribute("gltf-model", "./assets/models/bird/scene.gltf");
    bird.setAttribute("animation-mixer", {});
    bird.setAttribute("static-body", { shape: "shpere", shpereRadius: 5 });
    bird.setAttribute("game", { elementId: `#${id}` });
    terrain.appendChild(bird);
  },
});
