function y(){}const B=t=>t;function D(t,e){for(const n in e)t[n]=e[n];return t}function V(t){return t()}function X(){return Object.create(null)}function w(t){t.forEach(V)}function A(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function bt(t){return Object.keys(t).length===0}function xt(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Wt(t,e,n){t.$$.on_destroy.push(xt(e,n))}function Jt(t,e,n,i){if(t){const s=Y(t,e,n,i);return t[0](s)}}function Y(t,e,n,i){return t[1]&&i?D(n.ctx.slice(),t[1](i(e))):n.ctx}function Kt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],c=Math.max(e.dirty.length,s.length);for(let o=0;o<c;o+=1)u[o]=e.dirty[o]|s[o];return u}return e.dirty|s}return e.dirty}function Qt(t,e,n,i,s,u){if(s){const c=Y(e,n,i,u);t.p(c,s)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const Z=typeof window!="undefined";let tt=Z?()=>window.performance.now():()=>Date.now(),z=Z?t=>requestAnimationFrame(t):y;const k=new Set;function et(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&z(et)}function nt(t){let e;return k.size===0&&z(et),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let N=!1;function $t(){N=!0}function wt(){N=!1}function kt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function vt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&r.push(f)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const l=e[r].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:kt(1,s,_=>e[n[_]].claim_order,l))-1;i[r]=n[f]+1;const a=f+1;n[a]=r,s=Math.max(a,s)}const u=[],c=[];let o=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(u.push(e[r-1]);o>=r;o--)c.push(e[o]);o--}for(;o>=0;o--)c.push(e[o]);u.reverse(),c.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<c.length;r++){for(;l<u.length&&c[r].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(c[r],f)}}function Et(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ct(t){const e=I("style");return St(it(t),e),e}function St(t,e){Et(t.head||t,e)}function Ot(t,e){if(N){for(vt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){t.insertBefore(e,n||null)}function At(t,e,n){N&&!n?Ot(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function T(t){t.parentNode.removeChild(t)}function Vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function I(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function Xt(){return F(" ")}function Yt(){return F("")}function Zt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function te(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function ee(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Nt(t){return Array.from(t.childNodes)}function st(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function rt(t,e,n,i,s=!1){st(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s||(t.claim_info.last_index=c),o}}for(let c=t.claim_info.last_index-1;c>=0;c--){const o=t[c];if(e(o)){const r=n(o);return r===void 0?t.splice(c,1):t[c]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function Tt(t,e,n,i){return rt(t,s=>s.nodeName===e,s=>{const u=[];for(let c=0;c<s.attributes.length;c++){const o=s.attributes[c];n[o.name]||u.push(o.name)}u.forEach(c=>s.removeAttribute(c))},()=>i(e))}function ne(t,e,n){return Tt(t,e,n,I)}function Mt(t,e){return rt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function ie(t){return Mt(t," ")}function ct(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function se(t){const e=ct(t,"HTML_TAG_START",0),n=ct(t,"HTML_TAG_END",e);if(e===n)return new lt;st(t);const i=t.splice(e,n+1);T(i[0]),T(i[i.length-1]);const s=i.slice(1,i.length-1);for(const u of s)u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new lt(s)}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ce(t,e,n){t.classList[n?"add":"remove"](e)}function ot(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}class Rt{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.e=I(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)jt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(T)}}class lt extends Rt{constructor(e){super();this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}}const G=new Set;let M=0;function Ht(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ut(t,e,n,i,s,u,c,o=0){const r=16.666/i;let l=`{
`;for(let p=0;p<=1;p+=r){const x=e+(n-e)*u(p);l+=p*100+`%{${c(x,1-x)}}
`}const f=l+`100% {${c(n,1-n)}}
}`,a=`__svelte_${Ht(f)}_${o}`,_=it(t);G.add(_);const d=_.__svelte_stylesheet||(_.__svelte_stylesheet=Ct(t).sheet),h=_.__svelte_rules||(_.__svelte_rules={});h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${s}ms 1 both`,M+=1,a}function W(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),M-=s,M||Lt())}function Lt(){z(()=>{M||(G.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),G.clear())})}let R;function H(t){R=t}function C(){if(!R)throw new Error("Function called outside component initialization");return R}function oe(t){C().$$.on_mount.push(t)}function le(t){C().$$.after_update.push(t)}function ue(){const t=C();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=ot(e,n);i.slice().forEach(u=>{u.call(t,s)})}}}function ae(t,e){C().$$.context.set(t,e)}function fe(t){return C().$$.context.get(t)}const S=[],at=[],L=[],ft=[],Pt=Promise.resolve();let J=!1;function qt(){J||(J=!0,Pt.then(_t))}function O(t){L.push(t)}let K=!1;const Q=new Set;function _t(){if(!K){K=!0;do{for(let t=0;t<S.length;t+=1){const e=S[t];H(e),Bt(e.$$)}for(H(null),S.length=0;at.length;)at.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];Q.has(e)||(Q.add(e),e())}L.length=0}while(S.length);for(;ft.length;)ft.pop()();J=!1,K=!1,Q.clear()}}function Bt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}let j;function dt(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function P(t,e,n){t.dispatchEvent(ot(`${e?"intro":"outro"}${n}`))}const q=new Set;let g;function _e(){g={r:0,c:[],p:g}}function de(){g.r||w(g.c),g=g.p}function Dt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function he(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),g.c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const ht={duration:0};function me(t,e,n){let i=e(t,n),s=!1,u,c,o=0;function r(){u&&W(t,u)}function l(){const{delay:a=0,duration:_=300,easing:d=B,tick:h=y,css:m}=i||ht;m&&(u=ut(t,0,1,_,a,d,m,o++)),h(0,1);const p=tt()+a,x=p+_;c&&c.abort(),s=!0,O(()=>P(t,!0,"start")),c=nt(E=>{if(s){if(E>=x)return h(1,0),P(t,!0,"end"),r(),s=!1;if(E>=p){const $=d((E-p)/_);h($,1-$)}}return s})}let f=!1;return{start(){f||(f=!0,W(t),A(i)?(i=i(),dt().then(l)):l())},invalidate(){f=!1},end(){s&&(r(),s=!1)}}}function pe(t,e,n){let i=e(t,n),s=!0,u;const c=g;c.r+=1;function o(){const{delay:r=0,duration:l=300,easing:f=B,tick:a=y,css:_}=i||ht;_&&(u=ut(t,1,0,l,r,f,_));const d=tt()+r,h=d+l;O(()=>P(t,!1,"start")),nt(m=>{if(s){if(m>=h)return a(0,1),P(t,!1,"end"),--c.r||w(c.c),!1;if(m>=d){const p=f((m-d)/l);a(1-p,p)}}return s})}return A(i)?dt().then(()=>{i=i(),o()}):o(),{end(r){r&&i.tick&&i.tick(1,0),s&&(u&&W(t,u),s=!1)}}}function ye(t,e){const n={},i={},s={$$scope:1};let u=t.length;for(;u--;){const c=t[u],o=e[u];if(o){for(const r in c)r in o||(i[r]=1);for(const r in o)s[r]||(n[r]=o[r],s[r]=1);t[u]=o}else for(const r in c)s[r]=1}for(const c in i)c in n||(n[c]=void 0);return n}function ge(t){return typeof t=="object"&&t!==null?t:{}}function be(t){t&&t.c()}function xe(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:s,on_mount:u,on_destroy:c,after_update:o}=t.$$;s&&s.m(e,n),i||O(()=>{const r=u.map(V).filter(A);c?c.push(...r):w(r),t.$$.on_mount=[]}),o.forEach(O)}function It(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&(S.push(t),qt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $e(t,e,n,i,s,u,c,o=[-1]){const r=R;H(t);const l=t.$$={fragment:null,ctx:null,props:u,update:y,not_equal:s,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:X(),dirty:o,skip_bound:!1,root:e.target||r.$$.root};c&&c(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return l.ctx&&s(l.ctx[a],l.ctx[a]=h)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](h),f&&Ft(t,a)),_}):[],l.update(),f=!0,w(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){$t();const a=Nt(e.target);l.fragment&&l.fragment.l(a),a.forEach(T)}else l.fragment&&l.fragment.c();e.intro&&Dt(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),wt(),_t()}H(r)}class we{$destroy(){It(this,1),this.$destroy=y}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const v=[];function ke(t,e=y){let n;const i=new Set;function s(o){if(gt(t,o)&&(t=o,n)){const r=!v.length;for(const l of i)l[1](),v.push(l,t);if(r){for(let l=0;l<v.length;l+=2)v[l][0](v[l+1]);v.length=0}}}function u(o){s(o(t))}function c(o,r=y){const l=[o,r];return i.add(l),i.size===1&&(n=e(s)||y),o(t),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:s,update:u,subscribe:c}}function ve(t){const e=1.70158;return t*t*((e+1)*t-e)}function mt(t){const e=t-1;return e*e*e+1}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Gt(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Ee(t,{delay:e=0,duration:n=400,easing:i=B}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:u=>`opacity: ${u*s}`}}function Ce(t,{delay:e=0,duration:n=400,easing:i=mt,start:s=0,opacity:u=0}={}){const c=getComputedStyle(t),o=+c.opacity,r=c.transform==="none"?"":c.transform,l=1-s,f=o*(1-u);return{delay:e,duration:n,easing:i,css:(a,_)=>`
			transform: ${r} scale(${1-l*_});
			opacity: ${o-f*_}
		`}}function Se(t){var{fallback:e}=t,n=Gt(t,["fallback"]);const i=new Map,s=new Map;function u(o,r,l){const{delay:f=0,duration:a=b=>Math.sqrt(b)*30,easing:_=mt}=D(D({},n),l),d=r.getBoundingClientRect(),h=o.left-d.left,m=o.top-d.top,p=o.width/d.width,x=o.height/d.height,E=Math.sqrt(h*h+m*m),$=getComputedStyle(r),pt=$.transform==="none"?"":$.transform,yt=+$.opacity;return{delay:f,duration:A(a)?a(E):a,easing:_,css:(b,U)=>`
				opacity: ${b*yt};
				transform-origin: top left;
				transform: ${pt} translate(${U*h}px,${U*m}px) scale(${b+(1-b)*p}, ${b+(1-b)*x});
			`}}function c(o,r,l){return(f,a)=>(o.set(a.key,{rect:f.getBoundingClientRect()}),()=>{if(r.has(a.key)){const{rect:_}=r.get(a.key);return r.delete(a.key),u(_,f,a)}return o.delete(a.key),e&&e(f,a,l)})}return[c(s,i,!1),c(i,s,!0)]}export{Wt as $,oe as A,D as B,ke as C,Jt as D,Qt as E,Ut as F,Kt as G,Ot as H,y as I,Zt as J,O as K,me as L,pe as M,w as N,Vt as O,mt as P,Ee as Q,ve as R,we as S,lt as T,se as U,te as V,ce as W,ue as X,Se as Y,Ce as Z,fe as _,Nt as a,ee as b,ne as c,T as d,I as e,At as f,Mt as g,re as h,$e as i,be as j,Xt as k,Yt as l,xe as m,ie as n,zt as o,ye as p,ge as q,_e as r,gt as s,F as t,he as u,It as v,de as w,Dt as x,ae as y,le as z};
