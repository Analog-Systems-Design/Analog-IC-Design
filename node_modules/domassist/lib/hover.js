import on from './on';

function hover(el, enter, exit) {
  on(el, 'mouseenter', enter);
  on(el, 'mouseleave', exit);
}

export default hover;
