function getDay6() {
  return {
    key: "Day6\n1/21 四",
    date: "2027-01-21",
    fullTitle: "Day 6(四): 河源町 & 大阪",
    caption: "1/21 (四)｜京都 → 大阪 ",
    html: `
      <div class="subheader">1️⃣ 退房 + 吃早餐</div>
      <ul>
        <li><strong>09:30</strong> 退房 → 京都站吃早餐</li>
        <li>不要吃太飽，11點HARBS午餐(大丸)</li>
      </ul>
      <div class="cols">
        <div class="col">${btn("麥當勞", "34.98454586015907, 135.76008179227625", "walking")}</div>
        <div class="col">${btn("星乃咖啡", "34.98455235184084, 135.75965338209778", "walking")}</div>
        <div class="col">${btn("CAFFÈ VELOCE", "34.98461196987081, 135.76023978598135", "walking")}</div>
      </div>
      <hr>

      <div class="subheader">2️⃣ 寶可夢中心 </div>
      <ul>
        <li>SUINA室町 2F</li>
      </ul>
      ${btn("📍 SUINA室町", "35.003523277790606, 135.75844735896658", "transit")}
      <hr>
      
      <div class="subheader">3️⃣ 午餐 </div>
      <ul>
        <li>大丸3F:HARBS義大利麵(11:00)、水果千層</li>
        <li>勝田炸豬排</li>
      </ul>
      <div class="cols">
        <div class="col">${btn("📍 大丸HARBS", "35.00375199630685, 135.76197590667567", "walking")}</div>
        <div class="col">${btn("📍 勝田炸豬排", "35.0012868094139, 135.75945203006776", "walking")}</div>
      </div>
      <hr>

      <div class="subheader">4️⃣ 三宅一生 </div>
      <ul>
      ${btn("📍 ISSEY MIYAKE KYOTO", "35.00798544803317, 135.76398716632036", "walking")}
      </ul>
      
      <hr>

      <div class="subheader">5️⃣ UQ旗艦 / GU </div>
      <ul>
      </ul>
      ${btn("📍 UQ / GU", "35.00771979298431, 135.76891052802597", "walking")}
      <hr>

      <div class="subheader">6️⃣ 高島屋 </div>
      <ul>
        <li><strong>高島屋</strong>：7F:任天堂、B1:抹茶粉(丸久／一保堂)</li>
        <li><strong>京都河原町花園</strong>：B1 扭蛋百貨</li>
      </ul>
      <div class="cols">
        <div class="col">${btn("📍 高島屋", "35.003651800889465, 135.76908716520896", "walking")}</div>
        <div class="col">${btn("📍 河原町花園", "35.003596192017824, 135.7695664437894", "walking")}</div>
      </div>
      <hr>

      <div class="subheader">7️⃣ 錦市場</div>
      <ul>
        <li>玉子燒、豆乳甜甜圈、烤麻糬、章魚蛋</li>
        <li>大部分店 18:00 前收</li>
      </ul>
      ${btn("📍 錦市場", "35.00502728663626, 135.767164110694", "walking")}
      ${showFoodTable("錦市場")}
      <hr>
      
      <div class="subheader">8️⃣ 京都 → 環球城飯店</div>
      <ul>
        <li><strong>京都 → 大阪</strong>：JR 新快速(只搭這個)</li>
        <li><strong>大阪 → 西九条 → USJ</strong></li>
      </ul>

     <details class="expander">
        <summary>🚆 京都 → 大阪 時刻表（15:00～18:00）</summary>
        <div class="expander-body">
          <div class="caption" style="margin-bottom:6px;">
            ⚡ 即時查：
            <a href="https://transit.yahoo.co.jp/search/result?from=京都&to=ユニバーサルシティ" target="_blank" rel="noopener noreferrer">京都→USJ</a>｜
            <a href="https://transit.yahoo.co.jp/search/result?from=大阪&to=ユニバーサルシティ" target="_blank" rel="noopener noreferrer">大阪→USJ</a>｜
            <a href="https://transit.yahoo.co.jp/search/result?from=西九条&to=ユニバーサルシティ" target="_blank" rel="noopener noreferrer">西九条→USJ</a>
          </div>
          <table class="food-table">
            <thead>
              <tr>
                <th style="width:30%;">時間</th>
                <th style="width:70%;">車種</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>15:00</td><td>新快速（姫路）</td></tr>
              <tr><td>15:15</td><td>新快速（姫路）</td></tr>
              <tr><td>15:30</td><td>新快速（播州赤穂）</td></tr>
              <tr><td>15:45</td><td>新快速（姫路）</td></tr>
              <tr><td>16:00</td><td>新快速（姫路）</td></tr>
              <tr><td>16:15</td><td>新快速（播州赤穂）</td></tr>
              <tr><td>16:29</td><td>新快速（姫路）</td></tr>
              <tr><td>16:44</td><td>新快速（播州赤穂）</td></tr>
              <tr><td>16:59</td><td>新快速（姫路）</td></tr>
              <tr><td>17:14</td><td>新快速（播州赤穂）</td></tr>
              <tr><td>17:29</td><td>新快速（姫路）</td></tr>
              <tr><td>17:44</td><td>新快速（姫路）</td></tr>
            </tbody>
          </table>
        </div>
      </details>
      <hr>
      ${btn("🏨 京阪環球影城塔樓", "Hotel Keihan Universal Tower", "transit")}
      <ul>
        <li><strong>15:00</strong> 後入住</li>
        <li>🍽 晚餐：<strong>Universal Citywalk</strong>（章魚燒廣場、餐廳）</li>
      </ul>
      ${showFoodTable("環球城")}
      <div class="alert alert-info">
        <p>💡 提醒：明天環球影城</p>
        <ul>
          <li>早餐買好，飯店吃</li>
        </ul>
      </div>
    `
  };
}
