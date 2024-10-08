---
# Leave the homepage title empty to use the site title
title: main page
date: 2024-09-26
type: landing

sections:
  - block: hero
    content:
      title: |
        Portfolio
        |Client Software Developer
      image:
        filename: avatar.png
      text: |
        <br>
        
        I am a **Client Software Engineer** proficient in C# development. I am currently located in **Jeonju**.

  - block: slider
    content:
      title: Main Project
      slides:
      - title: ⚔️ Dungeons
        content: Develop strategies with various heroes to defend against the boss's attacks.
        align: center
        background:
          image:
            filename: main-project(1).png
            filters:
              brightness: 0.7
          position: right
          color: '#666'
      - title: GoRunJump ☕️
        content: 'This is a racing game where players aim to reach the goal point of each stage.'
        align: left
        background:
          image:
            filename: main-project(2).png
            filters:
              brightness: 0.7
          position: center
          color: '#555'
    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: '500px'
      is_fullscreen: true
      # Automatically transition through slides?
      loop: true
      # Duration of transition between slides (in ms)
      interval: 2000
      spacing:
        margin: ['40px', '0', '40px', '0'] 

  - block: slider
    content:
      title: Sub Projects
      slides:
      - title: ♟️ Gone
        content: Become an intelligence agent and stop AI attacks.
        align: center
        background:
          image:
            filename: sub-project(1).png
            filters:
              brightness: 0.7
          position: right
          color: '#666'
      - title: Motion Detection and Object Recognition System with Camera Connected to OTT Set-Top Box ☕️
        content: 'A project utilizing motion detection and object recognition technologies.'
        align: left
        background:
          image:
            filename: sub-project(2).png
            filters:
              brightness: 0.7
          position: center
          color: '#555'
      - title: Cafes Beyond School
        content: 'Developed a cafe recommendation app using Android Studio with a map API.'
        align: right
        background:
          image:
            filename: sub-project(3).png
            filters:
              brightness: 0.5
          position: center
          color: '#333'
    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: '500px'
      is_fullscreen: true
      # Automatically transition through slides?
      loop: true
      # Duration of transition between slides (in ms)
      interval: 2000
      spacing:
        margin: ['40px', '0', '40px', '0']       
---