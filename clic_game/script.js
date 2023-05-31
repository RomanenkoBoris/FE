function start_game() {
  object.classList.toggle("start");
  document.title = "Score: 0";
}

function finish_game() {
  alert(`You lose. Score ${score}`);
}

function miss(event) {
  if (event.target.id == "area") {
    score--;
    document.title = `Score ${score}`;
    miss_sound.currentTime = 0;
    miss_sound.play();

    if (score <= 0) {
      finish_game();
    }
  }
}

function hit() {
  score++;
  document.title = `Score ${score}`;
  object.classList.remove("start");
  void object.offsetWidth;
  object.classList.add("start");

  let random_offset = Math.floor(Math.random() * 550);
  object.style.left = `${random_offset}px`;

  hit_sound.currentTime = 0;
  hit_sound.play();

  if (score % 5 == 0) {
    increase_speed();
  }

  if (score % 1 == 0) {
    change_color();
  }
}

let object_speed = 2;
let object_width = 50;
function increase_speed() {
  if (object_speed >= 0.5) {
    object_speed -= 0.1;
    object_width -= 5;
    object.style.animationDuration = `${object_speed}s`;
    object.style.width = `${object_width}px`;
  }
}

function change_color() {
  let colors = ["blue", "red", "black", "yellow", "green"];
  color_ind = Math.floor(Math.random() * colors.length);
  object.style.background = colors[color_ind];
}

let object = document.querySelector("#object");
let score = 0;

const hit_sound = new Audio("Sounds/hit.wav");
const miss_sound = new Audio("Sounds/sounds_miss.wav");

object.addEventListener("mouseover", function () {
  let random_offset = Math.floor(Math.random() * 340);
  object.style.left = `${random_offset}px`;
});
