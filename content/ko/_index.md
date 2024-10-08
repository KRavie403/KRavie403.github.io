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
  
  - block: collection
    content:
      title: '메인 프로젝트'
      subtitle:
      text:
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: projects/main-projects
    design:
      view: card
      columns: '1'
      css_class: light-background

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

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
---
