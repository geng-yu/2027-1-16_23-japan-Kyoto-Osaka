import streamlit as st
from utils import get_gmap_link, show_food_table


def show():
    st.caption("1/20 (三)｜金閣寺 → teamLab → 鬧區")

    # ==========================================
    # 1. 還車
    # ==========================================
    st.subheader("1️⃣ 還車")
    st.markdown("""
* **07:45** 還車（先加滿油、拿走 ETC 明細）
""")
    st.link_button("⛽ 加油站(24H)", get_gmap_link("34.97324984490103, 135.74648147860697", "driving"))
    st.link_button("🚗 還車:豐田租車 京都站新幹線口店(AM 8點)", get_gmap_link("トヨタレンタカー 京都駅新幹線口店", "driving"))
    st.divider()

    # ==========================================
    # 2. 地鐵 → 北大路 → 金閣寺
    # ==========================================
    st.subheader("2️⃣ 地鐵九條 → 北大路 → 金閣寺")
    st.markdown("""
* **九條站** → 烏丸線往國際會館方向 → **北大路站**（約 15 分）
* 北大路站地下就是 **北大路巴士總站**：搭 **205／204／M1** 到「金閣寺道」約 10 分
* 或出站搭 **計程車** 到金閣寺約 10 分、¥1,000-1,300，4 人分下來跟公車差不多
* 車資公車大人 ¥230、小孩 ¥120，用 ICOCA
""")
    st.link_button("🚃 導航：北大路巴士總站 (地鐵北大路站)", get_gmap_link("Kitaoji Bus Terminal Kyoto", "transit"))
    st.divider()

    # ==========================================
    # 3. 金閣寺
    # ==========================================
    st.subheader("3️⃣ 金閣寺")
    st.markdown("""
* **09:00** 開門第一批進
* 大人 ¥500、小孩 ¥300，一圈 30-40 分
* **09:45** 離開 → 計程車或公車回 **北大路站** → 烏丸線往京都方向 → **九條站**（約 15 分）
""")
    st.link_button("📍 導航：金閣寺", get_gmap_link("Kinkakuji Temple", "walking"))
    st.divider()

    # ==========================================
    # 4. teamLab
    # ==========================================
    st.subheader("4️⃣ teamLab Biovortex Kyoto")
    st.markdown("""
* 地鐵 **九條站** 出站走約 10 分（京都站八條口走 7 分、JR／京阪 **東福寺站** 走 8 分也到）
* **11:00** 場（提前買時段票），館內 2.5-3hr，像迷宮沒有順路，**先裝官方 App** 看地圖免得漏
* 票 大人 ¥3,800~（浮動）、小學生約 ¥1,200-1,500
""")
    st.link_button("🚶 導航：teamLab Biovortex Kyoto", get_gmap_link("teamLab Biovortex Kyoto", "walking"))
    st.divider()

    # ==========================================
    # 5. 錦市場
    # ==========================================
    st.subheader("5️⃣ 錦市場（午餐邊走邊吃）")
    st.markdown("""
* **14:00** 走回 **九條站** → 烏丸線 3 站 → **四條站** → 走 10 分
* 玉子燒、豆乳甜甜圈、烤麻糬、章魚蛋，邊走邊吃當午餐
* 大部分店 18:00 前收
""")
    st.link_button("🚃 導航：錦市場", get_gmap_link("Nishiki Market", "transit"))
    st.divider()

    # ==========================================
    # 6. 新京極 / 寺町
    # ==========================================
    st.subheader("6️⃣ 新京極、寺町通")
    st.markdown("""
* 錦市場東口出來就是，兩條平行的商店街
* 扭蛋、文具、藥妝
""")
    st.link_button("📍 導航：新京極商店街", get_gmap_link("Shinkyogoku Shopping Street", "walking"))
    st.divider()

    # ==========================================
    # 7. Nintendo / 寶可夢
    # ==========================================
    st.subheader("7️⃣ Nintendo KYOTO ＋ 寶可夢中心")
    st.markdown("""
* **Nintendo KYOTO**：京都高島屋 S.C.（T8）**7F**，四條河原町
* **寶可夢中心京都**：SUINA 室町 **4F**，四條烏丸站直結
* 兩間走路 10 分，先 Nintendo 再寶可夢（回程順路到烏丸站）
""")
    c1, c2 = st.columns(2)
    with c1:
        st.link_button("📍 導航：Nintendo KYOTO", get_gmap_link("Nintendo KYOTO", "walking"), width="stretch")
    with c2:
        st.link_button("📍 導航：寶可夢中心京都", get_gmap_link("Pokemon Center Kyoto", "walking"), width="stretch")
    st.divider()

    # ==========================================
    # 8. 可刪
    # ==========================================
    st.subheader("8️⃣ ○ 二條城 → ○ 鴨川散步")
    st.markdown("""
* **○ 二條城**：地鐵烏丸御池 → 二條城前，**16:00 前入城**（二之丸御殿鶯聲地板）
* **○ 鴨川**：四條大橋往下走河堤，傍晚 20 分
* 🍽 晚餐：河原町
""")
    st.link_button("🚃 導航：二條城", get_gmap_link("Nijo Castle", "transit"))
    st.divider()

    # ==========================================
    # 9. 回飯店
    # ==========================================
    st.subheader("9️⃣ 22 PIECES")
    st.markdown("""
* 四條站 → 烏丸線 → 京都站，走回飯店
""")
    st.link_button("🏠 導航：22 PIECES", get_gmap_link("22 PIECES Kyoto", "transit"))
    show_food_table("京都飯店")
    st.divider()

if __name__ == "__main__":
    show()
