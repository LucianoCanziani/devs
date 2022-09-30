---
layout: "../../layouts/BlogPost.astro"
title: "How to use React UseState Hook in your Project"
description: "In this article, you will learn how to use the useState Hook and how to implement it in your project."
pubDate: "Sep 27 2022"
heroImage: "/mainImage/react-hooks-usestate.png"
tags: "react, usestate,usestate hook, hook,how to use usestate, programming"
author: "Luciano Canziani"
imgAlt: "React UseState Hook"
type: "ReactJs"
---

In this article, you will learn how the useState Hook works and how to implement it in your project.

The useState Hook gives you the ability to track a state of data or properties inside your component by following the next steps.

## Table Content

- <a href="#Import" class="table-content-item">Import</a>
- <a href="#Initialize" class="table-content-item">Initialize</a>
- <a href="#Usage" class="table-content-item">Usage</a>
- <a href="#Full-useForm-Hook-Example" class="table-content-item">Full useForm Hook Example</a>
- <a href="#Conclusion" class="table-content-item">Conclusion</a>
<a name="Import"></a>

## 1. Import

The first step to implementing useState in your project is to import it at the top of your component

```js
import { useState } from "react";
```
<a name="Initialize"></a>

## 2. Initialize

For it to be used you need to initialize useState inside your component like this.

```js
const [state, setState] = useState(initialValue);
```

Lets break it down.

- <strong>Const:</strong> declare the state.

- <strong>number:</strong> name of your state.

- <strong>setNumber:</strong> reusable function that will help you change your state value when you need it.

- <strong>useState:</strong> hook call.

- <strong>initialValue:</strong> the initial value of your state, it can be a any type of data you want.
<a name="Usage"></a>

## 3. Usage

Here is an example of the useState hook in practice:

```js
Number Counter using useState Hookimport { useState } from "react";
const Counter = () => {
const [number, setNumber] = useState(1);
return (
 <div>
  <button onClick={() => setNumber(number +1)}>+</button>
  <span>{number}</span>
  <button onClick={() => setNumber(number -1)}>-</button>
 </div>
)
export default Counter;
```

In this example, I show you how you can set up a basic number counter app.

<img src="/gifExamples/number-counter-usestate.gif" alt="Number Counter app using useState Hook" class="img-center" />
<p style="text-align: center;font-size: 13px;color: black;">Number Counter app using useState Hook</p>

If you click the plus button it will be plus one to the state value and if you click the minus button it will be minus one.

All that by calling the setNumber function inside the onClick and determining if we want to add or decrease the state value (you can even change his value to whatever you want.)
<a name="Conclusion"></a>

## Conclusion

By reading this article you have learned the basics of the useState hook and how to apply it successfully in a functioning app.

Don't forget that the key to mastering any skill is practice!