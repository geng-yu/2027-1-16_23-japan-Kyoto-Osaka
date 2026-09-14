import streamlit as st
from utils import get_gmap_link, show_food_table


def show():
    st.caption("1/21 (四)｜退房 → 環球城 → 大阪半天")

    # ==========================================
    # 1. 退房 → 環球城
    # ==========================================
    st.subheader("1️⃣ 退房 → 環球城")
    st.markdown("""
* **10:00** 退房 → 走到京都站
* **JR 新快速** → 大阪（約 30 分）→ 環狀線 → **西九条** 轉 **夢咲線** → **11:30** 環球城
* ⚠️ 西九条換車：下車走到 1 號月台（夢咲線），3-5 分
* 帶行李用電梯，京都站中央口 → JR 剪票口有電梯
""")
    st.link_button("🚃 導航：京都站 → 環球城站", get_gmap_link("Universal City Station", "transit"))
    st.divider()

    # ==========================================
    # 2. 京阪環球影城塔樓
    # ==========================================
    st.subheader("2️⃣ 京阪環球影城塔樓 寄行李")
    st.markdown("""
* 環球城站出來就是，先寄行李（15:00 後入住）
* 順便問：**D8 利木津巴士乘車處** 位置（乘車處 1）、明天早餐時間
""")
    st.link_button("🚶 導航：Hotel Keihan Universal Tower", get_gmap_link("Hotel Keihan Universal Tower", "walking"))
    st.divider()

    # ==========================================
    # 3A. 梅田採買
    # ==========================================
    st.subheader("3️⃣ 二選一｜A 梅田採買")
    st.markdown("""
* 環球城 → 西九条 → **大阪站**（約 15 分）
* **Nintendo OSAKA ＋ 寶可夢中心 DX**：大丸梅田 **13F**，兩間在同一層
* **Yodobashi 梅田**：大阪站北口對面
* **Grand Front 大阪**：Yodobashi 旁
* **18:00** 回環球城
""")
    st.link_button("🚃 導航：大丸梅田 (Nintendo OSAKA)", get_gmap_link("Daimaru Umeda", "transit"))
    st.divider()

    # ==========================================
    # 3B. 海遊館
    # ==========================================
    st.subheader("3️⃣ 二選一｜B 海遊館（親子）")
    st.markdown("""
* 環球城碼頭搭 **Captain Line** 船 10 分 → 海遊館（船本身小孩就很愛）
* **海遊館**：鯨鯊、太平洋大水槽，2hr
* ○ 天保山摩天輪
* 船回環球城
""")
    st.link_button("🚶 導航：Captain Line 環球城碼頭", get_gmap_link("Captain Line Universal City Port", "walking"))
    st.link_button("📍 導航：海遊館", get_gmap_link("Osaka Aquarium Kaiyukan", "walking"))
    st.divider()

    # ==========================================
    # 4. 入住 / 晚餐
    # ==========================================
    st.subheader("4️⃣ 入住 → 晚餐")
    st.markdown("""
* **15:00** 後入住
* 🍽 晚餐：**Universal Citywalk**（飯店旁，たこ焼きミュージアム、各式餐廳）
""")

    with st.expander("🎟️ 抽籤中 1/21 的話，今天改這樣"):
        st.markdown("""
* 10:00 退房 → 行李寄 22 PIECES → JR 奈良線 → JR 小倉 → **任天堂博物館**
* 14:00 回京都站取行李 → JR → **17:00** 環球飯店入住
* 梅田採買砍掉，Nintendo／寶可夢 D5 在京都買齊
""")
    st.divider()

    # ==========================================
    # 5. 今晚要做
    # ==========================================
    st.subheader("5️⃣ 今晚要做")
    st.info("""
✅ 再看一次環球 App：**區域入場整理券** 怎麼抽
✅ Express Pass QR 存手機、截圖
✅ 早餐先買好（明天 08:00 要到大門）
✅ 明天穿：保暖＋好走的鞋，園內風大
""")
    st.divider()

    show_food_table("環球城")


if __name__ == "__main__":
    show()
