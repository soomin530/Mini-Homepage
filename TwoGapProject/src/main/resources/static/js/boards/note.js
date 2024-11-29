// test box UI
const testBox = document.querySelector(".test-box");
const noteContainer = document.createElement("div");
noteContainer.classList.add("note-container");
testBox.append(noteContainer);

let noteItemList = null;
let noteItem = null;

/** 강의 에재 메뉴판 js 참조
 * 요소 생성 + 속성 추가 + 클래스 추가
 * @param {*} tag 요소
 * @param {*} attr 속성 - 스타일은 다른거임 잊지 말길 T.T
 * @param {*} cls 클래스
 * @returns 
 * @author 신동국
 */
const newEl = (tag, attr, cls) => {
    
    const el = document.createElement(tag);

    for(let ket in attr) {
        el.setAttribute(ket, attr[ket]);
    }

    for (let className of cls) {
        el.classList.add(className);
    }

    return el;
}

// 팝업된 노트 삭제
const deleteNotePopup = () => {
    document.querySelector("#note-popup").remove();
    document.querySelector(".note-popup-outside").remove();
}




// 메모장 조회 함수
function noteSelect() {

    const title = newEl("div", {} , ["boards-title"]);
    const divider = newEl("div", {} , ["divider"]);

    title.innerHTML = "<h1>메모장</h1>";

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

    noteItemList = document.querySelector(".note-item-list");

    // 이미 메모장을 만들었을 시 지우고 시작
    if (noteItemList != null ) {
        noteItemList.innerHTML = "";
    } else {
        // 메모장 미작성 시 시작
        noteItemList = newEl("div", {} , ["note-item-list"]);
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
    pagination(result['pagination'], noteList[0].boardTypeNo);

}


// 조회 시 메모 목록 만들기
function createNoteItem(noteItemList, note) {

    const noteItem = newEl("div", {} , ["note-item"]);
    const hx = newEl("h4", {} , []);
    const content = newEl("div", {} , []);

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

    fetch("/note/selectList?cp=" + e.target.value)
    .then(resp => resp.json())
    .then(result => {

        createNoteItemList(result);
    });
}






////////////////////////////////////////////////////////////////////
// 상세 조회용
function select(note) {

    // 메모장 상세보기 틀
    
    const notePopup = newEl("div", {id: "note-popup"}, []);
    const notePopupOutside = newEl("div", {}, ["note-popup-outside"]);
    const noteSelectContainer = newEl("div", {}, ["note-select-container"]);

    // 메모장 내용
    const noteSelectBox = newEl("div", {}, ["note-select-box"]);
    const contentDiv = document.createElement("div");  // 클래스 없음 헷갈리지 않기
    const noteSelectContent = newEl("div", {}, ["note-select-content"]);
    const noteSelectClose = newEl("span", {id:"note-select-close"}, []);

    const noteSelectItem = newEl("div", {}, ["note-select-item"]);
    const noteColor = newEl("div", {}, ["note-color"]);
    const noteUpdaetDelete = newEl("div", {}, ["note-update-delete"]);
    const updateSpan = newEl("span", {cursor: "pointer"},[]);
    const spaceP = newEl("p", {}, []);
    const deleteSpan = newEl("span", {cursor: "pointer"},[]);


    // 메모장 이미지
    const notePreview = newEl("div", {}, ["note-preview"]);
    const previewDiv = newEl("div", {}, []); // 클래스 없음 헷갈리지 않기
    const notePreviewlist = newEl("div", {}, ["note-preview-list"]);

    noteSelectContent.innerText = note['noteContent'];
    noteSelectClose.innerHTML = "&times;";
    noteSelectBox.style.backgroundColor = note['noteColor'];
    updateSpan.innerText = "수정";
    spaceP.innerText = "|";
    deleteSpan.innerText = "삭제";


    previewDiv.innerText = "사진출력";
    // 사진은 비동기 요청 해야함 잊지말기
    // fetch("")

    // body에 추가
    document.body.append(notePopup);
    document.body.append(notePopupOutside);

    // 메모장 팝업 ui apeend
    notePopup.append(noteSelectContainer);
    noteSelectContainer.append(noteSelectBox);
    noteSelectBox.append(contentDiv);
    contentDiv.append(noteSelectContent);
    contentDiv.append(noteSelectClose);
    
    noteSelectBox.append(noteSelectItem);
    noteSelectItem.append(noteColor);
    noteSelectItem.append(noteUpdaetDelete);

    noteUpdaetDelete.append(updateSpan);
    noteUpdaetDelete.append(spaceP);
    noteUpdaetDelete.append(deleteSpan);
    
    // 메모장 이미지 UI appencd
    noteSelectContainer.append(notePreview);
    notePreview.append(previewDiv);
    notePreview.append(notePreviewlist);
 
    // 클릭 시 메모장 닫는 이벤트
    notePopupOutside.addEventListener("click", () => deleteNotePopup());
    noteSelectClose.addEventListener("click", () => deleteNotePopup());

    // 클릭 시 수정 페이지 전환 이벤트
    updateSpan.addEventListener("click", () => noteUpdate(note))
}



// 메모장 수정 창으로 변경 이벤트
const noteUpdate = note => {

    console.log(note);
    let noteColor = document.querySelector(".note-color");
    noteColor.remove();
    noteColor = newEl("input", {type: "color"}, ["note-color"]);
}
    
// 메모장 조회 - 시작할때 같이 동작되야함
noteSelect();