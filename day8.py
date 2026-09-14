import streamlit as st
from utils import get_gmap_link


def show():
    st.caption("1/23 (六)｜回程｜16:15 起飛")

    # ==========================================
    # 1. 利木津巴士 → 關空
    # ==========================================
    st.subheader("1️⃣ 關空利木津巴士")
    st.markdown("""
* **10:00** 退房，行李最後檢查：護照、免稅品放拿得到的地方
* 日本環球影城 **乘車處 1** 上車 → 約 70 分 → 關空
""")
    st.link_button("🚶 導航：利木津巴士 乘車處 1", get_gmap_link("34.66914931884008, 135.4327468195929", "walking"))

    with st.expander("🚃 巴士沒趕上的備案（JR）"):
        st.markdown("""
* JR 環球城 → **西九条** 轉 **關空快速**（西九条有停，看清楚車種）→ 關空 約 70 分
* 12:30 前到關空都來得及
""")
        st.link_button("🚃 導航：關西機場 T1 (JR)", get_gmap_link("Kansai International Airport Terminal 1", "transit"))
    st.divider()

    # ==========================================
    # 2. 臨空港 (可刪)
    # ==========================================
    st.subheader("2️⃣ 臨空港 Outlet")
    st.markdown("""
* 關空 → **りんくうタウン** 1 站 5 分（南海或 JR 都可）
* 行李放關空置物櫃（或 Outlet 置物櫃）
* 逛到 **13:45** 搭回關空
* 不想跑的話，關空 T1 本身也很多店，直接報到
""")
    st.link_button("🚃 導航：臨空 Premium Outlets", get_gmap_link("Rinku Premium Outlets", "transit"))
    st.divider()

    # ==========================================
    # 3. 報到
    # ==========================================
    st.subheader("3️⃣ 14:15 前報到 → 16:15 起飛")
    st.markdown("""
* 關空 T1 週六人多，**14:15 前**到櫃台
* 登機前：手機下載好回程的影片給小孩
""")
    st.link_button("🚶 導航：關西機場 T1", get_gmap_link("Kansai International Airport Terminal 1", "walking"))
    st.divider()

    # ==========================================
    # 提醒
    # ==========================================
    st.warning("""
💡 **退稅提醒**
* 順序：**先到機場稅關 KIOSK 掃護照做「持出確認」→ 再託運行李**
* 確認完後由店家或退稅業者退款（信用卡／App，各店不同，**買的時候問清楚退款方式**）
""")


if __name__ == "__main__":
    show()
