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




Recently, I had a really smooth experience working with CI/CD, it made deploying my apps so much easier!🥳

I set it up first with a Spring project on GCP(cloud run): building the app, pushing it to the container registry, and running it, all automatically. Watching the whole process happen without manual steps was honestly very satisfying!

<div style="display: flex; flex-direction: column; gap: 20px; margin: 20px auto; max-width: 800px; align-items: center;">
  <figure style="margin: 0; text-align: center;">
    <img src="https://media.licdn.com/dms/image/v2/D4D22AQGlpAfwAmj2iw/feedshare-shrink_800/B4DZZyNYlrG4Ag-/0/1745672840049?e=1755129600&v=beta&t=jAtcluZwPU3o7ap4sPZ1RAhBnVipLjAnowKNdFpB3w8" alt="CI/CD Pipeline" style="width: 100%; max-width: 600px; height: auto; object-fit: cover;">
  </figure>
  <figure style="margin: 0; text-align: center;">
    <img src="https://media.licdn.com/dms/image/v2/D4D22AQFRTjT80Of1UA/feedshare-shrink_800/B4DZZyNYlnHwAg-/0/1745672839153?e=1755129600&v=beta&t=PksVrenyFPKkVUJFCRdmoqEESRWoHq890SySgd1uM-g" alt="Cloud Run Dashboard" style="width: 100%; max-width: 600px; height: auto; object-fit: cover;">
  </figure>
    <br>
</div>


I also gave Xcode Cloud a shot for an iOS project(نقاء), and setting it up was even easier than I expected. It barely took any configuration to get my builds running in the cloud and send an email to TestFlight users. Super clean and simple experience. 

<div style="display: flex; flex-direction: column; gap: 20px; margin: 20px auto; max-width: 800px; align-items: center;">
  <figure style="margin: 0; text-align: center;">
    <img src="https://media.licdn.com/dms/image/v2/D4D22AQEuVqBfH8PIAQ/feedshare-shrink_800/B4DZZyNYmGG4Ag-/0/1745672838414?e=1755129600&v=beta&t=UQNOmW4mKueoTljILVVzn6TszbQmbVRxFBAsNwtpv4g" alt="CI/CD Pipeline" style="width: 100%; max-width: 600px; height: auto; object-fit: cover;">
  </figure>
  <figure style="margin: 0; text-align: center;">
    <img src="https://media.licdn.com/dms/image/v2/D4D22AQH2C8c9Gs0qHw/feedshare-shrink_800/B4DZZyNYluGsAs-/0/1745672839491?e=1755129600&v=beta&t=W6yQzLJR5tfpq4VHJKwYr9pAdvhNnQiUS_G95sp36yw" alt="Cloud Run Dashboard" style="width: 100%; max-width: 600px; height: auto; object-fit: cover;">
  </figure>
    <br>
</div>

Definitely excited to integrate CI/CD into more of my future projects!
As part of this journey, I worked on a small spring service that list companies dividends and assembly meetings.

You can check out the live project here: [TASI Dividens][tasi-dividens]

[tasi-dividens]: https://github.com/LulwahAlmisfer/TASI_Dividens