// =========================================================
// 真平台語電子書・拔河搶答大賽 主程式 (app.js)
// =========================================================

(function () {
  // -------------------- 狀態管理 --------------------
  const state = {
    grade: 1,
    semester: 1, // 1: 上學期, 2: 下學期
    scopeMode: "all", // "all" (全本書) | "lesson" (分課)
    selectedLessonIds: new Set(["L1", "L2", "L3", "L4", "L5"]),
    optionMode: "both", // "both" | "split_buttons" | "hanzi_to_tailo" | "tailo_to_hanzi"
    totalTimeLimit: 60, // 秒 (0 表示不限時)
    questionTimeLimit: 12, // 秒 (0 表示不限時)
    winSteps: 5, // 拔河獲勝格數
    versusMode: "2p", // "2p" | "ai"

    // 比賽進行中狀態
    isPlaying: false,
    roundLocked: false,
    ropePosition: 0, // 負數偏左隊(-winSteps 左贏)，正數偏右隊(+winSteps 右贏)
    leftScore: 0,
    rightScore: 0,
    leftWordsWon: [],
    rightWordsWon: [],
    questionCount: 0,
    currentWord: null,
    currentPool: [],
    questionDeck: [],
    leftOptions: [],
    rightOptions: [],

    remainingTotalTime: 60,
    remainingQuestionTime: 12,
    totalTimerId: null,
    questionTimerId: null,
    aiTimerId: null,
    bannerTimeoutId: null
  };

  // -------------------- 柔和音效合成器 (Web Audio API) --------------------
  let audioCtx = null;
  function getAudioCtx() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playSoftTone(type) {
    try {
      const ctx = getAudioCtx();
      if (!ctx) return;
      const now = ctx.currentTime;

      if (type === "correct") {
        // 柔和雙音上揚 (C5 -> E5)
        [523.25, 659.25].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + idx * 0.09);
          gain.gain.setValueAtTime(0.12, now + idx * 0.09);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.25);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.09);
          osc.stop(now + idx * 0.09 + 0.26);
        });
      } else if (type === "wrong") {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(180, now + 0.22);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } else if (type === "win") {
        // 柔和勝利琶音 (C5 - E5 - G5 - C6)
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = "sine";
          osc.frequency.setValueAtTime(freq, now + idx * 0.11);
          gain.gain.setValueAtTime(0.14, now + idx * 0.11);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.11 + 0.45);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.11);
          osc.stop(now + idx * 0.11 + 0.46);
        });
      }
    } catch (e) {
      // 忽略音效權限錯誤
    }
  }

  // -------------------- DOM 元素參照 --------------------
  const els = {
    setupScreen: document.getElementById("setupScreen"),
    gameScreen: document.getElementById("gameScreen"),
    btnBackToSetup: document.getElementById("btnBackToSetup"),
    gradeSelector: document.getElementById("gradeSelector"),
    semesterSelector: document.getElementById("semesterSelector"),
    bookTitleBanner: document.getElementById("bookTitleBanner"),
    scopeModeSelector: document.getElementById("scopeModeSelector"),
    lessonListHint: document.getElementById("lessonListHint"),
    lessonQuickBtns: document.getElementById("lessonQuickBtns"),
    btnSelectAllLessons: document.getElementById("btnSelectAllLessons"),
    lessonCheckboxes: document.getElementById("lessonCheckboxes"),
    optionDisplaySelector: document.getElementById("optionDisplaySelector"),
    totalTimeSelect: document.getElementById("totalTimeSelect"),
    questionTimeSelect: document.getElementById("questionTimeSelect"),
    winStepsSelect: document.getElementById("winStepsSelect"),
    versusModeSelect: document.getElementById("versusModeSelect"),
    teamLeftNameInput: document.getElementById("teamLeftNameInput"),
    teamRightNameInput: document.getElementById("teamRightNameInput"),
    btnStartGame: document.getElementById("btnStartGame"),

    // 遊戲舞台
    currentScopeBadge: document.getElementById("currentScopeBadge"),
    questionCounterBadge: document.getElementById("questionCounterBadge"),
    totalTimerPill: document.getElementById("totalTimerPill"),
    totalTimeDisplay: document.getElementById("totalTimeDisplay"),
    questionTimerPill: document.getElementById("questionTimerPill"),
    questionTimeDisplay: document.getElementById("questionTimeDisplay"),
    btnSpeakPrompt: document.getElementById("btnSpeakPrompt"),
    btnNextSkip: document.getElementById("btnNextSkip"),
    btnEndEarly: document.getElementById("btnEndEarly"),

    leftRomanBanner: document.getElementById("leftRomanBanner"),
    leftRomanMain: document.getElementById("leftRomanMain"),
    leftRomanSub: document.getElementById("leftRomanSub"),
    rightRomanBanner: document.getElementById("rightRomanBanner"),
    rightRomanMain: document.getElementById("rightRomanMain"),
    rightRomanSub: document.getElementById("rightRomanSub"),

    leftTeamTitle: document.getElementById("leftTeamTitle"),
    rightTeamTitle: document.getElementById("rightTeamTitle"),
    leftTeamTailoStatus: document.getElementById("leftTeamTailoStatus"),
    rightTeamTailoStatus: document.getElementById("rightTeamTailoStatus"),
    leftScoreNum: document.getElementById("leftScoreNum"),
    rightScoreNum: document.getElementById("rightScoreNum"),
    ropeStepStatus: document.getElementById("ropeStepStatus"),
    tugTicks: document.getElementById("tugTicks"),
    ropeAssembly: document.getElementById("ropeAssembly"),

    promptLessonTag: document.getElementById("promptLessonTag"),
    promptInstruction: document.getElementById("promptInstruction"),
    promptMainText: document.getElementById("promptMainText"),
    promptSubText: document.getElementById("promptSubText"),
    roundFeedbackBar: document.getElementById("roundFeedbackBar"),

    leftPanelHeaderName: document.getElementById("leftPanelHeaderName"),
    rightPanelHeaderName: document.getElementById("rightPanelHeaderName"),
    rightKeyHint: document.getElementById("rightKeyHint"),
    leftVictoryOverlay: document.getElementById("leftVictoryOverlay"),
    rightVictoryOverlay: document.getElementById("rightVictoryOverlay"),
    leftOptionsGrid: document.getElementById("leftOptionsGrid"),
    rightOptionsGrid: document.getElementById("rightOptionsGrid"),

    // 結算視窗
    resultModal: document.getElementById("resultModal"),
    resultReasonBadge: document.getElementById("resultReasonBadge"),
    resultHeadline: document.getElementById("resultHeadline"),
    resultLeftCard: document.getElementById("resultLeftCard"),
    resultRightCard: document.getElementById("resultRightCard"),
    resultLeftTeamName: document.getElementById("resultLeftTeamName"),
    resultRightTeamName: document.getElementById("resultRightTeamName"),
    resultLeftOutcomeTag: document.getElementById("resultLeftOutcomeTag"),
    resultRightOutcomeTag: document.getElementById("resultRightOutcomeTag"),
    resultLeftRomanPhrase: document.getElementById("resultLeftRomanPhrase"),
    resultLeftHanziPhrase: document.getElementById("resultLeftHanziPhrase"),
    resultRightRomanPhrase: document.getElementById("resultRightRomanPhrase"),
    resultRightHanziPhrase: document.getElementById("resultRightHanziPhrase"),
    resultLeftScore: document.getElementById("resultLeftScore"),
    resultRightScore: document.getElementById("resultRightScore"),
    resultLeftWordsList: document.getElementById("resultLeftWordsList"),
    resultRightWordsList: document.getElementById("resultRightWordsList"),
    btnPlayAgain: document.getElementById("btnPlayAgain"),
    btnResultToSetup: document.getElementById("btnResultToSetup"),

    // 語詞管理視窗
    btnOpenCustomModal: document.getElementById("btnOpenCustomModal"),
    customVocabModal: document.getElementById("customVocabModal"),
    btnCloseVocabModal: document.getElementById("btnCloseVocabModal"),
    customLessonSelect: document.getElementById("customLessonSelect"),
    customHanziInput: document.getElementById("customHanziInput"),
    customTailoInput: document.getElementById("customTailoInput"),
    customMeaningInput: document.getElementById("customMeaningInput"),
    btnAddCustomWord: document.getElementById("btnAddCustomWord"),
    vocabTableContainer: document.getElementById("vocabTableContainer")
  };

  // -------------------- 輔助函式 --------------------
  function getBookKey() {
    return `${state.grade}-${state.semester}`;
  }

  function getCurrentBook() {
    return JENPIN_DATA[getBookKey()] || JENPIN_DATA["1-1"];
  }

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function formatSeconds(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  // -------------------- 設定頁面渲染 --------------------
  function renderBookAndLessons() {
    const book = getCurrentBook();
    els.bookTitleBanner.innerHTML = `目前冊別：<strong>${book.title}</strong>（共 ${book.lessons.length} 課）`;

    if (state.scopeMode === "all") {
      state.selectedLessonIds = new Set(book.lessons.map((l) => l.id));
      els.lessonQuickBtns.classList.add("hidden");
    } else {
      els.lessonQuickBtns.classList.remove("hidden");
      if (state.selectedLessonIds.size === 0) {
        state.selectedLessonIds.add(book.lessons[0].id);
      }
    }

    els.lessonCheckboxes.innerHTML = "";
    let totalWordsCount = 0;

    book.lessons.forEach((lesson) => {
      const isSelected = state.selectedLessonIds.has(lesson.id);
      if (isSelected) {
        totalWordsCount += lesson.words.length;
      }

      const item = document.createElement("div");
      item.className = `lesson-item ${isSelected ? "selected" : ""}`;
      const sampleWords = lesson.words
        .slice(0, 3)
        .map((w) => `${w.hanzi}(${w.tailo})`)
        .join("、");

      item.innerHTML = `
        <div class="lesson-item-left">
          <input type="checkbox" ${isSelected ? "checked" : ""} ${
        state.scopeMode === "all" ? "disabled" : ""
      } />
          <span>${lesson.name}</span>
        </div>
        <div class="lesson-item-words-preview">
          ${sampleWords}…（${lesson.words.length} 詞）
        </div>
      `;

      item.addEventListener("click", () => {
        if (state.scopeMode === "all") {
          // 若點選單課，自動切換為「分課練習」並只選該課
          state.scopeMode = "lesson";
          updateScopeTabUI();
          state.selectedLessonIds = new Set([lesson.id]);
          renderBookAndLessons();
          return;
        }
        if (state.selectedLessonIds.has(lesson.id)) {
          if (state.selectedLessonIds.size > 1) {
            state.selectedLessonIds.delete(lesson.id);
          }
        } else {
          state.selectedLessonIds.add(lesson.id);
        }
        renderBookAndLessons();
      });

      els.lessonCheckboxes.appendChild(item);
    });

    const modeLabel = state.scopeMode === "all" ? "全本書綜合練習" : "分課練習";
    els.lessonListHint.textContent = `${modeLabel}：已選 ${state.selectedLessonIds.size} 課（共 ${totalWordsCount} 個語詞）`;
  }

  function updateScopeTabUI() {
    els.scopeModeSelector.querySelectorAll(".scope-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.scope === state.scopeMode);
    });
  }

  // -------------------- 拔河刻度與繩索更新 --------------------
  function renderTugTicks() {
    els.tugTicks.innerHTML = "";
    const totalTicks = state.winSteps * 2 + 1;
    for (let i = 0; i < totalTicks; i++) {
      const tick = document.createElement("div");
      tick.className =
        i === state.winSteps ? "tug-tick center-tick" : "tug-tick";
      els.tugTicks.appendChild(tick);
    }
  }

  function updateRopeVisual() {
    // 每個格數移動百分比 (最多左右偏移 36%)
    const maxShiftPercent = 36;
    const stepShift = maxShiftPercent / state.winSteps;
    const currentShift = state.ropePosition * stepShift;
    els.ropeAssembly.style.transform = `translateX(${currentShift}%)`;

    const leftName = els.teamLeftNameInput.value.trim() || "左隊";
    const rightName = els.teamRightNameInput.value.trim() || "右隊";

    if (state.ropePosition === 0) {
      els.ropeStepStatus.textContent = "目前平手 Pînn-tshiú (0)";
      els.leftTeamTailoStatus.textContent = "Pînn-tshiú! (平手拍拚！)";
      els.rightTeamTailoStatus.textContent = "Pînn-tshiú! (平手拍拚！)";
    } else if (state.ropePosition < 0) {
      const stepsLeft = Math.abs(state.ropePosition);
      els.ropeStepStatus.textContent = `🌸 ${leftName} 領先 ${stepsLeft} 格 (Iânn ${stepsLeft} keh!)`;
      els.leftTeamTailoStatus.textContent = `Iânn緊領先！Tshut-la̍t! (+${stepsLeft})`;
      els.rightTeamTailoStatus.textContent = "Koh-tsài ka-iû! (閣再加油！)";
    } else {
      const stepsRight = state.ropePosition;
      els.ropeStepStatus.textContent = `🌿 ${rightName} 領先 ${stepsRight} 格 (Iânn ${stepsRight} keh!)`;
      els.rightTeamTailoStatus.textContent = `Iânn緊領先！Tshut-la̍t! (+${stepsRight})`;
      els.leftTeamTailoStatus.textContent = "Koh-tsài ka-iû! (閣再加油！)";
    }

    els.leftScoreNum.textContent = state.leftScore;
    els.rightScoreNum.textContent = state.rightScore;
  }

  // 在贏的那方顯示台語羅馬字歡呼橫幅！
  function showWinningSideRomanization(side, wordObj) {
    if (state.bannerTimeoutId) {
      clearTimeout(state.bannerTimeoutId);
    }

    const phrase =
      VICTORY_PHRASES[Math.floor(Math.random() * VICTORY_PHRASES.length)];

    els.leftRomanBanner.classList.add("hidden");
    els.rightRomanBanner.classList.add("hidden");
    els.leftVictoryOverlay.classList.add("hidden");
    els.rightVictoryOverlay.classList.add("hidden");

    if (side === "left") {
      els.leftRomanMain.textContent = `🏆 ${phrase.tailo} 【${wordObj.tailo}】`;
      els.leftRomanSub.textContent = `${phrase.hanzi}（${wordObj.hanzi}：${wordObj.meaning}）`;
      els.leftRomanBanner.classList.remove("hidden");

      els.leftVictoryOverlay.innerHTML = `🎉 <strong>${phrase.tailo}</strong> — 搶答成功：<strong>${wordObj.tailo}</strong>（${wordObj.hanzi}）`;
      els.leftVictoryOverlay.classList.remove("hidden");
    } else {
      els.rightRomanMain.textContent = `🏆 ${phrase.tailo} 【${wordObj.tailo}】`;
      els.rightRomanSub.textContent = `${phrase.hanzi}（${wordObj.hanzi}：${wordObj.meaning}）`;
      els.rightRomanBanner.classList.remove("hidden");

      els.rightVictoryOverlay.innerHTML = `🎉 <strong>${phrase.tailo}</strong> — 搶答成功：<strong>${wordObj.tailo}</strong>（${wordObj.hanzi}）`;
      els.rightVictoryOverlay.classList.remove("hidden");
    }

    state.bannerTimeoutId = setTimeout(() => {
      els.leftRomanBanner.classList.add("hidden");
      els.rightRomanBanner.classList.add("hidden");
      els.leftVictoryOverlay.classList.add("hidden");
      els.rightVictoryOverlay.classList.add("hidden");
    }, 2200);
  }

  // -------------------- 建立題庫與出題邏輯 --------------------
  function buildQuestionPool() {
    const book = getCurrentBook();
    const pool = [];
    book.lessons.forEach((lesson) => {
      if (state.scopeMode === "all" || state.selectedLessonIds.has(lesson.id)) {
        lesson.words.forEach((w) => {
          pool.push({
            hanzi: w.hanzi,
            tailo: w.tailo,
            meaning: w.meaning,
            lessonName: lesson.name
          });
        });
      }
    });
    return pool;
  }

  function startMatch() {
    state.currentPool = buildQuestionPool();
    if (state.currentPool.length < 4) {
      alert("所選範圍語詞少於 4 個，請至少選擇一課完整語詞！");
      return;
    }

    // 讀取設定
    const checkedRadio = els.optionDisplaySelector.querySelector(
      'input[name="optionMode"]:checked'
    );
    state.optionMode = checkedRadio ? checkedRadio.value : "both";
    state.totalTimeLimit = parseInt(els.totalTimeSelect.value, 10);
    state.questionTimeLimit = parseInt(els.questionTimeSelect.value, 10);
    state.winSteps = parseInt(els.winStepsSelect.value, 10);
    state.versusMode = els.versusModeSelect.value;

    // 重置比賽狀態
    state.isPlaying = true;
    state.roundLocked = false;
    state.ropePosition = 0;
    state.leftScore = 0;
    state.rightScore = 0;
    state.leftWordsWon = [];
    state.rightWordsWon = [];
    state.questionCount = 0;
    state.currentWord = null;
    state.questionDeck = shuffleArray(state.currentPool);
    state.remainingTotalTime = state.totalTimeLimit;

    // 更新畫面名稱與標籤
    const book = getCurrentBook();
    const scopeText =
      state.scopeMode === "all"
        ? "全本書練習"
        : `分課練習（${state.selectedLessonIds.size} 課）`;
    els.currentScopeBadge.textContent = `${book.title}・${scopeText}`;

    const leftName = els.teamLeftNameInput.value.trim() || "春風隊 Chhun-hong";
    const rightName =
      state.versusMode === "ai"
        ? "電腦隊伍 Tiān-náu"
        : els.teamRightNameInput.value.trim() || "暖陽隊 Luán-iông";

    els.leftTeamTitle.textContent = leftName;
    els.rightTeamTitle.textContent = rightName;
    els.leftPanelHeaderName.textContent = `🌸 ${leftName} 搶答區`;
    els.rightPanelHeaderName.textContent = `🌿 ${rightName} 搶答區`;
    els.rightKeyHint.textContent =
      state.versusMode === "ai"
        ? "電腦自動搶答中（亦可點擊協助）"
        : "觸控點擊 或 鍵盤 J / K / L / ;";

    // 切換畫面
    els.setupScreen.classList.add("hidden");
    els.resultModal.classList.add("hidden");
    els.gameScreen.classList.remove("hidden");
    els.btnBackToSetup.classList.remove("hidden");

    renderTugTicks();
    updateRopeVisual();
    startTotalTimer();
    nextQuestion();
  }

  function startTotalTimer() {
    clearInterval(state.totalTimerId);
    if (state.totalTimeLimit <= 0) {
      els.totalTimeDisplay.textContent = "不限時 ∞";
      return;
    }
    els.totalTimeDisplay.textContent = formatSeconds(state.remainingTotalTime);
    state.totalTimerId = setInterval(() => {
      if (!state.isPlaying) return;
      state.remainingTotalTime--;
      els.totalTimeDisplay.textContent = formatSeconds(
        Math.max(0, state.remainingTotalTime)
      );
      if (state.remainingTotalTime <= 0) {
        endMatch("time_up");
      }
    }, 1000);
  }

  function startQuestionTimer() {
    clearInterval(state.questionTimerId);
    if (state.questionTimeLimit <= 0) {
      els.questionTimeDisplay.textContent = "不限時";
      return;
    }
    state.remainingQuestionTime = state.questionTimeLimit;
    els.questionTimeDisplay.textContent = `${state.remainingQuestionTime}s`;

    state.questionTimerId = setInterval(() => {
      if (!state.isPlaying || state.roundLocked) return;
      state.remainingQuestionTime--;
      els.questionTimeDisplay.textContent = `${Math.max(
        0,
        state.remainingQuestionTime
      )}s`;

      if (state.remainingQuestionTime <= 0) {
        clearInterval(state.questionTimerId);
        handleQuestionTimeout();
      }
    }, 1000);
  }

  function handleQuestionTimeout() {
    state.roundLocked = true;
    els.roundFeedbackBar.className = "round-feedback-bar";
    els.roundFeedbackBar.textContent = `⌛ 本題時間到！正確答案：${state.currentWord.tailo}（${state.currentWord.hanzi}）`;
    els.roundFeedbackBar.classList.remove("hidden");

    setTimeout(() => {
      if (state.isPlaying) nextQuestion();
    }, 1300);
  }

  function nextQuestion() {
    if (!state.isPlaying) return;
    state.roundLocked = false;
    state.questionCount++;
    els.questionCounterBadge.textContent = `第 ${state.questionCount} 題`;
    els.roundFeedbackBar.classList.add("hidden");

    // 採用不重複洗牌題庫（Deck），確保整輪題目出完才會重新洗牌，且不連續重複
    if (state.questionDeck.length === 0) {
      let nextDeck = shuffleArray(state.currentPool);
      if (
        state.currentWord &&
        nextDeck.length > 1 &&
        nextDeck[0].hanzi === state.currentWord.hanzi &&
        nextDeck[0].tailo === state.currentWord.tailo
      ) {
        // 將第一題與最後一題交換，避免跨輪連續出現同一題
        [nextDeck[0], nextDeck[nextDeck.length - 1]] = [
          nextDeck[nextDeck.length - 1],
          nextDeck[0]
        ];
      }
      state.questionDeck = nextDeck;
    }

    const target = state.questionDeck.shift();
    const distractorCandidates = shuffleArray(
      state.currentPool.filter(
        (w) => w.hanzi !== target.hanzi && w.tailo !== target.tailo
      )
    );
    const distractors = distractorCandidates.slice(0, 3);
    state.currentWord = target;

    els.promptLessonTag.textContent = target.lessonName;

    // 根據選項顯示模式渲染題目與選項（確保包含羅馬字與漢字！）
    let baseOptions = [];

    if (state.optionMode === "both") {
      // 模式 1：每個選項同時顯示「臺羅羅馬字 + 台語漢字」
      els.promptInstruction.textContent =
        "請看【華語意思】搶答對應的【台語羅馬字 ＆ 漢字】：";
      els.promptMainText.textContent = `「${target.meaning}」`;
      els.promptSubText.textContent =
        "每個選項皆顯示【臺羅羅馬字】與【台語漢字】，最快按對的一方 giú 動大索！";

      baseOptions = [target, ...distractors].map((w) => ({
        isCorrect: w.hanzi === target.hanzi && w.tailo === target.tailo,
        badge: "羅馬字＋漢字",
        badgeClass: "pill-tailo",
        tailoText: w.tailo,
        hanziText: w.hanzi,
        subText: ""
      }));
    } else if (state.optionMode === "split_buttons") {
      // 模式 2：分別設有「羅馬字選項按鈕」與「漢字選項按鈕」
      els.promptInstruction.textContent =
        "請搶答對應的【羅馬字選項】或【漢字選項】（任選其一皆可得分！）：";
      els.promptMainText.textContent = `「${target.meaning}」`;
      els.promptSubText.textContent =
        "選項分別提供【臺羅羅馬字按鈕】與【漢字按鈕】，考驗雙向認讀反應！";

      const distractor1 = distractors[0] || target;
      const distractor2 = distractors[1] || distractors[0] || target;

      baseOptions = [
        {
          isCorrect: true,
          badge: "羅馬字選項",
          badgeClass: "pill-tailo",
          tailoText: target.tailo,
          hanziText: "",
          subText: "臺羅拼音"
        },
        {
          isCorrect: false,
          badge: "羅馬字選項",
          badgeClass: "pill-tailo",
          tailoText: distractor1.tailo,
          hanziText: "",
          subText: "臺羅拼音"
        },
        {
          isCorrect: true,
          badge: "漢字選項",
          badgeClass: "pill-hanzi",
          tailoText: "",
          hanziText: target.hanzi,
          subText: "台語漢字"
        },
        {
          isCorrect: false,
          badge: "漢字選項",
          badgeClass: "pill-hanzi",
          tailoText: "",
          hanziText: distractor2.hanzi,
          subText: "台語漢字"
        }
      ];
    } else if (state.optionMode === "hanzi_to_tailo") {
      // 模式 3：題目為「漢字」，選項搶答「羅馬字（附漢字提示）」
      els.promptInstruction.textContent =
        "請看【台語漢字】搶答正確的【臺羅羅馬字】：";
      els.promptMainText.textContent = `${target.hanzi}`;
      els.promptSubText.textContent = `華語意思：${target.meaning}`;

      baseOptions = [target, ...distractors].map((w) => ({
        isCorrect: w.tailo === target.tailo,
        badge: "羅馬字",
        badgeClass: "pill-tailo",
        tailoText: w.tailo,
        hanziText: "",
        subText: `漢字：${w.hanzi}`
      }));
    } else {
      // 模式 4：題目為「臺羅羅馬字」，選項搶答「台語漢字」
      els.promptInstruction.textContent =
        "請看【臺羅羅馬字】搶答正確的【台語漢字】：";
      els.promptMainText.textContent = `${target.tailo}`;
      els.promptSubText.textContent = `華語意思：${target.meaning}`;

      baseOptions = [target, ...distractors].map((w) => ({
        isCorrect: w.hanzi === target.hanzi,
        badge: "漢字",
        badgeClass: "pill-hanzi",
        tailoText: "",
        hanziText: w.hanzi,
        subText: `羅馬字：${w.tailo}`
      }));
    }

    // 左右兩隊各自隨機排列選項順序，避免死記位置
    state.leftOptions = shuffleArray(baseOptions);
    state.rightOptions = shuffleArray(baseOptions);

    renderPlayerOptions("left", state.leftOptions, ["A", "S", "D", "F"]);
    renderPlayerOptions("right", state.rightOptions, ["J", "K", "L", ";"]);

    startQuestionTimer();
    scheduleAIMove();
  }

  function renderPlayerOptions(side, options, keys) {
    const container =
      side === "left" ? els.leftOptionsGrid : els.rightOptionsGrid;
    container.innerHTML = "";

    options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.dataset.side = side;
      btn.dataset.index = idx;

      btn.innerHTML = `
        <span class="option-key-badge">${keys[idx]}</span>
        <span class="option-type-pill ${opt.badgeClass}">${opt.badge}</span>
        ${opt.tailoText ? `<div class="opt-tailo">${opt.tailoText}</div>` : ""}
        ${opt.hanziText ? `<div class="opt-hanzi">${opt.hanziText}</div>` : ""}
        ${opt.subText ? `<div class="opt-sub-hint">${opt.subText}</div>` : ""}
      `;

      btn.addEventListener("click", () => {
        handlePlayerAnswer(side, idx, btn);
      });

      container.appendChild(btn);
    });
  }

  function scheduleAIMove() {
    clearTimeout(state.aiTimerId);
    if (state.versusMode !== "ai" || !state.isPlaying) return;

    // 電腦在 2.8 ~ 5.2 秒間嘗試作答
    const delay = 2800 + Math.random() * 2400;
    state.aiTimerId = setTimeout(() => {
      if (!state.isPlaying || state.roundLocked) return;
      const correctIdx = state.rightOptions.findIndex((o) => o.isCorrect);
      const buttons = els.rightOptionsGrid.querySelectorAll(".option-btn");
      if (correctIdx !== -1 && buttons[correctIdx]) {
        handlePlayerAnswer("right", correctIdx, buttons[correctIdx]);
      }
    }, delay);
  }

  function handlePlayerAnswer(side, index, btnElement) {
    if (!state.isPlaying || state.roundLocked) return;
    if (btnElement.disabled) return;

    const options = side === "left" ? state.leftOptions : state.rightOptions;
    const chosen = options[index];
    if (!chosen) return;

    if (chosen.isCorrect) {
      // 搶答正確！鎖定本回合並拉動拔河繩
      state.roundLocked = true;
      clearInterval(state.questionTimerId);
      clearTimeout(state.aiTimerId);

      btnElement.classList.add("correct");
      playSoftTone("correct");

      const wordSnapshot = {
        hanzi: state.currentWord.hanzi,
        tailo: state.currentWord.tailo,
        meaning: state.currentWord.meaning
      };

      const leftName = els.leftTeamTitle.textContent;
      const rightName = els.rightTeamTitle.textContent;

      if (side === "left") {
        state.leftScore++;
        state.ropePosition--;
        state.leftWordsWon.push(wordSnapshot);
        els.roundFeedbackBar.className = "round-feedback-bar left-win";
        els.roundFeedbackBar.innerHTML = `🌸 <strong>${leftName}</strong> 搶答成功！贏方羅馬字：<strong>Iânn ah! 【${wordSnapshot.tailo}】(${wordSnapshot.hanzi})</strong>`;
      } else {
        state.rightScore++;
        state.ropePosition++;
        state.rightWordsWon.push(wordSnapshot);
        els.roundFeedbackBar.className = "round-feedback-bar right-win";
        els.roundFeedbackBar.innerHTML = `🌿 <strong>${rightName}</strong> 搶答成功！贏方羅馬字：<strong>Iânn ah! 【${wordSnapshot.tailo}】(${wordSnapshot.hanzi})</strong>`;
      }

      els.roundFeedbackBar.classList.remove("hidden");
      updateRopeVisual();

      // 在贏的那方大字顯示臺羅羅馬字歡呼！
      showWinningSideRomanization(side, wordSnapshot);

      // 檢查是否已經將拔河繩拉到底部獲勝
      if (Math.abs(state.ropePosition) >= state.winSteps) {
        setTimeout(() => {
          endMatch("rope_pulled");
        }, 950);
      } else {
        setTimeout(() => {
          if (state.isPlaying) nextQuestion();
        }, 1450);
      }
    } else {
      // 答錯：該按鈕標示錯誤並短暫禁用該隊按鈕 0.9 秒防亂猜
      btnElement.classList.add("wrong");
      btnElement.disabled = true;
      playSoftTone("wrong");

      const panelGrid =
        side === "left" ? els.leftOptionsGrid : els.rightOptionsGrid;
      const allSideBtns = panelGrid.querySelectorAll(".option-btn");
      allSideBtns.forEach((b) => (b.disabled = true));

      setTimeout(() => {
        if (!state.roundLocked) {
          allSideBtns.forEach((b) => {
            if (!b.classList.contains("wrong")) {
              b.disabled = false;
            }
          });
        }
      }, 900);
    }
  }

  // -------------------- 結束比賽與結算（贏的那方顯示羅馬字！） --------------------
  function endMatch(reason) {
    state.isPlaying = false;
    state.roundLocked = true;
    clearInterval(state.totalTimerId);
    clearInterval(state.questionTimerId);
    clearTimeout(state.aiTimerId);

    playSoftTone("win");

    const leftName = els.leftTeamTitle.textContent;
    const rightName = els.rightTeamTitle.textContent;

    let winner = "draw";
    if (state.ropePosition < 0 || state.leftScore > state.rightScore) {
      winner = "left";
    } else if (state.ropePosition > 0 || state.rightScore > state.leftScore) {
      winner = "right";
    }

    if (reason === "rope_pulled") {
      els.resultReasonBadge.textContent = "🪢 大索 giú 到底！完勝過關 (Giú-tuā-soh Iânn!)";
    } else if (reason === "time_up") {
      els.resultReasonBadge.textContent = "⏱️ 比賽時間到！勝負揭曉 (Sî-kan kàu!)";
    } else {
      els.resultReasonBadge.textContent = "🏁 比賽提前結算";
    }

    const winPhrase = VICTORY_PHRASES[0];
    els.resultLeftCard.classList.remove("winner-card");
    els.resultRightCard.classList.remove("winner-card");

    els.resultLeftTeamName.textContent = `🌸 ${leftName}`;
    els.resultRightTeamName.textContent = `🌿 ${rightName}`;
    els.resultLeftScore.textContent = state.leftScore;
    els.resultRightScore.textContent = state.rightScore;

    if (winner === "left") {
      els.resultHeadline.textContent = `🎉 恭喜 ${leftName} giú大索獲勝！(Iânn ah!)`;
      els.resultLeftCard.classList.add("winner-card");
      els.resultLeftOutcomeTag.textContent = "🏆 獲勝贏方 (IÂNN-hong)";
      // 贏的那方醒目顯示臺羅羅馬字！
      els.resultLeftRomanPhrase.textContent = `🏆 ${winPhrase.tailo} Tē-it-miâ!`;
      els.resultLeftHanziPhrase.textContent = `${winPhrase.hanzi} 第一名！（贏在左方！）`;

      els.resultRightOutcomeTag.textContent = "💪 再接再厲";
      els.resultRightRomanPhrase.textContent = ENCOURAGE_PHRASES.tailo;
      els.resultRightHanziPhrase.textContent = ENCOURAGE_PHRASES.hanzi;

      // 同時在主舞台左方保留勝利羅馬字橫幅
      els.leftRomanMain.textContent = `🏆 Iânn ah! Tē-it-miâ! (贏矣！第一名！)`;
      els.leftRomanSub.textContent = `${leftName} 獲勝！Kiong-hí tit-tsióng!`;
      els.leftRomanBanner.classList.remove("hidden");
      els.rightRomanBanner.classList.add("hidden");
    } else if (winner === "right") {
      els.resultHeadline.textContent = `🎉 恭喜 ${rightName} giú大索獲勝！(Iânn ah!)`;
      els.resultRightCard.classList.add("winner-card");
      els.resultRightOutcomeTag.textContent = "🏆 獲勝贏方 (IÂNN-hong)";
      // 贏的那方醒目顯示臺羅羅馬字！
      els.resultRightRomanPhrase.textContent = `🏆 ${winPhrase.tailo} Tē-it-miâ!`;
      els.resultRightHanziPhrase.textContent = `${winPhrase.hanzi} 第一名！（贏在右方！）`;

      els.resultLeftOutcomeTag.textContent = "💪 再接再厲";
      els.resultLeftRomanPhrase.textContent = ENCOURAGE_PHRASES.tailo;
      els.resultLeftHanziPhrase.textContent = ENCOURAGE_PHRASES.hanzi;

      // 同時在主舞台右方保留勝利羅馬字橫幅
      els.rightRomanMain.textContent = `🏆 Iânn ah! Tē-it-miâ! (贏矣！第一名！)`;
      els.rightRomanSub.textContent = `${rightName} 獲勝！Kiong-hí tit-tsióng!`;
      els.rightRomanBanner.classList.remove("hidden");
      els.leftRomanBanner.classList.add("hidden");
    } else {
      els.resultHeadline.textContent = "🤝 雙方平手！勢均力敵 (Pînn-tshiú!)";
      els.resultLeftCard.classList.add("winner-card");
      els.resultRightCard.classList.add("winner-card");
      els.resultLeftOutcomeTag.textContent = "🤝 平手雙贏";
      els.resultRightOutcomeTag.textContent = "🤝 平手雙贏";
      els.resultLeftRomanPhrase.textContent = "Pînn-tshiú! Tsin gâu!";
      els.resultLeftHanziPhrase.textContent = "平手！攏真𠢕！";
      els.resultRightRomanPhrase.textContent = "Pînn-tshiú! Tsin gâu!";
      els.resultRightHanziPhrase.textContent = "平手！攏真𠢕！";
    }

    renderWonWordsList(els.resultLeftWordsList, state.leftWordsWon);
    renderWonWordsList(els.resultRightWordsList, state.rightWordsWon);

    els.resultModal.classList.remove("hidden");
  }

  function renderWonWordsList(container, words) {
    container.innerHTML = "";
    if (words.length === 0) {
      container.innerHTML = `<span class="opt-sub-hint">本場尚無搶答紀錄</span>`;
      return;
    }
    words.forEach((w) => {
      const chip = document.createElement("span");
      chip.className = "won-word-chip";
      chip.innerHTML = `<strong>${w.tailo}</strong> ${w.hanzi}`;
      container.appendChild(chip);
    });
  }

  // -------------------- 語音提示 --------------------
  function speakCurrentWord() {
    if (!state.currentWord || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(
      `${state.currentWord.hanzi}，意思：${state.currentWord.meaning}`
    );
    utter.lang = "zh-TW";
    utter.rate = 0.92;
    window.speechSynthesis.speak(utter);
  }

  // -------------------- 語詞庫檢視與自訂新增 --------------------
  function renderCustomVocabModal() {
    const book = getCurrentBook();
    els.customLessonSelect.innerHTML = "";
    book.lessons.forEach((l) => {
      const opt = document.createElement("option");
      opt.value = l.id;
      opt.textContent = l.name;
      els.customLessonSelect.appendChild(opt);
    });

    els.vocabTableContainer.innerHTML = "";
    book.lessons.forEach((lesson) => {
      const block = document.createElement("div");
      block.className = "vocab-lesson-block";
      const cardsHtml = lesson.words
        .map(
          (w) => `
          <div class="vocab-card-item">
            <div>
              <div class="v-tailo">${w.tailo}</div>
              <div class="v-hanzi">${w.hanzi}</div>
            </div>
            <div class="v-meaning">${w.meaning}</div>
          </div>
        `
        )
        .join("");

      block.innerHTML = `
        <h4>${lesson.name}（${lesson.words.length} 詞）</h4>
        <div class="vocab-chips-grid">${cardsHtml}</div>
      `;
      els.vocabTableContainer.appendChild(block);
    });
  }

  // -------------------- 事件綁定 --------------------
  function bindEvents() {
    // 年級切換
    els.gradeSelector.querySelectorAll(".pill-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        els.gradeSelector
          .querySelectorAll(".pill-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.grade = parseInt(btn.dataset.grade, 10);
        renderBookAndLessons();
      });
    });

    // 學期切換
    els.semesterSelector.querySelectorAll(".pill-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        els.semesterSelector
          .querySelectorAll(".pill-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        state.semester = parseInt(btn.dataset.sem, 10);
        renderBookAndLessons();
      });
    });

    // 全本書 vs 分課練習切換
    els.scopeModeSelector.querySelectorAll(".scope-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.scopeMode = btn.dataset.scope;
        updateScopeTabUI();
        const book = getCurrentBook();
        if (state.scopeMode === "all") {
          state.selectedLessonIds = new Set(book.lessons.map((l) => l.id));
        } else {
          state.selectedLessonIds = new Set([book.lessons[0].id]);
        }
        renderBookAndLessons();
      });
    });

    els.btnSelectAllLessons.addEventListener("click", () => {
      const book = getCurrentBook();
      state.selectedLessonIds = new Set(book.lessons.map((l) => l.id));
      renderBookAndLessons();
    });

    // 選項顯示模式單選樣式
    els.optionDisplaySelector
      .querySelectorAll(".radio-card")
      .forEach((card) => {
        card.addEventListener("click", () => {
          els.optionDisplaySelector
            .querySelectorAll(".radio-card")
            .forEach((c) => c.classList.remove("active"));
          card.classList.add("active");
          const input = card.querySelector('input[type="radio"]');
          if (input) input.checked = true;
        });
      });

    // 開始比賽
    els.btnStartGame.addEventListener("click", startMatch);

    // 返回設定
    function backToSetup() {
      state.isPlaying = false;
      clearInterval(state.totalTimerId);
      clearInterval(state.questionTimerId);
      clearTimeout(state.aiTimerId);
      els.resultModal.classList.add("hidden");
      els.gameScreen.classList.add("hidden");
      els.btnBackToSetup.classList.add("hidden");
      els.setupScreen.classList.remove("hidden");
    }

    els.btnBackToSetup.addEventListener("click", backToSetup);
    els.btnResultToSetup.addEventListener("click", backToSetup);
    els.btnPlayAgain.addEventListener("click", startMatch);

    els.btnSpeakPrompt.addEventListener("click", speakCurrentWord);
    els.btnNextSkip.addEventListener("click", () => {
      if (state.isPlaying) nextQuestion();
    });
    els.btnEndEarly.addEventListener("click", () => {
      if (state.isPlaying) endMatch("early");
    });

    // 鍵盤快捷鍵支援 (左隊 A/S/D/F，右隊 J/K/L/;)
    window.addEventListener("keydown", (e) => {
      if (!state.isPlaying || state.roundLocked) return;
      if (
        document.activeElement &&
        ["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)
      ) {
        return;
      }

      const key = e.key.toUpperCase();
      const leftMap = { A: 0, S: 1, D: 2, F: 3 };
      const rightMap = { J: 0, K: 1, L: 2, ";": 3, ":": 3 };

      if (key in leftMap) {
        const idx = leftMap[key];
        const btns = els.leftOptionsGrid.querySelectorAll(".option-btn");
        if (btns[idx]) handlePlayerAnswer("left", idx, btns[idx]);
      } else if (key in rightMap) {
        const idx = rightMap[key];
        const btns = els.rightOptionsGrid.querySelectorAll(".option-btn");
        if (btns[idx]) handlePlayerAnswer("right", idx, btns[idx]);
      }
    });

    // 語詞庫檢視與新增
    els.btnOpenCustomModal.addEventListener("click", () => {
      renderCustomVocabModal();
      els.customVocabModal.classList.remove("hidden");
    });

    els.btnCloseVocabModal.addEventListener("click", () => {
      els.customVocabModal.classList.add("hidden");
    });

    els.btnAddCustomWord.addEventListener("click", () => {
      const lessonId = els.customLessonSelect.value;
      const hanzi = els.customHanziInput.value.trim();
      const tailo = els.customTailoInput.value.trim();
      const meaning = els.customMeaningInput.value.trim();

      if (!hanzi || !tailo || !meaning) {
        alert("請完整填寫「台語漢字」、「臺羅拼音」與「華語意思」！");
        return;
      }

      const book = getCurrentBook();
      const lesson = book.lessons.find((l) => l.id === lessonId);
      if (lesson) {
        lesson.words.push({ hanzi, tailo, meaning });
        els.customHanziInput.value = "";
        els.customTailoInput.value = "";
        els.customMeaningInput.value = "";
        renderCustomVocabModal();
        renderBookAndLessons();
      }
    });
  }

  // -------------------- 初始化啟動 --------------------
  renderBookAndLessons();
  bindEvents();
})();
