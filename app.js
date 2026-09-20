/* =========================================================
   ТРЕНАЖЁР — logic
   ========================================================= */

/* ---------- БАЗА УПРАЖНЕНИЙ (MET = расход энергии) ---------- */
const EXERCISES = {
  glutes: [
    {name:"Ягодичный мост", emoji:"🍑", reps:15, met:3.5, target:"Ягодицы",
     desc:"Лягте на спину, ноги согнуты. Поднимайте таз вверх, сжимая ягодицы в верхней точке. Задержитесь на 2 секунды."},
    {name:"Приседания", emoji:"🦵", reps:15, met:5.0, target:"Ягодицы, ноги",
     desc:"Ноги на ширине плеч. Опускайтесь до параллели бёдер с полом, колени не выходят за носки."},
    {name:"Выпады назад", emoji:"🚶", reps:12, met:4.5, target:"Ягодицы",
     desc:"Из положения стоя отставьте ногу назад и опуститесь в выпад. Корпус держите вертикально."},
    {name:"Махи ногой в сторону", emoji:"🦵", reps:15, met:3.5, target:"Средняя ягодичная",
     desc:"Стоя на четвереньках, поднимайте согнутую ногу в сторону до уровня бедра."},
    {name:"Ягодичный мост на одной ноге", emoji:"🍑", reps:10, met:4.0, target:"Ягодицы",
     desc:"Как обычный мост, но одна нога поднята. Половина подходов на каждой ноге."},
    {name:"Отведение ноги с резинкой", emoji:"🎗️", reps:20, met:3.5, target:"Ягодицы",
     desc:"Резинка над коленями, полуприсед. Разводите колени в стороны, удерживая напряжение."}
  ],
  abs: [
    {name:"Планка", emoji:"🧘", timer:40, met:3.5, target:"Пресс, кор",
     desc:"Упор на предплечья и носки. Тело — прямая линия. Дышите ровно."},
    {name:"Скручивания", emoji:"🔸", reps:20, met:3.8, target:"Верхний пресс",
     desc:"Лёжа на спине, руки за головой. Отрывайте лопатки от пола, поясница прижата."},
    {name:"Велосипед", emoji:"🚴", reps:20, met:4.5, target:"Пресс, косые",
     desc:"Лёжа, руки за головой. Локтем к противоположному колену. Медленно и контролированно."},
    {name:"Подъём ног лёжа", emoji:"🦵", reps:15, met:3.8, target:"Нижний пресс",
     desc:"Лёжа на спине, поднимайте прямые ноги до 90°, опускайте не касаясь пола."},
    {name:"Русский твист", emoji:"🔄", reps:20, met:4.0, target:"Косые мышцы",
     desc:"Сидя с наклоном назад, поворачивайте корпус влево-вправо."},
    {name:"Боковая планка", emoji:"🧘", timer:30, met:3.5, target:"Косые мышцы",
     desc:"Упор на бок на предплечье. Таз не провисает. По 30 секунд на каждую сторону."}
  ],
  legs: [
    {name:"Приседания", emoji:"🦵", reps:15, met:5.0, target:"Квадрицепс, ягодицы",
     desc:"Спина прямая, колени направлены в сторону носков."},
    {name:"Выпады", emoji:"🚶", reps:12, met:4.5, target:"Ноги, ягодицы",
     desc:"Шаг вперёд, колено почти до пола. Колено передней ноги над стопой."},
    {name:"Зашагивания на платформу", emoji:"🪜", reps:12, met:5.0, target:"Ноги, ягодицы",
     desc:"Нога на устойчивой опоре. Поднимитесь усилием ноги на опоре, опуститесь медленно."},
    {name:"Приседания с паузой", emoji:"⏸️", reps:12, met:5.0, target:"Ноги",
     desc:"В нижней точке приседа задержитесь на 3 секунды."},
    {name:"Подъём на носки", emoji:"🦶", reps:20, met:3.5, target:"Икры",
     desc:"Поднимайтесь на носки максимально высоко, медленно опускайтесь."}
  ],
  back: [
    {name:"Супермен", emoji:"🦸", reps:15, met:3.5, target:"Разгибатели спины",
     desc:"Лёжа на животе, поднимайте руки и ноги. Задержитесь на 2 секунды вверху."},
    {name:"Лодочка", emoji:"⛵", timer:30, met:3.5, target:"Спина, кор",
     desc:"Лёжа на животе поднимите руки, ноги и грудь. Удерживайте положение."},
    {name:"Обратные снежные ангелы", emoji:"👼", reps:15, met:3.5, target:"Верх спины",
     desc:"Лёжа на животе, сводите лопатки, движения руками вверх-вниз."},
    {name:"Подтягивания / тяга", emoji:"🔙", reps:10, met:6.0, target:"Широчайшие",
     desc:"Есть турник — подтягивания. Без него — тяга резинки к поясу."}
  ],
  chest: [
    {name:"Отжимания", emoji:"💪", reps:12, met:8.0, target:"Грудь, трицепс",
     desc:"Руки шире плеч. Опускайтесь до касания грудью пола."},
    {name:"Отжимания узкой постановкой", emoji:"🦾", reps:10, met:8.0, target:"Трицепс, грудь",
     desc:"Ладони под плечами, локти прижаты к телу."},
    {name:"Разведение рук с резинкой", emoji:"🎗️", reps:15, met:3.5, target:"Грудные",
     desc:"Резинку за спину, сводите руки перед грудью."}
  ],
  arms: [
    {name:"Отжимания на трицепс", emoji:"🦾", reps:12, met:6.0, target:"Трицепс",
     desc:"Сидя на стуле, руки сзади на опоре. Опускайтесь и поднимайтесь усилием рук."},
    {name:"Сгибания с резинкой", emoji:"💪", reps:15, met:3.5, target:"Бицепс",
     desc:"Встаньте на резинку, тяните ручки вверх, сгибая руки."},
    {name:"Обратные отжимания от пола", emoji:"🖐️", reps:12, met:6.0, target:"Трицепс",
     desc:"Пальцы направлены назад, нагрузка идёт в трицепс."}
  ],
  shoulders: [
    {name:"Разведение рук в стороны", emoji:"🎯", reps:15, met:3.5, target:"Средние дельты",
     desc:"Поднимайте руки в стороны до уровня плеч, плечи не поднимайте вверх."},
    {name:"Жим над головой", emoji:"⬆️", reps:12, met:5.0, target:"Плечи",
     desc:"Поднимайте руки над головой, полностью выпрямляя."},
    {name:"Разведение с наклоном", emoji:"⬇️", reps:15, met:3.5, target:"Задние дельты",
     desc:"Наклон вперёд, руки в стороны и вверх. Сводите лопатки."}
  ],
  fullbody: [
    {name:"Бёрпи", emoji:"🔥", reps:10, met:9.0, target:"Всё тело",
     desc:"Присесть, прыжком в упор лёжа, отжимание, прыжок обратно, выпрыгнуть вверх."},
    {name:"Приседания с прыжком", emoji:"⚡", reps:12, met:8.0, target:"Ноги, ягодицы",
     desc:"Присели — выпрыгнули вверх. Приземляйтесь мягко."},
    {name:"Скалолаз", emoji:"🧗", reps:20, met:8.0, target:"Кор, всё тело",
     desc:"В упоре лёжа поочерёдно подтягивайте колени к груди."},
    {name:"Выпады с прыжком", emoji:"🏃", reps:14, met:8.0, target:"Ноги",
     desc:"Из выпада выпрыгните вверх, меняя ноги в воздухе."},
    {name:"Планка + скручивания", emoji:"🧘", reps:15, met:4.5, target:"Кор",
     desc:"Из планки поворачивайте корпус, поднимая руку вверх."}
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
  get(k, def){
    try{
      const v = localStorage.getItem("fit_" + k);
      return v ? JSON.parse(v) : def;
    }catch(e){ return def; }
  },
  set(k, v){
    try{ localStorage.setItem("fit_" + k, JSON.stringify(v)); }catch(e){}
  },
  del(k){ localStorage.removeItem("fit_" + k); }
};

let profile      = DB.get("profile", null);
let stats        = DB.get("stats", {workouts:[], weights:[]});
let reminder     = DB.get("reminder", {time:"18:00", days:[1,3,5], enabled:false});
let apiKey       = DB.get("apikey", "");
let currentPlan  = [];
let currentIndex = 0;
let session      = null;
let onbStep      = 1;
let onbGoals     = [];
let onbIntensity = "";

/* ---------- НАВИГАЦИЯ ---------- */
const SCREENS = ["onboarding","home","workout","result","progress","ai","settings"];
let historyStack = [];

function show(name, addToHistory){
  if(addToHistory === undefined) addToHistory = true;

  for(let i = 0; i < SCREENS.length; i++){
    const el = document.getElementById("screen-" + SCREENS[i]);
    if(el) el.classList.add("hidden");
  }
  const target = document.getElementById("screen-" + name);
  if(target) target.classList.remove("hidden");

  const backBtn = document.getElementById("backBtn");
  if(backBtn) backBtn.style.display = (name === "onboarding" || name === "home") ? "none" : "block";

  const titles = {
    onboarding:"Профиль", home:"Главная", workout:"Тренировка",
    result:"Результат", progress:"Прогресс", ai:"ИИ-ассистент", settings:"Профиль"
  };
  const pt = document.getElementById("pageTitle");
  if(pt) pt.textContent = titles[name] || "";

  const bb = document.getElementById("bottombar");
  if(bb) bb.style.display = (name === "onboarding") ? "none" : "flex";

  const navs = document.querySelectorAll(".nav-btn");
  for(let i = 0; i < navs.length; i++){
    navs[i].classList.toggle("active", navs[i].dataset.nav === name);
  }

  if(addToHistory && historyStack[historyStack.length - 1] !== name){
    historyStack.push(name);
  }
  window.scrollTo(0, 0);

  if(name === "progress") renderProgress();
  if(name === "settings") renderSettings();
}

/* ---------- ОБРАБОТЧИКИ НАВИГАЦИИ ---------- */
const backBtnEl = document.getElementById("backBtn");
if(backBtnEl){
  backBtnEl.onclick = function(){
    historyStack.pop();
    const prev = historyStack.pop() || "home";
    show(prev);
  };
}

const navButtons = document.querySelectorAll(".nav-btn");
for(let i = 0; i < navButtons.length; i++){
  navButtons[i].onclick = function(){
    const nav = navButtons[i].dataset.nav;
    if(nav === "workout"){ startSelectedOrFirst(); return; }
    historyStack = [];
    show(nav);
  };
}

const menuBtnEl = document.getElementById("menuBtn");
if(menuBtnEl){
  menuBtnEl.onclick = function(){
    historyStack = [];
    show("settings");
  };
}

/* ---------- ОНБОРДИНГ ---------- */
function renderOnbStep(){
  const steps = document.querySelectorAll(".onb-step");
  for(let i = 0; i < steps.length; i++){
    steps[i].classList.toggle("hidden", Number(steps[i].dataset.step) !== onbStep);
  }
  const dots = document.querySelectorAll(".dot");
  for(let i = 0; i < dots.length; i++){
    dots[i].classList.toggle("active", i <= onbStep - 1);
  }
  const prevB = document.getElementById("onbPrev");
  if(prevB) prevB.style.visibility = (onbStep === 1) ? "hidden" : "visible";
  const nextB = document.getElementById("onbNext");
  if(nextB) nextB.textContent = (onbStep === 5) ? "Создать профиль" : "Далее";
  if(onbStep === 4) updatePlanPreview();
}

const onbPrevEl = document.getElementById("onbPrev");
if(onbPrevEl){
  onbPrevEl.onclick = function(){
    if(onbStep > 1){ onbStep--; renderOnbStep(); }
  };
}

const goalChipEls = document.querySelectorAll("#goalChips .chip");
for(let i = 0; i < goalChipEls.length; i++){
  goalChipEls[i].onclick = function(){
    const g = goalChipEls[i].dataset.goal;
    if(onbGoals.indexOf(g) !== -1){
      onbGoals = onbGoals.filter(function(x){ return x !== g; });
      goalChipEls[i].classList.remove("selected");
    } else {
      onbGoals.push(g);
      goalChipEls[i].classList.add("selected");
    }
  };
}

const intCards = document.querySelectorAll("#intensityList .radio-card");
for(let i = 0; i < intCards.length; i++){
  intCards[i].onclick = function(){
    onbIntensity = intCards[i].dataset.int;
    for(let j = 0; j < intCards.length; j++) intCards[j].classList.remove("selected");
    intCards[i].classList.add("selected");
  };
}

function readNum(id){
  const el = document.getElementById(id);
  if(!el) return null;
  const v = parseFloat(el.value);
  return isNaN(v) ? null : v;
}
function readInt(id){
  const el = document.getElementById(id);
  if(!el) return 0;
  const v = parseInt(el.value, 10);
  return isNaN(v) ? 0 : v;
}

function validateStep(step){
  if(step === 1){
    const n = document.getElementById("obName");
    if(!n || !n.value.trim()) return "Введите имя";
    const age = readNum("obAge");
    if(!age || age < 14) return "Введите корректный возраст";
    const h = readNum("obHeight");
    if(!h || h < 120) return "Введите корректный рост";
    const w = readNum("obWeight");
    if(!w || w < 30) return "Введите корректный вес";
  }
  if(step === 2 && onbGoals.length === 0) return "Выберите хотя бы одну цель";
  if(step === 3 && !onbIntensity) return "Выберите интенсивность";
  if(step === 4 && !readNum("obTargetWeight")) return "Введите целевой вес";
  return null;
}

function updatePlanPreview(){
  const box = document.getElementById("planPreview");
  if(!box) return;
  const cur = readNum("obWeight");
  const tgt = readNum("obTargetWeight");
  const wks = readInt("obWeeks");
  const days = readInt("obDays");
  if(!cur || !tgt || !wks){
    box.textContent = "Заполните поля, чтобы увидеть расчёт.";
    return;
  }
  const diff = tgt - cur;
  const perWeek = diff / wks;
  const dir = diff < 0 ? "снижение" : (diff > 0 ? "набор" : "поддержание");
  const safe = Math.abs(perWeek) <= 1 ? "✅ безопасный темп" : "⚠️ быстрый темп";
  box.innerHTML =
    "Цель: <b>" + (diff === 0 ? "удержать вес" : dir + " " + Math.abs(diff).toFixed(1) + " кг") + "</b><br>" +
    "За " + wks + " недель это <b>" + Math.abs(perWeek).toFixed(2) + " кг/неделю</b> — " + safe + "<br>" +
    "Тренировок в неделю: <b>" + days + "</b> · Всего занятий: <b>" + (days * wks) + "</b>";
}

["obWeeks","obDays","obTargetWeight","obWeight"].forEach(function(id){
  const el = document.getElementById(id);
  if(el) el.addEventListener("input", updatePlanPreview);
});

const onbNextEl = document.getElementById("onbNext");
if(onbNextEl){
  onbNextEl.onclick = function(){
    const err = validateStep(onbStep);
    if(err){ alert(err); return; }

    if(onbStep < 5){ onbStep++; renderOnbStep(); return; }

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
      weeks: readInt("obWeeks"),
      days: readInt("obDays"),
      startDate: new Date().toISOString()
    };
    const keyEl = document.getElementById("obApiKey");
    apiKey = keyEl ? keyEl.value.trim() : "";
    DB.set("apikey", apiKey);
    DB.set("profile", profile);
    stats = {workouts:[], weights:[{date:new Date().toISOString(), weight:profile.weight}]};
    DB.set("stats", stats);

    historyStack = [];
    show("home");
    renderHome();
  };
}

