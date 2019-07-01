function fixWalone(text, waloneWeight) {
  text = text || '';
  waloneWeight = waloneWeight || 0;

  return text.split(/၀|ဝ/)
    .reduce(function (behind, ahead) {
      var isWaLone = false;

      if (/^[က-အါိီေဲံြျွှုူ်]/.test(ahead)) {
        isWaLone = true;
      }

      // ၁လုံး not ၁၀လုံး
      if (/^\s?လုံး/.test(ahead) && !/[၀-၉]\s?$/.test(behind)) {
        isWaLone = true;
      }

      if (/^\s?(ခု|ကောင်|ယောက်|ချောင်း|ရက်|လ|နှစ်|သန်း|သိန်း)/.test(ahead)) {
        isWaLone = false;
      }

      return behind + (isWaLone ? 'ဝ' : '၀') + ahead;
    });
}

module.exports = fixWalone;
