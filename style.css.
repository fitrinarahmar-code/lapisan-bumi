@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');

:root {
  --green: #39865b;
  --dark: #20583d;
  --mint: #dff3df;
  --light: #f4faef;
  --cream: #fff9ed;
  --text: #254735;
  --shadow: 0 12px 35px rgba(36, 94, 59, .11);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: 'Nunito', sans-serif;
  color: var(--text);
  background: #fbfdf7;
  line-height: 1.7;
}

button, input {
  font: inherit;
}

button, a {
  -webkit-tap-highlight-color: transparent;
}

a {
  text-decoration: none;
  color: inherit;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 7%;
  background: rgba(255,255,255,.96);
  box-shadow: 0 3px 18px rgba(0,0,0,.06);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 23px;
  font-weight: 900;
  color: var(--dark);
}

.brand img {
  width: 43px;
  height: 43px;
  object-fit: cover;
  border-radius: 50%;
}

.navbar nav {
  display: flex;
  align-items: center;
  gap: 26px;
}

.navbar nav a {
  font-weight: 800;
  font-size: 14px;
  transition: .25s;
}

.navbar nav a:hover {
  color: #70a75c;
}

.menu-toggle {
  display: none;
  background: var(--mint);
  border: 0;
  border-radius: 9px;
  padding: 7px 12px;
  font-size: 22px;
  color: var(--dark);
}

.hero {
  min-height: 580px;
  padding: 75px 8%;
  display: grid;
  grid-template-columns: 1.05fr .95fr;
  align-items: center;
  gap: 40px;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 90% 15%, #bfe5a9 0, transparent 33%),
    linear-gradient(120deg, #e8f6db, #f7f8e9 55%, #d9efd1);
}

.hero-content {
  max-width: 600px;
  position: relative;
  z-index: 2;
}

.eyebrow {
  display: inline-block;
  color: #538c4c;
  font-weight: 900;
  font-size: 12px;
  letter-spacing: 2px;
  margin-bottom: 14px;
}

.hero h1 {
  font-size: clamp(38px, 5vw, 66px);
  line-height: 1.13;
  color: #245c3d;
  font-weight: 900;
  margin-bottom: 20px;
}

.hero h1 span {
  color: #7cae55;
}

.hero-content > p {
  max-width: 540px;
  color: #58705b;
  font-size: 16px;
  margin-bottom: 28px;
}

.hero-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn {
  border: none;
  border-radius: 30px;
  padding: 13px 25px;
  font-weight: 900;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: .25s;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}

.btn-primary {
  background: #3e915e;
  color: white;
}

.btn-light {
  background: white;
  color: var(--dark);
  border: 1px solid #c8e3c3;
}

.hero-stats {
  display: flex;
  gap: 35px;
  margin-top: 42px;
}

.hero-stats div {
  display: flex;
  flex-direction: column;
}

.hero-stats strong {
  font-size: 22px;
  color: var(--green);
  font-weight: 900;
}

.hero-stats span {
  font-size: 12px;
  color: #6e806e;
}

.hero-art {
  position: relative;
  min-height: 390px;
  display: grid;
  place-items: center;
}

.art-circle {
  position: absolute;
  width: 370px;
  height: 370px;
  border-radius: 50%;
  background: #c9e6ae;
  box-shadow: 0 0 0 25px rgba(255,255,255,.3);
}

.earth-image {
  position: relative;
  z-index: 1;
  width: min(350px, 90%);
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  border: 9px solid white;
  box-shadow: 0 22px 45px rgba(35,90,55,.2);
  animation: float 5s ease-in-out infinite;
}

.floating-card {
  position: absolute;
  z-index: 2;
  bottom: 18px;
  left: -15px;
  background: white;
  padding: 12px 16px;
  border-radius: 18px;
  box-shadow: var(--shadow);
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 255px;
}

.floating-card img {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  object-fit: cover;
}

.floating-card strong,
.floating-card small {
  display: block;
}

.floating-card strong {
  font-size: 13px;
}

.floating-card small {
  font-size: 10px;
  color: #758475;
}

@keyframes float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-13px); }
}

.features {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  padding: 35px 8%;
  background: white;
}

.feature-item {
  padding: 20px;
  border-right: 1px solid #e5eee2;
}

.feature-item:last-child {
  border: none;
}

.feature-icon {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border-radius: 13px;
  background: #e1f2d9;
  color: #397b4d;
  font-weight: 900;
  margin-bottom: 12px;
}

.feature-item h3 {
  font-size: 16px;
  margin-bottom: 4px;
}

.feature-item p {
  color: #788879;
  font-size: 12px;
}

.section {
  padding: 85px 8%;
}

.section-heading {
  text-align: center;
  max-width: 650px;
  margin: 0 auto 42px;
}

.section-heading h2 {
  font-size: clamp(28px, 4vw, 40px);
  color: var(--dark);
  font-weight: 900;
  margin-bottom: 8px;
}

.section-heading p {
  color: #758575;
  font-size: 14px;
}

