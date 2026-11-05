function getDay5() {
  return {
    key: "Day5\n1/20 三",
    date: "2027-01-20",
    fullTitle: "Day 5(三): teamLab & 鬧區",
    caption: "1/20 (三)｜teamLab → 鬧區",
    html: `
      <div class="subheader">1️⃣ 還車</div>
      <ul>
        <li><strong>07:45</strong> 還車（先加滿油、拿走 ETC 明細）</li>
      </ul>
      ${btn("⛽ 加油站(24H)", "34.97324984490103, 135.74648147860697", "driving")}
      ${btn("🚶 NISSAN Rent A Car Kyoto", "34.984459129730546, 135.7547459938482", "driving")}
      <hr>

      <div class="subheader">2️⃣ 早餐</div>
      <ul>
        <li><strong>09:00</strong> 車站吃</li>
      </ul>
      <div class="cols">
        <div class="col">${btn("麥當勞", "34.98454586015907, 135.76008179227625", "walking")}</div>
        <div class="col">${btn("星乃咖啡", "34.98455235184084, 135.75965338209778", "walking")}</div>
        <div class="col">${btn("CAFFÈ VELOCE", "34.98461196987081, 135.76023978598135", "walking")}</div>
      </div>
      <hr>

      <div class="subheader">3️⃣ teamLab Biovortex Kyoto</div>
      <ul>
        <li>地鐵 <strong>九條站</strong> 出站走約 10 分（京都站八條口走 7 分、JR／京阪 <strong>東福寺站</strong> 走 8 分也到）</li>
        <li><strong>11:00</strong> 場（提前買時段票），館內 2.5-3hr，像迷宮沒有順路，<strong>先裝官方 App</strong> 看地圖免得漏</li>
        <li>票 大人 ¥3,800~（浮動）、小學生約 ¥1,200-1,500</li>
      </ul>
      ${btn("🚶 導航：teamLab Biovortex Kyoto", "teamLab Biovortex Kyoto", "walking")}
      ${showFoodTable("teamLab周邊")}
      <hr>

      <div class="subheader">4️⃣ 錦市場</div>
      <ul>
        <li><strong>14:00</strong> 走回 <strong>九條站</strong> → 烏丸線 3 站 → <strong>四條站</strong> → 走 10 分</li>
        <li>玉子燒、豆乳甜甜圈、烤麻糬、章魚蛋，邊走邊吃當午餐</li>
        <li>大部分店 18:00 前收</li>
      </ul>
      ${btn("🚃 導航：錦市場", "Nishiki Market", "transit")}
      ${showFoodTable("錦市場")}
      <hr>

      <div class="subheader">5️⃣ 新京極、寺町通</div>
      <ul>
        <li>錦市場東口出來就是，兩條平行的商店街</li>
        <li>扭蛋、文具、藥妝</li>
      </ul>
      ${btn("📍 導航：新京極商店街", "Shinkyogoku Shopping Street", "walking")}
      ${showFoodTable("新京極寺町")}
      <hr>

      <div class="subheader">6️⃣ Nintendo KYOTO ＋ 寶可夢中心</div>
      <ul>
        <li><strong>Nintendo KYOTO</strong>：京都高島屋 S.C.（T8）<strong>7F</strong>，四條河原町</li>
        <li><strong>寶可夢中心京都</strong>：SUINA 室町 <strong>4F</strong>，四條烏丸站直結</li>
        <li>兩間走路 10 分，先 Nintendo 再寶可夢（回程順路到烏丸站）</li>
      </ul>
      <div class="cols">
        <div class="col">${btn("📍 導航：Nintendo KYOTO", "Nintendo KYOTO", "walking")}</div>
        <div class="col">${btn("📍 導航：寶可夢中心京都", "Pokemon Center Kyoto", "walking")}</div>
      </div>
      ${showFoodTable("四條河原町")}
      <hr>

      <div class="subheader">7️⃣ 二條城 → 鴨川散步(備)</div>
      <ul>
        <li><strong>○ 二條城</strong>：地鐵烏丸御池 → 二條城前，<strong>16:00 前入城</strong>（二之丸御殿鶯聲地板）</li>
        <li><strong>○ 鴨川</strong>：四條大橋往下走河堤，傍晚 20 分</li>
        <li>🍽 晚餐：河原町</li>
      </ul>
      ${btn("🚃 導航：二條城", "Nijo Castle", "transit")}
      ${showFoodTable("二條城鴨川")}
      <hr>

      <div class="subheader">8️⃣9️⃣ 22 PIECES</div>
      <ul>
        <li>四條站 → 烏丸線 → 京都站，走回飯店</li>
      </ul>
      ${btn("🏠 導航：22 PIECES", "22 PIECES Kyoto", "transit")}
      ${showFoodTable("京都飯店-吃")}
      ${showFoodTable("京都飯店-逛")}
    `
  };
}
