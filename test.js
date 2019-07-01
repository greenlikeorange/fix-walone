const fixWalone = require('./main');

function random() {
  const oneOrZero = Math.floor(Math.random() * 2);
  return ['ဝ', '၀'][oneOrZero];
}

const testString = '၁၀ရက်၁၀ လ ၂၀၁၀ နှစ်။ ဝါး ၁၀ချောင်း​ ကို ဝင်္ကမ္ဘာထဲမှာ ဝင်းဝင်းနဲ့ ဝမ်းပြည့်အောင်ဝါး။ ၀၁-၅၀၀၀၀၅ ကိုခေါ် ဝမ်းနည်းပါတယ်လို့ ဝင်္ကဝုတ္တိတွေပြော။';

const testCases = new Array(10)
  .fill(testString)
  .map(text => text.replace(/၀|ဝ/g, random))
  .map(fixWalone);

testCases.forEach((t, i) => {
  console.log(`Test ${i+1}: ${t === testString}`);
});