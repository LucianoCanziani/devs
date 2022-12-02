---
layout: "../../layouts/BlogPost.astro"
title: "Add a Whatsapp Chat Button on Your Website HTML Code"
description: "Learn how to add a WhatsApp link to your website's HTML chat button in a few quick steps."
pubDate: "Nov 24 2022"
heroImage: "/mainImage/Add a Whatsapp Chat Button on Your Website HTML Code.webp"
imgAlt: "Add a Whatsapp Chat Button on Your Website HTML Code"
tags: "WhatsApp Link Generator,WhatsApp Link Free Generator,Custom Messages,whatsapp link to message,free whatsapp link,whatsapp link number,best whatsapp link generator,api whatsapp link,whatsapp link share,whatsapp link generator with message,html whatsapp link with message,whatsapp chat button on website html code,how to insert whatsapp link in website,how to add whatsapp link in website"
author: "Luciano Canziani"
authorLink: "https://www.linkedin.com/in/luciano-canziani/"
type: "Whatsapp"
---

You just have successfully created a Whatsapp link using our awesome <a href="https://www.operationdev.com/tools/whatsapp-link-free-generator-create-custom-messages/" target=”_blank”>Awesome Link Generator</a>.

Congrats!

But now you must be wondering how to insert your Whatsapp link in the website's HTML chat button.

Then wonder no more!

In this quick guide, I will show you how to insert a WhatsApp link into your website

## Finding the Whatsapp Icon

If you don't have a Whatsapp icon yet you can learn how to add <a href="https://fontawesome.com/docs/web/add-icons/how-to" target=”_blank”>Font Awesome icons here</a>.

But if you do, it should look just like this:

```js
<span>
  <i className="fa-brands fa-whatsapp fa-3x" />
</span>
```

In the above code, you can see a `span` tag surrounding an `i` tag which makes a call to a Font Awesome Whatsapp Icon.

Which should look like this:

<div style="margin-bottom: 30px; text-align: center">
<img src="/imgExamples/Whatsapp Icon.webp" alt="Whatsapp Icon"  width="298px" height="296px" style="margin: 0px auto" />
</div>

## Add Your Whatsapp Link in Your HTML

For the next step, you should already have your Whatsapp link ready to go, if not, you can learn how to create one <a href="https://www.operationdev.com/blog/how-to-create-a-whatsapp-link-for-my-number/" target=”_blank”>in this article</a>.

Now you should add an `a` tag wrapping the `span`.

```js
<a href="https://wa.me/5491137807560" target="_blank">
  <span>
    <i className="fa-brands fa-whatsapp fa-3x" />
  </span>
</a>
```

Inside of it you should add the `href` (hypertext reference) and you should past your link in it.

By using the `target="_blank"`, it will open the link in a new window instead of taking your customers out of your site.

## Conclusion

In this quick guide, you have learned how to identify a chat button o icon and add your custom link to it.
