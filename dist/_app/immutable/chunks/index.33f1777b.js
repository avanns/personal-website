function y(){}function J(t,e){for(const n in e)t[n]=e[n];return t}function L(t){return t()}function k(){return Object.create(null)}function b(t){t.forEach(L)}function T(t){return typeof t=="function"}function dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let $;function _t(t,e){return $||($=document.createElement("a")),$.href=e,t===$.href}function K(t){return Object.keys(t).length===0}function Q(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ht(t,e,n){t.$$.on_destroy.push(Q(e,n))}function mt(t,e,n,i){if(t){const r=O(t,e,n,i);return t[0](r)}}function O(t,e,n,i){return t[1]&&i?J(n.ctx.slice(),t[1](i(e))):n.ctx}function pt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],c=Math.max(e.dirty.length,r.length);for(let s=0;s<c;s+=1)u[s]=e.dirty[s]|r[s];return u}return e.dirty|r}return e.dirty}function yt(t,e,n,i,r,u){if(r){const c=O(e,n,i,u);t.p(c,r)}}function gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function xt(t){return t??""}function bt(t){return t&&T(t.destroy)?t.destroy:y}const P=typeof window<"u";let wt=P?()=>window.performance.now():()=>Date.now(),z=P?t=>requestAnimationFrame(t):y;const m=new Set;function B(t){m.forEach(e=>{e.c(t)||(m.delete(e),e.f())}),m.size!==0&&z(B)}function $t(t){let e;return m.size===0&&z(B),{promise:new Promise(n=>{m.add(e={c:t,f:n})}),abort(){m.delete(e)}}}let v=!1;function U(){v=!0}function V(){v=!1}function X(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const a=e[l];a.claim_order!==void 0&&o.push(a)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,a=(r>0&&e[n[r]].claim_order<=l?r+1:X(1,r,w=>e[n[w]].claim_order,l))-1;i[o]=n[a]+1;const f=a+1;n[f]=o,r=Math.max(f,r)}const u=[],c=[];let s=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);s>=o;s--)c.push(e[s]);s--}for(;s>=0;s--)c.push(e[s]);u.reverse(),c.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<c.length;o++){for(;l<u.length&&c[o].claim_order>=u[l].claim_order;)l++;const a=l<u.length?u[l]:null;t.insertBefore(c[o],a)}}function Z(t,e){if(v){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Et(t,e,n){v&&!n?Z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function vt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function nt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function Nt(){return j(" ")}function At(){return j("")}function St(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Tt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function it(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function H(t,e,n,i,r=!1){rt(t);const u=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const s=t[c];if(e(s)){const o=n(s);return o===void 0?t.splice(c,1):t[c]=o,r||(t.claim_info.last_index=c),s}}for(let c=t.claim_info.last_index-1;c>=0;c--){const s=t[c];if(e(s)){const o=n(s);return o===void 0?t.splice(c,1):t[c]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function F(t,e,n,i){return H(t,r=>r.nodeName===e,r=>{const u=[];for(let c=0;c<r.attributes.length;c++){const s=r.attributes[c];n[s.name]||u.push(s.name)}u.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Ct(t,e,n){return F(t,e,n,et)}function Dt(t,e,n){return F(t,e,n,nt)}function ct(t,e){return H(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>j(e),!0)}function kt(t){return ct(t," ")}function Mt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function qt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Lt(t,e,n){t.classList[n?"add":"remove"](e)}function Ot(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Pt(t,e){return new t(e)}let x;function g(t){x=t}function R(){if(!x)throw new Error("Function called outside component initialization");return x}function zt(t){R().$$.on_mount.push(t)}function Bt(t){R().$$.after_update.push(t)}const h=[],M=[];let p=[];const q=[],W=Promise.resolve();let A=!1;function G(){A||(A=!0,W.then(I))}function Ht(){return G(),W}function S(t){p.push(t)}const N=new Set;let _=0;function I(){if(_!==0)return;const t=x;do{try{for(;_<h.length;){const e=h[_];_++,g(e),ot(e.$$)}}catch(e){throw h.length=0,_=0,e}for(g(null),h.length=0,_=0;M.length;)M.pop()();for(let e=0;e<p.length;e+=1){const n=p[e];N.has(n)||(N.add(n),n())}p.length=0}while(h.length);for(;q.length;)q.pop()();A=!1,N.clear(),g(t)}function ot(t){if(t.fragment!==null){t.update(),b(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function lt(t){const e=[],n=[];p.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),p=e}const E=new Set;let d;function Ft(){d={r:0,c:[],p:d}}function Rt(){d.r||b(d.c),d=d.p}function st(t,e){t&&t.i&&(E.delete(t),t.i(e))}function Wt(t,e,n,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Gt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function It(t){t&&t.c()}function Jt(t,e){t&&t.l(e)}function ut(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||S(()=>{const c=t.$$.on_mount.map(L).filter(T);t.$$.on_destroy?t.$$.on_destroy.push(...c):b(c),t.$$.on_mount=[]}),u.forEach(S)}function ft(t,e){const n=t.$$;n.fragment!==null&&(lt(n.after_update),b(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function at(t,e){t.$$.dirty[0]===-1&&(h.push(t),G(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Kt(t,e,n,i,r,u,c,s=[-1]){const o=x;g(t);const l=t.$$={fragment:null,ctx:[],props:u,update:y,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:k(),dirty:s,skip_bound:!1,root:e.target||o.$$.root};c&&c(l.root);let a=!1;if(l.ctx=n?n(t,e.props||{},(f,w,...C)=>{const D=C.length?C[0]:w;return l.ctx&&r(l.ctx[f],l.ctx[f]=D)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](D),a&&at(t,f)),w}):[],l.update(),a=!0,b(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){U();const f=it(e.target);l.fragment&&l.fragment.l(f),f.forEach(tt)}else l.fragment&&l.fragment.c();e.intro&&st(t.$$.fragment),ut(t,e.target,e.anchor,e.customElement),V(),I()}g(o)}class Qt{$destroy(){ft(this,1),this.$destroy=y}$on(e,n){if(!T(n))return y;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!K(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ut as A,ft as B,nt as C,Dt as D,_t as E,Z as F,y as G,ht as H,mt as I,yt as J,gt as K,pt as L,wt as M,$t as N,St as O,b as P,Ot as Q,Lt as R,Qt as S,bt as T,vt as U,Gt as V,T as W,Tt as X,xt as Y,Nt as a,Et as b,kt as c,Wt as d,At as e,Rt as f,st as g,tt as h,Kt as i,Bt as j,et as k,Ct as l,it as m,jt as n,zt as o,qt as p,j as q,ct as r,dt as s,Ht as t,Mt as u,Ft as v,M as w,Pt as x,It as y,Jt as z};
