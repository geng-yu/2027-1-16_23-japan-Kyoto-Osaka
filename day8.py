import streamlit as st
from utils import get_gmap_link


def show():
    st.caption("1/23 (六)｜回程｜16:15 起飛")

    # ==========================================
    # 1. 退房
    # ==========================================
    st.subheader("1️⃣ 10:00 退房")
    st.markdown("""
* 行李最後檢查：護照、雪具乾了沒、免稅品別拆封
* 早餐飯店或 Lawson
""")
    st.divider()

    # ==========================================
    # 2. 利木津巴士
    # ==========================================
    st.subheader("2️⃣ 關空利木津巴士")
    st.markdown("""
* **10:50** 日本環球影城 **乘車處 1** 上車 → 約 70 分 → **12:00** 關空
* 不用扛行李在西九条換車，行李放巴士下方
* 票：官網先預約，或現場向司機／售票機買
""")
    st.link_button("🚶 導航：環球影城 利木津巴士站", get_gmap_link("Universal Studios Japan Bus Stop", "walking"))

    with st.expander("🚃 巴士沒趕上的備案"):
        st.markdown("""
* JR 環球城 → 西九条 轉 **關空快速**（西九条有停）→ 關空 約 70 分
* 12:30 前到關空都來得及
""")
    st.divider()

    # ==========================================
    # 3. 臨空港 (可刪)
    # ==========================================
    st.subheader("3️⃣ ○ 臨空港 Outlet")
    st.markdown("""
* 關空 → **りんくうタウン** 1 站 5 分（南海或 JR 都可）
* 行李放關空置物櫃（或 Outlet 置物櫃）
* **12:15-13:45** 逛，13:45 搭回關空
* 不想跑的話，關空 T1 本身也很多店，直接報到
""")
    st.link_button("🚃 導航：臨空 Premium Outlets", get_gmap_link("Rinku Premium Outlets", "transit"))
    st.divider()

    # ==========================================
    # 4. 報到
    # ==========================================
    st.subheader("4️⃣ 14:15 前報到 → 16:15 起飛")
    st.markdown("""
* 關空 T1 週六人多，**14:15 前**到櫃台
* 免稅品在託運前拍照存證
* 登機前：手機下載好回程的影片給小孩
""")
    st.link_button("🚶 導航：關西機場 T1", get_gmap_link("Kansai International Airport Terminal 1", "walking"))
    st.success("🎉 8 天結束，辛苦了！")


if __name__ == "__main__":
    show()
