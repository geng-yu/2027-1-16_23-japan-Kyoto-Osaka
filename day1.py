import streamlit as st
from utils import get_gmap_link, show_food_table


def show():
    st.caption("1/16 (六)｜14:45 落地關空 → 京都")

    # ==========================================
    # 1. 關西機場 → Haruka
    # ==========================================
    st.subheader("1️⃣ 關空 → Haruka → 京都站")
    st.markdown("""
* **14:45** 落地 → 入關約 1hr
* **15:45** JR 關西機場站 搭 **Haruka**（直達京都約 75 分，全車指定席）
* **🎫 票**：JR 綠色窗口或售票機；外國人有 **Kansai-Airport Express HARUKA** 優惠票（JR 西日本網站先買，機場取票）
* 小孩 6-11 歲半價
""")
    st.link_button("🚶 導航：JR 關西機場站 (Haruka 月台)", get_gmap_link("Kansai-Airport Station JR", "walking"))

    with st.expander("💡 落地要做的事"):
        st.markdown("""
* 領行李後先去 **JR 綠色窗口** 取 Haruka 票
* 買 **ICOCA** 或用手機 Suica（後面地鐵、巴士都用它）
* 便利商店買水
""")
    st.divider()

    # ==========================================
    # 2. 京都站 → 22 PIECES
    # ==========================================
    st.subheader("2️⃣ 京都站 → 22 PIECES")
    st.markdown("""
* **17:00** 抵京都站 → 走路到飯店
* 入住後先確認 **D3 取車店** 和 **附近投幣停車場** 位置（D3、D4 晚上要停）
""")
    st.link_button("🚶 導航：22 PIECES", get_gmap_link("22 PIECES Kyoto", "walking"))
    st.divider()

    # ==========================================
    # 3. 晚餐
    # ==========================================
    st.subheader("3️⃣ 晚餐：京都站")
    st.markdown("""
* **京都拉麵小路**（京都駅ビル 10F）：8 間拉麵一次選，不用走出車站
* 或 **伊勢丹 B2** 買便當回房吃（有廚房）
""")
    st.link_button("📍 導航：京都拉麵小路", get_gmap_link("Kyoto Ramen Koji", "walking"))
    st.divider()

    # ==========================================
    # 4. 今晚要做
    # ==========================================
    st.subheader("4️⃣ 今晚要做")
    st.info("""
✅ 打開任天堂博物館 **QR 票** 確認 8 人都在
✅ 存好 D2 路線：京都站 JR 奈良線 → JR 小倉
✅ 問飯店：投幣停車場推薦位置
""")
    st.divider()

    show_food_table("京都站")


if __name__ == "__main__":
    show()
