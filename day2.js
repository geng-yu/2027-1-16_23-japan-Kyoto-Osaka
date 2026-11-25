function getDay2() {
  return {
    key: "Day2\n1/17 日",
    date: "2027-01-17",
    fullTitle: "Day 2(日): 宇治 & 任天堂博物館 & 河原町",
    caption: "1/17｜任天堂 15:30 場",
    html: `
      <div class="subheader">1️⃣ 京都站 → 宇治</div>
      <ul>
        <li>京都站 JR 奈良線 → 宇治</li>
        <li><strong>9:04(17分)、9:15(22分)、9:27(22分)</strong></li>
        <li><strong>9:34(17分)、9:45(22分)、9:57(22分)</strong></li>
      </ul>
      ${btn("🚃 JR 宇治站", "JR Uji Station", "transit")}
      <hr>

      <div class="subheader">2️⃣ 中村藤吉 本店</div>
      <ul>
      <li>人太多去 平等院店</li>
      </ul>
      <div class="cols">
        <div class="col">${btn("📍 中村藤吉 本店", "34.88950441061812, 135.80175749116992", "walking")}</div>
        <div class="col">${btn("📍 平等院店", "34.891509646318, 135.80624121683988", "walking")}</div>
      </div>
      <hr>

      <div class="subheader">3️⃣ 平等院</div>
      <ul>
        <li>鳳凰堂內部要另外買時段票</li>
      </ul>
      ${btn("📍 平等院", "Byodoin Temple", "walking")}
      <hr>

      <div class="subheader">4️⃣ 宇治上神社</div>
      <ul>
      </ul>
      ${btn("📍 宇治上神社", "Ujigami Shrine", "walking")}
      <hr>

      <div class="subheader">5️⃣ 午餐</div>
      <ul>
      <li>附近吃</li>
      </ul>
      ${showFoodTable("宇治")}
      <hr>

      <div class="subheader">6️⃣ 中村藤吉 本店</div>
      <ul>
      <li>買伴手禮</li>
      </ul>
      ${btn("📍 中村藤吉 本店", "34.88950441061812, 135.80175749116992", "walking")}
      <hr>

      <div class="subheader">7️⃣ 宇治 → JR 小倉 → 任天堂博物館</div>
      <ul>
        <li><strong>14:30集合</strong> (班次 26分/37分/52分/56分)</li>
        <li>JR宇治站(往奈良) → <strong>JR小倉</strong></li>
        <li>計程車約250$</li>
      </ul>
      ${btn("🚃 JR 小倉站", "JR Ogura Station Uji", "transit")}
      <hr>

      <div class="subheader">8️⃣ 任天堂博物館</div>
      <ul>
        <li>入館前可免費寄物，先上廁所</li>
        <li><strong>15:30</strong> 入館；<strong>20:00 閉館</strong></li>
        <li>入館核對護照；體驗區每人10枚硬幣</li>
        <li>晚餐 河原町/京都車站 吃</li>
      </ul>
      ${btn("📍 任天堂博物館", "Nintendo Museum", "walking")}
      <hr>

      <div class="subheader">9️⃣ 河原町</div>
      <ul>
        <li><strong>20:00關</strong>：任天堂、高島屋B1抹茶、無印良品、寶可夢中心</li>
        <li><strong>21:00關</strong>：UNIQLO 旗艦店、GU、大創、大型扭蛋</li>
      </ul>
      <ul>
        <li>① <strong>四條河原町交叉口</strong>：高島屋（7F:任天堂、B1:抹茶粉;丸久／一保堂）→ 河原町ガーデン B1:扭蛋百貨</li>
        <li>② <strong>河原町通往北</strong>：京都BAL 5F:無印良品 → ミーナ京都（B1-3F:UNIQLO 全球旗艦店、7F:GU）</li>
        <li>③ <strong>新京極</strong>：ダイアモンドビル B1:大創 DAISO</li>
        <li>④ <strong>四條通往西</strong>：SUINA 室町 2F:寶可夢中心 → 地鐵四条駅回京都站</li>
      </ul>

      <div class="cols">
        <div class="col">${btn("🚃 近鉄 小倉站", "Kintetsu Ogura Station Uji", "walking")}</div>
        <div class="col">${btn("① 高島屋", "35.003651800889465, 135.76908716520896", "transit")}</div>
      </div>
      <div class="cols">
        <div class="col">${btn("② UQ/無印", "Mina Kyoto", "walking")}</div>
        <div class="col">${btn("③ 新京極", "35.005196585760714, 135.76723684749612", "walking")}</div>
        <div class="col">${btn("④ 寶可夢", "35.003530944564844, 135.75836512425542", "walking")}</div>
      </div>
      ${showFoodTable("河原町-吃")}
      ${showFoodTable("河原町-逛")}
      <hr>

      <div class="subheader">🔟 回 22 PIECES</div>
      <ul>
        <li>唐吉訶德24H，宵夜、明天飲料零食順便買</li>
      </ul>
      ${btn("🏠 22 PIECES", "22 PIECES Kyoto", "transit")}
      ${showFoodTable("京都飯店-吃")}
      ${showFoodTable("京都飯店-逛")}
      <hr>

      <div class="alert alert-info">
        <p>💡 提醒：決定明天是雪日還是舟屋日（明早 08:00 取車）</p>
        <ul>
          <li>看 <strong>琵琶湖山谷官網 TOP 頁</strong> 營業情報（纜車有沒有預告停駛）</li>
          <li>看隔天 <strong>風速</strong> 預報：風小 → 雪日；風大 → 舟屋日</li>
          <li>看 <strong>NEXCO 西日本</strong> 縱貫道路況</li>
        </ul>
      </div>
    `
  };
}
