// Defining some utility functions up here; versions of these are available from Lodash/Ramda/etc.
// `mod` is based on Donald Knuth's modular division definition (remainder has sign of dividend)
const mod = x => y => x - y * Math.floor(x / y)
const flip = fn => x => y => fn(y)(x)
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)
const flipMod = compose(
  flip,
  mod
)

class Carousel {
  constructor(element) {
    this.carousel = element
    this.index = 0
    this.imgList = this.carousel.querySelectorAll("img")
    this.length = this.imgList.length
    this.controls = [...this.carousel.querySelectorAll("[class$='button']")]
    ;(([l, r]) => {
      l.addEventListener("click", () =>
        this.render(mod(this.index - 1)(this.length), this.index)
      )
      r.addEventListener("click", () =>
        this.render(mod(this.index + 1)(this.length), this.index)
      )
    })(this.controls)
    this.render(this.index)
  }

  static of(element) {
    return new Carousel(element)
  }

  render(current, last) {
    last !== undefined && (this.imgList[last].style.display = "none")
    this.imgList[current].style.display = "block"
    this.index = current
  }
}

const carousel = document.querySelector(".carousel")
Carousel.of(carousel)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
