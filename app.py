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

# --- CSS 優化 ---
st.markdown("""
<style>
/* ===== 整頁只能上下滑，禁止左右 ===== */
html, body, .stApp,
[data-testid="stAppViewContainer"],
[data-testid="stMain"],
.main, .block-container {
    overflow-x: hidden !important;
    max-width: 100vw !important;
}


/* ===== 導航按鈕：灰底、白框（亮模式自動變黑框） ===== */
[data-testid="stLinkButton"] a,
[data-testid^="stBaseLinkButton-"] {
    width: 100%;
    border-radius: 20px;
    font-weight: bold;
    border: 1.5px solid var(--text-color) !important;
    background-color: rgba(128, 128, 128, 0.18) !important;
    color: var(--text-color) !important;
    opacity: 1 !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
[data-testid="stLinkButton"] a:hover,
[data-testid^="stBaseLinkButton-"]:hover {
    background-color: rgba(128, 128, 128, 0.35) !important;
}
.stButton button {
    width: 100%;
    border-radius: 20px;
    font-weight: bold;
    border: 1.5px solid var(--text-color) !important;
    background-color: rgba(128, 128, 128, 0.18) !important;
    color: var(--text-color) !important;
}
/* 一般按鈕（如果有用到 st.button）同一套 */
.stButton button {
    width: 100%;
    border-radius: 20px;
    font-weight: bold;
    border: 1.5px solid #ff4b4b !important;
    background-color: rgba(255, 75, 75, 0.12) !important;
    color: var(--text-color) !important;
}
/* 隱藏預設選單與頁尾 */
#MainMenu {visibility: hidden;}
footer {visibility: hidden;}

/* ===== columns 手機不換行、不撐寬 ===== */
div[data-testid="stHorizontalBlock"] {
    flex-wrap: nowrap !important;
    gap: 6px;
    max-width: 100%;
}
div[data-testid="stHorizontalBlock"] > div[data-testid="stColumn"],
div[data-testid="stHorizontalBlock"] > div[data-testid="column"] {
    min-width: 0 !important;
    flex: 1 1 0 !important;
}

/* ===== Markdown 表格自動換行、不撐寬 ===== */
[data-testid="stMarkdownContainer"] table {
    width: 100% !important;
    table-layout: fixed;
    display: table;
}
[data-testid="stMarkdownContainer"] th,
[data-testid="stMarkdownContainer"] td {
    white-space: normal !important;
    word-break: break-word;
    font-size: 13px;
    padding: 4px 6px;
}
[data-testid="stMarkdownContainer"] th:nth-child(1),
[data-testid="stMarkdownContainer"] td:nth-child(1) { width: 36%; }
[data-testid="stMarkdownContainer"] th:nth-child(2),
[data-testid="stMarkdownContainer"] td:nth-child(2) { width: 22%; }

/* ===== 日期選單：只有這一列可以左右滑 ===== */
[data-testid="stRadio"] { max-width: 100%; }
div[role="radiogroup"] {
    flex-direction: row;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    overflow-y: hidden;
    gap: 8px;
    padding-bottom: 5px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
}
div[role="radiogroup"]::-webkit-scrollbar { display: none; }

/* 藏掉左邊的圓點：label 裡除了文字容器，其他子元素全部隱藏 */
/* ===== 日期選單：只有這一列可以左右滑 ===== */
[data-testid="stRadio"] { max-width: 100%; }
[data-testid="stRadioGroup"] {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: nowrap !important;
    overflow-x: auto !important;
    overflow-y: hidden;
    gap: 8px;
    padding-bottom: 5px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
}
[data-testid="stRadioGroup"]::-webkit-scrollbar { display: none; }

/* 藏掉圓點：選項裡凡是「不是文字容器、也不是它的祖先或子孫」的元素全部隱藏 */
[data-testid="stRadioOption"] *:not(:has([data-testid="stMarkdownContainer"])):not([data-testid="stMarkdownContainer"]):not([data-testid="stMarkdownContainer"] *) {
    display: none !important;
}

[data-testid="stRadioOption"] {
    flex: 0 0 auto;
    background-color: var(--secondary-background-color);
    color: var(--text-color);
    padding: 6px 10px;
    margin: 0 !important;
    border-radius: 12px;
    border: 1px solid rgba(128, 128, 128, 0.3);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-width: 72px;
    height: 55px;
}
[data-testid="stRadioOption"] [data-testid="stMarkdownContainer"] p {
    font-size: 14px;
    line-height: 1.3;
    font-weight: bold;
    margin: 0 !important;
    padding: 0 !important;
    white-space: pre-wrap;
    text-align: center;
}
/* 選中的那格：紅框＋淡紅底 */
[data-testid="stRadioOption"]:has(input:checked) {
    border: 2px solid #ff4b4b !important;
    background-color: rgba(255, 75, 75, 0.12) !important;
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
#today = date(2027, 1, 18)
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
st.caption("1/16~23")

# 橫向按鈕選單
selected_key = st.radio(
    "選擇行程日期",
    options,
    index=default_index,
    horizontal=True,
    label_visibility="collapsed"
)

st.markdown("""
🎫 [唐吉訶德](https://japanportal.donki-global.com/coupon/?ptcd=0015000103)｜
[BicCamera](https://d1grca2t3zpuug.cloudfront.net/2025/06/biccameracoupontwhk-1787x2527-1750209030.webp)｜
[愛電王](https://osaka.letsgojp.com/coupon/389838/)  
💊 [松本清/Cocokara](https://d1grca2t3zpuug.cloudfront.net/2025/01/20250131matsucoupontw-1631x2475.webp)｜
[大國藥局](https://d1grca2t3zpuug.cloudfront.net/2023/08/daikokucoupon-1751874722.webp)｜
[SUGI藥局](https://d1grca2t3zpuug.cloudfront.net/2025/02/sugidrug20260228-855x1300.webp)
""")

# --- 顯示內容 ---
selected_data = trip_dates[selected_key]
target_module = selected_data[1]
full_title = selected_data[2]

st.markdown(f"### {full_title}")
target_module.show()
