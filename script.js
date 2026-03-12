/* LOADING */

setTimeout(() => {
  document.getElementById("loading").style.display = "none";
}, 2500);

/* NAVIGATION */

function next(step) {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById("step" + step).classList.add("active");

  if (step === 6) {
    startLetter();
    document.getElementById("song1").pause();
    document.getElementById("song2").play();
  }
}

/* MUSIC */

let song1 = document.getElementById("song1");

function playSong() {
  if (song1.paused) {
    song1.play();
    typeLyrics();
  } else {
    song1.pause();
  }
}

/* LYRICS */

function typeLyrics() {
  const lyrics = [
    "And if I was a fool for you",
    "I'd wait 500 million hours",
    "On a park bench out on the moon",
    "But in full view of what you are",
    "You're a goddess, you're my rock star",
  ];

  let el = document.getElementById("lyrics");
  el.innerHTML = "";

  let lineIndex = 0;

  function typeLine() {
    if (lineIndex >= lyrics.length) return;

    let text = lyrics[lineIndex];
    let charIndex = 0;

    let span = document.createElement("span");
    span.style.display = "block";
    el.appendChild(span);

    let typing = setInterval(() => {
      span.innerHTML += text[charIndex];
      charIndex++;

      if (charIndex >= text.length) {
        clearInterval(typing);
        lineIndex++;

        setTimeout(typeLine, 5000);
      }
    }, 40);
  }

  typeLine();
}

/* LETTER */

function startLetter() {
  let text = `Hello Shiena,

I know this might be kind of random, but I just wanted you to know that I've liked you for a while now, ever since the first time I saw you.

I don't expect anything from this, and you don't have to like me back. I just wanted to express how I feel.

I also know that you like someone, and I sincerely hope that the person you like will treat you gently, take care of you, and truly make you happy.

Also, I'm sorry for saving your pictures without asking for permission. If you're not comfortable with it, just let me know and I'll delete them right away.

Lastly, good luck with your studies. Don't pressure yourself too much, and remember to drink water and take care of yourself.

Take care always.
`;

  let i = 0;
  let el = document.getElementById("letterText");

  let interval = setInterval(() => {
    el.innerHTML += text[i];
    i++;

    if (i >= text.length) clearInterval(interval);
  }, 45);
}

/* SECRET */

function showSecret() {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.remove("active"));
  document.getElementById("secretPage").classList.add("active");
}

function checkPassword() {
  let pass = document.getElementById("password").value.toLowerCase();

  if (pass === "shiena") {
    document.getElementById("secretMessage").innerText =
      `You found the secret page 👀

I didn't know where to put this message,
but I just want you to know that you inspire me more than you probably realize.(kahit na once a week lng kita makita hwaha)

That's all. Don't tell anyone you found this.`;
  } else {
    document.getElementById("secretMessage").innerText = "Wrong password 🙂";
  }
}

/* FLOATING HEARTS */

setInterval(() => {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-20px";

  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}, 800);

/* CURSOR SPARKLE */

document.addEventListener("mousemove", (e) => {
  let spark = document.createElement("div");

  spark.style.position = "fixed";
  spark.style.left = e.clientX + "px";
  spark.style.top = e.clientY + "px";
  spark.style.width = "6px";
  spark.style.height = "6px";
  spark.style.background = "#ff6fa5";
  spark.style.borderRadius = "50%";
  spark.style.pointerEvents = "none";
  spark.style.opacity = "1";
  spark.style.transition = "0.8s";

  document.body.appendChild(spark);

  setTimeout(() => {
    spark.style.opacity = "0";
    spark.style.transform = "scale(3)";
  }, 10);

  setTimeout(() => spark.remove(), 800);
});
