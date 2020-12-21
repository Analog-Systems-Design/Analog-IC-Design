/* global DocumentTouch */

export default function isTouch() {
  return (('ontouchstart' in window) ||
  window.DocumentTouch && document instanceof DocumentTouch);
}
