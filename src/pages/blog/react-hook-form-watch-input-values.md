---
layout: "../../layouts/BlogPost.astro"
title: "React-Hook-Form Watch Input Values"
description: "Learn how to access inputs values in your React form usign the watch method from react-hook-form."
pubDate: "Nov 09 2022"
heroImage: "/mainImage/React-Hook-Form watch Method to Access Input Value.jpg"
tags: "react hook form, react,react-hook-form,watch, fields, submit, Input value,array"
author: "Luciano Canziani"
imgAlt: "react-hook-form watch method. Get input value"
type: "ReactJs"
---

In this article, I will show you how to access your inputs values using the watch method
in react-hook-forms.

If you want to access an input value before submitting you can use the watch method for it.

By just adding parenthesis beside it and entering the register value of the input you want their current value and Ta-Da!

```js
watch("input register name");
```

You just access the input value.

Now, what if you want to access all the input values and make an array with them.

Is as easy as writing this line of code:

```js
const InputsValues = watch(["input1", "input2"]);
```

You may have noticed that the first value it grabs is ```undefined``` since the inputs are empty.

you can fix that with the defaultValues method. With it, you can assign a default value to the inputs like this.

```js
const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      input1: "Operation",
      input2: "Dev",
    },
  });
```

If you don't want any default value in your inputs or undefined value you can just leave it as an empty string.

## React-Hook-Form Watch Method Example

<iframe style="margin-bottom: 35px;" width="100%" height="315" src="https://www.youtube.com/embed/4FUMKheU25g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### React Code

```js
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      Name: "",
      LastName: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const InputsValues = watch(["Name", "LastName"]);
  console.log("watch method", InputsValues);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <h1>React-Hook-Form</h1>
      <h2>Watch Inputs Field Values</h2>
      <div className="input-cont">
        <input
          id="Name"
          placeholder="Name"
          type="text"
          className="input"
          {...register("Name")}
        />
        <label htmlFor="Name" className="input-label">
          Name
        </label>
      </div>
      <div className="input-cont">
        <input
          id="LastName"
          placeholder="Last Name"
          type="text"
          className="input"
          {...register("LastName")}
        />
        <label htmlFor="LastName" className="input-label">
          Last Name
        </label>
      </div>
      <button type="submit" className="send-btn">
        Submit
      </button>
    </form>
  );
};
export default App;
```

### CSS Code

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
```

## Conclusion

By reading this article you have learned how to implement the watch method to access inputs values before submit and the defaultValues method to assign a default value to your inputs.

If you want to learn more about the watch method you can check the <a href="https://react-hook-form.com/api/useform/watch" target=”_blank”>watch documentation</a>.