/* ---------- ГЕНЕРАТОР ПРОГРАММЫ ---------- */
function generatePlan(goals, intensity, seedOffset){
  if(!seedOffset) seedOffset = 0;
  const cfg = INTENSITY[intensity] || INTENSITY.medium;
  const pool = [];

  goals.forEach(function(g){
    const list = EXERCISES[g] || [];
    list.forEach(function(ex){
      pool.push({
        name: ex.name, emoji: ex.emoji, reps: ex.reps, timer: ex.timer,
        met: ex.met, target: ex.target, desc: ex.desc, group: g
      });
    });
  });

  const seen = {};
  const unique = [];
  pool.forEach(function(ex){
    if(!seen[ex.name]){ seen[ex.name] = true; unique.push(ex); }
  });

  if(unique.length === 0) return [];

  const count = Math.min(unique.length, cfg.sets >= 4 ? 6 : 5);
  const rotate = seedOffset % unique.length;
  const rotated = unique.slice(rotate).concat(unique.slice(0, rotate)).slice(0, count);

  return rotated.map(function(ex){
    return {
      name: ex.name,
      emoji: ex.emoji,
      target: ex.target,
      desc: ex.desc,
      met: ex.met,
      sets: cfg.sets,
      rest: cfg.rest,
      reps: ex.reps ? Math.round(ex.reps * cfg.repMult) : null,
      timer: ex.timer ? ex.timer : null
    };
  });
}

