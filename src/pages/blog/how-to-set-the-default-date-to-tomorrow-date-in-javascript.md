---
layout: "../../layouts/BlogPost.astro"
title: "How to Set the Default Date to Tomorrow's Date in JavaScript"
description: "Learn how to use JavaScript and the Date object to set the default date to tomorrow's date in date input. Follow our 3 step guide to easily customize the default date to suit your needs."
pubDate: "Jan 03 2023"
heroImage: "/mainImage/How to Set the Default Date to Tomorrow's Date in JavaScript.webp"
imgAlt: "How to Set the Default Date to Tomorrow's Date in JavaScript"
tags: "JavaScript,default date,tomorrow's date,set date,input,input date,form,calendar,Date object,setDate() method"
author: "Luciano Canziani"
authorLink: "https://www.linkedin.com/in/luciano-canziani/"
type: "JavaScript"
---

Learn how to set as default your date input to always be tomorrow's date.

Just by using simple JavaScript and Date object you will be able to achieve it.

Follow these steps to set the default date to tomorrow's date in JavaScript:

1. Create a variable named today and assign to it the new Date object. This variable represents the current date.

```js
let today = new Date();
```

2. Create a variable called tomorrow and assign him the today variable value.

```js
let tomorrow = new Date(today);
```

3. Use the `setDate()` method to set the tomorrow date to be plus one day of his current date.

```js
tomorrow.setDate(tomorrow.getDate() + 1);
```

Once you have the tomorrow object updated, you can use it to set the default date in a date input.

You can also use a minus operator to set the date to past days.

## Complete Code Snippet

```js
let today = new Date();
let tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
```
