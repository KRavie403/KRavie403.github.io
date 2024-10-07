---
title: OTT 셋톱박스에 연결된 카메라 기반의 모션검출 및 객체인식 시스템
---

모션 검출과 객체인식 기술을 활용한 프로젝트입니다.
<br><br>

<!--more-->

<br><br>

## **개발 동기 및 목적**
&nbsp;&nbsp;유아기 아이들이 장시간 TV 앞에 앉아 있는 것은 뇌 발달에 부정적인 영향을 미침.  
   \- 결정 내리기, 계획 세우기, 사회적 상호작용 처리, 감정 조절 등 중요한 기능 담당하는 전두엽 발달 저해 위험.  
   \- 2015년 옥스퍼드 대학 연구에 따르면, TV 시청이 전두엽을 포함한 
      특정 뇌 영역의 회백질 및 백질 구조에 변화를 일으켜 언어 지능(IQ) 저하에 영향 미칠 수 있음.  

&nbsp;&nbsp;문제 해결을 위해 산업체에서 유아용 교육 프로그램 개발.
    \- 프로그램은 아이들이 상호작용을 통해 체험을 즐기면서 지식을 습득하도록 설계됨.  
   \- 이를 통해 아이들은 단순한 시청이 아닌 적극적인 참여를 통해 학습하게 되어 뇌 발달에 긍정적인 영향을 미침.  
   \- 프로그램은 사교육에 비해 훨씬 저렴한 비용으로 제공되어 경제적 
      부담을 줄이는 동시에 교육적 이점 극대화.  
<br><br>
<br><br>  

## **주요 기술**  
MediaPipe Holistic을 사용
![이미지 로딩중](featured(1).png)

Custom CNN 모델을 구현
![이미지 로딩중](featured(3).png)

\-Early Stopping과 Dropout 기법을 적용하여 모델의 성능을 최적화

<br><br>
<br><br>

## **개발 내용**  
&nbsp;&nbsp;사용자 모션 인식 및 자세 추정을 위해 MediaPipe Holistic을 사용. 실시간 캠 데이터를 활용하여 사용자의 동작을 추정하고, 이를 JSON 파일로 Unity로 전송해 시각화 및 분석. 특정 교구재 객체 인식을 위해 Custom CNN 모델을 구현하고 동물 카드 교구재 데이터셋을 사용해 테스트 정확도 85.71%를 달성.  

![이미지 로딩중](featured(2).png)  

&nbsp;&nbsp;정답 이미지를 선정하여 랜드마크를 바운딩 박스로 처리하고 좌표를 정규화하여 특정 행동 수행 여부를 판단. MediaPipe Holistic과 Custom CNN 모델을 성공적으로 적용해, OTT 셋톱박스를 통해 유아용 콘텐츠와 연동된 행동을 실시간 모니터링하고 피드백을 제공하여 유아용 학습 콘텐츠의 효과를 극대화할 수 있는 기반을 마련.

<br><br>
<br><br>

## **결과 및 분석**
\-**사용자 행동 인식** (모션 인식/사용자 특정 행동 판단)
![이미지 로딩중](featured(4).png)
\-**객체 인식**(교구재 인식-사자 카드 인식/호랑이 카드 인식)
![이미지 로딩중](featured(5).png) 
<br><br>
<br><br>

  
<br><br>
<br><br>

## **영상 링크**
<a href="https://www.youtube.com/watch?v=bHRP2Lp6vPc">
    <img src="featured(6).png" alt="Gone 게임 플레이 영상" style="display: block; margin: 0 auto 0 0;">
</a>
<br><br>

## **GitHub**
<a href="https://github.com/KRavie403/Motion-Detection-and-Object-Recognition-System">
    <img src="featured(7).png" style="display: block; margin: 0 auto 0 0;">
</a>