const CryptoJS = require('./lib/CryptoJS');
const data = require('./config');

let key = data.RestrictionsOasswirdKey,
    salt = data.RestrictionsPasswordKey,

    star = 0,
    end = 9999,
    keyBase64 = CryptoJS.enc.Base64.parse(key).toString(),
    saltBase64 =  CryptoJS.enc.Base64.parse(salt),
    init;
(init = ()=>{
    let pass = ('0000' + star).slice(-4),
        code = CryptoJS.PBKDF2(pass,saltBase64, {keySize: 5, iterations: 1000});        
    console.log('正式尝试：' + pass);
    if(code.toString() === keyBase64){
        console.log('你的iOS访问限制密码是：' + pass);
    }else if(star < end){
        star++;
        init();
    };
})();
