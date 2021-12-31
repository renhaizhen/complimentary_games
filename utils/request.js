const _axios = require('axios');

async function axios (o) {
  return new Promise((resolve, reject) => {
    _axios(o).then(res => {
      if (res.data) {
        var body = res.data;
        try {
          // if(!body||!body.length) console.log(o,'....')
          if (typeof body === 'string') body = JSON.parse(body)
        } catch (error) {
          reject(error)
          // console.log(body,'body....')
        }
        resolve(body);
      }
    }).catch(err => {
      console.log(err, 'error')
    })
  }).catch(() => {
    console.log('请求出错--->');
    return 'err'
  })
}

module.exports =  { axios };