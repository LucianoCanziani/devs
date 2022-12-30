---
layout: "../../layouts/BlogPost.astro"
title: "Get All Checked Checkboxes in JavaScript"
description: "Select all the checked checkboxes and push their values into an array. With the use of DOM, you can select all checkboxes and loop them through a forEach to select only the checked ones and push them into an array."
pubDate: "Dec 30 2022"
heroImage: "/mainImage/Get All Checked Checkboxes in JavaScript.webp"
imgAlt: "Get All Checked Checkboxes in JavaScript"
tags: "JavaScript, checkboxes, checked, array"
author: "Luciano Canziani"
authorLink: "https://www.linkedin.com/in/luciano-canziani/"
type: "JavaScript"
---

Do you want to get the values of all the checkboxes that are checked values and save them into an array?

Then you are in luck because that is exactly what I will show you here.

First, you need to access the checkboxes through DOM using querySelectorAll and save it in a variable.

```js
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
```

we initialize where we will save the checked values.

```js
const checkedValues = [];
```

And we create a `forEach` loop and we use a `if` conditional to determine if the checkbox is checked. If it is checked, you can add its value to an array using the push() method.

```js
checkboxes.forEach((checkbox) => {
  if (checkbox.checked) {
    checkedValues.push(checkbox.value);
  }
});
```

And that's it! You now have an array of the values of all checked checkboxes.

## Complete Code Snippet

```js
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkedValues = [];

checkboxes.forEach((checkbox) => {
  if (checkbox.checked) {
    checkedValues.push(checkbox.value);
  }
});
```
