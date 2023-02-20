# React Course

If you enjoy the content and my teaching style, you can always enroll in my React Course (link below)

[React 18 Course](https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF)

## All My Courses

[Project Based Web Dev Courses](https://www.johnsmilga.com/)

- FormData API

[JS Nuggets - FormData API](https://youtu.be/5-x4OUM-SP8)

The FormData interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the fetch() or XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to "multipart/form-data".

- a great solution when you have bunch of inputs
- inputs must have name attribute

- e.currentTarget

In React, e.currentTarget returns the DOM element that triggered the event.

- includes()

The includes() method is a built-in method in JavaScript that is used to determine whether an array includes a certain value among its elements. The method returns a boolean value (true or false) indicating whether the array includes the specified value or not.

```js
const array = [1, 2, 3, 4, 5];

console.log(array.includes(3)); // true
console.log(array.includes(6)); // false
```

- Object From Entries

The Object.fromEntries() static method transforms a list of key-value pairs into an object.

```js
const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42],
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// Expected output: Object { foo: "bar", baz: 42 }
```

- reset()

The reset() method is a built-in method in HTML that can be used to reset all form controls to their initial values. When this method is called on a form element, it will clear any user-entered data and reset the values of all form elements to their default values.

```js
const onSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  // const name = formData.get('name');
  // console.log(name);
  // check for empty values
  const values = [...formData.values()];
  const isEmpty = values.includes('');
  if (isEmpty) {
    console.log('please provide all values');
    return;
  }

  // get an object with all values
  const data = Object.fromEntries(formData);
  // do something
  console.log(data);

  // clear inputs
  e.currentTarget.reset();
};
```

- getFormValues

```js
const getFormValues = (form) => {
  const formData = new FormData(form);

  const values = [...formData.values()];
  const isEmpty = values.includes('');
  const data = Object.fromEntries(formData);
  return { isEmpty, data };
};

export default getFormValues;
```

```js
import getFormValues from './getFormValues';

const onSubmit = (e) => {
  e.preventDefault();
  const { isEmpty, data } = getFormValues(e.currentTarget);

  if (isEmpty) {
    console.log('please provide all values');
    return;
  }

  // do something
  console.log(data);

  // clear inputs
  e.currentTarget.reset();
};
```
