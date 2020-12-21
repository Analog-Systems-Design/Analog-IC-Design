import find from './find';

function styles(selector, css) {
  if (Array.isArray(selector)) {
    selector.forEach((item) => styles(item, css));
  }
  const els = find(selector);
  if (els.length) {
    els.forEach((el) => {
      Object.keys(css).forEach((key) => {
        el.style[key] = css[key];
      });
    });
  }
}

export default styles;
