document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");
  const text = document.getElementById("text");
  const audio = document.getElementById("myAudio");
  const section = document.getElementById("section");

  let isPlaying = false;

  btn.addEventListener("click", () => {
    if (!isPlaying) {
      isPlaying = true;
      audio.play();
      btn.remove();
      startTextAnimation();
    }
  });

  function startTextAnimation() {
    const texts = [
      { time: 0, content: "......." },
      { time: 12200, content: "-Ku Akan Datang Lagi" },
      { time: 17870, content: "-Meski Ibumu Melarang" },
      {
        time: 23300,
        content: "-Ku Tunjukkan Kesungguhan Untuk, Miliki Dirimu",
      },
      {
        time: 33700,
        content: "-Yang Ku Ingin, Bukan Sekedar Hanya Untuk Pacaran",
        effect: showEffects,
      },
      {
        time: 44900,
        content:
          "-Yang Ku Mau Memberikan Seluruh Cinta Sampai Akhir Waktu Nanti",
      },
      {
        time: 58770,
        content: "Proud of U <i class='fa fa-heart text-white'></i>",
      },
    ];

    texts.forEach(({ time, content, effect }) => {
      setTimeout(() => {
        text.innerHTML = content;
        text.classList.add("fade-in");
        if (effect) effect();
      }, time);
    });

    setTimeout(() => {
      audio.pause();
    }, texts[texts.length - 1].time + 2000);
  }

  function showEffects() {
    document.body.classList.add("bg-show");
    for (let i = 0; i < 20; i++) {
      setTimeout(createHeart, i * 150);
    }
  }

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fa fa-heart heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "90vh";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2500);
  }
});
