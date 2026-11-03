const TRIP_DAYS = [
  getDay1(),
  getDay2(),
  getDay3(),
  getDay4(),
  getDay5(),
  getDay6(),
  getDay7(),
  getDay8(),
];

// ==========================================
// 4. 初始化渲染與日本時間自動定位
// ==========================================
const navEl = document.getElementById("dayNav");
const containerEl = document.getElementById("daysContainer");

// 取得日本東京當前日期 (YYYY-MM-DD)
const japanToday = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
}).format(new Date());

let defaultIndex = 0;
TRIP_DAYS.forEach((d, idx) => {
  if (d.date === japanToday) defaultIndex = idx;
});

TRIP_DAYS.forEach((d, idx) => {
  // 建立按鈕
  const btnEl = document.createElement("div");
  btnEl.className = "day-option" + (idx === defaultIndex ? " active" : "");
  btnEl.textContent = d.key;
  btnEl.onclick = () => selectDay(idx);
  navEl.appendChild(btnEl);

  // 建立內容區塊
  const paneEl = document.createElement("div");
  paneEl.className = "day-pane" + (idx === defaultIndex ? " active" : "");
  paneEl.id = `day-pane-${idx}`;
  paneEl.innerHTML = `
    <div class="day-title">${d.fullTitle}</div>
    <div class="caption">${d.caption}</div>
    ${d.html}
  `;
  containerEl.appendChild(paneEl);
});

function selectDay(index) {
  document.querySelectorAll(".day-option").forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });
  document.querySelectorAll(".day-pane").forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });
}

// 深淺色模式切換
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  const root = document.documentElement;
  const current = root.getAttribute("data-theme");
  const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (!current) {
    root.setAttribute("data-theme", isSystemDark ? "light" : "dark");
  } else {
    root.setAttribute("data-theme", current === "dark" ? "light" : "dark");
  }
});
