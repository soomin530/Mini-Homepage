const testBox = document.querySelector(".test-box");

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


// followBox 상단 머릿말 + 구분선
function followBox() {
  const followContainer = newEl("div", {}, ["follow-container"]);
  const headerSpan = newEl("span", {}, []);
  headerSpan.innerText = "팔로우";

  const searchSection = newEl("div", {}, ["search-section"]);
  const searchBox = newEl("div", {}, ["search-box"]);
  const searchInput = newEl("input", {placeholder:"검색할 유저를 검색하세요", name:"searchInput"}, ["search-input"]);
  const searchButton = newEl("button", {type:"button"}, ["search-button"]);
  searchButton.innerText = "검색";

  const divider = newEl("div", {}, ["divider"]);

  testBox.append(followContainer);
  followContainer.append(headerSpan);
  followContainer.append(searchSection);
  followContainer.append(divider);

  searchSection.append(searchBox);
  searchBox.append(searchInput);
  searchBox.append(searchButton);

  // followList(); // 팔로우 추가 해제 이후에 추가할 예정

  searchButton.addEventListener("click", () => followSearch());
}


///////////////////////////////////////////////////////////////////////////////////////////
// follow 검색 이벤트
function followSearch() {
  const searchValue = document.querySelector(".search-input").value;
  let searchUserList = document.querySelector(".search-user-list");
  
  if( searchValue.trim().length == 0 ) {
    alert("검색어를 입력 후 입력해주세요");
    return;
  }

  if(searchUserList !== null ) {
    searchUserList.innerHTML = "";
  } else {
    searchUserList = newEl("div", {}, ["search-user-list"]);
  }

  document.querySelector(".follow-container").append(searchUserList);

  fetch("/follow/search?searchName=" + searchValue)
  .then(resp => resp.json())
  .then(searchList => {

    // 검색된 유저가 없을 때
    if(searchList.length == 0 ) {
      searchUserList.innerHTML = "친구가 없다네요 ㅠㅠ";
      searchUserList.style.justifyContent = "center";
    } else {
      searchUserList.style.justifyContent = "start";

      createSearchItem(searchList);
    }

  }) 
}

// 검색 후 검색된 유저들 결과 리스트 출력 및 이벤트 추가
function createSearchItem(searchList) {
  
  for(let searchUser of searchList ) {
    // 어펜드할 div 얻어오기
    const searchUserList = document.querySelector(".search-user-list");

    console.log(searchUser);
    // 추가할 냉용
    const followSearchItem = newEl("div", {}, ["follow-search-item"]);
    const followSearchInfo = newEl("div", {}, ["follow-search-info"]);
    const followSearchButton = newEl("button", {}, ["follow-search-button", "following"]);
    followSearchButton.innerText = "팔로우";

    const followSearchImage = newEl("div", {}, ["follow-search-image"]);
    const profileSrc = searchUser.profileImg === null ? "/images/user.jpg": searchUser.profileImg;
    const profileImg = newEl("img", {src: `${profileSrc}`, alr: "프로필 이미지"}, []);
    const followSearchName = newEl("span", {}, ["follow-search-name"]);
    followSearchName.innerText = searchUser.memberNickname;

    searchUserList.append(followSearchItem);
    followSearchItem.append(followSearchInfo);
    followSearchItem.append(followSearchButton);
    followSearchInfo.append(followSearchImage);
    followSearchInfo.append(followSearchName);
    followSearchImage.append(profileImg);
  }
}

// testBox 생성
followBox();