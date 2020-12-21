import isWindow from './isWindow';

function find(selector, context = null) {
  if (selector instanceof HTMLElement || selector instanceof Node || isWindow(selector)) {
    return [selector];
  } else if (selector instanceof NodeList) {
    return [].slice.call(selector);
  } else if (typeof selector === 'string') {
    const startElement = (context) ? find(context)[0] : document;
    return [].slice.call(startElement.querySelectorAll(selector));
  }
  return [];
}

export default find;