function estimateSessionMinutes(plan){
  let total = 0;
  plan.forEach(function(ex){
    const perSet = ex.timer ? (ex.timer + ex.rest) : ((ex.reps || 12) * 3 + ex.rest);
    total += perSet * ex.sets;
  });
  return Math.max(5, Math.round(total / 60));
}

/* ---------- КАЛОРИИ ---------- */
function calcCalories(plan, durationMin, weightKg){
  if(!plan.length) return 0;
  const perEx = durationMin / plan.length;
  let kcal = 0;
  plan.forEach(function(ex){
    kcal += (ex.met * 3.5 * weightKg / 200) * perEx;
  });
  return Math.round(kcal);
}

/* ---------- ГЛАВНАЯ ---------- */
function renderHome(){
  if(!profile) return;
  const hour = new Date().getHours();
  const dayPart = hour < 5 ? "Доброй ночи" : (hour < 12 ? "Доброе утро" : (hour < 18 ? "Добрый день" : "Добрый вечер"));

  const greet = document.getElementById("heroGreet");
  if(greet) greet.textContent = dayPart + ", " + profile.name + "!";

  const plan = generatePlan(profile.goals, profile.intensity, stats.workouts.length);
  currentPlan = plan;

  const goalsText = profile.goals.map(function(g){ return GOAL_LABELS[g] || g; }).join(" + ");
  const hp = document.getElementById("heroProgram");
  if(hp) hp.textContent = goalsText + " workout";
  const hm = document.getElementById("heroMeta");
  if(hm) hm.textContent = plan.length + " упражнений · " + INTENSITY[profile.intensity].label;
  const hd = document.getElementById("heroDuration");
  if(hd) hd.textContent = estimateSessionMinutes(plan);

  let totalKcal = 0;
  stats.workouts.forEach(function(w){ totalKcal += w.kcal; });
  const sk = document.getElementById("statTotalKcal");
  if(sk) sk.textContent = totalKcal;
  const sw = document.getElementById("statWorkouts");
  if(sw) sw.textContent = stats.workouts.length;

  const sbw = document.getElementById("statWeight");
  if(sbw) sbw.textContent = profile.weight + " кг";

  const stg = document.getElementById("statToGoal");
  if(stg){
    const toGoal = profile.targetWeight - profile.weight;
    stg.textContent = Math.abs(toGoal).toFixed(1) + " кг";
    stg.classList.add("small-v");
  }

  renderWorkoutList();
  renderWeeklyReport("weeklyReport");
}

