
		import('node:buffer').then(({ Buffer }) => {
			globalThis.Buffer = Buffer;
		})
		.catch(() => null);

		const __ALSes_PROMISE__ = import('node:async_hooks').then(({ AsyncLocalStorage }) => {
			globalThis.AsyncLocalStorage = AsyncLocalStorage;

			const envAsyncLocalStorage = new AsyncLocalStorage();
			const requestContextAsyncLocalStorage = new AsyncLocalStorage();

			globalThis.process = {
				env: new Proxy(
					{},
					{
						ownKeys: () => Reflect.ownKeys(envAsyncLocalStorage.getStore()),
						getOwnPropertyDescriptor: (_, ...args) =>
							Reflect.getOwnPropertyDescriptor(envAsyncLocalStorage.getStore(), ...args),
						get: (_, property) => Reflect.get(envAsyncLocalStorage.getStore(), property),
						set: (_, property, value) => Reflect.set(envAsyncLocalStorage.getStore(), property, value),
				}),
			};

			globalThis[Symbol.for('__cloudflare-request-context__')] = new Proxy(
				{},
				{
					ownKeys: () => Reflect.ownKeys(requestContextAsyncLocalStorage.getStore()),
					getOwnPropertyDescriptor: (_, ...args) =>
						Reflect.getOwnPropertyDescriptor(requestContextAsyncLocalStorage.getStore(), ...args),
					get: (_, property) => Reflect.get(requestContextAsyncLocalStorage.getStore(), property),
					set: (_, property, value) => Reflect.set(requestContextAsyncLocalStorage.getStore(), property, value),
				}
			);

			return { envAsyncLocalStorage, requestContextAsyncLocalStorage };
		})
		.catch(() => null);
	
