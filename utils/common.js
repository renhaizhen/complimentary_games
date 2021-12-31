const forEach = require('lodash/forEach');
const unionBy = require('lodash/unionBy');
const reverse = require('lodash/reverse');
//timeformatter
function timeFormatter(date,isSecond) {
    const y = new Date(date).getFullYear();
    const m = new Date(date).getMonth() + 1;
    const d = new Date(date).getDate();
    const h = new Date(date).getHours();
    const mm = new Date(date).getMinutes();
    const s = new Date(date).getSeconds();
    const com = `${y}-${m}-${d < 10 ? '0' + d : d} ${h < 10 ? '0' + h : h}:${mm < 10 ? '0' + mm : mm}`;
    return isSecond ? com + `:${s < 10 ? '0' + s : s}` : com
}

//data2percent 
function number2Percent(point){
    if (point==0) {
        return 0;
    }
    var str=Number(point*100).toFixed(2);
    str+="%";
    return str;
}


module.exports = {
    timeFormatter,
    number2Percent
}