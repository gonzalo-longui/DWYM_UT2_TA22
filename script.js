const parrafo = document.getElementById("windowSize");

parrafo.innerHTML = `${window.innerHeight}px x ${window.innerWidth}px`

window.addEventListener("resize", () => {
  let viewportHeight = window.innerHeight;
  let viewportWidth = window.innerWidth;
  
  parrafo.innerHTML = `${viewportHeight}px x ${viewportWidth}px`
});