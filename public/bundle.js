!function(){"use strict";var e=function(e){var t=new Date(e.getTime()),n=t.getTimezoneOffset();return t.setSeconds(0,0),6e4*n+t.getTime()%6e4};var t=function(e){return e instanceof Date},n=/[T ]/,r=/:/,u=/^(\d{2})$/,a=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],o=/^(\d{4})/,i=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],s=/^-(\d{2})$/,c=/^-?(\d{3})$/,f=/^-?(\d{2})-?(\d{2})$/,l=/^-?W(\d{2})$/,g=/^-?W(\d{2})-?(\d{1})$/,m=/^(\d{2}([.,]\d*)?)$/,d=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,h=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,v=/([Z+-].*)$/,D=/^(Z)$/,M=/^([+-])(\d{2})$/,p=/^([+-])(\d{2}):?(\d{2})$/;function T(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var u=7*t+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+u),r}var y=function(y,S){if(t(y))return new Date(y.getTime());if("string"!=typeof y)return new Date(y);var x=(S||{}).additionalDigits;x=null==x?2:Number(x);var Y=function(e){var t,u={},a=e.split(n);r.test(a[0])?(u.date=null,t=a[0]):(u.date=a[0],t=a[1]);if(t){var o=v.exec(t);o?(u.time=t.replace(o[1],""),u.timezone=o[1]):u.time=t}return u}(y),w=function(e,t){var n,r=a[t],s=i[t];if(n=o.exec(e)||s.exec(e)){var c=n[1];return{year:parseInt(c,10),restDateString:e.slice(c.length)}}if(n=u.exec(e)||r.exec(e)){var f=n[1];return{year:100*parseInt(f,10),restDateString:e.slice(f.length)}}return{year:null}}(Y.date,x),H=w.year,b=function(e,t){if(null===t)return null;var n,r,u,a;if(0===e.length)return(r=new Date(0)).setUTCFullYear(t),r;if(n=s.exec(e))return r=new Date(0),u=parseInt(n[1],10)-1,r.setUTCFullYear(t,u),r;if(n=c.exec(e)){r=new Date(0);var o=parseInt(n[1],10);return r.setUTCFullYear(t,0,o),r}if(n=f.exec(e)){r=new Date(0),u=parseInt(n[1],10)-1;var i=parseInt(n[2],10);return r.setUTCFullYear(t,u,i),r}if(n=l.exec(e))return a=parseInt(n[1],10)-1,T(t,a);if(n=g.exec(e)){a=parseInt(n[1],10)-1;var m=parseInt(n[2],10)-1;return T(t,a,m)}return null}(w.restDateString,H);if(b){var F,I=b.getTime(),$=0;if(Y.time&&($=function(e){var t,n,r;if(t=m.exec(e))return(n=parseFloat(t[1].replace(",",".")))%24*36e5;if(t=d.exec(e))return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),n%24*36e5+6e4*r;if(t=h.exec(e)){n=parseInt(t[1],10),r=parseInt(t[2],10);var u=parseFloat(t[3].replace(",","."));return n%24*36e5+6e4*r+1e3*u}return null}(Y.time)),Y.timezone)F=6e4*function(e){var t,n;if(t=D.exec(e))return 0;if(t=M.exec(e))return n=60*parseInt(t[2],10),"+"===t[1]?-n:n;if(t=p.exec(e))return n=60*parseInt(t[2],10)+parseInt(t[3],10),"+"===t[1]?-n:n;return 0}(Y.timezone);else{var W=I+$,G=new Date(W);F=e(G);var C=new Date(W);C.setDate(G.getDate()+1);var O=e(C)-e(G);O>0&&(F+=O)}return new Date(I+$+F)}return new Date(y)};var S=function(e){var t=y(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n};var x=function(e){var t=y(e);return t.setHours(0,0,0,0),t};var Y=function(e,t){var n=x(e),r=x(t),u=n.getTime()-6e4*n.getTimezoneOffset(),a=r.getTime()-6e4*r.getTimezoneOffset();return Math.round((u-a)/864e5)};var w=function(e){var t=y(e);return Y(t,S(t))+1};var H=function(e,t){var n=t&&Number(t.weekStartsOn)||0,r=y(e),u=r.getDay(),a=(u<n?7:0)+u-n;return r.setDate(r.getDate()-a),r.setHours(0,0,0,0),r};var b=function(e){return H(e,{weekStartsOn:1})};var F=function(e){var t=y(e),n=t.getFullYear(),r=new Date(0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);var u=b(r),a=new Date(0);a.setFullYear(n,0,4),a.setHours(0,0,0,0);var o=b(a);return t.getTime()>=u.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1};var I=function(e){var t=F(e),n=new Date(0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),b(n)};var $=function(e){var t=y(e),n=b(t).getTime()-I(t).getTime();return Math.round(n/6048e5)+1};var W=function(e){if(t(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")};var G=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];var C=function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);var r=G.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+r.join("|")+"|.)","g")};var O=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],r=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["AM","PM"],o=["am","pm"],i=["a.m.","p.m."],s={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return r[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?a[1]:a[0]},a:function(e){return e.getHours()/12>=1?o[1]:o[0]},aa:function(e){return e.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach((function(e){s[e+"o"]=function(t,n){return function(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(n[e](t))}})),{formatters:s,formattingTokensRegExp:C(s)}},z={distanceInWords:function(){var e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(t,n,r){var u;return r=r||{},u="string"==typeof e[t]?e[t]:1===n?e[t].one:e[t].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"in "+u:u+" ago":u}}}(),format:O()};var E={M:function(e){return e.getMonth()+1},MM:function(e){return U(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return U(e.getDate(),2)},DDD:function(e){return w(e)},DDDD:function(e){return U(w(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return $(e)},WW:function(e){return U($(e),2)},YY:function(e){return U(e.getFullYear(),4).substr(2)},YYYY:function(e){return U(e.getFullYear(),4)},GG:function(e){return String(F(e)).substr(2)},GGGG:function(e){return F(e)},H:function(e){return e.getHours()},HH:function(e){return U(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:t>12?t%12:t},hh:function(e){return U(E.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return U(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return U(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return U(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return U(e.getMilliseconds(),3)},Z:function(e){return Z(e.getTimezoneOffset(),":")},ZZ:function(e){return Z(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};function X(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|]$/g,""):e.replace(/\\/g,"")}function Z(e,t){t=t||"";var n=e>0?"-":"+",r=Math.abs(e),u=r%60;return n+U(Math.floor(r/60),2)+t+U(u,2)}function U(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return n}var k=function(e,t,n){var r=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",u=(n||{}).locale,a=z.format.formatters,o=z.format.formattingTokensRegExp;u&&u.format&&u.format.formatters&&(a=u.format.formatters,u.format.formattingTokensRegExp&&(o=u.format.formattingTokensRegExp));var i=y(e);return W(i)?function(e,t,n){var r,u,a=e.match(n),o=a.length;for(r=0;r<o;r++)u=t[a[r]]||E[a[r]],a[r]=u||X(a[r]);return function(e){for(var t="",n=0;n<o;n++)a[n]instanceof Function?t+=a[n](e,E):t+=a[n];return t}}(r,a,o)(i):"Invalid Date"},A=document.querySelector("#time-now"),J=document.querySelector("#hello");console.log("if you have sourcemaps enabled in your devtools, click on main.js:5 --\x3e"),function e(){J.textContent="Hello World",A.textContent=k(new Date,"h:mm:ssa"),setTimeout(e,1e3)}()}();
//# sourceMappingURL=bundle.js.map
