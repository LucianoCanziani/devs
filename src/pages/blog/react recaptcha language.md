---
layout: "../../layouts/BlogPost.astro"
title: "React reCaptcha v2 Language"
description: "Learn how to customize the reCaptcha language in your React application. By passing props, you will have your reCaptcha in the language you want."
pubDate: "Oct 21 2022"
heroImage: "/mainImage/recaptcha-language.jpg"
tags: "react,recaptcha,language,component props,recaptcha v2"
author: "Luciano Canziani"
imgAlt: "React reCaptcha Language"
type: "ReactJs"
---

You successfully implement Google reCaptcha in your React application using the react-google-recaptcha library like I show in <a href="https://www.operationdev.com/blog/the-ultimate-guide-of-recaptcha-v2-in-react/" target=”_blank”>Ultimate reCaptcha Guide for React</a>.

But now you want to change the default language it displays to suit your geographic needs?

Then this quick article is for you!

## reCaptcha Language Component Props

The code below will show you how to add the language prop `hl` inside your reCaptcha component.

```js
<ReCAPTCHA 
 sitekey="Here goes your site key" 
 hl="es" 
/>
```

I chose the Spanish language and pass it as a prop into the reCaptcha component.

## reCaptcha Supported Languages

Here you will find a full list of all the current supported languages for reCaptcha v2.

<div class="d-flex-2-col">

| Language              | Value |
| --------------------- | ----- |
| Arabic                | ar    |
| Afrikaans             | af    |
| Amharic               | am    |
| Armenian              | hy    |
| Azerbaijani           | az    |
| Basque                | eu    |
| Bengali               | bn    |
| Bulgarian             | bg    |
| Catalan               | ca    |
| Chinese (Hong Kong)   | zh-HK |
| Chinese (Simplified)  | zh-CN |
| Chinese (Traditional) | zh-TW |
| Croatian              | hr    |
| Czech                 | cs    |
| Danish                | da    |
| Dutch                 | nl    |
| English (UK)          | en-GB |
| English (US)          | en    |
| Estonian              | et    |
| Filipino              | fil   |
| Finnish               | fi    |
| French                | fr    |
| French (Canadian)     | fr-CA |
| Galician              | gl    |
| Georgian              | ka    |
| German                | de    |
| German (Austria)      | de-AT |
| German (Switzerland)  | de-CH |
| Greek                 | el    |
| Gujarati              | gu    |
| Hebrew                | iw    |
| Hindi                 | hi    |
| Hungarain             | hu    |
| Icelandic             | is    |

| Language                | Value  |
| ----------------------- | ------ |
| Indonesian              | id     |
| Italian                 | it     |
| Japanese                | ja     |
| Kannada                 | kn     |
| Korean                  | ko     |
| Laothian                | lo     |
| Latvian                 | lv     |
| Lithuanian              | lt     |
| Malay                   | ms     |
| Malayalam               | ml     |
| Marathi                 | mr     |
| Mongolian               | mn     |
| Norwegian               | no     |
| Persian                 | fa     |
| Polish                  | pl     |
| Portuguese              | pt     |
| Portuguese (Brazil)     | pt-BR  |
| Portuguese (Portugal)   | pt-PT  |
| Romanian                | ro     |
| Russian                 | ru     |
| Serbian                 | sr     |
| Sinhalese               | si     |
| Slovak                  | sk     |
| Slovenian               | sl     |
| Spanish                 | es     |
| Spanish (Latin America) | es-419 |
| Swahili                 | sw     |
| Swedish                 | sw     |
| Tamil                   | ta     |
| Telugu                  | te     |
| Thai                    | th     |
| Turkish                 | tr     |
| Ukrainian               | uk     |
| Urdu                    | ur     |
| Vietnamese              | vi     |
| Zulu                    | zu     |

</div>
````

## Conclusion

By reading this article you have learned how to customize your reCaptcha language and all the supported languages you can use.

If you want to learn more about reCaptcha v2 I encorage to read their documentation <a href="https://www.operationdev.com/blog/the-ultimate-guide-of-recaptcha-v2-in-react/" target=”_blank”>Here</a>.