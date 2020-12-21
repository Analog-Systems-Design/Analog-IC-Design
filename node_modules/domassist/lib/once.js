import on from './on';
import off from './off';

function once(el, event, run, capture = false) {
  on(el, event, e => {
    off(el, event);
    run(e);
  }, capture);
}

export default once;
