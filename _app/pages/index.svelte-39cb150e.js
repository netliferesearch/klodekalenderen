import{S,i as U,s as A,e as y,t as T,k as C,c as E,a as w,g as j,d as v,n as N,b as m,f as H,H as g,h as R,J,K,L as P,M as Q,N as z,l as F,O as q,x as L,r as G,u as V,w as W,P as ee,Q as te,R as se,T as le,j as ae,m as ne,o as ie,p as oe,q as re,v as ce,U as fe,V as ue,B as de}from"../chunks/vendor-9f63616d.js";function X(t){let e,l,i,d,a=t[6]&&_e(t);return{c(){e=y("div"),l=y("h2"),i=T(t[0]),d=C(),a&&a.c(),this.h()},l(s){e=E(s,"DIV",{class:!0});var c=w(e);l=E(c,"H2",{class:!0});var o=w(l);i=j(o,t[0]),o.forEach(v),d=N(c),a&&a.l(c),c.forEach(v),this.h()},h(){m(l,"class","svelte-1glt8dv"),m(e,"class","front svelte-1glt8dv")},m(s,c){H(s,e,c),g(e,l),g(l,i),g(e,d),a&&a.m(e,null)},p(s,c){c&1&&R(i,s[0]),s[6]&&a.p(s,c)},d(s){s&&v(e),a&&a.d()}}}function _e(t){let e;return{c(){e=T(t[1])},l(l){e=j(l,t[1])},m(l,i){H(l,e,i)},p(l,i){i&2&&R(e,l[1])},d(l){l&&v(e)}}}function Y(t){let e,l,i,d,a,s,c,o,f,n,u,r,_,D,k,h,M;return{c(){e=y("article"),l=y("header"),i=y("h1"),d=T("Luke "),a=T(t[0]),s=T(": "),c=T(t[1]),o=C(),f=y("button"),n=T("\uE009"),u=C(),r=y("div"),this.h()},l(b){e=E(b,"ARTICLE",{class:!0});var p=w(e);l=E(p,"HEADER",{class:!0});var B=w(l);i=E(B,"H1",{class:!0});var I=w(i);d=j(I,"Luke "),a=j(I,t[0]),s=j(I,": "),c=j(I,t[1]),I.forEach(v),o=N(B),f=E(B,"BUTTON",{class:!0});var O=w(f);n=j(O,"\uE009"),O.forEach(v),B.forEach(v),u=N(p),r=E(p,"DIV",{class:!0});var x=w(r);x.forEach(v),p.forEach(v),this.h()},h(){m(i,"class",""),m(f,"class","close svelte-1glt8dv"),m(l,"class","header svelte-1glt8dv"),m(r,"class","content svelte-1glt8dv"),m(e,"class","back svelte-1glt8dv")},m(b,p){H(b,e,p),g(e,l),g(l,i),g(i,d),g(i,a),g(i,s),g(i,c),g(l,o),g(l,f),g(f,n),g(e,u),g(e,r),r.innerHTML=t[2],k=!0,h||(M=J(f,"click",K(t[8])),h=!0)},p(b,p){t=b,(!k||p&1)&&R(a,t[0]),(!k||p&2)&&R(c,t[1]),(!k||p&4)&&(r.innerHTML=t[2])},i(b){k||(P(()=>{D&&D.end(1),_=Q(e,t[5],{key:t[0]}),_.start()}),k=!0)},o(b){_&&_.invalidate(),D=z(e,t[4],{key:t[0]}),k=!1},d(b){b&&v(e),b&&D&&D.end(),h=!1,M()}}}function he(t){let e,l,i,d,a,s,c,o,f,n=!t[3]&&X(t),u=t[3]==t[0]&&Y(t);return{c(){e=y("button"),n&&n.c(),a=C(),u&&u.c(),s=F(),this.h()},l(r){e=E(r,"BUTTON",{class:!0});var _=w(e);n&&n.l(_),_.forEach(v),a=N(r),u&&u.l(r),s=F(),this.h()},h(){m(e,"class",l="day day-"+t[0]+" svelte-1glt8dv"),q(e,"openable",t[6]),q(e,"today",t[7])},m(r,_){H(r,e,_),n&&n.m(e,null),H(r,a,_),u&&u.m(r,_),H(r,s,_),c=!0,o||(f=J(e,"click",K(t[11])),o=!0)},p(r,[_]){t=r,t[3]?n&&(n.d(1),n=null):n?n.p(t,_):(n=X(t),n.c(),n.m(e,null)),(!c||_&1&&l!==(l="day day-"+t[0]+" svelte-1glt8dv"))&&m(e,"class",l),_&65&&q(e,"openable",t[6]),_&129&&q(e,"today",t[7]),t[3]==t[0]?u?(u.p(t,_),_&9&&L(u,1)):(u=Y(t),u.c(),L(u,1),u.m(s.parentNode,s)):u&&(G(),V(u,1,1,()=>{u=null}),W())},i(r){c||(P(()=>{d&&d.end(1),i=Q(e,t[5],{key:t[0]}),i.start()}),L(u),c=!0)},o(r){i&&i.invalidate(),d=z(e,t[4],{key:t[0]}),V(u),c=!1},d(r){r&&v(e),n&&n.d(),r&&d&&d.end(),r&&v(a),u&&u.d(r),r&&v(s),o=!1,f()}}}function ve(){document.body.scrollIntoView()}function ge(t,e,l){const i=ee(),[d,a]=te({duration:200,fallback:se});let{date:s}=e,{day:c}=e,{title:o}=e,{content:f}=e,{selected:n=null}=e,u=c<s,r=c===s;function _(){i("click",{id:null})}function D(h){s>=h&&(i("click",{id:h}),ve())}const k=()=>D(c);return t.$$set=h=>{"date"in h&&l(10,s=h.date),"day"in h&&l(0,c=h.day),"title"in h&&l(1,o=h.title),"content"in h&&l(2,f=h.content),"selected"in h&&l(3,n=h.selected)},[c,o,f,n,d,a,u,r,_,D,s,k]}class be extends S{constructor(e){super();U(this,e,ge,he,A,{date:10,day:0,title:1,content:2,selected:3})}}const pe=()=>{const t=le("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session}},me={subscribe(t){return pe().page.subscribe(t)}};function Z(t,e,l){const i=t.slice();return i[9]=e[l],i}function $(t){let e,l;const i=[{date:t[2]},t[9],{selected:t[1]}];let d={};for(let a=0;a<i.length;a+=1)d=de(d,i[a]);return e=new be({props:d}),e.$on("click",t[4]),{c(){ae(e.$$.fragment)},l(a){ne(e.$$.fragment,a)},m(a,s){ie(e,a,s),l=!0},p(a,s){const c=s&7?oe(i,[s&4&&{date:a[2]},s&1&&re(a[9]),s&2&&{selected:a[1]}]):{};e.$set(c)},i(a){l||(L(e.$$.fragment,a),l=!0)},o(a){V(e.$$.fragment,a),l=!1},d(a){ce(e,a)}}}function ke(t){let e,l,i,d,a=t[0],s=[];for(let o=0;o<a.length;o+=1)s[o]=$(Z(t,a,o));const c=o=>V(s[o],1,1,()=>{s[o]=null});return{c(){e=y("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){e=E(o,"DIV",{class:!0});var f=w(e);for(let n=0;n<s.length;n+=1)s[n].l(f);f.forEach(v),this.h()},h(){m(e,"class","calendar-grid svelte-c1wj1y")},m(o,f){H(o,e,f);for(let n=0;n<s.length;n+=1)s[n].m(e,null);l=!0,i||(d=J(window,"keydown",t[3]),i=!0)},p(o,[f]){if(f&23){a=o[0];let n;for(n=0;n<a.length;n+=1){const u=Z(o,a,n);s[n]?(s[n].p(u,f),L(s[n],1)):(s[n]=$(u),s[n].c(),L(s[n],1),s[n].m(e,null))}for(G(),n=a.length;n<s.length;n+=1)c(n);W()}},i(o){if(!l){for(let f=0;f<a.length;f+=1)L(s[f]);l=!0}},o(o){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)V(s[f]);l=!1},d(o){o&&v(e),fe(s,o),i=!1,d()}}}const we=async({fetch:t})=>({props:{days:await(await t("/data/days.json")).json()}});function ye(t,e,l){let i;ue(t,me,r=>l(5,i=r));let{days:d}=e;const a=i.query.get("backstagepass");let s=["cathrine","eivind","svale"].includes(a),c=null,f=(s?new Date(2021,11,24):new Date).getDate();function n(r){r.key==="Escape"&&l(1,c=null)}function u(r){l(1,c=r.detail.id)}return t.$$set=r=>{"days"in r&&l(0,d=r.days)},[d,c,f,n,u]}class De extends S{constructor(e){super();U(this,e,ye,ke,A,{days:0})}}export{De as default,we as load};
