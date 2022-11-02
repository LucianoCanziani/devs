---
layout: "../../layouts/BlogPost.astro"
title: "React Hook Form Password Match"
description: "Learn how to validate a password match with the help of React-Hook-Form."
pubDate: "Nov 02 2022"
heroImage: "/mainImage/react-hook-form-password-match.png"
tags: "react hook form, react, password, match, password match"
author: "Luciano Canziani"
imgAlt: "React Hook Form Password Match"
type: "ReactJs"
---

With the React-Hook-Form you can have controlled forms inside your React application.

They offer us a great variety of tools that allow us to pass validation rules in our inputs.

One of those validation rules is <mark>validate</mark> rule. With it, you can implement a custom function that could help (if you have read the title) to confirm if the password and password repeat match, If not, it will display an error message explaining the issue to the user.

## Password Match Example

<img src="/imgExamples/react-hook-form-password-match-example.png" alt="React-Hook-Form password match form example" class="img-center square-img" style="height: 400px;width: 400px;margin-bottom: 20px;" />

Next, I will show you the React code with comments explaining part by part and the CSS code as well.

<b>React code:</b>

```js
import { useForm } from "react-hook-form"; // Import useForm Hook
const App = () => {
  const {
    register, // Handles the register of input data
    handleSubmit, // Handles onSubmit event
    watch, // It will watch and return value of..
    //inputs by passing their name as a prop
    formState: { errors }, // Handles errors
  } = useForm(); // Declares useForm Hook
  const onSubmit = (data) => {
    // Onsubmit function grabbing the data
    console.log(data); // Displaying data collected in console
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h1>React-Hook-Form</h1>
      <h2>Password Match</h2>
      <div className="input-cont">
        <input
          id="password"
          placeholder="Password"
          type="text"
          className={errors.password ? "errorOccurred input" : "input"}
          {...register("password", { required: "Enter a password" })}
        />
        <label
          htmlFor="password"
          className={
            errors.password ? "errorOccurredLabel input-label" : "input-label"
          }
        >
          Password
        </label>
        {errors.password && (
          <p className="error-alert">{errors.password?.message}</p>
        )}
      </div>
      <div className="input-cont">
        <input
          type="text"
          id="password"
          placeholder="Repeat password"
          className={errors.passwordRepeat ? "errorOccurred input" : "input"}
          {...register("passwordRepeat", {
            required: "Repeat the password",
            validate: (value) => {// Validate function to check if they do not match
              if (watch("password") != value) {
                return "Your passwords do not match";
              }
            },
          })}
        />
        <label
          htmlFor="password"
          className={
            errors.passwordRepeat ? "errorOccurredLabel input-label" : "input-label"
          }
        >
          Repeat password
        </label>
        {errors.passwordRepeat && (
          <p className="error-alert">{errors.passwordRepeat?.message}</p>
        )}
      </div>
      <button type="submit" className="send-btn">Send</button>
    </form>
  );
};
export default App;
```
<b>CSS code:</b>

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

.errorOccurred {
	border-bottom: 1px solid #af0040 !important;
}

.errorOccurredLabel {
	color: #af0040 !important;
}

.error-alert {
	color: #af0040;
	padding: 3px;
	margin: 5px 0px;
	font-weight: 700;
	width: max-content;
	font-size: 13px;
	display: flex;
	align-items: center;
	padding-bottom: 0px;
	margin-bottom: 0px;
}

.send-btn {
	width: 100%;
	background-color: #00040d;
	color: #ffffff;
	border: 1px solid #ec598f25;
	cursor: pointer;
	padding: 5px 0px;
	font-size: 16px;
	border-radius: 50px;
}
```

## Conclusion

By reading this article you have learned how to implement a password match in your React forms using react-hook-form.

If you want to learn more about validation rules you can check the <a href="https://www.operationdev.com/blog/a-complete-guide-to-react-form-validation/" target=”_blank”>Complete Guide to React-Hook-Form Validations</a>.
