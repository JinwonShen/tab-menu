// 노드에 접근
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  // 클릭 이벤트로 선택된 요소를 리턴 e.target
  // data-id 속성의 값을 리턴 data-id="value"

  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    articles.forEach((article) => {
      article.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
