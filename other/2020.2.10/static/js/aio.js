!function(n,o){function e(n,o){return l.cleanObj.toString.call(n).slice(8,-1)===o}function t(n){var o=m[n];if(o)return o.exports;throw"module "+n+" is undefined"}function r(n,o){for(var e,r,i=n.split(":"),a=i.pop().split("/"),s=l;e=a.shift();)"bdbox"!==e&&(r=e,a.length&&(s=s[e]=s[e]||{}));var c=m[n]={exports:{}},u=l.isFunction(o)?o.apply(c,[t,c.exports,c,l]):o;
u&&(c.exports=u),s[r]=c.exports}function i(){f.forEach(function(n){n()}),f.length=0,v=!0}function a(n){var o;return null==n?o=String(n):(o=Object.prototype.toString.call(n).toLowerCase(),o=o.substring(8,o.length-1)),o}function s(o){var e=o.success||g,t={imageUrl:"",mediaType:"all",title:"",content:"",linkUrl:location.href},r=o.error||g;
return l.isFunction(o.success)&&(e="_xSHARE_SUCCESS_"+l.getId(),n[e]=o.success,t.success=e),l.isFunction(o.error)&&(r="_xSHARE_FAIL_"+l.getId(),n[r]=o.error,t.error=r),l.each(o,function(n,e){"success"!==e&&"error"!==e&&(e in b?e=b[e]:"content"!==e||o.title||(t.title=n),t[e]=n)}),l.isArray(t.mediaType)&&(t.mediaType="all"),n.BoxShareData||(n.BoxShareData={successcallback:e,errorcallback:r,options:t}),t
}var c=+new Date,u=(c+"").slice(-3),d=navigator.userAgent,l={isBox:/ baiduboxapp\//i.test(d),isIOS:/(iPhone|iPod|iPad)/.test(d),isAndroid:/(Android);?[\s\/]+([\d.]+)?/.test(d),getId:function(){return u++},emptyArr:[],emptyFn:function(){},cleanObj:{},byId:function(n){return l.isString(n)?o.getElementById(n):n
},toArray:function(n){return l.emptyArr.slice.call(n)},$:function(n,e){return e=e&&1===e.nodeType?e:o,l.toArray(e.querySelectorAll(n))}};"Function,String,Array,Number,RegExp".replace(/[^, ]+/g,function(n){l["is"+n]=function(o){return e(o,n)}}),l.isBoolean=function(n){return n===!0||n===!1},l.isObject=function(n){return"object"==typeof n
},l.isUndefined=function(n){return void 0===n},l.isWindow=function(n){return null!=n&&n==n.window},l.isPlainObject=function(n){return l.isObject(n)&&!l.isWindow(n)&&Object.getPrototypeOf(n)==Object.prototype};var m={};l.define=r;var p=function(n,o,e){for(var t,r,i=n.split("."),a=e||p;t=i.shift();)"Box"!==t&&(r=t,i.length&&(a=a[t]=a[t]||{}));
return a[r]=o||{},a[r]},f=[],v=!1;p.init=function(n){return"function"!=typeof n?this:(v?n():f.push(n),this)},"complete,loaded,interactive".indexOf(o.readyState)>-1&&o.body?i():o.addEventListener("DOMContentLoaded",i,!1),r("common:bdbox/utils/getVersion",function(o,e,t){var r=function(){var o=0;if(n.baiduboxapp_version)o=n.baiduboxapp_version;
else{var e,t=navigator.userAgent;(e=/([\d+.]+)_(?:diordna|enohpi)_/.exec(t))?(e=e[1].split("."),o=e.reverse().join(".")):(e=/baiduboxapp\/([\d+.]+)/.exec(t))&&(o=e[1])}return r=function(){return o},o};t.exports=r}),r("common:bdbox/utils/version_compare",function(n,o,e){var t=function(n,o){o+="",n+="";
for(var e=n.split("."),t=o.split("."),r=0,i=Math.max(e.length,t.length);i>r;r++){if(e[r]&&!t[r]&&parseInt(e[r])>0||parseInt(e[r])>parseInt(t[r]))return 1;if(t[r]&&!e[r]&&parseInt(t[r])>0||parseInt(e[r])<parseInt(t[r]))return-1}return 0};e.exports=t}),r("common:bdbox/ios/invokeApp",function(e,t,r,i){r.exports=function(e,t,r){if(e&&i.isBox){var a=[];
if(i.isFunction(t))r=t;else for(var s in t)a.push(s+"="+t[s]);if(i.isFunction(r)){var c="_bdbox_js_"+i.getId();n[c]=function(){r.apply(n,[].slice.call(arguments,0))},a.push("func="+c)}else r&&a.push("func="+r);a="baiduboxapp://"+e+"?"+a.join("&");var u=o.createElement("iframe");u.style.display="none",u.src=a;
var d=o.body||o.getElementsByTagName("body")[0];d.appendChild(u),setTimeout(function(){d.removeChild(u),u=null},0)}}}),r("common:bdbox/android/invokeApp",function(o,e,t,r){function i(o,e,t){if(t&&!r.isArray(t)&&(t=Array.prototype.slice.call(arguments,0).slice(2)),n[o]&&n[o][e]){var i=n[o][e].apply(n[o],t);
return{error:0,result:i,__from:"js"}}var u=c();if(s(u,4.8)>=0){var d=a(o,e,t);return d=d?JSON.parse(d):{},d.__from="app",d}if("4.7.1"===u||"4.7"==u){var l=a(o,e,t);return{error:0,result:l,__from:"app4.7"}}return{error:200}}function a(o,e,t){if(!r.isBox)return{error:201};if(!r.isAndroid)return{error:202};
var i={obj:o,func:e,args:t?t:[]};try{return n.prompt("BdboxApp:"+JSON.stringify(i))}catch(a){return{error:201}}}var s=o("common:bdbox/utils/version_compare"),c=o("common:bdbox/utils/getVersion");t.exports=i}),r("common:bdbox/utils/detect",function(o,e,t,r){function i(o){var e={name:"unknown",version:0};
this===n||this.os||(this.os=e),o=o||navigator.userAgent;var t={Weibo:/weibo/i,Wechat:/micromessenger\//i,QQ:/QQ\//};for(var r in t)t.hasOwnProperty(r)&&(e["is"+r]=t[r].test(o));e.isUC=o.match(/UC/)||n.ucweb||n.ucbrowser;var i=o.match(/Windows Phone ([\d.]+)/);if(i)return e.win10=!0,e.version=i[1],e.name="win10",e;
var a=o.match(/(Android);?\s+([\d.]+)?/);if(a)return e.android=!0,e.version=a[2],e.name="android",e;var s=o.match(/(iPad).*OS\s([\d_]+)/),c=o.match(/(iPod)(.*OS\s([\d_]+))?/),u=!s&&o.match(/(iPhone\sOS)\s([\d_]+)/);return u&&!c?(e.ios=e.iphone=!0,e.version=u[2].replace(/_/g,"."),e.name="ios",e):s?(e.ios=e.ipad=!0,e.name="ios",e.version=s[2].replace(/_/g,"."),e):c?(e.name="ios",e.ios=e.ipod=!0,e.version=c[3]?c[3].replace(/_/g,"."):null,e):e
}i.apply(r),t.exports=i}),r("common:bdbox/each",function(n,o,e){function t(n){var o;return null==n?o=String(n):(o=Object.prototype.toString.call(n).toLowerCase(),o=o.substring(8,o.length-1)),o}e.exports=function(n,o,e){if("object"==typeof n){var r,i,a=t(n);if(e=e||n,"array"===a||"arguments"===a||"nodelist"===a){for(r=0,i=n.length;i>r;r++)if(o.call(e,n[r],r,n)===!1)return
}else for(r in n)if(n.hasOwnProperty(r)&&o.call(e,n[r],r,n)===!1)return}}}),r("common:bdbox/client/nativeShare",function(e,t,r,i){function a(o){var e={wechatIcon:location.protocol+"//m.baidu.com/static/search/logo300.png",type:"url",mediaType:"all",linkUrl:location.href,title:c.title,success:"console.log",error:"console.log"};
i.each(o||{},function(n,o){e[o]=n}),e.image&&(e.imageUrl=e.image),e.iconUrl&&!e.imageUrl&&"url"===e.type&&(e.imageUrl=e.iconUrl);var t={};["success","error"].forEach(function(o){var r=o;i.isFunction(e[o])&&(r="_xSHARE_SUCCESS_"+i.getId(),n[r]=e[o]),t[o+"callback"]=r,delete e[o]}),t.options=e,t.options.imageUrl&&i.isAndroid&&s(i.version,"6.5")<0&&delete t.options.imageUrl,n.BoxShareData=t;
var r=e.wechatIcon;if(/micromessenger\//i.test(navigator.userAgent)&&r&&r.length>20){var a=c.createElement("div");a.id="wa-generalevent-wx-logo",a.style.display="none",a.innerHTML='<img src="'+r+'"/>';var u=c.body.firstChild;u?c.body.insertBefore(a,u):c.body.appendChild(a)}}var s=e("common:bdbox/utils/version_compare"),c=o;
r.exports=a}),r("common:bdbox/utils/ready",function(n,e,t){function r(){a.forEach(function(n){n()}),a.length=0,s=!0}function i(n){"function"==typeof n&&(s?n():a.push(n))}var a=[],s=!1;"complete,loaded,interactive".indexOf(o.readyState)>-1&&o.body?r():o.addEventListener("DOMContentLoaded",r,!1),t.exports=i
});if(l.version=l.utils.getVersion(),l.version_compare=l.utils.version_compare,each=l.each,l.nativeShare=l.client.nativeShare,l.type=a,l.canI=function(n,o,e){return l.version_compare(l.version,n)>=0?l.isFunction(o)&&o():l.isFunction(e)&&e(),l},r("common:bdbox/client/o2o",function(n,o,e,t){var r=n("common:bdbox/android/invokeApp"),i=n("common:bdbox/ios/invokeApp"),a=encodeURIComponent,s=n("common:bdbox/each"),c=t.isAndroid?function(n,o){t.isObject(n)&&(o=n,n=n.url,delete o.url);
var e=["S.bdsb_light_start_url="+a(n)];if(t.isObject(o)){var i=o.min_v;delete o.min_v;var c={color:"i.extra_actionbar_color_id",appid:"S.bdsb_wallet_appid"};s(o,function(n,o){"color"===o&&(n=4278190080|parseInt("0x"+n)),o=c[o]||o,e.push(o+"="+n)})}e=e.join(";");var u={intent:"intent:#Intent;"+e+";end",min_v:i&&""!=i?i:"16783629",mode:"0"};
o&&o.component&&""!=o.component||(u.class="com.baidu.searchbox.wallet.WalletServiceActivity"),r("Bdbox_android_utils","command",[JSON.stringify(u)])}:function(n,o){t.isObject(n)&&(o=n,n=n.url,delete o.url);var e={openurl:a(n),minver:"5.3.0.0",isla:0,opentype:1,append:0,rbtnstyle:2};if(t.isObject(o)){var r={color:"barcolor"};
s(o,function(n,o){o=r[o]||o,e[o]=n})}e.appid&&(e.isla=1),i("easybrowse",e)};e.exports=c}),l.o2o=l.client.o2o,"android"===l.os.name?p("card",{query:function(n,o){if(p.version_compare(p.version,"5.0")<0)return this;var e,t;p.isArray(n)?e=[JSON.stringify(n)]:(t=p.toArray(arguments),o=t.pop(),p.isFunction(o)?e=t:(e=p.toArray(arguments),o=null),e=[JSON.stringify(e)]);
var r=p.android.invokeApp("Bdbox_android_card","mquery",e);return r=0===r.error&&r.result?JSON.parse(r.result):!1,p.isFunction(o)&&o(r),r},add:function(o,e){if(p.version_compare(p.version,"5.0")<0)return this;var t,r;p.isString(o)?t=[o]:p.isArray(o)?t=[JSON.stringify(o)]:(r=p.toArray(arguments),e=r.pop(),p.isFunction(e)?t=r:(t=p.toArray(arguments),e=null),t=[JSON.stringify(t)]);
var i=null;if(p.version_compare(p.version,"5.5")>=0){var a="";p.isFunction(e)&&(a="__box_card_"+p.getId(),n[a]=function(n){var o=JSON.parse(n),t=!1;for(var r in o){t=o[r].st;break}e(t)}),i=p.android.invokeApp("Bdbox_android_card","madd",t.concat([a,0]))}else i=p.android.invokeApp("Bdbox_android_card","madd",t);
return i}}):p("card",{query:function(n,o){if(p.version_compare(p.version,"5.0")<0)return this;var e,t;p.isArray(n)?e=[JSON.stringify(n)]:(t=p.toArray(arguments),o=t.pop(),p.isFunction(o)?e=t:(e=p.toArray(arguments),o=null),e=[JSON.stringify(e)]);var r=function(n){p.isFunction(o)&&o(JSON.parse(n)),r=null
};p.ios.invokeApp("cardMquery",{params:encodeURIComponent(e)},r)},add:function(n,o){if(p.version_compare(p.version,"5.0")<0)return this;var e,t;p.isString(n)?e=[n]:p.isArray(n)?e=[JSON.stringify(n)]:(t=p.toArray(arguments),o=t.pop(),p.isFunction(o)?e=t:(e=p.toArray(arguments),o=null),e=[JSON.stringify(e)]);
var r=function(n){var e=JSON.parse(n),t=!1;for(var i in e){t=e[i].st;break}p.isFunction(o)&&o(t),r=null};return p.ios.invokeApp("cardMadd",{params:encodeURIComponent(e),gohome:"0"},r),!0}}),r("common:bdbox/utils/jsonToQuery",function(n,o,e,t){e.exports=function(n){if(t.isString(n))return n;var o=[];for(var e in n)o.push(e+"="+n[e]);
return o.join("&")}}),r("common:bdbox/io/loadJS",function(e,t,r,i){function a(e,t,r){var a,u,d,l=o.createElement("script");i.isString(e)?(a=e,i.isFunction(t)&&(r=t,t=null)):(a=e.url,t=e.data,r=e.success,u=e.error||i.emptyFn,d=e.timeout),i.isObject(t)&&(t=c(t)),t&&(a+=(-1===a.indexOf("?")?"?":"&")+t),a=a.replace(/[&?]{1,2}/,"?");
var m;/=\?/.test(a)&&(m="_box_jsonp"+i.getId(),a=a.replace(/=\?/,"="+m));var p=s();d=d||2e4,l.type="text/javascript",l.src=a;var f,v=!0,h=function(){m&&delete n[m],f&&clearTimeout(f),l.onload=l.onreadystatechange=l.onerror=null,l=null},b=function(){!l||l.readyState&&!/loaded|complete/.test(l.readyState)||(h(),v&&i.isFunction(r)&&r.apply(null,i.toArray(arguments)),v=!1)
},g=function(n){h(),v&&u(n),v=!1};m&&(n[m]=b),f=setTimeout(function(){h(),v&&u("timeout"),v=!1},d),l.onload=l.onreadystatechange=l.onerror=b,l.onerror=g,p.appendChild(l)}function s(){return o.head||o.getElementsByTagName("head")[0]||o.documentElement}var c=e("common:bdbox/utils/jsonToQuery");i.emptyFn,r.exports=a
}),r("common:bdbox/utils/queryToJson",function(n,o,e){e.exports=function(n){var o=n.split("?"),e=o[1]?o[1]:o[0],t=e.split("&"),r={};return t.forEach(function(n){if(n=n.split("="),n[0].length>0){var o="";try{o=decodeURIComponent(n[1])||""}catch(e){}r[n[0]]=o}}),r}}),r("common:bdbox/extend",function(n,o,e,t){function r(n,o,e){for(var t in o)e&&(i(o[t])||a(o[t]))?(i(o[t])&&!i(n[t])&&(n[t]={}),a(o[t])&&!a(n[t])&&(n[t]=[]),r(n[t],o[t],e)):c(o[t])||(n[t]=o[t])
}var i=t.isPlainObject,a=t.isArray,s=t.isBoolean,c=t.isUndefined;e.exports=function(n){var o,e=t.emptyArr.slice.call(arguments,1);return s(n)&&(o=n,n=e.shift()),e.forEach(function(e){r(n,e,o)}),n}}),r("common:bdbox/utils/ready",function(n,e,t){function r(){a.forEach(function(n){n()}),a.length=0,s=!0}function i(n){"function"==typeof n&&(s?n():a.push(n))
}var a=[],s=!1;"complete,loaded,interactive".indexOf(o.readyState)>-1&&o.body?r():o.addEventListener("DOMContentLoaded",r,!1),t.exports=i}),r("common:bdbox/utils/detect",function(o,e,t,r){function i(o){var e={name:"unknown",version:0};this===n||this.os||(this.os=e),o=o||navigator.userAgent;var t={Weibo:/weibo/i,Wechat:/micromessenger\//i,QQ:/QQ\//};
for(var r in t)t.hasOwnProperty(r)&&(e["is"+r]=t[r].test(o));e.isUC=o.match(/UC/)||n.ucweb||n.ucbrowser;var i=o.match(/Windows Phone ([\d.]+)/);if(i)return e.win10=!0,e.version=i[1],e.name="win10",e;var a=o.match(/(Android);?\s+([\d.]+)?/);if(a)return e.android=!0,e.version=a[2],e.name="android",e;var s=o.match(/(iPad).*OS\s([\d_]+)/),c=o.match(/(iPod)(.*OS\s([\d_]+))?/),u=!s&&o.match(/(iPhone\sOS)\s([\d_]+)/);
return u&&!c?(e.ios=e.iphone=!0,e.version=u[2].replace(/_/g,"."),e.name="ios",e):s?(e.ios=e.ipad=!0,e.name="ios",e.version=s[2].replace(/_/g,"."),e):c?(e.name="ios",e.ios=e.ipod=!0,e.version=c[3]?c[3].replace(/_/g,"."):null,e):e}i.apply(r),t.exports=i}),r("common:bdbox/schema",function(n,e,t,r){function i(n,e){if(!n)return void e(!0);
if(e=e||r.emptyFn,!r.isBox&&r.isIOS&&c(s.version,"9.0")>=0)return void u(function(){a(n,e)});var t=Date.now(),i=o.createElement("IFRAME");i.src=n,i.style.position="absolute",i.style.left="-2000px",i.style.top="-1000px",i.style.width="1px",i.style.height="1px",i.style.webkitTransition="all 0.9s",i.style.transition="all 0.9s",o.body.appendChild(i);
var d=function(){o.body.removeChild(i),e(Date.now()-t<1500?!0:!1)};i.addEventListener("webkitTransitionEnd",d,!1),i.addEventListener("transitionEnd",d,!1),setTimeout(function(){i.style.left="-1000px"},20)}function a(n,o){location.href=n,d&&clearTimeout(d),d=setTimeout(function(){o(!0)},3e3)}var s=n("common:bdbox/utils/detect")(),c=n("common:bdbox/utils/version_compare"),u=n("common:bdbox/utils/ready"),d=null;
t.exports=i}),r("common:bdbox/monitor",function(o,e,t,r){var i=encodeURIComponent,a=function(n,o){n+=n.indexOf("?")<0?"?":"&",this.url=n,this.options=o};a.prototype.report=function(o){o=o||"";var e=new Image(1,1),t=[];if(r.isObject(o)){for(var a in o)t.push(a+"="+i(String(o[a])));o=t.join("&")}var s="_box_mt"+r.getId();
n[s]=e,e.onload=e.onerror=e.onabort=function(){e.onload=e.onerror=e.onabort=null,n[s]=e=null};var c=this.url+o;return r.isFunction(this.options.customHandler)&&(c=this.options.customHandler(c)),e.src=c+"&_rnd="+Math.floor(2147483648*Math.random()),this},a.prototype.main=function(n,o){return n&&r.isFunction(this[n])&&this[n].apply(this,r.toArray(o||[])),this
},t.exports=function(n,o){return new a(n,o)}}),r("common:bdbox/clone",function(n,o,e){var t=Object.prototype.toString,r=function(n,o,e){var t=0;for(var r in n)if(n.hasOwnProperty(r))if(e)o[r]=n[r];else if(o(r,n[r],t++))break},i=function(n){var o;switch(t.call(n)){case"[object Object]":o={},r(n,function(n,e){o[n]=i(e)
});break;case"[object Array]":o=[],n.forEach(function(n){o.push(i(n))});break;default:o=n}return o};e.exports=i}),r("common:bdbox/monitor/pblog",function(o,e,t,r){var i=o("common:bdbox/monitor"),a=o("common:bdbox/extend"),s=o("common:bdbox/utils/queryToJson"),c=o("common:bdbox/utils/getVersion"),u=o("common:bdbox/clone"),d=s(location.search),l=navigator.userAgent,m=n.location.protocol;
"https:"!=m&&(m="http:");var p=m+"//m.baidu.com/tcbox",f={service:"bdbox",action:"pblog",ctv:2,cen:"uid_ua_ut",data:{appid:"1",dataid:"2",actiontype:"1",actionid:"2",actiondata:{ref:d.ref||"",gmv:d.vmgdb||"",source:d.from||d.ref||"",boxVersion:c(),boxPlatform:l.match(/(iPad|iPhone|iPod)/gim)?"ios":"android"}}},v=encodeURIComponent;
d.uid&&d.osname&&["osname","ua","ut","from","cfrom","uid","pkgname"].forEach(function(n){d[n]&&(f[n]=d[n])});var h,b=i(p,{customHandler:function(n){var o=[];if(h)for(var e in h)if(h.hasOwnProperty(e)){var t=h[e];r.isPlainObject(t)&&(t=JSON.stringify(t)),o.push(e+"="+v(t))}return o.length&&(n+=o.join("&")),n
}});b.init=function(n,o){r.isPlainObject(o)&&(f=a(f,o)),f.data.cateid=n},b.pv=function(n,o){h=u(f);var e=h.data;e.actionid="1";var t={};return t.url=n||location.href,o&&(t.u=o),e.actiondata=a(e.actiondata,t),b.report()},b.event=function(n,o,e){if(!n)throw"monitor.tc.event need a evtName";if(r.isPlainObject(o)&&!e){var t={evtName:n};
for(var i in o)t[i]=o[i]}else var t={evtName:n,evtType:o||"",evtTag:e||""};h=u(f);var s=h.data;return s.actionid="2",s.actiondata=a(s.actiondata,t),b.report()},t.exports=function(){b.main.apply(b,arguments)}}),r("common:bdbox/moplus",function(n,o,e,t){var r=(n("common:bdbox/utils/jsonToQuery"),n("common:bdbox/io/loadJS"),n("common:bdbox/utils/version_compare"),n("common:bdbox/monitor/pblog")),i=n("common:bdbox/schema"),a="com.baidu.searchbox",s="http://127.0.0.1:6259/",c="http://127.0.0.1:40310/",u="inapp_boxserver",d="https:"===location.protocol,l={isSendPv:!1,isHit:!1,parseUA:function(){var n,o,e=navigator.userAgent,t={uc:/UCBrowser\/(\S*) \S*/g,bd:/baidubrowser\/(\S*) \(Baidu/g,qq:/MQQBrowser\/(\S*) Mobile/g,chr:/Chrome\/(\S*) Mobile/g,qh:/360 Aphone Browser \((\S*)\)/g,sg:/SogouMobileBrowser\/(\S*)/g,mi:/MiuiBrowser\/(\S*)/g};
for(var r in t){var i=t[r].exec(e);if(i){n=r,o=i[1];break}}return n=n?n:"other",o=o?o:"0",{t:n,v:o}},parseHost:function(){return m.curHost===c?1:0},sendEvt:function(n,o,e,t){this.isHit&&this.send(n,o,e,t)},send:function(n,o,e,t){var i=this.parseUA(),a=i.t,s=i.v,c=d?0:1,u=this.parseHost();r("event",[n,{evtType:o||"",brName:a,brVer:s,isHttp:c,isNew:u,source:e||"",intent:t||""}])
},init:function(){this.isHit=Date.now()%100===1,r("init",[2])}},m=function(n,o,e){this.version="2.0",this.isHttps=d,this.curHost=e||"",this.newHost=c,this.oldHost=this.isHttps?c:s,this.MCMDF=o||u,this._infoFuncs=[],this._verFuncs=[],this.minVersion=n?n:0,this.pkgName=a,l.init()};m.prototype={constructor:m,setMcmdf:function(n){return this.MCMDF=n,this
},setHost:function(){return this},getHost:function(){},api:function(n,o,e){return e({error:233}),this},getInfo:function(n){return n({error:233}),this},getHVersion:function(n){return n({error:233}),this},parseInfo:function(){return!1},schema:function(n,o){if(!n.intent)throw"schema intent is empty";n.mcmdf||(n.mcmdf=this.MCMDF);
var e=function(){l.sendEvt("schema","success",n.source,n.intent),t.isFunction(o)&&o({error:0,from:"schema"})},r=function(){l.sendEvt("schema","fail",n.source,n.intent),t.isFunction(o)&&o({error:20,from:"schema"})},s=n.schema||"";if(n.intent&&!n.schema){var c=n.intent;-1==c.indexOf(a)&&(l.sendEvt("defaultPKGName","fail",n.source||"",n.intent),n.minver=n.minver?n.minver:"6.9.1")
}s||(s="baiduboxapp://utils?action=sendIntent&params="+encodeURIComponent(JSON.stringify(n))+"&minver="+(n.minver?n.minver:"6.9")),i(s,function(n){n?r():e()})},sendIntent:function(n,o){return o({error:233}),this},request:function(n,o){return o({error:233}),this}},e.exports=function(n,o){return new m(n,o)
},e.exports.Moplus=m}),l.version_compare(l.version,"5.3.5")>=0){var h,b={image:"imageUrl",url:"linkUrl",order:"mediaType"},g="";n[g]=l.emptyFn,l.isAndroid?(h=function(n){if(n.id&&l.byId(n.id)){var o=n.eventType||"touchstart";l.byId(n.id).addEventListener(o,function(){e(n)},!0)}var e=function(o){o=s(o||n);
var e=o.error,t=o.success;o.iconUrl&&o.imageUrl&&delete o.imageUrl,l.android.invokeApp("Bdbox_android_utils","callShare",[JSON.stringify(o),t||"console.log",e||"console.log"])};return e},p("share",h)):(h=function(n){if(n.id&&l.byId(n.id)){var o=n.eventType||"touchstart";l.byId(n.id).addEventListener(o,function(){e(n)
},!0)}var e=function(o){o=s(o||n);var e=o.error,t=o.success;o.iconUrl&&!o.imageUrl&&(o.imageUrl=o.iconUrl),o=JSON.stringify(o),l.ios.invokeApp("callShare",{options:encodeURIComponent(o),errorcallback:e||"console.log",successcallback:t||"console.log"})};return e},p("share",h))}else{var y=[],x=function(){p._socShare&&p._socShare.init?y.forEach(function(n){p._socShare.init(n)
}):setTimeout(x,3e3)};l.io.loadJS("//m.baidu.com/static/searchbox/openjs/share.js?v=1.2",x);var S={source:"client_id",id:"dom_id",image:"pic_url",success:"afterRender"},h=function(n){var o={content:"",client_id:"ZVEpDSsmZ0qxa1gmgDAh1Fje",theme:"native",dom_id:"share",animate:!0,pic_url:"",url:encodeURIComponent(location.href)};
return l.isObject(n)&&l.each(n,function(n,e){if(e in S&&(e=S[e]),"order"===e&&l.isArray(n)){var t=[];n.forEach(function(n){"email"===n&&(n="mail"),t.push(n)})}o[e]=n}),delete o.success,delete o.error,delete o.afterRender,"all"===o.order?o.order=["qqdenglu","sinaweibo","renren","kaixin","mail","sms"]:l.isString(o.order)&&(o.order=o.order.split(",")),p._socShare&&p._socShare.init?p._socShare.init(o):y.push(o),function(){p._socShare.ui._shareBtnClickHandler()
}};p("share",h)}if(r("common:bdbox/distribute",function(n,o,e,t){var r=n("common:bdbox/schema");n("common:bdbox/utils/detect");var i=n("common:bdbox/each"),a=n("common:bdbox/moplus"),s=t.emptyFn,c={qqDownloadUrl:"http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.searchbox",androidDownloadUrl:"",iosDownloadUrl:"",iosFailCallback:s,androidFailCallback:s,iosSchema:"",androidSchema:"",androidIntent:"",inBoxCallback:s},u=function(n){var o=this;
n&&i(c,function(o,e){n[e]=n[e]||o});var e=this.url=n.url;e&&""!==e?(this.androidIntent="intent://"+e.replace(/^http[s]?:\/\//,"")+"#Intent;scheme=http;action=com.baidu.searchbox.action.VIEW;category=android.intent.category.DEFAULT;end",this.iosSchema="baiduboxapp://easybrowse?openurl="+encodeURIComponent(e)+"&opentype=0&isla=0&append=0&minver=5.3.0.0"):["androidIntent","iosSchema","androidSchema"].forEach(function(e){o[e]=n[e]
}),this.options=n,this.fail=function(){if(console.log(t.os.name+" fail"),t.isFunction(n[t.os.name+"FailCallback"])){var o=n[t.os.name+"FailCallback"]();if(t.isBoolean(o)&&!o)return}var e=n[t.os.name+"DownloadUrl"];e&&""!==e&&(location.href=n[t.os.name+"DownloadUrl"])},this.success=function(){return console.log(t.os.name+" success"),t.isFunction(n[t.os.name+"SuccessCallback"])?n[t.os.name+"SuccessCallback"]():void 0
}};u.prototype.wechat=function(){var n=this.options;if(t.isFunction(n.wechatCallback)){var o=n.wechatCallback();if(t.isBoolean(o)&&!o)return}n.qqDownloadUrl&&""!==n.qqDownloadUrl&&(location.href=n.qqDownloadUrl)},u.prototype.run=function(){var n=this,o=(n.url,n.options);return t.os.isWechat?n.wechat():t.isBox&&t.isFunction(o.inBoxCallback)?o.inBoxCallback():void this.invoke()
},u.prototype.invoke=function(){var n=this;if(t.os.android){var o=a();o.getHVersion(function(e){e?o.sendIntent(n.androidIntent,function(o){0==o.error?n.success():n.fail()},1e3):n.androidSchema?r(n.androidSchema,function(o){o?n.fail():n.success()}):n.fail()})}else r(n.iosSchema,function(o){o?n.fail():n.success()
})},e.exports=function(n){return new u(n)}}),each(l,function(n,o){p[o]=n}),n.Box&&n.Box.$)for(var _ in p)n.Box[_]=n.Box[_]||p[_];else n.Box=p}(window,document);