## Objectives

1. Explore the p5-DOM library
2. Create and manipulate DOM elements

## Beyond the Canvas

While incredibly useful for all things `<canvas>`, p5 also offers a powerful library that abstracts common DOM actions. Tasks like adding html elements, selecting all elements of a certain type, and manipulating event listeners are all abstracted via p5.

In exploring this library, we are going to jump right in and work with some images of nature's most [majestic animal][hog-reference]: the county fair hog.

## Excited Swine

Take a look at `mySketch.js`, which uses `Hog.js`. In `mySketch.js`, several p5 `img` objects are made and wrapped up within the custom `Hog` class that we made ourselves. The `Hog` class is responsible for keeping track of the p5 DOM elements position and excitement level. It is also responsible for managing the movement of the element via the `trembleWithAnticipation` method.

Start up your server and take a look at what we have in the browser. Following, try commenting out the line in the `draw` function that activates the `hog.trembleWithAnticipation` method. Inspect the results in the browser. Now we're talking...

Naturally, the only problem with this browserification of hog excitement is that it's simply not _realistic_. You know as well as we that a county fair hog doesn't just _shake randomly_ without purpose: instead, as you approach them, their excitement levels are inversely proportional to the distance between you and them.

## Making it Real

Let's clean up this inaccurate representation of county fair hog behavior before David Attenborough has a heart-attack. By building on the existing structure and functionality of the code, we want to implement the following (please progress in order):

**Hog Scientist**
  - Have the hog only jiggle when your mouse is over its image

**Hog Farmer**
  - As our mouse approaches the center of any given hog, its excitement grows
  - Inversely, the further away from the hog our mouse is, the less excited the hog is

**Hogfather (bonus)**
  - Being fiercely territorial, as a hog approaches any other hog its excitement grows (and diminishes with distance)


[p5-dom]: https://p5js.org/reference/#/libraries/p5.dom
[hog-reference]: "https://tpwd.texas.gov/publications/pwdpubs/media/pwd_bk_w7000_0195.pdf"
