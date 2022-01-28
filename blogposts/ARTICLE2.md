---
title: Phasellus nulla ante
description: Phasellus nulla ante, feugiat in condimentum eu
tags: post
date: 2021-06-19
layout: layouts/blogpost.njk
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu pharetra sapien. Sed vestibulum erat fringilla, pellentesque ligula sit amet, bibendum nulla. Phasellus nulla ante, feugiat in condimentum eu, vestibulum nec sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur eget ante lobortis, tempor mauris efficitur, faucibus nunc. In dapibus, nisi ac ornare tristique, nisl erat pharetra nunc, at aliquet ante tortor maximus turpis. Sed gravida nisi vel auctor fringilla.

## Solution

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu pharetra sapien. Sed vestibulum erat fringilla, pellentesque ligula sit amet, bibendum nulla. Phasellus nulla ante, feugiat in condimentum eu, vestibulum nec sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur eget ante lobortis, tempor mauris efficitur, faucibus nunc. In dapibus, nisi ac ornare tristique, nisl erat pharetra nunc, at aliquet ante tortor maximus turpis. Sed gravida nisi vel auctor fringilla.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Sticky footer</title>
    <style>
      html {
        height: 100%;
        width: 100%;
      }

      body {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        margin: 0;
      }

      header {
        height: 80px;
        background-color: powderblue;
      }

      footer {
        height: 120px;
        background-color: peachpuff;
      }

      #content {
        flex-grow: 1;
      }
    </style>
  </head>
  
  <body>
    <header>Logo, my account, nav maybe</header>
    <div id="content">Main content</div>
    <footer>Legal mentions, sitemap, etc.</footer>
  </body>
</html>
```

Note : Dans cet exemple, les header et footer ont une hauteur fixe, mais elle pourrait ne pas l’être. Ce code s’adapte très bien au contenu de ces éléments.
