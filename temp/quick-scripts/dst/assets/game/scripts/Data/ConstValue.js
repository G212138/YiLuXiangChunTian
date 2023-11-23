
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/ConstValue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2ee0BC2l1Pp47nuM279OIO', 'ConstValue');
// game/scripts/Data/ConstValue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstValue = void 0;
var ConstValue = /** @class */ (function () {
    function ConstValue() {
    }
    ConstValue.IS_EDITIONS = true; //是否为发布版本，用于数据上报 及 log输出控制
    ConstValue.IS_TEACHER = true; //是否为教师端版本
    ConstValue.CoursewareKey = 'CaiMaoZi_3ns2Eh3K6s2NB8'; //每个课件唯一的key 工程名+14位随机字符串。（脚本创建工程时自动生成）
    ConstValue.GameName = '2023_4寒_7讲_猜帽子'; //游戏名中文描述，用于数据上报  （脚本创建工程时输入）
    ConstValue.Subject = 1; //学科（1理科 2语文 3英语）
    ConstValue.defaultLevelData = [
        {
            questionText: "找到蘑菇",
            questionPic: "bg-chuang",
            opinion: 3,
            answer: 3,
            opinionText1: "基础性",
            opinionPic1: "1",
            opinionText2: "整体性",
            opinionPic2: "2",
            opinionText3: "浅显性",
            opinionPic3: "3",
            opinionText4: "生活性",
            opinionPic4: "",
            opinionText5: "",
            opinionPic5: "",
        },
        {
            questionText: "以下哪位是唐朝诗人?",
            questionPic: "",
            opinion: 4,
            answer: 4,
            opinionText1: "屈原",
            opinionPic1: "",
            opinionText2: "李伯",
            opinionPic2: "",
            opinionText3: "唐国强",
            opinionPic3: "",
            opinionText4: "骆宾王",
            opinionPic4: "",
            opinionText5: "",
            opinionPic5: "",
        },
        {
            questionText: "在课堂里学习30秒,就等于在现实中过了半分钟。",
            questionPic: "",
            opinion: 2,
            answer: 2,
            opinionText1: "错",
            opinionPic1: "",
            opinionText2: "对",
            opinionPic2: "",
            opinionText3: "",
            opinionPic3: "",
            opinionText4: "",
            opinionPic4: "",
            opinionText5: "",
            opinionPic5: "",
        },
        {
            questionText: "30以内的指数加上2，还是质数的有（   ）个？",
            questionPic: "",
            opinion: 4,
            answer: 2,
            opinionText1: "4",
            opinionPic1: "",
            opinionText2: "5",
            opinionPic2: "",
            opinionText3: "6",
            opinionPic3: "",
            opinionText4: "7",
            opinionPic4: "",
            opinionText5: "",
            opinionPic5: "",
        },
        {
            questionText: "在组织幼儿认识形状时,李老师说:“请小朋友找找教室里有圆形和正方形的物品。”李老师的做法体现了幼儿教育特点的(   )",
            questionPic: "",
            opinion: 4,
            answer: 4,
            opinionText1: "基础性",
            opinionPic1: "",
            opinionText2: "整体性",
            opinionPic2: "",
            opinionText3: "浅显性",
            opinionPic3: "",
            opinionText4: "生活性",
            opinionPic4: "",
            opinionText5: "",
            opinionPic5: "",
        },
        {
            questionText: "找到电脑",
            questionPic: "",
            opinion: 3,
            answer: 1,
            opinionText1: "基础性",
            opinionPic1: "img_diannao",
            opinionText2: "整体性",
            opinionPic2: "img_xiangpi",
            opinionText3: "浅显性",
            opinionPic3: "img_fangdaijing",
            opinionText4: "生活性",
            opinionPic4: "",
            opinionText5: "",
            opinionPic5: "",
        },
    ];
    return ConstValue;
}());
exports.ConstValue = ConstValue;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ29uc3RWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBMEdBLENBQUM7SUF6RzBCLHNCQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsMEJBQTBCO0lBQzlDLHFCQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVTtJQUM3Qix3QkFBYSxHQUFHLHlCQUF5QixDQUFDLENBQUMsdUNBQXVDO0lBQ2xGLG1CQUFRLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyw2QkFBNkI7SUFDMUQsa0JBQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7SUFFOUIsMkJBQWdCLEdBQUc7UUFDdEM7WUFDSSxZQUFZLEVBQUUsTUFBTTtZQUNwQixXQUFXLEVBQUUsV0FBVztZQUN4QixPQUFPLEVBQUUsQ0FBQztZQUNWLE1BQU0sRUFBRSxDQUFDO1lBQ1QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLEdBQUc7WUFDaEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLEdBQUc7WUFDaEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLEdBQUc7WUFDaEIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsRUFBRTtZQUNoQixXQUFXLEVBQUUsRUFBRTtTQUNsQjtRQUNEO1lBQ0ksWUFBWSxFQUFFLFlBQVk7WUFDMUIsV0FBVyxFQUFFLEVBQUU7WUFDZixPQUFPLEVBQUUsQ0FBQztZQUNWLE1BQU0sRUFBRSxDQUFDO1lBQ1QsWUFBWSxFQUFFLElBQUk7WUFDbEIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsSUFBSTtZQUNsQixXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxLQUFLO1lBQ25CLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsRUFBRTtZQUNoQixXQUFXLEVBQUUsRUFBRTtTQUNsQjtRQUNEO1lBQ0ksWUFBWSxFQUFFLHlCQUF5QjtZQUN2QyxXQUFXLEVBQUUsRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDO1lBQ1YsTUFBTSxFQUFFLENBQUM7WUFDVCxZQUFZLEVBQUUsR0FBRztZQUNqQixXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxHQUFHO1lBQ2pCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsRUFBRTtZQUNoQixXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFdBQVcsRUFBRSxFQUFFO1NBQ2xCO1FBQ0Q7WUFDSSxZQUFZLEVBQUUsMEJBQTBCO1lBQ3hDLFdBQVcsRUFBRSxFQUFFO1lBQ2YsT0FBTyxFQUFFLENBQUM7WUFDVixNQUFNLEVBQUUsQ0FBQztZQUNULFlBQVksRUFBRSxHQUFHO1lBQ2pCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEdBQUc7WUFDakIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsR0FBRztZQUNqQixXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxHQUFHO1lBQ2pCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEVBQUU7WUFDaEIsV0FBVyxFQUFFLEVBQUU7U0FDbEI7UUFDRDtZQUNJLFlBQVksRUFBRSw2REFBNkQ7WUFDM0UsV0FBVyxFQUFFLEVBQUU7WUFDZixPQUFPLEVBQUUsQ0FBQztZQUNWLE1BQU0sRUFBRSxDQUFDO1lBQ1QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsS0FBSztZQUNuQixXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxLQUFLO1lBQ25CLFdBQVcsRUFBRSxFQUFFO1lBQ2YsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLEVBQUU7WUFDZixZQUFZLEVBQUUsRUFBRTtZQUNoQixXQUFXLEVBQUUsRUFBRTtTQUNsQjtRQUNEO1lBQ0ksWUFBWSxFQUFFLE1BQU07WUFDcEIsV0FBVyxFQUFFLEVBQUU7WUFDZixPQUFPLEVBQUUsQ0FBQztZQUNWLE1BQU0sRUFBRSxDQUFDO1lBQ1QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLGFBQWE7WUFDMUIsWUFBWSxFQUFFLEtBQUs7WUFDbkIsV0FBVyxFQUFFLGlCQUFpQjtZQUM5QixZQUFZLEVBQUUsS0FBSztZQUNuQixXQUFXLEVBQUUsRUFBRTtZQUNmLFlBQVksRUFBRSxFQUFFO1lBQ2hCLFdBQVcsRUFBRSxFQUFFO1NBQ2xCO0tBRUosQ0FBQTtJQUNMLGlCQUFDO0NBMUdELEFBMEdDLElBQUE7QUExR1ksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uc3RWYWx1ZSB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJU19FRElUSU9OUyA9IHRydWU7IC8v5piv5ZCm5Li65Y+R5biD54mI5pys77yM55So5LqO5pWw5o2u5LiK5oqlIOWPiiBsb2fovpPlh7rmjqfliLZcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElTX1RFQUNIRVIgPSB0cnVlOyAvL+aYr+WQpuS4uuaVmeW4iOerr+eJiOacrFxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ291cnNld2FyZUtleSA9ICdDYWlNYW9aaV8zbnMyRWgzSzZzMk5COCc7IC8v5q+P5Liq6K++5Lu25ZSv5LiA55qEa2V5IOW3peeoi+WQjSsxNOS9jemaj+acuuWtl+espuS4suOAgu+8iOiEmuacrOWIm+W7uuW3peeoi+aXtuiHquWKqOeUn+aIkO+8iVxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgR2FtZU5hbWUgPSAnMjAyM1805a+SXzforrJf54yc5bi95a2QJzsgLy/muLjmiI/lkI3kuK3mlofmj4/ov7DvvIznlKjkuo7mlbDmja7kuIrmiqUgIO+8iOiEmuacrOWIm+W7uuW3peeoi+aXtui+k+WFpe+8iVxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU3ViamVjdCA9IDE7IC8v5a2m56eR77yIMeeQhuenkSAy6K+t5paHIDPoi7Hor63vvIlcblxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgZGVmYXVsdExldmVsRGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcXVlc3Rpb25UZXh0OiBcIuaJvuWIsOiYkeiPh1wiLFxuICAgICAgICAgICAgcXVlc3Rpb25QaWM6IFwiYmctY2h1YW5nXCIsXG4gICAgICAgICAgICBvcGluaW9uOiAzLFxuICAgICAgICAgICAgYW5zd2VyOiAzLFxuICAgICAgICAgICAgb3BpbmlvblRleHQxOiBcIuWfuuehgOaAp1wiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzE6IFwiMVwiLFxuICAgICAgICAgICAgb3BpbmlvblRleHQyOiBcIuaVtOS9k+aAp1wiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzI6IFwiMlwiLFxuICAgICAgICAgICAgb3BpbmlvblRleHQzOiBcIua1heaYvuaAp1wiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzM6IFwiM1wiLFxuICAgICAgICAgICAgb3BpbmlvblRleHQ0OiBcIueUn+a0u+aAp1wiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzQ6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uVGV4dDU6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uUGljNTogXCJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcXVlc3Rpb25UZXh0OiBcIuS7peS4i+WTquS9jeaYr+WUkOacneivl+S6uj9cIixcbiAgICAgICAgICAgIHF1ZXN0aW9uUGljOiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvbjogNCxcbiAgICAgICAgICAgIGFuc3dlcjogNCxcbiAgICAgICAgICAgIG9waW5pb25UZXh0MTogXCLlsYjljp9cIixcbiAgICAgICAgICAgIG9waW5pb25QaWMxOiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvblRleHQyOiBcIuadjuS8r1wiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzI6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uVGV4dDM6IFwi5ZSQ5Zu95by6XCIsXG4gICAgICAgICAgICBvcGluaW9uUGljMzogXCJcIixcbiAgICAgICAgICAgIG9waW5pb25UZXh0NDogXCLpqoblrr7njotcIixcbiAgICAgICAgICAgIG9waW5pb25QaWM0OiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvblRleHQ1OiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzU6IFwiXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uVGV4dDogXCLlnKjor77loILph4zlrabkuaAzMOenkizlsLHnrYnkuo7lnKjnjrDlrp7kuK3ov4fkuobljYrliIbpkp/jgIJcIixcbiAgICAgICAgICAgIHF1ZXN0aW9uUGljOiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvbjogMixcbiAgICAgICAgICAgIGFuc3dlcjogMixcbiAgICAgICAgICAgIG9waW5pb25UZXh0MTogXCLplJlcIixcbiAgICAgICAgICAgIG9waW5pb25QaWMxOiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvblRleHQyOiBcIuWvuVwiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzI6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uVGV4dDM6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uUGljMzogXCJcIixcbiAgICAgICAgICAgIG9waW5pb25UZXh0NDogXCJcIixcbiAgICAgICAgICAgIG9waW5pb25QaWM0OiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvblRleHQ1OiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzU6IFwiXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uVGV4dDogXCIzMOS7peWGheeahOaMh+aVsOWKoOS4ijLvvIzov5jmmK/otKjmlbDnmoTmnInvvIggICDvvInkuKrvvJ9cIixcbiAgICAgICAgICAgIHF1ZXN0aW9uUGljOiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvbjogNCxcbiAgICAgICAgICAgIGFuc3dlcjogMixcbiAgICAgICAgICAgIG9waW5pb25UZXh0MTogXCI0XCIsXG4gICAgICAgICAgICBvcGluaW9uUGljMTogXCJcIixcbiAgICAgICAgICAgIG9waW5pb25UZXh0MjogXCI1XCIsXG4gICAgICAgICAgICBvcGluaW9uUGljMjogXCJcIixcbiAgICAgICAgICAgIG9waW5pb25UZXh0MzogXCI2XCIsXG4gICAgICAgICAgICBvcGluaW9uUGljMzogXCJcIixcbiAgICAgICAgICAgIG9waW5pb25UZXh0NDogXCI3XCIsXG4gICAgICAgICAgICBvcGluaW9uUGljNDogXCJcIixcbiAgICAgICAgICAgIG9waW5pb25UZXh0NTogXCJcIixcbiAgICAgICAgICAgIG9waW5pb25QaWM1OiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBxdWVzdGlvblRleHQ6IFwi5Zyo57uE57uH5bm85YS/6K6k6K+G5b2i54q25pe2LOadjuiAgeW4iOivtDrigJzor7flsI/mnIvlj4vmib7mib7mlZnlrqTph4zmnInlnIblvaLlkozmraPmlrnlvaLnmoTnianlk4HjgILigJ3mnY7ogIHluIjnmoTlgZrms5XkvZPnjrDkuoblubzlhL/mlZnogrLnibnngrnnmoQoICAgKVwiLFxuICAgICAgICAgICAgcXVlc3Rpb25QaWM6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uOiA0LFxuICAgICAgICAgICAgYW5zd2VyOiA0LFxuICAgICAgICAgICAgb3BpbmlvblRleHQxOiBcIuWfuuehgOaAp1wiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzE6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uVGV4dDI6IFwi5pW05L2T5oCnXCIsXG4gICAgICAgICAgICBvcGluaW9uUGljMjogXCJcIixcbiAgICAgICAgICAgIG9waW5pb25UZXh0MzogXCLmtYXmmL7mgKdcIixcbiAgICAgICAgICAgIG9waW5pb25QaWMzOiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvblRleHQ0OiBcIueUn+a0u+aAp1wiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzQ6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uVGV4dDU6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uUGljNTogXCJcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcXVlc3Rpb25UZXh0OiBcIuaJvuWIsOeUteiEkVwiLFxuICAgICAgICAgICAgcXVlc3Rpb25QaWM6IFwiXCIsXG4gICAgICAgICAgICBvcGluaW9uOiAzLFxuICAgICAgICAgICAgYW5zd2VyOiAxLFxuICAgICAgICAgICAgb3BpbmlvblRleHQxOiBcIuWfuuehgOaAp1wiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzE6IFwiaW1nX2RpYW5uYW9cIixcbiAgICAgICAgICAgIG9waW5pb25UZXh0MjogXCLmlbTkvZPmgKdcIixcbiAgICAgICAgICAgIG9waW5pb25QaWMyOiBcImltZ194aWFuZ3BpXCIsXG4gICAgICAgICAgICBvcGluaW9uVGV4dDM6IFwi5rWF5pi+5oCnXCIsXG4gICAgICAgICAgICBvcGluaW9uUGljMzogXCJpbWdfZmFuZ2RhaWppbmdcIixcbiAgICAgICAgICAgIG9waW5pb25UZXh0NDogXCLnlJ/mtLvmgKdcIixcbiAgICAgICAgICAgIG9waW5pb25QaWM0OiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvblRleHQ1OiBcIlwiLFxuICAgICAgICAgICAgb3BpbmlvblBpYzU6IFwiXCIsXG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgIF1cbn1cbiJdfQ==