function renderWorkoutList(){
  const wrap = document.getElementById("workoutList");
  if(!wrap || !profile) return;
  wrap.innerHTML = "";

  profile.goals.forEach(function(g){
    const cnt = (EXERCISES[g] || []).length;
    const item = document.createElement("div");
    item.className = "workout-item";
    item.innerHTML =
      '<div class="wi-icon">' + (GOAL_ICONS[g] || "🏋️") + '</div>' +
      '<div class="wi-body">' +
        '<div class="wi-title">' + (GOAL_LABELS[g] || g) + '</div>' +
        '<div class="wi-sub">' + cnt + ' упражнений · ' + INTENSITY[profile.intensity].sets + ' подхода</div>' +
      '</div>' +
      '<div class="wi-badge">' + estimateSessionMinutes(generatePlan([g], profile.intensity)) + ' мин</div>';

    item.onclick = function(){
      startWorkout(generatePlan([g], profile.intensity), (GOAL_LABELS[g] || g) + " workout");
    };
    wrap.appendChild(item);
  });
}

function startSelectedOrFirst(){
  if(!profile){ show("onboarding"); return; }
  const plan = generatePlan(profile.goals, profile.intensity, stats.workouts.length);
  const title = profile.goals.map(function(g){ return GOAL_LABELS[g] || g; }).join(" + ") + " workout";
  startWorkout(plan, title);
}

const startTodayEl = document.getElementById("startTodayBtn");
if(startTodayEl) startTodayEl.onclick = startSelectedOrFirst;

/* ---------- ТРЕНИРОВКА ---------- */
let timerInterval = null;
let timerSeconds  = 0;
let timerRunning  = false;
let timerPhase    = "Работа";
let currentSet    = 1;

