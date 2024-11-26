const centerBox = document.querySelector(".center-box");


function selectAlert() {

  const logo = document.createElement("div");

  logo.innerHTML = "<h1>2 YEARS APART</h1><h2>MINI HOMEPAGE</h2>"
  logo.classList.add("logo");

  centerBox.append(logo);

};

selectAlert();

const memberNo = document.querySelector("#memberNo").value;
console.log(memberNo);