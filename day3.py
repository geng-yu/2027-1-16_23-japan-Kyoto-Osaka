import streamlit as st
from utils import get_gmap_link, show_food_table


def show():
    st.caption("1/18 (一)｜雪日（可與 D4 對調）｜自駕 Day1")

    # ==========================================
    # 1. 取車
    # ==========================================
    st.subheader("1️⃣ 取車")
    st.markdown("""
* **08:00** 京都站周邊租車店取車（48hr，雪胎＋ETC）
* 取車時確認：雪胎、ETC 卡插好、油箱滿、還車時間 D5 07:45
""")
    st.link_button("🚶 導航：豐田租車 京都站新幹線口店", get_gmap_link("トヨタレンタカー 京都駅新幹線口店", "walking"))
    st.divider()

    # ==========================================
    # 2. 琵琶湖山谷
    # ==========================================
    st.subheader("2️⃣ 琵琶湖山谷 (びわ湖バレイ)")
    st.markdown("""
* **08:50** 到山麓站停車場， **09:30** 冬季第一班纜車上山
* **🎫 票**：買「施設利用券（雪遊び／びわ湖テラス用）」＝ 纜車來回＋Terrace＋Snow Land；不滑雪**不要買滑雪券**
  * 參考價 大人 ¥4,000 / 小學生 ¥2,000（Web 前售從 ¥3,200 / ¥1,600 起，KKday，浮動）
* **Snow Land**：就在山頂站正前方，雪橇租 ¥500/60 分、堆雪人區、遊具區
* **琵琶湖 Terrace**：山頂站旁，看整片琵琶湖；○ Café 360 要再搭ホーライ吊椅（10:00-15:30，最後 15:00）
* 🍽 午餐：山頂餐廳，或早上超市買飯捲帶上去
* **12:30** 下山（下午有貴船，不要拖到 13:00）
""")
    st.link_button("🚗 導航：琵琶湖山谷 纜車山麓站", get_gmap_link("35.202950140659915, 135.90652083462672", "driving"))
    show_food_table("琵琶湖山谷")
    st.divider()

    # ==========================================
    # 3. 白鬚神社
    # ==========================================
    st.subheader("3️⃣ 白鬚神社 湖中鳥居")
    st.markdown("""
* **13:00** 到（往北約25分）
* 下午順光，站**社務所前展望台**拍鳥居，40 分
* ⚠️ 國道 161 車多，**不要為了拍照橫越馬路**
* **13:45** 出發
""")
    st.link_button("⛩️ 導航：白鬚神社", get_gmap_link("35.274213263032365, 136.01084250538855", "driving"))
    show_food_table("白鬚神社")
    st.divider()

    # ==========================================
    # 4. 可刪加碼
    # ==========================================
    st.subheader("4️⃣ 加碼")
    st.markdown("""
* **○ 浮御堂**（回程順路）：湖上佛堂，20分，14:15-14:35
* **▲ 琵琶湖兒童之國公園**（往北10分）
* **▲ 水杉林蔭大道**（再往北40分）**只有放棄貴船才去**
""")
    c1, c2, c3 = st.columns(3) 
    with c1:
        st.link_button("🚗 琵琶湖兒童之國公園", get_gmap_link("Biwako Kodomo no Kuni", "driving"), width="stretch")
    with c2:
        st.link_button("🚗 水杉大道", get_gmap_link("Metasequoia Namiki Makino", "driving"), width="stretch")
    with c3:
        st.link_button("🚗 浮御堂", get_gmap_link("Ukimido Katata", "driving"), width="stretch")
    show_food_table("湖西其他")
    st.divider()

    # ==========================================
    # 5. 貴船神社
    # ==========================================
    st.subheader("5️⃣ 貴船神社（黃昏燈籠）")
    st.markdown("""
* 堅田 → 途中越（國道 367）經大原 → **15:45** 貴船（約 1hr10；大雪封路改湖西道路→京都市區→貴船，多 15 分）
* 參道燈籠**每天傍晚都點**，冬天約 16:30 亮、日落 17:10、**18:00 閉門**
* 紅燈籠石階→ 水占卜(紙放水裡才浮字)→ 奥宮(15分)→ 結社(回程)
* 停車：本宮 10 台、奥宮 15 台
* **17:45** 出發
""")
    c1, c2, c3 = st.columns(3)
    with c1:
        st.link_button("🅿️1 貴船", get_gmap_link("35.12210122259409, 135.76339418928197", "driving"), width="stretch")
    with c2:
        st.link_button("🅿️2 貴船", get_gmap_link("35.12055954695767, 135.7626417214197", "driving"), width="stretch")
    with c3:
        st.link_button("🅿️3 貴船", get_gmap_link("35.119117921926446, 135.76276126082237", "driving"), width="stretch")
    st.link_button("⛩️ 貴船神社(燈)", get_gmap_link("35.12122600441969, 135.76316511443252", "walking"))
    st.link_button("🅿️ 貴船神社(奧宮)", get_gmap_link("35.128346903080796, 135.76514244871177", "driving"))
    st.divider()

   # ==========================================
    # 5. 回京都
    # ==========================================
    st.subheader("6️⃣ 回京都")
    st.markdown("""
* 🍽 晚餐：京都站周邊
""")
    st.link_button("🚗 導航：22 PIECES", get_gmap_link("22 PIECES Kyoto", "driving"))

    c1, c2, c3 = st.columns(3)
    with c1:
        st.link_button("🅿️1 飯店", get_gmap_link("34.98197527382824, 135.75692279994257", "driving"), width="stretch")
    with c2:
        st.link_button("🅿️2 飯店", get_gmap_link("34.98251532812083, 135.75747844958318", "driving"), width="stretch")
    with c3:
        st.link_button("🅿️3 飯店", get_gmap_link("34.983058834733335, 135.75752110124756", "driving"), width="stretch")
    show_food_table("京都飯店")
    st.divider()

    # ==========================================
    # 6. 備用方案
    # ==========================================
    st.subheader("備用方案")
    st.error("""
**山谷纜車停駛 → 改箱館山**（只換地點，其他不變）
* 順序改成：白鬚神社 → 箱館山 → 回程
* 箱館山：8 人座纜車上山 8 分，Play Zone 雪遊區（有雪上電扶梯）、Snow Rafting 雪筏
* 京都出發約 1hr20，白鬚神社往北 25 分

**兩邊都不能上 → 今天改跑 D4 舟屋日內容，明天再賭雪日**
""")
    st.link_button("🚗 導航：箱館山滑雪場", get_gmap_link("Hakodateyama Ski Resort Takashima", "driving"))
    st.divider()

    # ==========================================
    # 提醒
    # ==========================================
    st.info("""
💡 **提醒**：明天舟屋日
* 明天 **15:00 一定要從伊根出發**，**20:00 前還車**（滿油）
* 看明天天氣、**NEXCO 西日本** 縱貫道路況（大雪會雪鏈管制或封閉）
* 油量夠不夠（明天來回約 260 km，回程順便加滿）
""")

    

if __name__ == "__main__":
    show()
