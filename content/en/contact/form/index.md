---
title: Contact
date: 2024-10-06

type: landing

sections:
  - block: contact
    content:
      title: Contact
      text: |-
        Please feel free to contact me anytime regarding inquiries or projects using the methods below.
      email: yoo9379@gmail.com
      phone: ''
      address:
        street: 567 Baekje-daero
        city: Jeonju-si
        region: Jeollabuk-do
        postcode: '54896'
        country: South Korea
        country_code: KR
      coordinates:
        latitude: '35.846893'
        longitude: '127.129615'
      directions: Jeonbuk National University is located in Deokjin-gu, Jeonju, and you can reach the university's main gate by bus or taxi within Jeonju. The Department of Computer Science and Artificial Intelligence is located in the Engineering College Building No. 7, and you can take the campus shuttle bus from the main gate to that building.
      office_hours:
        - 'Monday 17:00 to 22:00'
        - 'Wednesday 18:00 to 22:00'
      appointment_url: 'https://calendly.com'
      #contact_links:
      #  - icon: comments
      #    icon_pack: fas
      #    name: Discuss on Forum
      #    link: 'https://discourse.gohugo.io'
    
      # Automatically link email and phone or display as text?
      autolink: true
    
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: false
    design:
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle: ''
      text:
    design:
      columns: '1'
      background:
        image: 
          filename: contact.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen
---
