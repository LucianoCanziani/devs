---
layout: "../../layouts/BlogPost.astro"
title: "The Ultimate Guide of reCaptcha v2 in React"
description: "In this ultimate guide I will show you how to implement the I am not a robot checkbox and invisible captcha from reCaptcha v2 in your React application."
pubDate: "Oct 16 2022"
heroImage: "/mainImage/react-recaptcha.png"
tags: "react,captcha,recaptcha,recaptcha v2,example, validation,invisible example,recaptcha language,dev, developer"
author: "Luciano Canziani"
imgAlt: "reCaptcha v2 in React Js"
type: "ReactJs"
---

In this ultimate step by step guide I'll show you how to integrate reCaptcha v2 with your React application.

Learn how to implement the "I am not a robot" checkbox and invisible captcha plus many other useful details and tools to master reCaptcha v2 once in for all.

## Table Content

<ul>
<li class="table-content-li">
  <a href="#captcha-mean" class="table-content-item">What Captcha Means</a>
</li>
<li class="table-content-li">
  <a href="#recaptcha-mean" class="table-content-item">What reCaptcha Means</a>
</li>
<li class="table-content-li">
 <a href="#recaptcha-v2" class="table-content-item">reCaptcha v2</a>
</li>
<li class="table-content-li">
 <a href="#recaptcha-keys" class="table-content-item">How to get reCAPTCHA v2 Site Key</a>
</li>
<li  class="table-content-li">
 <a href="#recaptcha-checkbox" class="table-content-item">reCaptcha I'm Not a Robot Test</a>
 <ul style="margin-bottom: 0px !important;">
<li class="table-content-li">
 <a href="#recaptcha-checkbox-userside" class="table-content-item">Checkbox Userside Example</a>
</li>
<li class="table-content-li">
 <a href="#recaptcha-checkbox-serverside" class="table-content-item">Checkbox Serverside Example</a>
</li>
 </ul>
</li>
<li class="table-content-li">
 <a href="#recaptcha-invisible" class="table-content-item">reCaptcha Invisible Test</a>
  <ul style="margin-bottom: 0px !important;">
 <li class="table-content-li">
 <a href="#recaptcha-invisible-example" class="table-content-item">recaptcha invisible example</a>
 </li>
 </ul>
</li>
<li>
 <a href="#recaptcha-props" class="table-content-item">Component Props</a>
</li>
<li>
 <a href="#recaptcha-useref" class="table-content-item">Functions With UseRef Hook</a>
</li>
<li>
 <a href="#Conclusion" class="table-content-item">Conclusion</a>
</li>
</ul>

<a name="captcha-mean"></a>

## What Captcha Means

Before we jump into the code there are a few things you should understand about <strong>Captcha</strong>, which stands for:

- <b>C</b>ompletely
- <b>A</b>utomated
- <b>P</b>ublic
- <b>T</b>uring test
- <b>C</b>omputers
- <b>H</b>umans
- <b>A</b>part

The Turing test is a method to determine if who is tested is a computer or a human.

<a name="recaptcha-mean"></a>

## What reCaptcha Means

Now, where does the "re" of reCaptcha comes from?

the "re" was added by Google when they created reCaptcha which is widely used among millions of websites because of its safety at the time to protect sites from angry waves of bots.

reCaptcha is by far one of the most popular user authentication services nowadays.

<a name="recaptcha-v2"></a>

## reCaptcha v2

When it comes to reCaptcha v2 there are two different versions. "I am not a robot" checkbox and the invisible captcha that makes himself known with a challenge when there is odd activity happening.

I will explain them into detail so you can understand how they work and how to implement them in your React application.

To use reCaptcha v2 in your application you'll need to install the React Google reCaptcha library and implement a component inside your app to handle the <strong>Captcha validation</strong>.

You can install it by executing the next code in your application terminal.

```js
npm i react-google-recaptcha
```

<a name="recaptcha-keys"></a>

## How to get reCAPTCHA v2 Site Key

To successfully implement any reCaptcha in your React application you must first have an official key given by google in the reCaptcha console.

To make it as easy as possible, I will made a step by step video guide about how to get reCaptcha keys from Google.

You can get there by clicking here: <a href="https://www.google.com/recaptcha/admin/" target=”_blank”>reCaptcha Console</a>.

If you play the next video you will see how easy it is to get the site key for reCaptcha.

