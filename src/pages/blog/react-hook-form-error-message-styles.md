---
layout: "../../layouts/BlogPost.astro"
title: "React-Hook-Form Error Message Styles"
description: "Find how to style your React-Hook-Form error messages with CSS, error icons and Pop-Up alerts with react-toastify."
pubDate: "Oct 30 2022"
heroImage: "/mainImage/react-hook-form-error-styles.png"
tags: "error, error message, react hook form, error message styles, form style, react, react form"
author: "Luciano Canziani"
imgAlt: "React hook form error messages styles with CSS and pop up alerts"
type: "ReactJs"
---

Creating clean and clear error messages is a critical step in the user experience while submitting a form.

React-Hook-Form is a great JavaScript library to create controlled error messages in your React forms. But if you want your user to have a good UX (User Experience), you'll have to give a detailed error about what is missing or wrong in the form and equally important, show the error message with a good UI (User Interface) style.

So in this article, I'll show, you some examples of error messages with CSS styles and Pop-ups I use in my everyday job as a developer.

First, you must install React hook form library in your React application.

```js
npm install react-hook-form
```

## All Red Error Message

<img src="/gifExamples/first-error-message-form.gif" alt="Error message form example using React hook form." class="img-center" style="width: 60% !important" />

Converting all red is one of the most common ways of alerting the user that something is wrong.

Input border, label, error message, and a nice-looking error icon. All with the same color. <span style="color: #FF3333">Red!</span>

You can see that I added conditionals inside the classNames to activate the error styles

React code:

```js
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>Enter Your Name</h2>
      <div className="input-cont">
        <input
          id="userName"
          type="text"
          className={errors.userName ? "errorOccurred input" : "input"}
          placeholder="Name"
          {...register("userName", { required: true })}
        />
        <label
          htmlFor="userName"
          className={
            errors.userName ? "errorOccurredLabel input-label" : "input-label"
          }
        >
          Name
        </label>
        {errors.userName && (
          <p className="error-alert">
            <img src="2.png" alt="" className="error-icon" />
            Complete this field
          </p>
        )}
      </div>
      <button className="send-btn" type="submit">
        Send
      </button>
    </form>
  );
};
export default App;
```

CSS code:

```css
h2 {
  color: #c1c1c1;
  text-align: center;
  margin-bottom: 30px;
}

.form {
  margin: 100px auto;
  width: 250px;
  display: flex;
  flex-direction: column;
  padding: 50px 40px;
  background: #0f0f0f;
  border-radius: 30px;
}

.input-cont {
  position: relative;
  margin: 30px 0px;
}

.input {
  border: none;
  border-bottom: 1px solid silver !important;
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

.input:placeholder-shown ~ .input-label {
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

.input:focus ~ .input-label {
  background-color: rgba(255, 255, 255, 0);
  color: #dcdcdc;
  position: absolute;
  top: -20px;
  transition: 0.2s;
  font-size: 13px;
}

.errorOccurred {
  border-bottom: 1px solid rgb(255, 0, 0) !important;
  color: rgb(255, 0, 0);
}

.erroroOccurredLabel {
  color: rgb(255, 0, 0) !important;
}

.error-alert {
  color: #ff3333;
  padding: 3px;
  margin: 5px 0px;
  font-weight: 700;
  width: max-content;
  font-size: 13px;
  display: flex;
  align-items: center;
}

.error-icon {
  width: 18px;
  margin-right: 5px;
}

.send-btn {
  width: 100%;
  background-color: #f2f2f2;
  color: #0f0f0f;
  border: none;
  padding: 5px 0px;
  font-size: 16px;
  border-radius: 50px;
}
```

## Error message + Pop-up

<iframe style="margin-bottom: 35px;" width="100%" height="315" src="https://www.youtube.com/embed/s5rAG_2Rqsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Plus given an error message in the input in question, you can also display a pop-up alerting the user he has committed an error.

This helps a lot when the user is filling out a long form on a mobile device and does not know why the submit button is not working.

For this one, we will use the react-toastify library.

You can install it in your React application by executing the next code in your terminal:

```js
npm i react-toastify
```

We use the same exact CSS code of the previous example and in the React code, we import the react-toastify library.

Below our input, we add the Pop-Up function executioner if there is an error and we pass the message through a react-hook-form tool.

Where we can assign the error text inside our input.

React code:

```js
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {};

  const PopUpMessage = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h2>Enter Your Name</h2>
      <div className="input-cont">
        <input
          id="userName"
          type="text"
          className={errors.userName ? "errorOccurred input" : "input"}
          placeholder="Name"
          {...register("userName", { required: "Complete your name" })}
        />
        <label
          htmlFor="userName"
          className={
            errors.userName ? "errorOccurredLabel input-label" : "input-label"
          }
        >
          Name
        </label>
        {errors.userName && (
          <p className="error-alert">
            <img src="2.png" alt="" className="error-icon" />
            {errors.userName?.message}
          </p>
        )}
        {/* If an error happens in one of the inputs it will display a 
          Pop-Up error message explaning what needs to be done */}
        {errors.userName && PopUpMessage(errors.userName?.message)}
      </div>
      <button className="send-btn" type="submit">
        Send
      </button>
      <ToastContainer />
    </form>
  );
};
export default App;
```

## Conclusion

By reading this article you have learned how to style error messages in your React form using react-hook-form and react-toastify libraries.

If you want to learn more about them you can check their official documentation.

### react-hook-form
<a href="https://react-hook-form.com/" target=”_blank”>https://react-hook-form.com/</a>

### react-toastify
<a href="https://www.npmjs.com/package/react-toastify" target=”_blank”>https://www.npmjs.com/package/react-toastify</a>