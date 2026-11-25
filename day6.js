function getDay6() {
  return {
    key: "Day6\n1/21 四",
    date: "2027-01-21",
    fullTitle: "Day 6(四): 河源町 & 大阪",
    caption: "1/21 (四)｜京都 → 環球影城 ",
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
      ${btn("SUINA室町", "35.003523277790606, 135.75844735896658", "walking")}
      <hr>
      
      <div class="subheader">3️⃣ HARBS午餐(大丸3F) </div>
      <ul>
        <li>義大利麵、水果千層</li>
      </ul>
      ${btn("大丸京都店", "35.00377711981995, 135.7617190264002", "walking")}
      <hr>

      <div class="subheader">2️⃣ 高島屋 </div>
      <ul>
        <li><strong>高島屋</strong>：7F:任天堂、B1:抹茶粉(丸久／一保堂)</li>
        <li><strong>京都河原町花園</strong>：B1 扭蛋百貨</li>
      </ul>
      <div class="cols">
        <div class="col">${btn("高島屋", "35.003651800889465, 135.76908716520896", "transit")}</div>
        <div class="col">${btn("河原町花園", "35.003596192017824, 135.7695664437894", "transit")}</div>
      </div>
      <hr>

      <div class="subheader">1️⃣ 京都 → 環球城飯店</div>
      <ul>
        <li><strong>京都 → 大阪</strong>：JR 新快速（約29分）</li>
        <li><strong>大阪 → 西九条</strong>：轉環狀線 <strong>1 號月台</strong>（約 5 分；直通櫻島免換車）</li>
        <li><strong>西九条 → USJ</strong>：4 號下車 → <strong>對面 3 號月台</strong>夢咲線（約 5 分，出站即飯店）</li>
      </ul>

      <details class="expander">
        <summary>🚆 京都 → 大阪 時刻表（15:00～17:00）</summary>
        <div class="expander-body">
          <div class="caption" style="margin-bottom:6px;">
            🔗 <a href="這裡貼上官網時刻表網址" target="_blank" rel="noopener noreferrer">JR 西日本官網時刻表</a>
          </div>
          <table class="food-table">
            <thead>
              <tr>
                <th style="width:22%;">時間</th>
                <th style="width:28%;">車種</th>
                <th style="width:18%;">月台</th>
                <th style="width:32%;">座位</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>14:00</td><td>新快速</td><td>5號</td><td>免（刷卡）</td></tr>
              <tr><td>14:15</td><td>新快速</td><td>5號</td><td>免（刷卡）</td></tr>
              <tr><td>14:30</td><td>新快速</td><td>5號</td><td>免（刷卡）</td></tr>
              <tr><td>14:45</td><td>新快速</td><td>5號</td><td>免（刷卡）</td></tr>
              <tr><td>15:00</td><td>新快速</td><td>5號</td><td>免（刷卡）</td></tr>
              <tr><td>15:15</td><td>新快速</td><td>5號</td><td>免（刷卡）</td></tr>
              <tr><td>15:30</td><td>新快速</td><td>5號</td><td>免（刷卡）</td></tr>
              <tr><td>15:45</td><td>新快速</td><td>5號</td><td>免（刷卡）</td></tr>
              <tr><td>16:00</td><td>新快速</td><td>5號</td><td>免（刷卡）</td></tr>
              <tr><td>16:15</td><td>新快速</td><td>5號</td><td>免（刷卡）</td></tr>
              <tr><td>16:30</td><td>新快速</td><td>5號</td><td>免（刷卡）</td></tr>
              <tr><td>16:45</td><td>新快速</td><td>5號</td><td>免（刷卡）</td></tr>
            </tbody>
          </table>
        </div>
      </details>

      ${btn("🏨 導航：京阪環球影城塔樓", "Hotel Keihan Universal Tower", "transit")}
      <hr>

      <div class="subheader">3️⃣ 京阪環球影城塔樓</div>
      <ul>
        <li><strong>15:00</strong> 後入住</li>
        <li>🍽 晚餐：<strong>Universal Citywalk</strong>（飯店旁，たこ焼きミュージアム、各式餐廳）</li>
      </ul>
      ${btn("🏨 導航：京阪環球影城塔樓", "Hotel Keihan Universal Tower", "transit")}
      ${showFoodTable("環球城")}

      <div class="alert alert-info">
        <p>💡 提醒：明天環球影城</p>
        <ul>
          <li>再看一次環球 App：<strong>區域入場整理券</strong> 怎麼抽</li>
          <li>早餐先買好</li>
          <li>明天穿：保暖＋好走的鞋，園內風大</li>
        </ul>
      </div>
    `
  };
}
