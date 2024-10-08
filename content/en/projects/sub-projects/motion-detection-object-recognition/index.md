---
title: Camera-Based Motion Detection and Object Recognition System Connected to OTT Set-Top Box
---

This is a project that utilizes motion detection and object recognition technologies.
<br><br>

<!--more-->

<br><br>

## **Motivation and Purpose**
&nbsp;&nbsp;Having young children sitting in front of the TV for extended periods negatively impacts brain development.  
   - There is a risk of hindering the development of the frontal lobe, which is responsible for crucial functions such as decision-making, planning, social interaction, and emotional regulation.  
   - According to a 2015 study from Oxford University, watching TV can cause changes in the gray and white matter structure of specific brain areas, including the frontal lobe, potentially affecting language intelligence (IQ).  

&nbsp;&nbsp;To address this issue, a company is developing educational programs for young children.  
   - The program is designed to enable children to acquire knowledge while enjoying experiences through interaction.  
   - This approach allows children to learn through active participation rather than simple viewing, positively impacting brain development.  
   - The program is provided at a much lower cost compared to private education, reducing economic burden while maximizing educational benefits.  
<br><br>
<br><br>  

## **Key Technologies**  
Utilizing MediaPipe Holistic
![Loading image](featured(1).png)

Implementing a Custom CNN Model
![Loading image](featured(3).png)

- Optimizing model performance by applying Early Stopping and Dropout techniques.

<br><br>
<br><br>

## **Development Details**  
&nbsp;&nbsp;MediaPipe Holistic is used for user motion recognition and pose estimation. Real-time camera data is utilized to estimate user actions, which are then sent to Unity as a JSON file for visualization and analysis. A Custom CNN model is implemented for recognizing specific educational materials, achieving a test accuracy of 85.71% using an animal card dataset.  

![Loading image](featured(2).png)  

&nbsp;&nbsp;By selecting correct images and processing landmarks with bounding boxes, coordinates are normalized to determine whether specific actions are performed. Successfully applying MediaPipe Holistic and the Custom CNN model allows real-time monitoring of behaviors linked to educational content for young children via OTT set-top boxes, providing feedback to maximize the effectiveness of children's learning content.

<br><br>
<br><br>

## **Results and Analysis**
- **User Behavior Recognition** (motion recognition/user-specific behavior judgment)
![Loading image](featured(4).png)
- **Object Recognition** (educational material recognition - Lion Card recognition/Tiger Card recognition)
![Loading image](featured(5).png) 
<br><br>
<br><br>

  
<br><br>
<br><br>

## **Video Link**
<a href="https://www.youtube.com/watch?v=bHRP2Lp6vPc">
    <img src="featured(6).png" alt="Gone Gameplay Video" style="display: block; margin: 0 auto 0 0;">
</a>
<br><br>

## **GitHub**
<a href="https://github.com/KRavie403/Motion-Detection-and-Object-Recognition-System">
    <img src="featured(7).png" style="display: block; margin: 0 auto 0 0;">
</a>
