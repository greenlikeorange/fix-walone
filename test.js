const fixWalone = require('./main');

const testString = '၁၀ရက်၁၀ လ ၂၀၁၀ နှစ်။ ဝါး ၁၀ချောင်း​ ကို ဝင်္ကမ္ဘာထဲမှာ ဝင်းဝင်းနဲ့ ဝမ်းပြည့်အောင်ဝါး။ ၀၁-၅၀၀၀၀၅ ကိုခေါ် ဝမ်းနည်းပါတယ်လို့ ဝင်္ကဝုတ္တိတွေပြော။';
const fixed = fixWalone(testString)

console.log('Test passed:', testString === fixed)