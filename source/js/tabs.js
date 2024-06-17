import { CARD_CONTENTS } from "./data.js"
const footerButtonsIndices = []

export const setPriceTabs = () => {
  document.querySelectorAll('.price__tab-button').forEach((el, index) => footerButtonsIndices.push(index + 1))
  document.querySelectorAll('.price__tab-button').forEach((el, index) => el.addEventListener('click', () => {
      const notSelectedIndices = footerButtonsIndices.filter((number) => number !== index + 1)
      setTabs(index + 1, notSelectedIndices)
    }
  ))

  const setTabs = (numberSelectedTab, otherSlideNumbers) => {
    changeText(get('#price-front-trener'), numberSelectedTab, 'priceTrener')
    changeText(get('#price-shadow-trener'), numberSelectedTab, 'priceTrener')

    changeText(get('#price-front-day'), numberSelectedTab, 'priceDay')
    changeText(get('#price-shadow-day'), numberSelectedTab, 'priceDay')

    changeText(get('#price-front-fullday'), numberSelectedTab, 'priceFullDay')
    changeText(get('#price-shadow-fullday'), numberSelectedTab, 'priceFullDay')

    addClass(get('#tab-' + numberSelectedTab), 'active')
    otherSlideNumbers.forEach((number) => delClass(get('#tab-' + number), 'active'))
  }
}

export const setFaqTabs = () => {
  document.querySelectorAll('.faq__menu-item').forEach((el, index) => footerButtonsIndices.push(index + 1))
  document.querySelectorAll('.faq__menu-item').forEach((el, index) => el.addEventListener('click', () => {
      const notSelectedIndices = footerButtonsIndices.filter((number) => number !== index + 1)
      showQuestions(index + 1, notSelectedIndices)
    }
  ))

  const showQuestions = (numberSelectedTab, otherSlideNumbers) => {

    addClass(get('#menu-item-' + numberSelectedTab), 'active')
    otherSlideNumbers.forEach((number) => delClass(get('#menu-item-' + number), 'active'))
    console.log(numberSelectedTab)
    delClass(get('#tab-list-' + numberSelectedTab), 'visually-hidden')
    otherSlideNumbers.forEach((number) => addClass(get('#tab-list-' + number), 'visually-hidden'))
  }
}

const get = (id) => document.querySelector(id)
const addClass = (htmlEl, selector) => htmlEl.classList.add(selector)
const delClass = (htmlEl, selector) => htmlEl.classList.remove(selector)
const changeText = (htmlEl, numberSelectedTab, part) => htmlEl.textContent = CARD_CONTENTS[numberSelectedTab][part]
