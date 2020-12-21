/* global window */

export default function(key, el) {
  const values = {};

  Object.keys(el.dataset).forEach(data => {
    if (data.match(new RegExp(`^${key}`)) && data !== key) {
      let optionName = data.replace(key, '');
      let isGlobal = false;

      if (optionName.match(/^Global/)) {
        optionName = optionName.replace('Global', '');
        isGlobal = true;
      }

      optionName = `${optionName[0].toLowerCase()}${optionName.slice(1)}`;

      if (isGlobal) {
        values[optionName] = window[el.dataset[data]];
      } else {
        values[optionName] = el.dataset[data];
      }

      if (typeof values[optionName] === 'undefined' ||
          values[optionName] === '') {
        values[optionName] = true;
      }
    }
  });

  return values;
}