<iframe style="margin-bottom: 35px;" width="100%" height="335" src="https://www.youtube.com/embed/0I2pULFuVkg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Let's deconstruct input by input to fully understand what we are doing

### Label Input

The label name is to identify your site in the future when you got many sites added in reCaptcha console.

### reCaptcha Type

Here we choose which reCaptcha version you want for your site. And in reCaptcha v2 the captcha types are the "I am a robot" checkbox and the invisible reCaptcha badge.

Select the one you need.

### Domains

Here we add the site domains in which our reCaptcha site key will be used.

### Owners

The emails of the owners or people that manage the site.

### Site Keys

In this article, we will only use the regular site key.

<a name="recaptcha-checkbox"></a>

## reCaptcha I'm Not a Robot Test

The famous "I'm not a robot" checkbox

<img src="/gifExamples/recaptcha-checkbox.gif" alt="reCaptcha v2 checkbox I am not a robot test" class="img-center" style="width: 400px !important; margin-bottom: 35px;" />

If you have never passed one of these I doubt your integrity as a human.

In case Google still has doubts about your humanity it will give you a visual test like this.

<img src="/imgExamples/recaptcha-visual-test.jpg" alt="reCaptcha v2 visual test" class="img-center" style="width: 400px !important; margin-bottom: 15px;" />
<p style="text-align: center;font-size: 13px;color: black;">This one can be bit more tricky sometimes so don't feel bad about yourself if you don't pass it on the first try. Credits to <a href="https://support.google.com/recaptcha/?hl=en#:~:text=What%20is%20reCAPTCHA%3F,malicious%20software%20to%20figure%20out." target=”_blank”>Google reCaptcha</a>.</p>

<a name="recaptcha-checkbox-userside"></a>

### reCaptcha Checkbox Userside Example

After you installed the react-google-recaptcha you have to import their component to your application.

```js
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {
  const [captchaValidated, setCaptchaValidated] = useState(false);
  const captcha = useRef(null);

  const validateReCaptcha = () => {
    if (captcha.current.getValue()) {
      setCaptchaValidated(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValidated) {
      alert("The data has been sent!");
    } else {
      alert(
        "You have to verify your humanity by clicking on the reCaptcha checkbox"
      );
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <ReCAPTCHA
        ref={captcha}
        sitekey="Here goes your site key"
        onChange={validateReCaptcha}
      />
      <button type="submit">Send</button>
    </form>
  );
};
export default App;
```

<a href="https://github.com/LucianoCanziani/react-recaptcha-all-types/blob/main/react-recaptcha-v2-client-side-validation.js" target=”_blank”>Check this code on GitHub.</a>

To validate the reCaptcha we use the useRef Hook

With this code, you can successfully implement your reCaptcha v2 checkbox in your React application.

<a name="recaptcha-checkbox-serverside"></a>

### reCaptcha Checkbox Serverside Example

In the previous example, we render the reCaptcha on the front-end side of a React application.

That may safe most of the time but if you want to decrease the chances of a bot passing the lines I recommend you validate the reCaptcha in the back end of your application.

The next video is from <a href="https://www.youtube.com/c/DCoders" target=”_blank”>Programming With Prem</a> youtube channel and he will show you how to validate your reCaptcha with Node Js.

<iframe style="margin-bottom: 35px;" width="100%" height="315" src="https://www.youtube.com/embed/e_vMoPCBfqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<a name="recaptcha-invisible"></a>

## reCaptcha Invisible Test

The invisible reCaptcha does not show a captcha checkbox for the user to click. But is executed when users click a button on the page, a form submit button for example.

If it detects any odd behavior will be prompted to solve a captcha when the click occurs. The captcha can be custom to be <mark>image</mark> or <mark>audio</mark>.

<a name="recaptcha-invisible-example"></a>

### reCaptcha Invisible Example

```js
import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {
  const captcha = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await captcha.current.executeAsync();
    if (token) {
      alert("The data has been sent!");
    } else {
      alert("You were not able to verify your humanity :(");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <ReCAPTCHA
          ref={captcha}
          sitekey="Here you add your reCaptcha API key"
          size="invisible" // we define it to be invisible
          type="image" // or audio test
          badge="bottomleft" // or you can place it with bottomright and inline
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default App;
```

<a href="https://github.com/LucianoCanziani/react-recaptcha-all-types/blob/main/react-recaptcha-v2-invisible-client-side-validation.js" target=”_blank”>Check this code on GitHub.</a>

