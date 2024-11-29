const testBox = document.querySelector(".test-box")

// 보드목록 조회
function boardSelect() {

    // board
    testBox.style.padding = "30px";


    const boardListTable = document.createElement("table");

    let boardListTitle = document.querySelector(".boardList-title");

    if ( boardListTitle != null ) {

    } else {
        boardListTitle = document.createElement("div");
        boardListTitle.innerHTML = "<h1>게시판</h1>"
        boardListTitle.classList.add("boardList-title");
        testBox.append(boardListTitle);
    }

    testBox.style.display = "flex";

    boardListTable.classList.add("boardList-table");

    testBox.append(boardListTable);
   
    // 테이블의 thead
    const boardThead = document.createElement("thead");

    const boardTr = document.createElement("tr");

    const boardTh1 = document.createElement("th");
    const boardTh2 = document.createElement("th");
    const boardTh3 = document.createElement("th");

    boardTh1.classList.add("boardList-number-column");
    boardTh2.classList.add("board-title");
    boardTh3.classList.add("boardList-date-column");

    boardListTable.append(boardThead);
    boardThead.append(boardTr);

    boardTh1.innerText = "번호";
    boardTr.append(boardTh1);
    
    
    boardTh2.innerText = "제목";
    boardTr.append(boardTh2);

    
    boardTh3.innerText = "날짜";
    boardTr.append(boardTh3);



   // 테이블의 tbody 비동기 요청
    fetch("/board/selectList")
    .then(resp => resp.json())
    .then(result => {

        board(boardListTable, result['boardList']);
        pagination(result['pagination']);

    });
    
};


function board(boardListTable, boardList) {

    // 테이블의 tbody
    const boardTbody = document.createElement("tbody");

    for( let board of boardList ) {
    
        const tr = document.createElement("tr");

        const arr = ['boardNo', 'boardTitle', 'boardDate'];
    
        for( let x of arr) {
            const td = document.createElement("td");
            td.innerText = board[x];
            tr.append(td);

            // 게시글 상세조회
            if(x == 'boardTitle') {
                tr.addEventListener("click", () => selectBoard(board));
            }
        }

        boardTbody.append(tr);

    }

    boardListTable.append(boardTbody);

}


// 게시글 상세조회
function selectBoard(board) {


    // testbox dispaly: felx 해제
    testBox.style.display = "block";
    document.querySelector(".pagination").remove();

    // 목록으로 버튼 생성
    const backList = document.createElement("button");
    backList.innerText = "목록으로";
    backList.classList.add("back-list");
    document.querySelector(".boardList-title").append(backList);

    // 내용 없애기
    let boardListTable = document.querySelector("table");
    boardListTable.innerHTML= "";

    // console.log(boardListTable);

    // create
    const boardDetailPostHeader = document.createElement("div");

    const boardDetailPostTitle = document.createElement("sapn");
    const boardDetailDate = document.createElement("sapn");
    const boardDetailPostInfo = document.createElement("div");

    const boardDetailUpdateBtn = document.createElement("span");
    const boardDetailDelete = document.createElement("sapn");
    

    const boardDetailPostContent = document.createElement("div");


    // add
    boardDetailPostHeader.classList.add("boardDetail-post-header");

    boardDetailPostTitle.classList.add("boardDetail-post-title");
    boardDetailDate.classList.add("boardDetail-date");
    boardDetailPostInfo.classList.add("boardDetail-post-info");

    boardDetailUpdateBtn.classList.add("boardDetail-update");
    boardDetailDelete.classList.add("boardDetail-delete");
    
    

    boardDetailPostContent.classList.add("boardDetail-post-content");

   
    // append
    boardDetailPostTitle.innerText = board['boardTitle'];
    boardDetailPostHeader.append(boardDetailPostTitle);

    boardDetailDate.innerText = board['boardDate'];
    boardDetailPostHeader.append(boardDetailDate);

    testBox.append(boardDetailPostHeader);

    boardDetailUpdateBtn.innerText = "수정";
    boardDetailPostInfo.append(boardDetailUpdateBtn);
    
    boardDetailPostInfo.innerHTML += "<span>|</span>";
    
    boardDetailDelete.innerText = "삭제";
    boardDetailPostInfo.append(boardDetailDelete);

    

    boardDetailPostHeader.append(boardDetailPostInfo);

    testBox.append(boardListTable);

    boardDetailPostContent.innerText = board['boardContent']
    boardListTable.append(boardDetailPostContent);


    // 상세조회 페이지(목록)로 돌아가기
    // 목록으로 버튼 클릭 시 이벤트
    backList.addEventListener("click", e => boardSelectCp(e));

    // console.log(document.querySelector(".boardDetail-update"));
    // console.log(boardDetailUpdateBtn); // 트러블 슈팅

    // 게시판 수정하기
    // 수정하기 클릭 시 이벤트 
    document.querySelector(".boardDetail-update").addEventListener("click", () => boardDetailUpdate(board));
    


}

function boardSelectCp(e) {

    // 버튼 삭제
    document.querySelector(".back-list").remove();

    // 제목 날짜 등등 삭제
    document.querySelector(".boardDetail-post-header").remove();

    // 내용 감싸고 있는 테이블 삭제
    document.querySelector(".boardList-table").remove();

    fetch("/board/boardList?cp=" + 1)
    .then(resp => resp.json())
    .then(result => {
        boardSelect();
    });

}



// 게시글 수정
function boardDetailUpdate(board) {
    // 게시판 -> 게시글 수정
    const postUpdateTitle = document.querySelector(".boardList-title");
    postUpdateTitle.innerHTML = "<h1>게시글 수정</h1>";

    // 게시글 제목 수정
    boardDetailPostTitle
   

    // 수정/삭제 -> 확인/취소
    const confirmBtn = document.querySelector(".boardDetail-update");
    // 확인
    confirmBtn.innerText = "확인";
    // 취소
    const cancelBtn = document.querySelector(".boardDetail-delete");
    cancelBtn.innerText = "취소";


    // console.log(board);
}



// 조회
boardSelect(); 