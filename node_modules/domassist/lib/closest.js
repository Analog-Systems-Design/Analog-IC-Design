import matches from './matches';

function closest(el, selector) {
  do {
    if (matches(el, selector)) {
      return el;
    }

    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);

  return null;
}

export default closest;
