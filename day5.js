function getDay5() {
  return {
    key: "Day5\n1/20 三",
    date: "2027-01-20",
    fullTitle: "Day 5(三): teamLab",
    caption: "1/20 (三)｜teamLab",
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
      ${btn("📍 teamLab Biovortex Kyoto", "teamLab Biovortex Kyoto", "walking")}
      <hr>

      <div class="subheader">3️⃣ 車站附近吃/逛</div>
      <ul>
        <li>Porta地下街:伴手禮、餐廳</li>
        <li>JR京都伊勢丹:精品、美妝</li>
      </ul>
      <div class="cols">
        <div class="col">${btn("📍 Porta地下街", "京都Porta", "walking")}</div>
        <div class="col">${btn("📍 伊勢丹", "ジェイアール京都伊勢丹", "walking")}</div>
      </div
      <hr>

      <div class="subheader">4️⃣ 22 PIECES</div>
      <ul>
      </ul>
      ${btn("🏠 22 PIECES", "22 PIECES Kyoto", "transit")}
      ${showFoodTable("京都飯店-吃")}
      ${showFoodTable("京都飯店-逛")}
    `
  };
}
