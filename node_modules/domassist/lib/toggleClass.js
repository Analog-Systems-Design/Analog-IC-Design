import find from './find';

function toggleClass(selector, cls) {
  if (Array.isArray(selector)) {
    return selector.forEach(item => toggleClass(item, cls));
  }

  const els = find(selector);

  if (els.length) {
    const clsArray = [].concat(cls);

    els.forEach(el => {
      clsArray.forEach(item => {
        el.classList.toggle(item);
      });
    });

    return els;
  }
}

export default toggleClass;