var se=Object.create;var H=Object.defineProperty;var ae=Object.getOwnPropertyDescriptor;var ne=Object.getOwnPropertyNames;var re=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty;var T=(e,t)=>()=>(e&&(t=e(e=0)),t);var U=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var oe=(e,t,a,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of ne(t))!ie.call(e,r)&&r!==a&&H(e,r,{get:()=>t[r],enumerable:!(s=ae(t,r))||s.enumerable});return e};var V=(e,t,a)=>(a=e!=null?se(re(e)):{},oe(t||!e||!e.__esModule?H(a,"default",{value:e,enumerable:!0}):a,e));var m,u=T(()=>{m={collectedLocales:[]}});var f,l=T(()=>{f={version:3,routes:{none:[{src:"^(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))/$",headers:{Location:"/$1"},status:308,continue:!0},{src:"^/_next/__private/trace$",dest:"/404",status:404,continue:!0},{src:"^/404/?$",status:404,continue:!0,missing:[{type:"header",key:"x-prerender-revalidate"}]},{src:"^/500$",status:500,continue:!0},{src:"^/?$",has:[{type:"header",key:"rsc"}],dest:"/index.rsc",headers:{vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch"},continue:!0,override:!0},{src:"^/((?!.+\\.rsc).+?)(?:/)?$",has:[{type:"header",key:"rsc"}],dest:"/$1.rsc",headers:{vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch"},continue:!0,override:!0}],filesystem:[{src:"^/index(\\.action|\\.rsc)$",dest:"/",continue:!0},{src:"^/_next/data/(.*)$",dest:"/_next/data/$1",check:!0},{src:"^/\\.prefetch\\.rsc$",dest:"/__index.prefetch.rsc",check:!0},{src:"^/(.+)/\\.prefetch\\.rsc$",dest:"/$1.prefetch.rsc",check:!0},{src:"^/\\.rsc$",dest:"/index.rsc",check:!0},{src:"^/(.+)/\\.rsc$",dest:"/$1.rsc",check:!0}],miss:[{src:"^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media)/.+$",status:404,check:!0,dest:"$0"}],rewrite:[{src:"^/_next/data/(.*)$",dest:"/404",status:404},{src:"^/blog/(?<nxtPslug>[^/]+?)(?:\\.rsc)(?:/)?$",dest:"/blog/[slug].rsc?nxtPslug=$nxtPslug"},{src:"^/blog/(?<nxtPslug>[^/]+?)(?:/)?$",dest:"/blog/[slug]?nxtPslug=$nxtPslug"},{src:"^/explore/(?<nxtPid>[^/]+?)(?:\\.rsc)(?:/)?$",dest:"/explore/[id].rsc?nxtPid=$nxtPid"},{src:"^/explore/(?<nxtPid>[^/]+?)(?:/)?$",dest:"/explore/[id]?nxtPid=$nxtPid"}],resource:[{src:"^/.*$",status:404}],hit:[{src:"^/_next/static/(?:[^/]+/pages|pages|chunks|runtime|css|image|media|ZC8C56yoZweirYYdzbxx6)/.+$",headers:{"cache-control":"public,max-age=31536000,immutable"},continue:!0,important:!0},{src:"^/index(?:/)?$",headers:{"x-matched-path":"/"},continue:!0,important:!0},{src:"^/((?!index$).*?)(?:/)?$",headers:{"x-matched-path":"/$1"},continue:!0,important:!0}],error:[{src:"^/.*$",dest:"/404",status:404},{src:"^/.*$",dest:"/500",status:500}]},images:{domains:[],sizes:[640,750,828,1080,1200,1920,2048,3840,16,32,48,64,96,128,256,384],remotePatterns:[],minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment"},overrides:{"404.html":{path:"404",contentType:"text/html; charset=utf-8"},"500.html":{path:"500",contentType:"text/html; charset=utf-8"},"_app.rsc.json":{path:"_app.rsc",contentType:"application/json"},"_error.rsc.json":{path:"_error.rsc",contentType:"application/json"},"_document.rsc.json":{path:"_document.rsc",contentType:"application/json"},"404.rsc.json":{path:"404.rsc",contentType:"application/json"}},framework:{version:"15.0.4"},crons:[]}});var g,d=T(()=>{g={"/404.html":{type:"override",path:"/404.html",headers:{"content-type":"text/html; charset=utf-8"}},"/404.rsc.json":{type:"override",path:"/404.rsc.json",headers:{"content-type":"application/json"}},"/500.html":{type:"override",path:"/500.html",headers:{"content-type":"text/html; charset=utf-8"}},"/_app.rsc.json":{type:"override",path:"/_app.rsc.json",headers:{"content-type":"application/json"}},"/_document.rsc.json":{type:"override",path:"/_document.rsc.json",headers:{"content-type":"application/json"}},"/_error.rsc.json":{type:"override",path:"/_error.rsc.json",headers:{"content-type":"application/json"}},"/_next/static/ZC8C56yoZweirYYdzbxx6/_buildManifest.js":{type:"static"},"/_next/static/ZC8C56yoZweirYYdzbxx6/_ssgManifest.js":{type:"static"},"/_next/static/chunks/148-5e83588e0b3ba85a.js":{type:"static"},"/_next/static/chunks/251-9338c29ab1b4a136.js":{type:"static"},"/_next/static/chunks/271-6d3082a3c69b0f45.js":{type:"static"},"/_next/static/chunks/33-05ad307677fa2360.js":{type:"static"},"/_next/static/chunks/4bd1b696-75616ebd7b1b5ef4.js":{type:"static"},"/_next/static/chunks/517-935f66231d225241.js":{type:"static"},"/_next/static/chunks/572-cade0a24680b88f4.js":{type:"static"},"/_next/static/chunks/798-426aff22460191a7.js":{type:"static"},"/_next/static/chunks/839-bd93aea2a170fab6.js":{type:"static"},"/_next/static/chunks/app/_not-found/page-b151cc7da5d1c6a8.js":{type:"static"},"/_next/static/chunks/app/blog/[slug]/page-5791cc25322303fd.js":{type:"static"},"/_next/static/chunks/app/blog/page-151716c57333568f.js":{type:"static"},"/_next/static/chunks/app/calculators/balance-transfer-calculator/page-a0bfa242a0b87578.js":{type:"static"},"/_next/static/chunks/app/calculators/interest-calculator/page-1b83ec7c18d33378.js":{type:"static"},"/_next/static/chunks/app/calculators/page-94f1c38d1cd41e25.js":{type:"static"},"/_next/static/chunks/app/calculators/rewards-calculator/page-afc53033f152b69f.js":{type:"static"},"/_next/static/chunks/app/card-wizard/page-33a9332adc8b3ed3.js":{type:"static"},"/_next/static/chunks/app/explore/[id]/page-1e0d478e311d1c25.js":{type:"static"},"/_next/static/chunks/app/explore/page-116f7f9caff83585.js":{type:"static"},"/_next/static/chunks/app/layout-4738c225603a7df0.js":{type:"static"},"/_next/static/chunks/app/page-9220816020c99d7a.js":{type:"static"},"/_next/static/chunks/framework-6b27c2b7aa38af2d.js":{type:"static"},"/_next/static/chunks/main-app-d846d10759526607.js":{type:"static"},"/_next/static/chunks/main-ece3bdca9ae83228.js":{type:"static"},"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js":{type:"static"},"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js":{type:"static"},"/_next/static/chunks/polyfills-42372ed130431b0a.js":{type:"static"},"/_next/static/chunks/webpack-9edee2920554d0a5.js":{type:"static"},"/_next/static/css/3a3cb4645bcde84e.css":{type:"static"},"/file.svg":{type:"static"},"/globe.svg":{type:"static"},"/next.svg":{type:"static"},"/vercel.svg":{type:"static"},"/window.svg":{type:"static"},"/blog/[slug]":{type:"function",entrypoint:"__next-on-pages-dist__/functions/blog/[slug].func.js"},"/blog/[slug].rsc":{type:"function",entrypoint:"__next-on-pages-dist__/functions/blog/[slug].func.js"},"/blog":{type:"function",entrypoint:"__next-on-pages-dist__/functions/blog.func.js"},"/blog.rsc":{type:"function",entrypoint:"__next-on-pages-dist__/functions/blog.func.js"},"/calculators/balance-transfer-calculator":{type:"function",entrypoint:"__next-on-pages-dist__/functions/calculators/balance-transfer-calculator.func.js"},"/calculators/balance-transfer-calculator.rsc":{type:"function",entrypoint:"__next-on-pages-dist__/functions/calculators/balance-transfer-calculator.func.js"},"/calculators/interest-calculator":{type:"function",entrypoint:"__next-on-pages-dist__/functions/calculators/interest-calculator.func.js"},"/calculators/interest-calculator.rsc":{type:"function",entrypoint:"__next-on-pages-dist__/functions/calculators/interest-calculator.func.js"},"/calculators/rewards-calculator":{type:"function",entrypoint:"__next-on-pages-dist__/functions/calculators/rewards-calculator.func.js"},"/calculators/rewards-calculator.rsc":{type:"function",entrypoint:"__next-on-pages-dist__/functions/calculators/rewards-calculator.func.js"},"/calculators":{type:"function",entrypoint:"__next-on-pages-dist__/functions/calculators.func.js"},"/calculators.rsc":{type:"function",entrypoint:"__next-on-pages-dist__/functions/calculators.func.js"},"/card-wizard":{type:"function",entrypoint:"__next-on-pages-dist__/functions/card-wizard.func.js"},"/card-wizard.rsc":{type:"function",entrypoint:"__next-on-pages-dist__/functions/card-wizard.func.js"},"/explore/[id]":{type:"function",entrypoint:"__next-on-pages-dist__/functions/explore/[id].func.js"},"/explore/[id].rsc":{type:"function",entrypoint:"__next-on-pages-dist__/functions/explore/[id].func.js"},"/explore":{type:"function",entrypoint:"__next-on-pages-dist__/functions/explore.func.js"},"/explore.rsc":{type:"function",entrypoint:"__next-on-pages-dist__/functions/explore.func.js"},"/index":{type:"function",entrypoint:"__next-on-pages-dist__/functions/index.func.js"},"/":{type:"function",entrypoint:"__next-on-pages-dist__/functions/index.func.js"},"/index.rsc":{type:"function",entrypoint:"__next-on-pages-dist__/functions/index.func.js"},"/404":{type:"override",path:"/404.html",headers:{"content-type":"text/html; charset=utf-8"}},"/500":{type:"override",path:"/500.html",headers:{"content-type":"text/html; charset=utf-8"}},"/_app.rsc":{type:"override",path:"/_app.rsc.json",headers:{"content-type":"application/json"}},"/_error.rsc":{type:"override",path:"/_error.rsc.json",headers:{"content-type":"application/json"}},"/_document.rsc":{type:"override",path:"/_document.rsc.json",headers:{"content-type":"application/json"}},"/404.rsc":{type:"override",path:"/404.rsc.json",headers:{"content-type":"application/json"}},"/favicon.ico":{type:"override",path:"/favicon.ico",headers:{"cache-control":"public, max-age=0, must-revalidate","content-type":"image/x-icon","x-next-cache-tags":"_N_T_/layout,_N_T_/favicon.ico/layout,_N_T_/favicon.ico/route,_N_T_/favicon.ico",vary:"RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch"}}}});var F=U((ze,$)=>{"use strict";u();l();d();function w(e,t){e=String(e||"").trim();let a=e,s,r="";if(/^[^a-zA-Z\\\s]/.test(e)){s=e[0];let o=e.lastIndexOf(s);r+=e.substring(o+1),e=e.substring(1,o)}let n=0;return e=le(e,o=>{if(/^\(\?[P<']/.test(o)){let c=/^\(\?P?[<']([^>']+)[>']/.exec(o);if(!c)throw new Error(`Failed to extract named captures from ${JSON.stringify(o)}`);let p=o.substring(c[0].length,o.length-1);return t&&(t[n]=c[1]),n++,`(${p})`}return o.substring(0,3)==="(?:"||n++,o}),e=e.replace(/\[:([^:]+):\]/g,(o,c)=>w.characterClasses[c]||o),new w.PCRE(e,r,a,r,s)}function le(e,t){let a=0,s=0,r=!1;for(let i=0;i<e.length;i++){let n=e[i];if(r){r=!1;continue}switch(n){case"(":s===0&&(a=i),s++;break;case")":if(s>0&&(s--,s===0)){let o=i+1,c=a===0?"":e.substring(0,a),p=e.substring(o),h=String(t(e.substring(a,o)));e=c+h+p,i=a}break;case"\\":r=!0;break;default:break}}return e}(function(e){class t extends RegExp{constructor(s,r,i,n,o){super(s,r),this.pcrePattern=i,this.pcreFlags=n,this.delimiter=o}}e.PCRE=t,e.characterClasses={alnum:"[A-Za-z0-9]",word:"[A-Za-z0-9_]",alpha:"[A-Za-z]",blank:"[ \\t]",cntrl:"[\\x00-\\x1F\\x7F]",digit:"\\d",graph:"[\\x21-\\x7E]",lower:"[a-z]",print:"[\\x20-\\x7E]",punct:"[\\]\\[!\"#$%&'()*+,./:;<=>?@\\\\^_`{|}~-]",space:"\\s",upper:"[A-Z]",xdigit:"[A-Fa-f0-9]"}})(w||(w={}));w.prototype=w.PCRE.prototype;$.exports=w});var Y=U(O=>{"use strict";u();l();d();O.parse=be;O.serialize=ve;var Re=Object.prototype.toString,E=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function be(e,t){if(typeof e!="string")throw new TypeError("argument str must be a string");for(var a={},s=t||{},r=s.decode||Pe,i=0;i<e.length;){var n=e.indexOf("=",i);if(n===-1)break;var o=e.indexOf(";",i);if(o===-1)o=e.length;else if(o<n){i=e.lastIndexOf(";",n-1)+1;continue}var c=e.slice(i,n).trim();if(a[c]===void 0){var p=e.slice(n+1,o).trim();p.charCodeAt(0)===34&&(p=p.slice(1,-1)),a[c]=ke(p,r)}i=o+1}return a}function ve(e,t,a){var s=a||{},r=s.encode||Se;if(typeof r!="function")throw new TypeError("option encode is invalid");if(!E.test(e))throw new TypeError("argument name is invalid");var i=r(t);if(i&&!E.test(i))throw new TypeError("argument val is invalid");var n=e+"="+i;if(s.maxAge!=null){var o=s.maxAge-0;if(isNaN(o)||!isFinite(o))throw new TypeError("option maxAge is invalid");n+="; Max-Age="+Math.floor(o)}if(s.domain){if(!E.test(s.domain))throw new TypeError("option domain is invalid");n+="; Domain="+s.domain}if(s.path){if(!E.test(s.path))throw new TypeError("option path is invalid");n+="; Path="+s.path}if(s.expires){var c=s.expires;if(!Ce(c)||isNaN(c.valueOf()))throw new TypeError("option expires is invalid");n+="; Expires="+c.toUTCString()}if(s.httpOnly&&(n+="; HttpOnly"),s.secure&&(n+="; Secure"),s.priority){var p=typeof s.priority=="string"?s.priority.toLowerCase():s.priority;switch(p){case"low":n+="; Priority=Low";break;case"medium":n+="; Priority=Medium";break;case"high":n+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(s.sameSite){var h=typeof s.sameSite=="string"?s.sameSite.toLowerCase():s.sameSite;switch(h){case!0:n+="; SameSite=Strict";break;case"lax":n+="; SameSite=Lax";break;case"strict":n+="; SameSite=Strict";break;case"none":n+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return n}function Pe(e){return e.indexOf("%")!==-1?decodeURIComponent(e):e}function Se(e){return encodeURIComponent(e)}function Ce(e){return Re.call(e)==="[object Date]"||e instanceof Date}function ke(e,t){try{return t(e)}catch{return e}}});u();l();d();u();l();d();u();l();d();var b="INTERNAL_SUSPENSE_CACHE_HOSTNAME.local";u();l();d();u();l();d();u();l();d();u();l();d();var q=V(F());function C(e,t,a){if(t==null)return{match:null,captureGroupKeys:[]};let s=a?"":"i",r=[];return{match:(0,q.default)(`%${e}%${s}`,r).exec(t),captureGroupKeys:r}}function v(e,t,a,{namedOnly:s}={}){return e.replace(/\$([a-zA-Z0-9_]+)/g,(r,i)=>{let n=a.indexOf(i);return s&&n===-1?r:(n===-1?t[parseInt(i,10)]:t[n+1])||""})}function I(e,{url:t,cookies:a,headers:s,routeDest:r}){switch(e.type){case"host":return{valid:t.hostname===e.value};case"header":return e.value!==void 0?j(e.value,s.get(e.key),r):{valid:s.has(e.key)};case"cookie":{let i=a[e.key];return i&&e.value!==void 0?j(e.value,i,r):{valid:i!==void 0}}case"query":return e.value!==void 0?j(e.value,t.searchParams.get(e.key),r):{valid:t.searchParams.has(e.key)}}}function j(e,t,a){let{match:s,captureGroupKeys:r}=C(e,t);return a&&s&&r.length?{valid:!!s,newRouteDest:v(a,s,r,{namedOnly:!0})}:{valid:!!s}}u();l();d();function D(e){let t=new Headers(e.headers);return e.cf&&(t.set("x-vercel-ip-city",encodeURIComponent(e.cf.city)),t.set("x-vercel-ip-country",e.cf.country),t.set("x-vercel-ip-country-region",e.cf.regionCode),t.set("x-vercel-ip-latitude",e.cf.latitude),t.set("x-vercel-ip-longitude",e.cf.longitude)),t.set("x-vercel-sc-host",b),new Request(e,{headers:t})}u();l();d();function _(e,t,a){let s=t instanceof Headers?t.entries():Object.entries(t);for(let[r,i]of s){let n=r.toLowerCase(),o=a?.match?v(i,a.match,a.captureGroupKeys):i;n==="set-cookie"?e.append(n,o):e.set(n,o)}}function P(e){return/^https?:\/\//.test(e)}function x(e,t){for(let[a,s]of t.entries()){let r=/^nxtP(.+)$/.exec(a),i=/^nxtI(.+)$/.exec(a);r?.[1]?(e.set(a,s),e.set(r[1],s)):i?.[1]?e.set(i[1],s.replace(/(\(\.+\))+/,"")):(!e.has(a)||!!s&&!e.getAll(a).includes(s))&&e.append(a,s)}}function L(e,t){let a=new URL(t,e.url);return x(a.searchParams,new URL(e.url).searchParams),a.pathname=a.pathname.replace(/\/index.html$/,"/").replace(/\.html$/,""),new Request(a,e)}function S(e){return new Response(e.body,e)}function N(e){return e.split(",").map(t=>{let[a,s]=t.split(";"),r=parseFloat((s??"q=1").replace(/q *= */gi,""));return[a.trim(),isNaN(r)?1:r]}).sort((t,a)=>a[1]-t[1]).map(([t])=>t==="*"||t===""?[]:t).flat()}u();l();d();function A(e){switch(e){case"none":return"filesystem";case"filesystem":return"rewrite";case"rewrite":return"resource";case"resource":return"miss";default:return"miss"}}async function k(e,{request:t,assetsFetcher:a,ctx:s},{path:r,searchParams:i}){let n,o=new URL(t.url);x(o.searchParams,i);let c=new Request(o,t);try{switch(e?.type){case"function":case"middleware":{let p=await import(e.entrypoint);try{n=await p.default(c,s)}catch(h){let y=h;throw y.name==="TypeError"&&y.message.endsWith("default is not a function")?new Error(`An error occurred while evaluating the target edge function (${e.entrypoint})`):h}break}case"override":{n=S(await a.fetch(L(c,e.path??r))),e.headers&&_(n.headers,e.headers);break}case"static":{n=await a.fetch(L(c,r));break}default:n=new Response("Not Found",{status:404})}}catch(p){return console.error(p),new Response("Internal Server Error",{status:500})}return S(n)}function B(e,t){let a="^//?(?:",s=")/(.*)$";return!e.startsWith(a)||!e.endsWith(s)?!1:e.slice(a.length,-s.length).split("|").every(i=>t.has(i))}u();l();d();function de(e,{protocol:t,hostname:a,port:s,pathname:r}){return!(t&&e.protocol.replace(/:$/,"")!==t||!new RegExp(a).test(e.hostname)||s&&!new RegExp(s).test(e.port)||r&&!new RegExp(r).test(e.pathname))}function pe(e,t){if(e.method!=="GET")return;let{origin:a,searchParams:s}=new URL(e.url),r=s.get("url"),i=Number.parseInt(s.get("w")??"",10),n=Number.parseInt(s.get("q")??"75",10);if(!r||Number.isNaN(i)||Number.isNaN(n)||!t?.sizes?.includes(i)||n<0||n>100)return;let o=new URL(r,a);if(o.pathname.endsWith(".svg")&&!t?.dangerouslyAllowSVG)return;let c=r.startsWith("//"),p=r.startsWith("/")&&!c;if(!p&&!t?.domains?.includes(o.hostname)&&!t?.remotePatterns?.find(R=>de(o,R)))return;let h=e.headers.get("Accept")??"",y=t?.formats?.find(R=>h.includes(R))?.replace("image/","");return{isRelative:p,imageUrl:o,options:{width:i,quality:n,format:y}}}function he(e,t,a){let s=new Headers;if(a?.contentSecurityPolicy&&s.set("Content-Security-Policy",a.contentSecurityPolicy),a?.contentDispositionType){let i=t.pathname.split("/").pop(),n=i?`${a.contentDispositionType}; filename="${i}"`:a.contentDispositionType;s.set("Content-Disposition",n)}e.headers.has("Cache-Control")||s.set("Cache-Control",`public, max-age=${a?.minimumCacheTTL??60}`);let r=S(e);return _(r.headers,s),r}async function z(e,{buildOutput:t,assetsFetcher:a,imagesConfig:s}){let r=pe(e,s);if(!r)return new Response("Invalid image resizing request",{status:400});let{isRelative:i,imageUrl:n}=r,c=await(i&&n.pathname in t?a.fetch.bind(a):fetch)(n);return he(c,n,s)}u();l();d();u();l();d();var fe="x-vercel-cache-tags",ge="x-next-cache-soft-tags",me=Symbol.for("__cloudflare-request-context__");async function K(e){let t=`https://${b}/v1/suspense-cache/`;if(!e.url.startsWith(t))return null;try{let a=new URL(e.url),s=await ye();if(a.pathname==="/v1/suspense-cache/revalidate"){let i=a.searchParams.get("tags")?.split(",")??[];for(let n of i)await s.revalidateTag(n);return new Response(null,{status:200})}let r=a.pathname.replace("/v1/suspense-cache/","");if(!r.length)return new Response("Invalid cache key",{status:400});switch(e.method){case"GET":{let i=W(e,ge),n=await s.get(r,{softTags:i});return n?new Response(JSON.stringify(n.value),{status:200,headers:{"Content-Type":"application/json","x-vercel-cache-state":"fresh",age:`${(Date.now()-(n.lastModified??Date.now()))/1e3}`}}):new Response(null,{status:404})}case"POST":{let i=globalThis[me],n=async()=>{let o=await e.json();o.data.tags===void 0&&(o.tags??=W(e,fe)??[]),await s.set(r,o)};return i?i.ctx.waitUntil(n()):await n(),new Response(null,{status:200})}default:return new Response(null,{status:405})}}catch(a){return console.error(a),new Response("Error handling cache request",{status:500})}}async function ye(){return process.env.__NEXT_ON_PAGES__KV_SUSPENSE_CACHE?G("kv"):G("cache-api")}async function G(e){let t=await import(`./__next-on-pages-dist__/cache/${e}.js`);return new t.default}function W(e,t){return e.headers.get(t)?.split(",")?.filter(Boolean)}function J(){globalThis[Z]||(_e(),globalThis[Z]=!0)}function _e(){let e=globalThis.fetch;globalThis.fetch=async(...t)=>{let a=new Request(...t),s=await xe(a);return s||(s=await K(a),s)?s:(we(a),e(a))}}async function xe(e){if(e.url.startsWith("blob:"))try{let a=(await import(`./__next-on-pages-dist__/assets/${new URL(e.url).pathname}.bin`)).default,s={async arrayBuffer(){return a},get body(){return new ReadableStream({start(r){let i=Buffer.from(a);r.enqueue(i),r.close()}})},async text(){return Buffer.from(a).toString()},async json(){let r=Buffer.from(a);return JSON.stringify(r.toString())},async blob(){return new Blob(a)}};return s.clone=()=>({...s}),s}catch{}return null}function we(e){e.headers.has("user-agent")||e.headers.set("user-agent","Next.js Middleware")}var Z=Symbol.for("next-on-pages fetch patch");u();l();d();var X=V(Y());var M=class{constructor(t,a,s,r,i){this.routes=t;this.output=a;this.reqCtx=s;this.url=new URL(s.request.url),this.cookies=(0,X.parse)(s.request.headers.get("cookie")||""),this.path=this.url.pathname||"/",this.headers={normal:new Headers,important:new Headers},this.searchParams=new URLSearchParams,x(this.searchParams,this.url.searchParams),this.checkPhaseCounter=0,this.middlewareInvoked=[],this.wildcardMatch=i?.find(n=>n.domain===this.url.hostname),this.locales=new Set(r.collectedLocales)}url;cookies;wildcardMatch;path;status;headers;searchParams;body;checkPhaseCounter;middlewareInvoked;locales;checkRouteMatch(t,{checkStatus:a,checkIntercept:s}){let r=C(t.src,this.path,t.caseSensitive);if(!r.match||t.methods&&!t.methods.map(n=>n.toUpperCase()).includes(this.reqCtx.request.method.toUpperCase()))return;let i={url:this.url,cookies:this.cookies,headers:this.reqCtx.request.headers,routeDest:t.dest};if(!t.has?.find(n=>{let o=I(n,i);return o.newRouteDest&&(i.routeDest=o.newRouteDest),!o.valid})&&!t.missing?.find(n=>I(n,i).valid)&&!(a&&t.status!==this.status)){if(s&&t.dest){let n=/\/(\(\.+\))+/,o=n.test(t.dest),c=n.test(this.path);if(o&&!c)return}return{routeMatch:r,routeDest:i.routeDest}}}processMiddlewareResp(t){let a="x-middleware-override-headers",s=t.headers.get(a);if(s){let c=new Set(s.split(",").map(p=>p.trim()));for(let p of c.keys()){let h=`x-middleware-request-${p}`,y=t.headers.get(h);this.reqCtx.request.headers.get(p)!==y&&(y?this.reqCtx.request.headers.set(p,y):this.reqCtx.request.headers.delete(p)),t.headers.delete(h)}t.headers.delete(a)}let r="x-middleware-rewrite",i=t.headers.get(r);if(i){let c=new URL(i,this.url),p=this.url.hostname!==c.hostname;this.path=p?`${c}`:c.pathname,x(this.searchParams,c.searchParams),t.headers.delete(r)}let n="x-middleware-next";t.headers.get(n)?t.headers.delete(n):!i&&!t.headers.has("location")?(this.body=t.body,this.status=t.status):t.headers.has("location")&&t.status>=300&&t.status<400&&(this.status=t.status),_(this.reqCtx.request.headers,t.headers),_(this.headers.normal,t.headers),this.headers.middlewareLocation=t.headers.get("location")}async runRouteMiddleware(t){if(!t)return!0;let a=t&&this.output[t];if(!a||a.type!=="middleware")return this.status=500,!1;let s=await k(a,this.reqCtx,{path:this.path,searchParams:this.searchParams,headers:this.headers,status:this.status});return this.middlewareInvoked.push(t),s.status===500?(this.status=s.status,!1):(this.processMiddlewareResp(s),!0)}applyRouteOverrides(t){!t.override||(this.status=void 0,this.headers.normal=new Headers,this.headers.important=new Headers)}applyRouteHeaders(t,a,s){!t.headers||(_(this.headers.normal,t.headers,{match:a,captureGroupKeys:s}),t.important&&_(this.headers.important,t.headers,{match:a,captureGroupKeys:s}))}applyRouteStatus(t){!t.status||(this.status=t.status)}applyRouteDest(t,a,s){if(!t.dest)return this.path;let r=this.path,i=t.dest;this.wildcardMatch&&/\$wildcard/.test(i)&&(i=i.replace(/\$wildcard/g,this.wildcardMatch.value)),this.path=v(i,a,s);let n=/\/index\.rsc$/i.test(this.path),o=/^\/(?:index)?$/i.test(r),c=/^\/__index\.prefetch\.rsc$/i.test(r);n&&!o&&!c&&(this.path=r);let p=/\.rsc$/i.test(this.path),h=/\.prefetch\.rsc$/i.test(this.path),y=this.path in this.output;p&&!h&&!y&&(this.path=this.path.replace(/\.rsc/i,""));let R=new URL(this.path,this.url);return x(this.searchParams,R.searchParams),P(this.path)||(this.path=R.pathname),r}applyLocaleRedirects(t){if(!t.locale?.redirect||!/^\^(.)*$/.test(t.src)&&t.src!==this.path||this.headers.normal.has("location"))return;let{locale:{redirect:s,cookie:r}}=t,i=r&&this.cookies[r],n=N(i??""),o=N(this.reqCtx.request.headers.get("accept-language")??""),h=[...n,...o].map(y=>s[y]).filter(Boolean)[0];if(h){!this.path.startsWith(h)&&(this.headers.normal.set("location",h),this.status=307);return}}getLocaleFriendlyRoute(t,a){return!this.locales||a!=="miss"?t:B(t.src,this.locales)?{...t,src:t.src.replace(/\/\(\.\*\)\$$/,"(?:/(.*))?$")}:t}async checkRoute(t,a){let s=this.getLocaleFriendlyRoute(a,t),{routeMatch:r,routeDest:i}=this.checkRouteMatch(s,{checkStatus:t==="error",checkIntercept:t==="rewrite"})??{},n={...s,dest:i};if(!r?.match||n.middlewarePath&&this.middlewareInvoked.includes(n.middlewarePath))return"skip";let{match:o,captureGroupKeys:c}=r;if(this.applyRouteOverrides(n),this.applyLocaleRedirects(n),!await this.runRouteMiddleware(n.middlewarePath))return"error";if(this.body!==void 0||this.headers.middlewareLocation)return"done";this.applyRouteHeaders(n,o,c),this.applyRouteStatus(n);let h=this.applyRouteDest(n,o,c);if(n.check&&!P(this.path))if(h===this.path){if(t!=="miss")return this.checkPhase(A(t));this.status=404}else if(t==="miss"){if(!(this.path in this.output)&&!(this.path.replace(/\/$/,"")in this.output))return this.checkPhase("filesystem");this.status===404&&(this.status=void 0)}else return this.checkPhase("none");return!n.continue||n.status&&n.status>=300&&n.status<=399?"done":"next"}async checkPhase(t){if(this.checkPhaseCounter++>=50)return console.error(`Routing encountered an infinite loop while checking ${this.url.pathname}`),this.status=500,"error";this.middlewareInvoked=[];let a=!0;for(let i of this.routes[t]){let n=await this.checkRoute(t,i);if(n==="error")return"error";if(n==="done"){a=!1;break}}if(t==="hit"||P(this.path)||this.headers.normal.has("location")||!!this.body)return"done";if(t==="none")for(let i of this.locales){let n=new RegExp(`/${i}(/.*)`),c=this.path.match(n)?.[1];if(c&&c in this.output){this.path=c;break}}let s=this.path in this.output;if(!s&&this.path.endsWith("/")){let i=this.path.replace(/\/$/,"");s=i in this.output,s&&(this.path=i)}if(t==="miss"&&!s){let i=!this.status||this.status<400;this.status=i?404:this.status}let r="miss";return s||t==="miss"||t==="error"?r="hit":a&&(r=A(t)),this.checkPhase(r)}async run(t="none"){this.checkPhaseCounter=0;let a=await this.checkPhase(t);return this.headers.normal.has("location")&&(!this.status||this.status<300||this.status>=400)&&(this.status=307),a}};async function Q(e,t,a,s){let r=new M(t.routes,a,e,s,t.wildcard),i=await ee(r);return Ee(e,i,a)}async function ee(e,t="none",a=!1){return await e.run(t)==="error"||!a&&e.status&&e.status>=400?ee(e,"error",!0):{path:e.path,status:e.status,headers:e.headers,searchParams:e.searchParams,body:e.body}}async function Ee(e,{path:t="/404",status:a,headers:s,searchParams:r,body:i},n){let o=s.normal.get("location");if(o){if(o!==s.middlewareLocation){let h=[...r.keys()].length?`?${r.toString()}`:"";s.normal.set("location",`${o??"/"}${h}`)}return new Response(null,{status:a,headers:s.normal})}let c;if(i!==void 0)c=new Response(i,{status:a});else if(P(t)){let h=new URL(t);x(h.searchParams,r),c=await fetch(h,e.request)}else c=await k(n[t],e,{path:t,status:a,headers:s,searchParams:r});let p=s.normal;return _(p,c.headers),_(p,s.important),c=new Response(c.body,{...c,status:a||c.status,headers:p}),c}u();l();d();function te(){globalThis.__nextOnPagesRoutesIsolation??={_map:new Map,getProxyFor:Me}}function Me(e){let t=globalThis.__nextOnPagesRoutesIsolation._map.get(e);if(t)return t;let a=Te();return globalThis.__nextOnPagesRoutesIsolation._map.set(e,a),a}function Te(){let e=new Map;return new Proxy(globalThis,{get:(t,a)=>e.has(a)?e.get(a):Reflect.get(globalThis,a),set:(t,a,s)=>je.has(a)?Reflect.set(globalThis,a,s):(e.set(a,s),!0)})}var je=new Set(["_nextOriginalFetch","fetch","__incrementalCache"]);var gs={async fetch(e,t,a){te(),J();let s=await __ALSes_PROMISE__;if(!s){let n=new URL(e.url),o=await t.ASSETS.fetch(`${n.protocol}//${n.host}/cdn-cgi/errors/no-nodejs_compat.html`),c=o.ok?o.body:"Error: Could not access built-in Node.js modules. Please make sure that your Cloudflare Pages project has the 'nodejs_compat' compatibility flag set.";return new Response(c,{status:503})}let{envAsyncLocalStorage:r,requestContextAsyncLocalStorage:i}=s;return r.run({...t,NODE_ENV:"production",SUSPENSE_CACHE_URL:b},async()=>i.run({env:t,ctx:a,cf:e.cf},async()=>{if(new URL(e.url).pathname.startsWith("/_next/image"))return z(e,{buildOutput:g,assetsFetcher:t.ASSETS,imagesConfig:f.images});let o=D(e);return Q({request:o,ctx:a,assetsFetcher:t.ASSETS},f,g,m)}))}};export{gs as default};
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */