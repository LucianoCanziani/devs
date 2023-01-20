---
layout: "../../layouts/BlogPost.astro"
title: "JavaScript Recursive Function: Explained with Examples"
description: "Unlock the power of JavaScript Recursive Functions with this quick and useful guide. Dive into straight to the point explanations and fun examples to strengthen your knowledge."
pubDate: "Jan 21 2023"
heroImage: "/mainImage/JavaScript Recursive Function Explained with Examples.webp"
imgAlt: "JavaScript Recursive Function: Explained with Examples"
tags: "JavaScript, Recursive Function,recursion, function,recursive,examples"
author: "Luciano Canziani"
authorLink: "https://www.linkedin.com/in/luciano-canziani/"
type: "JavaScript"
---

A recursive function is a function that calls itself in some part of his code. To solve a problem or accomplish a task.

```js
function RecursiveFunction(value){
  if(/*Checks value*/){
    // Code executed if the value is met
  } else if (/*Checks if there is a next value*/){
   // Repeats the function until the value is met
   RecursiveFunction(nextValue)
  } else {
    // Error handler if the value is never met
  }
}
```

The function must have a base case, which is a condition that stops the recursion and allows the function to return a result. Without a base case, the function would continue to call itself indefinitely, resulting in an infinite loop.

Each time the function calls itself, a new execution context is added to the call stack. Data structure that stores information about the current state of the program.

If the recursion is too deep or infinite, the call stack can overflow and the program will get slower or crash.

That is why you always have to add an error handler to your function.

## Recursive Function Examples

More examples so you can strengthen your knowledge

### Plus One Function Until Value is Met

You could easily do this in a loop but is a basic concept to help you understand recursive functions.

```js
let number = 1;

function PlusOne() {
  number = number + 1;
  if (number < 10) {
    PlusOne();
  }
}

PlusOne();
```

### Let's Count Sheeps

Let's count sheep till we fall asleep.

```js
function sheepCounter(number) {
  let awake = confirm(number + " Sheep");

  if (awake) {
    sheepCounter(number + 1);
  } else {
    console.log("Fall asleep");
  }
}
sheepCounter(1);
```

### From 100 to 0

Let's count backward from one hundred to zero.

```js
function counter(number) {
  if (number === 0) {
    console.log(number - 1 + "!");
  } else {
    console.log(number);
    counter(number - 1);
  }
}
counter(100);
```
