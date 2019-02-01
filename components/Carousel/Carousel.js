;(() => {
  // `mod` is based on Donald Knuth's modular division definition (remainder has sign of dividend)
  const mod = (x, y) => x - y * Math.floor(x / y)

  const carousel = document.querySelector(".carousel")
  const imgList = carousel.querySelectorAll("img")
  const length = imgList.length
  const [left, right] = [...carousel.querySelectorAll("[class$='button']")]

  const run = (current = 0, last) => {
    last !== undefined && (imgList[last].style.display = "none")
    imgList[current].style.display = "block"
    left.addEventListener(
      "click",
      () => run(mod(current - 1, length), current),
      { once: true }
    )
    right.addEventListener(
      "click",
      () => run(mod(current + 1, length), current),
      { once: true }
    )
  }
  run()
})()