function startWorkout(plan, title){
  if(!plan || plan.length === 0){ alert("Нет упражнений"); return; }
  currentPlan = plan;
  currentIndex = 0;
  currentSet = 1;
  session = {
    title: title,
    startedAt: Date.now(),
    plan: plan.map(function(p){ return {name:p.name, target:p.target, met:p.met}; }),
    kcal: 0,
    duration: 0
  };
  const wt = document.getElementById("wTitle");
  if(wt) wt.textContent = title;
  show("workout");
  renderExercise();
}

function renderExercise(){
  const ex = currentPlan[currentIndex];
  if(!ex) return;

  const e1 = document.getElementById("wEmoji");   if(e1) e1.textContent = ex.emoji;
  const e2 = document.getElementById("wName");    if(e2) e2.textContent = ex.name;
  const e3 = document.getElementById("wTarget");  if(e3) e3.textContent = "Цель: " + ex.target;
  const e4 = document.getElementById("wDesc");    if(e4) e4.textContent = ex.desc;
  const e5 = document.getElementById("wCounter"); if(e5) e5.textContent = (currentIndex + 1) + " / " + currentPlan.length;

  const pr = document.getElementById("wProgress");
  if(pr) pr.style.width = (currentIndex / currentPlan.length * 100) + "%";

  const st = document.getElementById("setTotal");
  if(st) st.textContent = ex.sets;
  currentSet = 1;
  const sn = document.getElementById("setNow");
  if(sn) sn.textContent = currentSet;
  const rc = document.getElementById("repCount");
  if(rc) rc.textContent = ex.reps ? ex.reps : "—";

  stopTimer();
  timerSeconds = ex.timer ? ex.timer : 40;
  timerPhase = "Работа";
  updateTimerDisplay();

  const pe = document.getElementById("prevEx");
  if(pe) pe.disabled = (currentIndex === 0);
  const ne = document.getElementById("nextEx");
  if(ne) ne.textContent = (currentIndex === currentPlan.length - 1) ? "Завершить" : "След. →";
}

const tmBtns = document.querySelectorAll(".tm-btn");
for(let i = 0; i < tmBtns.length; i++){
  tmBtns[i].onclick = function(){
    for(let j = 0; j < tmBtns.length; j++) tmBtns[j].classList.remove("active");
    tmBtns[i].classList.add("active");
    const mode = tmBtns[i].dataset.mode;
    const mr = document.getElementById("modeReps");
    const mt = document.getElementById("modeTimer");
    if(mr) mr.classList.toggle("hidden", mode !== "reps");
    if(mt) mt.classList.toggle("hidden", mode !== "timer");
    stopTimer();
  };
}

const doneSetEl = document.getElementById("doneSetBtn");
if(doneSetEl){
  doneSetEl.onclick = function(){
    const ex = currentPlan[currentIndex];
    if(!ex) return;
    currentSet++;
    if(currentSet > ex.sets){
      nextExercise();
    } else {
      const sn = document.getElementById("setNow");
      if(sn) sn.textContent = currentSet;
      beep(600, 100);
    }
  };
}

const nextExEl = document.getElementById("nextEx");
if(nextExEl){
  nextExEl.onclick = function(){
    if(currentIndex === currentPlan.length - 1) finishWorkout();
    else nextExercise();
  };
}

const prevExEl = document.getElementById("prevEx");
if(prevExEl){
  prevExEl.onclick = function(){
    if(currentIndex > 0){ currentIndex--; renderExercise(); }
  };
}

function nextExercise(){
  if(currentIndex < currentPlan.length - 1){
    currentIndex++;
    renderExercise();
    beep(880, 150);
  } else {
    finishWorkout();
  }
}

/* ---------- ТАЙМЕР ---------- */
function fmt(sec){
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

function updateTimerDisplay(){
  const ex = currentPlan[currentIndex];
  if(!ex) return;
  const total = ex.timer ? ex.timer : 40;
  const ct = document.getElementById("ctText");
  if(ct) ct.textContent = fmt(timerSeconds);
  const circle = document.getElementById("ctFg");
  if(circle){
    const len = 553;
    const progress = Math.max(0, Math.min(1, timerSeconds / total));
    circle.style.strokeDashoffset = String(len * (1 - progress));
  }
  const tp = document.getElementById("timerPhase");
  if(tp) tp.textContent = timerPhase;
}

const timerToggleEl = document.getElementById("timerToggle");
if(timerToggleEl){
  timerToggleEl.onclick = function(){
    if(timerRunning) stopTimer();
    else startTimer();
  };
}

const timerResetEl = document.getElementById("timerReset");
if(timerResetEl){
  timerResetEl.onclick = function(){
    stopTimer();
    const ex = currentPlan[currentIndex];
    timerSeconds = ex && ex.timer ? ex.timer : 40;
    timerPhase = "Работа";
    updateTimerDisplay();
  };
}

function startTimer(){
  if(timerRunning) return;
  timerRunning = true;
  const tb = document.getElementById("timerToggle");
  if(tb) tb.textContent = "⏸ Пауза";

  timerInterval = setInterval(function(){
    timerSeconds--;

    if(timerSeconds <= 0){
      const ex = currentPlan[currentIndex];
      if(!ex){ stopTimer(); return; }

      if(timerPhase === "Работа"){
        currentSet++;
        if(currentSet > ex.sets){
          stopTimer();
          const sn = document.getElementById("setNow");
          if(sn) sn.textContent = ex.sets;
          nextExercise();
          return;
        }
        timerPhase = "Отдых";
        timerSeconds = ex.rest;
        beep(880, 200);
        notify("Отдых " + ex.rest + " сек", "Следующий подход: " + ex.name);
      } else {
        timerPhase = "Работа";
        timerSeconds = ex.timer ? ex.timer : 40;
        const sn = document.getElementById("setNow");
        if(sn) sn.textContent = currentSet;
        beep(600, 300);
      }
    }
    updateTimerDisplay();
  }, 1000);
}

function stopTimer(){
  if(timerInterval){ clearInterval(timerInterval); timerInterval = null; }
  timerRunning = false;
  const tb = document.getElementById("timerToggle");
  if(tb) tb.textContent = "▶ Старт";
}

/* ---------- ЗВУК ---------- */
let audioCtx = null;
function beep(freq, ms){
  try{
    if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.frequency.value = freq;
    osc.type = "sine";
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + ms / 1000);
    osc.start();
    osc.stop(audioCtx.currentTime + ms / 1000);
  }catch(e){}
  if(navigator.vibrate) navigator.vibrate(ms);
}

