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

// 測試用：想模擬特定天數時取消下面註解（0=Day1, 6=Day7），測完記得註解回來
// defaultIndex = 6;

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

// 將指定日期按鈕水平置中於橫向選單（僅捲動選單，不影響整頁垂直捲動）
function scrollNavToCenter(index, smooth = false) {
  const targetBtn = navEl.children[index];
  if (!targetBtn) return;
  const navRect = navEl.getBoundingClientRect();
  const btnRect = targetBtn.getBoundingClientRect();
  const delta =
    (btnRect.left + btnRect.width / 2) - (navRect.left + navRect.width / 2);
  navEl.scrollTo({
    left: Math.max(0, navEl.scrollLeft + delta),
    behavior: smooth ? "smooth" : "auto"
  });
}

// 等瀏覽器完成初次排版後，自動捲動定位到當天按鈕
requestAnimationFrame(() => {
  scrollNavToCenter(defaultIndex, false);
});

function selectDay(index) {
  document.querySelectorAll(".day-option").forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });
  document.querySelectorAll(".day-pane").forEach((el, i) => {
    el.classList.toggle("active", i === index);
  });
  scrollNavToCenter(index, true);
}

// 深淺色模式切換
const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
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
}
