module.exports = {
    port: 3000,         //启动端口
    DB_URL: 'mongodb://127.0.0.1:27017/meituan',    //数据库地址
    //notifyUrl：支付异步通知地址（配置支付的ip）
    notifyUrl: 'http://192.168.1.101:3000/v1/notify_url', //这是局域网内的IP，不是ip.cn测出来的外网地址：mac terminal 输入ifconfig，看en 0 的ip地址
    // notifyUrl: 'http://221.181.180.28:3000/v1/notify_url',  //单ip，单外网可能对应多个ip
    

    synNotifyUrl: 'http://39.108.3.12',              //客户端同步跳转
    sessionStorageURL: 'mongodb://127.0.0.1:27017/session',   //数据库存放session地址
    Bucket: 'meituan-zyyzqr',   //七牛云bucket
    AccessKey: 'Hmqp89PouTg4Gtirs9V4jsGWchjRM6eUvLRBYfIR',   //七牛云accessKey
    SecretKey: 'FSMUibJKzIPIg8SAc9r6UIE_DamhU1D3Lbgt2vMk',    //七牛云secretKey
    tencentkey: 'YZ6BZ-BMYKU-A4MVR-BHPF3-5CIQ5-SUF6G',        //腾讯位置secreKey
    tencentkey2: 'AHBBZ-A573S-I7XOW-6K7GZ-MGLUQ-7KBQF',        //腾讯位置服务secreKey
    wechatAppid: '',  // 微信小程序appid
    wecahatSecret: '' // 微信小程序密钥
    
};


