// 真平台語電子書（國小一～六年級，上下學期共 12 冊）各課核心語詞資料庫
// 每冊每課皆收錄 12 筆語詞（共 58 課、696 筆語詞），供全冊與分課出題使用
// 每筆語詞包含：hanzi（台語漢字）、tailo（教育部臺羅拼音）、meaning（華語意思）

const JENPIN_DATA = {
  "1-1": {
    grade: 1,
    semester: "上學期",
    title: "一上（第一冊）",
    lessons: [
      {
        id: "L1",
        name: "第一課：來去讀冊",
        words: [
          { hanzi: "讀冊", tailo: "tha̍k-tsheh", meaning: "讀書、上學" },
          { hanzi: "學校", tailo: "ha̍k-hāu", meaning: "學校" },
          { hanzi: "老師", tailo: "lāu-su", meaning: "老師" },
          { hanzi: "同學", tailo: "tông-o̍h", meaning: "同學" },
          { hanzi: "𪜶", tailo: "in", meaning: "他們" },
          { hanzi: "歡喜", tailo: "huann-hí", meaning: "高興、歡喜" },
          { hanzi: "學生", tailo: "ha̍k-sing", meaning: "學生" },
          { hanzi: "教室", tailo: "kàu-sik", meaning: "教室" },
          { hanzi: "上課", tailo: "siōng-khò", meaning: "上課" },
          { hanzi: "下課", tailo: "hā-khò", meaning: "下課" },
          { hanzi: "早起", tailo: "tsá-khí", meaning: "早上" },
          { hanzi: "行路", tailo: "kiânn-lōo", meaning: "走路" }
        ]
      },
      {
        id: "L2",
        name: "第二課：阮兜的人",
        words: [
          { hanzi: "阿公", tailo: "a-kong", meaning: "爺爺、外公" },
          { hanzi: "阿媽", tailo: "a-má", meaning: "奶奶、外婆" },
          { hanzi: "阿爸", tailo: "a-pah", meaning: "爸爸" },
          { hanzi: "阿母", tailo: "a-bú", meaning: "媽媽" },
          { hanzi: "阿兄", tailo: "a-hiann", meaning: "哥哥" },
          { hanzi: "小妹", tailo: "sió-muē", meaning: "妹妹" },
          { hanzi: "阿姊", tailo: "a-tsí", meaning: "姊姊" },
          { hanzi: "小弟", tailo: "sió-tī", meaning: "弟弟" },
          { hanzi: "阮兜", tailo: "guán-tau", meaning: "我們家" },
          { hanzi: "厝裡", tailo: "tshù-lāi", meaning: "家裡" },
          { hanzi: "相愛", tailo: "sio-ài", meaning: "相愛、友愛" },
          { hanzi: "一家人", tailo: "tsi̍t-ke-lâng", meaning: "全家人" }
        ]
      },
      {
        id: "L3",
        name: "第三課：鉛筆",
        words: [
          { hanzi: "鉛筆", tailo: "iân-pit", meaning: "鉛筆" },
          { hanzi: "拭仔", tailo: "tshit-á", meaning: "橡皮擦" },
          { hanzi: "冊包", tailo: "tsheh-pau", meaning: "書包" },
          { hanzi: "鉛筆盒仔", tailo: "iân-pit-a̍p-á", meaning: "鉛筆盒" },
          { hanzi: "尺", tailo: "tshioh", meaning: "尺" },
          { hanzi: "寫字", tailo: "siá-jī", meaning: "寫字" },
          { hanzi: "畫圖", tailo: "uē-tôo", meaning: "畫畫" },
          { hanzi: "作業簿", tailo: "tsok-gia̍p-phōo", meaning: "作業簿" },
          { hanzi: "課本", tailo: "khò-pún", meaning: "課本" },
          { hanzi: "色鉛筆", tailo: "sik-iân-pit", meaning: "彩色鉛筆" },
          { hanzi: "剪刀", tailo: "ka-to", meaning: "剪刀" },
          { hanzi: "紙張", tailo: "tsuá-tiunn", meaning: "紙張" }
        ]
      },
      {
        id: "L4",
        name: "第四課：鳥仔",
        words: [
          { hanzi: "鳥仔", tailo: "tsiáu-á", meaning: "小鳥" },
          { hanzi: "狗仔", tailo: "káu-á", meaning: "小狗" },
          { hanzi: "貓仔", tailo: "niau-á", meaning: "小貓" },
          { hanzi: "魚仔", tailo: "hî-á", meaning: "小魚" },
          { hanzi: "兔仔", tailo: "thòo-á", meaning: "兔子" },
          { hanzi: "飛", tailo: "pue", meaning: "飛翔" },
          { hanzi: "雞仔", tailo: "ke-á", meaning: "小雞" },
          { hanzi: "鴨仔", tailo: "ah-á", meaning: "小鴨" },
          { hanzi: "豬仔", tailo: "ti-á", meaning: "小豬" },
          { hanzi: "水牛", tailo: "tsuí-gû", meaning: "水牛" },
          { hanzi: "唱歌", tailo: "tshiùnn-kua", meaning: "唱歌" },
          { hanzi: "跳來跳去", tailo: "thiàu-lâi-thiàu-khì", meaning: "跳來跳去" }
        ]
      },
      {
        id: "L5",
        name: "第五課：一兩三四",
        words: [
          { hanzi: "一", tailo: "tsi̍t", meaning: "數字一" },
          { hanzi: "兩", tailo: "nn̄g", meaning: "兩個的「兩」" },
          { hanzi: "三", tailo: "sann", meaning: "數字三" },
          { hanzi: "四", tailo: "sì", meaning: "數字四" },
          { hanzi: "五", tailo: "gōo", meaning: "數字五" },
          { hanzi: "朋友", tailo: "pîng-iú", meaning: "朋友" },
          { hanzi: "六", tailo: "la̍k", meaning: "數字六" },
          { hanzi: "七", tailo: "tshit", meaning: "數字七" },
          { hanzi: "八", tailo: "peh", meaning: "數字八" },
          { hanzi: "九", tailo: "káu", meaning: "數字九" },
          { hanzi: "十", tailo: "tsa̍p", meaning: "數字十" },
          { hanzi: "算數", tailo: "sǹg-siàu", meaning: "數數兒、算數" }
        ]
      }
    ]
  },
  "1-2": {
    grade: 1,
    semester: "下學期",
    title: "一下（第二冊）",
    lessons: [
      {
        id: "L1",
        name: "第一課：學校的圖書館",
        words: [
          { hanzi: "圖書館", tailo: "tôo-su-kuán", meaning: "圖書館" },
          { hanzi: "教室", tailo: "kàu-sik", meaning: "教室" },
          { hanzi: "運動場", tailo: "ūn-tōng-tiûnn", meaning: "操場、運動場" },
          { hanzi: "借冊", tailo: "tsioh-tsheh", meaning: "借書" },
          { hanzi: "看冊", tailo: "khuànn-tsheh", meaning: "看書" },
          { hanzi: "恬恬", tailo: "tiām-tiām", meaning: "安靜地" },
          { hanzi: "還冊", tailo: "hîng-tsheh", meaning: "還書" },
          { hanzi: "故事書", tailo: "kòo-sū-tsheh", meaning: "故事書" },
          { hanzi: "排隊", tailo: "pâi-tuī", meaning: "排隊" },
          { hanzi: "椅仔", tailo: "í-á", meaning: "椅子" },
          { hanzi: "桌仔", tailo: "toh-á", meaning: "桌子" },
          { hanzi: "借書證", tailo: "tsioh-su-tsìng", meaning: "借書證" }
        ]
      },
      {
        id: "L2",
        name: "第二課：鳥鼠食菝仔",
        words: [
          { hanzi: "鳥鼠", tailo: "niáu-tshí", meaning: "老鼠" },
          { hanzi: "菝仔", tailo: "pa̍t-á", meaning: "芭樂" },
          { hanzi: "芎蕉", tailo: "king-tsio", meaning: "香蕉" },
          { hanzi: "王梨", tailo: "ông-lâi", meaning: "鳳梨" },
          { hanzi: "西瓜", tailo: "si-kue", meaning: "西瓜" },
          { hanzi: "柑仔", tailo: "kam-á", meaning: "橘子" },
          { hanzi: "果子", tailo: "kué-tsí", meaning: "水果" },
          { hanzi: "蓮霧", tailo: "lián-bū", meaning: "蓮霧" },
          { hanzi: "木瓜", tailo: "bo̍k-kue", meaning: "木瓜" },
          { hanzi: "檨仔", tailo: "suāinn-á", meaning: "芒果" },
          { hanzi: "葡萄", tailo: "phû-tô", meaning: "葡萄" },
          { hanzi: "甜", tailo: "tinn", meaning: "甜的" }
        ]
      },
      {
        id: "L3",
        name: "第三課：美麗的學校",
        words: [
          { hanzi: "美麗", tailo: "bí-lē", meaning: "美麗" },
          { hanzi: "花蕊", tailo: "hue-luí", meaning: "花朵" },
          { hanzi: "樹仔", tailo: "tshiū-á", meaning: "樹木" },
          { hanzi: "蝴蝶", tailo: "ôo-tia̍p", meaning: "蝴蝶" },
          { hanzi: "青翠", tailo: "tshinn-tshuì", meaning: "青翠鮮綠" },
          { hanzi: "𨑨迌", tailo: "tshit-thô", meaning: "遊玩、玩耍" },
          { hanzi: "草埔", tailo: "tsháu-poo", meaning: "草地" },
          { hanzi: "溜滑梯", tailo: "liu-huat-thui", meaning: "溜滑梯" },
          { hanzi: "盪鞦韆", tailo: "hàinn-tshian-tshiu", meaning: "盪鞦韆" },
          { hanzi: "大樹跤", tailo: "tuā-tshiū-kha", meaning: "大樹下" },
          { hanzi: "清氣", tailo: "tshing-khì", meaning: "乾淨" },
          { hanzi: "笑容", tailo: "tshiò-iông", meaning: "笑容" }
        ]
      },
      {
        id: "L4",
        name: "第四課：我的面",
        words: [
          { hanzi: "目睭", tailo: "ba̍k-tsiu", meaning: "眼睛" },
          { hanzi: "耳仔", tailo: "hīnn-á", meaning: "耳朵" },
          { hanzi: "鼻仔", tailo: "phīnn-á", meaning: "鼻子" },
          { hanzi: "喙", tailo: "tshuì", meaning: "嘴巴" },
          { hanzi: "目眉", tailo: "ba̍k-bái", meaning: "眉毛" },
          { hanzi: "喙齒", tailo: "tshuì-khí", meaning: "牙齒" },
          { hanzi: "面", tailo: "bīn", meaning: "臉龐" },
          { hanzi: "喙舌", tailo: "tshuì-tsi̍h", meaning: "舌頭" },
          { hanzi: "喙䫌", tailo: "tshuì-phué", meaning: "臉頰" },
          { hanzi: "下頦", tailo: "ē-hâi", meaning: "下巴" },
          { hanzi: "頭毛", tailo: "thâu-mn̂g", meaning: "頭髮" },
          { hanzi: "洗面", tailo: "sé-bīn", meaning: "洗臉" }
        ]
      },
      {
        id: "L5",
        name: "第五課：我的身軀",
        words: [
          { hanzi: "身軀", tailo: "sin-khu", meaning: "身體" },
          { hanzi: "頭殼", tailo: "thâu-khak", meaning: "腦袋、頭" },
          { hanzi: "手", tailo: "tshiú", meaning: "手" },
          { hanzi: "跤", tailo: "kha", meaning: "腳" },
          { hanzi: "腹肚", tailo: "pak-tóo", meaning: "肚子" },
          { hanzi: "健康", tailo: "kiàn-khong", meaning: "健康" },
          { hanzi: "頷頸", tailo: "ām-kún", meaning: "脖子" },
          { hanzi: "肩胛頭", tailo: "king-kah-thâu", meaning: "肩膀" },
          { hanzi: "手掌", tailo: "tshiú-tsiúnn", meaning: "手掌" },
          { hanzi: "手指頭仔", tailo: "tshiú-tsíng-thâu-á", meaning: "手指" },
          { hanzi: "跤頭趺", tailo: "kha-thâu-u", meaning: "膝蓋" },
          { hanzi: "運動", tailo: "ūn-tōng", meaning: "運動" }
        ]
      }
    ]
  },
  "2-1": {
    grade: 2,
    semester: "上學期",
    title: "二上（第三冊）",
    lessons: [
      {
        id: "L1",
        name: "第一課：相借問",
        words: [
          { hanzi: "相借問", tailo: "sio-tsioh-mn̄g", meaning: "互相打招呼、問候" },
          { hanzi: "敖早", tailo: "gâu-tsá", meaning: "早安" },
          { hanzi: "食飽未", tailo: "tsia̍h-pá--buē", meaning: "吃飽了沒" },
          { hanzi: "多謝", tailo: "to-siā", meaning: "謝謝" },
          { hanzi: "免客氣", tailo: "bián-kheh-khì", meaning: "不客氣" },
          { hanzi: "再會", tailo: "tsài-huē", meaning: "再見" },
          { hanzi: "對不住", tailo: "tuì-put-tsū", meaning: "對不起、不好意思" },
          { hanzi: "借過", tailo: "tsioh-kuè", meaning: "借過" },
          { hanzi: "請坐", tailo: "tshiánn-tsē", meaning: "請坐" },
          { hanzi: "好無", tailo: "hó--bô", meaning: "好不好、近來可好" },
          { hanzi: "平安", tailo: "pîng-an", meaning: "平安" },
          { hanzi: "有禮貌", tailo: "ū-lé-māu", meaning: "有禮貌" }
        ]
      },
      {
        id: "L2",
        name: "第二課：狗蟻𪜶兜",
        words: [
          { hanzi: "狗蟻", tailo: "káu-hiā", meaning: "螞蟻" },
          { hanzi: "蜜蜂", tailo: "bi̍t-phang", meaning: "蜜蜂" },
          { hanzi: "草螟公", tailo: "tsháu-meh-kong", meaning: "蚱蜢" },
          { hanzi: "田嬰", tailo: "tshân-inn", meaning: "蜻蜓" },
          { hanzi: "火金姑", tailo: "hué-kim-koo", meaning: "螢火蟲" },
          { hanzi: "搬物件", tailo: "puann-mi̍h-kiānn", meaning: "搬東西" },
          { hanzi: "蟧蜈", tailo: "lâ-giâ", meaning: "蜘蛛" },
          { hanzi: "胡蠅", tailo: "hôo-sîn", meaning: "蒼蠅" },
          { hanzi: "蠓仔", tailo: "báng-á", meaning: "蚊子" },
          { hanzi: "金龜仔", tailo: "kim-ku-á", meaning: "金龜子" },
          { hanzi: "覕", tailo: "bih", meaning: "躲藏" },
          { hanzi: "做伙", tailo: "tsò-hué", meaning: "一起" }
        ]
      },
      {
        id: "L3",
        name: "第三課：露螺",
        words: [
          { hanzi: "露螺", tailo: "lōo-lê", meaning: "蝸牛" },
          { hanzi: "塗蚓仔", tailo: "thôo-kún-á", meaning: "蚯蚓" },
          { hanzi: "水蛙", tailo: "tsuí-ke", meaning: "青蛙" },
          { hanzi: "日頭", tailo: "ji̍t-thâu", meaning: "太陽" },
          { hanzi: "落雨", tailo: "lo̍h-hōo", meaning: "下雨" },
          { hanzi: "寬寬仔行", tailo: "khuann-khuann-á-kiânn", meaning: "慢慢地走" },
          { hanzi: "殼", tailo: "khak", meaning: "外殼" },
          { hanzi: "觸角", tailo: "tshiok-kak", meaning: "觸角" },
          { hanzi: "葉仔", tailo: "hio̍h-á", meaning: "葉子" },
          { hanzi: "水滴", tailo: "tsuí-tih", meaning: "水滴" },
          { hanzi: "塗跤", tailo: "thôo-kha", meaning: "地板、地面" },
          { hanzi: "趖", tailo: "sô", meaning: "爬行（蝸牛、蟲類）" }
        ]
      },
      {
        id: "L4",
        name: "第四課：玉蘭花",
        words: [
          { hanzi: "玉蘭花", tailo: "gio̍k-lân-hue", meaning: "玉蘭花" },
          { hanzi: "日頭花", tailo: "ji̍t-thâu-hue", meaning: "向日葵" },
          { hanzi: "菊花", tailo: "kiok-hue", meaning: "菊花" },
          { hanzi: "芳味", tailo: "phang-bī", meaning: "香味" },
          { hanzi: "紅花", tailo: "âng-hue", meaning: "紅色的花" },
          { hanzi: "白花", tailo: "pe̍h-hue", meaning: "白色的花" },
          { hanzi: "玫瑰花", tailo: "muî-kuì-hue", meaning: "玫瑰花" },
          { hanzi: "茉莉花", tailo: "ba̍k-nī-hue", meaning: "茉莉花" },
          { hanzi: "蓮花", tailo: "liân-hue", meaning: "蓮花" },
          { hanzi: "花盆", tailo: "hue-phûn", meaning: "花盆" },
          { hanzi: "沃水", tailo: "ak-tsuí", meaning: "澆水" },
          { hanzi: "開花", tailo: "khui-hue", meaning: "開花" }
        ]
      },
      {
        id: "L5",
        name: "第五課：起風矣",
        words: [
          { hanzi: "起風", tailo: "khí-hong", meaning: "起風、吹風" },
          { hanzi: "落雨", tailo: "lo̍h-hōo", meaning: "下雨" },
          { hanzi: "出日頭", tailo: "tshut-ji̍t-thâu", meaning: "出太陽" },
          { hanzi: "風吹", tailo: "hong-tshue", meaning: "風箏" },
          { hanzi: "烏雲", tailo: "oo-hûn", meaning: "烏雲" },
          { hanzi: "天氣", tailo: "thinn-khì", meaning: "天氣" },
          { hanzi: "透風", tailo: "thàu-hong", meaning: "颳大風" },
          { hanzi: "好天", tailo: "hó-thinn", meaning: "晴天" },
          { hanzi: "陰天", tailo: "im-thinn", meaning: "陰天" },
          { hanzi: "冷", tailo: "líng", meaning: "寒冷" },
          { hanzi: "熱", tailo: "jua̍h", meaning: "炎熱" },
          { hanzi: "涼爽", tailo: "liâng-sóng", meaning: "涼爽" }
        ]
      }
    ]
  },
  "2-2": {
    grade: 2,
    semester: "下學期",
    title: "二下（第四冊）",
    lessons: [
      {
        id: "L1",
        name: "第一課：來買菜喔",
        words: [
          { hanzi: "買菜", tailo: "bué-tshài", meaning: "買菜" },
          { hanzi: "菜市仔", tailo: "tshài-tshī-á", meaning: "菜市場" },
          { hanzi: "高麗菜", tailo: "ko-lê-tshài", meaning: "高麗菜" },
          { hanzi: "菜頭", tailo: "tshài-thâu", meaning: "白蘿蔔" },
          { hanzi: "紅菜頭", tailo: "âng-tshài-thâu", meaning: "紅蘿蔔" },
          { hanzi: "番薯", tailo: "han-tsî", meaning: "地瓜、番薯" },
          { hanzi: "青菜", tailo: "tshinn-tshài", meaning: "綠色蔬菜" },
          { hanzi: "蕹菜", tailo: "ìng-tshài", meaning: "空心菜" },
          { hanzi: "茄仔", tailo: "kiô-á", meaning: "茄子" },
          { hanzi: "刺瓜", tailo: "tshì-kue", meaning: "小黃瓜" },
          { hanzi: "柑仔蜜", tailo: "kam-á-bi̍t", meaning: "番茄" },
          { hanzi: "新鮮", tailo: "sin-sian", meaning: "新鮮" }
        ]
      },
      {
        id: "L2",
        name: "第二課：歡喜食甲飽",
        words: [
          { hanzi: "食飯", tailo: "tsia̍h-pn̄g", meaning: "吃飯" },
          { hanzi: "食麵", tailo: "tsia̍h-mī", meaning: "吃麵" },
          { hanzi: "滷卵", tailo: "lóo-nn̄g", meaning: "滷蛋" },
          { hanzi: "貢丸湯", tailo: "kòng-uân-thng", meaning: "貢丸湯" },
          { hanzi: "豆干", tailo: "tāu-kuann", meaning: "豆乾" },
          { hanzi: "好食", tailo: "hó-tsia̍h", meaning: "好吃" },
          { hanzi: "滷肉飯", tailo: "lóo-bah-pn̄g", meaning: "滷肉飯" },
          { hanzi: "炒飯", tailo: "tshá-pn̄g", meaning: "炒飯" },
          { hanzi: "水餃", tailo: "tsuí-kiáu", meaning: "水餃" },
          { hanzi: "食飽", tailo: "tsia̍h-pá", meaning: "吃飽" },
          { hanzi: "嘴乾", tailo: "tshuì-ta", meaning: "口渴" },
          { hanzi: "啉茶", tailo: "lim-tê", meaning: "喝茶" }
        ]
      },
      {
        id: "L3",
        name: "第三課：月娘變魔術",
        words: [
          { hanzi: "月娘", tailo: "gue̍h-niû", meaning: "月亮" },
          { hanzi: "天星", tailo: "thinn-tshinn", meaning: "星星" },
          { hanzi: "圓圓", tailo: "înn-înn", meaning: "圓圓的" },
          { hanzi: "彎彎", tailo: "uan-uan", meaning: "彎彎的" },
          { hanzi: "暗時", tailo: "àm-sî", meaning: "晚上、夜晚" },
          { hanzi: "光光", tailo: "kng-kng", meaning: "明亮" },
          { hanzi: "變魔術", tailo: "piàn-môo-su̍t", meaning: "變魔術" },
          { hanzi: "半邊月", tailo: "puànn-pîng-gue̍h", meaning: "半月" },
          { hanzi: "月眉", tailo: "gue̍h-bái", meaning: "彎月" },
          { hanzi: "天頂", tailo: "thinn-tíng", meaning: "天上、天空" },
          { hanzi: "月光", tailo: "gue̍h-kng", meaning: "月光" },
          { hanzi: "暗眠摸", tailo: "àm-bîn-bong", meaning: "黑漆漆" }
        ]
      },
      {
        id: "L4",
        name: "第四課：西北雨",
        words: [
          { hanzi: "西北雨", tailo: "sai-pak-hōo", meaning: "午後雷陣雨" },
          { hanzi: "陳雷公", tailo: "tân-luî-kong", meaning: "打雷" },
          { hanzi: "爍爁", tailo: "sih-nah", meaning: "閃電" },
          { hanzi: "雨傘", tailo: "hōo-suànn", meaning: "雨傘" },
          { hanzi: "雨衫", tailo: "hōo-sann", meaning: "雨衣" },
          { hanzi: "天虹", tailo: "thinn-khēng", meaning: "彩虹" },
          { hanzi: "毛毛仔雨", tailo: "mn̂g-mn̂g-á-hōo", meaning: "毛毛雨" },
          { hanzi: "大雨", tailo: "tuā-hōo", meaning: "大雨" },
          { hanzi: "澹糊糊", tailo: "tâm-kôo-kôo", meaning: "濕答答" },
          { hanzi: "雨鞋", tailo: "hōo-ê", meaning: "雨鞋" },
          { hanzi: "雨停", tailo: "hōo-thîng", meaning: "雨停" },
          { hanzi: "水窟仔", tailo: "tsuí-khut-á", meaning: "小水窪" }
        ]
      },
      {
        id: "L5",
        name: "第五課：騎鐵馬",
        words: [
          { hanzi: "鐵馬", tailo: "thih-bé", meaning: "腳踏車" },
          { hanzi: "公車", tailo: "kong-tshia", meaning: "公車" },
          { hanzi: "火車", tailo: "hué-tshia", meaning: "火車" },
          { hanzi: "飛行機", tailo: "pue-lîng-ki", meaning: "飛機" },
          { hanzi: "船隻", tailo: "tsûn-tsiah", meaning: "船隻" },
          { hanzi: "公園", tailo: "kong-hn̂g", meaning: "公園" },
          { hanzi: "oo-tóo-bái", tailo: "oo-tóo-bái", meaning: "摩托車、機車" },
          { hanzi: "計程車", tailo: "kè-thîng-tshia", meaning: "計程車" },
          { hanzi: "安全帽", tailo: "an-tsuân-bō", meaning: "安全帽" },
          { hanzi: "馬路", tailo: "bé-lōo", meaning: "馬路" },
          { hanzi: "車頭", tailo: "tshia-thâu", meaning: "車站" },
          { hanzi: "散步", tailo: "sàn-pōo", meaning: "散步" }
        ]
      }
    ]
  },
  "3-1": {
    grade: 3,
    semester: "上學期",
    title: "三上（第五冊）",
    lessons: [
      {
        id: "L1",
        name: "第一課：食晝",
        words: [
          { hanzi: "食晝", tailo: "tsia̍h-tàu", meaning: "吃午餐" },
          { hanzi: "食早", tailo: "tsia̍h-tsá", meaning: "吃早餐" },
          { hanzi: "食暗", tailo: "tsia̍h-àm", meaning: "吃晚餐" },
          { hanzi: "碗箸", tailo: "uánn-tī", meaning: "碗筷" },
          { hanzi: "湯匙", tailo: "thng-sî", meaning: "湯匙" },
          { hanzi: "便當", tailo: "piān-tong", meaning: "便當" },
          { hanzi: "營養午餐", tailo: "îng-ióng-ngóo-tshan", meaning: "營養午餐" },
          { hanzi: "菜色", tailo: "tshài-sik", meaning: "菜色" },
          { hanzi: "盛飯", tailo: "té-pn̄g", meaning: "盛飯" },
          { hanzi: "添湯", tailo: "thinn-thng", meaning: "盛湯" },
          { hanzi: "洗碗", tailo: "sé-uánn", meaning: "洗碗" },
          { hanzi: "惜食", tailo: "sioh-tsia̍h", meaning: "愛惜食物" }
        ]
      },
      {
        id: "L2",
        name: "第二課：踅夜市",
        words: [
          { hanzi: "踅夜市", tailo: "se̍h-iā-tshī", meaning: "逛夜市" },
          { hanzi: "蚵仔煎", tailo: "ô-á-tsian", meaning: "蚵仔煎" },
          { hanzi: "臭豆腐", tailo: "tshàu-tāu-hū", meaning: "臭豆腐" },
          { hanzi: "雞排", tailo: "ke-pâi", meaning: "雞排" },
          { hanzi: "珍珠奶茶", tailo: "tsin-tsu-ni-tê", meaning: "珍珠奶茶" },
          { hanzi: "鬧熱", tailo: "lāu-jia̍t", meaning: "熱鬧" },
          { hanzi: "蚵仔麵線", tailo: "ô-á-mī-suànn", meaning: "蚵仔麵線" },
          { hanzi: "肉圓", tailo: "bah-uân", meaning: "肉圓" },
          { hanzi: "豬血糕", tailo: "ti-hueh-ko", meaning: "豬血糕" },
          { hanzi: "鹽酥雞", tailo: "iâm-soo-ke", meaning: "鹽酥雞" },
          { hanzi: "套圈仔", tailo: "thò-khuân-á", meaning: "套圈圈遊戲" },
          { hanzi: "拍彈珠", tailo: "phah-tuānn-tsu", meaning: "打彈珠" }
        ]
      },
      {
        id: "L3",
        name: "第三課：運動會",
        words: [
          { hanzi: "運動會", tailo: "ūn-tōng-huē", meaning: "運動會" },
          { hanzi: "走相逐", tailo: "tsáu-sio-jiok", meaning: "賽跑、追逐" },
          { hanzi: "giú大索", tailo: "giú-tuā-soh", meaning: "拔河 (搝大索)" },
          { hanzi: "跳索仔", tailo: "thiàu-soh-á", meaning: "跳繩" },
          { hanzi: "拍球", tailo: "phah-kiû", meaning: "打球" },
          { hanzi: "加油", tailo: "ka-iû", meaning: "加油" },
          { hanzi: "大會操", tailo: "tāi-huē-tshau", meaning: "大會操" },
          { hanzi: "選手", tailo: "suán-tshiú", meaning: "選手" },
          { hanzi: "裁判", tailo: "tshâi-phuànn", meaning: "裁判" },
          { hanzi: "起跑線", tailo: "khí-pháu-suànn", meaning: "起跑線" },
          { hanzi: "終點", tailo: "tsiong-tiám", meaning: "終點" },
          { hanzi: "得獎", tailo: "tit-tsióng", meaning: "得獎" }
        ]
      },
      {
        id: "L4",
        name: "第四課：擔仔位",
        words: [
          { hanzi: "擔仔位", tailo: "tànn-á-uī", meaning: "攤位" },
          { hanzi: "頭家", tailo: "thâu-ke", meaning: "老闆" },
          { hanzi: "人客", tailo: "lâng-kheh", meaning: "客人" },
          { hanzi: "俗閣大碗", tailo: "sio̍k-koh-tuā-uánn", meaning: "便宜又划算" },
          { hanzi: "買賣", tailo: "bué-bē", meaning: "買賣" },
          { hanzi: "生理", tailo: "sing-lí", meaning: "生意" },
          { hanzi: "開張", tailo: "khai-tiunn", meaning: "開張營業" },
          { hanzi: "算錢", tailo: "sǹg-tsînn", meaning: "算帳、算錢" },
          { hanzi: "找錢", tailo: "tsāu-tsînn", meaning: "找零錢" },
          { hanzi: "大拍賣", tailo: "tuā-phah-bē", meaning: "大特賣" },
          { hanzi: "招牌", tailo: "tsiau-pâi", meaning: "招牌" },
          { hanzi: "親切", tailo: "tshin-tshiat", meaning: "親切" }
        ]
      },
      {
        id: "L5",
        name: "第五課：咱的英雄",
        words: [
          { hanzi: "英雄", tailo: "ing-hiông", meaning: "英雄" },
          { hanzi: "認真", tailo: "jīn-tsin", meaning: "認真" },
          { hanzi: "拍拚", tailo: "phah-piànn", meaning: "打拚、努力" },
          { hanzi: "得獎", tailo: "tit-tsióng", meaning: "得獎" },
          { hanzi: "第一名", tailo: "tē-it-miâ", meaning: "第一名" },
          { hanzi: "真𠢕", tailo: "tsin-gâu", meaning: "很棒、很厲害" },
          { hanzi: "勇敢", tailo: "ióng-kám", meaning: "勇敢" },
          { hanzi: "堅持", tailo: "kian-tshî", meaning: "堅持" },
          { hanzi: "練習", tailo: "liān-si̍p", meaning: "練習" },
          { hanzi: "成功", tailo: "sîng-kong", meaning: "成功" },
          { hanzi: "榜樣", tailo: "póng-iūnn", meaning: "榜樣" },
          { hanzi: "光榮", tailo: "kong-îng", meaning: "光榮" }
        ]
      }
    ]
  },
  "3-2": {
    grade: 3,
    semester: "下學期",
    title: "三下（第六冊）",
    lessons: [
      {
        id: "L1",
        name: "第一課：運動會",
        words: [
          { hanzi: "隊伍", tailo: "tuī-ngóo", meaning: "隊伍" },
          { hanzi: "比賽", tailo: "pí-sài", meaning: "比賽" },
          { hanzi: "接力賽", tailo: "tsiap-li̍k-sài", meaning: "接力賽" },
          { hanzi: "金牌", tailo: "kim-pâi", meaning: "金牌" },
          { hanzi: "出力", tailo: "tshut-la̍t", meaning: "用力、使力" },
          { hanzi: "贏", tailo: "iânn", meaning: "贏、獲勝" },
          { hanzi: "銀牌", tailo: "gîn-pâi", meaning: "銀牌" },
          { hanzi: "銅牌", tailo: "tâng-pâi", meaning: "銅牌" },
          { hanzi: "獎盃", tailo: "tsióng-pue", meaning: "獎盃" },
          { hanzi: "接棒", tailo: "tsiap-pāng", meaning: "接棒" },
          { hanzi: "團結", tailo: "thuân-kiat", meaning: "團結" },
          { hanzi: "喝咻", tailo: "huah-hiu", meaning: "吶喊加油" }
        ]
      },
      {
        id: "L2",
        name: "第二課：露營",
        words: [
          { hanzi: "露營", tailo: "lōo-iânn", meaning: "露營" },
          { hanzi: "布篷", tailo: "pòo-phâng", meaning: "帳篷" },
          { hanzi: "手電筒", tailo: "tshiú-tiān-tâng", meaning: "手電筒" },
          { hanzi: "烘肉", tailo: "hang-bah", meaning: "烤肉" },
          { hanzi: "山林", tailo: "suann-lîm", meaning: "山林" },
          { hanzi: "天星", tailo: "thinn-tshinn", meaning: "星星" },
          { hanzi: "營火", tailo: "iânn-hué", meaning: "營火" },
          { hanzi: "睡袋", tailo: "suī-tē", meaning: "睡袋" },
          { hanzi: "背包", tailo: "puē-pau", meaning: "背包" },
          { hanzi: "溪水", tailo: "khe-tsuí", meaning: "溪水" },
          { hanzi: "蟲聲", tailo: "thâng-siann", meaning: "蟲鳴聲" },
          { hanzi: "大自然", tailo: "tāi-tsū-jiân", meaning: "大自然" }
        ]
      },
      {
        id: "L3",
        name: "第三課：緊緊緊",
        words: [
          { hanzi: "緊緊緊", tailo: "kín-kín-kín", meaning: "快快快" },
          { hanzi: "赴車", tailo: "hù-tshia", meaning: "趕車" },
          { hanzi: "時間", tailo: "sî-kan", meaning: "時間" },
          { hanzi: "時鐘", tailo: "sî-tsing", meaning: "時鐘" },
          { hanzi: "準時", tailo: "tsún-sî", meaning: "準時" },
          { hanzi: "晏去", tailo: "uànn--khì", meaning: "晚了、遲到" },
          { hanzi: "手錶仔", tailo: "tshiú-pió-á", meaning: "手錶" },
          { hanzi: "鬧鐘", tailo: "lāu-tsing", meaning: "鬧鐘" },
          { hanzi: "分鐘", tailo: "hun-tsing", meaning: "分鐘" },
          { hanzi: "點鐘", tailo: "tiám-tsing", meaning: "小時、鐘頭" },
          { hanzi: "趕緊", tailo: "kuánn-kín", meaning: "趕快" },
          { hanzi: "來不及", tailo: "lâi-put-ki̍p", meaning: "來不及" }
        ]
      },
      {
        id: "L4",
        name: "第四課：好佳哉",
        words: [
          { hanzi: "好佳哉", tailo: "hó-ka-tsài", meaning: "幸好、好險" },
          { hanzi: "細膩", tailo: "sè-jī", meaning: "小心、注意" },
          { hanzi: "安全", tailo: "an-tsuân", meaning: "安全" },
          { hanzi: "危險", tailo: "guî-hiám", meaning: "危險" },
          { hanzi: "相幫忙", tailo: "sio-pāng-bâng", meaning: "互相幫忙" },
          { hanzi: "平安", tailo: "pîng-an", meaning: "平安" },
          { hanzi: "跋倒", tailo: "pua̍h-tó", meaning: "跌倒" },
          { hanzi: "著傷", tailo: "tio̍h-siong", meaning: "受傷" },
          { hanzi: "藥仔", tailo: "io̍h-á", meaning: "藥物" },
          { hanzi: "保健室", tailo: "pó-kiān-sik", meaning: "保健室" },
          { hanzi: "檢查", tailo: "kiám-tsa", meaning: "檢查" },
          { hanzi: "放心", tailo: "hòng-sim", meaning: "放心" }
        ]
      },
      {
        id: "L5",
        name: "第五課：時間走傷緊",
        words: [
          { hanzi: "日曆", tailo: "ji̍t-la̍h", meaning: "日曆" },
          { hanzi: "禮拜日", tailo: "lé-pài-ji̍t", meaning: "星期日" },
          { hanzi: "今仔日", tailo: "kin-á-ji̍t", meaning: "今天" },
          { hanzi: "明仔載", tailo: "bîn-á-tsài", meaning: "明天" },
          { hanzi: "昨昏", tailo: "tsa-hng", meaning: "昨天" },
          { hanzi: "珍惜", tailo: "tin-sioh", meaning: "珍惜" },
          { hanzi: "拜一", tailo: "pài-it", meaning: "星期一" },
          { hanzi: "拜五", tailo: "pài-gōo", meaning: "星期五" },
          { hanzi: "頂禮拜", tailo: "tíng-lé-pài", meaning: "上星期" },
          { hanzi: "後禮拜", tailo: "āu-lé-pài", meaning: "下星期" },
          { hanzi: "頂個月", tailo: "tíng-kò-gue̍h", meaning: "上個月" },
          { hanzi: "明年", tailo: "mê-nî", meaning: "明年" }
        ]
      }
    ]
  },
  "4-1": {
    grade: 4,
    semester: "上學期",
    title: "四上（第七冊）",
    lessons: [
      {
        id: "L1",
        name: "第一課：好日",
        words: [
          { hanzi: "好日", tailo: "hó-ji̍t", meaning: "好日子、吉日" },
          { hanzi: "結婚", tailo: "kiat-hun", meaning: "結婚" },
          { hanzi: "新娘", tailo: "sin-niû", meaning: "新娘" },
          { hanzi: "新郎", tailo: "sin-lông", meaning: "新郎" },
          { hanzi: "紅包", tailo: "âng-pau", meaning: "紅包" },
          { hanzi: "恭喜", tailo: "kiong-hí", meaning: "恭喜" },
          { hanzi: "喜餅", tailo: "hí-piánn", meaning: "喜餅" },
          { hanzi: "喜酒", tailo: "hí-tsiú", meaning: "喜酒、婚宴" },
          { hanzi: "祝福", tailo: "tsiok-hok", meaning: "祝福" },
          { hanzi: "幸福", tailo: "hīng-hok", meaning: "幸福" },
          { hanzi: "親情", tailo: "tshin-tsiânn", meaning: "親戚" },
          { hanzi: "百年好合", tailo: "pah-nî-hó-ha̍p", meaning: "百年好合" }
        ]
      },
      {
        id: "L2",
        name: "第二課：辦桌",
        words: [
          { hanzi: "辦桌", tailo: "pān-toh", meaning: "辦桌宴客" },
          { hanzi: "總舖師", tailo: "tsóng-phòo-sai", meaning: "辦桌主廚" },
          { hanzi: "人客", tailo: "lâng-kheh", meaning: "賓客、客人" },
          { hanzi: "米糕", tailo: "bí-ko", meaning: "米糕" },
          { hanzi: "魚翅羹", tailo: "hî-tshì-kinn", meaning: "羹湯料理" },
          { hanzi: "澎湃", tailo: "phong-phài", meaning: "豐盛" },
          { hanzi: "封肉", tailo: "hong-bah", meaning: "滷蹄膀、封肉" },
          { hanzi: "佛跳牆", tailo: "pu̍t-thiàu-tshiûnn", meaning: "佛跳牆" },
          { hanzi: "白斬雞", tailo: "pe̍h-tsám-ke", meaning: "白斬雞" },
          { hanzi: "甜湯", tailo: "tinn-thng", meaning: "甜湯" },
          { hanzi: "打包", tailo: "tánn-pau", meaning: "打包帶走" },
          { hanzi: "好料", tailo: "hó-liāu", meaning: "佳餚美食" }
        ]
      },
      {
        id: "L3",
        name: "第三課：青紅燈",
        words: [
          { hanzi: "青紅燈", tailo: "tshinn-âng-ting", meaning: "紅綠燈" },
          { hanzi: "過路", tailo: "kuè-lōo", meaning: "過馬路" },
          { hanzi: "十字路口", tailo: "si̍p-jī-lōo-kháu", meaning: "十字路口" },
          { hanzi: "交通", tailo: "kau-thong", meaning: "交通" },
          { hanzi: "斑馬線", tailo: "pan-bé-suànn", meaning: "斑馬線" },
          { hanzi: "停落來", tailo: "thîng--lo̍h-lâi", meaning: "停下來" },
          { hanzi: "青燈", tailo: "tshinn-ting", meaning: "綠燈" },
          { hanzi: "紅燈", tailo: "âng-ting", meaning: "紅燈" },
          { hanzi: "黃燈", tailo: "n̂g-ting", meaning: "黃燈" },
          { hanzi: "人行道", tailo: "jîn-hîng-tō", meaning: "人行道" },
          { hanzi: "天橋", tailo: "thinn-kiô", meaning: "天橋" },
          { hanzi: "交通安全", tailo: "kau-thong-an-tsuân", meaning: "交通安全" }
        ]
      },
      {
        id: "L4",
        name: "第四課：洗身軀",
        words: [
          { hanzi: "洗身軀", tailo: "sé-sin-khu", meaning: "洗澡" },
          { hanzi: "茶箍", tailo: "tê-khoo", meaning: "肥皂" },
          { hanzi: "面巾", tailo: "bīn-kin", meaning: "毛巾" },
          { hanzi: "齒抿仔", tailo: "khí-bín-á", meaning: "牙刷" },
          { hanzi: "齒膏", tailo: "khí-ko", meaning: "牙膏" },
          { hanzi: "清氣", tailo: "tshing-khì", meaning: "乾淨" },
          { hanzi: "洗頭", tailo: "sé-thâu", meaning: "洗頭" },
          { hanzi: "洗喙", tailo: "sé-tshuì", meaning: "刷牙漱口" },
          { hanzi: "洗手", tailo: "sé-tshiú", meaning: "洗手" },
          { hanzi: "便所", tailo: "piān-sóo", meaning: "廁所、浴室" },
          { hanzi: "燒水", tailo: "sio-tsuí", meaning: "熱水" },
          { hanzi: "拭焦", tailo: "tshit-ta", meaning: "擦乾" }
        ]
      },
      {
        id: "L5",
        name: "第五課：摒掃",
        words: [
          { hanzi: "摒掃", tailo: "piànn-sàu", meaning: "打掃" },
          { hanzi: "掃帚", tailo: "sàu-tshiú", meaning: "掃把" },
          { hanzi: "糞斗", tailo: "pùn-táu", meaning: "畚箕" },
          { hanzi: "桌布", tailo: "toh-pòo", meaning: "抹布、桌巾" },
          { hanzi: "糞埽", tailo: "pùn-sò", meaning: "垃圾" },
          { hanzi: "拭桌仔", tailo: "tshit-toh-á", meaning: "擦桌子" },
          { hanzi: "拖塗跤", tailo: "thua-thôo-kha", meaning: "拖地" },
          { hanzi: "拖把", tailo: "thua-pá", meaning: "拖把" },
          { hanzi: "水桶", tailo: "tsuí-tháng", meaning: "水桶" },
          { hanzi: "倒糞埽", tailo: "tò-pùn-sò", meaning: "倒垃圾" },
          { hanzi: "資源回收", tailo: "tsu-guân-huê-siu", meaning: "資源回收" },
          { hanzi: "整理", tailo: "tsíng-lí", meaning: "整理" }
        ]
      }
    ]
  },
  "4-2": {
    grade: 4,
    semester: "下學期",
    title: "四下（第八冊）",
    lessons: [
      {
        id: "L1",
        name: "第一課：草地風景媠",
        words: [
          { hanzi: "草地", tailo: "tsháu-tē", meaning: "鄉下、郊外" },
          { hanzi: "風景", tailo: "hong-kíng", meaning: "風景" },
          { hanzi: "真媠", tailo: "tsin-suí", meaning: "很美、很漂亮" },
          { hanzi: "田園", tailo: "tshân-hn̂g", meaning: "田園" },
          { hanzi: "白翎鷥", tailo: "pe̍h-līng-si", meaning: "白鷺鷥" },
          { hanzi: "空氣", tailo: "khong-khì", meaning: "空氣" },
          { hanzi: "稻仔", tailo: "tiū-á", meaning: "稻子" },
          { hanzi: "水溝仔", tailo: "tsuí-kau-á", meaning: "小水溝" },
          { hanzi: "山頂", tailo: "suann-tíng", meaning: "山上" },
          { hanzi: "竹仔林", tailo: "tik-á-nâ", meaning: "竹林" },
          { hanzi: "清幽", tailo: "tshing-iu", meaning: "清幽寧靜" },
          { hanzi: "散心", tailo: "suànn-sim", meaning: "散心" }
        ]
      },
      {
        id: "L2",
        name: "第二課：便利商店",
        words: [
          { hanzi: "便利商店", tailo: "piān-lī-siong-tiàm", meaning: "便利商店" },
          { hanzi: "買物件", tailo: "bué-mi̍h-kiānn", meaning: "買東西" },
          { hanzi: "納錢", tailo: "la̍p-tsînn", meaning: "繳費" },
          { hanzi: "寄物件", tailo: "kià-mi̍h-kiānn", meaning: "寄包裹" },
          { hanzi: "收銀機", tailo: "siu-gîn-ki", meaning: "收銀機" },
          { hanzi: "利便", tailo: "lī-piān", meaning: "方便" },
          { hanzi: "店員", tailo: "tiàm-uân", meaning: "店員" },
          { hanzi: "飲料", tailo: "ím-liāu", meaning: "飲料" },
          { hanzi: "發票", tailo: "huat-phiò", meaning: "發票" },
          { hanzi: "提款機", tailo: "thê-khuán-ki", meaning: "提款機" },
          { hanzi: "二十四點鐘", tailo: "jī-tsa̍p-sì-tiám-tsing", meaning: "24小時" },
          { hanzi: "服務", tailo: "ho̍k-bū", meaning: "服務" }
        ]
      },
      {
        id: "L3",
        name: "第三課：烏白唬",
        words: [
          { hanzi: "烏白講", tailo: "oo-pe̍h-kóng", meaning: "隨便亂講" },
          { hanzi: "老實", tailo: "lāu-si̍t", meaning: "誠實、老實" },
          { hanzi: "信用", tailo: "sìn-iōng", meaning: "信用" },
          { hanzi: "騙人", tailo: "phiàn--lâng", meaning: "騙人" },
          { hanzi: "相信", tailo: "siong-sìn", meaning: "相信" },
          { hanzi: "規矩", tailo: "kui-kí", meaning: "規矩" },
          { hanzi: "講白賊", tailo: "kóng-pe̍h-tsha̍t", meaning: "說謊" },
          { hanzi: "實在", tailo: "si̍t-tsāi", meaning: "實在、真誠" },
          { hanzi: "做人", tailo: "tsò-lâng", meaning: "做人處事" },
          { hanzi: "誤會", tailo: "gōo-huē", meaning: "誤會" },
          { hanzi: "失禮", tailo: "sit-lé", meaning: "抱歉、失禮" },
          { hanzi: "原諒", tailo: "guân-liōng", meaning: "原諒" }
        ]
      },
      {
        id: "L4",
        name: "第四課：欲按怎",
        words: [
          { hanzi: "欲按怎", tailo: "beh-án-tsuánn", meaning: "要怎麼辦" },
          { hanzi: "想辦法", tailo: "siūnn-pān-huat", meaning: "想辦法" },
          { hanzi: "討論", tailo: "thó-lūn", meaning: "討論" },
          { hanzi: "解決", tailo: "kái-kuat", meaning: "解決" },
          { hanzi: "合作", tailo: "ha̍p-tsok", meaning: "合作" },
          { hanzi: "免煩惱", tailo: "bián-huân-ló", meaning: "不用擔心" },
          { hanzi: "問題", tailo: "būn-tê", meaning: "問題" },
          { hanzi: "意見", tailo: "ì-kiàn", meaning: "意見" },
          { hanzi: "決定", tailo: "kuat-tīng", meaning: "決定" },
          { hanzi: "幫忙", tailo: "pāng-bâng", meaning: "幫忙" },
          { hanzi: "順利", tailo: "sūn-lī", meaning: "順利" },
          { hanzi: "達成", tailo: "ta̍t-sîng", meaning: "達成" }
        ]
      },
      {
        id: "L5",
        name: "第五課：時間表",
        words: [
          { hanzi: "時間表", tailo: "sî-kan-pió", meaning: "時間表" },
          { hanzi: "安排", tailo: "an-pâi", meaning: "安排" },
          { hanzi: "寫功課", tailo: "siá-kong-khò", meaning: "寫作業" },
          { hanzi: "運動", tailo: "ūn-tōng", meaning: "運動" },
          { hanzi: "早起", tailo: "tsá-khí", meaning: "早上" },
          { hanzi: "下晡", tailo: "ē-poo", meaning: "下午" },
          { hanzi: "中晝", tailo: "tiong-tàu", meaning: "中午" },
          { hanzi: "暗暝", tailo: "àm-mê", meaning: "夜晚" },
          { hanzi: "睏飽", tailo: "khùn-pá", meaning: "睡飽" },
          { hanzi: "精神", tailo: "tsing-sîn", meaning: "精神" },
          { hanzi: "計劃", tailo: "kè-uē", meaning: "計畫" },
          { hanzi: "習慣", tailo: "si̍p-kuàn", meaning: "習慣" }
        ]
      }
    ]
  },
  "5-1": {
    grade: 5,
    semester: "上學期",
    title: "五上（第九冊）",
    lessons: [
      {
        id: "L1",
        name: "第一課：線頂買賣",
        words: [
          { hanzi: "線頂", tailo: "suànn-tíng", meaning: "線上、網路上" },
          { hanzi: "網路", tailo: "bāng-lōo", meaning: "網路" },
          { hanzi: "電腦", tailo: "tiān-náu", meaning: "電腦" },
          { hanzi: "手機仔", tailo: "tshiú-ki-á", meaning: "手機" },
          { hanzi: "訂貨", tailo: "tīng-huè", meaning: "訂貨" },
          { hanzi: "宅配", tailo: "ta̍k-phuè", meaning: "宅配到府" },
          { hanzi: "網站", tailo: "bāng-tsām", meaning: "網站" },
          { hanzi: "刷卡", tailo: "suat-khah", meaning: "刷卡付款" },
          { hanzi: "取貨", tailo: "tshú-huè", meaning: "取貨" },
          { hanzi: "評價", tailo: "phîng-kè", meaning: "評價" },
          { hanzi: "退貨", tailo: "thè-huè", meaning: "退貨" },
          { hanzi: "小心受騙", tailo: "sió-sim siū-phiàn", meaning: "小心受騙" }
        ]
      },
      {
        id: "L2",
        name: "第二課：未來一直來",
        words: [
          { hanzi: "未來", tailo: "bī-lâi", meaning: "未來" },
          { hanzi: "科技", tailo: "kho-ki", meaning: "科技" },
          { hanzi: "機器人", tailo: "ki-khì-lâng", meaning: "機器人" },
          { hanzi: "進步", tailo: "tsìn-pōo", meaning: "進步" },
          { hanzi: "發明", tailo: "huat-bîng", meaning: "發明" },
          { hanzi: "世界", tailo: "sè-kài", meaning: "世界" },
          { hanzi: "人工智慧", tailo: "jîn-kong-tì-huī", meaning: "人工智慧" },
          { hanzi: "電動車", tailo: "tiān-tōng-tshia", meaning: "電動車" },
          { hanzi: "太陽能", tailo: "thài-iông-lîng", meaning: "太陽能" },
          { hanzi: "太空船", tailo: "thài-khong-tsûn", meaning: "太空船" },
          { hanzi: "研究", tailo: "gián-kiù", meaning: "研究" },
          { hanzi: "改變", tailo: "kái-piàn", meaning: "改變" }
        ]
      },
      {
        id: "L3",
        name: "第三課：燒冷冰",
        words: [
          { hanzi: "燒冷冰", tailo: "sio-líng-ping", meaning: "燒冷冰（特色甜品）" },
          { hanzi: "圓仔", tailo: "înn-á", meaning: "湯圓" },
          { hanzi: "紅豆", tailo: "âng-tāu", meaning: "紅豆" },
          { hanzi: "綠豆", tailo: "li̍k-tāu", meaning: "綠豆" },
          { hanzi: "芋仔", tailo: "ōo-á", meaning: "芋頭" },
          { hanzi: "甜粅粅", tailo: "tinn-but-but", meaning: "甜滋滋" },
          { hanzi: "粉圓", tailo: "hún-înn", meaning: "粉圓" },
          { hanzi: "愛玉", tailo: "ài-gio̍k", meaning: "愛玉" },
          { hanzi: "仙草", tailo: "sian-tsháu", meaning: "仙草" },
          { hanzi: "剉冰", tailo: "tshuah-ping", meaning: "剉冰" },
          { hanzi: "煉乳", tailo: "liān-jú", meaning: "煉乳" },
          { hanzi: "清涼", tailo: "tshing-liâng", meaning: "清涼" }
        ]
      },
      {
        id: "L4",
        name: "第四課：媠䆀無地比",
        words: [
          { hanzi: "媠䆀", tailo: "suí-bái", meaning: "美醜" },
          { hanzi: "特色", tailo: "ti̍k-sik", meaning: "特色" },
          { hanzi: "欣賞", tailo: "him-sióng", meaning: "欣賞" },
          { hanzi: "尊重", tailo: "tsun-tiōng", meaning: "尊重" },
          { hanzi: "家己", tailo: "ka-kī", meaning: "自己" },
          { hanzi: "自信", tailo: "tsū-sìn", meaning: "自信" },
          { hanzi: "優點", tailo: "iu-tiám", meaning: "優點" },
          { hanzi: "特別", tailo: "ti̍k-pia̍t", meaning: "特別" },
          { hanzi: "比較", tailo: "pí-kàu", meaning: "比較" },
          { hanzi: "包容", tailo: "pau-iông", meaning: "包容" },
          { hanzi: "氣質", tailo: "khì-tsit", meaning: "氣質" },
          { hanzi: "獨一無二", tailo: "to̍k-it-bû-jī", meaning: "獨一無二" }
        ]
      },
      {
        id: "L5",
        name: "第五課：過年",
        words: [
          { hanzi: "過年", tailo: "kuè-nî", meaning: "過農曆年" },
          { hanzi: "圍爐", tailo: "uî-lôo", meaning: "除夕圍爐" },
          { hanzi: "年兜", tailo: "nî-tau", meaning: "過年期間" },
          { hanzi: "春聯", tailo: "tshun-liân", meaning: "春聯" },
          { hanzi: "甜粿", tailo: "tinn-kué", meaning: "年糕" },
          { hanzi: "煠長年菜", tailo: "sa̍h-tn̂g-nî-tshài", meaning: "煮長年菜" },
          { hanzi: "壓歲錢", tailo: "ah-suè-tsînn", meaning: "壓歲錢" },
          { hanzi: "發粿", tailo: "huat-kué", meaning: "發糕" },
          { hanzi: "菜頭粿", tailo: "tshài-thâu-kué", meaning: "蘿蔔糕" },
          { hanzi: "拜年", tailo: "pài-nî", meaning: "拜年" },
          { hanzi: "放炮仔", tailo: "pàng-phàu-á", meaning: "放鞭炮" },
          { hanzi: "大吉大利", tailo: "tāi-kiat-tāi-lī", meaning: "大吉大利" }
        ]
      }
    ]
  },
  "5-2": {
    grade: 5,
    semester: "下學期",
    title: "五下（第十冊）",
    ebookUrl: "https://ebook.jen-pin.com.tw/112-p-tai-book-10-tr/",
    lessons: [
      {
        id: "L1",
        name: "第一課：地動（手、跤的動作）",
        words: [
          { hanzi: "𬦰", tailo: "peh", meaning: "爬（例：𬦰山、向上爬）" },
          { hanzi: "抹", tailo: "buah", meaning: "塗抹（例：抹藥仔）" },
          { hanzi: "捾", tailo: "kuānn", meaning: "提、拎（例：捾袋仔）" },
          { hanzi: "擲", tailo: "tàn", meaning: "丟、投擲（例：擲球）" },
          { hanzi: "擛", tailo: "ia̍t", meaning: "揮動、搧（例：擛手）" },
          { hanzi: "攑", tailo: "gia̍h", meaning: "舉、拿（例：攑手、攑雨傘）" },
          { hanzi: "行", tailo: "kiânn", meaning: "走、行走（例：行路）" },
          { hanzi: "揹", tailo: "phāinn", meaning: "背負（例：揹冊包）" },
          { hanzi: "指", tailo: "kí", meaning: "用手指比（例：指方向）" },
          { hanzi: "走", tailo: "tsáu", meaning: "跑、奔跑（例：走相逐）" },
          { hanzi: "地動", tailo: "tē-tāng", meaning: "地震" },
          { hanzi: "避難包", tailo: "pī-lān-pau", meaning: "緊急避難包" }
        ]
      },
      {
        id: "L2",
        name: "第二課：火燒厝（政府單位）",
        words: [
          { hanzi: "縣(市)政府", tailo: "kuān (tshī) tsìng-hú", meaning: "縣（市）政府" },
          { hanzi: "圖書館", tailo: "tôo-su-kuán", meaning: "圖書館" },
          { hanzi: "警察局", tailo: "kíng-tshat-kio̍k", meaning: "警察局" },
          { hanzi: "衛生所", tailo: "uē-sing-sóo", meaning: "衛生所" },
          { hanzi: "環保局", tailo: "khuân-pó-kio̍k", meaning: "環保局" },
          { hanzi: "火燒厝", tailo: "hué-sio-tshù", meaning: "火災、失火" },
          { hanzi: "消防局", tailo: "siau-hông-kio̍k", meaning: "消防局" },
          { hanzi: "消防車", tailo: "siau-hông-tshia", meaning: "消防車" },
          { hanzi: "區公所", tailo: "khu-kong-sóo", meaning: "區公所" },
          { hanzi: "郵局", tailo: "iû-kio̍k", meaning: "郵局" },
          { hanzi: "戶政事務所", tailo: "hōo-tsìng sū-bū-sóo", meaning: "戶政事務所" },
          { hanzi: "救護車", tailo: "kiù-hōo-tshia", meaning: "救護車" }
        ]
      },
      {
        id: "L3",
        name: "第三課：行踏（臺灣名勝）",
        words: [
          { hanzi: "合歡山", tailo: "ha̍p-huan-suann", meaning: "名勝：合歡山" },
          { hanzi: "溪頭", tailo: "khe-thâu", meaning: "名勝：溪頭" },
          { hanzi: "阿里山", tailo: "a-lí-san", meaning: "名勝：阿里山" },
          { hanzi: "玉山", tailo: "gio̍k-san", meaning: "名勝：玉山" },
          { hanzi: "旗津", tailo: "kî-tin", meaning: "名勝：旗津" },
          { hanzi: "小琉球", tailo: "sió-liû-khiû", meaning: "名勝：小琉球" },
          { hanzi: "太魯閣", tailo: "thài-lóo-kooh", meaning: "名勝：太魯閣" },
          { hanzi: "鵝鑾鼻", tailo: "gô-luân-phīnn", meaning: "名勝：鵝鑾鼻" },
          { hanzi: "日月潭", tailo: "ji̍t-gua̍t-thâm", meaning: "名勝：日月潭" },
          { hanzi: "墾丁", tailo: "khún-ting", meaning: "名勝：墾丁" },
          { hanzi: "行踏", tailo: "kiânn-ta̍h", meaning: "走讀、實地踏查" },
          { hanzi: "野柳", tailo: "iá-liú", meaning: "名勝：野柳" }
        ]
      },
      {
        id: "L4",
        name: "第四課：氣象報導（縣市名 1）",
        words: [
          { hanzi: "臺北市", tailo: "tâi-pak-tshī", meaning: "北部縣市：臺北市" },
          { hanzi: "基隆市", tailo: "ke-lâng-tshī", meaning: "北部縣市：基隆市" },
          { hanzi: "新北市", tailo: "sin-pak-tshī", meaning: "北部縣市：新北市" },
          { hanzi: "桃園市", tailo: "thô-hng-tshī", meaning: "北部縣市：桃園市" },
          { hanzi: "新竹市", tailo: "sin-tik-tshī", meaning: "北部縣市：新竹市" },
          { hanzi: "新竹縣", tailo: "sin-tik-kuān", meaning: "北部縣市：新竹縣" },
          { hanzi: "宜蘭縣", tailo: "gî-lân-kuān", meaning: "東北部縣市：宜蘭縣" },
          { hanzi: "苗栗縣", tailo: "biâu-li̍k-kuān", meaning: "中部縣市：苗栗縣" },
          { hanzi: "臺中市", tailo: "tâi-tiong-tshī", meaning: "中部縣市：臺中市" },
          { hanzi: "彰化縣", tailo: "tsiong-huà-kuān", meaning: "中部縣市：彰化縣" },
          { hanzi: "南投縣", tailo: "lâm-tâu-kuān", meaning: "中部縣市：南投縣" },
          { hanzi: "雲林縣", tailo: "hûn-lîm-kuān", meaning: "中部縣市：雲林縣" }
        ]
      },
      {
        id: "L5",
        name: "第五課：火車（縣市名 2）",
        words: [
          { hanzi: "嘉義市", tailo: "ka-gī-tshī", meaning: "南部縣市：嘉義市" },
          { hanzi: "嘉義縣", tailo: "ka-gī-kuān", meaning: "南部縣市：嘉義縣" },
          { hanzi: "臺南市", tailo: "tâi-lâm-tshī", meaning: "南部縣市：臺南市" },
          { hanzi: "高雄市", tailo: "ko-hiông-tshī", meaning: "南部縣市：高雄市" },
          { hanzi: "屏東縣", tailo: "pîn-tong-kuān", meaning: "南部縣市：屏東縣" },
          { hanzi: "澎湖縣", tailo: "phênn-ôo-kuān", meaning: "離島縣市：澎湖縣" },
          { hanzi: "花蓮縣", tailo: "hua-liân-kuān", meaning: "東部縣市：花蓮縣" },
          { hanzi: "臺東縣", tailo: "tâi-tang-kuān", meaning: "東部縣市：臺東縣" },
          { hanzi: "馬祖(連江縣)", tailo: "má-tsóo (liân-kang-kuān)", meaning: "離島縣市：馬祖（連江縣）" },
          { hanzi: "金門縣", tailo: "kim-mn̂g-kuān", meaning: "離島縣市：金門縣" },
          { hanzi: "火車頭", tailo: "hué-tshia-thâu", meaning: "火車站" },
          { hanzi: "月臺", tailo: "gua̍t-tâi", meaning: "火車月台" }
        ]
      }
    ]
  },
  "6-1": {
    grade: 6,
    semester: "上學期",
    title: "六上（第十一冊）",
    lessons: [
      {
        id: "L1",
        name: "第一課：驚著無代誌",
        words: [
          { hanzi: "無代誌", tailo: "bô-tāi-tsì", meaning: "沒事、平安無事" },
          { hanzi: "驚著", tailo: "kiann--tio̍h", meaning: "嚇到" },
          { hanzi: "收驚", tailo: "siu-kiann", meaning: "收驚（傳統習俗）" },
          { hanzi: "安心", tailo: "an-sim", meaning: "安心" },
          { hanzi: "關心", tailo: "kuan-sim", meaning: "關心" },
          { hanzi: "平安符", tailo: "pîng-an-hû", meaning: "平安符" },
          { hanzi: "安慰", tailo: "an-uì", meaning: "安慰" },
          { hanzi: "拍撫", tailo: "phah-moo", meaning: "拍撫安撫" },
          { hanzi: "習俗", tailo: "si̍p-sio̍k", meaning: "傳統習俗" },
          { hanzi: "保庇", tailo: "pó-pì", meaning: "保佑" },
          { hanzi: "緊張", tailo: "kín-tiunn", meaning: "緊張" },
          { hanzi: "膽大", tailo: "tánn-tuā", meaning: "膽子大" }
        ]
      },
      {
        id: "L2",
        name: "第二課：掛號",
        words: [
          { hanzi: "掛號", tailo: "kuà-hō", meaning: "看診掛號" },
          { hanzi: "病院", tailo: "pēnn-īnn", meaning: "醫院" },
          { hanzi: "醫生", tailo: "i-sing", meaning: "醫生" },
          { hanzi: "護理師", tailo: "hōo-lí-su", meaning: "護理師" },
          { hanzi: "感冒", tailo: "kám-mōo", meaning: "感冒" },
          { hanzi: "食藥仔", tailo: "tsia̍h-io̍h-á", meaning: "吃藥" },
          { hanzi: "看醫生", tailo: "khuànn-i-sing", meaning: "看醫生" },
          { hanzi: "發燒", tailo: "huat-sio", meaning: "發燒" },
          { hanzi: "咳嗽", tailo: "kám-tshì", meaning: "咳嗽" },
          { hanzi: "流鼻水", tailo: "lâu-phīnn-tsuí", meaning: "流鼻水" },
          { hanzi: "注預防針", tailo: "tsù-ū-hông-tsiam", meaning: "打預防針" },
          { hanzi: "健保卡", tailo: "kiān-pó-khah", meaning: "健保卡" }
        ]
      },
      {
        id: "L3",
        name: "第三課：講古",
        words: [
          { hanzi: "講古", tailo: "kóng-kóo", meaning: "說故事" },
          { hanzi: "傳說", tailo: "thuân-suat", meaning: "傳說" },
          { hanzi: "俗語", tailo: "sio̍k-gí", meaning: "俗諺、諺語" },
          { hanzi: "智慧", tailo: "tì-huī", meaning: "智慧" },
          { hanzi: "趣味", tailo: "tshù-bī", meaning: "有趣" },
          { hanzi: "流傳", tailo: "liû-thuân", meaning: "流傳" },
          { hanzi: "故事", tailo: "kòo-sū", meaning: "故事" },
          { hanzi: "古早", tailo: "kóo-tsá", meaning: "從前、古早" },
          { hanzi: "神話", tailo: "sîn-uē", meaning: "神話" },
          { hanzi: "道理", tailo: "tō-lí", meaning: "道理" },
          { hanzi: "經驗", tailo: "king-giām", meaning: "經驗" },
          { hanzi: "精彩", tailo: "tsing-tshái", meaning: "精彩" }
        ]
      },
      {
        id: "L4",
        name: "第四課：烏鴉食水",
        words: [
          { hanzi: "烏鴉", tailo: "oo-a", meaning: "烏鴉" },
          { hanzi: "食水", tailo: "tsia̍h-tsuí", meaning: "喝水" },
          { hanzi: "石頭仔", tailo: "tsio̍h-thâu-á", meaning: "小石頭" },
          { hanzi: "水矸仔", tailo: "tsuí-kan-á", meaning: "水瓶" },
          { hanzi: "想辦法", tailo: "siūnn-pān-huat", meaning: "想辦法" },
          { hanzi: "聰明", tailo: "tshong-bîng", meaning: "聰明" },
          { hanzi: "口渴", tailo: "tshuì-ta", meaning: "口渴" },
          { hanzi: "喙尖", tailo: "tshuì-tsiam", meaning: "鳥喙" },
          { hanzi: "水面", tailo: "tsuí-bīn", meaning: "水面" },
          { hanzi: "起懸", tailo: "khí-kuân", meaning: "升高、上升" },
          { hanzi: "思考", tailo: "su-khó", meaning: "思考" },
          { hanzi: "克服困難", tailo: "khik-ho̍k khùn-lân", meaning: "克服困難" }
        ]
      }
    ]
  },
  "6-2": {
    grade: 6,
    semester: "下學期",
    title: "六下（第十二冊）",
    lessons: [
      {
        id: "L1",
        name: "第一課：生理囝",
        words: [
          { hanzi: "生理囝", tailo: "sing-lí-kiánn", meaning: "很有生意頭腦的人" },
          { hanzi: "頭家娘", tailo: "thâu-ke-niû", meaning: "老闆娘" },
          { hanzi: "招呼", tailo: "tsio-hoo", meaning: "招呼客人" },
          { hanzi: "實在", tailo: "si̍t-tsāi", meaning: "實在、童叟無欺" },
          { hanzi: "品質", tailo: "phín-tsit", meaning: "品質" },
          { hanzi: "趁錢", tailo: "thàn-tsînn", meaning: "賺錢" },
          { hanzi: "顧客", tailo: "kòo-kheh", meaning: "顧客" },
          { hanzi: "口碑", tailo: "kháu-pi", meaning: "口碑" },
          { hanzi: "誠懇", tailo: "sîng-khún", meaning: "誠懇" },
          { hanzi: "公道", tailo: "kong-tō", meaning: "公道合理" },
          { hanzi: "行銷", tailo: "hîng-siau", meaning: "行銷" },
          { hanzi: "信譽", tailo: "sìn-ū", meaning: "信譽" }
        ]
      },
      {
        id: "L2",
        name: "第二課：巷仔內的世界杯",
        words: [
          { hanzi: "巷仔內", tailo: "hāng-á-lāi", meaning: "巷子裡、內行" },
          { hanzi: "比賽", tailo: "pí-sài", meaning: "比賽" },
          { hanzi: "跤球", tailo: "kha-kiû", meaning: "足球" },
          { hanzi: "運動員", tailo: "ūn-tōng-uân", meaning: "運動員" },
          { hanzi: "團結", tailo: "thuân-kiat", meaning: "團結" },
          { hanzi: "冠軍", tailo: "kuàn-kun", meaning: "冠軍" },
          { hanzi: "守門員", tailo: "siú-mn̂g-uân", meaning: "守門員" },
          { hanzi: "射門", tailo: "siā-mn̂g", meaning: "射門" },
          { hanzi: "傳球", tailo: "thuân-kiû", meaning: "傳球" },
          { hanzi: "默契", tailo: "bi̍k-khè", meaning: "默契" },
          { hanzi: "運動家精神", tailo: "ūn-tōng-ka tsing-sîn", meaning: "運動家精神" },
          { hanzi: "喝采", tailo: "huah-tshái", meaning: "喝采" }
        ]
      },
      {
        id: "L3",
        name: "第三課：行過",
        words: [
          { hanzi: "行過", tailo: "kiânn--kuè", meaning: "走過、經歷過" },
          { hanzi: "回憶", tailo: "huê-ik", meaning: "回憶" },
          { hanzi: "相片", tailo: "siòng-phìnn", meaning: "照片" },
          { hanzi: "同齊", tailo: "tâng-tsê", meaning: "一起" },
          { hanzi: "感謝", tailo: "kám-siā", meaning: "感謝" },
          { hanzi: "珍惜", tailo: "tin-sioh", meaning: "珍惜" },
          { hanzi: "六年", tailo: "la̍k-nî", meaning: "六年" },
          { hanzi: "成長", tailo: "sîng-tióng", meaning: "成長" },
          { hanzi: "友誼", tailo: "iú-gî", meaning: "友誼" },
          { hanzi: "難忘", tailo: "lân-bōng", meaning: "難忘" },
          { hanzi: "足跡", tailo: "tsiok-tsik", meaning: "足跡" },
          { hanzi: "母校", tailo: "bú-hāu", meaning: "母校" }
        ]
      },
      {
        id: "L4",
        name: "第四課：我已經大漢",
        words: [
          { hanzi: "大漢", tailo: "tuā-hàn", meaning: "長大" },
          { hanzi: "畢業", tailo: "pit-gia̍p", meaning: "畢業" },
          { hanzi: "珍重", tailo: "tin-tiōng", meaning: "珍重" },
          { hanzi: "閣再會", tailo: "koh-tsài-huē", meaning: "再相會、再見" },
          { hanzi: "祝福", tailo: "tsiok-hok", meaning: "祝福" },
          { hanzi: "順風", tailo: "sūn-hong", meaning: "一帆風順" },
          { hanzi: "夢想", tailo: "bōng-sióng", meaning: "夢想" },
          { hanzi: "責任", tailo: "tsik-jīm", meaning: "責任" },
          { hanzi: "獨立", tailo: "to̍k-li̍p", meaning: "獨立" },
          { hanzi: "前途光明", tailo: "tsiân-tôo-kong-bîng", meaning: "前途光明" },
          { hanzi: "勇往直前", tailo: "ióng-óng-ti̍t-tsiân", meaning: "勇往直前" },
          { hanzi: "感恩", tailo: "kám-un", meaning: "感恩" }
        ]
      }
    ]
  }
};

// 台語勝負與歡呼語庫（在贏的那方醒目顯示臺羅羅馬字與漢字！）
const VICTORY_PHRASES = [
  { tailo: "Iânn ah! Tsin gâu!", hanzi: "贏矣！真𠢕！", meaning: "贏了！太厲害了！" },
  { tailo: "Tē-it-miâ! Kiong-hí!", hanzi: "第一名！恭喜！", meaning: "第一名！恭喜獲勝！" },
  { tailo: "Tshut-la̍t iânn kàu bué!", hanzi: "出力贏到底！", meaning: "齊心協力贏到底！" },
  { tailo: "Iânn-tiûnn! Phah-pho̍k-á!", hanzi: "贏場！拍噗仔！", meaning: "獲勝！拍手鼓掌！" }
];

const ENCOURAGE_PHRASES = {
  tailo: "Su ah, koh-tsài ka-iû!",
  hanzi: "輸矣，閣再加油！",
  meaning: "雖敗猶榮，下次再加油！"
};
