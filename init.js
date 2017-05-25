const [crypto,data] = [require('crypto'),require('./config')];

let key = data.RestrictionsOasswirdKey,
    salt = data.RestrictionsPasswordKey,
    star = 0,
    end = 9999,
    keyBase64 = new Buffer(key,'base64').toString('hex'),
    saltBase64 = new Buffer(salt,'base64'),
    init;
    
(init = ()=>{
    let pass = ('0000' + star).slice(-4),
        code = crypto.pbkdf2Sync(pass,saltBase64,1000,20,'sha1').toString('hex');               
    console.log('正式尝试：' + pass);
    if(code === keyBase64){
        console.log('你的iOS访问限制密码是：' + pass);
    }else if(star < end){
        star++;
        init();
    };
})();
