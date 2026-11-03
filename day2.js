function getDay2() {
  return {
    key: "Day2\n1/17 日",
    date: "2027-01-17",
    fullTitle: "Day 2(日): 宇治 & 任天堂博物館 & 河原町",
    caption: "1/17｜任天堂 15:30 場",
    html: `
      <div class="subheader">1️⃣ 京都站 → 宇治</div>
      <ul>
        <li><strong>09:15</strong> 京都站 JR 奈良線 → <strong>宇治</strong>（約 20-25 分，¥240，IC 卡直接刷）</li>
      </ul>
      ${btn("🚃 JR 宇治站", "JR Uji Station", "transit")}
      <hr>

      <div class="subheader">2️⃣ 平等院鳳凰堂</div>
      <ul>
        <li><strong>10:00</strong> 從 JR 宇治站走約 10 分，10 円硬幣上的那棟，冬天人少</li>
        <li>鳳凰堂內部要另外買時段票</li>
      </ul>
      ${btn("📍 平等院", "Byodoin Temple", "walking")}
      <hr>

      <div class="subheader">3️⃣ 中村藤吉 平等院店</div>
      <ul>
        <li><strong>11:30</strong> 抹茶蕎麥麵、抹茶果凍、抹茶聖代</li>
        <li>先到店登記候位再去逛</li>
      </ul>
      ${btn("📍 中村藤吉 平等院店", "34.891509646318, 135.80624121683988", "walking")}
      ${showFoodTable("宇治")}
      <hr>

      <div class="subheader">4️⃣ 宇治橋 → 宇治上神社</div>
      <ul>
        <li><strong>13:00</strong> 從平等院走表參道 → <strong>宇治橋</strong>（紫式部像）→ 過橋走 10 分 → <strong>宇治上神社</strong></li>
        <li>小孩累了宇治上神社跳過，回程在 JR 宇治站前商店街買抹茶伴手禮</li>
      </ul>
      ${btn("📍 宇治上神社", "Ujigami Shrine", "walking")}
      <hr>

      <div class="subheader">5️⃣ 宇治 → JR 小倉 → 任天堂博物館</div>
      <ul>
        <li><strong>14:20</strong> JR 宇治站 → <strong>JR 小倉</strong>（奈良線往奈良方向，1 站約 4 分）→ 北出口走約 8 分</li>
        <li><strong>15:10</strong> 到門口，<strong>15:30 時段</strong>入館（勿遲到）；入館前可免費寄物，先上廁所</li>
      </ul>
      ${btn("🚃 JR 小倉站", "JR Ogura Station Uji", "transit")}
      <hr>

      <div class="subheader">6️⃣ 任天堂博物館</div>
      <ul>
        <li><strong>15:30</strong> 入館；<strong>20:00 閉館</strong>，沒有退場時間限制</li>
        <li><strong>入館證</strong>：入口核對證件，姓名要跟護照一致</li>
        <li><strong>體驗區</strong>：每人 10 枚硬幣，大型控制器、花札等每項扣幣</li>
        <li><strong>花札工房</strong>：另付費、約 1 小時，進館先看還有沒有場次</li>
        <li><strong>晚餐二選一</strong>：館內 <strong>HATENA BURGER</strong>（18:00 前後吃），或出館後到河原町吃</li>
        <li><strong>紀念品</strong>：館內限定，最後再逛</li>
      </ul>
      ${btn("📍 任天堂博物館", "Nintendo Museum", "walking")}
      <hr>

      <div class="subheader">7️⃣ 河原町</div>
      <ul>
        <li><strong>20:00 關</strong>：Nintendo KYOTO、寶可夢中心、Sanrio Gallery、京都BAL（無印良品）</li>
        <li><strong>21:00 關</strong>：Kiddy Land、ミーナ京都（UNIQLO／GU／Loft）、扭蛋百貨、河原町ガーデン；唐吉訶德約 01:00、松本清 23:00、Cocokara 22:45</li>
      </ul>
      <ul>
        <li><strong>走法</strong></li>
        <li>① <strong>四條河原町交叉口</strong>：京都河原町ガーデン（B1 扭蛋百貨、7F 北極星）→ 高島屋 7F Nintendo KYOTO、B1 食品館</li>
        <li>② <strong>河原町通往北</strong>：Kiddy Land → 唐吉訶德 → ROUND1（給小孩放電）→ 三條口：ミーナ京都（UNIQLO B1-3F、GU 7F、Loft）、京都BAL（無印良品）</li>
        <li>③ <strong>新京極</strong>（有屋頂，從三條北口往南走回四條通）：Village Vanguard（2F，同棟 B1 DAISO）、扭蛋、遊戲中心 → 南口一帶：Sanrio Gallery、Cocokara</li>
        <li>④ <strong>四條通往西</strong>：大丸京都店 → 四条烏丸 SUINA 室町 4F 寶可夢中心 → 地鐵四条駅</li>
        <li>走 B（先到四条）就把順序反過來：④ → ③ → ② → ①，最後從河原町搭計程車，或阪急河原町 → 烏丸（1 站）接地鐵四条駅</li>
        <li>🍽 <strong>20:00 後還開的</strong>：京都勝牛 23:00、ここやねん 23:30、大眾鮨 23:00、珍遊 23:00、かつだ 22:00、海老天丼 徳 22:00；Smart Coffee、Inoda、Hanon、おめん 已關</li>
        <li>全部走完約 2 小時，體力不夠挑 2-3 區 ＋ 一餐就好</li>
      </ul>
      ${btn("🚃 近鉄 小倉站", "Kintetsu Ogura Station Uji", "transit")}
      ${btn("📍 河原町", "35.00366275389363, 135.76729476517036", "transit")}
      ${showFoodTable("河原町-吃")}
      ${showFoodTable("河原町-逛")}
      <hr>

      <div class="subheader">8️⃣ 回 22 PIECES</div>
      <ul>
        <li>河原町逛完：走到 <strong>四条駅</strong> 搭地鐵烏丸線 → 京都站（2 站約 5 分）→ 走回飯店；累了就從四條河原町搭計程車（約 15 分，4 人分攤跟地鐵差不多）</li>
        <li>今天沒去河原町：JR 小倉 → 京都站（快速 21 分、普通 26 分，¥310）直接回</li>
        <li>🍽 晚餐若還沒吃：京都站 Porta 11F かつくら、京都拉麵小路（22:00 關）</li>
        <li>唐吉訶德（AVANTI）開到 24:00，宵夜、明天山上要用的飲料零食可以順便買</li>
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