/* ---------- ЗАВЕРШЕНИЕ ---------- */
const finishEarlyEl = document.getElementById("finishEarly");
if(finishEarlyEl){
  finishEarlyEl.onclick = function(){
    if(confirm("Завершить тренировку?")) finishWorkout();
  };
}

function finishWorkout(){
  stopTimer();
  if(!session) return;

  const durationMin = Math.max(1, Math.round((Date.now() - session.startedAt) / 60000));
  const kcal = calcCalories(currentPlan, durationMin, profile.weight);

  session.duration = durationMin;
  session.kcal = kcal;

  const ec = document.getElementById("rExerciseCount");
  if(ec) ec.textContent = currentPlan.length + " упражнений";
  const rk = document.getElementById("rKcal");
  if(rk) rk.textContent = kcal;
  const rd = document.getElementById("rDuration");
  if(rd) rd.textContent = durationMin;
  const rw = document.getElementById("rWeight");
  if(rw) rw.value = profile.weight;

  historyStack = ["home"];
  show("result");
}

const saveResultEl = document.getElementById("saveResultBtn");
if(saveResultEl){
  saveResultEl.onclick = function(){
    if(!session) return;

    const w = readNum("rWeight");
    if(w && w > 20){
      profile.weight = w;
      DB.set("profile", profile);
      stats.weights.push({date: new Date().toISOString(), weight: w});
    }

    stats.workouts.push({
      date: new Date().toISOString(),
      title: session.title,
      duration: session.duration,
      kcal: session.kcal,
      exercises: session.plan
    });
    DB.set("stats", stats);

    const savedKcal = session.kcal;
    session = null;

    historyStack = [];
    show("home");
    renderHome();
    notify("Тренировка сохранена 💪", "Сожжено " + savedKcal + " ккал");
  };
}

const goHomeEl = document.getElementById("goHomeBtn");
if(goHomeEl){
  goHomeEl.onclick = function(){
    session = null;
    historyStack = [];
    show("home");
    renderHome();
  };
}

/* ---------- ОТЧЁТЫ ---------- */
function renderWeeklyReport(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;

  const weekAgo = Date.now() - 7 * 24 * 3600 * 1000;
  const thisWeek = stats.workouts.filter(function(w){
    return new Date(w.date).getTime() >= weekAgo;
  });

  let kcal = 0, mins = 0;
  thisWeek.forEach(function(w){ kcal += w.kcal; mins += w.duration; });

  const ws = stats.weights.slice().sort(function(a,b){ return new Date(a.date) - new Date(b.date); });
  const weekWeights = ws.filter(function(w){ return new Date(w.date).getTime() >= weekAgo; });

  let deltaTxt = "нет данных";
  if(weekWeights.length >= 2){
    const d = weekWeights[weekWeights.length - 1].weight - weekWeights[0].weight;
    deltaTxt = (d > 0 ? "+" : "") + d.toFixed(1) + " кг";
  } else if(ws.length >= 1 && profile){
    const d = profile.weight - ws[0].weight;
    deltaTxt = (d > 0 ? "+" : "") + d.toFixed(1) + " кг";
  }

  const toGoal = profile ? (profile.weight - profile.targetWeight).toFixed(1) : "—";

  el.innerHTML =
    '<div class="report-big">' + kcal + ' ккал</div>' +
    '<div class="report-cap">сожжено за последние 7 дней</div>' +
    '<div class="list-row"><span>Тренировок за неделю</span><span class="lr-val">' + thisWeek.length + '</span></div>' +
    '<div class="list-row"><span>Общее время</span><span class="lr-val">' + mins + ' мин</span></div>' +
    '<div class="list-row"><span>Изменение веса</span><span class="lr-val">' + deltaTxt + '</span></div>' +
    '<div class="list-row"><span>До цели осталось</span><span class="lr-val">' + Math.abs(toGoal) + ' кг</span></div>' +
    '<div class="list-row"><span>Цель на неделю</span><span class="lr-val">' + (profile ? profile.days + " тренировки" : "—") + '</span></div>';
}

