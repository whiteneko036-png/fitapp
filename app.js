/* =========================================================
   ТРЕНАЖЁР — логика приложения (полная версия)
   ========================================================= */

/* ---------- БАЗА УПРАЖНЕНИЙ (MET = расход энергии) ---------- */
const EXERCISES = {
  glutes: [
    {name:"Ягодичный мост", emoji:"🍑", reps:15, met:3.5, target:"Ягодицы",
     desc:"Лягте на спину, ноги согнуты. Поднимайте таз вверх, сжимая ягодицы в верхней точке. Задержитесь на 2 секунды."},
    {name:"Приседания", emoji:"🦵", reps:15, met:5.0, target:"Ягодицы, ноги",
     desc:"Ноги на ширине плеч. Опускайтесь до параллели бёдер с полом, колени не выходят за носки. Пятки прижаты."},
    {name:"Выпады назад", emoji:"🚶", reps:12, met:4.5, target:"Ягодицы",
     desc:"Из положения стоя отставьте ногу назад и опуститесь в выпад. Корпус держите вертикально."},
    {name:"Махи ногой в сторону", emoji:"🦵", reps:15, met:3.5, target:"Средняя ягодичная",
     desc:"Стоя на четвереньках, поднимайте согнутую ногу в сторону до уровня бедра. Медленно."},
    {name:"Ягодичный мост на одной ноге", emoji:"🍑", reps:10, met:4.0, target:"Ягодицы",
     desc:"Как обычный мост, но одна нога поднята. Половина подходов на каждой ноге."},
    {name:"Отведение ноги с резинкой", emoji:"🎗️", reps:20, met:3.5, target:"Ягодицы",
     desc:"Резинка над коленями, полуприсед. Разводите колени в стороны, удерживая напряжение."}
  ],
  abs: [
    {name:"Планка", emoji:"🧘", timer:40, met:3.5, target:"Пресс, кор",
     desc:"Упор на предплечья и носки. Тело — прямая линия. Не поднимайте и не опускайте таз. Дышите ровно."},
    {name:"Скручивания", emoji:"🔸", reps:20, met:3.8, target:"Верхний пресс",
     desc:"Лёжа на спине, руки за головой. Отрывайте лопатки от пола, поясница прижата. Не тяните шею руками."},
    {name:"Велосипед", emoji:"🚴", reps:20, met:4.5, target:"Пресс, косые",
     desc:"Лёжа, руки за головой. Локтем к противоположному колену. Работайте медленно и контролированно."},
    {name:"Подъём ног лёжа", emoji:"🦵", reps:15, met:3.8, target:"Нижний пресс",
     desc:"Лёжа на спине, руки вдоль тела. Поднимайте прямые ноги до 90°, опускайте медленно, не касаясь пола."},
    {name:"Русский твист", emoji:"🔄", reps:20, met:4.0, target:"Косые мышцы",
     desc:"Сидя с наклоном назад, ноги согнуты. Поворачивайте корпус влево-вправо. Можно с весом."},
    {name:"Боковая планка", emoji:"🧘", timer:30, met:3.5, target:"Косые мышцы",
     desc:"Упор на бок на предплечье. Таз не провисает. Держите по 30 секунд на каждую сторону."}
  ],
  legs: [
    {name:"Приседания", emoji:"🦵", reps:15, met:5.0, target:"Квадрицепс, ягодицы",
     desc:"Спина прямая, колени направлены в сторону носков. Опускайтесь до параллели."},
    {name:"Выпады", emoji:"🚶", reps:12, met:4.5, target:"Ноги, ягодицы",
     desc:"Шаг вперёд и опустите колено почти до пола. Колено передней ноги над стопой."},
    {name:"Зашагивания на платформу", emoji:"🪜", reps:12, met:5.0, target:"Ноги, ягодицы",
     desc:"Поставьте ногу на устойчивую опору. Поднимитесь усилием ноги на опоре, опуститесь контролированно."},
    {name:"Приседания с паузой", emoji:"⏸️", reps:12, met:5.0, target:"Ноги",
     desc:"В нижней точке приседа задержитесь на 3 секунды. Увеличивает нагрузку без инвентаря."},
    {name:"Подъём на носки", emoji:"🦶", reps:20, met:3.5, target:"Икры",
     desc:"Поднимайтесь на носки максимально высоко, задержитесь на секунду, медленно опуститесь."}
  ],
  back: [
    {name:"Супермен", emoji:"🦸", reps:15, met:3.5, target:"Разгибатели спины",
     desc:"Лёжа на животе, одновременно поднимайте руки и ноги. Задержитесь на 2 секунды вверху."},
    {name:"Лодочка", emoji:"⛵", timer:30, met:3.5, target:"Спина, кор",
     desc:"Лёжа на животе поднимите руки, ноги и грудь. Удерживайте положение."},
    {name:"Обратные снежные ангелы", emoji:"👼", reps:15, met:3.5, target:"Верх спины",
     desc:"Лёжа на животе, руки в стороны. Сводите лопатки и делайте движения руками вверх-вниз."},
    {name:"Подтягивания / тяга", emoji:"🔙", reps:10, met:6.0, target:"Широчайшие",
     desc:"Если есть турник — подтягивания. Без него используйте тягу резинки к поясу."}
  ],
  chest: [
    {name:"Отжимания", emoji:"💪", reps:12, met:8.0, target:"Грудь, трицепс",
     desc:"Руки шире плеч. Опускайтесь до касания грудью пола. Колени можно поставить на пол."},
    {name:"Отжимания с узкой постановкой", emoji:"🦾", reps:10, met:8.0, target:"Трицепс, грудь",
     desc:"Ладони под плечами, локти прижаты к телу. Опускайтесь медленно."},
    {name:"Разведение рук с резинкой", emoji:"🎗️", reps:15, met:3.5, target:"Грудные",
     desc:"Резинку за спину, руки в стороны. Сводите руки перед грудью, чувствуя напряжение в груди."}
  ],
  arms: [
    {name:"Отжимания на трицепс", emoji:"🦾", reps:12, met:6.0, target:"Трицепс",
     desc:"Сидя на стуле, руки сзади на опоре. Опускайтесь и поднимайтесь усилием рук."},
    {name:"Сгибания с резинкой", emoji:"💪", reps:15, met:3.5, target:"Бицепс",
     desc:"Встаньте на резинку, тяните ручки вверх, сгибая руки. Локти прижаты к корпусу."},
    {name:"Обратные отжимания от пола", emoji:"🖐️", reps:12, met:6.0, target:"Трицепс",
     desc:"Пальцы направлены назад. Отжимайтесь в таком положении, нагрузка пойдёт в трицепс."}
  ],
  shoulders: [
    {name:"Разведение рук в стороны", emoji:"🎯", reps:15, met:3.5, target:"Средние дельты",
     desc:"Поднимайте руки в стороны до уровня плеч с резинкой или без. Плечи не поднимайте вверх."},
    {name:"Жим над головой", emoji:"⬆️", reps:12, met:5.0, target:"Плечи",
     desc:"Руки с резинкой или весом поднимайте над головой, полностью выпрямляя руки."},
    {name:"Разведение с наклоном", emoji:"⬇️", reps:15, met:3.5, target:"Задние дельты",
     desc:"Наклон вперёд, руки в стороны и вверх. Сводите лопатки."}
  ],
  fullbody: [
    {name:"Бёрпи", emoji:"🔥", reps:10, met:9.0, target:"Всё тело",
     desc:"Из стоя присесть, прыжком в упор лёжа, отжимание, прыжок обратно, выпрыгнуть вверх."},
    {name:"Приседания с прыжком", emoji:"⚡", reps:12, met:8.0, target:"Ноги, ягодицы",
     desc:"Присели — выпрыгнули вверх. Приземляйтесь мягко на согнутые ноги."},
    {name:"Скалолаз", emoji:"🧗", reps:20, met:8.0, target:"Кор, всё тело",
     desc:"В упоре лёжа поочерёдно подтягивайте колени к груди в быстром темпе."},
    {name:"Выпады с прыжком", emoji:"🏃", reps:14, met:8.0, target:"Ноги",
     desc:"Из выпада выпрыгните вверх, меняя ноги в воздухе. Мягкое приземление."},
    {name:"Планка + скручивания", emoji:"🧘", reps:15, met:4.5, target:"Кор",
     desc:"Из планки поворачивайте корпус в сторону, поднимая руку вверх."}
  ]
};

