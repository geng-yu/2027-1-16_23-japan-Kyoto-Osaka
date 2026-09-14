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
* 走到京都站前巴士總站
""")
    st.divider()

    # ==========================================
    # 2. 205 → 金閣寺
    # ==========================================
    st.subheader("2️⃣ 市巴士 205 → 金閣寺")
    st.markdown("""
* **07:55** 京都站前 搭 **市巴士 205（金閣寺・北大路方向）**，起站一定有位
* 看站牌上寫「金閣寺道」的乘車處
* **08:40** 金閣寺道 下車，走 5 分
* 車資大人 ¥230、小孩 ¥120，用 ICOCA
""")
    st.link_button("🚌 導航：京都站前巴士總站", get_gmap_link("Kyoto Station Bus Terminal", "walking"))
    st.divider()

    # ==========================================
    # 3. 金閣寺
    # ==========================================
    st.subheader("3️⃣ ★ 金閣寺")
    st.markdown("""
* **09:00** 開門第一批進（人最少），❄ 有雪就是全日本最美的畫面
* 大人 ¥500、小孩 ¥300，一圈 30-40 分
* **09:45** 離開 → 205 反方向回京都站（約 40 分）→ **10:30** 到
""")
    st.link_button("📍 導航：金閣寺", get_gmap_link("Kinkakuji Temple", "walking"))
    st.divider()

    # ==========================================
    # 4. teamLab
    # ==========================================
    st.subheader("4️⃣ ★ teamLab Biovortex Kyoto")
    st.markdown("""
* 京都站 **八條口走 7 分**
* **11:00** 場（提前買時段票），館內 2.5-3hr，像迷宮沒有順路，**先裝官方 App** 看地圖免得漏
* 票 大人 ¥3,800~（浮動）、小學生約 ¥1,200-1,500
* 穿好走的鞋，部分區域地面會反光，帶小孩注意
""")
    st.link_button("🚶 導航：teamLab Biovortex Kyoto", get_gmap_link("teamLab Biovortex Kyoto", "walking"))
    st.divider()

    # ==========================================
    # 5. 錦市場
    # ==========================================
    st.subheader("5️⃣ ★ 錦市場（午餐邊走邊吃）")
    st.markdown("""
* **14:00** 走回京都站 → 地鐵烏丸線 2 站 → **四條站**（或 五條站）→ 走 10 分
* 玉子燒、豆乳甜甜圈、烤麻糬、章魚蛋，邊走邊吃當午餐
* 大部分店 18:00 前收
""")
    st.link_button("🚃 導航：錦市場", get_gmap_link("Nishiki Market", "transit"))
    st.divider()

    # ==========================================
    # 6. 新京極 / 寺町
    # ==========================================
    st.subheader("6️⃣ ★ 新京極、寺町通")
    st.markdown("""
* 錦市場東口出來就是，兩條平行的商店街
* 扭蛋、文具、藥妝
""")
    st.link_button("📍 導航：新京極商店街", get_gmap_link("Shinkyogoku Shopping Street", "walking"))
    st.divider()

    # ==========================================
    # 7. Nintendo / 寶可夢
    # ==========================================
    st.subheader("7️⃣ ★ Nintendo KYOTO ＋ 寶可夢中心")
    st.markdown("""
* **Nintendo KYOTO**：京都高島屋 S.C.（T8）**7F**，四條河原町
* **寶可夢中心京都**：SUINA 室町 **4F**，四條烏丸站直結
* 兩間走路 10 分，先 Nintendo 再寶可夢（回程順路到烏丸站）
""")
    st.link_button("📍 導航：Nintendo KYOTO", get_gmap_link("Nintendo KYOTO", "walking"))
    st.link_button("📍 導航：寶可夢中心京都", get_gmap_link("Pokemon Center Kyoto", "walking"))
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
    # 9. 今晚要做
    # ==========================================
    st.subheader("9️⃣ 今晚要做")
    st.info("""
✅ 整理行李（明天 10:00 退房）
✅ 環球門票、Express Pass 確認手機都開得出來
✅ 存好 D6 路線：京都站 → 大阪 → 西九条 → 環球城
""")
    st.divider()

    show_food_table("河原町")


if __name__ == "__main__":
    show()
