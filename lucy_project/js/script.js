document.addEventListener("DOMContentLoaded", () => {
  const flowerContainer = document.querySelector(".flower-container");

  function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    // 랜덤 위치와 애니메이션 속도를 지정
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = Math.random() * 4 + 3 + "s"; // 3초~6초 사이

    flowerContainer.appendChild(flower);

    // 애니메이션이 끝난 후 요소 삭제
    flower.addEventListener("animationend", () => {
      flower.remove();
    });
  }
  $(document).ready(function () {
    // 페이지 전환 버튼을 선택하고 클릭 이벤트 추가
    $(".message").on("click", function (event) {
      event.preventDefault(); // 기본 동작 방지

      const newLocation = "blue.html"; // 이동할 URL 설정

      // 페이드 아웃 클래스를 바디에 추가하여 애니메이션 실행
      $("body").addClass("fade-out");

      // 애니메이션이 끝난 후 페이지 이동
      setTimeout(function () {
        window.location.href = newLocation;
      }, 500); // 애니메이션 시간과 동일하게 설정 (0.5초)
    });
  });

  // 일정 시간마다 꽃 생성
  const flowerInterval = setInterval(createFlower, 1200);

  // 페이지 이동 시 애니메이션 멈추기
  document.querySelector(".message").addEventListener("click", () => {
    clearInterval(flowerInterval); // 꽃 생성 중지
    location.href = "blue.html"; // 페이지 이동
  });
});
document.querySelector(".message").addEventListener("mouseenter", function () {
  this.src = "img/message_img_h.svg";
});

document.querySelector(".message").addEventListener("mouseleave", function () {
  this.src = "img/message_img.svg";
});
