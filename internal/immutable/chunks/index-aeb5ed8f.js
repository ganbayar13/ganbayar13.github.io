function N(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(T)}function I(t){return typeof t=="function"}function st(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ut(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function W(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return N;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ft(t,n,e){t.$$.on_destroy.push(G(n,e))}function at(t,n,e,i){if(t){const c=L(t,n,e,i);return t[0](c)}}function L(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function _t(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const u=[],l=Math.max(n.dirty.length,c.length);for(let o=0;o<l;o+=1)u[o]=n.dirty[o]|c[o];return u}return n.dirty|c}return n.dirty}function dt(t,n,e,i,c,u){if(c){const l=L(n,e,i,u);t.p(l,c)}}function ht(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function mt(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}let w=!1;function J(){w=!0}function K(){w=!1}function Q(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const s=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=s?c+1:Q(1,c,y=>n[e[y]].claim_order,s))-1;i[r]=e[a]+1;const f=a+1;e[f]=r,c=Math.max(f,c)}const u=[],l=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(u.push(n[r-1]);o>=r;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);u.reverse(),l.sort((r,s)=>r.claim_order-s.claim_order);for(let r=0,s=0;r<l.length;r++){for(;s<u.length&&l[r].claim_order>=u[s].claim_order;)s++;const a=s<u.length?u[s]:null;t.insertBefore(l[r],a)}}function U(t,n){if(w){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function pt(t,n,e){w&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function gt(){return j(" ")}function bt(){return j("")}function xt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Z(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $t(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:Z(t,i,n[i])}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,n,e,i,c=!1){nt(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function B(t,n,e,i){return P(t,c=>c.nodeName===n,c=>{const u=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];e[o.name]||u.push(o.name)}u.forEach(l=>c.removeAttribute(l))},()=>i(n))}function wt(t,n,e){return B(t,n,e,X)}function vt(t,n,e){return B(t,n,e,Y)}function et(t,n){return P(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function Et(t){return et(t," ")}function kt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function At(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Nt(t,n,e){t.classList[e?"add":"remove"](n)}function jt(t,n=document.body){return Array.from(n.querySelectorAll(t))}let m;function h(t){m=t}function S(){if(!m)throw new Error("Function called outside component initialization");return m}function St(t){S().$$.on_mount.push(t)}function qt(t){S().$$.after_update.push(t)}function Ct(t){S().$$.on_destroy.push(t)}function Mt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],O=[],x=[],E=[],D=Promise.resolve();let k=!1;function z(){k||(k=!0,D.then(F))}function Ot(){return z(),D}function A(t){x.push(t)}function Tt(t){E.push(t)}const v=new Set;let b=0;function F(){const t=m;do{for(;b<d.length;){const n=d[b];b++,h(n),it(n.$$)}for(h(null),d.length=0,b=0;O.length;)O.pop()();for(let n=0;n<x.length;n+=1){const e=x[n];v.has(e)||(v.add(e),e())}x.length=0}while(d.length);for(;E.length;)E.pop()();k=!1,v.clear(),h(t)}function it(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const $=new Set;let _;function Lt(){_={r:0,c:[],p:_}}function Pt(){_.r||p(_.c),_=_.p}function rt(t,n){t&&t.i&&($.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Dt(t,n){const e={},i={},c={$$scope:1};let u=t.length;for(;u--;){const l=t[u],o=n[u];if(o){for(const r in l)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[u]=o}else for(const r in l)c[r]=1}for(const l in i)l in e||(e[l]=void 0);return e}function zt(t){return typeof t=="object"&&t!==null?t:{}}function Ft(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Ht(t){t&&t.c()}function It(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:c,on_mount:u,on_destroy:l,after_update:o}=t.$$;c&&c.m(n,e),i||A(()=>{const r=u.map(T).filter(I);l?l.push(...r):p(r),t.$$.on_mount=[]}),o.forEach(A)}function lt(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(d.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Wt(t,n,e,i,c,u,l,o=[-1]){const r=m;h(t);const s=t.$$={fragment:null,ctx:null,props:u,update:N,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};l&&l(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,y,...q)=>{const C=q.length?q[0]:y;return s.ctx&&c(s.ctx[f],s.ctx[f]=C)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](C),a&&ot(t,f)),y}):[],s.update(),a=!0,p(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){J();const f=tt(n.target);s.fragment&&s.fragment.l(f),f.forEach(V)}else s.fragment&&s.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),K(),F()}h(r)}class Gt{$destroy(){lt(this,1),this.$destroy=N}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{N as A,U as B,xt as C,yt as D,Nt as E,at as F,jt as G,ut as H,dt as I,ht as J,_t as K,ft as L,Ct as M,Mt as N,m as O,H as P,$t as Q,Dt as R,Gt as S,mt as T,O as U,Ft as V,zt as W,Tt as X,Y,vt as Z,gt as a,pt as b,Et as c,Pt as d,bt as e,rt as f,Lt as g,V as h,Wt as i,qt as j,X as k,wt as l,tt as m,Z as n,St as o,At as p,j as q,et as r,st as s,Bt as t,kt as u,Ht as v,It as w,ct as x,lt as y,Ot as z};
