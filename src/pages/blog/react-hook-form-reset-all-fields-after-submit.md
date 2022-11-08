---
layout: "../../layouts/BlogPost.astro"
title: "React-Hook-Form Reset All Fields After Submit"
description: "Reset all React form inputs using the reset API of react-hook-forms with code examples."
pubDate: "Nov 08 2022"
heroImage: "/mainImage/react-hook-form-reset-all-fields-after-submit.jpg"
tags: "react hook form, react,react-hook-form,reset, fields, submit, reset after submit"
author: "Luciano Canziani"
imgAlt: "React-Hook-Form Reset All Fields After Submit"
type: "ReactJs"
---

You just successfully submit data in your React form using the react-hook-form library. But said data is still laying in the inputs without having plans of disappearing soon?

Then in this quick article, I'll teach you how to fix that.

## Reset All Fields After Submit Example

In the next example, we use the reset API that react-hook-form offers us and we execute it right at the end of the `onSubmit` function.

By executing the `reset()` function, you will be able to clear all inputs.

<img src="/gifExamples/reset-all-fields-after-submit.gif" alt="React-Hook-Form reset all fields after submit example" class="img-center square-img" style="height: 380px;width: 400px;margin-bottom: 20px;" />

### Example React Code

```js
import { useForm } from "react-hook-form";
const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // Here you manipulate the form data
    // And below you reset all inputs
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h1>React-Hook-Form</h1>
      <h2>Reset All Fields After Submit</h2>
      <div className="input-cont">
        <input
          id="name"
          placeholder="name"
          type="text"
          className="input"
          {...register("name")}
        />
        <label htmlFor="name" className="input-label">
          Name
        </label>
      </div>
      <button type="submit" className="send-btn">
        Send
      </button>
    </form>
  );
};
export default App;
```

### Example CSS Code

```css
h1 {
	font-size: 31px;
	margin: 0px;
	margin: 10px auto;
	text-align: center;
	color: #ec5990;
}

h2 {
	color: #c1c1c1;
	text-align: center;
	margin-top: 0px;
	margin-bottom: 30px;
}

.form {
	margin: 100px auto;
	width: 350px;
	display: flex;
	flex-direction: column;
	padding: 50px 40px;
	background: #07122a;
	border-radius: 30px;
}

.input-cont {
	position: relative;
	margin: 30px 0px;
}

.input {
	border: none;
	border-bottom: 1px solid silver;
	background-color: #00000000;
	font-size: 17px;
	box-sizing: border-box;
	color: #fff;
	height: 40px;
	width: 100%;
}

.input::placeholder {
	color: transparent;
}

.input:placeholder-shown~.input-label {
	top: 10px;
	border-right: none;
	border-left: none;
	font-size: 15px;
}

.input-label {
	color: #c8c8c8;
	display: block;
	pointer-events: none;
	position: absolute;
	top: -20px;
	font-size: 13px;
	transition: 0.2s;
}

.input:focus {
	border-bottom: 1px solid #4d4d4d;
	outline: none;
}

.input:focus~.input-label {
	background-color: rgba(255, 255, 255, 0);
	color: #dcdcdc;
	position: absolute;
	top: -20px;
	transition: 0.2s;
	font-size: 13px;
}

.send-btn {
	width: 100%;
	background-color: #00040d;
	color: #ffffff;
	border: 1px solid #ec598f25;
	cursor: pointer;
	padding: 15px 0px;
	font-size: 16px;
	border-radius: 50px;
	letter-spacing: 2px;
    text-transform: uppercase;
}
```
## Conclusion

By reading this article you have learned how to implement the reset API in your React forms using react-hook-form.

If you want to learn more about the reset API you can check the <a href="https://react-hook-form.com/api/useform/reset" target=”_blank”>reset documentation</a>.
