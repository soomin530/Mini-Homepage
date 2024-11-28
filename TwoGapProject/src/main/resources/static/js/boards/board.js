const testBox = document.querySelector(".test-box")


function boardSelect() {

    // board

    const boardListCenterBox = document.createElement("div");
    const boardListTitle = document.createElement("h1");

    const boardListTable = document.createElement("table");

    boardListTitle.innerHTML = "<h1>게시판</h1>"

    boardListCenterBox.classList.add("boardList-center-box");
    boardListTitle.classList.add("boardList-title");

    boardListTable.classList.add("boardList-table");

    testBox.append(boardListCenterBox);
    boardListCenterBox.append(boardListTitle);

    boardListCenterBox.append(boardListTable);

   
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
    .then(boardList => {
        // console.log(boardList);
        board(boardListTable, boardList);

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

        // 임시용 탈출문 페이지네이션 제작 시 잊지말고 없애기
        if(board['boardNo'] == 7) break;

    }

    boardListTable.append(boardTbody);

}

// 게시글 상세조회
function selectBoard(board) {
    const boardListTable = document.querySelector(".boardList-center-box table");
    boardListTable.innerHTML= "";

    const boardDetailPostHeader = document.createElement("div");
    const boardDetailPostTitle = document.createElement("sapn");
    const boardDetailDate = document.createElement("sapn");

    boardDetailPostHeader.classList.add("boardDetail-post-header");
    boardDetailPostTitle.classList.add("boardDetail-post-title");
    boardDetailDate.classList.add("boardDetail-date");

    boardDetailPostHeader.append(boardDetailPostTitle);
    boardDetailPostHeader.append(boardDetailDate);

    



    console.log(board);
}


// 조회
boardSelect(); 