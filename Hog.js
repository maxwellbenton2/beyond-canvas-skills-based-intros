class Hog {

  constructor(x, y, uri) {
    this.x = x
    this.y = y
    this.scale = 0.2
    this.excitement = 1
    this.domEl = createImg(uri)
    this.domEl.position(x, y)
    this.domEl.size(100, 100)
    this.domEl.addEventListener('mouseover', trembleWithExcitement)
  }

  trembleWithExcitement() {
    this.x += random(-5, 5) * this.excitement
    this.y += random(-5, 5) * this.excitement
    this.domEl.position(this.x, this.y)
  }
}
