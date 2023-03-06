const jordan = document.querySelector("#player1");
const adidas = document.querySelector("#player2");
const start = document.querySelector(".start");

start.addEventListener("click", function () {
  adidas.classList.add("adidas");
});

function jump() {
  if (jordan.classList != "jump") {
    jordan.classList.add("jump");
  }
  setTimeout(function () {
    jordan.classList.remove("jump");
  }, 600);
}

document.addEventListener("keydown", function (e) {
  jump();
});

let isAlive = setInterval(function () {
  let jordanTop = parseInt(
    window.getComputedStyle(jordan).getPropertyValue("top")
  );
  let adidasLeft = parseInt(
    window.getComputedStyle(adidas).getPropertyValue("left")
  );

  if (adidasLeft < 100 && adidasLeft > 0 && jordanTop >= 390) {
    alert("Checks over stripes");
  }
}, 100);
