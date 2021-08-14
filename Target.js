AFRAME.registerComponent("target", {
  init: function () {
    for (let i = 1; i <= 20; i++) {
      let pos = {
        x: (Math.random() * 3000 + (-1000)),
        y: (Math.random() * 2 + (-1)),
        z: (Math.random() * 3000 + (-1000)),
      }
      let id = `ring${i}`
      this.createRing(id, pos)
    }
  },
  createRing: function (id, position) {
    let ring = document.createElement("a-entity");
    ring.setAttribute("id", id);
    ring.setAttribute("position", position);
    ring.setAttribute("material", "color", "#f00");
    ring.setAttribute("geometry", { primitive: "torus", radius: 10 });
    ring.setAttribute("static-body", {shape: "shpere", shpereRadius: 5});
    ring.setAttribute("game", {elementId: `#${id}`});
    let terrain = document.querySelector("#terrain");
    terrain.appendChild(ring);
  },
});
