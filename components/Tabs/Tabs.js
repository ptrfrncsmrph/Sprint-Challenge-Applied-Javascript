class TabLink {
  constructor(tabElement) {
    this.tabElement = tabElement
    this.tabData = this.tabElement.dataset.tab
    if (this.tabData === "all") {
      this.cards = [...document.querySelectorAll(".card")]
    } else {
      this.cards = [...document.querySelectorAll(".card")].filter(
        ({ dataset: { tab } }) => tab === this.tabData
      )
    }
    this.cards = this.cards.map(TabCard.of)
    this.tabElement.addEventListener("click", () => {
      this.selectTab()
    })
  }

  static of(element) {
    return new TabLink(element)
  }

  selectTab() {
    const tabs = document.querySelectorAll(".tab")
    tabs.forEach(({ classList: cl }) => {
      cl.remove("active-tab")
    })
    const cards = document.querySelectorAll(".card")
    cards.forEach(({ style: s }) => {
      s.display = "none"
    })
    this.tabElement.classList.add("active-tab")
    this.cards.forEach(card => card.selectCard())
  }
}

class TabCard {
  constructor(cardElement) {
    this.cardElement = cardElement
  }

  static of(element) {
    return new TabCard(element)
  }

  selectCard() {
    this.cardElement.style.display = "flex"
  }
}

let tabs = document.querySelectorAll(".tab")
tabs.forEach(TabLink.of)
