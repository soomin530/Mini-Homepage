// 쿠키에서 매개변수로 전달받은 key가 일치하는 value를 얻어오는 함수
const getCookie = (key) => {
  const cookies = document.cookie; // "K=V; K=V; ...." --> 문자열로 얻어오게 됨

  // cookies 문자열을 배열 형태로 변환
  // split : 쪼개는 것. "; "를 기준으로 문자열을 쪼갠 후 문자열로 반환
  const cookieList = cookies.split("; ")  // ["K=V", "K=V"...]
    .map(el => el.split("=")); // ["K", "V"]
  // ["K=V", "K=V"...] --> "K=V"가 el --> el을 "="를 기준으로 split --> ["K", "V"]
  // 배열.map(함수) : 배열의 각 요소를 이용해 함수 수행 후
  //                  결과 값으로 새로운 배열을 만들어서 반환

  // 배열 -> 객체로 변환 (그래야 다루기 쉽다)

  const obj = {}; // 비어있는 객체 선언

  for (let i = 0; i < cookieList.length; i++) {
    const k = cookieList[i][0]; // key 값 얻어오기
    const v = cookieList[i][1]; // value 값 얻어오기
    obj[k] = v; // 객체에 추가 (새로운 K:V로!)

  }

  return obj[key]; // 매개변수로 전달받은 key와
  // obj 객체에 저장된 key가 일치하는 요소의 value값 반환

}
getCookie();

// 아이디 작성 input 태그 요소
const loginId = document.querySelector("#loginForm input[name= 'memberId']"); // 아이디 input 태그

if (loginId != null) { // 로그인 창의 이메일 input 태그가 화면에 존재할 때

  // 쿠키 중 key값이 "saveId"인 요소의 value 얻어오기
  const remember = getCookie("remember"); // 이메일 또는 undefined

  // saveId 가 값이 있을 경우
  if (remember != undefined) {
    loginId.value = remember; // 쿠키에서 얻어온 이메일 값을 input 요소의 value에 세팅

    // 아이디 저장 체크박스에 체크해두기
    document.querySelector("input[name='remember']").checked = true;
  }
}