function renderProgress(){
  renderWeeklyReport("progressReport");

  const hl = document.getElementById("historyList");
  if(hl){
    hl.innerHTML = "";
    const recent = stats.workouts.slice().reverse().slice(0, 15);
    if(recent.length === 0){
      hl.innerHTML = '<p class="muted center">Пока нет тренировок</p>';
    }
    recent.forEach(function(w){
      const d = new Date(w.date);
      const dateStr = d.toLocaleDateString("ru-RU", {day:"2-digit", month:"short"}) + " " +
                      d.toLocaleTimeString("ru-RU", {hour:"2-digit", minute:"2-digit"});
      const row = document.createElement("div");
      row.className = "list-row";
      row.innerHTML =
        '<div><div>' + w.title + '</div>' +
        '<div class="lr-sub">' + dateStr + ' · ' + w.duration + ' мин</div></div>' +
        '<div class="lr-val">' + w.kcal + ' ккал</div>';
      hl.appendChild(row);
    });
  }

  const wl = document.getElementById("weightList");
  if(wl){
    wl.innerHTML = "";
    const ws = stats.weights.slice().reverse().slice(0, 15);
    if(ws.length === 0){
      wl.innerHTML = '<p class="muted center">Пока нет записей</p>';
    }
    ws.forEach(function(w){
      const d = new Date(w.date);
      const row = document.createElement("div");
      row.className = "list-row";
      row.innerHTML =
        '<div>' + d.toLocaleDateString("ru-RU", {day:"2-digit", month:"long", year:"numeric"}) + '</div>' +
        '<div class="lr-val">' + w.weight + ' кг</div>';
      wl.appendChild(row);
    });
  }
}

/* ---------- НАСТРОЙКИ ---------- */
function renderSettings(){
  if(!profile) return;

  const set = function(id, val){
    const el = document.getElementById(id);
    if(el) el.value = val;
  };

  set("stName", profile.name);
  set("stAge", profile.age);
  set("stHeight", profile.height);
  set("stGender", profile.gender);
  set("stIntensity", profile.intensity);
  set("stTargetWeight", profile.targetWeight);
  set("stWeeks", profile.weeks);
  set("stApiKey", apiKey);
  set("stReminderTime", reminder.time);

  const gWrap = document.getElementById("settingsGoals");
  if(gWrap){
    gWrap.innerHTML = "";
    Object.keys(GOAL_LABELS).forEach(function(g){
      const b = document.createElement("button");
      b.className = "chip" + (profile.goals.indexOf(g) !== -1 ? " selected" : "");
      b.textContent = GOAL_ICONS[g] + " " + GOAL_LABELS[g];
      b.onclick = function(){
        if(profile.goals.indexOf(g) !== -1){
          if(profile.goals.length === 1) return;
          profile.goals = profile.goals.filter(function(x){ return x !== g; });
          b.classList.remove("selected");
        } else {
          profile.goals.push(g);
          b.classList.add("selected");
        }
      };
      gWrap.appendChild(b);
    });
  }

  const dayChips = document.querySelectorAll("#reminderDays .chip");
  for(let i = 0; i < dayChips.length; i++){
    dayChips[i].classList.toggle("selected", reminder.days.indexOf(Number(dayChips[i].dataset.day)) !== -1);
  }

  updateNotifStatus();
}

const saveSettingsEl = document.getElementById("saveSettings");
if(saveSettingsEl){
  saveSettingsEl.onclick = function(){
    profile.name = (document.getElementById("stName").value.trim() || profile.name);
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
}

const dayChipEls = document.querySelectorAll("#reminderDays .chip");
for(let i = 0; i < dayChipEls.length; i++){
  dayChipEls[i].onclick = function(){
    const d = Number(dayChipEls[i].dataset.day);
    if(reminder.days.indexOf(d) !== -1) reminder.days = reminder.days.filter(function(x){ return x !== d; });
    else reminder.days.push(d);
    dayChipEls[i].classList.toggle("selected");
    DB.set("reminder", reminder);
  };
}

const stTimeEl = document.getElementById("stReminderTime");
if(stTimeEl){
  stTimeEl.onchange = function(e){
    reminder.time = e.target.value;
    DB.set("reminder", reminder);
  };
}

const resetAppEl = document.getElementById("resetApp");
if(resetAppEl){
  resetAppEl.onclick = function(){
    if(!confirm("Удалить все данные? Это необратимо.")) return;
    DB.del("profile"); DB.del("stats"); DB.del("reminder"); DB.del("apikey");
    location.reload();
  };
}

/* ---------- УВЕДОМЛЕНИЯ ---------- */
function updateNotifStatus(){
  const el = document.getElementById("notifStatus");
  if(!el) return;
  if(!("Notification" in window)){ el.textContent = "Браузер не поддерживает уведомления"; return; }
  const p = Notification.permission;
  el.textContent = p === "granted" ? "✅ Уведомления включены" :
                   p === "denied"  ? "❌ Уведомления запрещены в настройках браузера" :
                                     "Уведомления выключены";
}

const enableNotifEl = document.getElementById("enableNotif");
if(enableNotifEl){
  enableNotifEl.onclick = function(){
    if(!("Notification" in window)){ alert("Браузер не поддерживает уведомления"); return; }
    Notification.requestPermission().then(function(p){
      if(p === "granted"){
        reminder.enabled = true;
        DB.set("reminder", reminder);
        notify("Уведомления включены 🔔", "Напомним о тренировке в " + reminder.time);
        scheduleReminder();
      }
      updateNotifStatus();
    });
  };
}

function notify(title, body){
  try{
    if(!("Notification" in window) || Notification.permission !== "granted") return;
    if(navigator.serviceWorker && navigator.serviceWorker.controller){
      navigator.serviceWorker.ready.then(function(reg){
        reg.showNotification(title, {
          body: body,
          vibrate: [200,100,200],
          tag: "fitapp"
        });
      });
    } else {
      new Notification(title, {body: body});
    }
  }catch(e){}
}

let reminderTimer = null;
function scheduleReminder(){
  if(reminderTimer){ clearTimeout(reminderTimer); reminderTimer = null; }
  if(!reminder.enabled) return;

  const parts = reminder.time.split(":");
  const h = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);

  const now = new Date();
  const target = new Date();
  target.setHours(h, m, 0, 0);
  if(target <= now) target.setDate(target.getDate() + 1);

  const ms = target - now;
  reminderTimer = setTimeout(function(){
    if(reminder.days.indexOf(new Date().getDay()) !== -1){
      notify("Пора тренироваться! 💪", "Сегодня по плану занятие. Откройте приложение.");
    }
    scheduleReminder();
  }, ms);
}

