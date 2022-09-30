// todo 입력 공간을 가져오기
const todoInput = document.querySelector("#todo-form #todo");
// submit에서 엔터키 눌렀을때 새로고침되는 것을 막고, 리스트 추가하도록 만들기
document.querySelector("#todo-form").addEventListener("submit",
function(e){
    e.preventDefault();
    addTodo();
});

// todo button : click이벤트로 실행
// button에는 id값 주지 않았으므로,
// 쿼리셀렉트로 들고 오거나 아래처럼 형제노드로 접근하여 들고오기
const todoButton = todoInput.nextElementSibling;

// todo board 객체를 가져오기
const todoBoard = document.querySelector("#todo-board");

// 버튼에 이벤트리스너 (button이므로 click이벤트)붙이기
todoButton.addEventListener("click", addTodo);

function addTodo(){
    // console.log("함수연결확인");
    // todoInput - value값을 들고옴
    const newtext = todoInput.value;

    // 새로 요소들을 생성
    // li, input type="checkbox" / textNode, button 을 추가해야 한다
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    const newtextNode = document.createTextNode(newtext);
    const button = document.createElement("button");

    // li요소 안 - input, textNode, button 추가하고
    li.appendChild(checkbox);
    li.appendChild(newtextNode);
    li.appendChild(button);

    // 만든 li요소를 todoBoard에 추가한다
    todoBoard.append(li);

    // todoInput.value 값을 빈값으로 만들기
    todoInput.value = "";
    // button에 X문자열을 추가
    button.innerHTML="X";

    // 체크박스 눌렀을 때, 이벤트리스너 실행되도록: click event사용
    checkbox.addEventListener("click", todoCheck);

    // X 버튼을 눌렀을 때 이벤트리스너를 실행 : click event
    button.addEventListener("click",todoDelete);

}
// addTodo함수 내부에 또 만들어도 되지만,
// 밖으로 빼서 todoCheck함수 만들기
function todoCheck(e) {
    const li = e.target.parentNode;
    if(e.target.checked){
        li.style.color = "darkgray";
    } else {
        li.style.color = "white";
    }
}
// X버튼 이벤트리스너에 들어갈 함수 만들기
function todoDelete(e) {
    // li요소를 삭제한다
    const removeLi = e.target.parentNode;
    removeLi.remove();
    
}