const GOAL_LABELS = {
  glutes:"Ягодицы", abs:"Плоский живот", legs:"Ноги", back:"Спина",
  chest:"Грудь", arms:"Руки", shoulders:"Плечи", fullbody:"Всё тело"
};
const GOAL_ICONS = {
  glutes:"🍑", abs:"🔸", legs:"🦵", back:"🔙",
  chest:"💪", arms:"🦾", shoulders:"🎯", fullbody:"🔥"
};

const INTENSITY = {
  light:  {sets:3, rest:60, repMult:0.85, label:"Лёгкая"},
  medium: {sets:4, rest:45, repMult:1.0,  label:"Средняя"},
  high:   {sets:5, rest:30, repMult:1.2,  label:"Высокая"}
};

/* ---------- ХРАНИЛИЩЕ ---------- */
const DB = {
  get(k, def){ try{ const v = localStorage.getItem("fit_"+k); return v?JSON.parse(v):def; }catch(e){ return def; } },
  set(k, v){ try{ localStorage.setItem("fit_"+k, JSON.stringify(v)); }catch(e){} },
  del(k){ localStorage.removeItem("fit_"+k); }
};

let profile  = DB.get("profile", null);
let stats    = DB.get("stats", {workouts:[], weights:[]});
let reminder = DB.get("reminder", {time:"18:00", days:[1,3,5], enabled:false});
let apiKey   = DB.get("apikey", "");
let currentPlan = [];
let currentIndex = 0;
let session = null;

