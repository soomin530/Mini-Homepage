<h1>2 years apart Mini Homepage</h1>
📍 프로젝트 기간 : 2024.11.18 ~ 2024.12.13
<br>
<br>

| ![](https://github.com/user-attachments/assets/52aaa82c-933b-409d-b1f8-2eb8ae20d4e2) | ![](https://github.com/user-attachments/assets/6864796c-5661-4157-a08b-d86cb7eff7b0) |
| --- | --- |

| ![](https://github.com/user-attachments/assets/47658899-d045-4336-9745-02ab336858b5) | ![](https://github.com/user-attachments/assets/da9051a8-55b5-42b4-b218-cb4dc882c04b) |
| --- | --- |




## 📌 개요

```
2️⃣ '2 years apart'는 저희 팀원들이 각각 2살 터울이라는 의미를 지니고 있습니다.

📖 해당 미니 홈페이지는 싸이월드를 벤치마킹하여 구현한 미니 홈페이지입니다. 

📷 서비스 사용자들은 포스팅 기능을 통해 사진첩과 게시글에 기록을 하며 서로의 일상을 공유할 수 있습니다.

👥 메인페이지 우측 하단의 랜덤방문을 클릭 시 탈퇴 하지 않은 유저의 페이지 중 누군가의 페이지로 이동합니다. 

📝 메모장은 사용자의 프라이빗한 공간으로, 사용자 외에는 접근하지 못하며 배경색을 자유롭게 변경할 수 있습니다.

✍🏻 싸이월드처럼 방명록을 구현하였고, 방명록을 작성한 본인은 수정/삭제를 할 수 있습니다.

🪪 해당 홈페이지는 회원가입을 해야 이용할 수 있도록 구현했습니다.
```

</br>

## 🐡 Our Team 

<table>
  <tr height="205px">
    <td align="center" width="200px">
      <a href="https://github.com/shin-muja"><img src="https://github.com/user-attachments/assets/6aedf0e6-5e1b-4e90-a2fb-9aff200e5339"/></a>
    </td>
    <td align="center" width="200px">
      <a href="https://github.com/herd132"><img src="https://github.com/user-attachments/assets/7e62cd22-de4b-4801-872f-2dca2dc7c079"/></a>
    </td>
    <td align="center" width="200px">
      <a href="https://github.com/soomin530"><img src="https://github.com/user-attachments/assets/bb63eb2a-d4a5-495e-b2b4-092b8a3d9af9"/></a>
    </td>
    <td align="center" width="200px">
      <a href="https://github.com/manggo999"><img src="https://github.com/user-attachments/assets/e5b9e556-b34d-4573-ac4b-7599042e1000"/></a>
    </td>
  </tr>
  <tr>
    <td align="center" width="200px">
      <a href="https://github.com/shin-muja/"><strong>신동국</strong></a><br>
    </td>
    <td align="center" width="200px">
      <a href="https://github.com/herd132/"><strong>김용찬</strong></a><br>
    </td>
    <td align="center" width="200px">
      <a href="https://github.com/soomin530/"><strong>우수민</strong></a><br>
    </td>
    <td align="center" width="200px">
      <a href="https://github.com/manggo999/"><strong>고민규</strong></a><br>
    </td>
  </tr>
</table>

<br />

## 📂 폴더 구조

```
📦src
 ├─ 📂main/java/
 │  ├─ 📂com.twogap.project
 │  │   ├─ 📂board
 │  │   ├─ 📂boards
 │  │   ├─ 📂common
 │  │   │  ├─ 📂config
 │  │   │  ├─ 📂filter
 │  │   │  └─ 📂util
 │  │   ├─ 📂email
 │  │   ├─ 📂follow
 │  │   ├─ 📂login
 │  │   ├─ 📂member
 │  │   ├─ 📂note
 │  │   ├─ 📂photo
 │  │   ├─ 📂visitor
 │  │   ├─ 📂MainController.java
 │  │   └─ 📂TwoGapProjectApplication
 │  └─ 📂resources
 │     ├─ 📂mappers
 │     ├─ 📂templates
 │     │  ├─ 📂base
 │     │  ├─ 📂boards
 │     │  ├─ 📂email
 │     │  ├─ 📂follow
 │     │  └─ 📂member
 │     ├─ 📂static
 │     │  ├─ 📂css
 │     │  │  ├─ 📂boards
 │     │  │  └─ 📂follow
 │     │  │  ├─    base.css
 │     │  │  ├─    changePw.css
 │     │  │  ├─    findId.css
 │     │  │  ├─    findPw.css
 │     │  │  ├─    login.css
 │     │  │  ├─    privacyInfo-uadate.css
 │     │  │  ├─    profile-update.css
 │     │  │  ├─    signOut.css
 │     │  │  ├─    signUp.css
 │     │  │  └─    signUpNotice.css
 │     │  ├─ 📂images
 │     │  ├─ 📂js
 │     │  │  ├─ 📂boards
 │     │  │  └─ 📂follow
 │     │  │  ├─    base.js
 │     │  │  ├─    changePw.js
 │     │  │  ├─    findId.js
 │     │  │  ├─    findPw.js
 │     │  │  ├─    login.js
 │     │  │  ├─    main.js
 │     │  │  ├─    photo.js
 │     │  │  ├─    privacyInfo-uadate.js
 │     │  │  ├─    profile-update.js
 │     │  │  ├─    pwChange.js
 │     │  │  ├─    signOut.js
 │     │  │  └─    signUp.js
 │     ├─ 📜application.properties
 │     ├─ 📜config.properties
 │     ├─ 📜messages.properties
 │     └─ 📜mybatis-config.xml
```

