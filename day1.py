import streamlit as st
from utils import get_gmap_link, show_food_table


def show():
    st.caption("1/16")
    # --- 飛機 ---
    with st.container(border=True):
        st.markdown("### 🛫 國泰航空 CX564")
        col1, col2 = st.columns(2)
        col1.write("11:15 TPE 起飛 → 14:45 KIX 抵達")

    # ==========================================
    # 1. 關西機場 → Haruka
    # ==========================================
    st.subheader("1️⃣ 關空 → Haruka ")
    st.markdown("""
* **14:45** 落地 → 入關約 1hr
* **15:45** JR 關西機場站 搭 **Haruka**（直達京都約 75 分）

""")
    st.link_button("🚶 JR 關西機場站 (Haruka 月台)", get_gmap_link("Kansai-Airport Station JR", "walking"))

    with st.expander("💡 落地要做的事"):
        st.markdown("""
* 買 **ICOCA(兒童)** 或用手機 Suica
* 便利商店買水
""")
    st.divider()

    # ==========================================
    # 2. 京都站 → 22 PIECES
    # ==========================================
    st.subheader("2️⃣ 京都站 → 22 PIECES")
    st.markdown("""
* **17:00** 抵京都站 → 走路到飯店
""")
    st.link_button("🏠 22 PIECES", get_gmap_link("22 PIECES Kyoto", "walking"))
    st.divider()

    # ==========================================
    # 3. 晚餐
    # ==========================================
    st.subheader("3️⃣ 晚餐：京都站")
    st.markdown("""
* **京都拉麵小路**（京都駅ビル 10F）
""")
    st.link_button("📍 京都拉麵小路", get_gmap_link("Kyoto Ramen Koji", "walking"))

    show_food_table("京都飯店-吃")
    show_food_table("京都飯店-逛")

    

if __name__ == "__main__":
    show()
