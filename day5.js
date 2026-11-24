function getDay5() {
  return {
    key: "Day5\n1/20 三",
    date: "2027-01-20",
    fullTitle: "Day 5(三): teamLab & 河原町",
    caption: "1/20 (三)｜teamLab → 河原町",
    html: `

      <div class="subheader">1️⃣ 早餐</div>
      <ul>
        <li><strong>09:00</strong> 車站吃</li>
      </ul>
      <div class="cols">
        <div class="col">${btn("麥當勞", "34.98454586015907, 135.76008179227625", "walking")}</div>
        <div class="col">${btn("星乃咖啡", "34.98455235184084, 135.75965338209778", "walking")}</div>
        <div class="col">${btn("CAFFÈ VELOCE", "34.98461196987081, 135.76023978598135", "walking")}</div>
      </div>
      <hr>

      <div class="subheader">2️⃣ teamLab Biovortex Kyoto</div>
      <ul>
        <li><strong>11:00</strong> 場，可裝官方App看地圖</li>
      </ul>
      ${btn("🚶 導航：teamLab Biovortex Kyoto", "teamLab Biovortex Kyoto", "walking")}
      ${showFoodTable("teamLab")}
      <hr>

      <div class="subheader">3️⃣ 錦市場</div>
      <ul>
        <li>走回 <strong>京都站</strong></li>
        <li>玉子燒、豆乳甜甜圈、烤麻糬、章魚蛋</li>
        <li>大部分店 18:00 前收</li>
      </ul>
      ${btn("🚃 導航：錦市場", "Nishiki Market", "transit")}
      ${showFoodTable("錦市場")}
      <hr>

      <div class="subheader">4️⃣ UQ旗艦店</div>
      <ul>
      </ul>
      ${btn("📍 UQ旗艦店", "Mina Kyoto", "walking")}
      ${showFoodTable("新京極寺町")}
      <hr>

      <div class="subheader">5️⃣ Nintendo KYOTO ＋ 寶可夢中心</div>
      <ul>
        <li><strong>Nintendo KYOTO</strong>：京都高島屋 S.C.（T8）<strong>7F</strong></li>
        <li><strong>寶可夢中心京都</strong>：SUINA 室町 <strong>4F</strong></li>
        <li>先 Nintendo 再寶可夢（回程順路到烏丸站）</li>
      </ul>
      <div class="cols">
        <div class="col">${btn("📍 導航：Nintendo KYOTO", "Nintendo KYOTO", "walking")}</div>
        <div class="col">${btn("📍 導航：寶可夢中心京都", "Pokemon Center Kyoto", "walking")}</div>
      </div>
      ${showFoodTable("河原町-吃")}
      ${showFoodTable("河原町-逛")}

      <hr>

      <div class="subheader">6️⃣ 22 PIECES</div>
      <ul>
        <li>四條站 → 烏丸線 → 京都站</li>
      </ul>
      ${btn("🏠 導航：22 PIECES", "22 PIECES Kyoto", "transit")}
      ${showFoodTable("京都飯店-吃")}
      ${showFoodTable("京都飯店-逛")}
    `
  };
}
