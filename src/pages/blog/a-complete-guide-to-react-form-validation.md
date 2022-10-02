---
layout: "../../layouts/BlogPost.astro"
title: "A Complete Guide to React Form Validation"
description: "Find all you need to know about React form validation using the React Hook Form library and become an expert when is about validating forms in React."
pubDate: "Oct 01 2022"
heroImage: "/mainImage/React-Form-Validation.png"
tags: "react form validation, form validation, react forms,react hooks form ,react,reactjs, react js programming"
author: "Luciano Canziani"
imgAlt: "React Form Validation"
type: "ReactJs"
---

This is the complete guide you were looking for if your goal is to learn <strong>React Form Validation</strong>.

In this guide, you'll learn how to add <strong>validation</strong> in your <strong>React forms</strong> using React-Hook-Form library.

You can see how to fully implement this library in my previous article.

<a href="https://www.operationdev.com/blog/handle-react-forms-like-a-pro-with-react-hook-form/" target=”_blank”>Handle React Forms Like a Pro with react-hook-form</a>.

Now, what is form validation?

Form validation is the process where your code checks if the data provided by the user complies with a set of established rules that you can add.

### React Form Validation Rules

- <a href="#required" class="table-content-item">required</a>
- <a href="#min-max" class="table-content-item">min and max</a>
- <a href="#minLength-maxLength" class="table-content-item">minLength and maxLength</a>
- <a href="#pattern" class="table-content-item">pattern</a>
- <a href="#validate" class="table-content-item">validate</a>

<a id="required"></a>

## - required Validation

If the value provided by the user is not true, for example, an empty field. Your app will not allow to the user submit the form and execute the conditional below. Since there is an error in `"userName"` reminding the user to meet the rules given.

```js
<input 
  type="text" 
  {...register("userName", 
  { required: true })} 
/>;
{
  errors.userName && <p>Name is required</p>;
}
```

<a id="min-max"></a>

## - min and max Validation

These two form validation define the min and max value a number can have.

```js
<input 
  type="number" 
  {...register("age", 
  { min: 18, max: 99 })} 
/>;
{
  errors.age && <p>You do not meet the age requirements</p>;
}
```

In the above code, we establish using min and max if the user age is below 18 or above 99. Will not be allowed to submit the form.

<a id="minLength-minLength"></a>

## - minLength and maxLength Validation

```js
<input
  type="password"
  {...register("password", 
  { minLength: 8, maxLength: 16 })}
/>;
{
  errors.password && <p>Your password does not meet the requirements</p>;
}
```

By adding the minLength and maxLength, you are setting the number of characters required for the user's password. In the example above, the password must be between 8 and 16 characters.

If those rules are not met. The form will not be able to submit. Executing the conditional below announcing the user of the error.

<a id="pattern"></a>

## - pattern Validation

```js
<input type="text" {...register("userName", { pattern: /[A-Za-z]/ })} />;
{
  errors.password && <p>Entered value does not match name format</p>;
}
```

The pattern rule is meant to reduce the type of characters the user introduces in the input.

In this case, it will only accept letters from `A-Z` and `a-z`. Both upper and lower case.

<a id="validate"></a>

## - validate Validation

```js
<input
  type="text"
  {...register("userName", { validate: (value) => value === "1" })}
/>;
{
  errors.userName && (
    <p className="error">We could not validate the entered value</p>
  );
}
```

In the validate example we stated a function saying that if the entered value is not ```"1"``` it could not be validated and the form will not submit.

## Conclusion

By reading this article you have learned all the React Hook Form Validation rules that this library has to offer. I am planning to go in depth one by one in the next articles

Don't forget that the key to mastering any skill is practice!