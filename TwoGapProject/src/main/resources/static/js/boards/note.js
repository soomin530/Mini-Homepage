// test box UI
const testBox = document.querySelector(".test-box");
const noteContainer = document.createElement("div");
noteContainer.classList.add("note-container");
testBox.append(noteContainer);

let noteItemList = null;
let noteItem = null;

/** 강의 예재 메뉴판 js 참조
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


// 메모장 리스트 만들기
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
    const contentText = note.noteContent;
    content.innerText = `${contentText.length > 10 ? contentText.substr(0, 9) + "...": contentText }`;
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
    const previewDiv = newEl("div", {}, ["previewDiv"]); // 클래스 없음 css 없음 헷갈리지 않기
    const notePreviewlist = newEl("div", {}, ["note-preview-list"]);

    // 10글자 넘을시 잘라서 보여주기
    const contentText = note.noteContent;
    noteSelectContent.innerHTML = `<span>${note.noteContent}</span>`;

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

    // 메모장 내용 textarea 변경
    const noteSelectContent = document.querySelector(".note-select-content");
    noteSelectContent.innerHTML = ""
    contentTextarea = newEl("textarea", {maxlength: "1500"}, ['content-textarea']);

    contentTextarea.innerText = note.noteContent;

    noteSelectContent.append(contentTextarea);

    // 메모장 색변경 버튼 추가
    let noteColor = document.querySelector(".note-color");
    noteColor.remove();
    const noteColorLable = newEl("label", {for: "inputColor"}, ["note-color", "note-color-back"]);
    const noteColorDiv = newEl("div", {}, []);
    noteColor = newEl("input", {type: "color", id: 'inputColor'}, []);

    noteColorLable.innerText = "메모장 색변경";

    noteColorDiv.append(noteColorLable);
    noteColorDiv.append(noteColor);
    document.querySelector(".note-select-item").prepend(noteColorDiv);

    // 수정 | 삭제  -> 확인 | 취소로 변경
    const noteUpdaetDelete = document.querySelector(".note-update-delete");
    noteUpdaetDelete.innerHTML = "";
    
    const confirmSpan = newEl("span", {cursor: "pointer"},[]);
    const spaceP = newEl("p", {}, []);
    const cancellSpan = newEl("span", {cursor: "pointer"},[]);

    confirmSpan.innerText = "확인";
    spaceP.innerText = "|";
    cancellSpan.innerText = "취소";
    
    noteUpdaetDelete.append(confirmSpan);
    noteUpdaetDelete.append(spaceP);
    noteUpdaetDelete.append(cancellSpan);

    // 사진 선택 버튼 추가
    const previewDiv = document.querySelector(".previewDiv");
    const noteImgInput = newEl("input", {
        type: "file", id: "file-input", accept: "image/*", multiple: "true"/*, style: "display:none"*/
    }, []);
    const noteImgInputLable = newEl("label", {for: "file-input"}, ["img-input"]);

    noteImgInputLable.innerText ="사진 선택";

    noteImgInputLable.append(noteImgInput);
    previewDiv.append(noteImgInputLable);



    // 수정에서 일어날 이벤트 목록

    // 이미지 담을 목록
    let fileInputFiles = null; // 어차피 배열로 받음3


    noteImgInput.addEventListener("change", e => {
        fileInputFiles = noteImgPreview(e, fileInputFiles);
    })

    confirmSpan.addEventListener("click", () => {



        const formData = new FormData();

        for (const [i, photo] of Array.from(fileInputFiles).entries()) {
            formData.append("images", photo);
        }

        formData.append('note', new Blob([JSON.stringify(note)] , {type: "application/json"}));

        fetch("/note/update", {
            method: "PUT",
            // headers: {
            //     "Content-Type": "multipart/form-data"
            //   },
            body: formData
        })
        .then(resp => resp.text())
        .then(result => {
            console.log("몰라");
        });
    }) 
}



function noteImgPreview(e, fileInputFiles) {
    
    const imgs = Array.from(e.target.files);
    const leng = (fileInputFiles == null) ? Number('0') : fileInputFiles.length;

    if((imgs.length + leng) > 5 ) {
        alert("많아!");
        e.preventDefault();
        return;
    }

    if( leng > 0 ) {
        fileInputFiles = [
            ...fileInputFiles,
            ...imgs
          ]
    } else {
        fileInputFiles = imgs;
    }

    for( let img of imgs) {
        let newImageUrl = URL.createObjectURL(img);

        const createImg = newEl("img", {}, []);
        createImg.src = newImageUrl;

        const notePreviewList = document.querySelector(".note-preview-list");
        notePreviewList.append(createImg);    
    }

    return fileInputFiles;
}

function mergeObj(obj1, obj2) {
    const newObj = {};
    for (let att in obj1) { 
      newObj[att] = obj1[att]; 
      console.log(newObj);
    }
  
    for(let att in obj2)  {
      newObj[att] = obj2[att];
      console.log(newObj);
    }
    
    return newObj;
  }
    
// 메모장 조회 - 시작할때 같이 동작되야함
noteSelect();