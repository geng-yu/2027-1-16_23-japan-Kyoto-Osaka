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

      <div class="subheader">1️⃣ 關空 → Haruka(75分)→ 京都</div>
      <ul>
        <li><strong>14:45</strong> 落地</li>
        <li><a href="https://guest-ui.west-qr.com/#/" target="_blank" rel="noopener noreferrer">WEST QR 劃位</a></li>
        <li>買ICOCA(兒童)、便利商店買食物</li>
      </ul>
      ${btn("🚆JR 關西機場站 (Haruka 月台)", "Kansai-Airport Station JR", "walking")}
      
      <hr>

      <div class="subheader">2️⃣ 京都站 → 22 PIECES</div>
      <ul>
        <li>走路到飯店</li>
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
