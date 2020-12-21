import on from './on';
import closest from './closest';

function delegate(el, event, selector, cb, capture = false) {
  on(el, event, e => {
    if (e.target && closest(e.target, selector)) {
      return cb(e);
    }
  }, capture);
}

export default delegate;
