function isWindow(obj) {
  return obj != null && obj === obj.window;
}

export default isWindow;
