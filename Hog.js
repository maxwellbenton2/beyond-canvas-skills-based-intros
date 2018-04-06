class Hog {

  constructor(x, y, uri) {
    this.x = x
    this.y = y
    this.scale = 0.2
    this.domEl = createImg(uri)
    this.domEl.position(x, y)
    this.domEl.size(100, 100)

    // Hog Scientist Solution
    // this.domEl.mouseMoved(() => {
    //   this.trembleWithExcitement()
    // })
  }

  trembleWithExcitement(multiplier=1) {
    console.log(this);
    console.log(this.x, this.y, multiplier);
    this.x += random(-5, 5) * multiplier
    this.y += random(-5, 5) * multiplier
    console.log(this.x, this.y);
    this.domEl.position(this.x, this.y)
  }
}
