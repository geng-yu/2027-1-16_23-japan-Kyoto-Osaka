function getDay1() {
  return {
    key: "Day1\n1/16 六",
    date: "2027-01-16",
    fullTitle: "Day 1(六): 出發 & 京都",
    caption: "1/16",
    html: `
      <div class="border-card">
        <h3>🛫 國泰航空 CX564</h3>
        <div>11:15 TPE 起飛 → 14:45 KIX 抵達</div>
      </div>

      <div class="subheader">1️⃣ 關空 → Haruka</div>
      <ul>
        <li><strong>14:45</strong> 落地 → 入關約 1hr</li>
        <li><strong>15:45</strong> JR 關西機場站 搭 <strong>Haruka</strong>（直達京都約 75 分）</li>
      </ul>
      ${btn("🚶 JR 關西機場站 (Haruka 月台)", "Kansai-Airport Station JR", "walking")}
      <details class="expander">
        <summary>💡 落地要做的事</summary>
        <div class="expander-body">
          <ul>
            <li> <strong>Haruka 劃位</strong> 或用手機 Suica</li>
            <li>買 <strong>ICOCA(兒童)</strong> 或用手機 Suica</li>
            <li>便利商店買水</li>
          </ul>
        </div>
      </details>
      <hr>

      <div class="subheader">2️⃣ 京都站 → 22 PIECES</div>
      <ul>
        <li><strong>17:00</strong> 抵京都站 → 走路到飯店</li>
      </ul>
      ${btn("🏠 22 PIECES", "22 PIECES Kyoto", "walking")}
      <hr>

      <div class="subheader">3️⃣ 晚餐：京都站</div>
      <ul>
        <li><strong>京都拉麵小路</strong>（京都駅ビル 10F）</li>
      </ul>
      ${btn("📍 京都拉麵小路", "Kyoto Ramen Koji", "walking")}
      ${showFoodTable("京都飯店-吃")}
      ${showFoodTable("京都飯店-逛")}
    `
  };
}