/* ---------- НАВИГАЦИЯ ---------- */
const SCREENS = ["onboarding","home","workout","result","progress","ai","settings"];
let historyStack = [];

function show(name, addToHistory = true){
  SCREENS.forEach(s=>{
    const el = document.getElementById("screen-"+s);
    if(el) el.classList.add("hidden");
  });
  const target = document.getElementById("screen-"+name);
  if(target) target.classList.remove("hidden");

  document.getElementById("backBtn").style.display =
    (name==="onboarding" || name==="home") ? "none" : "block";

  const titles = {onboarding:"Профиль", home:"Главная", workout:"Тренировка",
                  result:"Результат", progress:"Прогресс", ai:"ИИ-ассистент", settings:"Профиль"};
  document.getElementById("pageTitle").textContent = titles[name] || "";

  document.getElementById("bottombar").style.display =
    (name==="onboarding") ? "none" : "flex";

  document.querySelectorAll(".nav-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.nav === name);
  });

  if(addToHistory && historyStack[historyStack.length-1] !== name){
    historyStack.push(name);
  }
  window.scrollTo({top:0, behavior:"smooth"});
  if(name==="progress") renderProgress();
  if(name==="settings") renderSettings();
}

document.getElementById("backBtn").onclick = ()=>{
  historyStack.pop();
  const prev = historyStack.pop() || "home";
  show(prev);
};

document.querySelectorAll(".nav-btn").forEach(btn=>{
  btn.onclick = ()=>{
    const nav = btn.dataset.nav;
    if(nav==="workout"){ startSelectedOrFirst(); return; }
    historyStack = [];
    show(nav);
  };
});

document.getElementById("menuBtn").onclick = ()=>{
  historyStack = [];
  show("settings");
};

/* ---------- ОНБОРДИНГ ---------- */
let onbStep = 1;
let onbGoals = [];
let onbIntensity = "";

function renderOnbStep(){
  document.querySelectorAll(".onb-step").forEach(s=>{
    s.classList.toggle("hidden", Number(s.dataset.step) !== onbStep);
  });
  document.querySelectorAll(".dot").forEach((d,i)=>{
    d.classList.toggle("active", i <= onbStep-1);
  });
  document.getElementById("onbPrev").style.visibility = onbStep===1 ? "hidden" : "visible";
  document.getElementById("onbNext").textContent = onbStep===5 ? "Создать профиль" : "Далее";
  if(onbStep===4) updatePlanPreview();
}

document.getElementById("onbPrev").onclick = ()=>{
  if(onbStep>1){ onbStep--; renderOnbStep(); }
};

document.querySelectorAll("#goalChips .chip").forEach(chip=>{
  chip.onclick = ()=>{
    const g = chip.dataset.goal;
    if(onbGoals.includes(g)){
      onbGoals = onbGoals.filter(x=>x!==g);
      chip.classList.remove("selected");
    } else {
      onbGoals.push(g);
      chip.classList.add("selected");
    }
  };
});

document.querySelectorAll("#intensityList .radio-card").forEach(card=>{
  card.onclick = ()=>{
    onbIntensity = card.dataset.int;
    document.querySelectorAll("#intensityList .radio-card").forEach(c=>c.classList.remove("selected"));
    card.classList.add("selected");
  };
});

function readNum(id){
  const v = parseFloat(document.getElementById(id).value);
  return isNaN(v) ? null : v;
}

function validateStep(step){
  if(step===1){
    if(!document.getElementById("obName").value.trim()) return "Введите имя";
    if(!readNum("obAge") || readNum("obAge")<14) return "Введите корректный возраст";
    if(!readNum("obHeight") || readNum("obHeight")<120) return "Введите корректный рост";
    if(!readNum("obWeight") || readNum("obWeight")<30) return "Введите корректный вес";
  }
  if(step===2 && onbGoals.length===0) return "Выберите хотя бы одну цель";
  if(step===3 && !onbIntensity) return "Выберите интенсивность";
  if(step===4){
    if(!readNum("obTargetWeight")) return "Введите целевой вес";
  }
  return null;
}