/* ---------- ИИ-АССИСТЕНТ ---------- */
const SYSTEM_PROMPT =
  "Ты — фитнес-ассистент в приложении для домашних тренировок. " +
  "Отвечай кратко, дружелюбно, на русском языке. " +
  "Пользователь занимается без специального оборудования. " +
  "Если вопрос про боль или здоровье — советуй обратиться к врачу. " +
  "Не назначай медицинские препараты и экстремальные диеты.";

function addMsg(text, cls){
  const wrap = document.getElementById("chatWrap");
  if(!wrap) return null;
  const div = document.createElement("div");
  div.className = "msg " + cls;
  div.textContent = text;
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
  return div;
}

function askGemini(question){
  if(!apiKey){
    addMsg("Чтобы включить ИИ, добавьте ключ Gemini в разделе «Профиль». Ключ бесплатный: aistudio.google.com/apikey", "bot");
    return;
  }

  const typing = addMsg("печатает...", "bot typing");

  const userContext = profile
    ? "Пользователь: " + profile.name + ", " + profile.age + " лет, рост " + profile.height +
      " см, вес " + profile.weight + " кг. Цели: " +
      profile.goals.map(function(g){ return GOAL_LABELS[g]; }).join(", ") +
      ". Интенсивность: " + INTENSITY[profile.intensity].label +
      ". Целевой вес: " + profile.targetWeight + " кг за " + profile.weeks + " недель."
    : "";

  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + apiKey;

  fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      systemInstruction: {parts: [{text: SYSTEM_PROMPT}]},
      contents: [{parts: [{text: userContext + "\n\nВопрос: " + question}]}],
      generationConfig: {temperature: 0.7, maxOutputTokens: 800}
    })
  })
  .then(function(res){
    if(!res.ok){
      return res.text().then(function(t){
        throw new Error("HTTP " + res.status + ": " + t.slice(0, 200));
      });
    }
    return res.json();
  })
  .then(function(data){
    let answer = "Не удалось получить ответ.";
    try{
      answer = data.candidates[0].content.parts[0].text;
    }catch(e){}
    if(typing) typing.remove();
    addMsg(answer, "bot");
  })
  .catch(function(e){
    if(typing) typing.remove();
    addMsg("Ошибка: " + e.message + "\n\nПроверьте ключ в разделе «Профиль».", "bot");
  });
}

const chatSendEl = document.getElementById("chatSend");
if(chatSendEl){
  chatSendEl.onclick = function(){
    const input = document.getElementById("chatInput");
    if(!input) return;
    const q = input.value.trim();
    if(!q) return;
    addMsg(q, "user");
    input.value = "";
    askGemini(q);
  };
}

const chatInputEl = document.getElementById("chatInput");
if(chatInputEl){
  chatInputEl.addEventListener("keydown", function(e){
    if(e.key === "Enter" && chatSendEl) chatSendEl.click();
  });
}

const hintChips = document.querySelectorAll(".chat-hints .chip");
for(let i = 0; i < hintChips.length; i++){
  hintChips[i].onclick = function(){
    const input = document.getElementById("chatInput");
    if(!input) return;
    input.value = hintChips[i].textContent;
    if(chatSendEl) chatSendEl.click();
  };
}

/* ---------- SERVICE WORKER ---------- */
if("serviceWorker" in navigator){
  window.addEventListener("load", function(){
    navigator.serviceWorker.register("sw.js").catch(function(){});
  });
}

/* ---------- СТАРТ ---------- */
function hideSplash(){
  const s = document.getElementById("splash");
  if(s) s.classList.add("hide");
}

window.addEventListener("error", function(e){
  console.error("Ошибка приложения:", e.message);
  hideSplash();
});

window.addEventListener("load", function(){
  setTimeout(hideSplash, 400);

  try{
    if(profile && profile.goals && profile.goals.length){
      historyStack = [];
      show("home");
      renderHome();
      scheduleReminder();
    } else {
      show("onboarding");
      renderOnbStep();
    }
  }catch(err){
    console.error("Ошибка запуска:", err);
    const s = document.getElementById("splash");
    if(s){
      s.classList.remove("hide");
      s.innerHTML = '<div class="logo">⚠️</div>' +
        '<p class="splash-sub">Ошибка: ' + err.message + '</p>' +
        '<button class="btn btn-primary" onclick="localStorage.clear();location.reload()">Сбросить данные</button>';
    }
  }
});
