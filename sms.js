var request = require('request');
const Nexmo = require('nexmo');

var nexmo = {
  apiKey: '7daa7f98',
  apiSecret: 'PRrcx0dAPixhUFsq',
  applicationId: '457c1c24-fd7b-4f38-bd0b-1c383d34a1f3',
  privateKey: '/Users/yudiz/Documents/test/calling/private.key',
};

var dataString = 'api_key=7daa7f98&api_secret=PRrcx0dAPixhUFsq&to=917296842877&from=NEXMO&text=Hello from Nexmo';


var options = {
    url: 'https://rest.nexmo.com/sms/json',
    method: 'POST',
    body: nexmo
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);