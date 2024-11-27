// test box UI
const testBox = document.querySelector(".test-box");
const noteContainer = document.createElement("div");
noteContainer.classList.add("note-container");
testBox.append(noteContainer);

let noteItemList = null;
let noteItem = null;


// 메모장 조회 함수
function noteSelect() {


    const title = document.createElement("div");
    const divider = document.createElement("div");
    noteItemList = document.createElement("div");
    noteItem = document.createElement("div");

    title.innerHTML = "<h1>메모장</h1>";

    title.classList.add("boards-title");
    divider.classList.add("divider");

    noteContainer.append(title);
    noteContainer.append(divider);



    fetch("/note/selectList")
    .then(resp => resp.json())
    .then(result => {

        createNoteItemList(result);
    });
};


// 메모장 만들기
function createNoteItemList(result) {

    let noteItemList = document.querySelector(".note-item-list");

    console.log(result);

    // 이미 메모장을 만들었을 시 지우고 시작
    if (noteItemList != null ) {
        noteItemList.innerHTML = "";
    } else {
        // 메모장 미작성 시 시작
        noteItemList = document.createElement("div");
        noteItemList.classList.add("note-item-list");
        noteContainer.append(noteItemList)
    }

    // 가져온 값이 없을 경우
    if(result == null) {
        const div = document.createElement("div");
        div.innerText = "메모글이 존재하지 않습니다 >.<"; 
        div.style.cssText = "width: 100%; height: 100%; display: flex; "
        div.style.cssText += "justify-content : center; align-items : center;";
        noteItemList.append(div);
        return;
    }

    // 글이 있는 경우
    const noteList = result['noteList'];

    // 글 목록을 출려
    for( let note of noteList) {
        createNoteItem(noteItemList, note);
    }

    // 페이지 네이션 출력 - base.js에 있습니다
    pagination(result['pagination']);

}


// 조회 시 메모 목록 만들기
function createNoteItem(noteItemList, note) {

    const noteItem = document.createElement("div");
    const hx = document.createElement("h4");
    const content = document.createElement("div");

    noteItem.classList.add("note-item");
    hx.innerText = "No." + note['noteNo'];
    content.innerText = note['noteContent'];
    content.style.backgroundColor = note['noteColor'];
    
    noteItem.append(hx);
    noteItem.append(content);
    noteItemList.append(noteItem);

    content.addEventListener("click", e => select(note));
    
}


// 페이지네이션 클릭 시 이벤트
function noteSelectCp(e) {
    console.log(e.target.value);
    fetch("/note/selectList?cp=" + e.target.value)
    .then(resp => resp.json())
    .then(result => {

        createNoteItemList(result);
    });
}







// 상세 조회용
function select(note) {
    alert(note);
}

// 메모장 조회 - 시작할때 같이 동작되야함
noteSelect();