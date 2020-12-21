import find from './find';

function on(selector, event, cb, capture = false) {
  if (Array.isArray(selector)) {
    selector.forEach((item) => on(item, event, cb, capture));
    return;
  }

  const data = {
    cb,
    capture
  };

  if (!window._domassistevents) {
    window._domassistevents = {};
  }

  window._domassistevents[`_${event}`] = data;
  const el = find(selector);
  if (el.length) {
    el.forEach((item) => {
      item.addEventListener(event, cb, capture);
    });
  }
}

export default on;
