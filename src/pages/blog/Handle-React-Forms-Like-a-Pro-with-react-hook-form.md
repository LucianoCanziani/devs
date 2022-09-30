---
layout: "../../layouts/BlogPost.astro"
title: "Handle React Forms Like a Pro with react-hook-form"
description: "Learn how to use the react-hook-form with this quick guide to understand the bases of the useForm Hook and use it in real projects."
pubDate: "Sep 25 2022"
heroImage: "/mainImage/React-Hook-Form.png"
tags: "react, react-hook-form, useform, hook, form, programming"
author: "Luciano Canziani"
imgAlt: "React Hooks React-Hook-Form"
type: "ReactJs"
---

Nowadays creating forms in react is easier than ever thanks to the library React Hook Form.

That's why after implementing it in so many personal and professional projects. I decided to write a quick guide to help you understand useForm Hook and use it in real projects.


## Table Content

- <a href="#Register" class="table-content-item">Register</a>
- <a href="#Validate" class="table-content-item">Validate</a>
- <a href="#Manage-Errors" class="table-content-item">Manage Errors</a>
- <a href="#Full-useForm-Hook-Example" class="table-content-item">Full useForm Hook Example</a>
- <a href="#Conclusion" class="table-content-item">Conclusion</a>


As their official website says:

>One of the key concepts in React Hook Form is to <strong>register</strong> your component into the hook. This will make its value available for both the form <strong>validation</strong> and <strong>submission</strong>.

What does that mean?

By implementing the useForm Hook in your component you can:
<a name="Register"></a>
## Register

Extract the value from an input that the user introduced (if he did), and register the data inside the useForm Hook to be used after submit.

How can you add a register in an input you want to extract data?

```js
<input
type="text"
{...register("userName")}
/>
```

By adding {…register("userName")} inside your input you are capturing the current value inside of it and saving it with the key "userName".

Which would return the next output.

```js
{
userName: "Luciano"
}
```

Now, what if we don't want to give the user the liberty to introduce whatever kind of data he wants?
Then is when the validations come to play.


<a name="Validate"></a>
## Validate

React Hook Form makes form validation as easy as it comes.

You just have to add one of the next validation rules supported besides the register code and you will be good to go.

* required
* min
* max
* minLength
* maxLength
* pattern
* validate

For example, using the "required" rule will not allow the user leaving this input empty. And you can add it like this.

```js
<input
type="text"
{...register("userName", { required: true })}
/>
```

<a name="Manage-Errors"></a>
## Manage Errors

If you decide to add validators in your input and these are not fulfilled you can execute a custom error for every input.

```js
<input
type="text"
{...register("userName", { required: true })}
/>
{errors.userName && <p>Name is required</p>}
```

By implementing a simple conditional you can handle an error in your form if the input does not meet the validation criteria provided.

If there is no validation error, errors.userName will return undefined and submit the data. But if there are, errors.userName returns an array that makes it true and there for showing the <p> tag alerting the user that he must meet the validation standards.

Now, what if you have multiple criteria and you want to show your user and specific error they must correct?
You can handle many validation errors like this.

```js
<input
type="text"
{...register("userName", { required: true, minLength: 2 })}
/>
{errors.userName && errors.userName.type === "required" && (
<p>Name is required</p>
)}
{errors.userName && errors.userName.type === "minLength" && (
<p>MinLenght of two character required</p>
)}
```

<strong>Output:</strong>

<img src="/gifExamples/useFormExample.gif" alt="Handle multiple validation errors with react-hook-form" class="img-center" />


<a name="Full-useForm-Hook-Example"></a>
## Full useForm Hook Example

Next, you'll see a fully functioning example of react-hook-form in a form component with some comments explaining bit by bit how it works.

```js
import { useForm } from "react-hook-form"; // Import useForm Hook
const App = () => {
const {
 register, // Handles the register of input data
 handleSubmit, // Handles onSubmit event
 formState: { errors }, // Handles errors
} = useForm(); // Declares useForm Hook
 const onSubmit = (data) => { // Onsubmit function grabbing the data
 console.log(data); // Displaying data collected in console
};
return (
 <form onSubmit={handleSubmit(onSubmit)}>
  <h1>Add New User Info</h1>
  <h2>Enter Name</h2>
  <input
  type="text"
  {...register("userName", { required: true, minLength: 2 })}
  />
  {errors.userName && errors.userName.type === "required" && (
  <p>Name is required</p>
  )}
  {errors.userName && errors.userName.type === "minLength" && (
  <p>MinLenght of two character required</p>
  )}
  <button type="submit">Enviar pedido</button>
 </form>
);
};
export default App;
```

<a name="Conclusion"></a>
## Conclusion

After reading this article you have learned the basics of the react-hook-form library and how to implement it in a form to register and validate input data plus managing custom errors.

If you want to learn even more about this Hook, you can check out their website which is full of useful information.
react-hook-form site: <a href="https://react-hook-form.com/" target=”_blank”>Website</a>
