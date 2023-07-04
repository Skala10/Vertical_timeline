let item = document.querySelectorAll(".body__item-div")

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect()
  console.log(rect)
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function callBackFunc() {
  for (let i = 0; i < item.length; i++) {
    if (isElementInViewport(item[i])) item[i].classList.add("in-view")
  }
}

function changeBackgroundParentDiv() {
  let items = document.querySelectorAll(".body__item-div.in-view")

  for (const item of items) {
    if (isElementInViewport(item)) {
      let parentItem = item.closest(".body__item")
      parentItem.classList.add("change-background")
    }
  }
}

window.addEventListener("load", function () {
  callBackFunc()
  changeBackgroundParentDiv()
})
window.addEventListener("resize", function () {
  callBackFunc()
  changeBackgroundParentDiv()
})
window.addEventListener("scroll", function () {
  callBackFunc()
  changeBackgroundParentDiv()
})
