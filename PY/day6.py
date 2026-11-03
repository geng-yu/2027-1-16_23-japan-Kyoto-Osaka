import streamlit as st
from utils import get_gmap_link, show_food_table


def show():
    st.caption("1/21 (四)｜退房 → 環球城 → 大阪半天")

    # ==========================================
    # 1. 退房 → 京阪環球影城塔樓
    # ==========================================
    st.subheader("1️⃣ 退房 → 京阪環球影城塔樓")
    st.markdown("""
* **10:00** 退房 → 走到京都站
* **JR 新快速** → 大阪（約 30 分）→ 環狀線 → **西九条** 轉 **夢咲線** → **11:30** 環球城
* ⚠️ 西九条換車：下車走到 1 號月台（夢咲線），3-5 分
* 帶行李用電梯，京都站中央口 → JR 剪票口有電梯
* 環球城站出來就是飯店，先寄行李（15:00 後入住）
""")
    st.link_button("🏨 導航：京阪環球影城塔樓", get_gmap_link("Hotel Keihan Universal Tower", "transit"))
    st.divider()

        # ==========================================
    # 2A. 梅田採買
    # ==========================================
    st.subheader("2️⃣ 二選一｜A 梅田採買")
    st.markdown("""
* 環球城 → 西九条 → **大阪站**
* **LINKS UMEDA**（Yodobashi 那棟）：1-2F **UNIQLO UMEDA** 、3F **GU**、8F 餐廳街
* **Grand Front 大阪**：北館 2-4F **無印良品** 、南館 5F **mont-bell**
* **大丸梅田 13F**：Nintendo OSAKA ＋ 寶可夢中心 DX
* **18:00** 回環球城
""")
    c1, c2, c3 = st.columns(3)
    with c1:
        st.link_button("🛍️ LINKS UQ/GU", get_gmap_link("UNIQLO UMEDA LINKS UMEDA", "transit"), width="stretch")
    with c2:
        st.link_button("🛍️ GF MUJI/mont-bell", get_gmap_link("MUJI Grand Front Osaka", "walking"), width="stretch")
    with c3:
        st.link_button("🛍️ 大丸13F", get_gmap_link("Daimaru Umeda", "walking"), width="stretch")
    show_food_table("梅田")
    st.divider()

    
    # ==========================================
    # 2B. 海遊館
    # ==========================================
    st.subheader("2️⃣ 二選一｜B 海遊館（親子）")
    st.markdown("""
* 環球城碼頭搭 **Captain Line** 船 10 分 → 海遊館
* **海遊館**：鯨鯊、太平洋大水槽，2hr
* ○ 天保山摩天輪
* 船回環球城
""")
    c1, c2 = st.columns(2)
    with c1:
        st.link_button("🚶 導航：Captain Line 環球城碼頭", get_gmap_link("Captain Line Universal City Port", "transit"), width="stretch")
    with c2:
        st.link_button("📍 導航：海遊館", get_gmap_link("Osaka Aquarium Kaiyukan", "walking"), width="stretch")
    show_food_table("海遊館")
    st.divider()

    # ==========================================
    # 3. 入住 / 晚餐
    # ==========================================
    st.subheader("3️⃣ 京阪環球影城塔樓 → 晚餐")
    st.markdown("""
* **15:00** 後入住
* 🍽 晚餐：**Universal Citywalk**（飯店旁，たこ焼きミュージアム、各式餐廳）
""")
    st.link_button("🏨 導航：京阪環球影城塔樓", get_gmap_link("Hotel Keihan Universal Tower", "transit"))
    show_food_table("環球城")

    # ==========================================
    # 提醒
    # ==========================================
    st.info("""
💡 **提醒**：明天環球影城
* 再看一次環球 App：**區域入場整理券** 怎麼抽
* 早餐先買好
* 明天穿：保暖＋好走的鞋，園內風大
""")



if __name__ == "__main__":
    show()
