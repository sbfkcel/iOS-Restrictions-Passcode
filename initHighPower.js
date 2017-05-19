const 	cpus 		= require('os').cpus().length,
		CryptoJS 	= require('./lib/CryptoJS'),
		data 		= require('./config'),
		cluster 	= require('cluster');


let 	password 	= [],
		key 		= data.RestrictionsOasswirdKey,
    	salt 		= data.RestrictionsPasswordKey,
		keyBase64 	= CryptoJS.enc.Base64.parse(key).toString(),
    	saltBase64 	= CryptoJS.enc.Base64.parse(salt);

for (let i = 0; i < 10000; i++)
	password[i] = ('0000' + i).substr(-4);

if (cluster.isMaster) {
	for (let j = 0; j < cpus - 1; j++)
		cluster.fork();

}else{
	process.on('message', (msg) => {
		if (msg == 'finish') process.exit();

		console.log('正式尝试：[' + process.pid + ']' + msg);
		let code = CryptoJS.PBKDF2(msg, saltBase64, {keySize: 5, iterations: 1000});

		if(code.toString() === keyBase64){
	        console.log('你的iOS访问限制密码是：' + msg);
	        process.send('finish');
	    }else{
	    	process.send('get password');
	    }
	});

	process.send('get password');
}

cluster.on('message', (worker, message) => {
	
	if (message == 'finish') {
		for(let k in cluster.workers)
			cluster.workers[k].send('finish');
	}

	worker.send(password.shift());
});
