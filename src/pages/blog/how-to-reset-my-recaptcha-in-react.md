---
layout: "../../layouts/BlogPost.astro"
title: "How to Reset My re-Captcha in React"
description: "Learn how to reset your re-Captcha v2 in your React application using the react-google-recaptcha library."
pubDate: "Nov 15 2022"
heroImage: "/mainImage/React re-Captcha Reset Function.webp"
tags: "react,recaptcha,re-captcha, reset re-captcha,reset recaptcha,react-google-recaptcha"
author: "Luciano Canziani"
imgAlt: "React re-Captcha Reset Function"
type: "ReactJs"
---

In this article, you will learn how to reset your re-Captcha using the react-google-recaptcha in your React Application.

If you are still trying to implement a re-Captcha in your application you can check this <a href="https://www.operationdev.com/blog/the-ultimate-guide-of-recaptcha-v2-in-react/" target=”_blank”>article</a>.

Once you have implemented the react-google-recaptcha library successfully you just have to add one line of code.

```js
captcha.current.reset();
```

`captcha` is the variable we use with useRef to store the re-Captcha value. By adding the `current` we make sure to access his data and then we add the `reset()` function.

Allowing us to reset the re-Captcha and making the user click it again.

You can execute the reset function if you still have doubts about the human integrity of your user or just after some assigned time for safety

## React reCaptcha Reset Example

<img src="/gifExamples/recaptcha reset function.gif" alt="Reset the recaptcha in your React application using the react-google-recaptcha library." class="img-center" />

```js
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {
  const captcha = useRef(null);

  const handleSubmit = (e) => {
    captcha.current.reset();
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>react-google-recaptcha</h1>
      <h2>Reset re-Captcha</h2>
      <div>
        <ReCAPTCHA
          ref={captcha}
          sitekey="6LePN4EiAAAAAEu5ftOU9ByrDIvQDVXsbCZNdZT8"
          hl="en"
        />
      </div>
      <button type="submit">Reset</button>
    </form>
  );
};
export default App;
```

## re-Captcha Reset Explained in Video

<iframe style="margin-bottom: 35px;" width="100%" height="315" src="https://www.youtube.com/embed/kGlKgjS3HVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Conclusion

By reading this article you have learned how to reset your re-Captcha.

If you want to learn more about re-Captcha you can check their <a href="https://developers.google.com/recaptcha/docs/display" target=”_blank”>official documents</a>.
