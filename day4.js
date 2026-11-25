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
        <li>道の駅 京丹波 味夢の里（休息站，廁所、丹波栗、黑豆點心）</li>
        <li>大雪時縱貫道可能管制／封閉</li>
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
        <li>上山單軌電車、下山個人吊椅(國小可獨座)</li>
      </ul>
      ${btn("📍 天橋立 View Land", "Amanohashidate Chairlift and Monorail", "walking")}
      ${showFoodTable("天橋立")}
      <hr>

      <div class="subheader">3️⃣ 智恩寺</div>
      <ul>
        <li><strong>智恩寺</strong>：文殊菩薩，門前吃智慧之餅</li>
        <li><strong>廻旋橋</strong>：有船經過整座轉90度</li>
      </ul>
      ${btn("📍 智恩寺", "Chionji Temple Amanohashidate", "walking")}
      ${showFoodTable("智恩寺")}
      <hr>

      <div class="subheader">4️⃣ 傘松公園(備)</div>
      <ul>
        <li><strong>丟瓦片</strong>：把小陶盤丟過石環，¥300</li>
        <li>元伊勢籠神社：纜車站旁(走10分)</li>
      </ul>
      ${btn("📍 傘松公園 纜車站🅿️", "35.582789218695844, 135.19508260507516", "driving")}
      ${showFoodTable("傘松籠神社")}
      <hr>

      <div class="subheader">5️⃣ 伊根舟屋</div>
      <ul>
        <li><strong>伊根灣遊覽船</strong>：（冬天約每小時一班）
          <ul><li>或 <strong>海上計程車</strong>小船開進舟屋群底下，約 ¥1,000/人</li></ul>
        </li>
        <li><strong>舟屋街散步</strong> → 向井酒造(伊根滿開紅色米酒)→ INE CAFE(海景咖啡)</li>
      </ul>
      ${codeBlock("MapCode：652 603 078*43")}
      <div class="cols">
        <div class="col">${btn("搭船🅿️1", "35.670577649981574, 135.27761043131204", "driving")}</div>
        <div class="col">${btn("搭船🅿️2", "35.669425804835605, 135.2803998478498", "driving")}</div>
        <div class="col">${btn("搭船🅿️3", "35.671424633028344, 135.27696592321547", "driving")}</div>
      </div>
      ${btn("📍 導航：伊根灣遊覽船乘船處", "35.670593163544304, 135.2773862355867", "walking")}
      <div class="cols">
        <div class="col">${btn("散步🅿️1", "35.67588609020973, 135.2876171094408", "driving")}</div>
        <div class="col">${btn("散步🅿️2", "35.675009163323544, 135.28801877920432", "driving")}</div>
        <div class="col">${btn("散步🅿️3", "35.67480632258699, 135.2915108528081", "driving")}</div>
      </div>
      ${showFoodTable("伊根")}
      <hr>

      <div class="subheader">6️⃣ 舞鶴（備二選一）</div>
      <ul>
        <li><strong>15:00</strong> 伊根出發</li>
        <li>走舞鶴若狹道會經過舞鶴，多約40分，<strong>16:00-16:40</strong> 停一個就好：
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
        <li>加油 → <strong>10pm 前</strong>還車（滿油、拿 ETC 明細）</li>
        <li>🍽 晚餐：京都站周邊</li>
        <li>22:00前趕不到租車店→ 明早07:45還</li>
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
        <p>💡 提醒：</p>
        <ul>
          <li>確認 <strong>teamLab 11:00 場</strong> 票在手機裡</li>
          <li>車已還的話明早不用趕；沒還的話 07:45 前還，油要滿</li>
        </ul>
      </div>
    `
  };
}
