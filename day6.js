function getDay6() {
  return {
    key: "Day6\n1/21 四",
    date: "2027-01-21",
    fullTitle: "Day 6(四): 移動 & 大阪",
    caption: "1/21 (四)｜退房 → 環球城 → 大阪半天",
    html: `
      <div class="subheader">1️⃣ 退房 → 京阪環球影城塔樓</div>
      <ul>
        <li><strong>10:00</strong> 退房 → 走到京都站</li>
        <li><strong>JR 新快速</strong> → 大阪（約 30 分）→ 環狀線 → <strong>西九条</strong> 轉 <strong>夢咲線</strong> → <strong>11:30</strong> 環球城</li>
        <li>⚠️ 西九条換車：下車走到 1 號月台（夢咲線），3-5 分</li>
        <li>帶行李用電梯，京都站中央口 → JR 剪票口有電梯</li>
        <li>環球城站出來就是飯店，先寄行李（15:00 後入住）</li>
      </ul>
      ${btn("🏨 導航：京阪環球影城塔樓", "Hotel Keihan Universal Tower", "transit")}
      <hr>

      <div class="subheader">2️⃣ 二選一｜A 梅田採買</div>
      <ul>
        <li>環球城 → 西九条 → <strong>大阪站</strong></li>
        <li><strong>LINKS UMEDA</strong>（Yodobashi 那棟）：1-2F <strong>UNIQLO UMEDA</strong> 、3F <strong>GU</strong>、8F 餐廳街</li>
        <li><strong>Grand Front 大阪</strong>：北館 2-4F <strong>無印良品</strong> 、南館 5F <strong>mont-bell</strong></li>
        <li><strong>大丸梅田 13F</strong>：Nintendo OSAKA ＋ 寶可夢中心 DX</li>
        <li><strong>18:00</strong> 回環球城</li>
      </ul>
      <div class="cols">
        <div class="col">${btn("🛍️ LINKS UQ/GU", "UNIQLO UMEDA LINKS UMEDA", "transit")}</div>
        <div class="col">${btn("🛍️ GF MUJI/mont-bell", "MUJI Grand Front Osaka", "walking")}</div>
        <div class="col">${btn("🛍️ 大丸13F", "Daimaru Umeda", "walking")}</div>
      </div>
      ${showFoodTable("梅田")}
      <hr>

      <div class="subheader">2️⃣ 二選一｜B 海遊館（親子）</div>
      <ul>
        <li>環球城碼頭搭 <strong>Captain Line</strong> 船 10 分 → 海遊館</li>
        <li><strong>海遊館</strong>：鯨鯊、太平洋大水槽，2hr</li>
        <li>○ 天保山摩天輪</li>
        <li>船回環球城</li>
      </ul>
      <div class="cols">
        <div class="col">${btn("🚶 導航：Captain Line 環球城碼頭", "Captain Line Universal City Port", "transit")}</div>
        <div class="col">${btn("📍 導航：海遊館", "Osaka Aquarium Kaiyukan", "walking")}</div>
      </div>
      ${showFoodTable("海遊館")}
      <hr>

      <div class="subheader">3️⃣ 京阪環球影城塔樓 → 晚餐</div>
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
