if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,n)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=n(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-78503f86"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.1203b218.js",revision:"0597bc831e7f41d4d149f50910c3779b"},{url:"assets/index.9d6f4aa8.css",revision:"1fdd1582828be8c2c9b0a9201a079816"},{url:"assets/showSuraContent.9442c580.css",revision:"bb5d3965b5a4732b8858e85d059d9ef8"},{url:"assets/vendor.741b06f3.js",revision:"3bab07be31a8679c1d7d0cfbfa98e8ac"},{url:"index.html",revision:"9f21165840bfacf963e45fed3d378f83"},{url:"favicon.ico",revision:"a13a591c5a1445e9190cec5f21e2d131"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"pwa-192x192.png",revision:"18a19236c475cb63de5a085a43fb8951"},{url:"pwa-512x512.png",revision:"88cb000e6bbbde46d72065122a341bec"},{url:"manifest.webmanifest",revision:"dc66600cdaedeca201b5575f5ecc1bd2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
