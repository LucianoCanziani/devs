---
layout: "../../layouts/BlogPost.astro"
title: "How To Display Error Messages In React Hook Form"
description: "I will show you how to handle error messages in React Hook Form library. The way I demonstrate in this tutorial is easy, simple, and will suit any kind of app that you are building."
pubDate: "Oct 04 2022"
heroImage: "/mainImage/React-Hook-Form-Error-Message.png"
tags: "react, react-hook-form,errormessage,error message,react hook form error message, useform, hook, form, programming, dev, developer, code, coding"
author: "Luciano Canziani"
imgAlt: "React Hook Form Error Message"
type: "ReactJs"
---

Error messages are a great way to improve your user experience and help your users fix their mistakes.

In this tutorial, I will teach you how easy it is to display <strong>error messages with the help of React Hook Form library</strong>.

One of the many features that they have is to handle error messages when the validation criteria are not met.

If you don't know how to apply validation to your form check my article:

<a href="https://www.operationdev.com/blog/a-complete-guide-to-react-form-validation/" target=”_blank”>A Complete Guide to React Form Validation</a>

## React Hook Form Error Message

Error messages can be displayed in multiple ways and be specific about which exact error occurs.

Lets see a basic <strong>example of error message in react hook form</strong>.

```js
<input type="text" {...register("userName", { required: true })} />;
{
  errors.userName && <p>Name is required</p>;
}
```

In the previous code example, we create an input with the required validation and below that we added a conditional statement that if `errors.userName` is true, it will execute `<p>Name is required</p>` line of code.

## Multiple Error Messages

Now, lets say that we have more than one validation and we want to be specific about which one is not being fulfilled to inform the user what mistake he should fix.

```js
<input
  type="password"
  {...register("password", { required: true, minLength: 8 })}
/>;
{
  errors.password && errors.password.type === "required" && (
    <p>Password is required</p>
  );
}
{
  errors.password && errors.password.type === "minLength" && (
    <p>Password must be of more than eight characters</p>
  );
}
```

Here we added two validation types `required` and `minLength`.

When an error happens, you will get an object return named "errors", inside of it we can access the key "password" and see which type of error is.

So, by adding two specific conditionals, we can see which validation was not met and execute an appropriate message for the error.

## Different Way to Handle Error Messages

First you must import the child component that will handle the error

```js
import { ErrorMessage } from "@hookform/error-message";
```

Then, you can add it below your input and pass the value that will manage inside of name and errors in errors.

```js
 <input {...register("userName", { required: "Name is required." })} />
 <ErrorMessage errors={errors} name="userName" />
```

You can see that we defined the error message by assigning it to the required validation.

And when the error happens, the message will be executed below the input.

## Conclusion

In this article, we saw practical examples of integrating react hook form error messages when the validation fails.

If you want to learn even more about this library you can check out one of my previous articles which is full of useful information.

<a href="https://www.operationdev.com/blog/handle-react-forms-like-a-pro-with-react-hook-form/" target=”_blank”>Handle React Forms Like a Pro with react-hook-form</a>.
