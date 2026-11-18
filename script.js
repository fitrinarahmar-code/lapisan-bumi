// ========================================
// DATA MATERI LAPISAN BUMI
// ========================================

const layerData = {
  "kerak": {
    title: "Kerak Bumi",
    description: "Kerak Bumi merupakan lapisan paling luar dan paling tipis dari struktur Bumi. Lapisan ini menjadi tempat berlangsungnya kehidupan manusia, hewan, dan tumbuhan.",
    facts: [
      "Terdiri atas kerak benua dan kerak samudra.",
      "Ketebalannya sekitar 5–70 km.",
      "Tersusun dari berbagai jenis batuan dan mineral.",
      "Bagian kerak bersama mantel paling atas membentuk litosfer."
    ]
  },
  "mantel": {
    title: "Mantel Bumi",
    description: "Mantel Bumi berada di bawah kerak dan merupakan lapisan paling tebal. Mantel tersusun atas batuan panas yang dapat berubah bentuk dan mengalir sangat lambat dalam waktu geologis.",
    facts: [
      "Ketebalannya sekitar 2.900 km.",
      "Sebagian besar tersusun dari batuan silikat.",
      "Memiliki suhu dan tekanan yang sangat tinggi.",
      "Pergerakan material mantel berperan dalam pergerakan lempeng tektonik."
    ]
  },
  "inti-luar": {
    title: "Inti Luar Bumi",
    description: "Inti luar adalah lapisan logam cair yang terletak di antara mantel dan inti dalam. Lapisan ini terutama tersusun atas besi dan nikel.",
    facts: [
      "Ketebalannya sekitar 2.200 km.",
      "Berada dalam keadaan cair.",
      "Suhu sangat tinggi.",
      "Pergerakan logam cair membantu menghasilkan medan magnet Bumi."
    ]
  },
  "inti-dalam": {
    title: "Inti Dalam Bumi",
    description: "Inti dalam merupakan bagian paling pusat dari Bumi. Meskipun suhunya sangat tinggi, tekanan yang luar biasa besar membuat material utamanya tetap berada dalam keadaan padat.",
    facts: [
      "Jari-jarinya sekitar 1.220 km.",
      "Terutama tersusun atas besi dan nikel.",
      "Berada dalam keadaan padat.",
      "Memiliki tekanan yang sangat besar."
    ]
  }
};

// ========================================
// MENU NAVIGASI HP
// ========================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

navMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// ========================================
// MATERI DAN EKSPLORASI
// ========================================

const learned = new Set();

function showLayer(key, target) {
  const data = layerData[key];
  if (!data) return;

  learned.add(key);

  target.innerHTML = `
    <h3>${data.title}</h3>
    <p>${data.description}</p>
    <br>
    <strong>Karakteristik dan fakta menarik:</strong>
    <ul>
      ${data.facts.map(fact => `<li>${fact}</li>`).join("")}
    </ul>
  `;

  updateProfile();
}

document.querySelectorAll("[data-layer]").forEach(button => {
  button.addEventListener("click", () => {
    const key = button.dataset.layer;

    if (button.classList.contains("layer-choice")) {
      document.querySelectorAll(".layer-choice").forEach(item => {
        item.classList.remove("active");
      });
      button.classList.add("active");
      showLayer(key, document.getElementById("exploreDetail"));
    } else {
      showLayer(key, document.getElementById("materiDetail"));
    }
  });
});

// ========================================
// GAME MENCOCOKKAN
// ========================================

let selectedName = null;
let selectedAnswer = null;
let gameCorrect = new Set();

const gameMessage = document.getElementById("gameMessage");

function updateGameScore() {
  document.getElementById("gameScore").textContent =
    `Skor: ${gameCorrect.size} / 4`;

  const oldBest = Number(localStorage.getItem("earthGameBest") || 0);
  if (gameCorrect.size > oldBest) {
    localStorage.setItem("earthGameBest", gameCorrect.size);
  }

  updateProfile();
}

function checkMatch() {
  if (!selectedName || !selectedAnswer) return;

  if (selectedName === selectedAnswer) {
    gameCorrect.add(selectedName);

    document.querySelectorAll(
      `[data-match="${selectedName}"], [data-answer="${selectedAnswer}"]`
    ).forEach(button => {
      button.classList.remove("selected");
      button.classList.add("correct");
      button.disabled = true;
    });

    gameMessage.textContent = "Benar! Pasangan berhasil ditemukan.";
    updateGameScore();

    if (gameCorrect.size === 4) {
      gameMessage.textContent =
        "Hebat! Semua pasangan berhasil kamu cocokkan.";
    }
  } else {
    gameMessage.textContent =
      "Belum tepat. Coba periksa kembali pasangan tersebut.";
  }

  selectedName = null;
  selectedAnswer = null;

  setTimeout(() => {
    document.querySelectorAll(".match-name, .match-answer")
      .forEach(button => button.classList.remove("selected"));
  }, 350);
}

document.querySelectorAll(".match-name").forEach(button => {
  button.addEventListener("click", () => {
    if (button.disabled) return;

    selectedName = button.dataset.match;

    document.querySelectorAll(".match-name")
      .forEach(item => item.classList.remove("selected"));

    button.classList.add("selected");
    checkMatch();
  });
});

document.querySelectorAll(".match-answer").forEach(button => {
  button.addEventListener("click", () => {
    if (button.disabled) return;

    selectedAnswer = button.dataset.answer;

    document.querySelectorAll(".match-answer")
      .forEach(item => item.classList.remove("selected"));

    button.classList.add("selected");
    checkMatch();
  });
});