.layer-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.layer-card {
  position: relative;
  overflow: hidden;
  border-radius: 23px;
  background: white;
  box-shadow: var(--shadow);
  transition: .3s;
}

.layer-card:hover {
  transform: translateY(-7px);
}

.layer-card > img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.layer-number {
  position: absolute;
  top: 150px;
  right: 17px;
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background: #e4f2d9;
  border-radius: 50%;
  color: var(--dark);
  font-weight: 900;
  border: 3px solid white;
}

.layer-body {
  padding: 22px;
}

.layer-body h3 {
  font-size: 19px;
  color: var(--dark);
  margin-bottom: 8px;
}

.layer-body p {
  color: #748374;
  font-size: 12px;
  min-height: 82px;
}

.text-button {
  border: 0;
  background: transparent;
  color: #3c8a55;
  font-weight: 900;
  cursor: pointer;
  margin-top: 12px;
}

.text-button:hover {
  text-decoration: underline;
}

.detail-panel {
  margin-top: 25px;
  padding: 25px;
  background: #eaf5e3;
  border-radius: 20px;
  color: #315d3c;
  border: 1px solid #d5e9cb;
  min-height: 90px;
}

.detail-panel h3 {
  margin-bottom: 7px;
}

.detail-panel p {
  font-size: 14px;
}

.explore-section {
  padding: 85px 8%;
  background: linear-gradient(140deg, #edf7e6, #f7f9ee);
}

.explore-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 55px;
  background: white;
  border-radius: 28px;
  padding: 45px;
  box-shadow: var(--shadow);
}

.earth-cutaway {
  width: min(340px, 90%);
  aspect-ratio: 1;
  margin: auto;
  border-radius: 50%;
  background: #53a8cb;
  padding: 10px;
  box-shadow: 0 20px 45px rgba(40,100,90,.18);
}

.earth-layer {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: grid;
  place-items: center;
  transition: .3s;
}

.crust {
  background: #579c48;
  padding: 14px;
}

.mantle {
  background: #ed963f;
  padding: 24px;
}

.outer-core {
  background: #f3c84e;
  padding: 22px;
}

.inner-core {
  width: 58%;
  height: 58%;
  background: radial-gradient(circle at 35% 30%, #fff3a3, #df7434);
  border-radius: 50%;
  box-shadow: 0 0 30px #ffc65b;
}

.explore-info h3 {
  font-size: 25px;
  color: var(--dark);
  margin-bottom: 10px;
}

.explore-info > p {
  color: #788778;
  font-size: 14px;
  margin-bottom: 22px;
}

.layer-choice {
  display: block;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #dcebd5;
  background: #f5faf0;
  color: #386849;
  font-weight: 800;
  text-align: left;
  border-radius: 12px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: .2s;
}

.layer-choice:hover,
.layer-choice.active {
  background: #dcefd1;
  border-color: #83b876;
}

.explore-info .detail-panel {
  margin-top: 15px;
}

.game-box, .quiz-box, .quiz-result {
  max-width: 800px;
  margin: auto;
  background: white;
  border-radius: 25px;
  padding: 35px;
  box-shadow: var(--shadow);
}

.game-top, .quiz-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 14px;
}

.game-top h3 {
  color: var(--dark);
}

#gameScore {
  background: #e6f3dc;
  color: #39754a;
  border-radius: 20px;
  padding: 6px 14px;
  font-weight: 900;
  font-size: 13px;
}

.game-box > p {
  color: #778577;
  font-size: 14px;
  margin-bottom: 18px;
}

.matching-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
}

.matching-grid h4 {
  margin-bottom: 12px;
  color: var(--dark);
}

.match-name, .match-answer {
  width: 100%;
  min-height: 58px;
  padding: 12px;
  display: block;
  border-radius: 13px;
  border: 1px solid #dcebd6;
  background: #f7faf3;
  color: #385c42;
  font-weight: 800;
  text-align: left;
  cursor: pointer;
  margin-bottom: 10px;
  transition: .2s;
}

.match-name:hover, .match-answer:hover,
.match-name.selected, .match-answer.selected {
  border-color: #65a16a;
  background: #e5f2de;
}

.match-name.correct, .match-answer.correct {
  background: #d7f0d8;
  border-color: #54a45d;
  cursor: default;
}

.match-name:disabled, .match-answer:disabled {
  opacity: .75;
}

.game-message {
  min-height: 28px;
  font-weight: 800;
  color: #42814e !important;
  margin: 12px 0 15px !important;
}

.quiz-section {
  padding: 85px 8%;
  background: #eff7e9;
}

.quiz-top {
  color: #56805b;
  font-weight: 800;
  font-size: 13px;
}

.progress-track {
  height: 9px;
  background: #e3eddf;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 28px;
}

#quizProgress {
  width: 0;
  height: 100%;
  background: #60a46b;
  transition: .3s;
}

.quiz-box h3 {
  font-size: 21px;
  color: var(--dark);
  margin-bottom: 20px;
}

