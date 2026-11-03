function getDay8() {
  return {
    key: "Day8\n1/23 六",
    date: "2027-01-23",
    fullTitle: "Day 8(六): 回程",
    caption: "1/23 (六)｜回程｜16:15 起飛",
    html: `
      <div class="subheader">1️⃣ 關空利木津巴士</div>
      <ul>
        <li><strong>10:00</strong> 退房，行李最後檢查：護照、免稅品放拿得到的地方</li>
        <li>日本環球影城 <strong>乘車處 1</strong> 上車 → 約 70 分 → 關空</li>
      </ul>
      ${btn("🚶 導航：利木津巴士 乘車處 1", "34.66914931884008, 135.4327468195929", "walking")}

      <details class="expander">
        <summary>🚃 巴士沒趕上的備案（JR）</summary>
        <div class="expander-body">
          <ul>
            <li>JR 環球城 → <strong>西九条</strong> 轉 <strong>關空快速</strong>（西九条有停，看清楚車種）→ 關空 約 70 分</li>
            <li>12:30 前到關空都來得及</li>
          </ul>
          ${btn("🚃 導航：關西機場 T1 (JR)", "Kansai International Airport Terminal 1", "transit")}
        </div>
      </details>
      <hr>

      <div class="subheader">2️⃣ 臨空港 Outlet(備)</div>
      <ul>
        <li>關空 → <strong>りんくうタウン</strong> 1 站 5 分（南海或 JR 都可）</li>
        <li>行李放關空置物櫃（或 Outlet 置物櫃）</li>
        <li>逛到 <strong>13:45</strong> 搭回關空</li>
      </ul>
      ${btn("🚃 導航：臨空 Premium Outlets", "Rinku Premium Outlets", "transit")}
      ${showFoodTable("臨空港")}
      <hr>

      <div class="subheader">3️⃣ 14:15 前報到 → 16:15 起飛</div>
      <ul>
        <li>關空 T1 週六人多，<strong>14:15 前</strong>到櫃台</li>
        <li>登機前：手機下載好回程的影片給小孩</li>
      </ul>
      ${btn("🚶 導航：關西機場 T1", "Kansai International Airport Terminal 1", "walking")}
      ${showFoodTable("關空")}

      <div class="alert alert-warn">
        <p>💡 退稅提醒</p>
        <ul>
          <li>順序：<strong>先到機場稅關 KIOSK 掃護照做「持出確認」→ 再託運行李</strong></li>
          <li>確認完後由店家或退稅業者退款（信用卡／App，各店不同，<strong>買的時候問清楚退款方式</strong>）</li>
        </ul>
      </div>
    `
  };
}
