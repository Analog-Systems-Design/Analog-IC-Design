import find from './find';

function hide(selector) {
  if (Array.isArray(selector)) {
    selector.forEach((item) => hide(item));
  }
  const els = find(selector);
  if (els.length) {
    els.forEach((el) => {
      const currentDisplay = window.getComputedStyle(el).getPropertyValue('display');

      if (currentDisplay !== 'none') {
        el.dataset._currentDisplay = currentDisplay;
        el.style.display = 'none';
      }
    });
  }
}

export default hide;