function updatePlanPreview(){
  const cur = readNum("obWeight");
  const tgt = readNum("obTargetWeight");
  const wks = parseInt(document.getElementById("obWeeks").value, 10);
  const days = parseInt(document.getElementById("obDays").value, 10);
  const box = document.getElementById("planPreview");
  if(!cur || !tgt || !wks){
    box.textContent = "Заполните поля, чтобы увидеть расчёт.";
    return;
  }
  const diff = tgt - cur;
  const perWeek = diff / wks;
  const dir = diff < 0 ? "снижение" : diff > 0 ? "набор" : "поддержание";
  const safe = Math.abs(perWeek) <= 1 ? "✅ безопасный темп" : "⚠️ довольно быстрый темп, следите за самочувствием";
  box.innerHTML =
    `Цель: <b>${diff===0?"удержать вес":dir+" " + Math.abs(diff).toFixed(1) + " кг"}</b><br>` +
    `За ${wks} недель это <b>${Math.abs(perWeek).toFixed(2)} кг/неделю</b> — ${safe}<br>` +
    `Тренировок в неделю: <b>${days}</b> · Всего занятий: <b>${days*wks}</b>`;
}

["obWeeks","obDays","obTargetWeight","obWeight"].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.addEventListener("input", updatePlanPreview);
});

document.getElementById("onbNext").onclick = ()=>{
  const err = validateStep(onbStep);
  if(err){ alert(err); return; }

  if(onbStep < 5){ onbStep++; renderOnbStep(); return; }

  // создаём профиль
  profile = {
    name: document.getElementById("obName").value.trim(),
    gender: document.getElementById("obGender").value,
    age: readNum("obAge"),
    height: readNum("obHeight"),
    weight: readNum("obWeight"),
    startWeight: readNum("obWeight"),
    goals: onbGoals.slice(),
    intensity: onbIntensity,
    targetWeight: readNum("obTargetWeight"),
    weeks: parseInt(document.getElementById("obWeeks").value, 10),
    days: parseInt(document.getElementById("obDays").value, 10),
    startDate: new Date().toISOString()
  };
  apiKey = document.getElementById("obApiKey").value.trim();
  DB.set("apikey", apiKey);
  DB.set("profile", profile);
  stats = {workouts:[], weights:[{date:new Date().toISOString(), weight: profile.weight}]};
  DB.set("stats", stats);
  buildReminderDays();

  historyStack = [];
  show("home");
  renderHome();
};

/* ---------- ГЕНЕРАТОР ПРОГРАММЫ ---------- */
function generatePlan(goals, intensity, seedOffset = 0){
  const cfg = INTENSITY[intensity] || INTENSITY.medium;
  const pool = [];
  goals.forEach(g=>{
    (EXERCISES[g] || []).forEach(ex=>{
      pool.push({...ex, group:g});
    });
  });
  // убираем дубликаты по названию
  const seen = new Set();
  const unique = [];
  pool.forEach(ex=>{
    if(!seen.has(ex.name)){ seen.add(ex.name); unique.push(ex); }
  });

  const count = Math.min(Math.max(unique.length, 4), 6 + (cfg.sets >= 4 ? 1 : 0));
  const rotate = seedOffset % Math.max(unique.length, 1);
  const rotated = unique.slice(rotate).concat(unique.slice(0, rotate)).slice(0, count);

  return rotated.map(ex=>({
    ...ex,
    sets: cfg.sets,
    rest: cfg.rest,
    reps: ex.reps ? Math.round(ex.reps * cfg.repMult) : null,
    timer: ex.timer ? Math.round(ex.timer + (cfg.sets-3)*10) : null
  }));
}

function estimateSessionMinutes(plan){
  let total = 0;
  plan.forEach(ex=>{
    if(ex.timer){
      total += (ex.timer + ex.rest) * ex.sets;
    } else {
      total += ((ex.reps * 3) + ex.rest) * ex.sets;
    }
  });
  return Math.max(5, Math.round(total / 60));
}

/* ---------- КАЛОРИИ ---------- */
function calcCalories(plan, durationMin, weightKg){
  let kcal = 0;
  const perEx = durationMin / Math.max(plan.length, 1);
  plan.forEach(ex=>{
    kcal += (ex.met * 3.5 * weightKg / 200) * perEx;
  });
  return Math.round(kcal);
}

