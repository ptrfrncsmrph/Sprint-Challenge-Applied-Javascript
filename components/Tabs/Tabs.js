const tabs = document.querySelectorAll(".tab")
const cards = document.querySelectorAll(".card")
const showCard = tab => {
  cards.forEach(({ dataset, style }) => {
    tab === "all"
      ? (style.display = "flex")
      : dataset.tab === tab && (style.display = "flex")
  })
}
const selectTab = tab => {
  tabs.forEach(({ dataset, classList }) => {
    dataset.tab === tab && classList.add("active-tab")
  })
}
const hideCard = tab => {
  cards.forEach(({ dataset, style }) => {
    tab === "all"
      ? (style.display = "none")
      : dataset.tab === tab && (style.display = "none")
  })
}
const deselectTab = tab => {
  tabs.forEach(({ dataset, classList }) => {
    dataset.tab === tab && classList.remove("active-tab")
  })
}
const main = (current, last = false) => {
  last && (hideCard(last) && deselectTab(last))
  showCard(current)
  deselectTab(current)
  tabs.forEach(tab => {
    tab.addEventListener("click", () => main(tab.dataset.tab, current))
  })
}
main("all")
