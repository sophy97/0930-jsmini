// todo 입력 공간을 가져오기
const todoInput = $("#todo-form #todo");
// submit에서 엔터키 눌렀을때 새로고침되는 것을 막고, 리스트 추가하도록 만들기
$("#todo-form").on("submit",
function(e){
    e.preventDefault();
    addTodo();
});

// todo button : click이벤트로 실행
// button에는 id값 주지 않았으므로,
// 쿼리셀렉트로 들고 오거나 아래처럼 형제노드로 접근하여 들고오기
const todoButton = todoInput.next();
// todoInput.nextElementSibling;

// todo board 객체를 가져오기
const todoBoard = $("#todo-board");

// 버튼에 이벤트리스너 (button이므로 click이벤트)붙이기
todoButton.on("click", addTodo);

function addTodo(){
    // console.log("함수연결확인");
    // todoInput - value값을 들고옴
    const newtext = todoInput.val();

    // 새로 요소들을 생성
    // li, input type="checkbox" / textNode, button 을 추가해야 한다
    const li = $("<li>");
    const checkbox = $("<input>").attr("type","checkbox");
    
    const newtextNode = $("<span>").html(newtext);
    const button = $("<button>");

    // li요소 안 - input, textNode, button 추가
    li.append(checkbox).append(newtextNode).append(button);

    // 만든 li요소를 todoBoard에 추가한다
    todoBoard.append(li);

    // todoInput.value 값을 빈값으로 만들기
    todoInput.val("");
    // button에 X문자열을 추가
    button.html("x");

    // 체크박스 눌렀을 때, 이벤트리스너 실행되도록: click event사용
    checkbox.on("click", todoCheck);

    // X 버튼을 눌렀을 때 이벤트리스너를 실행 : click event
    button.on("click",todoDelete);

}
// addTodo함수 내부에 또 만들어도 되지만,
// 밖으로 빼서 todoCheck함수 만들기
function todoCheck(e) {
    const li = e.target.parentNode;
    if(e.target.checked){
        li.style.color = "darkgray";
        li.style.textDecorationLine ="line-through";
    } else {
        li.style.color = "white";
        li.style.textDecorationLine ="none";
    }
}
// X버튼 이벤트리스너에 들어갈 함수 만들기
function todoDelete(e) {
    // li요소를 삭제한다
    const removeLi = e.target.parentNode;
    removeLi.remove();
    
}