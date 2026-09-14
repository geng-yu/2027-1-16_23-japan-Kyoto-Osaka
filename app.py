# 檔案名稱：app.py
import streamlit as st
from datetime import datetime, date
import pytz  # 用於處理時區

# 匯入每一天的模組 (確保這些 .py 檔案都在同一個資料夾)
import day1, day2, day3, day4, day5, day6, day7, day8

# --- 頁面基本設定 ---
st.set_page_config(
    page_title="2027 京阪",
    page_icon="🇯🇵",
    layout="centered",
    initial_sidebar_state="collapsed"
)

# --- CSS 優化 (深色模式適應 + 橫向捲動 + 按鈕置中) ---
st.markdown("""
<style>
/* 全域按鈕樣式 */
.stButton button {
    width: 100%;
    border-radius: 20px;
    font-weight: bold;
    border: 1px solid var(--text-color);
    opacity: 0.8;
}
/* 隱藏預設選單與頁尾 */
#MainMenu {visibility: hidden;}
footer {visibility: hidden;}

/* --- 橫向滑動導覽列 --- */
div[role="radiogroup"] {
    flex-direction: row;
    overflow-x: auto;
    flex-wrap: nowrap !important;
    gap: 8px;
    padding-bottom: 5px;
    -webkit-overflow-scrolling: touch;
}
div[role="radiogroup"] label > div:first-child {
    display: none !important;
}
div[role="radiogroup"] label {
    background-color: var(--secondary-background-color);
    color: var(--text-color);
    padding: 6px 4px;
    border-radius: 12px;
    border: 1px solid rgba(128, 128, 128, 0.2);
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: 68px;
    height: 55px;
}
div[role="radiogroup"] label p {
    font-size: 14px;
    line-height: 1.3;
    font-weight: bold;
    margin: 0px !important;
    padding: 0px !important;
    width: 100%;
    white-space: pre-wrap;
    text-align: center;
}
div[role="radiogroup"] label:hover {
    border-color: #ff4b4b;
    background-color: var(--background-color);
}
div[role="radiogroup"] label[data-baseweb="radio"] {
    border-color: #ff4b4b !important;
    background-color: var(--background-color) !important;
}
div[role="radiogroup"]::-webkit-scrollbar {
    display: none;
}
</style>
""", unsafe_allow_html=True)

# --- 資料設定 ---
# 格式: Key顯示文字 : (日期物件, 模組, 完整標題)
trip_dates = {
    "Day1\n1/16 六": (date(2027, 1, 16), day1, "Day 1(六): 出發 & 京都"),
    "Day2\n1/17 日": (date(2027, 1, 17), day2, "Day 2(日): 任天堂博物館 & 宇治"),
    "Day3\n1/18 一": (date(2027, 1, 18), day3, "Day 3(一): 雪日｜琵琶湖山谷 & 湖西"),
    "Day4\n1/19 二": (date(2027, 1, 19), day4, "Day 4(二): 舟屋日｜天橋立 & 伊根"),
    "Day5\n1/20 三": (date(2027, 1, 20), day5, "Day 5(三): 金閣寺 & teamLab & 鬧區"),
    "Day6\n1/21 四": (date(2027, 1, 21), day6, "Day 6(四): 移動 & 大阪"),
    "Day7\n1/22 五": (date(2027, 1, 22), day7, "Day 7(五): 環球影城"),
    "Day8\n1/23 六": (date(2027, 1, 23), day8, "Day 8(六): 回程"),
}

# --- 自動判斷日期邏輯 (使用日本時間) ---
japan_tz = pytz.timezone('Asia/Tokyo')
today = datetime.now(japan_tz).date()

# --- 測試區 (測試完請註解掉下面這行) ---
# today = date(2027, 1, 18)
# ------------------------------------

default_index = 0
options = list(trip_dates.keys())
for i, key in enumerate(options):
    d = trip_dates[key][0]
    if d == today:
        default_index = i
        break

# --- 介面呈現 ---
st.title("🇯🇵 2027 京阪")
st.caption("1/16~23｜2大2小｜★必去 ○可刪 ❄有雪才去 🍽吃")

