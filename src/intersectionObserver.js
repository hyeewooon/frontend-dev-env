// getBoundingClientRect(): 엘리먼트의 크기와 위치를 알고 싶을 때
// window.innerHeight, document.documentElement.clientHeight: viewport 길이

const isElementInViewport = (elem) => {
  var rect = elem.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const scrollHandler = (elemList) => {
  document.addEventListener("scroll", () => {
    elemList.forEach((elem) => {
      if (isElementInViewport(elem)) {
        elem.classList.add("move-animation");
      } else {
        elem.classList.remove("move-animation");
      }
    });
  });
};

export { scrollHandler };
