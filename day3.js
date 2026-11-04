function getDay3() {
  return {
    key: "Day3\n1/18 一",
    date: "2027-01-18",
    fullTitle: "Day 3(一): 雪日｜琵琶湖山谷 & 湖西",
    caption: "1/18 (一)｜雪日（可與 D4 對調）｜自駕 Day1",
    html: `
      <div class="subheader">1️⃣ 取車</div>
      <ul>
        <li><strong>08:00</strong> 取車（48hr，雪胎＋ETC）</li>
        <li>預約號碼: 26093001336</li>
        <li>取車時確認：雪胎、ETC、油箱滿、還車時間</li>
      </ul>
      ${btn("🚶 NISSAN Rent A Car Kyoto", "34.984459129730546, 135.7547459938482", "walking")}
      <hr>

      <div class="subheader">2️⃣ 琵琶湖山谷 (びわ湖バレイ)</div>
      <ul>
        <li><strong>08:50</strong> 到山麓站停車場，<strong>09:30</strong> 第一班纜車</li>
        <li><strong>09:45-10:20</strong> ★琵琶湖 Terrace 先拍</li>
        <li><strong>10:30-12:00</strong> ★雪鞋健行</li>
        <li><strong>12:00-12:45</strong> ★Snow Land 雪橇（山頂站正前方，雪橇租 ¥500/60 分）</li>
        <li>○ Café 360 要再搭ホーライ吊椅（10:00-15:30）</li>
        <li>🍽 午餐：早上超市買飯捲，12:45 下山前在山頂吃，或車上吃</li>
        <li><strong>13:00</strong> 下山</li>
      </ul>
      ${codeBlock("MapCode：263 094 843*44")}
      ${btn("🚗 琵琶湖山谷 纜車山麓站🅿️", "35.202950140659915, 135.90652083462672", "driving")}
      ${showFoodTable("琵琶湖山谷")}
      <hr>

      <div class="subheader">3️⃣ 白鬚神社 湖中鳥居</div>
      <ul>
        <li><strong>13:00</strong> 到（往北約25分）</li>
        <li>站<strong>社務所前展望台</strong>拍鳥居，40 分</li>
        <li><strong>13:45</strong> 出發</li>
      </ul>
      ${codeBlock("MapCode：263 376 499*57")}
      ${btn("⛩️ 白鬚神社", "35.274213263032365, 136.01084250538855", "driving")}
      ${showFoodTable("白鬚神社")}
      <hr>

      <div class="subheader">4️⃣ 浮御堂(備)</div>
      <ul>
        <li><strong>浮御堂</strong>（回程順路）：湖上佛堂（20分）</li>
        <li><strong>▲ 琵琶湖兒童之國公園</strong>（往北10分）</li>
        <li><strong>▲ 水杉林蔭大道</strong>（再往北40分）<strong>放棄貴船才去</strong></li>
      </ul>
      ${codeBlock("浮御堂MapCode：616 065 775*62")}
      <div class="cols">
        <div class="col">${btn("🚗 浮御堂🅿️", "35.110234089508126, 135.92081966978157", "driving")}</div>
        <div class="col">${btn("🚗 兒童之國公園", "Biwako Kodomo no Kuni", "driving")}</div>
        <div class="col">${btn("🚗 水杉大道", "Metasequoia Namiki Makino", "driving")}</div>
      </div>
      ${showFoodTable("浮御堂")}
      ${showFoodTable("湖西其他")}
      <hr>

      <div class="subheader">5️⃣ 鞍馬大天狗(備)</div>
      <ul>
        <li>大天狗合照(5分)→ 多聞堂牛若餅(車上吃)→ 仁王門(不進去）</li>
      </ul>
      ${codeBlock("MapCode：479 108 091*04")}
      <div class="cols">
        <div class="col">${btn("👺 鞍馬站🅿️", "35.11250546865591, 135.7725978505011", "driving")}</div>
        <div class="col">${btn("🍪 多聞堂 鞍馬", "35.11322385274119, 135.77326701479515", "walking")}</div>
      </div>
      <hr>

      <div class="subheader">6️⃣ 貴船神社（黃昏燈籠）</div>
      <ul>
        <li>堅田 → 途中越（國道 367）經大原 → 貴船（約 1hr10；大雪封路改湖西道路→京都市區→貴船，多 15 分）</li>
        <li>參道燈籠，冬天約16:30亮、<strong>18:00 閉門</strong></li>
        <li>紅燈籠石階→ 水占卜(紙放水裡才浮字)→ 結社</li>
        <li>停車：本宮 10 台、奥宮 15 台</li>
      </ul>
      <div class="alert alert-error"><p>💡 有就先停，上面路很小</p></div>
      ${codeBlock("MapCode：479 136 238*22")}
      <div class="cols">
        <div class="col">${btn("貴船🅿️1", "35.11873070901179, 135.76225482481692", "driving")}</div>
        <div class="col">${btn("貴船🅿️2", "35.119099435370714, 135.76280447851192", "driving")}</div>
        <div class="col">${btn("貴船🅿️3", "35.12200558283188, 135.76338043890988", "driving")}</div>
      </div>
      ${btn("⛩️ 貴船神社(燈)", "35.12122600441969, 135.76316511443252", "walking")}
      <hr>

      <div class="subheader">7️⃣ 貴船神社-奧宮(備)</div>
      <ul>
        <li>貴船最有「神域感」的地方</li>
      </ul>
      ${btn("⛩️ 貴船神社(奧宮🅿️)", "35.128346903080796, 135.76514244871177", "driving")}
      <hr>

      <div class="subheader">8️⃣ 回京都</div>
      <ul>
        <li>🍽 晚餐：京都站周邊</li>
      </ul>
      ${codeBlock("MapCode：7 526 455*55")}
      ${btn("🚗 22 PIECES", "22 PIECES Kyoto", "driving")}
      <div class="cols">
        <div class="col">${btn("飯店🅿️1", "34.98197527382824, 135.75692279994257", "driving")}</div>
        <div class="col">${btn("飯店🅿️2", "34.98251532812083, 135.75747844958318", "driving")}</div>
        <div class="col">${btn("飯店🅿️3", "34.983058834733335, 135.75752110124756", "driving")}</div>
      </div>
      ${showFoodTable("京都飯店-吃")}
      ${showFoodTable("京都飯店-逛")}

      <div class="alert alert-info">
        <p>💡 提醒：明天舟屋日</p>
        <ul>
          <li><strong>22:00 前還車</strong>（滿油）</li>
          <li>看明天天氣、<strong>NEXCO 西日本</strong> 縱貫道路況（大雪會雪鏈管制或封閉）</li>
          <li>油量夠不夠（明天來回約 260 km）</li>
        </ul>
      </div>
      <hr>

           <details class="expander expander-error">
        <summary>備用方案 山谷纜車停駛 → 改箱館山</summary>
        <div class="expander-body">
          <ul>
            <li>順序改成：白鬚神社 → 箱館山 → 回程</li>
            <li>箱館山：8 人座纜車上山 8 分，Play Zone 雪遊區（有雪上電扶梯）、Snow Rafting 雪筏</li>
            <li>京都出發約 1hr20，白鬚神社往北 25 分</li>
          </ul>
          <p style="margin-top:8px;">兩邊都不能上 → 今天改跑 D4 舟屋日內容，明天再賭雪日</p>
          ${codeBlock("MapCode：380 059 028*16")}
          ${btn("🚗 箱館山滑雪場🅿️", "35.42761994200102, 135.996006812276", "driving")}
        </div>
      </details>
    `
  };
}