/* ---------- ГЛАВНАЯ ---------- */
function renderHome(){
  if(!profile) return;
  const hour = new Date().getHours();
  const dayPart = hour < 5 ? "Доброй ночи" : hour < 12 ? "Доброе утро" : hour < 18 ? "Добрый день" : "Добрый вечер";
  document.getElementById("heroGreet").textContent = `${dayPart}, ${profile.name}!`;

  const plan = generatePlan(profile.goals, profile.intensity, stats.workouts.length);
  currentPlan = plan;

  const goalsText = profile.goals.map(g=>GOAL_LABELS[g]).join(" + ");
  document.getElementById("heroProgram").textContent = goalsText + " workout";
  document.getElementById("heroMeta").textContent = `${plan.length} упражнений · ${INTENSITY[profile.intensity].label}`;
  document.getElementById("heroDuration").textContent = estimateSessionMinutes(plan);

  // статистика
  const totalKcal = stats.workouts.reduce((s,w)=>s+w.kcal, 0);
  document.getElementById("statTotalKcal").textContent = totalKcal;
  document.getElementById("statWorkouts").textContent = stats.workouts.length;

  const firstWeight = profile.startWeight || profile.weight;
  document.getElementById("statWeight").textContent = profile.weight + " кг";
  const toGoal = (profile.targetWeight - profile.weight);
  const el = document.getElementById("statToGoal");
  el.textContent = Math.abs(toGoal).toFixed(1) + " кг";
  el.classList.add("small-v");

  renderWorkoutList();
  renderWeeklyReport("weeklyReport");
}

function renderWorkoutList(){
  const wrap = document.getElementById("workoutList");
  wrap.innerHTML = "";
  profile.goals.forEach(g=>{
    const cnt = (EXERCISES[g] || []).length;
    const item = document.createElement("div");
    item.className = "workout-item";
    item.innerHTML = `
      <div class="wi-icon">${GOAL_ICONS[g]}</div>
      <div class="wi-body">
        <div class="wi-title">${GOAL_LABELS[g]}</div>
        <div class="wi-sub">${cnt} упражнений · ${INTENSITY[profile.intensity].sets} подхода</div>
      </div>
      <div class="wi-badge">${estimateSessionMinutes(generatePlan([g], profile.intensity))} мин</div>`;
    item.onclick = ()=> startWorkout(generatePlan([g], profile.intensity), GOAL_LABELS[g] + " workout");
    wrap.appendChild(item);
  });
}

function startSelectedOrFirst(){
  if(!profile){ show("onboarding"); return; }
  const plan = generatePlan(profile.goals, profile.intensity, stats.workouts.length);
  startWorkout(plan, profile.goals.map(g=>GOAL_LABELS[g]).join(" + ") + " workout");
}

document.getElementById("startTodayBtn").onclick = startSelectedOrFirst;

/* ---------- ТРЕНИРОВКА ---------- */
let timerInterval = null;
let timerSeconds = 0;
let timerRunning = false;
let timerPhase = "Работа";
let currentSet = 1;

function startWorkout(plan, title){
  if(!plan || plan.length===0){ alert("Нет упражнений"); return; }
  currentPlan = plan;
  currentIndex = 0;
  currentSet = 1;
  session = {
    title,
    startedAt: Date.now(),
    plan: plan.map(p=>({name:p.name, target:p.target, met:p.met})),
    kcal: 0,
    duration: 0
  };
  document.getElementById("wTitle").textContent = title;
  show("workout");
  renderExercise();
}

function renderExercise(){
  const ex = currentPlan[currentIndex];
  document.getElementById("wEmoji").textContent = ex.emoji;
  document.getElementById("wName").textContent = ex.name;
  document.getElementById("wTarget").textContent = "Цель: " + ex.target;
  document.getElementById("wDesc").textContent = ex.desc;

  document.getElementById("wCounter").textContent = `${currentIndex+1} / ${currentPlan.length}`;
  document.getElementById("wProgress").style.width =
    ((currentIndex) / currentPlan.length * 100) + "%";

  document.getElementById("setTotal").textContent = ex.sets;
  currentSet = 1;
  document.getElementById("setNow").textContent = currentSet;
  document.getElementById("repCount").textContent = ex.reps || "—";

  stopTimer();
  timerSeconds = ex.timer || 40;
  updateTimerDisplay();

  document.getElementById("prevEx").disabled = currentIndex === 0;
  document.getElementById("nextEx").textContent =
    currentIndex === currentPlan.length-1 ? "Завершить" : "След. →";
}

