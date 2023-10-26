/*******************************
脚本名称: 麦德龙会员
*******************************

[rewrite_local]

^http[s]?:\/\/taurus.dmall.com\/mini\/program\/member\/getMemberCards url script-response-body https://raw.githubusercontent.com/maxueli/quanx/main/script/maidelong/index.js

[mitm] 

hostname = taurus.dmall.com

*******************************/

var body = $response.body;
console.log($response);
console.log("body", typeof body);

// .replace(/piece\\":\d+/g,'piece\\":888888')
// $done(body);
