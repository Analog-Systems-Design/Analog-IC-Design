import find from './find';

function addAttrs(selector, attrs) {
  if (Array.isArray(selector)) {
    return selector.forEach((item) => addAttrs(item, attrs));
  }
  const els = find(selector);
  if (els.length) {
    els.forEach((item) => {
      Object.keys(attrs).forEach((attr) => {
        if (attr in item) {
          item[attr] = attrs[attr];
        } else {
          item.dataset[attr] = attrs[attr];
        }
      });
    });
  }
  return els;
}

export default addAttrs;
