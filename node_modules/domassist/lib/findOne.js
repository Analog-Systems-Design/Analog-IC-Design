import find from './find';

function findOne(selector, el) {
  const found = find(selector, el);

  if (found.length) {
    return found[0];
  }

  return null;
}

export default findOne;
