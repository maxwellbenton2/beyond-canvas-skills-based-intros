const horizontalMargin = 200
const verticalMargin = 200
var hogImgUris = [
  "/assets/images/augustus_gloop.89b15029.jpg",
  "/assets/images/bay_of_pigs.d79295fb.jpg",
  "/assets/images/cherub.3b19cef4.jpg",
  "/assets/images/mudblood.825814da.jpg",
  "/assets/images/piggy_smalls.b32f83b5.jpg",
  "/assets/images/porco.00a18b45.png",
  "/assets/images/porkchop.0120603a.jpg",
  "/assets/images/rainbowdash.632a35d2.jpg",
  "/assets/images/sobriety.8985bccd.jpg",
  "/assets/images/the_prosciutto_concern.7bc0d252.jpg",
  "/assets/images/trouble.1b8bbf42.jpg",
  "/assets/images/truffleshuffle.5397586c.jpg"
]

var hogs = []

function createHogs() {
  return hogImgUris.map((uri, idx) => {
    const startX = 100 + idx%4 * horizontalMargin
    const startY = 50 + Math.floor(idx/4) * verticalMargin
    return new Hog(startX, startY, uri)
  })
}

function setup() {
  hogs = createHogs()
}

function draw() {
  scale(0.2)
  hogs.forEach(hog => {
    
    if (mouseX >= hog.x && mouseX <= hog.x+100) {
      console.log('hit')
    }
  })
}
