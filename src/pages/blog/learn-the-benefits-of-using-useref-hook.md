---
layout: "../../layouts/BlogPost.astro"
title: "Learn the Benefits of using useRef Hook"
description: "Learn all about how the useRef Hook can help you in your day to day life as a programmer."
pubDate: "Sep 30 2022"
heroImage: "/mainImage/react-hooks-useref.png"
tags: "react,reactjs,react useref, useref,useref hook, hook,how to use useref,learn useref, programming"
author: "Luciano Canziani"
imgAlt: "React useRef Hook"
type: "ReactJs"
---

On the contrary to useState, you can use the useRef Hook to persist a value even if your component renders.

For example, you could make a render tracker to know how many Re-renders your app had.

But if you try to make this tracker with the useState Hook you will fail, since this Hook itself provokes a Re-render in your app, you would get trapped in an infinite loop.

To understand the following example you should know that useRef Hook only returns one object called “current”.

An object that is initialized when you call the Hook inside and will persist as long as the component is alive.

## Render Tracker with useRef Hook

<img src="/gifExamples/render-tracker-counter.gif" alt="Render tracker using useRef Hook to know how many time has my project been render" class="img-center" />
<p style="text-align: center;font-size: 13px;color: black;">Render tracker using useRef Hook</p>

Example Code:

```js
import React, { useRef, useEffect,useState } from "react";
const App = () => {
 const [state, setState] = useState(false)
 const renderCounter = useRef(0);
 useEffect(() => {
  renderCounter.current = renderCounter.current + 1;
 });
 return (
  <div>
   <div>Render counter: {renderCounter.current}</div>
   <button onClick={() => setState(!state)}>Render</button>
  </div>
 );
};
export default App;
```

In the above example, you can see that by clicking the Render button, you change the boolean value of the state variable initialized with useState Hook.

Story short, by clicking that button, you'll change the state value and consequently force your app to Re-render and execute useEffect hook to add a plus one in the render tracker.

## In which real case scenario could useRef Hook be useful?

Let's say you don't want to know how many times a component renders. But instead, you need to know how many times a user realizes an action.

You can replicate the render tracker example and modify the useEffect Hook like this:

```js
useEffect(() => {
stateChangeCounter.current = stateChangeCounter.current + 1;
},[state]);
Or keeping a previous value of a changed state.

import React, { useRef, useEffect, useState } from "react";
const App = () => {
 const [name, setName] = useState("");
 const previousName = useRef("");
 useEffect(() => {
  previousName.current = name;
 }, [name]);
 return (
  <div>
   <input 
    type="text" 
    value={name} 
    onChange={(e) => setName(e.target.value)} 
   />
   <h2>Current Name: {name}</h2>
   <h2>Previous Name: {previousName.current}</h2>
  </div>
 );
};
export default App;
```

Or even use it to access DOM to get a value or even add styles and animations.

```js
const focusAnimation = useRef();
useEffect(() => {
 focusAnimation.current.focus();
}, []);
return (
 <input type="text" ref={focusAnimation} />
);
```

By executing the code from above you will get the input focus on render your App.

***

So, by reading this article you have learned the bases of the useRef Hook and some of the many ways you can implement it.

Thanks for reading my article. If there is any technical inaccuracy, you can comment below or contact me.