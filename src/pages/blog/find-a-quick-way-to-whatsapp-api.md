---
layout: "../../layouts/BlogPost.astro"
title: "Find A Quick Way To Whatsapp API"
description: "Implement Whatsapp API by sending users to your chat, predefined messaging, and styling messages with URL-encoding."
pubDate: "Sep 28 2022"
heroImage: "/mainImage/Whatsapp-API-For-Websites.png"
tags: " whatsapp, api, Whatsapp api,messaging,web development, programming"
author: "Luciano Canziani"
imgAlt: "Whatsapp API For Websites"
type: "API"
---

## Table Content

- <a href="#Whatsapp-API" class="table-content-item">Whatsapp API</a>
- <a href="#Predefined-Message" class="table-content-item">Whatsapp Predefined Message</a>
- <a href="#URL-encoding" class="table-content-item">URL Styling with URL-encoding</a>
- <a href="#Conclusion" class="table-content-item">Conclusion</a>


You are looking to implement Whatsapp messages on your website and you have no clue where to start?

Then look no more.

In this article, you'll find the basics about how to implement Whatsapp API messages and how to style to them.

<a name="Whatsapp-API"></a>

## Whatsapp API

You can access this API easily by introducing the phone number you want your client's messages to get sent inside the next URL.

Your phone number should be where the ones are.

```html
https://api.whatsapp.com/send/?phone=11111111111
```

Now, lets break this URL down to fully understand it,

```html
https://api.whatsapp.com
```

Here you are calling the Whatsapp API

```html
/send/
```

between the two slashes you specified that you want to send a message.

```html
?phone=11111111111
```

And here to where the phone you want to redirect your user.

You can implement it on your website by adding it inside an HTML ```<a>``` tag like this.

```html
<a href="https://api.whatsapp.com/send/?phone=11111111111">Redirect to Whatsapp</a>
```

You will successfully send the user to your WhatsApp chat with the previous link.

But what about if you want them to go with a predefined text message?

<a name="Predefined-Message"></a>

## Whatsapp Predefined Message

You can send your user a predefined message by adding &text= after your phone number.

Which will look like below.

```html
https://api.whatsapp.com/send/phone=1111111111&text=This%20is%20a%20predefined%20message
```

This is when the URL styling comes to play.

<a name="URL-encoding"></a>

## URL Styling with URL-encoding

In case you haven't noticed, I separate the words of the predefined message by adding ```%20``` between them.

Excluding letters and a short list of other characters, every other must be translated to URL-encoding, also known as "percent-encoding".

Is a way to specify the URL of some characters that are not allowed directly.

For example the ```%20``` is equal to space. So if we don't separate words with it, they would be all together with no spaces at the moment of sending the message.

How about adding a line jump to our message?

You can easily do that by adding ```%0A``` when you want the line jump to be at.

And the list goes on.

You can check more URL-encoding code by clicking <a href="https://www.urlencoder.org/" target=”_blank”>here</a>

<a name="Conclusion"></a>

## Conclusion

After reading this article you have learned the basics of how to use Whatsapp API by sending the user to your chat, predefined messaging and styling said messages with URL-encoding.