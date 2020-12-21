import findOne from './findOne';
function hasClass(selector, cls) {
  const el = findOne(selector);
  if (!el) {
    return false;
  }
  return el.classList.contains(cls);
}

export default hasClass;
