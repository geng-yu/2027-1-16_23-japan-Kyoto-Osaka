function getDay7() {
  return {
    key: "Day7\n1/22 五",
    date: "2027-01-22",
    fullTitle: "Day 7(五): 環球影城",
    caption: "1/22 (五)｜環球影城 平日",
    html: `
      <div class="subheader">1️⃣ 走路到大門</div>
      <ul>
        <li>開園時間看官網當月公布，<strong>開園前 1hr 到大門</strong>排隊，常會提早放人</li>
        <li>門票 QR 每人一張，小孩的也要能開</li>
        <li>飲料可以帶（水壺、寶特瓶 OK），<strong>食物不能帶</strong>，早餐在飯店或 Lawson 吃完再進</li>
      </ul>
      ${btn("🚶 導航：環球影城 大門", "Universal Studios Japan", "walking")}
      <hr>

      <div class="subheader">2️⃣ 入園後：App 抽整理券</div>
      <ul>
        <li>入園掃票後<strong>立刻</strong>開官方 App → <strong>區域入場整理券</strong>（免費）→ 選 <strong>超級任天堂世界</strong></li>
        <li>整理券選最早的時段，抽到就先往其他區玩</li>
        <li>抽不到就一直重整，中午前後常會再放</li>
      </ul>
      <hr>

      <div class="subheader">3️⃣ 超級任天堂世界 → 大金剛</div>
      <ul>
        <li><strong>瑪利歐賽車</strong>：室內 AR 賽車（身高 107cm 以上，需大人陪）</li>
        <li><strong>耀西冒險</strong>：慢速遊園車（92cm 以上）</li>
        <li><strong>大金剛 礦車</strong>：跳軌雲霄飛車（107cm 以上）</li>
        <li><strong>能量手環</strong>：園內買，打磚塊、收集鑰匙，小孩很愛（一個約 ¥4,000-5,000）</li>
        <li>🍽 <strong>Kinopio's Cafe</strong>：區內午餐，要在整理券時段內</li>
      </ul>
      <hr>

      <div class="subheader">4️⃣ 小小兵 → 哈利波特</div>
      <ul>
        <li><strong>小小兵樂園</strong>：小小兵瘋狂乘車遊（102cm 以上）</li>
        <li><strong>哈利波特</strong>：禁忌之旅（<strong>122cm 以上</strong>，7-8 歲要量身高）、鷹馬的飛行（92cm 以上）</li>
        <li><strong>侏羅紀</strong>：飛天翼龍 132cm 以上（大人玩，小孩不行）</li>
        <li>身高限制以官網為準，入園前量一次</li>
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
