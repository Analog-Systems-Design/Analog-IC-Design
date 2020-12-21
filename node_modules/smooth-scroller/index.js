/* global window,document */
'use strict';
import { fire } from 'domassist';

const duration = 1000;

const ease = function(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b; //eslint-disable-line
  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
};

const animate = function(startTime, start, end, callback = function() {}) {
  const time = new Date().getTime();
  const difference = end - start;
  const goingUp = difference < 0;

  if (difference === 0) {
    return;
  }

  const delta = time - startTime;
  let to = Math.round(ease(delta, start, difference, duration));

  if (!goingUp && to > end) {
    to = end;
  }

  if (goingUp && to < end) {
    to = end;
  }

  if (delta > duration) {
    to = end;
  }

  window.scrollTo(0, to);

  if (to === end) {
    setTimeout(callback);
    return;
  }

  if (to < 0) {
    return;
  }

  window.requestAnimationFrame(() => animate(startTime, start, end, callback));
};

const scroll = function(target, hash, offset = 0, silent = false) {
  if (!target) {
    return;
  }

  fire(target, 'smoothscroll:start', { bubbles: true });
  const rect = target.getBoundingClientRect();
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  const adjustedOffset = Math.round(rect.top + scrollY) + offset;
  const startTime = new Date();
  if (!target.hasAttribute('tabindex')) {
    target.tabIndex = '-1';
  }

  if (!silent) {
    window.history.pushState(null, 'Scroll', hash);
  }

  animate(startTime.getTime(), scrollY, adjustedOffset, () => {
    fire(target, 'smoothscroll:end', { bubbles: true });
  });
  target.focus();
};

const listenEvent = function(el, offset) {
  if (el.dataset.smoothActive) {
    return;
  }

  el.dataset.smoothActive = true;

  el.addEventListener('click', (e) => {
    const hash = el.getAttribute('href');
    if (hash[0] !== '#') {
      return;
    }
    e.preventDefault();

    scroll(document.querySelector(hash), hash, offset);
  });
};

const init = function(query = '[data-smooth]', offset = 0) {
  if (!window.requestAnimationFrame) {
    return;
  }

  let els = query;

  if (typeof query === 'string') {
    els = document.querySelectorAll(query);
  }

  if (els instanceof Element) {
    els = [els];
  }

  for (let i = 0, c = els.length; i < c; i++) {
    const el = els[i];
    listenEvent(el, offset);
  }
};

export { init, scroll };

window.addEventListener('DOMContentLoaded', () => {
  init();
});
