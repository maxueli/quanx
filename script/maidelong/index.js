/*******************************
脚本名称: 麦德龙会员
*******************************

[rewrite_local]

^http[s]?:\/\/taurus.dmall.com\/mini\/program\/member\/getMemberCards url script-response-body https://raw.githubusercontent.com/maxueli/quanx/main/script/maidelong/index.js

[mitm] 

hostname = taurus.dmall.com

*******************************/

var body = $response.body
	.replace(/friendsCardFlag\\":\d+/g, 'friendsCardFlag\\":true')
	.replace(/memberCardType\\":\d+/g, 'memberCardType\\":"PERSON"');

console.log("body", body, typeof body);

$done(body);
