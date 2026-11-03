function getDay4() {
  return {
    key: "Day4\n1/19 二",
    date: "2027-01-19",
    fullTitle: "Day 4(二): 舟屋日｜天橋立 & 伊根",
    caption: "1/19 (二)｜舟屋日（可與 D3 對調）｜自駕 Day2",
    html: `
      <div class="subheader">1️⃣ 天橋立</div>
      <ul>
        <li><strong>08:00</strong> 出發（京都縱貫道約 2hr）</li>
        <li>○ 道の駅 京丹波 味夢の里（縱貫道中間休息站，廁所、丹波栗、黑豆點心，10 分）</li>
        <li>大雪時縱貫道可能雪鏈管制／封閉，出發前看 NEXCO 西日本，封閉就當天對調成雪日</li>
      </ul>
      <div class="cols">
        <div class="col">${codeBlock("中途休息站MapCode：344 245 245*10")}</div>
        <div class="col">${codeBlock("天橋立MapCode：197 202 313*41")}</div>
      </div>
      <div class="cols">
        <div class="col">${btn("中途休息站🅿️", "35.155487637910184, 135.4151181669732", "driving")}</div>
        <div class="col">${btn("天橋立 View Land🅿️", "35.55598937942707, 135.18432345495142", "driving")}</div>
      </div>
      <hr>

      <div class="subheader">2️⃣ 天橋立 View Land</div>
      <ul>
        <li>搭單軌或吊椅上山，<strong>南側「股間望景」</strong>，山頂有小型遊樂設施，1hr</li>
      </ul>
      ${btn("📍 天橋立 View Land", "Amanohashidate Chairlift and Monorail", "walking")}
      ${showFoodTable("天橋立")}
      <hr>

      <div class="subheader">3️⃣ 智恩寺 → 沙洲騎腳踏車</div>
      <ul>
        <li><strong>智恩寺</strong>（文殊菩薩，門前吃智慧之餅）</li>
        <li><strong>廻旋橋</strong>：智恩寺旁的紅色旋轉橋，有船經過整座轉 90 度</li>
        <li>智恩寺旁租腳踏車，<strong>穿越沙洲單程 20 分</strong>，可在對岸（傘松側）還車</li>
        <li>不騎的話走路單程約 45 分</li>
      </ul>
      ${btn("📍 智恩寺", "Chionji Temple Amanohashidate", "walking")}
      ${showFoodTable("智恩寺沙洲")}
      <hr>

      <div class="subheader">4️⃣ 傘松公園 → 元伊勢籠神社(備)</div>
      <ul>
        <li>沙洲對岸（府中）搭纜車上山，<strong>北側「股間望景」</strong>，30分</li>
        <li><strong>かわらけ投げ</strong>：山頂把小陶盤丟過石環，¥300，小孩最愛</li>
        <li>元伊勢籠神社：纜車站旁，10分 → 真名井神社（籠神社走10分）</li>
        <li>🍽 午餐：這側簡餐，或忍到伊根吃鰤魚涮涮鍋</li>
        <li>⚠️ 車還停在 View Land 側：騎腳踏車回去取車，或安排一人回去開車到府中接</li>
      </ul>
      ${btn("📍 傘松公園 纜車站", "Kasamatsu Park Cable Car", "walking")}
      ${showFoodTable("傘松籠神社")}
      <hr>

      <div class="subheader">5️⃣ 伊根舟屋</div>
      <ul>
        <li><strong>13:00</strong> 出發 → 伊根約 30 分</li>
        <li><strong>舟屋之里公園</strong>：停車免費，整個伊根灣舟屋全景</li>
        <li><strong>海上計程車</strong>：漁師小船開進舟屋群底下，約 ¥1,000/人，現場找
          <ul><li>或 <strong>伊根灣遊覽船</strong>（25 分，船上餵海鷗，冬天約每小時一班）</li></ul>
        </li>
        <li><strong>舟屋街散步</strong> 30 分 → 向井酒造（伊根滿開紅色米酒）→ INE CAFE（舟屋日和內，海景咖啡）</li>
      </ul>
      ${codeBlock("MapCode：652 604 655*44")}
      <div class="cols">
        <div class="col">${btn("舟屋🅿️1", "35.67584540607587, 135.28772869192494", "driving")}</div>
        <div class="col">${btn("舟屋🅿️2", "35.67500125343802, 135.28802197600007", "driving")}</div>
        <div class="col">${btn("舟屋🅿️3", "35.674810315711255, 135.29151710239807", "driving")}</div>
      </div>
      ${btn("📍 導航：伊根灣遊覽船乘船處", "Ine Bay Tour Boat", "walking")}
      ${showFoodTable("伊根")}
      <hr>

      <div class="subheader">6️⃣ 舞鶴（備二選一）</div>
      <ul>
        <li><strong>15:00</strong> 伊根出發</li>
        <li>走舞鶴若狹道回京都會經過舞鶴，多約 40 分，<strong>16:00-16:40</strong> 停一個就好：
          <ul>
            <li><strong>道の駅 舞鶴港</strong>：海鮮市場(PM 5點前)，松葉蟹、牡蠣現烤現吃</li>
            <li><strong>舞鶴紅磚公園</strong>：明治海軍紅磚倉庫群</li>
          </ul>
        </li>
      </ul>
      ${codeBlock("海鮮市場MapCode：174 698 543*15")}
      <div class="cols">
        <div class="col">${btn("🦀 海鮮市場🅿️", "35.44998819450579, 135.3147607872948", "driving")}</div>
        <div class="col">${btn("🧱 舞鶴紅磚公園", "35.4743250743178, 135.38572558092937", "driving")}</div>
      </div>
      ${showFoodTable("舞鶴")}
      <hr>

      <div class="subheader">7️⃣ 回京都 → 還車</div>
      <ul>
        <li>加油 → <strong>10pm 前</strong>還車（滿油、拿 ETC 明細），明早不用趕</li>
        <li>🍽 晚餐：京都站周邊</li>
        <li>20:00前趕不到租車店→ 車停飯店附近投幣停車場，明早07:45還</li>
      </ul>
      ${codeBlock("22 PIECES MapCode：7 526 455*55")}
      ${btn("🚗 22 PIECES", "22 PIECES Kyoto", "driving")}
      <div class="cols">
        <div class="col">${codeBlock("⛽1 MapCode：7 494 357*86")}</div>
        <div class="col">${codeBlock("⛽2 MapCode：7 557 390*10")}</div>
      </div>
      <div class="cols">
        <div class="col">${btn("⛽1 加油站(24H)", "34.97324984490103, 135.74648147860697", "driving")}</div>
        <div class="col">${btn("⛽2 加油站(24H)", "34.99013004114884, 135.76410123994216", "driving")}</div>
      </div>
      ${btn("🚶 NISSAN Rent A Car Kyoto", "34.984459129730546, 135.7547459938482", "driving")}
      <div class="cols">
        <div class="col">${btn("飯店🅿️1", "34.98197527382824, 135.75692279994257", "driving")}</div>
        <div class="col">${btn("飯店🅿️2", "34.98251532812083, 135.75747844958318", "driving")}</div>
        <div class="col">${btn("飯店🅿️3", "34.983058834733335, 135.75752110124756", "driving")}</div>
      </div>
      ${showFoodTable("京都飯店-吃")}
      ${showFoodTable("京都飯店-逛")}

      <div class="alert alert-info">
        <p>💡 提醒：明天金閣寺 → teamLab</p>
        <ul>
          <li>確認 <strong>teamLab 11:00 場</strong> 票在手機裡</li>
          <li>查 <strong>地鐵九條 → 北大路</strong> 首班時間，北大路巴士總站 205 乘車處</li>
          <li>車已還的話明早不用趕；沒還的話 07:45 前還，油要滿</li>
        </ul>
      </div>
    `
  };
}
