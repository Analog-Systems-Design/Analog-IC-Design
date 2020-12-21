import find from './find';
import addClass from './addClass';
import removeClass from './removeClass';
import html from './html';
import on from './on';
import styles from './styles';

function bindEvents(el, events) {
  Object.keys(events).forEach((event) => {
    on(el, event, events[event]);
  });
}

function modify(selector, params) {
  if (Array.isArray(selector)) {
    selector.forEach((item) => modify(item, params));
  }
  const modules = {
    addClass,
    removeClass,
    html,
    events: on,
    styles,
  };
  const els = find(selector);
  if (els.length) {
    els.forEach((el) => {
      Object.keys(params).forEach((param, index) => {
        if (param in modules) {
          if (param === 'events') {
            bindEvents(el, params[param]);
          }
          modules[param](el, params[param]);
        }
      });
    });
  }
}

export default modify;
