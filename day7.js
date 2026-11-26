function getDay7() {
  return {
    key: "Day7\n1/22 五",
    date: "2027-01-22",
    fullTitle: "Day 7(五): 環球影城",
    caption: "1/22 (五)｜環球影城 平日",
    html: `
      <div class="subheader">1️⃣ 走路到大門</div>
      <ul>
        <li>開園時間看官網當月公布</li>
        <li>檢查門票 QR 每人一張</li>
        <li><strong>食物不能帶</strong>，飲料可以帶（水壺、寶特瓶）</li>
      </ul>
      ${btn("📍 環球影城 大門", "Universal Studios Japan", "walking")}
      <hr>

      <div class="subheader">2️⃣ 入園後：App 抽整理券</div>
      <ul>
        <li>入園後開App→ 區域入場整理券→ 超級任天堂世界</li>
        <li>整理券選最早的時段，抽到就先往其他區玩</li>
      </ul>
      <hr>

      <div class="subheader">3️⃣ 大金剛 → 超級任天堂世界</div>
      <ul>
      </ul>
      <hr>

      <div class="subheader">4️⃣ 水世界</div>
      <ul>
        <li><strong>場次當月公佈</strong></li>
        <li><a href="https://www.usj.co.jp/web/zh/tw/park-guide/schedule/park-hour2" target="_blank" rel="noopener noreferrer">官網</a></li>
        <li><strong>提早半小時到</strong></li>
      </ul>
      <hr>

      
      <div class="subheader">5️⃣ 小小兵 → 哈利波特</div>
      <ul>
        <li><strong>小小兵樂園</strong>：小小兵瘋狂乘車遊</li>
        <li><strong>哈利波特</strong>：禁忌之旅(122cm)、鷹馬的飛行</li>
      </ul>
      ${showFoodTable("環球影城")}
      <hr>
      ${showFoodTable("環球城")}

      <div class="alert alert-info">
        <p>💡 提醒：明天回程</p>
        <ul>
          <li>利木津巴士班次再確認一次（乘車處 1）</li>
          <li>行李先整理</li>
        </ul>
      </div>
    `
  };
}
