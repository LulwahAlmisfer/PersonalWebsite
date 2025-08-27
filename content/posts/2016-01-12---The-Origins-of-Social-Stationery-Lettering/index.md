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
    <img src="/media/1.jpeg" alt="CI/CD Pipeline" style="width: 100%; max-width: 600px; height: auto; object-fit: cover;">
  </figure>
  <figure style="margin: 0; text-align: center;">
    <img src="/media/2.jpeg" alt="Cloud Run Dashboard" style="width: 100%; max-width: 600px; height: auto; object-fit: cover;">
  </figure>
    <br>
</div>


I also gave Xcode Cloud a shot for an iOS project(نقاء), and setting it up was even easier than I expected. It barely took any configuration to get my builds running in the cloud and send an email to TestFlight users. Super clean and simple experience. 

<div style="display: flex; flex-direction: column; gap: 20px; margin: 20px auto; max-width: 800px; align-items: center;">
  <figure style="margin: 0; text-align: center;">
    <img src="/media/3.jpeg" alt="CI/CD Pipeline" style="width: 100%; max-width: 600px; height: auto; object-fit: cover;">
  </figure>
  <figure style="margin: 0; text-align: center;">
    <img src="/media/4.jpeg" alt="Cloud Run Dashboard" style="width: 100%; max-width: 600px; height: auto; object-fit: cover;">
  </figure>
    <br>
</div>

Definitely excited to integrate CI/CD into more of my future projects!
As part of this journey, I worked on a small spring service that list companies dividends and assembly meetings.

You can check out the live project here: [TASI Dividens][tasi-dividens]

[tasi-dividens]: https://github.com/LulwahAlmisfer/TASI_Dividens