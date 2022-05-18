# FrontEnd Project🔨
## 우주여행
## 🚩프로젝트 목표
지구의 날을 맞아 지구와 같은 태양계에 있는 행성들의 정보를 알아보고, 행성 별 중력 값을 활용해서 행성에서의 몸무게로 변환하는 기능 제공한다.

 **React**기술을 사용하고 모달창을 구현한다. **Firebase**를 이용하여 데이터를 외부에서 가져온다.

## Team members
소병권 (GitHub Url : [https://github.com/SOBEUNGKEUN](https://github.com/SOBEUNGKEUN))
<br>
문선화 (GitHub Url : [https://github.com/woowsnu](https://github.com/woowsnu))
<br>
강희원 (GitHub Url : [(https://github.com/Money1Kang)](https://github.com/Money1Kang))

## TechStack
<img  src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img  src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> <img  src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img  src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img  src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">

## 🚩기능명세
1.  **행성 정보 안내**
    
    1.1) 버튼 클릭 시 행성 별 정보가 담긴 모달 팝업 노출
    
    1.2) 모달 내 정보는 리스트 형식으로 노출, 스크롤 형식으로 하단 정보 확인
    
    1.3) firebase에서 데이터를 가져와서 표현
    
    1.4) 하단 클로즈 버튼으로 모달 팝업 닫기
    
2.  **행성 별 몸무게 변환 기능**
    
    2.1) 버튼 클릭 시 행성 별 몸무게 변환을 할 수 있는 모달 팝업 노출
    
    2.2) 사용자 입력 부분, 변환된 몸무게 노출되는 부분은 인풋박스로 제공
    
    2.3) 음수 값 입력 시 양의 정수 입력 안내
    
    2.4) 입력 완료 시 변환 완료 메시지와 단위 노출
## 🚩트러블 슈팅(Trouble shooting)
**초기계획**

1.  행성을 클릭 하면 행성별로 모달창을 구현하여 행성의 관한 정보를 구현하고자 했으나 여러 개의 모달창을 한번에 관리하는 방법을 구현하지 못하여 하나의 모달창에 모든 행성정보를 구현하였다.
2.  몸무게 변환 모달창을 구현할 때 라디오 버튼 기능을 사용하여 선택된 행성에서의 몸무게만 변환하고 싶었으나 라디오 기능과 변환 기능을 합치지 못하였다.

**에러**

1.  몸무게를 변환하는 과정 중에서 입력값이 여러 곳에 동시에 출력되는 현상
     => weight 값에 value 값을 추출해서 해결

**남은이슈**

1.  모달창을 닫을 때 상단 우측에 x 표시나 배경을 누르면 모달창이 닫히는 기능구현
2.  useRef Hook기능 중 forwarding ref 를 이용해 fetch를 이용해 받아온 데이터를 행성별로 분리

## 🚩Review
**👨‍💻소병권** 
<br>
초기 구현 계획시 여러가지 기능들을 구현하고 싶었으나, 막상 시작해보니 쉽지 않았다. 이때까지 사용자 입장에서 편하게 웹사이트를 이용하였으나 막상 개발자 입장이 되어보니 편하게 웹사이트를 이용하려면 무수히 많은 노력이 필요하다는 점을 느꼈다.

---
**👨‍💻강희원** 
<br>
시작은 광대하였으나 끝은,.,,,죄송합니다. 신입개발자의 마음으로 열심히 하드코딩하였으나, 제가 아직 병아리라 팀에 많이 기여못하였습니다. 프로젝트하면서 협업이란게 어려우나 개발자끼리의 소통은 실로 재미있었습니다. 라이브쉐어라는 공통의작업도 이루고, 정말 재밌었습니다. 끝으로 지구의 날 화이팅! SAVE Earth!

---
**👨‍💻문선화** 
<br>
간단해 보이는 기능이지만 실제 구현 해보니 쉽지 않았습니다. 그래도 처음 하나의 사이트를 팀원 분들과 만들면서 의미있는 컴포넌트 분리, 협업에 대해서 많이 생각해볼 수 있어서 좋았습니다!

---





