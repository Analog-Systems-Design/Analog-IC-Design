let SCROLLABLE_CONTAINER;

function getScrollableContainer() {
  if (SCROLLABLE_CONTAINER) {
    return SCROLLABLE_CONTAINER;
  }

  const documentElement = window.document.documentElement;
  let scrollableContainer;

  documentElement.scrollTop = 1;

  if (documentElement.scrollTop === 1) {
    documentElement.scrollTop = 0;
    scrollableContainer = documentElement;
  } else {
    scrollableContainer = document.body;
  }

  SCROLLABLE_CONTAINER = scrollableContainer;

  return scrollableContainer;
}


export default getScrollableContainer;
