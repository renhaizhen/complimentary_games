const { axios } = require('./../utils/request');
const { BASE } = require('./config');
const { transformEpicDatas ,transformDingTalkEpic } = require('./transform');
const { sendMessage  } = require('./../dingTalk/index');
const { game_bot } = require('./../dingTalk/config');
async function getFetchUrl(){
    const end_point = '/freeGamesPromotions?locale=zh-CN&country=CN&allowCountries=CN';
    return `${BASE}${end_point}`;
}
var title = 'epic info';

async function getDatas(){
    const url = await getFetchUrl();
    const res = await axios(url);
    if(res.data&&res.data.Catalog){
        const row_datas = res.data.Catalog.searchStore.elements;
        const handle_datas = await transformEpicDatas(row_datas);
        if(handle_datas&&handle_datas['all_games']){
            const { show_games} = handle_datas;
            // const all_board = await transformDingTalkEpic(all_games);
            const show_board = await transformDingTalkEpic(show_games);
            // sendMessage(title,game_bot,all_board);
            sendMessage(title,game_bot,show_board);
            console.log(handle_datas)
        }
    }
}


module.exports ={
    getDatas
}
