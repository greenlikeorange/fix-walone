(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1]);
