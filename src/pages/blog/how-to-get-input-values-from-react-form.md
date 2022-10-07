---
layout: "../../layouts/BlogPost.astro"
title: "How To Get Input Values From React Form"
description: "Do you want to get data from react form and have no clue how to do it? Learn all about how to get input values from React forms with react hook form."
pubDate: "Oct 06 2022"
heroImage: "/mainImage/how-to-get-input-values-from-react-form.png"
tags: "react form input, how to get input values from react form, react value function, input value, user inputs, get value from form, reactjs forms,react, react-hook-form, useform, hook, form, programming"
author: "Luciano Canziani"
imgAlt: "How To Get Input Values From React Form"
type: "ReactJs"
---

Are developing a form with React?

You are in need to get input values and are not sure how to do it the more efficient way?

Then this article is for you.

## React Hook Form

React hook form is a React library that allows us to create controlled forms by registering values, applying validation rules, and managing errors.

In this opportunity, I will show you how to get input values using register. Which <strong>gets the value from an input</strong> and <strong>register</strong> it inside a controlled array of objects.

Before doing anything else you can install the library by executing the next code in your project terminal.

```js
npm install react-hook-form
```

## Register

Once you installed React Hook Form you have to implement it in your component like this.

```js
import { useForm } from "react-hook-form"; // Import useForm Hook
const App = () => {
const {
 register, // Handles the register of input data
 handleSubmit, // Handles onSubmit event
 formState: { errors }, // Handles errors
} = useForm(); // Declares useForm Hook
 const onSubmit = (data) => { // Onsubmit function passing the data
 console.log(data); // Displaying data collected in console
};
return (
 <form onSubmit={handleSubmit(onSubmit)}>  {/*Onsubmit function*/}
  <span>Enter your name</span>
  <input
  type="text"
  {...register("userName")}  {/*Register the input value inside the key "userName" */}
  />
  <button type="submit">Send</button>
 </form>
);
};
export default App;
```

By adding ```{…register("userName")}``` inside your input you are capturing the value the user typed and saving it with the key ```"userName"```.

## Conclusion

After reading this article you have learned how to get input values by using the react-hook-form library.

If you want to learn even more about this library, you can check out their website which is full of useful information.
react-hook-form site: <a href="https://react-hook-form.com/" target=”_blank”>Website</a>
