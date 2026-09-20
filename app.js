/* =========================================================
   ТРЕНАЖЁР — логика приложения
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
     desc:"Из стоя присесть, прыжком в упор лёжа, отжимание, прыжок обратно, выпрыгнуть вверх. Высокая интенсивность."},
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

/* ---------- ИНТЕНСИВНОСТЬ ---------- */
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
let stats    = DB.get("stats", {workouts:[], weights:[], calories:[]});
let reminder = DB.get("reminder", {time:"18:00", days:[1,3,5], enabled:false});
let apiKey   = DB.get("apikey", "");
let currentPlan = [];
let currentIndex = 0;
let session = null;
let selectedPlans = {};

/* ---------- НАВИГАЦИЯ ---------- */
const SCREENS = ["onboarding","home","workout","result","progress","ai","settings"];
let historyStack = [];

function show(name, addToHistory=true){
  SCREENS.forEach(s=>{
    const el = document.getElementById("screen-"+s);
    if(el) el.classList.add("hidden");
  });
  const target = document.getElementById("screen-"+name);
  if(target) target.classList.remove("hidden");

  // кнопка назад и заголовок
  const backBtn = document.getElementById("backBtn");
  if(name==="onboarding" || name==="home"){
    backBtn.style.display = "none";
  } else {
    backBtn.style.display = "block";
  }
  const titles = {onboarding:"Профиль", home:"Главная", workout:"Тренировка",
                  result:"Результат", progress:"Прогресс", ai:"ИИ-ассистент", settings:"Профиль"};
  document.getElementById("pageTitle").textContent = titles[name] || "";

  // нижнее меню
  document.getElementById("bottombar").style.display =
    (name==="onboarding") ? "none" : "flex";

  document.querySelectorAll(".nav-btn").forEach(b=>{
    b.classList.toggle("active", b.dataset.nav===name);
  });

  if(addToHistory && historyStack[historyStack.length-1]!==name){
    historyStack.push(name);
  }
  window.scrollTo({top:0, behavior:"smooth"});
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
    s.classList.toggle("hidden", Number(s.dataset.step)!==onbStep);
  });
  document.querySelectorAll(".dot").forEach((d,i)=>{
    d.classList.toggle("active", i <= onbStep-1);
  });
  document.getElementById("onbPrev").style.visibility = onbStep===1 ? "hidden" : "visible";
  const nextBtn = document.getElementById("onbNext");
  nextBtn.textContent = onbStep===5 ? "Создать профиль" : "Далее";

  if(onbStep===4) updatePlanPreview();
}

document.getElementById("onbPrev").onclick = ()=>{
  if(onbStep>1){ onbStep--; renderOnbStep(); }
};

document.querySelectorAll("#goalChips .chip").forEach(chip=>{
  chip.onclick = ()=>{
    const g = chip.dataset.goal;
    if(onbGoals.includes(g)) onbGoals = onbG
