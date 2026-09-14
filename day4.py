import streamlit as st
from utils import get_gmap_link, show_food_table


def show():
    st.caption("1/19 (二)｜舟屋日（可與 D3 對調）｜自駕 Day2")

    # ==========================================
    # 1. 出發
    # ==========================================
    st.subheader("1️⃣ 天橋立 🅿️")
    st.markdown("""
* **08:00** 出發（京都縱貫道約 2hr）
* 大雪時縱貫道可能雪鏈管制／封閉，出發前看 NEXCO 西日本，封閉就當天對調成雪日
""")
    st.link_button("🅿️ 導航：天橋立 View Land 停車場", get_gmap_link("35.55598937942707, 135.18432345495142", "driving"))
    st.divider()

    # ==========================================
    # 2. View Land
    # ==========================================
    st.subheader("2️⃣ 天橋立 View Land")
    st.markdown("""
    
* 搭單軌或吊椅上山，**南側「股間望景」**，山頂有小型遊樂設施，1hr
""")
    st.link_button(" 📍 導航：天橋立 View Land", get_gmap_link("Amanohashidate Chairlift and Monorail", "walking"))
    st.divider()

    # ==========================================
    # 3. 智恩寺 / 沙洲
    # ==========================================
    st.subheader("3️⃣ 智恩寺 → 沙洲騎腳踏車")
    st.markdown("""
* **智恩寺**（文殊菩薩，門前吃智慧之餅）
* 智恩寺旁租腳踏車，**穿越沙洲單程 20 分**，可在對岸（傘松側）還車
* 不騎的話走路單程約 45 分
""")
    st.link_button("📍 導航：智恩寺", get_gmap_link("Chionji Temple Amanohashidate", "walking"))
    st.divider()

    # ==========================================
    # 4. 傘松公園
    # ==========================================
    st.subheader("4️⃣ 傘松公園 → ○ 元伊勢籠神社")
    st.markdown("""
* 沙洲對岸（府中）搭纜車上山，**北側「股間望景」**，30 分
* ○ 元伊勢籠神社：纜車站旁，10 分
* 🍽 午餐：這側簡餐，或忍到伊根吃鰤魚涮涮鍋
* ⚠️ 車還停在 View Land 側：騎腳踏車回去取車，或安排一人回去開車到府中接
""")
    st.link_button("📍 導航：傘松公園 纜車站", get_gmap_link("Kasamatsu Park Cable Car", "walking"))
    st.divider()

    # ==========================================
    # 5. 伊根
    # ==========================================
    st.subheader("5️⃣ 伊根舟屋")
    st.markdown("""
* **13:00** 出發 → 伊根約 30 分
* **★ 舟屋之里公園**：停車免費，整個伊根灣舟屋全景
* **★ 海上計程車**：漁師小船開進舟屋群底下，約 ¥1,000/人，現場找（小孩首選）
  * 或 **伊根灣遊覽船**（25 分，船上餵海鷗，冬天約每小時一班）
* **★ 舟屋街散步** 30 分 → ○ 向井酒造（伊根滿開紅色米酒，大人）
""")
    c1, c2, c3 = st.columns(3)
    with c1:
        st.link_button("🅿️1 舟屋", get_gmap_link("35.67584540607587, 135.28772869192494", "driving"), width="stretch")
    with c2:
        st.link_button("🅿️2 舟屋", get_gmap_link("35.67500125343802, 135.28802197600007", "driving"), width="stretch")
    with c3:
        st.link_button("🅿️3 舟屋", get_gmap_link("35.674810315711255, 135.29151710239807", "driving"), width="stretch")
    st.link_button("📍 導航：伊根灣遊覽船乘船處", get_gmap_link("Ine Bay Tour Boat", "walking"))
    st.divider()

    # ==========================================
    # 6. 回程 / 貴船
    # ==========================================
    st.subheader("6️⃣ 15:00 準時出發 → 貴船")
    st.markdown("""
* **15:00** 伊根出發（這條線不能拖，決定貴船和停車）→ **17:00** 京都南IC
* **15:00 看貴船神社官網公告**
  * ❄ **有點燈** → 貴船神社（18:00-19:30，停車位少，早到）
  * **沒雪** → 貴船看燈籠石階＋水占卜（17:30-18:30）→ ○ 鞍馬站看天狗雕像
* 大雪日不要開上貴船，改叡山電車（出町柳 → 貴船口）
""")
    st.link_button(" 🅿️1 貴船神社", get_gmap_link("35.12210122259409, 135.76339418928197", "driving"))
    st.link_button(" 🅿️2 貴船神社", get_gmap_link("35.12055954695767, 135.7626417214197", "driving"))
    st.link_button(" 🅿️3 貴船神社", get_gmap_link("35.119117921926446, 135.76276126082237", "driving"))
    st.link_button("📍 導航：鞍馬站 (天狗)", get_gmap_link("Kurama Station", "driving"))
    st.divider()

    # ==========================================
    # 7. 回京都
    # ==========================================
    st.subheader("7️⃣ 回京都")
    st.markdown("""
* **19:00** 回京都，車停投幣停車場
* 🍽 晚餐：京都站周邊
""")
    st.warning("""
✂️ **時間不夠先砍的順序**：向井酒造 → 元伊勢籠神社 → 傘松公園（View Land 那側看過就夠）
""")
    st.link_button("🚗 導航：22 PIECES", get_gmap_link("22 PIECES Kyoto", "driving"))
    st.link_button("🚗 導航：豐田租車 京都站新幹線口店", get_gmap_link("トヨタレンタカー 京都駅新幹線口店", "driving"))
    c1, c2, c3 = st.columns(3)
    with c1:
        st.link_button("🅿️1 飯店", get_gmap_link("34.98197527382824, 135.75692279994257", "driving"), width="stretch")
    with c2:
        st.link_button("🅿️2 飯店", get_gmap_link("34.98251532812083, 135.75747844958318", "driving"), width="stretch")
    with c3:
        st.link_button("🅿️3 飯店", get_gmap_link("34.983058834733335, 135.75752110124756", "driving"), width="stretch")
    st.divider()

    # ==========================================
    # 8. 今晚要做
    # ==========================================
    st.subheader("8️⃣ 今晚要做")
    st.info("""
✅ 確認 D5 teamLab 11:00 場票
✅ 205 公車發車時間（京都站前 → 金閣寺道）
✅ 加油：還車要滿油，看租車店規定
""")
    st.divider()

    show_food_table("天橋立伊根")


if __name__ == "__main__":
    show()
