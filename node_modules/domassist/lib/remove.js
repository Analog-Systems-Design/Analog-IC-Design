import find from './find';

function remove(selector, context) {
  if (Array.isArray(selector)) {
    return selector.forEach(item => remove(item, context));
  }

  const els = find(selector, context);

  if (els.length) {
    els.forEach(el => {
      if (el.prototype && el.prototype.remove) {
        el.remove();
      } else if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });
  }
}

export default remove;