document.querySelectorAll(".tm-btn").forEach(btn=>{
  btn.onclick = ()=>{
    document.querySelectorAll(".tm-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const mode = btn.dataset.mode;
    document.getElementById("modeReps").classList.toggle("hidden", mode!=="reps");
    document.getElementById("modeTimer").classList.toggle("hidden", mode!=="timer");
    stopTimer();
  };
});

document.getElementById("doneSetBtn").onclick = ()=>{
  const ex = currentPlan[currentIndex];
  currentSet++;
  if(currentSet > ex.sets){
    nextExercise();
  } else {
    document.getElementById("setNow").textContent = currentSet;
    beep(600, 100);
  }
};

document.getElementById("nextEx").onclick = ()=>{
  if(currentIndex === currentPlan.length-1){ finishWorkout(); }
  else { nextExercise(true); }
};

document.getElementById("prevEx").onclick = ()=>{
  if(currentIndex > 0){ currentIndex--; renderExercise(); }
};

function nextExercise(skip = false){
  if(currentIndex < currentPlan.length-1){
    currentIndex++;
    renderExercise();
    beep(880, 150);
  } else {
    finishWorkout();
  }
}

/* ---------- ТАЙМЕР ---------- */
function fmt(sec){
  const m = Math.floor(sec/60);
  const s = sec % 60;
  return String(m).padStart(2,"0") + ":" + String(s).padStart(2,"0");
}

function updateTimerDisplay(){
  const ex = currentPlan[currentIndex];
  const total = ex.timer || 40;
  document.getElementById("ctText").textContent = fmt(timerSeconds);
  const circle = document.getElementById("ctFg");
  const len = 553;
  const progress = Math.max(0, timerSeconds / total);
  circle.style.strokeDashoffset = String(len * (1 - progress));
  document.getElementById("timerPhase").textContent = timerPhase;
}

document.getElementById("timerToggle").onclick = ()=>{
  if(timerRunning) stopTimer();
  else startTimer();
};

document.getElementById("timerReset").onclick = ()=>{
  stopTimer();
  const ex = currentPlan[currentIndex];
  timerSeconds = ex.timer || 40;
  timerPhase = "Работа";
  updateTimerDisplay();
};

function startTimer(){
  if(timerRunning) return;
  timerRunning = true;
  document.getElementById("timerToggle").textContent = "⏸ Пауза";
  timerInterval = setInterval(()=>{
    timerSeconds--;
    if(timerSeconds <= 0){
      if(timerPhase === "Работа"){
        // закончилась работа → подход выполнен → отдых
        const ex = currentPlan[currentIndex];
        currentSet++;
        if(currentSet > ex.sets){
          stopTimer();
          document.getElementById("setNow").textContent = ex.sets;
          nextExercise();
          return;
        }
        timerPhase = "Отдых";
        timerSeconds = ex.rest;
        beep(880, 200);
        notify("Отдых " + ex.rest + " сек", "Следующий подход: " + ex.name);
      } else {
        timerPhase = "Работа";
        timerSeconds = currentPlan[currentIndex].timer || 40;
        document.getElementById("setNow").textContent = currentSet;
        beep(600, 300);
      }
    }
    updateTimerDisplay();
  }, 1000);
}

function stopTimer(){
  if(timerInterval){ clearInterval(timerInterval); timerInterval = null; }
  timerRunning = false;
  const btn = document.getElementById("timerToggle");
  if(btn) btn.textContent = "▶ Старт";
}

/* ---------- ЗВУК И ВИБРАЦИЯ ---------- */
let audioCtx = null;
function beep(freq, ms){
  try{
    if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.frequency.value = freq;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + ms/1000);
    osc.start();
    osc.stop(audioCtx.currentTime + ms/1000);
  }catch(e){}
  if(navigator.vibrate) navigator.vibrate(ms);
}

/* ---------- ЗАВЕРШЕНИЕ ТРЕНИРОВКИ ---------- */
document.getElementById("finishEarly").onclick = ()=>{
  if(confirm("Завершить тренировку?")) finishWorkout();
};

function finishWorkout(){
  stopTimer();
  if(!session) return;
  const durationMin = Math.max(1, Math.round((Date.now() - session.startedAt) / 60000));
  const kcal = calcCalories(currentPlan, durationMin, profile.weight);

  session.duration = durationMin;
  session.kcal = kcal;

  document.getElementById("rExerciseCount").textContent = currentPlan.length + " упражнений";
  document.getElementById("rKcal").textContent = kcal;
  document.getElementById("rDuration").textContent = durationMin;
  document.getElementById("rWeight").value = profile.weight;

  historyStack = ["home"];
  show("result");
}

