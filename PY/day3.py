import streamlit as st
from utils import get_gmap_link, show_food_table


def show():
    st.caption("1/18 (一)｜雪日（可與 D4 對調）｜自駕 Day1")

    # ==========================================
    # 1. 取車
    # ==========================================
    st.subheader("1️⃣ 取車")
    st.markdown("""
* **08:00** 京都站周邊租車店取車（48hr，雪胎＋ETC）
* 預約號碼: 26093001336
* 取車時確認：雪胎、ETC 卡插好、油箱滿、還車時間 D5 07:45
""")
    st.link_button("🚶 NISSAN Rent A Car Kyoto", get_gmap_link("34.984459129730546, 135.7547459938482", "walking"))
    st.divider()

    # ==========================================
    # 2. 琵琶湖山谷
    # ==========================================
    st.subheader("2️⃣ 琵琶湖山谷 (びわ湖バレイ)")
    st.markdown("""
* **08:50** 到山麓站停車場，**09:30** 冬季第一班纜車上山（09:45 到山頂）
* **09:45-10:20** ★琵琶湖 Terrace 先拍（山頂站旁，早上逆光但人最少）
* **10:30-12:00** ★雪鞋健行（山頂集合；**要事前預約**，官網 12 月開放後訂平日場）
* **12:00-12:45** ★Snow Land 雪橇（山頂站正前方，雪橇租 ¥500/60 分）
* **🎫 票**：買「施設利用券（雪遊び／びわ湖テラス用）」＝ 纜車來回＋Terrace＋Snow Land；**不要買滑雪券**；雪鞋健行另外付
  * 參考價 大人 ¥4,000 / 小學生 ¥2,000（Web 前售從 ¥3,200 / ¥1,600 起）
* ○ Café 360 要再搭ホーライ吊椅（10:00-15:30），今天沒時間，跳過
* 🍽 午餐：早上超市買飯捲，12:45 下山前在山頂吃，或車上吃
* **13:00** 下山（比原本晚 30 分，下午浮御堂砍掉補回來）
""")
    st.code("MapCode：263 094 843*44", language="text")
    st.link_button("🚗 琵琶湖山谷 纜車山麓站🅿️", get_gmap_link("35.202950140659915, 135.90652083462672", "driving"))
    show_food_table("琵琶湖山谷")
    st.divider()

    # ==========================================
    # 3. 白鬚神社
    # ==========================================
    st.subheader("3️⃣ 白鬚神社 湖中鳥居")
    st.markdown("""
* **13:00** 到（往北約25分）
* 下午順光，站**社務所前展望台**拍鳥居，40 分
* ⚠️ 國道 161 車多，**不要為了拍照橫越馬路**
* **13:45** 出發
""")
    st.code("MapCode：263 376 499*57", language="text")
    st.link_button("⛩️ 白鬚神社", get_gmap_link("35.274213263032365, 136.01084250538855", "driving"))
    show_food_table("白鬚神社")
    st.divider()

    # ==========================================
    # 4. 可刪加碼
    # ==========================================
    st.subheader("4️⃣ 浮御堂(備)")
    st.markdown("""
* **浮御堂**（回程順路）：湖上佛堂，20分，14:15-14:35
* **▲ 琵琶湖兒童之國公園**（往北10分）
* **▲ 水杉林蔭大道**（再往北40分）**只有放棄貴船才去**
""")
    st.code("浮御堂MapCode：616 065 775*62", language="text")
    c1, c2, c3 = st.columns(3) 
    with c1:
        st.link_button("🚗 浮御堂🅿️", get_gmap_link("35.110234089508126, 135.92081966978157", "driving"), width="stretch")
    with c2:
        st.link_button("🚗 琵琶湖兒童之國公園", get_gmap_link("Biwako Kodomo no Kuni", "driving"), width="stretch")
    with c3:
        st.link_button("🚗 水杉大道", get_gmap_link("Metasequoia Namiki Makino", "driving"), width="stretch")
    show_food_table("浮御堂")
    st.divider()

     # ==========================================
    # 6. 加碼
    # ==========================================
    st.subheader("5️⃣ 鞍馬大天狗(備)")
    st.markdown("""
* 大天狗合照(5分)→ 多聞堂牛若餅(買了車上吃)→ 仁王門(只看門不進去）
""")
    st.code("MapCode：479 108 091*04", language="text")
    c1, c2 = st.columns(2) 
    with c1:
        st.link_button("👺 鞍馬站🅿️", get_gmap_link("35.11250546865591, 135.7725978505011", "driving"), width="stretch")
    with c2:
        st.link_button("🍪 多聞堂 鞍馬", get_gmap_link("35.11322385274119, 135.77326701479515", "walking"), width="stretch")

    st.divider()

    # ==========================================
    # 5. 貴船神社
    # ==========================================
    st.subheader("6️⃣ 貴船神社（黃昏燈籠）")
    st.markdown("""
* 堅田 → 途中越（國道 367）經大原 → **15:45** 貴船（約 1hr10；大雪封路改湖西道路→京都市區→貴船，多 15 分）
* 參道燈籠**每天傍晚都點**，冬天約 16:30 亮、日落 17:10、**18:00 閉門**
* 紅燈籠石階→ 水占卜(紙放水裡才浮字)→ 結社
* 停車：本宮 10 台、奥宮 15 台
* **17:45** 出發
""")
    st.error("""
💡 **有就先停，上面路很小**
""")
    st.code("MapCode：479 136 238*22", language="text")
    c1, c2, c3 = st.columns(3)
    with c1:
        st.link_button("貴船🅿️1", get_gmap_link("35.11873070901179, 135.76225482481692", "driving"), width="stretch")
    with c2:
        st.link_button("貴船🅿️2", get_gmap_link("35.119099435370714, 135.76280447851192", "driving"), width="stretch")
    with c3:
        st.link_button("貴船🅿️3", get_gmap_link("35.12200558283188, 135.76338043890988", "driving"), width="stretch")
    
    st.link_button("⛩️ 貴船神社(燈)", get_gmap_link("35.12122600441969, 135.76316511443252", "walking"))
    
    st.divider()
    
    # ==========================================
    # 6. 加碼
    # ==========================================
    st.subheader("7️⃣ 貴船神社-奧宮(備)")
    st.markdown("""
* 貴船最有「神域感」的地方
""")
    st.link_button("⛩️ 貴船神社(奧宮🅿️)", get_gmap_link("35.128346903080796, 135.76514244871177", "driving"))

    st.divider()
    
   # ==========================================
    # 5. 回京都
    # ==========================================
    st.subheader("8️⃣ 回京都")
    st.markdown("""
* 🍽 晚餐：京都站周邊
""")
    st.code("MapCode：7 526 455*55", language="text")
    st.link_button("🚗 22 PIECES", get_gmap_link("22 PIECES Kyoto", "driving"))
    
    c1, c2, c3 = st.columns(3)
    with c1:
        st.link_button("飯店🅿️1", get_gmap_link("34.98197527382824, 135.75692279994257", "driving"), width="stretch")
    with c2:
        st.link_button("飯店🅿️2", get_gmap_link("34.98251532812083, 135.75747844958318", "driving"), width="stretch")
    with c3:
        st.link_button("飯店🅿️3", get_gmap_link("34.983058834733335, 135.75752110124756", "driving"), width="stretch")
    show_food_table("京都飯店-吃")
    show_food_table("京都飯店-逛")

        # ==========================================
    # 提醒
    # ==========================================
    st.info("""
💡 **提醒**：明天舟屋日
* 明天 **15:00 一定要從伊根出發**，**20:00 前還車**（滿油）
* 看明天天氣、**NEXCO 西日本** 縱貫道路況（大雪會雪鏈管制或封閉）
* 油量夠不夠（明天來回約 260 km，回程順便加滿）
""")
    st.divider()

    # ==========================================
    # 6. 備用方案
    # ==========================================
    st.subheader("備用方案")
    st.error("""
**山谷纜車停駛 → 改箱館山**（只換地點，其他不變）
* 順序改成：白鬚神社 → 箱館山 → 回程
* 箱館山：8 人座纜車上山 8 分，Play Zone 雪遊區（有雪上電扶梯）、Snow Rafting 雪筏
* 京都出發約 1hr20，白鬚神社往北 25 分

**兩邊都不能上 → 今天改跑 D4 舟屋日內容，明天再賭雪日**
""")
    st.code("MapCode：380 059 028*16", language="text")
    st.link_button("🚗 箱館山滑雪場🅿️", get_gmap_link("35.42761994200102, 135.996006812276", "driving"))



    

if __name__ == "__main__":
    show()
