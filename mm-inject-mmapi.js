/*! mmapi v1.4 Copyright 2006-2015 Maxymiser Inc */
/*v1.4.15.64764*/
/*Please do not modify this file except configuration section at the bottom.*/
(function(a,D){function K(b){this.enableUtility=function(a){var d=b.getParam("un",b.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+a+"($|,)")).test(d)||(d=d.split(","),d.push(a),b.setParam("un",d.join(",").replace(/(^,)|(,$)/g,""),b.baseStorage.storeStrategy.persistent));return this};this.disableUtility=function(a){var d=b.getParam("un",b.baseStorage.storeStrategy.persistent)||"";(new RegExp("(^|,)"+a+"($|,)")).test(d)&&(d=d.replace(new RegExp("(^|,)"+a+"($|,)","gi"),",").replace(/(^,)|(,$)/g,
""),b.setParam("un",d,b.baseStorage.storeStrategy.persistent));return this};this.enable=function(){b.enable();return this};this.disable=function(){b.disable();return this};this.getConfig=function(){return{storageType:b.storageType,cprefix:b.cprefix,domain:b.domain,baseContentUrl:b.baseContentUrl,cookie_domain:b.cookie_domain,srv:b.srv,async:b.async,beforeInit:b.beforeInit,beforeRequest:b.beforeRequest,afterResponse:b.afterResponse,afterResponseExecution:b.afterResponseExecution}}}function P(b){var a=
this,d=b.domain,m=encodeURIComponent,w=decodeURIComponent;a.set=function(a,b,f,k){k||(b=m(b));a=m(a)+"="+b+";domain="+d+";path=/";f?(b=new Date,b.setTime(b.getTime()+864E5*f),f=";expires="+b.toGMTString()):f="";document.cookie=a+f;return this};a.remove=function(b){a.set(b,"",-1);return this};a.get=function(b,a){var d=new RegExp("(?:^|; )"+m(b).replace(/([.$?*|{}()\[\]\\\/+^])/g,"\\$1")+"=([^;]+)"),d=(document.cookie.match(d)||[,""])[1];return a?d:w(d)}}function S(b){function k(b){for(var a={},d="",
f=0,e;e=A.getItem(b+f++);)d+=e;"cookie"==z&&(d=decodeURIComponent(d));try{a=JSON.parse(d)}catch(n){}return a}function d(){r=k(H);f=k(E);F&&"cookie"!==z&&(t.set(v+"store.s","s"),F=!1,f={});var b=(new Date).getTime(),a=r[n],d;for(d in a)a.hasOwnProperty(d)&&u(a[d]).e<=b&&delete a[d];w();r[n]=r[n]||{};f[n]=f[n]||{}}function m(b,a,d){a=JSON.stringify(a);var f="{}"===a,e=0;for("cookie"==z&&(a=encodeURIComponent(a));A.getItem(b+e);)A.removeItem(b+e++);if(!f)for(e=0;f=a.substr(3E3*e,3E3);)A.setItem(b+e++,
f,d)}function w(){m(H,r);m(E,f,0)}function u(a){var b=a.indexOf("|");return{v:JSON.parse(a.substring(b+1,a.length)),e:a.substring(0,b)}}if(!/^(cookie)$/.test(b.type))throw"(mm module: storage) Invalid storage type: "+b.type;var r,f,z=b.type||"cookie",v=b.cprefix+".",H=v+"store.p.",E=v+"store.s.",t=new P({domain:b.domain}),n=b.namespace||"def",F=!t.get(v+"store.s"),A="local"===z&&a.localStorage?a.localStorage:"session"===z&&a.sessionStorage?a.sessionStorage:{setItem:function(a,b,d){t.set(a,b,d==D?
365:d,!0)},getItem:function(a){return t.get(a,!0)},removeItem:function(a){t.remove(a)}};this.get=function(a){d();var b=r[n],k=f[n],x={},e;for(e in b)b.hasOwnProperty(e)&&(x[e]=b[e]);for(e in k)k.hasOwnProperty(e)&&(x[e]=k[e]);if(!a){a={};for(var m in x)x.hasOwnProperty(m)&&(a[m]=u(x[m]).v);return a}return(x[a]?u(x[a]):0).v};this.set=function(a,b,k){d();var m=r[n],e=f[n];delete m[a];delete e[a];null!==b&&b!==D&&(k?(e=new Date,e.setTime(e.getTime()+864E5*k),b=e.getTime()+"|"+JSON.stringify(b),m[a]=
b):e[a]="0|"+JSON.stringify(b));w();return this};this.removeAll=function(){d();r[n]={};f[n]={};w();return this};this.testStorage=function(){var a=(""+Math.random()).substring(0,5);t.set(v+"tst",a,10);a=t.get(v+"tst",!0)===a?1:0;t.remove(v+"tst");return a};d()}function T(b){function k(c){return"function"===typeof c}function d(c){return"string"===typeof c}function m(c,l){if(y[c])for(var a=y[c].length-1;0<=a;a--)y[c][a].call({},l)}function w(c){if(B){var l=document.getElementsByTagName("head")[0];l.insertBefore(c,
l.lastChild)}else document.write(c.outerHTML||(new XMLSerializer).serializeToString(c))}function G(c,l){var a=document.createElement("script");a.type="text/javascript";a.id=l;a.src=c;return a}function r(c){if("object"!==typeof c)return c;var a=[],b;for(b in c)if(c.hasOwnProperty(b))if(c[b].constructor===Array)for(var g in c[b])c[b].hasOwnProperty(g)&&a.push(b+"="+c[b][g]);else a.push(b+"="+encodeURIComponent(c[b]));return a.join(";")}function f(c){c=c?F(c):{};var a={};d(c["mm-dlp-api"])&&(a.fv={ref:c["original-ref"].substring(0,
256),url:c["original-url"].substring(0,1024)},a.origin=/http(s)?:\/\/.*?([^/]|$)+/.exec(a.fv.url)[0]);for(var b in c){var g=c[b];c.hasOwnProperty(b)&&"mmcore."===b.substring(0,7)&&(a[b.substring(7)]=g)}return a}function z(){var c="mmRequestCallbacks["+C+"]",l={},e=a.screen;l.fv={dmn:b.domain,ref:document.referrer.substring(0,256),url:location.href.substring(0,1024),scrw:e.width,scrh:e.height,clrd:e.colorDepth,cok:p[q.persistent].testStorage()};l.lver="1.4";l.jsncl=c;l.ri=C;return l}function v(c,l){var h=
c&&c.Packages||[],g=h.length;if(0<g){a.mmInitCallback=function(b){b(e,c,{skipResponseProcessing:!0,skipPersistentData:!0,useLoaderStorage:!0});0===--g&&(l(),a.mmInitCallback=D)};for(var d=0;d<h.length;d++){var f=G(0===h[d].indexOf("//")?h[d]:b.baseContentUrl+h[d],"mmpack."+d);w(f)}}else l()}function H(c){c=document.getElementById(c);c.parentNode?c.parentNode.removeChild(c):c&&c.removeAttribute("src")}function E(c,b,h){c=(Q[c-1]=b)&&b.PersistData||[];for(var g=c.length;g--;)e.setParam(c[g].Name,c[g].Value,
q.persistent,c[g].Expiration);if(b.hasOwnProperty("mmcoreResponse")&&d(b.mmcoreResponse)&&a.hasOwnProperty("mmcore"))try{Function(b.mmcoreResponse).call(a)}catch(f){u.log(f)}m("response",b);h(!!b);m("responseExecuted",b)}function t(c,b){var e=G(c,"mmrequest."+C);(function(c,b){a.mmRequestCallbacks[c]=function(l){H(e.id);1===c?v(l,function(){E(c,l,b);B=!0;var e=f(document.location.search).origin;e&&a.parent&&a.parent.postMessage&&a.parent.postMessage(JSON.stringify({hash:"unhide",command:"unhide",
data:{}}),e)}):E(c,l,b);delete a.mmRequestCallbacks[c]}})(C,b);e.setAttribute("onerror","window['mmRequestCallbacks']["+C+"](false);");w(e);C++}function n(){var c={};this.get=function(a){return a?c[a]:c};this.set=function(a,b){c[a]=b};this.removeAll=function(){c={}}}function F(c){c=c.split(/\?|&/);for(var a={},b,e=0;e<c.length;e++)c[e]&&(b=c[e].split("="),a[b[0]]=decodeURIComponent(b[1]||""));return a}function A(c){var a={},b=F(c);I||(a.pageid=b.pageid);a.jsver=b.jsver;var e,d;if(c=b.uv){a.uv={};
var f=c.split(/;/);for(d=0;d<f.length;d++)e=f[d].split("="),c=e[0].replace(/^\s+|\s+$/gm,""),e=e[1],0<c.length&&(a.uv.hasOwnProperty(c)||(a.uv[c]=[]),a.uv[c].push(e))}if(c=b.uat)for(a.uat={},b=c.split(/;/),d=0;d<b.length;d++)e=b[d].split("="),c=e[0].replace(/^\s+|\s+$/gm,""),e=e[1],0<c.length&&(a.uat[c]=e);return a}function K(){if(a.hasOwnProperty("mmcore")){var c=a.mmcore;c.server=b.srv;e.CGRequestInternal=e.CGRequest;e.CGRequest=function(a,b){I=!0;N=a;O=b;c.CGRequest()};var d=c._Tag;c._Tag=function(a){if(-1==
a.indexOf(b.srv))d.apply(c,arguments);else{c._Clear.call(c);var h=e.mergeParams(O,A(a));R=B;I||(B=c._async);e.CGRequestInternal(N,h);B=R;O=N=D;I=!1}};var h=c.SetCookie;c.SetCookie=function(a){/^(mmid|pd|srv)$/.test(a)||h.apply(c,arguments)}}}function L(c){return c||a.location.hostname.replace(/^www\./i,"")}function M(c,a,b){var g="";0<a.length&&"."!=a.substring(a.length-1)&&(g=".");a=a+g+b;g=c.get(a);d(g)&&g&&(e.setParam(b,g,q.persistent,365),c.remove(a))}function x(c){var b;b=a.hasOwnProperty("mmcore")&&
a.mmcore.cookie_domain?a.mmcore.cookie_domain:c.hasOwnProperty("mmcoreCookieDomain")&&d(c.mmcoreCookieDomain)?c.mmcoreCookieDomain:c.cookie_domain;c=a.hasOwnProperty("mmcore")&&a.mmcore.cprefix?a.mmcore.cprefix:c.hasOwnProperty("mmcoreCprefix")&&d(c.mmcoreCprefix)?c.mmcoreCprefix:c.cprefix+".";b=new P({domain:L(b)});M(b,c,"pd");M(b,c,"srv");M(b,"","mmid")}this.version="1.4";var e=this,Q=[],C=1,B=!1,y={},p=[],J,q={persistent:0,deferredRequest:1,request:2,page:3},N,O,R,I=!1;this.baseStorage=function(c){return new S({type:b.storageType,
namespace:c,domain:L(b.cookie_domain),cprefix:b.cprefix})};this.baseStorage.storeStrategy=q;this.mergeParams=function(c,a){c="undefined"===typeof c?{}:c;a="undefined"===typeof a?{}:a;if("object"!==typeof a)return a;var b={},d;if("object"===typeof c)for(d in c)c.hasOwnProperty(d)&&(b[d]=c[d]);for(d in a)a.hasOwnProperty(d)&&(b[d]=b[d]?b[d].constructor===Array&&a[d].constructor===Array?b[d].concat(a[d]):e.mergeParams(b[d],a[d]):a[d]);return b};this.CGRequest=function(c,d){c=c||function(){};d=d||{};
a.mmRequestCallbacks=a.mmRequestCallbacks||{};m("request");var h=e.mergeParams(z(),e.mergeParams(e.mergeParams(p[q.persistent].get(),e.mergeParams(p[q.deferredRequest].get(),e.mergeParams(p[q.page].get(),p[q.request].get()))),f(location.search))),g=[],k=b.srv,h=e.mergeParams(h,d),n;for(n in h)h.hasOwnProperty(n)&&g.push(encodeURIComponent(n)+"="+encodeURIComponent(r(h[n])));p[q.deferredRequest].removeAll();p[q.request].removeAll();t(k+g.join("&"),c);return this};this.getResponses=function(){return Q};
this.setParam=function(a,b,e,d){p[e].set(a,b,d);return this};this.getParam=function(a,b){return p[b].get(a)};this.removeParam=function(a,b){p[b].set(a,null,-1);return this};this.on=function(a,b){y[a]&&y[a].push(b);return e};this.disable=function(){J.set("disabled",1,0);return this};this.enable=function(){J.set("disabled",null,-1);return this};(function(b){function l(){e.on("request",function(){try{var a=b.beforeRequest;k(a)&&a.call({},e.getParam,function(b,a,c,d){e.setParam(b,a,"undefined"===typeof c?
1:c,d)})}catch(d){u&&u.log(d)}});e.on("response",function(a){try{var d=b.afterResponse;k(d)&&d.call({},e.getParam,function(a,b,c,d){e.setParam(a,b,"undefined"===typeof c?1:c,d)},a)}catch(f){u&&u.log(f)}});e.on("responseExecuted",function(a){try{var d=b.afterResponseExecution;k(d)&&d.call({},e.getParam,function(a,b,c,d){e.setParam(a,b,"undefined"===typeof c?1:c,d)},a)}catch(f){u&&u.log(f)}});try{var f=b.beforeInit;f&&"function"===typeof f&&f.call({},e.getParam,function(a,b,c,d){e.setParam(a,b,"undefined"===
typeof c?1:c,d)})}catch(g){u&&u.log(g)}b.hasOwnProperty("mmcoreUrl")&&d(b.mmcoreUrl)&&b.mmcoreUrl?(a.mmcoreInitCallback=function(d){x(b);K();e.CGRequest(function(){k(d)&&d.apply(a.mmcore,arguments)},m);delete a.mmcoreInitCallback},w(G(b.mmcoreUrl,"mmcoreIntegration"))):(x(b),e.CGRequest(D,m))}for(var h in b)b.hasOwnProperty(h)&&(e[h]=b[h]);var g=f(document.location.search);e.calcCookieDomain=L(e.cookie_domain);B="boolean"===typeof b.async?b.async:!1;J=e.baseStorage("ls");if(1!=(g.disabled||J.get("disabled"))){p[q.persistent]=
e.baseStorage("mmparams.p");p[q.deferredRequest]=e.baseStorage("mmparams.d");p[q.request]=new n;p[q.page]=new n;y.request=[];y.response=[];y.responseExecuted=[];var m={};h=f(document.referrer).pruh;var g=g.pruh,r=a.mmpruh,t=e.getParam("pruh",0),v=(h?h+",":"")+(g?g+",":"")+(r?r+",":"")+(t?t:"");v?(a.mmInitCallback=function(a){a(e,v,l)},w(G(b.baseContentUrl+"utils/pruh.js","MM.PRUH"))):l()}})(b);return this}if(!a.mmsystem){try { var settings = JSON.parse(window.localStorage.getItem('mm-inject-settings')), u=a.console||{log:function(){},error:function(){}},U=new T({
  storageType: 'cookie',
  cprefix: 'mmapi',
  domain: settings.domain,
  baseContentUrl: settings.baseContentUrl,
  cookie_domain: '.' + (location.hostname.match(/[^.]+(\.\w\w\w?)?\.\w\w+$/) || [location.hostname])[0],
  srv: '//' + settings.srv,
  async: true,
  mmcoreUrl: '',
  mmcoreCookieDomain: '//service.maxymiser.net/cdn/britishgas/js/mmcore_old.js',
  mmcoreCprefix: '',
  beforeInit: function(getParam, setParam) {},
  beforeRequest: function(getParam, setParam) {},
  afterResponse: function(getParam, setParam, genInfo) {},
  afterResponseExecution: function(getParam, setParam, genInfo) {
    // show the document
    var style = document.getElementById('mm-inject-hide');
    style && style.parentNode.removeChild(style);
  }
});a.mmsystem=new K(U)}}catch(e){}})(window);
