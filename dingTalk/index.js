const ChatBot = require('dingtalk-robot-sender');
async function sendMessage(title,webHook,board,type){
    if(!board||board===null||board===undefined) return
    const robot = new ChatBot({
        webhook: webHook
    });
    if(type==='text'){
        console.log(type,board)
        var textContent = {
            "msgtype": 'text',
            "text": {
                "content": `${board}`
            }
        }
    }else{
        var textContent = {
            "msgtype": "markdown",
            "markdown": {
                "title": `${title}`,
                "text": `${board}`
            }
        }
    }
    // let textContent = {
    //     "msgtype": "markdown",
    //     "markdown": {
    //         "title": `${title}`,
    //         "text": `${board}`
    //     }
    // }
    await new Promise(res => setTimeout(res, 310))
     //   发送钉钉消息
     robot.send(textContent)
     .then((res) => {
         // TODO
         console.log(res.data, 'robot发送成功')
     }).catch(e => console.log('发送失败原因', e));
}

module.exports = {
    sendMessage
}