.answer-options {
  display: grid;
  gap: 12px;
}

.answer-option {
  padding: 14px 17px;
  border: 1px solid #e0eadd;
  border-radius: 12px;
  background: #fbfdf9;
  text-align: left;
  font-weight: 700;
  color: #48634b;
  cursor: pointer;
}

.answer-option:hover:not(:disabled) {
  border-color: #75ae72;
  background: #edf6e8;
}

.answer-option.correct {
  background: #dff2df;
  border-color: #68a66b;
}

.answer-option.wrong {
  background: #fce8e5;
  border-color: #db8580;
}

#quizFeedback {
  min-height: 30px;
  margin: 15px 0;
  font-weight: 800;
  font-size: 14px;
}

#nextQuestion:disabled {
  opacity: .45;
  cursor: not-allowed;
}

.quiz-result {
  text-align: center;
}

.quiz-result h3 {
  color: var(--dark);
}

.quiz-result strong {
  display: block;
  font-size: 60px;
  color: #4b955c;
  margin: 12px;
}

.profile-box {
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 30px;
  max-width: 700px;
  margin: auto;
  border-radius: 22px;
  background: white;
  box-shadow: var(--shadow);
}

.profile-avatar {
  width: 85px;
  height: 85px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #dcefd3;
  color: #3c8051;
  font-size: 27px;
  font-weight: 900;
}

.profile-content {
  flex: 1;
}

.profile-content label {
  display: block;
  font-weight: 900;
  margin-bottom: 6px;
}

.profile-content input {
  width: 100%;
  border: 1px solid #dce8d8;
  border-radius: 10px;
  padding: 11px 13px;
  margin-bottom: 12px;
  outline: none;
}

.profile-content input:focus {
  border-color: #6ba36e;
}

.progress-cards {
  max-width: 800px;
  margin: 25px auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.progress-cards div {
  padding: 24px 12px;
  background: #e9f4e2;
  border-radius: 17px;
  text-align: center;
}

.progress-cards strong, .progress-cards span {
  display: block;
}

.progress-cards strong {
  font-size: 27px;
  color: #34784a;
}

.progress-cards span {
  font-size: 12px;
  color: #6d806c;
}

footer {
  padding: 45px 8%;
  background: #245a3e;
  color: white;
  text-align: center;
}

.footer-brand {
  font-size: 24px;
  font-weight: 900;
}

footer p {
  font-size: 13px;
  opacity: .8;
}

.copyright {
  margin-top: 20px;
  font-size: 11px;
}

.back-top {
  position: fixed;
  bottom: 22px;
  right: 22px;
  width: 43px;
  height: 43px;
  background: #39865b;
  color: white;
  border: 0;
  border-radius: 50%;
  font-size: 23px;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: .3s;
}

.back-top.show {
  opacity: 1;
  pointer-events: auto;
}

@media (max-width: 1000px) {
  .layer-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .navbar nav {
    gap: 14px;
  }

  .hero {
    padding-left: 5%;
    padding-right: 5%;
  }
}

@media (max-width: 700px) {
  .navbar {
    padding: 12px 5%;
  }

  .brand {
    font-size: 19px;
  }

  .menu-toggle {
    display: block;
  }

  .navbar nav {
    display: none;
    position: absolute;
    top: 68px;
    left: 0;
    width: 100%;
    padding: 18px 6%;
    background: white;
    flex-direction: column;
    align-items: stretch;
    box-shadow: var(--shadow);
  }

  .navbar nav.open {
    display: flex;
  }

  .navbar nav a {
    padding: 8px 0;
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 55px 7%;
    text-align: center;
  }

  .hero-content {
    margin: auto;
  }

  .hero-buttons, .hero-stats {
    justify-content: center;
  }

  .hero-art {
    min-height: 330px;
  }

  .art-circle {
    width: 270px;
    height: 270px;
  }

  .earth-image {
    width: 260px;
  }

  .floating-card {
    left: 0;
    bottom: 0;
  }

  .features {
    grid-template-columns: repeat(2, 1fr);
    padding: 25px 5%;
  }

  .feature-item {
    border: none;
  }

  .section, .explore-section, .quiz-section {
    padding: 60px 6%;
  }

  .layer-grid {
    grid-template-columns: 1fr;
  }

  .layer-card > img {
    height: 210px;
  }

  .layer-body p {
    min-height: auto;
  }

  .explore-layout {
    grid-template-columns: 1fr;
    padding: 25px 18px;
    gap: 30px;
  }

  .earth-cutaway {
    width: 260px;
  }

  .game-box, .quiz-box, .quiz-result {
    padding: 23px 18px;
  }

  .matching-grid {
    gap: 12px;
  }

  .match-name, .match-answer {
    font-size: 12px;
    padding: 10px;
    min-height: 68px;
  }

  .profile-box {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 380px) {
  .progress-cards {
    grid-template-columns: 1fr;
  }

  .hero-stats {
    gap: 15px;
  }
}
