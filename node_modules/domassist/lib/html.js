import find from './find';

function html(selector, value) {
  if (Array.isArray(selector)) {
    selector.forEach((item) => html(item, value));
  }
  const el = find(selector);
  if (el.length) {
    const length = el.length;
    for (let i = 0; i < length; i += 1) {
      el[i].innerHTML = value;
    }
  }
}

export default html;