document.getElementById("saveResultBtn").onclick = ()=>{
  const w = readNum("rWeight");
  if(w && w > 20){
    profile.weight = w;
    DB.set("profile", profile);
    stats.weights.push({date:new Date().toISOString(), weight:w});
  }

  stats.workouts.push({
    date: new Date().toISOString(),
    title: session.title,
    duration: session.duration,
    kcal: session.kcal,
    exercises: session.plan
  });
  DB.set("stats", stats);
  session = null;

  historyStack = [];
  show("home");
  renderHome();
  notify("Тренировка сохранена 💪", `Сожжено ${stats.workouts[stats.workouts.length-1].kcal} ккал`);
};

document.getElementById("goHomeBtn").onclick = ()=>{
  session = null;
  historyStack = [];
  show("home");
  renderHome();
};

/* ---------- ПРОГРЕСС И ОТЧЁТЫ ---------- */
function weekKey(d){
  const date = new Date(d);
  const onejan = new Date(date.getFullYear(), 0, 1);
  const week = Math.ceil((((date - onejan) / 86400000) + onejan.getDay() + 1) / 7);
  return date.getFullYear() + "-W" + week;
}

function groupByWeek(workouts){
  const map = {};
  workouts.forEach(w=>{
    const k = weekKey(w.date);
    if(!map[k]) map[k] = {kcal:0, count:0, minutes:0};
    map[k].kcal += w.kcal;
    map[k].count++;
    map[k].minutes += w.duration;
  });
  return map;
}

function renderWeeklyReport(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;

  const now = new Date();
  const weekAgo = now.getTime() - 7*24*3600*1000;
  const thisWeek = stats.workouts.filter(w=> new Date(w.date).getTime() >= weekAgo);
  const kcal = thisWeek.reduce((s,w)=>s+w.kcal, 0);
  const mins = thisWeek.reduce((s,w)=>s+w.duration, 0);

  // изменения веса за неделю
  const ws = stats.weights.slice().sort((a,b)=> new Date(a.date) - new Date(b.date));
  const weekWeights = ws.filter(w=> new Date(w.date).getTime() >= weekAgo);
  let deltaTxt = "нет данных";
  if(weekWeights.length >= 2){
    const d = weekWeights[weekWeights.length-1].weight - weekWeights[0].weight;
    deltaTxt = (d>0?"+":"") + d.toFixed(1) + " кг";
  } else if(ws.length >= 1 && profile){
    const d = profile.weight - ws[0].weight;
    deltaTxt = (d>0?"+":"") + d.toFixed(1) + " кг";
  }

  const target = profile ? profile.targetWeight : null;
  const toGoal = profile ? (profile.weight - target).toFixed(1) : "—";

  el.innerHTML = `
    <div class="report-big">${kcal} ккал</div>
    <div class="report-cap">сожжено за последние 7 дней</div>
    <div class="list-row"><span>Тренировок за неделю</span><span class="lr-val">${thisWeek.length}</span></div>
    <div class="list-row"><span>Общее время</span><span class="lr-val">${mins} мин</span></div>
    <div class="list-row"><span>Изменение веса</span><span class="lr-val">${deltaTxt}</span></div>
    <div class="list-row"><span>До цели осталось</span><span class="lr-val">${Math.abs(toGoal)} кг</span></div>
    <div class="list-row"><span>Цель на неделю</span><span class="lr-val">${profile ? profile.days : "—"} тренировки</span></div>
  `;
}

function renderProgress(){
  renderWeeklyReport("progressReport");

  // история тренировок
  const hl = document.getElementById("historyList");
  hl.innerHTML = "";
  const recent = stats.workouts.slice().reverse().slice(0,15);
  if(recent.length === 0){
    hl.innerHTML = '<p class="muted center">Пока нет тренировок</p>';
  }
  recent.forEach(w=>{
    const d = new Date(w.date);
    const dateStr = d.toLocaleDateString("ru-RU", {day:"2-digit", month:"short"}) + " " +
                    d.toLocaleTimeString("ru-RU", {hour:"2-digit", minute:"2-digit"});
    const row = document.createElement("div");
    row.className = "list-row";
    row.innerHTML = `
      <div>
        <div>${w.title}</div>
        <div class="lr-sub">${dateStr} · ${w.duration} мин</div>
      </div>
      <div class="lr-val">${w.kcal} ккал</div>`;
    hl.appendChild(row);
  });

  // дневник веса
  const wl = document.getElementById("weightList");
  wl.innerHTML = "";
  const ws = stats.weights.slice().reverse().slice(0,15);
  if(ws.length === 0){
    wl.innerHTML = '<p class="muted center">Пока нет записей</p>';
  }
  ws.forEach(w=>{
    const d = new Date(w.date);
    const row = document.createElement("div");
    row.className = "list-row";
    row.innerHTML = `
      <div>${d.toLocaleDateString("ru-RU", {day:"2-digit", month:"long", year:"numeric"})}</div>
      <div class="lr-val">${w.weight} кг</div>`;
    wl.appendChild(row);
  });
}

