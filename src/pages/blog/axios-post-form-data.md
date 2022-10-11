---
layout: "../../layouts/BlogPost.astro"
title: "Axios Post Form Data"
description: "In this article, I will show you how to post form data with Axios using React Js."
pubDate: "Oct 10 2022"
heroImage: "/mainImage/axios-post-react.png"
tags: "react, react js,axios,axios post,post form data,axios post form data"
author: "Luciano Canziani"
imgAlt: "Axios post form data"
type: "ReactJs"
---

You finish coding a good-looking React form and manage to store the data efficiently but now you have no clue how to get that data in your server?

Luckily for you and me, Axios exist and simplifies that issue with his famous <strong>POST requests</strong>.

Which allows us to <strong>post form data to the server</strong> in a really simple way.

## Axios Post Request

<img src="/imgExamples/axios-post-request.png" alt="Axios post request in React" class="img-center" />
<p style="text-align: center;font-size: 13px;color: black;">How post request works in Axios</p>

## Axios Post Example

In next example I will use the <a href="https://jsonplaceholder.typicode.com/" target=”_blank”>jsonplaceholder API</a> to make the post request and then show it in ```console.log```.

<img src="/imgExamples/posting-form-data-with-axios.png" alt="Posting form data with Axios in React" class="img-center" />
<p style="text-align: center;font-size: 13px;color: black;">React form that when submitted will execute the Post Request function.</p>

### Code

```js
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  let id = 0;

  const postRequest = async (e) => {
    e.preventDefault();

    axios.post("https://jsonplaceholder.typicode.com/todos", {
        id: id + 1,
        title: todo,
      })
      .then(function (res) {
        const { data } = res;
        console.log(data);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Posting Form Data With Axios</h1>
      <div>
        <form onSubmit={(e) => postRequest(e)}>
          <input
            type="text"
            placeholder="My todo is..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
export default App;
```

In the previous example, we just passed all the parameters we wanted to post as a query object.

Check the full code with styles in my <a href="https://github.com/LucianoCanziani/Posting-Form-Data-With-Axios" target=”_blank”>GitHub Repo</a>.

## Conclusion

After reading this article you should be able to realize who to post form data with Axios passing the parameters you want to be uploaded to your server.

If you want to learn more about Axios you can check their <a href="https://axios-http.com/" target=”_blank”>official website</a>.