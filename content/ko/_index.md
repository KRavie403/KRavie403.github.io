---
# Leave the homepage title empty to use the site title
title: main page
date: 2024-09-26
type: landing

sections:
  - block: hero
    content:
      title: |
        포트폴리오
      image:
        filename: avatar.png
      text: |
        <br>
        
        C# 개발 등에 숙련된 **Client Software 엔지니어를 꿈꾸는 김유림**입니다. 
        현재 **전북대**에 재학 중이며 **전주**에 있습니다.
    design:
      css_class: light-background 
  

  - block: slider
    content:
      slides:
      - title: ⚔️ Dungeons
        content: 다양한 영웅으로 전략을 짜서 보스의 공격을 저지하세요.
        align: center
        background:
          image:
            filename: main-project(1).png
            filters:
              brightness: 0.7
          position: right
          color: '#666'
      - title: GoRunJump ☕️
        content: '플레이어는 각 스테이지의 골인 지점을 향해 레이싱하는 게임입니다.'
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
      slide_height: ''
      is_fullscreen: true
      # Automatically transition through slides?
      loop: false
      # Duration of transition between slides (in ms)
      interval: 2000

  - block: markdown
    content:
      title:
      subtitle: ''
      text:
    design:
      columns: '1'
      background:
        image: 
          filename: coders.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen

  - block: collection
    content:
      title: Latest Preprints
      text: ""
      count: 5
      filters:
        folders:
          - publication
        publication_type: 'article'
    design:
      view: citation
      columns: '1'
      css_class: light-background
---
