# Smooth-scroller

![npm](https://img.shields.io/npm/v/smooth-scroller.svg)

A tiny, ES6 JavaScript lib to handle smooth scrolling.

## Installation

```sh
npm install smooth-scroller
```

## Usage

See the [full example](./example).

### Javascript

```js
import 'smooth-scroller';
```

### HTML

```html
<a href="#foo" data-smooth>Scroll Smoothly</a>
...some content...
<div id="foo"></div>
```

## Events

Custom events are fired on the element:

| Event                | Description          |
|----------------------|----------------------|
| `smoothscroll:start` | Smooth scroll starts |
| `smoothscroll:end`   | Smooth scroll ends   |

## Methods

Smooth-scroller exposes two methods:

### init(_[selector='[data-smooth]'], [offset=0]_)

Enables smooth-scroller on the elements matched by `selector`.

#### Parameters

`selector='[data-smooth]'` - _{String}_ - Elements that will trigger smooth-scroll call once they're clicked

`offset=0` - _{Number}_ - Controls the distance (negative or positive) between the top border of the element and the top border of the window.

### scroll(target, hash, _[offset=0], [silent=false]_)

`target` - _{string|Element|NodeList}_ - Target element to scroll

`hash` - _{string|Element|NodeList}_ - DOM element ID to scroll

`offset=0` - _{Number}_ - Controls the distance (negative or positive) between the top border of the element and the top border of the window.

`silent=false` - _{Boolean}_ - If enabled, will generate a [`history.pushState`](https://developer.mozilla.org/en-US/docs/Web/API/History_API) event
