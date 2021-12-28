# 리액트 같은 UI 라이브러리가 없다면?
- 자바스크립트와 브라우저의 DOM 스크립트만을 이용해서 개발 가능하다.

## MVC
- Model, View, Controller 라는 세 개의 계층으로 구성되고 각자의 역할을 수행하면서 서로 협력해 문제를 해결한다.
    - Model 
        - 데이터를 관리하는 역할을 가진다. 외부 API 나 브라우저에 있는 데이터를 관리하거나 삭제 할 수 있도록 한다.
    - View
        - 사용자 눈에 보이는 User Interface 역할을 한다. 사용자가 발생한 이벤트 등을 처리하며, HTML 과 CSS 도 포함한다.
    - Controller
        - Model 과 View 를 연결하고 움직이는 주체를 Controller 라고 한다.