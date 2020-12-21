import find from './find';

function append(selector, value) {
  if (Array.isArray(selector)) {
    return selector.forEach((item) => append(item, value));
  }
  const els = find(selector);
  if (els.length) {
    els.forEach((el) => {
      if (typeof value === 'string') {
        el.insertAdjacentHTML('beforeend', value);
      } else {
        el.appendChild(value);
      }
    });
  }
}

export default append;
