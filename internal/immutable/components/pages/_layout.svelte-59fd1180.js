import{S as O,i as U,s as K,e as ke,b as w,g as Ve,t as b,d as De,f as p,h as o,B as Ee,k as h,l as g,m,n as r,C as $e,D as f,E as xe,F as ye,G as Be,v as P,w as T,x as A,y as S,H as q,q as I,I as j,r as V,A as X,a as k,c as $,J as Ne}from"../../chunks/index-b0845087.js";function ze(n){let e,t,a,l;const s=n[5].default,i=Ee(s,n,n[4],null);return{c(){e=h("a"),t=h("span"),i&&i.c(),this.h()},l(c){e=g(c,"A",{href:!0,target:!0,class:!0});var u=m(e);t=g(u,"SPAN",{class:!0});var d=m(t);i&&i.l(d),d.forEach(o),u.forEach(o),this.h()},h(){r(t,"class","inline-flex items-center text-white"),r(e,"href",n[1]),r(e,"target","_blank"),r(e,"class",a=n[3]+" block focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 transition duration-300 ease-in-out"),$e(e,"w-full",n[2])},m(c,u){w(c,e,u),f(e,t),i&&i.m(t,null),l=!0},p(c,u){i&&i.p&&(!l||u&16)&&xe(i,s,c,c[4],l?Be(s,c[4],u,null):ye(c[4]),null),(!l||u&2)&&r(e,"href",c[1]),(!l||u&8&&a!==(a=c[3]+" block focus:ring-4 focus:outline-none font-medium rounded-lg px-5 py-2.5 transition duration-300 ease-in-out"))&&r(e,"class",a),(!l||u&12)&&$e(e,"w-full",c[2])},i(c){l||(p(i,c),l=!0)},o(c){b(i,c),l=!1},d(c){c&&o(e),i&&i.d(c)}}}function Fe(n){let e,t;const a=n[5].default,l=Ee(a,n,n[4],null);return{c(){e=h("button"),l&&l.c(),this.h()},l(s){e=g(s,"BUTTON",{type:!0});var i=m(e);l&&l.l(i),i.forEach(o),this.h()},h(){r(e,"type",n[0])},m(s,i){w(s,e,i),l&&l.m(e,null),t=!0},p(s,i){l&&l.p&&(!t||i&16)&&xe(l,a,s,s[4],t?Be(a,s[4],i,null):ye(s[4]),null),(!t||i&1)&&r(e,"type",s[0])},i(s){t||(p(l,s),t=!0)},o(s){b(l,s),t=!1},d(s){s&&o(e),l&&l.d(s)}}}function Ce(n){let e,t,a,l;const s=[Fe,ze],i=[];function c(u,d){return u[0]==="button"||u[0]==="submit"?0:1}return e=c(n),t=i[e]=s[e](n),{c(){t.c(),a=ke()},l(u){t.l(u),a=ke()},m(u,d){i[e].m(u,d),w(u,a,d),l=!0},p(u,[d]){let E=e;e=c(u),e===E?i[e].p(u,d):(Ve(),b(i[E],1,1,()=>{i[E]=null}),De(),t=i[e],t?t.p(u,d):(t=i[e]=s[e](u),t.c()),p(t,1),t.m(a.parentNode,a))},i(u){l||(p(t),l=!0)},o(u){b(t),l=!1},d(u){i[e].d(u),u&&o(a)}}}function Ge(n,e,t){let{$$slots:a={},$$scope:l}=e,{type:s="link"}=e,{link:i="#"}=e,{full:c=!1}=e,{className:u}=e;return n.$$set=d=>{"type"in d&&t(0,s=d.type),"link"in d&&t(1,i=d.link),"full"in d&&t(2,c=d.full),"className"in d&&t(3,u=d.className),"$$scope"in d&&t(4,l=d.$$scope)},[s,i,c,u,l,a]}class ie extends O{constructor(e){super(),U(this,e,Ge,Ce,K,{type:0,link:1,full:2,className:3})}}function Me(n){let e,t,a;return{c(){e=q("svg"),t=q("path"),a=I(`
	Facebook`),this.h()},l(l){e=j(l,"svg",{class:!0,"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,role:!0,xmlns:!0,viewBox:!0});var s=m(e);t=j(s,"path",{fill:!0,d:!0}),m(t).forEach(o),s.forEach(o),a=V(l,`
	Facebook`),this.h()},h(){r(t,"fill","currentColor"),r(t,"d","M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"),r(e,"class","mr-2 -ml-1 w-4 h-4"),r(e,"aria-hidden","true"),r(e,"focusable","false"),r(e,"data-prefix","fab"),r(e,"data-icon","facebook-f"),r(e,"role","img"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"viewBox","0 0 320 512")},m(l,s){w(l,e,s),f(e,t),w(l,a,s)},p:X,d(l){l&&o(e),l&&o(a)}}}function Pe(n){let e,t;return e=new ie({props:{link:n[0],full:n[1],className:"bg-facebook hover:bg-facebook/90 focus:ring-facebook/50 dark:focus:ring-facebook/55 text-center",$$slots:{default:[Me]},$$scope:{ctx:n}}}),{c(){P(e.$$.fragment)},l(a){T(e.$$.fragment,a)},m(a,l){A(e,a,l),t=!0},p(a,[l]){const s={};l&1&&(s.link=a[0]),l&2&&(s.full=a[1]),l&4&&(s.$$scope={dirty:l,ctx:a}),e.$set(s)},i(a){t||(p(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){S(e,a)}}}function Te(n,e,t){let{link:a}=e,{full:l}=e;return n.$$set=s=>{"link"in s&&t(0,a=s.link),"full"in s&&t(1,l=s.full)},[a,l]}class Ae extends O{constructor(e){super(),U(this,e,Te,Pe,K,{link:0,full:1})}}function Se(n){let e,t,a;return{c(){e=q("svg"),t=q("path"),a=I(`
	Github`),this.h()},l(l){e=j(l,"svg",{class:!0,"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,role:!0,xmlns:!0,viewBox:!0});var s=m(e);t=j(s,"path",{fill:!0,d:!0}),m(t).forEach(o),s.forEach(o),a=V(l,`
	Github`),this.h()},h(){r(t,"fill","currentColor"),r(t,"d","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"),r(e,"class","mr-2 -ml-1 w-4 h-4"),r(e,"aria-hidden","true"),r(e,"focusable","false"),r(e,"data-prefix","fab"),r(e,"data-icon","github"),r(e,"role","img"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"viewBox","0 0 496 512")},m(l,s){w(l,e,s),f(e,t),w(l,a,s)},p:X,d(l){l&&o(e),l&&o(a)}}}function qe(n){let e,t;return e=new ie({props:{link:n[0],full:n[1],className:"bg-github hover:bg-github/90 focus:ring-github/50 dark:focus:ring-github/55 text-center",$$slots:{default:[Se]},$$scope:{ctx:n}}}),{c(){P(e.$$.fragment)},l(a){T(e.$$.fragment,a)},m(a,l){A(e,a,l),t=!0},p(a,[l]){const s={};l&1&&(s.link=a[0]),l&2&&(s.full=a[1]),l&4&&(s.$$scope={dirty:l,ctx:a}),e.$set(s)},i(a){t||(p(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){S(e,a)}}}function je(n,e,t){let{link:a}=e,{full:l}=e;return n.$$set=s=>{"link"in s&&t(0,a=s.link),"full"in s&&t(1,l=s.full)},[a,l]}class He extends O{constructor(e){super(),U(this,e,je,qe,K,{link:0,full:1})}}function Je(n){let e,t,a;return{c(){e=q("svg"),t=q("path"),a=I(`
	Twitter`),this.h()},l(l){e=j(l,"svg",{class:!0,"aria-hidden":!0,focusable:!0,"data-prefix":!0,"data-icon":!0,role:!0,xmlns:!0,viewBox:!0});var s=m(e);t=j(s,"path",{fill:!0,d:!0}),m(t).forEach(o),s.forEach(o),a=V(l,`
	Twitter`),this.h()},h(){r(t,"fill","currentColor"),r(t,"d","M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"),r(e,"class","mr-2 -ml-1 w-4 h-4"),r(e,"aria-hidden","true"),r(e,"focusable","false"),r(e,"data-prefix","fab"),r(e,"data-icon","twitter"),r(e,"role","img"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"viewBox","0 0 512 512")},m(l,s){w(l,e,s),f(e,t),w(l,a,s)},p:X,d(l){l&&o(e),l&&o(a)}}}function Le(n){let e,t;return e=new ie({props:{link:n[0],full:n[1],className:"bg-twitter hover:bg-twitter/90 focus:ring-twitter/50 dark:focus:ring-twitter/55 text-center",$$slots:{default:[Je]},$$scope:{ctx:n}}}),{c(){P(e.$$.fragment)},l(a){T(e.$$.fragment,a)},m(a,l){A(e,a,l),t=!0},p(a,[l]){const s={};l&1&&(s.link=a[0]),l&2&&(s.full=a[1]),l&4&&(s.$$scope={dirty:l,ctx:a}),e.$set(s)},i(a){t||(p(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){S(e,a)}}}function Oe(n,e,t){let{link:a}=e,{full:l}=e;return n.$$set=s=>{"link"in s&&t(0,a=s.link),"full"in s&&t(1,l=s.full)},[a,l]}class Ue extends O{constructor(e){super(),U(this,e,Oe,Le,K,{link:0,full:1})}}function Ke(n){let e,t,a,l,s,i,c,u,d,E,D,H,Y,Z,N,J,ee,te,z,Q,le,F,L,ae,se,C,x,re,G,y,ne,M,B,R;return x=new He({props:{link:"https://github.com/ganbayar13",full:!0}}),y=new Ae({props:{link:"https://fb.com/ganbayar13",full:!0}}),B=new Ue({props:{link:"https://twitter.com/ganbayar13_",full:!0}}),{c(){e=h("main"),t=h("div"),a=h("div"),l=h("img"),i=k(),c=h("div"),u=h("p"),d=I("Ganbayar Batkhishig"),E=k(),D=h("div"),H=h("p"),Y=I("@ganbayar13"),Z=k(),N=h("div"),J=h("p"),ee=I("Front-end developer \u{1F913}"),te=k(),z=h("div"),Q=h("div"),le=k(),F=h("div"),L=h("p"),ae=I("Follow me on"),se=k(),C=h("div"),P(x.$$.fragment),re=k(),G=h("div"),P(y.$$.fragment),ne=k(),M=h("div"),P(B.$$.fragment),this.h()},l(v){e=g(v,"MAIN",{class:!0});var W=m(e);t=g(W,"DIV",{class:!0});var _=m(t);a=g(_,"DIV",{class:!0});var ue=m(a);l=g(ue,"IMG",{src:!0,class:!0,alt:!0}),ue.forEach(o),i=$(_),c=g(_,"DIV",{class:!0});var oe=m(c);u=g(oe,"P",{});var fe=m(u);d=V(fe,"Ganbayar Batkhishig"),fe.forEach(o),oe.forEach(o),E=$(_),D=g(_,"DIV",{class:!0});var ce=m(D);H=g(ce,"P",{});var me=m(H);Y=V(me,"@ganbayar13"),me.forEach(o),ce.forEach(o),Z=$(_),N=g(_,"DIV",{class:!0});var de=m(N);J=g(de,"P",{});var he=m(J);ee=V(he,"Front-end developer \u{1F913}"),he.forEach(o),de.forEach(o),te=$(_),z=g(_,"DIV",{class:!0});var ge=m(z);Q=g(ge,"DIV",{});var Ie=m(Q);Ie.forEach(o),ge.forEach(o),le=$(_),F=g(_,"DIV",{class:!0});var _e=m(F);L=g(_e,"P",{});var ve=m(L);ae=V(ve,"Follow me on"),ve.forEach(o),_e.forEach(o),se=$(_),C=g(_,"DIV",{class:!0});var be=m(C);T(x.$$.fragment,be),be.forEach(o),re=$(_),G=g(_,"DIV",{class:!0});var pe=m(G);T(y.$$.fragment,pe),pe.forEach(o),ne=$(_),M=g(_,"DIV",{class:!0});var we=m(M);T(B.$$.fragment,we),we.forEach(o),_.forEach(o),W.forEach(o),this.h()},h(){Ne(l.src,s="https://avatars.githubusercontent.com/u/8615067?s=128&v=4")||r(l,"src",s),r(l,"class","object-cover w-full h-full"),r(l,"alt","profile"),r(a,"class","image mx-auto rounded-full w-32 h-32 bg-gray-200 overflow-hidden"),r(c,"class","name text-gray-800 text-2xl font-medium mt-4"),r(D,"class","username text-gray-500"),r(N,"class","description text-gray-700 mt-4"),r(z,"class","w-full max-w-md space-y-8"),r(F,"class","w-full text-sm text-gray-500 mt-8"),r(C,"class","w-full mt-2"),r(G,"class","w-full mt-2"),r(M,"class","w-full mt-2"),r(t,"class","card bg-white flex flex-col items-center justify-center p-4 pt-8 shadow-xl rounded-2xl sm:w-96 w-full"),r(e,"class","main bg-gradient-to-b from-yellow-300 to-yellow-600 grid place-items-start sm:place-items-center h-screen p-5 sm:p-0")},m(v,W){w(v,e,W),f(e,t),f(t,a),f(a,l),f(t,i),f(t,c),f(c,u),f(u,d),f(t,E),f(t,D),f(D,H),f(H,Y),f(t,Z),f(t,N),f(N,J),f(J,ee),f(t,te),f(t,z),f(z,Q),f(t,le),f(t,F),f(F,L),f(L,ae),f(t,se),f(t,C),A(x,C,null),f(t,re),f(t,G),A(y,G,null),f(t,ne),f(t,M),A(B,M,null),R=!0},p:X,i(v){R||(p(x.$$.fragment,v),p(y.$$.fragment,v),p(B.$$.fragment,v),R=!0)},o(v){b(x.$$.fragment,v),b(y.$$.fragment,v),b(B.$$.fragment,v),R=!1},d(v){v&&o(e),S(x),S(y),S(B)}}}function Qe(n,e,t){return[!1]}class We extends O{constructor(e){super(),U(this,e,Qe,Ke,K,{ssr:0})}get ssr(){return this.$$.ctx[0]}}export{We as default};
