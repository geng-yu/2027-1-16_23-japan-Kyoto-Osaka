import streamlit as st
from utils import get_gmap_link, show_food_table


def show():
    st.caption("1/17")

    # ==========================================
    # 1. 任天堂博物館
    # ==========================================
    st.subheader("1️⃣ 任天堂博物館")
    st.markdown("""
* **10:00** 時段入館，館內 3-4hr
* **入館證**：入口核對證件，姓名要跟護照一致
* **體驗區**：每人 10 枚硬幣，大型控制器、花札等每項扣幣，先看想玩什麼再花
* **午餐**：館內 **HATENA BURGER**
* **紀念品**：館內限定，最後再逛
""")
    st.link_button("📍 導航：任天堂博物館", get_gmap_link("Nintendo Museum", "transit"))
    
    st.divider()

    # ==========================================
    # 2. 宇治
    # ==========================================
    st.subheader("2️⃣ 宇治")
    st.markdown("""
* **13:30** JR 小倉 → **宇治**（1 站，約 3 分）
""")
    st.link_button("🚃 導航：JR 宇治站", get_gmap_link("JR Uji Station", "transit"))
    show_food_table("宇治")
    st.divider()

    # ==========================================
    # 3. 平等院
    # ==========================================
    st.subheader("3️⃣ 平等院鳳凰堂")
    st.markdown("""
""")
    st.link_button("📍 導航：平等院", get_gmap_link("Byodoin Temple", "walking"))
    st.divider()

    # ==========================================
    # 4. 宇治橋 / 宇治上神社
    # ==========================================
    st.subheader("4️⃣ 宇治橋 → ○ 宇治上神社")
    st.markdown("""
* 從平等院走表參道 → **宇治橋**（紫式部像）→ 過橋走 10 分 → **宇治上神社**
""")
    st.link_button("📍 導航：宇治上神社", get_gmap_link("Ujigami Shrine", "walking"))
    st.divider()

    # ==========================================
    # 5. 中村藤吉本店
    # ==========================================
    st.subheader("5️⃣ 🍽 中村藤吉本店")
    st.markdown("""
* JR 宇治站前，抹茶果凍、抹茶聖代、抹茶蕎麥麵
""")
    st.link_button("📍 導航：中村藤吉本店", get_gmap_link("Nakamura Tokichi Honten", "walking"))
    st.divider()

    # ==========================================
    # 6. 回京都
    # ==========================================
    st.subheader("6️⃣ 22 PIECES")
    st.markdown("""
* **17:00** JR 宇治 → 京都站（普通車約 30 分，快速約 20 分）
* 🍽 晚餐：京都站周邊
""")
    st.link_button("🏠 導航：22 PIECES", get_gmap_link("22 PIECES Kyoto", "transit"))
    st.divider()

    # ==========================================
    # 提醒
    # ==========================================
    st.info("""
💡 **提醒**：決定明天是雪日還是舟屋日
* 看 **琵琶湖山谷官網 TOP 頁** 營業情報（纜車有沒有預告停駛）
* 看隔天 **風速** 預報：風小 → 雪日；風大 → 舟屋日
* 看 **NEXCO 西日本** 縱貫道路況
""")
    st.divider()
    show_food_table("京都飯店")



if __name__ == "__main__":
    show()