<a name="recaptcha-props"></a>

## reCaptcha v2 Component Props

<table class="simple-table">
        <thead>
          <tr>
            <th class="simple-thead-th">
              Name
            </th>
            <th class="simple-thead-th">Type</th>
            <th class="simple-thead-th">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
             class="simple-tbody-th"
              >sitekey</th>
            <th
            class="simple-tbody-th"
              >string</th>
            <th
            class="simple-tbody-th"
              >Here you pass your API key to the captcha component</th>
          </tr>
          <tr>
            <th
              class="simple-tbody-th"
              >onChange</th>
            <th
            class="simple-tbody-th"
              >func</th>
            <th
            class="simple-tbody-th"
              >When the reCaptcha is completed it will execute the assigned function</th>
          </tr>
          <tr>
            <th
             class="simple-tbody-th"
              >theme</th>
            <th
            class="simple-tbody-th"
              >enum</th>
            <th
            class="simple-tbody-th"
              >You can choose between the <mark>light</mark> or <mark>dark</mark> theme</th>
          </tr>
          <tr>
            <th
              class="simple-tbody-th"
              >type</th>
            <th
       class="simple-tbody-th"
              >enum</th>
            <th
           class="simple-tbody-th"
              >If the initial checkbox didnt made clear that you were a human, Google allows you to choose a secondery between <mark>image</mark> and <mark>audio</mark></th>
          </tr>
          <tr>
            <th
              class="simple-tbody-th"
              >tabindex</th>
            <th
           class="simple-tbody-th"
              >number</th>
            <th
           class="simple-tbody-th"
              >The default value on the element is of "0"</th>
          </tr>
          <tr>
            <th
             class="simple-tbody-th"
              >onExpired</th>
            <th
           class="simple-tbody-th"
              >func</th>
            <th
           class="simple-tbody-th"
              >Function to be called when the checkbox is expired and needs to be redone by the user. By default it will execute the <mark>onChange</mark> function with null value</th>
          </tr>
          <tr>
            <th
             class="simple-tbody-th"
              >onErrored</th>
            <th
           class="simple-tbody-th"
              >func</th>
            <th
           class="simple-tbody-th"
              >Function to be called when the test gets an error, according to google is most likely to internet problems</th>
          </tr>
          <tr>
            <th
            class="simple-tbody-th"
              >stoken</th>
            <th
           class="simple-tbody-th"
              >string</th>
            <th
          class="simple-tbody-th"
              >Set parameter, which allows your captcha to be used from different domains</th>
          </tr>
          <th
           class="simple-tbody-th"
              >hl</th>
            <th
           class="simple-tbody-th"
              >string</th>
            <th
           class="simple-tbody-th"
              >With hl you can choose the language that you want to display in your reCaptcha. see all languages  <a href="https://developers.google.com/recaptcha/docs/language" target=”_blank”>here</a></th>
          </tr>
          <th
             class="simple-tbody-th"
              >size</th>
            <th
            class="simple-tbody-th"
              >enum</th>
            <th
           class="simple-tbody-th"
              >Here you can change the size of your checkbox between <mark>compact</mark>, <mark>normal</mark> and <mark>invisible</mark> The last one helps you to implement the invisible reCaptcha test</th>
          </tr>
          <th
            class="simple-tbody-th"
              >badge</th>
            <th
           class="simple-tbody-th"
              >enum</th>
            <th
           class="simple-tbody-th"
              >If you choose to use the invisible reCaptcha you can display a safety badge in your site and choose in which place you want it between <mark>bottomright</mark>, <mark>bottomleft</mark> or <mark>inline</mark></th>
          </tr>
        </tbody>
      </table>

<a name="recaptcha-useref"></a>

## reCaptcha Functions With UseRef Hook

You can call some useful functions accessed via ref.

### getValue()

returns the value of the captcha field.

### getWidgetId()

returns a reCaptcha widget Id.

### reset()

Resets your React applications.

### execute()

If you are using the invisible reCaptcha you can execute a captcha challenge manually.

### executeAsync()

Executes a captcha challenge and returns a promise.

<a name="Conclusion"></a>

## Conclusion

Thank you for reading this article. If you want to learn more about reCaptcha v2 you can check out their official documentation in <a href="https://developers.google.com/recaptcha/docs/display" target=”_blank”>Google Developers</a>.
