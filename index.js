const { getDatas } = require('./epic/index');

function loop(fn,time){
    fn();
    setTimeout(()=>loop(fn,time),time);
}


loop(noop=>getDatas(),24 * 60 * 60 * 1000);



setTimeout(() => null, 22222222)