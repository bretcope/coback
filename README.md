# coback

Occasionally you find yourself in a position where thunks don't quite work, such as:

```js
var obj = new FakeObject(callback);
obj.doSomething();
obj.execute(); // now... how do I yield on the callback at this step?
```

Coback solves that by creating a callback which can be passed to traditional-style functions, but still yielded on at a later time.

```js
var coback = require('coback');

// just call coback to create the callback function
var callback = coback();

// pass the callback to your function/constructor
var obj = new FakeObject(callback);
obj.doSomething();
obj.execute();

// when you're ready to wait for the result, yield on the result property
var result = yield callback.result;
```

Built to work with [co](https://github.com/visionmedia/co) but likely works with other frameworks.

## Install

    npm install coback
