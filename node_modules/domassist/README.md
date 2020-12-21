# domassist

[![Build Status](https://travis-ci.org/firstandthird/domassist.svg?branch=master)](https://travis-ci.org/firstandthird/domassist)
![npm](https://img.shields.io/npm/v/domassist.svg)

This is a collection of functions designed to make working the DOM easier.

## Installation

`npm install domassist`

## Usage

In your project import the library:

```js
import domassist from 'domassist'
```

The first argument for each method you are interested is either a selector, DOM node, or a collection of
DOM Nodes

```javascript
const els = domassist.find('.my-class');
domassist.addClass(els, 'my-new-class');
```

## API

- [find](#findselector-context)
- [findOne](#findoneselector-context)
- [addClass](#addclassselector-classes)
- [removeClass](#removeclassselector-classes)
- [toggleClass](#toggleclassselector-class)
- [hasClass](#hasclassselector-class)
- [html](#htmlselector-value)
- [closest](#closestelement-selector)
- [delegate](#delegateelement-event-selector-callback-capture)
- [hide](#hideselector)
- [hover](#hoverelement-enter-exit)
- [matches](#matches)
- [modify](#modifyselector-params)
- [on](#onselector-event-callback-capture)
- [off](#offselector-event)
- [once](#onceelement-event-callback-capture)
- [ready](#readycallback)
- [show](#showselector)
- [styles](#stylesselector-styles)
- [addAttrs](#addattrsselector-attributes)
- [remove](#removeselector-context)

### find(selector, [context])

Find elements on the page based on a valid CSS selector.

#### Parameters:

`selector` - {string|Element|NodeList} - A valid CSS selector. If a NodeList is passed it will be converted to an Array.

`[context]` - Where to start looking for the selector.

#### Returns:

`Array` - If no element is found an empty array is returned.

#### Example:

```javascript
domassist.find('p'); // find all paragraph tags
domassist.find('[type="text"]', document.forms[0]); // find all text fields in the first form
```

### findOne(selector, [context])

Find a single element on a page. If more than one element is found for a selector, the first instance is returned.

If no element is found `null` is returned

#### Parameters:

`selector` - {string} A valid CSS selector

`[context]` - Where to start looking for the selector.

#### Returns:

`Element|null` - If no element is found `null` is returned.

### addClass(selector, classes)

Add one or more classes to an element(s). For multiple classes pass an array.

#### Parameters:

`selector` - {string|Element|NodeList} - A valid CSS selector. If a NodeList is passed it will be converted to an Array.

`classes` - {string|Array} The class or classes to add.

#### Returns:

`Array` - An array of elements that classes were applied to.

#### Example:

```javascript
domassist.addClass('.my-div', 'new-class');
domassist.addClass('.my-div', ['class-1', 'class-2', 'class-3']);
```

### removeClass(selector, classes)

Remove one or more classes to an element(s). For multiple classes pass an array.

#### Parameters:

`selector` - {string|Element|NodeList} - A valid CSS selector. If a NodeList is passed it will be converted to an Array.

`classes` - {string|Array} The class or classes to add.

#### Returns:

`Array` - An array of elements that classes were applied to.

#### Example:

```javascript
domassist.removeClass('.my-div', 'new-class');
domassist.removeClass('.my-div', ['class-1', 'class-2', 'class-3']);
```


### toggleClass(selector, class)

Add a class if it doesn't exist and vice versa if it does.

#### Parameters:

`selector` - {string|Element|NodeList} - A valid CSS selector. If a NodeList is passed it will be converted to an Array.

`class` - {string} The class to toggle.

#### Example:

```javascript
// new-class does not exist on element
domassist.toggleClass('.my-div', 'new-class'); // class added
domassist.toggleClass('.my-div', 'new-class'); // class removed
```


### hasClass(selector, class)

Find out if an element has a class assigned or not.

#### Parameters:

`selector` - {string|Element} - A valid CSS selector.

`class` - {string} - The class to check for.

#### Returns:

`Boolean` - True is returned if the class exist.


### html(selector, value)

Update inner HTML of an element.

#### Parameters:

`selector` - {string|Element|NodeList} - A valid CSS selector, HTML element, or.

`classes` - {string|Array} The class or classes to add.

#### Example:

```javascript
domassist.html('.my-div', 'hello world'); // add html
domassist.html('.my-div', ''); // remove html
```

### closest(element, selector)

Find the closest parent element that matches the given selector

#### Parameters:

`element` - {Element} the element where you want to start looking from

`selector` - {string} A valid CSS of the element to be found.

### delegate(element, event, selector, callback, capture)

### hide(selector)

Hide an element by setting it's css `display` to `none`.

Parameters:

`selector` - {string|Element|NodeList}

### hover(element, enter, exit)

Easy way to add callbacks to the `mouseenter` and `mouseleave` events.

#### Parameters:

`element` - {Element}

`enter` - {function} Callback to fire when user moves mouse over the supplied element.

`exit` - {function} Callback to fire when user moves mouse off the supplied element.

#### Examples:

```javascript
domassist.hover('.my-div', (e) => {
  console.log('mouse over');
}, (e) => {
  console.log('mouse out');
});
```


### matches()


### modify(selector, params)

Modify many parts of an element at once such as adding and removing classes, changing the element's html, or attaching events.

#### Parameters:

`selector` - {string|Element|NodeList}

`params` - {object} An object of key:value pairs of what element parameters to change.

#### Examples:

```javascript
domassist.modify('.my-div', {
  addClass: 'testing',
  html: 'hello world',
  events: {
    click: (e) => {
      // do something
    },
    mouseenter: (e) => {
      // do something
    },
    mouseleave: (e) => {
      // do something
    }
  },
  styles: {
    width: '100px',
    height: '150px',
  }
});
```

### on(selector, event, callback, capture)

Attach an event to an element based on a valid CSS selector or an Element.

#### Parameters:

`selector` - {string|Element|NodeList}

`event` - {string} The name of the event to attach such as `click`, `mouseenter`, or `touchend`

`callback` - {function} A function to be called when the supplied event is triggered.

`[capture = false]` - {Boolean} Determines which phase to the attach the event to. Default is `false` when means the event is attached to the bubble phase. If `true` then it's attached to the capture phase.

### Example:

```javascript
domassist.on('a', 'click', (e) => {
  e.preventDefault();
  console.log('clicked!');
});
```


### off(selector, event)

Remove an attached event.

#### Parameters

`selector` - {string|Element|NodeList}

`event` - {string} The name of the event to remove such as `click`, `mouseenter`, or `touchend`

### Example:

```javascript
domassist.off('a', 'click');
```

### once(element, event, callback, capture)

Attach an event to an element to be fired once.

#### Parameters:

`selector` - {Element}

`event` - {string} The name of the event to attach such as `click`, `mouseenter`, or `touchend`

`callback` - {function} A function to be called when the supplied event is triggered.

`[capture = false]` - {Boolean} Determines which phase to the attach the event to. Default is `false` when means the event is attached to the bubble phase. If `true` then it's attached to the capture phase.

### Example:

```javascript
domassist.once('a', 'click', (e) => {
  e.preventDefault();
  console.log('clicked!');
});
```

### ready(callback)

Add a function to be called once the `DOMContentLoaded` event is fired. This is when the entire DOM has been finished downloading. You'll want to use this method to execute javascript on page load. You can call this method many times throughout your application allowing you to add multiple callbacks.

#### Parameters:

`callback` - {function} The function to be called once the page has finished loading.

#### Example:

```javascript
domassist.ready(() => {
  const x = 1;
  console.log('x is', x);
});
domassist.ready(() => {
  const x = 2;
  console.log('x is', x);
});
domassist.ready(() => {
  const x = 3;
  console.log('x is', x);
});
// x is 1
// x is 2
// x is 3
```

### show(selector)

Show an element by setting an element's `display` to it's default display type.

Parameters:

`selector` - {string|Element|NodeList}


### styles(selector, styles)

Apply css styles to an element(s).

#### Parameters:

`selector` - {string|Element|NodeList}

`styles` - {object} CSS styles as a key:value pair, ex `{ width: '100px', height: '100px'}`.

#### Example

```javascript
domassist.styles('p', {
  width: '100px',
  height: '150px'
});
```

### addAttrs(selector, attributes)

Add attributes to elements. If an attribute that is passed is not a valid attribute for the element it will be added as a `data-*` attribute.

#### Parameters:

`selector` - {string|Element|NodeList} The element(s) to apply new attributes to.

`attributes` - {object} An object of attributes

#### Example:

```javascript
domassist.addAttrs('.my-div', {
  id: 'anchor-id',
  title: 'this is a title',
  href: 'http://google.com',
  testAttr: 'data attribute',
});
domassist.addAttrs('a', {
  id: 'anchor-id',
  title: 'this is a title',
  href: 'http://google.com',
  testAttr: 'data attribute',
});
// <div class="my-div" id="anchor-id" title="this is a title" data-href="http://www.google.com" data-test-attr="data attribute"></div>
// <a class="my-div" id="anchor-id" title="this is a title" href="http://www.google.com" data-test-attr="data attribute"></a>
```

### remove(selector, [context])

Remove element(s) from the page based on a valid CSS selector.

#### Parameters:

`selector` - {string|Element|NodeList} - A valid CSS selector. If a NodeList is passed it will be converted to an Array.

`[context]` - Where to start looking for the selector.

#### Example:

```javascript
domassist.remove('p'); // remove all paragraph tags
domassist.remove('[type="text"]', document.forms[0]); // remove all text fields in the first form
```

## License

### MIT License

Copyright (c) 2019 First+Third

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
