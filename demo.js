const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: '7daa7f98',
  apiSecret: 'PRrcx0dAPixhUFsq',
  applicationId: '457c1c24-fd7b-4f38-bd0b-1c383d34a1f3',
  privateKey: 'Private_key path',
});


const ncco = [
  {
    action: 'talk',
    voiceName: 'Joey',
    text:
      'Any unique code that you want to send user',
  },
];


nexmo.calls.create(
  {
    to: [{ type: 'phone', number: '917296842877' }],
    from: { type: 'phone', number: '917296842877' },
    ncco,
  },
  (err, result) => {
    console.log(err || result);
  },
);