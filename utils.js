function getGmapLink(query, mode = "transit") {
  const baseUrl = "https://www.google.com/maps/dir/?api=1";
  return `${baseUrl}&destination=${query}&travelmode=${mode}`;
}

// 產生 UI 元件輔助函式
function btn(label, query, mode = "transit") {
  return `<a class="link-btn" href="${getGmapLink(query, mode)}" target="_blank" rel="noopener">${label}</a>`;
}

function codeBlock(text) {
  return `
    <div class="code-box">
      <span>${text}</span>
    </div>
  `;
}

function showFoodTable(region) {
  // 相容 day2.py 的「河原町-吃」與「河原町-逛」
  //const aliasMap = {
  //  "河原町-吃": "四條河原町",
  //  "河原町-逛": "新京極寺町"
  //};
  const actualKey = aliasMap[region] || region;
  const rows = DATA_SOURCE[actualKey];
  if (!rows) return "";

  const trs = rows.map(r => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r["店名"])}`;
    const note = r["備註"].replace(/\|/g, "｜");
    return `<tr>
      <td><a href="${url}" target="_blank" rel="noopener">📍 ${r["店名"]}</a></td>
      <td>${r["時間"]}</td>
      <td>${note}</td>
    </tr>`;
  }).join("");

  return `
    <details class="expander">
      <summary>🍽️ ${region} 周邊</summary>
      <div class="expander-body">
        <div class="caption" style="margin-bottom:6px;">營業時間以官網為準，點店名開 Google Maps</div>
        <table class="food-table">
          <thead><tr><th>店名</th><th>時間</th><th>備註</th></tr></thead>
          <tbody>${trs}</tbody>
        </table>
      </div>
    </details>
  `;
}
