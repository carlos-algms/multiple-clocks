function currentTime(){var a=new Date;return{hours:prependZero(a.getHours()),minutes:prependZero(a.getMinutes()),seconds:prependZero(a.getSeconds())}}function prependZero(a){return a>=10?a:"0"+a.toString()}!function(){"use strict";function a(){for(var a=0;d>a;a++)b(c[a])}function b(a){var b=a.children,c=currentTime();b[0].innerHTML=c.hours,b[1].innerHTML=c.minutes,b[2].innerHTML=c.seconds}var c=document.querySelectorAll(".clock-digital"),d=c.length;a(),setInterval(a,1e3)}(),function(a){"use strict";function b(){for(var a,b=0;b<j.length;b++)a=j[b],a.pointers={hours:a.querySelector(".clock-analogic--hours"),minutes:a.querySelector(".clock-analogic--minutes"),seconds:a.querySelector(".clock-analogic--seconds")}}function c(){for(var a=0;a<j.length;a++)d(j[a])}function d(a){var b=currentTime();e(a.pointers.seconds,b),f(a.pointers.minutes,b),g(a.pointers.hours,b)}function e(a,b){h(a,b.seconds,60)}function f(a,b){h(a,b.minutes,60)}function g(a,b){var c=30*(b.hours%12)+b.minutes/2;i(a,c)}function h(a,b,c){var d=b/c*360;i(a,d)}function i(a,b){a.style.transform="rotate("+b+"deg)",a.style.transition=0==b?"none":""}var j=a.document.querySelectorAll(".clock-analogic");j.length&&(b(),c(),setInterval(c,1e3)),a.analogicClockApi={cachePointers:b,analogicClocksUpdate:c,updateClock:d,updateSeconds:e,updateMinutes:f,updateHours:g,_updatePointer:h,_setStyle:i}}(this);