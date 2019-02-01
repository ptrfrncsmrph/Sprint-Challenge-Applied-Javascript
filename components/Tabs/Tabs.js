;(() => {
  const tabs = document.querySelectorAll(".tab")
  const cards = document.querySelectorAll(".card")

  const show = tab => {
    cards.forEach(({ dataset, style }) => {
      tab === "all"
        ? (style.display = "flex")
        : dataset.tab === tab && (style.display = "flex")
    })
    tabs.forEach(({ dataset, classList }) => {
      dataset.tab === tab && classList.add("active-tab")
    })
  }

  const hide = tab => {
    cards.forEach(({ dataset, style }) => {
      tab === "all"
        ? (style.display = "none")
        : dataset.tab === tab && (style.display = "none")
    })
    tabs.forEach(({ dataset, classList }) => {
      dataset.tab === tab && classList.remove("active-tab")
    })
  }

  const run = (current = "all", last) => {
    last && hide(last)
    show(current)
    tabs.forEach(tab => {
      tab.addEventListener("click", () => run(tab.dataset.tab, current), {
        once: true
      })
    })
  }

  run()
})()
