// 입력 폼 가져오기 - form의 submit 이벤트 사용하기 위함
const loginForm = document.querySelector("#login-form");

// name 값을 가져오기 위한 input
const loginInput = document.querySelector("#login-form #name");
// name값을 가질 h1 태그 들고오기
const title = document.querySelector("#title");

// 이벤트리스너 연결 후 함수 적어줌
// form의 submit을 사용할 경우는, click이벤트가 아니라
// form의 submit 이벤트로 연결해줘야 한다..
loginForm.addEventListener("submit", onLoginSubmit);

function onLoginSubmit(e) {
    // 1초만에 사라지는 새로고침을 막기 위함
    e.preventDefault();

    // loginInput의 value값을 가져옴
    const name = loginInput.value;

    // if문 사용하여, name값이 없을("") 때, 아래 내용이 실행되지 않도록
    // 함수에서 return을 사용하면 함수 종료
    if(name === ""){
        return;
    } 
    // value값을 title에 넣어줌
    // console.log(name); //값이 제대로 들어갔는지 콘솔에서만 확인
    title.innerHTML = name+"님, 반갑습니다!";

    // loginForm에 hidden클래스 추가 후
    loginForm.classList.add("hidden");
    // todo-form을 가져와서 hidden클래스를 제거
    document.querySelector("#todo-form")
            .classList.remove("hidden");
}