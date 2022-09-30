// 배경이미지 이름을 배열에 저장하기
const images = ["back0.jpg", "back1.jpg", "back2.jpg", "back3.jpg", "back4.jpg", "back5.jpg"];

// 랜덤 함수의 특징 - 0~1사이의 실수 > 0~원하는 수 정수
// 배열 > 요소를 넣어주면 인덱스 값으로 접근가능
// math.random으로 랜덤 실수 처리 후 floor로 소수점 제거
const randomNum = Math.floor(Math.random()*images.length);
const chooseImage = images[randomNum];

// 바디 객체를 가져옴
const bodyBackground = document.querySelector("body");

// 바디에 이미지를 추가
// css에서 이미지 추가하는 방식과 동일함
bodyBackground.style.background = `url(./img/${chooseImage})`;