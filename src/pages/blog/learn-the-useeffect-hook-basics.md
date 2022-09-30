---
layout: "../../layouts/BlogPost.astro"
title: "Learn the useEffect Hook Basics"
description: "Learn the basics of the useEffect hook with some easy to understand examples."
pubDate: "Sep 27 2022"
heroImage: "/mainImage/react-hooks-useeffect.png"
tags: "react,reactjs,react useeffect, useeffect,useeffect hook, hook,how to use useeffect, programming"
author: "Luciano Canziani"
imgAlt: "React useEffect Hook"
type: "ReactJs"
---

First of all, why it's called useEffect?

It's called useEffect because of the <strong>side effects</strong> you can do by applying the hook inside a functional component.

By doing that you can set loading screens or even fetch data with this hook.

So in this quick guide, you will learn the basics of how to implement the useEffect hook inside your project with a few easy code examples.

## 1. Import

```js
import { useEffect } from "react";
```

## 2. Implementation

I'll show you three ways (ordered by difficulty), to implement the useEffect hook in your code:

### - First Example

Code:

```js
useEffect(() => {
 console.log("I get printed every time your app renders!")
})
```

Output:

```js
I get printed every time your app renders!
```

By writing your useEffect hook like this, everything inside your hook will be executed every time your application renders
Render meaning: it is called render when your code turns into an interactive page. 

An event inside your code could make your component render again and execute your useEffect hook again.

### - Second Example

Code:

```js
const [name, setName] = useState("");
useEffect(() => {
 console.log(name)
},[name])
return (
<input type="text" onChange={(e) => setName(e.current.value)} />
)
```

Output:

```js
L
Lu
Luc
Luci
Lucia
Lucian
Luciano
```

In this example, every time you write a letter in the input it executes an onChange event calling the useState hook to change the name value to the one in the input.

So by changing the name value in the array at the end of the useEffect.

The hook will be executed and print the exact value that is inside the input at the moment the name value changes.

### - Third Example

Code:

```js
import { useEffect, useState } from "react";
const LoadingTimer = () => {
 const [loading, setLoading] = useState(true);
 useEffect(() => {
  const timer = setTimeout(() => {
   setLoading(false);
  }, 5000);
  return () => clearTimeout(timer);
 }, []);
return (
<div>
 { loading === true ?
  <h1>Loading…</h1>
 :
  <h1>Hello world!</h1>
 }
</div>;
)
};
export default LoadingTimer;
```

Output:

<img src="/gifExamples/loading-screen-useeffect.gif" alt="useEffect Hook Loading Screen" class="img-center" />
<p style="text-align: center;font-size: 13px;color: black;">Loading Screen using useEffect Hook</p>

You can use the useEffect to make a loading screen with setTimeout (function that sets a time delay.)

By setting a setTimeOut inside the useEffect hook be can make a loading effect in or component with a ternary conditional which state that if the variable "loading" is true (which it is since it was defined true when it was declared with the useState hook) it will return a text saying that the app is loading.

The useEffect will be executed when the app renders and the setTimeOut.
when the 5 seconds defined pass, the loading value will get changed to false. 

Making the loading text disappear and the Hello world! render in our app.

## Conclusion

In this quick guide, I showed you the basics of the React useEffect hook but there is so much more you can do with it.
Hope you guys appreciate and found helpful insight in this article.

You can learn more about the useEffect Hook by checking their official documentation in their <a href="https://reactjs.org/docs/hooks-effect.html"  target=”_blank”>website</a>.