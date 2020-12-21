let transform = null;

export default function prefixedTransform() {
  if (transform) {
    return transform;
  }

  const testEl = document.createElement('div');

  if (testEl.style.transform === null) {
    const vendors = ['Webkit', 'webkit', 'Moz', 'ms'];
    let property = null;

    for (let i = 0, len = vendors.length; i < len && !property; i++) {
      const tProperty = `${vendors[i]}Transform`;
      if (typeof testEl.style[tProperty] !== 'undefined') {
        property = tProperty;
      }
    }

    transform = property;
  } else {
    transform = 'transform';
  }

  return transform;
}
