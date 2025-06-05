---
title: CI/CD with Google Cloud Run and Xcode Cloud 
date: "2025-06-05T00:00:00.000Z"
template: "post"
draft: false
slug: "/posts/soon"
category: "DevOps"
description: "Recently, I had a really smooth experience working with CI/CD — it made deploying my apps so much easier! I set it up first with a Spring project on GCP(cloud run): building the app, pushing it to the container registry, and running it, all automatically. Watching the whole process happen without manual steps was honestly very satisfying!"
socialImage: "./media/square.jpg"
---

<meta name="twitter:image" content="https://lulwah.dev/static/61ccf272831be1f9dd520a9b5d70a45e/af3f0/vaporPic.webp"/> 
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="Bearer Auth and Basic Auth Vapor 4">
<meta name="twitter:description" content="Bearer authentication and Basic authentication are two common types of authentication mechanisms. In Vapor 4, these authentication mechanisms can be easily implemented using the built-in authentication middleware.">



Recently, I had a really smooth experience working with CI/CD, it made deploying my apps so much easier!🥳

I set it up first with a Spring project on GCP(cloud run): building the app, pushing it to the container registry, and running it, all automatically. Watching the whole process happen without manual steps was honestly very satisfying!

<div style="display: flex; flex-direction: column; gap: 20px; margin: 20px auto; max-width: 800px; align-items: center;">
  <figure style="margin: 0; text-align: center;">
    <img src="https://media.licdn.com/dms/image/v2/D4D22AQGlpAfwAmj2iw/feedshare-shrink_2048_1536/B4DZZyNYlrG4Ao-/0/1745672840113?e=1752105600&v=beta&t=08PIufyrGaiWM5qkBBABTFyL0VhjEoQrB7HPe1x3fr0" alt="CI/CD Pipeline" style="width: 100%; max-width: 600px; height: auto; object-fit: cover;">
  </figure>
  <figure style="margin: 0; text-align: center;">
    <img src="https://media.licdn.com/dms/image/v2/D4D22AQFRTjT80Of1UA/feedshare-shrink_2048_1536/B4DZZyNYlnHwAo-/0/1745672839207?e=1752105600&v=beta&t=dykzl5YONI0UpA6e8Y7FTq__II5jVDWinx_nCYyVAvs" alt="Cloud Run Dashboard" style="width: 100%; max-width: 600px; height: auto; object-fit: cover;">
  </figure>
    <br>
</div>


I also gave Xcode Cloud a shot for an iOS project(نقاء), and setting it up was even easier than I expected. It barely took any configuration to get my builds running in the cloud and send an email to TestFlight users. Super clean and simple experience. 

<div style="display: flex; flex-direction: column; gap: 20px; margin: 20px auto; max-width: 800px; align-items: center;">
  <figure style="margin: 0; text-align: center;">
    <img src="https://media.licdn.com/dms/image/v2/D4D22AQEuVqBfH8PIAQ/feedshare-shrink_800/B4DZZyNYmGG4Ag-/0/1745672838414?e=1752105600&v=beta&t=SLT4NpXhEuDF4Kc2LegamSKgUrwnjS8IKplBXJkFr2E" alt="CI/CD Pipeline" style="width: 100%; max-width: 600px; height: auto; object-fit: cover;">
  </figure>
  <figure style="margin: 0; text-align: center;">
    <img src="https://media.licdn.com/dms/image/v2/D4D22AQH2C8c9Gs0qHw/feedshare-shrink_800/B4DZZyNYluGsAs-/0/1745672839491?e=1752105600&v=beta&t=xlXHCrRc56C7YR9IZH8GMTEJDxyE8iyhXFxoYaFMWGI" alt="Cloud Run Dashboard" style="width: 100%; max-width: 600px; height: auto; object-fit: cover;">
  </figure>
    <br>
</div>

Definitely excited to integrate CI/CD into more of my future projects!
As part of this journey, I worked on a small spring service that list companies dividends and assembly meetings.

You can check out the live project here: [TASI Dividens][tasi-dividens]

[tasi-dividens]: https://github.com/LulwahAlmisfer/TASI_Dividens