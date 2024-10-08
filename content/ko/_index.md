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
      title: 메인 프로젝트
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
      slide_height: '200px'
      is_fullscreen: true
      # Automatically transition through slides?
      loop: true
      # Duration of transition between slides (in ms)
      interval: 2000

  - block: slider
    content:
      title: 서브 프로젝트
      slides:
      - title: ♟️ Gone
        content: 정보국 요원이 되어 AI의 공격을 저지하세요.
        align: center
        background:
          image:
            filename: sub-project(1).png
            filters:
              brightness: 0.7
          position: right
          color: '#666'
      - title: OTT 셋톱박스에 연결된 카메라 기반의 모션검출 및 객체인식 시스템 ☕️
        content: '모션 검출과 객체인식 기술을 활용한 프로젝트입니다.'
        align: left
        background:
          image:
            filename: sub-project(2).png
            filters:
              brightness: 0.7
          position: center
          color: '#555'
      - title: 학교 너머 카페들
        content: '안드로이트 스튜디오(Android Studio) 를 이용하여 지도 API를 이용한 카페 추천 앱을 만들었습니다.'
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
      slide_height: '200px'
      is_fullscreen: true
      # Automatically transition through slides?
      loop: true
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
      title: publications
      text: ""
      count: 5
      filters:
        folders:
          - about/publication
        publication_type: 'article'
    design:
      view: citation
      columns: '1'
      css_class: light-background
---