# 橫向按鈕選單
selected_key = st.radio(
    "選擇行程日期",
    options,
    index=default_index,
    horizontal=True,
    label_visibility="collapsed"
)

# --- 全域資訊 (每天都用得到的) ---
with st.expander("🏨 住宿 / 🚗 租車 / ✈️ 航班"):
    st.markdown("""
* **D1-D5**：22 PIECES（京都站步行圈）
* **D6-D7**：京阪環球影城塔樓（環球城站旁）
* **租車**：D3 08:00 京都站周邊取車 → D5 07:45 同店還車（48hr，雪胎＋ETC）
* **停車**：D3、D4 晚上停飯店附近投幣停車場（約 ¥1,500/晚）
* **航班**：去程 14:45 落地關空｜回程 16:15 起飛（14:15 前報到）
""")

with st.expander("🔁 雪日／舟屋日 對調規則"):
    st.markdown("""
* 前一晚看：**琵琶湖山谷官網 TOP 頁營業情報** ＋ 隔天**風速預報**
* 風小 → 隔天上山（雪日）；風大或纜車預告停駛 → 隔天去天橋立（舟屋日）
* 山谷不能上 → 改**箱館山**，只換地點，當天其他行程不變
* 對調不影響飯店、租車、D5
""")

with st.expander("❄️ 大雪提醒"):
    st.markdown("""
* 山谷山麓道路積雪少，雪胎沒問題；**湖西道路封閉時改國道 161**
* **京都縱貫道**大雪時會有雪鏈管制或封閉，出發前看 NEXCO 西日本道路情報，封閉就當天對調
* **貴船**那段山路窄、停車位少，大雪日不要開上去，改搭叡山電車（出町柳→貴船口）
""")

with st.expander("🎟️ 任天堂博物館 抽籤結果對應"):
    st.markdown("""
* **中 1/17 上午** → D2 照表
* **中 1/17 下午** → D2 對調：09:00 先去宇治 → 13:00 JR 宇治 → JR 小倉 → 博物館 → 17:30 回京都站
* **中 1/21** → D6 改：10:00 退房、行李寄 22 PIECES → 博物館 → 14:00 回京都站取行李 → 17:00 環球飯店；梅田採買砍掉
* **全沒中** → D2 改：09:00 宇治 → 13:00 回京都 → ○二條城 → ○京都水族館／鐵道博物館
""")

with st.expander("📋 預約清單 (照順序)"):
    st.markdown("""
1. 任天堂博物館抽籤 10/1-31（4 個大人各填 3 個時段，8 人全填）
2. 租車雪胎方案 11 月前
3. 環球門票 ＋ Express Pass 開賣就買（平日票）
4. teamLab 11:00 場 出發前 1 週
5. 山谷雪遊び券 Web 前售 出發前 1 週（KKday，浮動價）
6. 利木津巴士 USJ → 關空 出發前查班次
7. 海上計程車／伊根灣遊覽船 現場買
""")

st.markdown("""
🎫 **優惠券：** [唐吉訶德](https://japanportal.donki-global.com/coupon/?ptcd=0015000103)｜
[BicCamera](https://d1grca2t3zpuug.cloudfront.net/2025/06/biccameracoupontwhk-1787x2527-1750209030.webp)｜
[山田電機](https://d1grca2t3zpuug.cloudfront.net/2025/03/yamada2025_tw65-1612x2442-1742810701.webp)｜
[愛電王](https://osaka.letsgojp.com/coupon/389838/)｜
""")
st.markdown("""
💊 [松本清](https://d1grca2t3zpuug.cloudfront.net/2025/01/20250131matsucoupontw-1631x2475.webp)｜
[大國藥局](https://d1grca2t3zpuug.cloudfront.net/2023/08/daikokucoupon-1751874722.webp)｜
[Cocokarafine](https://d1grca2t3zpuug.cloudfront.net/2025/01/20250131matsucoupontw-1631x2475.webp)｜
[SUGI藥局](https://d1grca2t3zpuug.cloudfront.net/2025/02/sugidrug20260228-855x1300.webp)｜
""")

st.divider()

# --- 顯示內容 ---
selected_data = trip_dates[selected_key]
target_module = selected_data[1]
full_title = selected_data[2]

st.markdown(f"### {full_title}")
target_module.show()
