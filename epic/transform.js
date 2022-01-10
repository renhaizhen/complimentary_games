const forEach = require('lodash/forEach');
const { timeFormatter } = require('./../utils/common');
async function transformEpicDatas(datas){
    if(datas&&datas.length){
        var handle_show_datas = [];
        var handle_all_datas = [];
        forEach(datas,l=>{
            //keyImages[2]['url']
            //promotions['promotionalOffers']['promotionalOffers']['startDate']||['endDate']
            const { title, keyImages ,promotions } = l;
            // console.log(title, keyImages ,promotions,'....')
            const img = keyImages[0]['url'];
            if((promotions&&promotions!==null&&promotions['promotionalOffers'].length>0&&promotions['promotionalOffers']!==[])){
                console.log(promotions,'promotionalOffers',title)
                const startDate = promotions['promotionalOffers'][0]['promotionalOffers'][0]['startDate'];
                const endDate = promotions['promotionalOffers'][0]['promotionalOffers'][0]['endDate'];
                const o = {title,img,startDate,endDate};
                handle_show_datas.push(o)
            }else if(promotions&&promotions['upcomingPromotionalOffers'].length>0){
                console.log(promotions,'upcomingPromotionalOffers',title)
                const startDate = promotions['upcomingPromotionalOffers'][0]['promotionalOffers'][0]['startDate'];
                const endDate = promotions['upcomingPromotionalOffers'][0]['promotionalOffers'][0]['endDate'];
                const o = {title,img,startDate,endDate};
                handle_show_datas.push(o)
            }
            // const o = {title,img};
            // handle_all_datas.push(o);
            
        })
    }
    return {show_games:handle_show_datas,all_games:handle_all_datas}
}

async function transformDingTalkEpic(datas){
    if(datas&&datas.length){
        var staticT = `#### [广播] 🔥 now || future given\n>`;
        var handleData = staticT;
        forEach(datas,l=>{
            if(l['startDate']||l['endDate']){
                const { title ,img ,startDate,endDate} = l;
                const tit = `#### ${title} \n>`
                const imgs = `#### ![](${img}) \n>`;
                const start = `#### 开始:${timeFormatter(new Date(startDate),false)} \n>`
                const end = `#### 结束:${timeFormatter(new Date(endDate),false)} \n>`;
                const o = tit + imgs + start + end;
                handleData+=o
            }
            // else{
            //     const {  title ,img } = l;
            //     const tit = `#### ${title} \n>`
            //     const imgs = `#### ![](${img}) \n>`;
            //     const o = tit + imgs;
            //     handleData+=o
            // }
        })
        return handleData;
    }
}


module.exports = {
    transformEpicDatas,
    transformDingTalkEpic
}