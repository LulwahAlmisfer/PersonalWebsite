---
title: Bearer Auth and Basic Auth Vapor 4
date: "2023-01-01T23:46:37.121Z"
template: "post"
draft: false
slug: "/posts/Bearer-Auth-and-Basic-Auth-Vapor-4"
category: "Backend"
tags:
  - "Vapor"
  - "server side swift"
description: "Bearer authentication and Basic authentication are two common types of authentication mechanisms. In Vapor 4, these authentication mechanisms can be easily implemented using the built-in authentication middleware."
---

<meta name="twitter:image" content="https://s4.aconvert.com/convert/p3r68-cdx67/aija5-k23xa.png"/> 
<meta name="twitter:card" content="Vapor 4">
<meta name="twitter:title" content="Bearer Auth and Basic Auth Vapor 4">
<meta name="twitter:description" content="Bearer authentication and Basic authentication are two common types of authentication mechanisms. In Vapor 4, these authentication mechanisms can be easily implemented using the built-in authentication middleware.">

<figure>
<img src="/media/vaporPic.jpeg" alt="Trulli" width="500" height="333">

</figure>

Bearer authentication and Basic authentication are two common types of authentication mechanisms. In Vapor 4, these authentication mechanisms can be easily implemented using the built-in authentication middleware.

This article will complete on Mikaela Caron’s tutorial <a href="https://www.youtube.com/watch?v=CD283bLteP0&list=PLMRqhzcHGw1Z7xNnqS_yUNm1k9dvq-HbM">(songs API)</a> , It is the best resource to start learning Vapor, But if you have some prior knowledge, you can keep reading.

You can find the songs API source code on Github
<a href="https://github.com/codewithchris/YT-Vapor-API/tree/lesson-6">here</a>: 

The project structure:
<figure>
<img src="/media/strc.jpeg" alt="Trulli" width="500" height="333">

</figure>


<H1>  Difference between authentication and Authorization </H1>

Authentication is the process of verifying you are who you are.

Authorization is the process of verifying what you have access to.

<H1>Basic Auth</H1>

Basic auth is probably the simplest model of Authentication for APIs. To authenticate using basic auth, you should send a set of username & password to the API. To send the username & password, you should add the Authorization header to your request. The Authorization header must start with Basic .

<H1>Bearer authentication</H1>

Bearer authentication sends a token in the Authorization header. The token is prefixed with "Bearer ".

Bearer authentication is commonly used for authentication of API endpoints. The user typically requests a Bearer token by sending credentials like a username and password to a login endpoint. This token may last minutes or days depending on the application’s needs.

Yes it is possible to only depend in basic auth and ask for user credentials in each request, but its inconvenience and unsafe because it creates an opportunity for hackers to intercept and exploit this information. In the other hand token based authentication provides an extra layer of security to protect user’s data. Tokens have a very short lifespan and are generated for each login session to ensure that user credentials are not exposed during data transfer. Additionally, tokens can be easily revoked, in case of a data breach.

<H1>How to implement basic auth and Bearer auth in Vapor?</H1>

First we will start with Basic Auth, you will send your username and password in the body to the API to create an account. Then for the Bearer Authentication, you will first authenticate using a username/password (Basic Auth)in the login route to get a token and then use the token to authorize your requests.

I believe the majority of it should be fairly self-explanatory.

1-Add User Model:
 <a href="https://gist.github.com/LulwahAlmisfer/33e04d0923c8e1c474ddda14ead7f154">gist</a>

2- Add Token Model:
 <a href="https://gist.github.com/LulwahAlmisfer/2fdc55b2a2fc12e832525a5704e92dca">gist</a>

3- Modify the Song Model:
 <a href="https://gist.github.com/LulwahAlmisfer/48381698de4e39b5d3b05529e7807c69">gist</a>

4- Add User and Token Migrations and modify CreateSongs Migration
 <a href="https://gist.github.com/LulwahAlmisfer/66abf844b9da8d6ca247e4007e3c1843">gist</a>

5- then add the migrations in the configure file, make sure to add the user before the songs since the songs depend on the user table.

6- Create UsersController
 <a href="https://gist.github.com/LulwahAlmisfer/be234e43026cb32d997fa4f42d31d7ca">gist</a>

then register the UsersController in the routes file.

7- Modify SongController

For create and index functions, we used to let index return all the songs without knowing who added them, same way in create we add the song without associating it to a user. This is how we are going to change them:

 <a href="https://gist.github.com/LulwahAlmisfer/2d2f90da43b5d67b35d7aafd09747977">gist</a>
 

Before running the app, you need to reset the database because we changed the song table.

remove the existing database in docker:

```css
docker rm -f yourcontainername 
```

and start it again:

```css
docker run --name yourcontainername -e POSTGRES_DB=vapor_database \
  -e POSTGRES_USER=vapor_username -e POSTGRES_PASSWORD=vapor_password \
  -p 5432:5432 -d postgres
```

 <H1> Test with Postman:</H1> 
<figure>
<img src="/media/1.jpeg" alt="Trulli" width="100" height="200">
</figure>
<figure>
<img src="/media/2.webp" alt="Trulli" width="300" height="333">
 the value in the response is the Token, now use it in the authorization header and choose Bearer Token in the rest of /songs route.
</figure>

<figure>
<img src="/media/3.webp" alt="Trulli" width="300" height="333">

</figure>
  <H1> Conclusion </H1> 
  
choosing the appropriate authentication mechanism depends on the specific context and security requirements of the system. If the authentication situation for an application is not as security demanding, and the developers want a simple authentication standard, then they can still make use of basic authentication.

source code : <a href="https://github.com/LulwahAlmisfer/Vapor-FirstAPI">here</a>

if you’re interested in the app side of the project, check this <a href="https://github.com/LulwahAlmisfer/songsApp_BearerAuth">repo</a>

Thank you so much for reading my article 💖! Please let me know if you have any suggestions or changes! I would love hearing from you.

