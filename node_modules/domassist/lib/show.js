import find from './find';

function show(selector) {
  if (Array.isArray(selector)) {
    selector.forEach((item) => show(item));
  }
  const els = find(selector);
  if (els.length) {
    els.forEach((el) => {
      el.style.display = el.dataset._currentDisplay || 'block';
    });
  }
}

export default show;