/* ---------- НАСТРОЙКИ ---------- */
function renderSettings(){
  if(!profile) return;
  document.getElementById("stName").value = profile.name;
  document.getElementById("stAge").value = profile.age;
  document.getElementById("stHeight").value = profile.height;
  document.getElementById("stGender").value = profile.gender;
  document.getElementById("stIntensity").value = profile.intensity;
  document.getElementById("stTargetWeight").value = profile.targetWeight;
  document.getElementById("stWeeks").value = profile.weeks;
  document.getElementById("stApiKey").value = apiKey;
  document.getElementById("stReminderTime").value = reminder.time;

  const gWrap = document.getElementById("settingsGoals");
  gWrap.innerHTML = "";
  Object.keys(GOAL_LABELS).forEach(g=>{
    const b = document.createElement("button");
    b.className = "chip" + (profile.goals.includes(g) ? " selected" : "");
    b.textContent = GOAL_ICONS[g] + " " + GOAL_LABELS[g];
    b.onclick = ()=>{
      if(profile.goals.includes(g)){
        if(profile.goals.length === 1) return;
        profile.goals = profile.goals.filter(x=>x!==g);
        b.classList.remove("selected");
      } else {
        profile.goals.push(g);
        b.classList.add("selected");
      }
    };
    gWrap.appendChild(b);
  });

  document.querySelectorAll("#reminderDays .chip").forEach(c=>{
    c.classList.toggle("selected", reminder.days.includes(Number(c.dataset.day)));
  });

  updateNotifStatus();
}

document.getElementById("saveSettings").onclick = ()=>{
  profile.name = document.getElementById("stName").value.trim() || profile.name;
  profile.age = readNum("stAge") || profile.age;
  profile.height = readNum("stHeight") || profile.height;
  profile.gender = document.getElementById("stGender").value;
  profile.intensity = document.getElementById("stIntensity").value;
  profile.targetWeight = readNum("stTargetWeight") || profile.targetWeight;
  profile.weeks = readNum("stWeeks") || profile.weeks;
  DB.set("profile", profile);
  apiKey = document.getElementById("stApiKey").value.trim();
  DB.set("apikey", apiKey);
  reminder.time = document.getElementById("stReminderTime").value;
  DB.set("reminder", reminder);
  alert("Сохранено ✅");
  renderHome();
};

document.querySelectorAll("#reminderDays .chip").forEach(c=>{
  c.onclick = ()=>{
    const d = Number(c.dataset.day);
    if(reminder.days.includes(d)) reminder.days = reminder.days.filter(x=>x!==d);
    else reminder.days.push(d);
    c.classList.toggle("selected");
    DB.set("reminder", reminder);
  };
});

document.getElementById("stReminderTime").onchange = (e)=>{
  reminder.time = e.target.value;
  DB.set("reminder", reminder);
};

document.getElementById("resetApp").onclick = ()=>{
  if(!confirm("Удалить все данные? Это необратимо.")) return;
  ["profile","stats","reminder","apikey"].forEach(k=>DB.del(k));
  location.reload();
};

/* ---------- УВЕДОМЛЕНИЯ ---------- */
function updateNotifStatus(){
  const el = document.getElementById("notifStatus");
  if(!("Notification" in window)){ el.textContent = "Браузер не поддерживает уведомления"; return; }
  const p = Notification.permission;
  el.textContent = p === "granted" ? "✅ Уведомления включены" :
                   p === "denied" ? "❌ Уведомления запрещены в настройках браузера" :
                   "Уведомления выключены";
}

document.getElementById("enableNotif").onclick = async ()=>{
  if(!("Notification" in window)){ alert("Браузер не поддерживает уведомления"); return; }
  const p = await Notification.requestPermission();
  if(p === "granted"){
    reminder.enabled = true;
    DB.set("reminder", reminder);
    notify("Уведомления включены 🔔", "Напомним о тренировке в " + reminder.time);
    scheduleReminder();
  }
  updateNotifStatus();
};

function notify(title, body){
  try{
    if(!("Notification" in window) || Notification.permission !== "granted") return;
    if(navigator.serviceWorker && navigator.serviceWorker.controller){
      navigator.serviceWorker.ready.then(reg=>{
