// querySelector(css 선택태그)하면 해당 객체가 선택됨.
const lastCity = document.querySelector("#four");
lastCity.className = "green";

// querySelectorAll로 해당 태그를 가진 모든 객체의 array가 선택됨.
const elems = document.querySelectorAll("li.red");
elems.forEach((elem) => console.log(elem));
elems.forEach((elem) => (elem.className = "blue"));

const one = document.querySelector("#one");

const textNode = one.firstChild;
textNode.nodeValue = "Busan";

const input = document.querySelector("#passwordInput");
if (!input.hasAttribute("value")) {
  // value 어트리뷰트를 추가하고 값으로 'hello!'를 설정
  input.setAttribute("value", "hello!");
}

const makeClickHandler1 = () => {
  return function () {
    if ($password.value === realPassword) {
      const cityInput = document.querySelector("#cityInput");
      const cityName = cityInput.value;
      console.log(cityName);
      const newElem = document.createElement("li");
      const newText = document.createTextNode(cityName);
      newElem.appendChild(newText);
      const container = document.querySelector("ul");
      container.appendChild(newElem);
    }
  };
};

$cityInput = document.querySelector(".add");
$cityInput.onclick = makeClickHandler1();

const $password = document.querySelector(".password");
const $show = document.querySelector(".show");

const makeClickHandler2 = () => {
  let isShow = true;
  return function () {
    isShow = !isShow;
    $password.setAttribute("type", isShow ? "text" : "password");
    $show.innerHTML = isShow ? "hide" : "show";
  };
};

$show.onclick = makeClickHandler2();

const realPassword = "1234";
