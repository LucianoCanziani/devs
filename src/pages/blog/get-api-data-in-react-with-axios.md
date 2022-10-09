---
layout: "../../layouts/BlogPost.astro"
title: "Get API Data in React With Axios"
description: "In this article, we are going to build a React Application that fetches data from an API. We'll learn how to use Axios to make get request and display the recieved data on the page."
pubDate: "Oct 09 2022"
heroImage: "/mainImage/axios-in-react.png"
tags: "react, reactjs, fetch data from API, Axios, react Axios with useeffect, dev, developer, web developer"
author: "Luciano Canziani"
imgAlt: "React with Axios"
type: "ReactJs"
---

In this article, I will show how to make an API request in React Js using Axios.

Axios is a very popular library used to make promise-based HTTP requests and retrieve data from the web. It's super easy to use as an alternative to the Fetch API.

Let's say that you have an API HTTP address and want to get that data into your project.

Thanks to Axios you can make a simple request for that data and make use of it in your React project.

## Install Axios in React

```js
npm install axios

or

yarn add Axios
```

## React Axios Get Request

To obtain data from an API you can use <strong>Axios Get request</strong> method.

<img src="/imgExamples/axios-get-request.png" alt="Axios Get Request in React" class="img-center" />
<p style="text-align: center;font-size: 13px;color: black;">Axios Get Request in React</p>


## Axios Get Example

For the next example I will use the <a href="https://jsonplaceholder.typicode.com/">jsonplaceholder API</a> to request a batch of random users data and display it in a HTML table.


<img src="/imgExamples/users-table-data.png" alt="Users table data by making an Axios Get Request in React." class="img-center" />
<p style="text-align: center;font-size: 13px;color: black;">Users Data table with jsonplaceholder API</p>


```js
import axios from "axios"; // import Axios in your project
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]); // Prepare a useState Hook 
  // to save the requested data

  useEffect(() => { // Initialize a useEffect Hook to make the API call 
  //when the component render
    axios.get("https://jsonplaceholder.typicode.com/users") 
    // make the GET request with the HTTP address and the /users 
    //parameter to specify which data you are asking for
      .then((res) => { // Data requested in "res"
        const { data } = res;
        console.log(data); // Display data in console
        setUsers(data); // Sets data in users variable
      })
      .catch((err) => { // Error handler
        console.log(err);
      });
  });

  return (
    <div>
      <h1>USERS LIST USING AXIOS</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>User Name</th>
              <th>City</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => { // Mapping recieved data
              return (
                <tr key={index}>
                  <th>{user.name}</th>
                  <th>{user.username}</th>
                  <th>{user.address.city}</th>
                  <th>{user.email}</th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default App;
```

Check the full code with styles in my <a href="https://github.com/LucianoCanziani/api-call-with-axios-react">GitHub Repo</a>.

## Conclusion

By reading this article you have learned how to make Get() Requests in React using the Axios library.

You can learn more about Axios in their <a href="https://axios-http.com/">official website</a>.