document.getElementById("resetGame").addEventListener("click", () => {
  selectedName = null;
  selectedAnswer = null;
  gameCorrect.clear();

  document.querySelectorAll(".match-name, .match-answer")
    .forEach(button => {
      button.disabled = false;
      button.classList.remove("selected", "correct");
    });

  gameMessage.textContent = "Permainan dimulai kembali. Selamat mencoba!";
  updateGameScore();
});

// ========================================
// KUIS LAPISAN BUMI
// ========================================

const questions = [
  {
    question: "Lapisan paling luar dari struktur Bumi adalah ...",
    answers: ["Mantel", "Kerak Bumi", "Inti Luar", "Inti Dalam"],
    correct: 1,
    explanation: "Kerak Bumi merupakan lapisan paling luar."
  },
  {
    question: "Lapisan Bumi yang paling tebal adalah ...",
    answers: ["Kerak", "Inti Dalam", "Mantel", "Inti Luar"],
    correct: 2,
    explanation: "Mantel merupakan lapisan Bumi paling tebal."
  },
  {
    question: "Inti luar Bumi memiliki bentuk ...",
    answers: ["Padat", "Gas", "Cair", "Uap"],
    correct: 2,
    explanation: "Inti luar tersusun atas logam cair, terutama besi dan nikel."
  },
  {
    question: "Inti dalam Bumi terutama tersusun dari ...",
    answers: ["Air dan udara", "Besi dan nikel", "Pasir dan tanah", "Batuan sedimen"],
    correct: 1,
    explanation: "Inti dalam terutama tersusun dari besi dan nikel dalam keadaan padat."
  },
  {
    question: "Pergerakan material cair pada inti luar berperan dalam pembentukan ...",
    answers: ["Awan", "Hujan", "Medan magnet Bumi", "Gelombang laut"],
    correct: 2,
    explanation: "Gerakan logam cair pada inti luar membantu menghasilkan medan magnet Bumi."
  }
];

let currentQuestion = 0;
let quizScore = 0;
let answered = false;

const questionText = document.getElementById("questionText");
const answerOptions = document.getElementById("answerOptions");
const quizFeedback = document.getElementById("quizFeedback");
const nextButton = document.getElementById("nextQuestion");

function showQuestion() {
  answered = false;

  const question = questions[currentQuestion];

  document.getElementById("questionNumber").textContent =
    `Pertanyaan ${currentQuestion + 1} dari ${questions.length}`;

  document.getElementById("quizProgressText").textContent =
    `${Math.round(currentQuestion / questions.length * 100)}%`;

  document.getElementById("quizProgress").style.width =
    `${currentQuestion / questions.length * 100}%`;

  questionText.textContent = question.question;
  answerOptions.innerHTML = "";
  quizFeedback.textContent = "";
  nextButton.disabled = true;

  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-option";
    button.textContent = answer;

    button.addEventListener("click", () => {
      if (answered) return;

      answered = true;

      const buttons = answerOptions.querySelectorAll("button");
      buttons.forEach((item, i) => {
        item.disabled = true;

        if (i === question.correct) {
          item.classList.add("correct");
        }
      });

      if (index === question.correct) {
        quizScore++;
        quizFeedback.textContent = "Jawaban benar! " + question.explanation;
        quizFeedback.style.color = "#37814b";
      } else {
        button.classList.add("wrong");
        quizFeedback.textContent = "Belum tepat. " + question.explanation;
        quizFeedback.style.color = "#b25d4d";
      }

      nextButton.disabled = false;
      nextButton.textContent =
        currentQuestion === questions.length - 1
          ? "Lihat Hasil"
          : "Soal Berikutnya";
    });

    answerOptions.appendChild(button);
  });
}

function finishQuiz() {
  const score = Math.round(quizScore / questions.length * 100);
  const previousBest = Number(localStorage.getItem("earthBestScore") || 0);

  if (score > previousBest) {
    localStorage.setItem("earthBestScore", score);
  }

  document.getElementById("quizBox").hidden = true;
  document.getElementById("quizResult").hidden = false;
  document.getElementById("finalScore").textContent = score;

  document.getElementById("resultMessage").textContent =
    score >= 80
      ? "Hebat! Kamu sudah memahami materi lapisan Bumi dengan baik."
      : score >= 60
      ? "Bagus! Terus belajar agar pemahamanmu semakin meningkat."
      : "Tetap semangat! Pelajari kembali materi dan coba lagi.";

  updateProfile();
}

nextButton.addEventListener("click", () => {
  if (!answered) return;

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    finishQuiz();
  } else {
    showQuestion();
  }
});

document.getElementById("retryQuiz").addEventListener("click", () => {
  currentQuestion = 0;
  quizScore = 0;

  document.getElementById("quizBox").hidden = false;
  document.getElementById("quizResult").hidden = true;

  nextButton.textContent = "Soal Berikutnya";
  showQuestion();
});

// ========================================
// PROFIL DAN PENYIMPANAN
// ========================================

const userName = document.getElementById("userName");

userName.value = localStorage.getItem("earthUserName") || "";

document.getElementById("saveName").addEventListener("click", () => {
  const name = userName.value.trim();

  if (!name) {
    alert("Silakan masukkan nama terlebih dahulu.");
    return;
  }

  localStorage.setItem("earthUserName", name);
  alert("Nama berhasil disimpan.");
});

function updateProfile() {
  document.getElementById("learnedCount").textContent = learned.size;
  document.getElementById("bestScore").textContent =
    Number(localStorage.getItem("earthBestScore") || 0);

  document.getElementById("gameBest").textContent =
    Number(localStorage.getItem("earthGameBest") || 0);
}

updateProfile();
showQuestion();

// ========================================
// TOMBOL KEMBALI KE ATAS
// ========================================

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 350);
});

backTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
