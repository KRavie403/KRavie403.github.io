---
title: Contact
date: 2024-10-06

type: landing

sections:
  - block: contact
    content:
      title: Contact
      text: |-
        문의 사항이나 프로젝트에 대해 아래의 방법으로 언제든지 연락해 주세요.
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
      directions: 전북대학교는 전주시 덕진구에 위치하며, 전주시 내에서 버스 또는 택시를 이용해 전북대학교 정문으로 이동하실 수 있습니다. 컴퓨터인공지능학부는 공과대학 7호관에 위치하고 있으며, 정문에서 교내 셔틀버스를 타고 해당 건물까지 이동 가능합니다.
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