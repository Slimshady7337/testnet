import{w as f}from"./index.eca69ac2.js";var g;const k=((g=globalThis.__sveltekit_19uxbr1)==null?void 0:g.base)??"";var h;(h=globalThis.__sveltekit_19uxbr1)==null||h.assets;const R="sveltekit:snapshot",y="sveltekit:scroll",I="sveltekit:index",c={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(e){let t=e.baseURI;if(!t){const o=e.getElementsByTagName("base");t=o.length?o[0].href:e.URL}return t}function T(){return{x:pageXOffset,y:pageYOffset}}const d=new WeakSet,p={"preload-code":["","off","tap","hover","viewport","eager"],"preload-data":["","off","tap","hover"],keepfocus:["","off"],noscroll:["","off"],reload:["","off"],replacestate:["","off"]};function i(e,t){const o=e.getAttribute(`data-sveltekit-${t}`);return w(e,t,o),o}function w(e,t,o){o!==null&&!d.has(e)&&!p[t].includes(o)&&(console.error(`Unexpected value for ${t} — should be one of ${p[t].map(l=>JSON.stringify(l)).join(", ")}`,e),d.add(e))}const _={...c,"":c.hover};function v(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function U(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function N(e,t){let o;try{o=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const l=e instanceof SVGAElement?e.target.baseVal:e.target,r=!o||!!l||S(o,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),a=(o==null?void 0:o.origin)===location.origin&&e.hasAttribute("download");return{url:o,external:r,target:l,download:a}}function L(e){let t=null,o=null,l=null,r=null,a=null,s=null,n=e;for(;n&&n!==document.documentElement;)l===null&&(l=i(n,"preload-code")),r===null&&(r=i(n,"preload-data")),t===null&&(t=i(n,"keepfocus")),o===null&&(o=i(n,"noscroll")),a===null&&(a=i(n,"reload")),s===null&&(s=i(n,"replacestate")),n=v(n);return{preload_code:_[l??"off"],preload_data:_[r??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:o==="off"?!1:o===""?!0:null,reload:a==="off"?!1:a===""?!0:null,replace_state:s==="off"?!1:s===""?!0:null}}function b(e){const t=f(e);let o=!0;function l(){o=!0,t.update(s=>s)}function r(s){o=!1,t.set(s)}function a(s){let n;return t.subscribe(u=>{(n===void 0||o&&u!==n)&&s(n=u)})}return{notify:l,set:r,subscribe:a}}function E(){const{set:e,subscribe:t}=f(!1);async function o(){return!1}return{subscribe:t,check:o}}function S(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}let x;function P(e){x=e.client}const V={url:b({}),page:b({}),navigating:f(null),updated:E()};export{I,c as P,y as S,R as a,N as b,L as c,T as d,k as e,U as f,O as g,P as h,S as i,x as j,V as s};
