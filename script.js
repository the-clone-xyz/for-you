document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  const text = document.getElementById("text");
  const section = document.getElementById("section");
  const audio = document.getElementById("myAudio");
  setTimeout(() => {
    document.getElementById("myAudio").remove();
  }, 58770);

  text.style.fontFamily = "monospace";

  audio.addEventListener("canplaythrough", () => {
    btn.style.display = "inline-block";
  });

  btn.addEventListener("click", () => {
    audio.play();
    btn.remove();
    get_text();
  });

  function get_text() {
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
    ];

    texts.forEach(({ time, content, effect }) => {
      setTimeout(() => {
        text.innerHTML = content;
        text.classList.add("fade-text");
        if (effect) effect();
      }, time);
    });
  }

  function showEffects() {
    section.classList.add("bg-show");

    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        createHeart();
        createParticle();
        createFire();
      }, i * 150);
    }
  }

  function createHeart() {
    const heart = document.createElement("i");
    heart.className = "fa fa-heart heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "90vh";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2500);
  }

  function createParticle() {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.top = "90vh";
    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 2000);
  }

  function createFire() {
    const fire = document.createElement("div");
    fire.className = "fire";
    fire.style.left = Math.random() * 100 + "vw";
    fire.style.top = "90vh";
    document.body.appendChild(fire);

    setTimeout(() => {
      fire.remove();
    }, 2000);
  }
});
