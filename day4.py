import streamlit as st
from utils import get_gmap_link, show_food_table


def show():
    st.caption("1/19 (二)｜舟屋日（可與 D3 對調）｜自駕 Day2")

    # ==========================================
    # 1. 出發
    # ==========================================
    st.subheader("1️⃣ 天橋立")
    st.markdown("""
* **08:00** 出發（京都縱貫道約 2hr）
* ○ 道の駅 京丹波 味夢の里（縱貫道中間休息站，廁所、丹波栗、黑豆點心，10 分）
* 大雪時縱貫道可能雪鏈管制／封閉，出發前看 NEXCO 西日本，封閉就當天對調成雪日
""")
    c1, c2 = st.columns(2)
    with c1:
        st.link_button("中途休息站🅿️", get_gmap_link("35.155487637910184, 135.4151181669732", "driving"), width="stretch")
    with c2:
        st.link_button("天橋立 View Land🅿️", get_gmap_link("35.55598937942707, 135.18432345495142", "driving"), width="stretch")
    st.divider()

    # ==========================================
    # 2. View Land
    # ==========================================
    st.subheader("2️⃣ 天橋立 View Land")
    st.markdown("""
* 搭單軌或吊椅上山，**南側「股間望景」**，山頂有小型遊樂設施，1hr
""")
    st.link_button("📍 天橋立 View Land", get_gmap_link("Amanohashidate Chairlift and Monorail", "walking"))
    show_food_table("天橋立")
    st.divider()

    # ==========================================
    # 3. 智恩寺 / 沙洲
    # ==========================================
    st.subheader("3️⃣ 智恩寺 → 沙洲騎腳踏車")
    st.markdown("""
* **智恩寺**（文殊菩薩，門前吃智慧之餅）
* **廻旋橋**：智恩寺旁的紅色旋轉橋，有船經過整座轉 90 度
* 智恩寺旁租腳踏車，**穿越沙洲單程 20 分**，可在對岸（傘松側）還車
* 不騎的話走路單程約 45 分
""")
    st.link_button("📍 智恩寺", get_gmap_link("Chionji Temple Amanohashidate", "walking"))
    show_food_table("智恩寺沙洲")
    st.divider()

    # ==========================================
    # 4. 傘松公園
    # ==========================================
    st.subheader("4️⃣ 傘松公園 → ○ 元伊勢籠神社")
    st.markdown("""
* 沙洲對岸（府中）搭纜車上山，**北側「股間望景」**，30分
* **かわらけ投げ**：山頂把小陶盤丟過石環，¥300，小孩最愛
* 元伊勢籠神社：纜車站旁，10分 → 真名井神社（籠神社走10分）
* 🍽 午餐：這側簡餐，或忍到伊根吃鰤魚涮涮鍋
* ⚠️ 車還停在 View Land 側：騎腳踏車回去取車，或安排一人回去開車到府中接
""")
    st.link_button("📍 傘松公園 纜車站", get_gmap_link("Kasamatsu Park Cable Car", "walking"))
    show_food_table("傘松籠神社")
    st.divider()

    # ==========================================
    # 5. 伊根
    # ==========================================
    st.subheader("5️⃣ 伊根舟屋")
    st.markdown("""
* **13:00** 出發 → 伊根約 30 分
* **舟屋之里公園**：停車免費，整個伊根灣舟屋全景
* **海上計程車**：漁師小船開進舟屋群底下，約 ¥1,000/人，現場找
  * 或 **伊根灣遊覽船**（25 分，船上餵海鷗，冬天約每小時一班）
* **舟屋街散步** 30 分 → 向井酒造（伊根滿開紅色米酒）→ INE CAFE（舟屋日和內，海景咖啡）
""")
    c1, c2, c3 = st.columns(3)
    with c1:
        st.link_button("舟屋🅿️1", get_gmap_link("35.67584540607587, 135.28772869192494", "driving"), width="stretch")
    with c2:
        st.link_button("舟屋🅿️2", get_gmap_link("35.67500125343802, 135.28802197600007", "driving"), width="stretch")
    with c3:
        st.link_button("舟屋🅿️3", get_gmap_link("35.674810315711255, 135.29151710239807", "driving"), width="stretch")
    st.link_button("📍 導航：伊根灣遊覽船乘船處", get_gmap_link("Ine Bay Tour Boat", "walking"))
    show_food_table("伊根")
    st.divider()

    # ==========================================
    # 6. 回程加碼：舞鶴（二選一）
    # ==========================================
    st.subheader("6️⃣ 舞鶴（二選一）")
    st.markdown("""
* **15:00** 伊根出發
* 走舞鶴若狹道回京都會經過舞鶴，多約 40 分，**16:00-16:40** 停一個就好：
  * **道の駅 舞鶴港**：海鮮市場，松葉蟹、牡蠣現烤現吃，比天橋立吃蟹便宜一半
  * **舞鶴紅磚公園**：明治海軍紅磚倉庫群
""")
    c1, c2 = st.columns(2)
    with c1:
        st.link_button("🦀 海鮮市場🅿️", get_gmap_link("35.44998819450579, 135.3147607872948", "driving"), width="stretch")
    with c2:
        st.link_button("🧱 舞鶴紅磚公園", get_gmap_link("35.4743250743178, 135.38572558092937", "driving"), width="stretch")
    show_food_table("舞鶴")
    st.divider()


    # ==========================================
    # 7. 回京都 → 還車
    # ==========================================
    st.subheader("7️⃣ 回京都 → 還車")
    st.markdown("""
* 加油 → **20:00 前**還車（滿油、拿 ETC 明細），明早不用趕
* 🍽 晚餐：京都站周邊
* 20:00前趕不到租車店→ 車停飯店附近投幣停車場，明早07:45還
""")
    
    st.link_button("🚗 22 PIECES", get_gmap_link("22 PIECES Kyoto", "driving"))
    c1, c2 = st.columns(2)
    with c1:
        st.link_button("⛽1 加油站(24H)", get_gmap_link("34.97324984490103, 135.74648147860697", "driving"), width="stretch")
    with c2:
        st.link_button("⛽2 加油站(24H)", get_gmap_link("34.99013004114884, 135.76410123994216", "driving"), width="stretch")
    st.link_button("🚗 還車:豐田租車 京都站新幹線口店(PM 8點前、滿油)", get_gmap_link("トヨタレンタカー 京都駅新幹線口店", "driving"))
    c1, c2, c3 = st.columns(3)
    with c1:
        st.link_button("飯店🅿️1", get_gmap_link("34.98197527382824, 135.75692279994257", "driving"), width="stretch")
    with c2:
        st.link_button("飯店🅿️2", get_gmap_link("34.98251532812083, 135.75747844958318", "driving"), width="stretch")
    with c3:
        st.link_button("飯店🅿️3", get_gmap_link("34.983058834733335, 135.75752110124756", "driving"), width="stretch")
    show_food_table("京都飯店")
    st.divider()
    # ==========================================
    # 提醒
    # ==========================================
    st.info("""
💡 **提醒**：明天金閣寺 → teamLab
* 確認 **teamLab 11:00 場** 票在手機裡
* 查 **地鐵九條 → 北大路** 首班時間，北大路巴士總站 205 乘車處
* 車已還的話明早不用趕；沒還的話 07:45 前還，油要滿
""")
    st.divider()

    show_food_table("天橋立伊根")


if __name__ == "__main__":
    show()
