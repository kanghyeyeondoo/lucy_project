$(document).ready(function () {
  const flowerContainer = $(".falling-flowers");

  // 벚꽃 생성 함수
  function createFlower() {
    const flower = $('<img src="img/W_wing.svg" class="flower">');

    // 랜덤 위치와 속도 설정
    flower.css({
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 3 + 7}s`, // 5~8초 랜덤 지속
    });

    // 벚꽃을 컨테이너에 추가
    flowerContainer.append(flower);

    // 애니메이션이 끝난 후 벚꽃 삭제
    flower.on("animationend", function () {
      $(this).remove();
    });
  }

  // 일정 간격으로 벚꽃 생성
  const flowerInterval = setInterval(createFlower, 300);

  // 페이지 전환 전까지만 애니메이션 실행
  setTimeout(() => {
    clearInterval(flowerInterval);
  }, 5000); // 예: 5초간 반복
});
$(document).ready(function () {
  const messageImg = $(".message");

  // 마우스를 올렸을 때
  messageImg.on("mouseenter", function () {
    $(this).attr("src", "img/letter_img_b_h.svg");
  });

  // 마우스를 치웠을 때
  messageImg.on("mouseleave", function () {
    $(this).attr("src", "img/message_img_b.svg");
  });
});
$(document).ready(function () {
  // 페이지 전환 버튼을 선택하고 클릭 이벤트 추가
  $(".message").on("click", function (event) {
    event.preventDefault(); // 기본 동작 방지

    const newLocation = "index.html"; // 이동할 URL 설정

    // 페이드 아웃 클래스를 바디에 추가하여 애니메이션 실행
    $("body").addClass("fade-out");

    // 애니메이션이 끝난 후 페이지 이동
    setTimeout(function () {
      window.location.href = newLocation;
    }, 500); // 애니메이션 시간과 동일하게 설정 (0.5초)
  });
});
