import{s as he,n as ne,c as Pe,f as Xl,r as Yl,o as Zl}from"../chunks/scheduler.u1q_wa78.js";import{S as de,i as pe,e as n,t as H,s as h,c as o,a as i,b as I,d as a,f as d,o as Q,g as te,h as t,j as C,z as ce,A as Bl,D as tl,B as el,C as ll,E as xl,u as $e,v as Le,w as Me,n as be,l as we,x as Te,H as re,F as ae,y as er}from"../chunks/index.BJNmhSBK.js";import{t as He,e as Oe,a as tr}from"../chunks/index.AQdAu215.js";function lr(r){let e,s,l=r[0]("header.title")+"",f,E,c,$=r[0]("header.description")+"",_,w,p,M=r[0]("header.index")+"",D,y,v,m,L,k=r[0]("calculator.title")+"",g,b,q,B,R=r[0]("formula.title")+"",N,K,W,X,S=r[0]("result.title")+"",Y,Z,F,T,j=r[0]("error.title")+"",U;return{c(){e=n("header"),s=n("h1"),f=H(l),E=h(),c=n("p"),_=H($),w=h(),p=n("h2"),D=H(M),y=h(),v=n("ol"),m=n("li"),L=n("a"),g=H(k),b=h(),q=n("li"),B=n("a"),N=H(R),K=h(),W=n("li"),X=n("a"),Y=H(S),Z=h(),F=n("li"),T=n("a"),U=H(j),this.h()},l(P){e=o(P,"HEADER",{});var z=i(e);s=o(z,"H1",{});var le=i(s);f=I(le,l),le.forEach(a),E=d(z),c=o(z,"P",{id:!0});var x=i(c);_=I(x,$),x.forEach(a),w=d(z),p=o(z,"H2",{});var ee=i(p);D=I(ee,M),ee.forEach(a),y=d(z),v=o(z,"OL",{});var V=i(v);m=o(V,"LI",{});var A=i(m);L=o(A,"A",{href:!0});var O=i(L);g=I(O,k),O.forEach(a),A.forEach(a),b=d(V),q=o(V,"LI",{});var G=i(q);B=o(G,"A",{href:!0});var se=i(B);N=I(se,R),se.forEach(a),G.forEach(a),K=d(V),W=o(V,"LI",{});var ie=i(W);X=o(ie,"A",{href:!0});var oe=i(X);Y=I(oe,S),oe.forEach(a),ie.forEach(a),Z=d(V),F=o(V,"LI",{});var ue=i(F);T=o(ue,"A",{href:!0});var me=i(T);U=I(me,j),me.forEach(a),ue.forEach(a),V.forEach(a),z.forEach(a),this.h()},h(){Q(c,"id","pageDescription"),Q(L,"href","#secCalculator"),Q(B,"href","#secFormula"),Q(X,"href","#secResult"),Q(T,"href","#secError")},m(P,z){te(P,e,z),t(e,s),t(s,f),t(e,E),t(e,c),t(c,_),t(e,w),t(e,p),t(p,D),t(e,y),t(e,v),t(v,m),t(m,L),t(L,g),t(v,b),t(v,q),t(q,B),t(B,N),t(v,K),t(v,W),t(W,X),t(X,Y),t(v,Z),t(v,F),t(F,T),t(T,U)},p(P,[z]){z&1&&l!==(l=P[0]("header.title")+"")&&C(f,l),z&1&&$!==($=P[0]("header.description")+"")&&C(_,$),z&1&&M!==(M=P[0]("header.index")+"")&&C(D,M),z&1&&k!==(k=P[0]("calculator.title")+"")&&C(g,k),z&1&&R!==(R=P[0]("formula.title")+"")&&C(N,R),z&1&&S!==(S=P[0]("result.title")+"")&&C(Y,S),z&1&&j!==(j=P[0]("error.title")+"")&&C(U,j)},i:ne,o:ne,d(P){P&&a(e)}}}function rr(r,e,s){let l;return Pe(r,He,f=>s(0,l=f)),[l]}class ar extends de{constructor(e){super(),pe(this,e,rr,lr,he,{})}}async function zl(){const e="/page/goim-karkeis-abaesik",s=`${e}/wasm/calculator_wasm_bg.wasm`,f=await import(`${e}/wasm/calculator_wasm.js`),c=await(await fetch(s)).arrayBuffer();return await f.default(c),f}function Vl(r,e,s){const l=r.slice();return l[12]=e[s],l}function Wl(r){let e,s=r[12]+"",l;return{c(){e=n("option"),l=H(s),this.h()},l(f){e=o(f,"OPTION",{});var E=i(e);l=I(E,s),E.forEach(a),this.h()},h(){e.__value=r[12],tl(e,e.__value)},m(f,E){te(f,e,E),t(e,l)},p:ne,d(f){f&&a(e)}}}function nr(r){let e,s,l=r[3]("calculator.title")+"",f,E,c,$=r[3]("calculator.using.title")+"",_,w,p,M=r[3]("calculator.using.description")+"",D,y,v,m=r[3]("calculator.errorLevel")+"",L,k,g,b,q,B=r[3]("calculator.label")+"",R,N,K,W,X,S,Y="=",Z,F,T=r[3]("calculator.result")+"",j,U,P,z,le,x,ee=Oe(r[4]),V=[];for(let A=0;A<ee.length;A+=1)V[A]=Wl(Vl(r,ee,A));return{c(){e=n("section"),s=n("h2"),f=H(l),E=h(),c=n("h3"),_=H($),w=h(),p=n("p"),D=H(M),y=h(),v=n("p"),L=H(m),k=H(`:
		`),g=n("select");for(let A=0;A<V.length;A+=1)V[A].c();b=h(),q=n("label"),R=H(B),N=h(),K=n("div"),W=n("input"),X=h(),S=n("button"),S.textContent=Y,Z=h(),F=n("p"),j=H(T),U=h(),P=n("div"),z=H(r[1]),this.h()},l(A){e=o(A,"SECTION",{id:!0});var O=i(e);s=o(O,"H2",{});var G=i(s);f=I(G,l),G.forEach(a),E=d(O),c=o(O,"H3",{});var se=i(c);_=I(se,$),se.forEach(a),w=d(O),p=o(O,"P",{});var ie=i(p);D=I(ie,M),ie.forEach(a),y=d(O),v=o(O,"P",{});var oe=i(v);L=I(oe,m),k=I(oe,`:
		`),g=o(oe,"SELECT",{class:!0});var ue=i(g);for(let ge=0;ge<V.length;ge+=1)V[ge].l(ue);ue.forEach(a),oe.forEach(a),b=d(O),q=o(O,"LABEL",{for:!0});var me=i(q);R=I(me,B),me.forEach(a),N=d(O),K=o(O,"DIV",{id:!0,class:!0});var fe=i(K);W=o(fe,"INPUT",{type:!0,name:!0,id:!0,class:!0}),X=d(fe),S=o(fe,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),ce(S)!=="svelte-743svk"&&(S.textContent=Y),fe.forEach(a),Z=d(O),F=o(O,"P",{});var _e=i(F);j=I(_e,T),_e.forEach(a),U=d(O),P=o(O,"DIV",{id:!0,class:!0});var ve=i(P);z=I(ve,r[1]),ve.forEach(a),O.forEach(a),this.h()},h(){Q(g,"class","svelte-qxxp1l"),r[2]===void 0&&Xl(()=>r[6].call(g)),Q(q,"for","formula"),Q(W,"type","text"),Q(W,"name","formula"),Q(W,"id","formula"),Q(W,"class","svelte-qxxp1l"),Q(S,"type","button"),Q(S,"class","svelte-qxxp1l"),Q(K,"id","inputFormula"),Q(K,"class","svelte-qxxp1l"),Q(P,"id","result"),Q(P,"class","svelte-qxxp1l"),Q(e,"id","secCalculator")},m(A,O){te(A,e,O),t(e,s),t(s,f),t(e,E),t(e,c),t(c,_),t(e,w),t(e,p),t(p,D),t(e,y),t(e,v),t(v,L),t(v,k),t(v,g);for(let G=0;G<V.length;G+=1)V[G]&&V[G].m(g,null);Bl(g,r[2],!0),t(e,b),t(e,q),t(q,R),t(e,N),t(e,K),t(K,W),tl(W,r[0]),t(K,X),t(K,S),t(e,Z),t(e,F),t(F,j),t(e,U),t(e,P),t(P,z),le||(x=[el(g,"change",r[6]),el(W,"input",r[7]),el(S,"click",r[5])],le=!0)},p(A,[O]){if(O&8&&l!==(l=A[3]("calculator.title")+"")&&C(f,l),O&8&&$!==($=A[3]("calculator.using.title")+"")&&C(_,$),O&8&&M!==(M=A[3]("calculator.using.description")+"")&&C(D,M),O&8&&m!==(m=A[3]("calculator.errorLevel")+"")&&C(L,m),O&16){ee=Oe(A[4]);let G;for(G=0;G<ee.length;G+=1){const se=Vl(A,ee,G);V[G]?V[G].p(se,O):(V[G]=Wl(se),V[G].c(),V[G].m(g,null))}for(;G<V.length;G+=1)V[G].d(1);V.length=ee.length}O&20&&Bl(g,A[2]),O&8&&B!==(B=A[3]("calculator.label")+"")&&C(R,B),O&1&&W.value!==A[0]&&tl(W,A[0]),O&8&&T!==(T=A[3]("calculator.result")+"")&&C(j,T),O&2&&C(z,A[1])},i:ne,o:ne,d(A){A&&a(e),ll(V,A),le=!1,Yl(x)}}}function or(r,e,s){let l,f;Pe(r,tr,m=>s(9,l=m)),Pe(r,He,m=>s(3,f=m));let E="",c="-",$="Tiny";const _=["Tiny","Medium","Full"];let w;const p=()=>{switch($){case"Tiny":return 1;case"Medium":return 2;case"Full":return 3;default:return 1}},M=()=>{switch(l){case"en":return 1;case"ja":return 2;default:return 1}};async function D(){w||(w=await zl()),s(1,c=w.calculate(`${E}
`,p(),M()))}Zl(async()=>{w=await zl()});function y(){$=xl(this),s(2,$),s(4,_)}function v(){E=this.value,s(0,E)}return[E,c,$,f,_,D,y,v]}class sr extends de{constructor(e){super(),pe(this,e,or,nr,he,{})}}function Gl(r,e,s){const l=r.slice();return l[2]=e[s],l}function Jl(r){let e,s,l=r[2].name+"",f,E,c,$=r[2].number?"✅":"❌",_,w,p,M=r[2].function?"✅":"❌",D,y,v,m=r[2].description+"",L,k;return{c(){e=n("tr"),s=n("td"),f=H(l),E=h(),c=n("td"),_=H($),w=h(),p=n("td"),D=H(M),y=h(),v=n("td"),L=H(m),k=h(),this.h()},l(g){e=o(g,"TR",{});var b=i(e);s=o(b,"TD",{class:!0});var q=i(s);f=I(q,l),q.forEach(a),E=d(b),c=o(b,"TD",{class:!0});var B=i(c);_=I(B,$),B.forEach(a),w=d(b),p=o(b,"TD",{class:!0});var R=i(p);D=I(R,M),R.forEach(a),y=d(b),v=o(b,"TD",{});var N=i(v);L=I(N,m),N.forEach(a),k=d(b),b.forEach(a),this.h()},h(){Q(s,"class","center"),Q(c,"class","center"),Q(p,"class","center")},m(g,b){te(g,e,b),t(e,s),t(s,f),t(e,E),t(e,c),t(c,_),t(e,w),t(e,p),t(p,D),t(e,y),t(e,v),t(v,L),t(e,k)},p(g,b){b&2&&l!==(l=g[2].name+"")&&C(f,l),b&2&&$!==($=g[2].number?"✅":"❌")&&C(_,$),b&2&&M!==(M=g[2].function?"✅":"❌")&&C(D,M),b&2&&m!==(m=g[2].description+"")&&C(L,m)},d(g){g&&a(e)}}}function ir(r){let e,s=r[0]("errorLevel.title")+"",l,f,E,c=r[0]("errorLevel.description")+"",$,_,w,p,M,D=r[0]("errorLevel.caption")+"",y,v,m,L,k=r[0]("errorLevel.header.name")+"",g,b,q=r[0]("errorLevel.header.number")+"",B,R,N=r[0]("errorLevel.header.function")+"",K,W,X=r[0]("errorLevel.header.message")+"",S,Y,Z=Oe(r[1]),F=[];for(let T=0;T<Z.length;T+=1)F[T]=Jl(Gl(r,Z,T));return{c(){e=n("h3"),l=H(s),f=h(),E=n("p"),$=H(c),_=h(),w=n("div"),p=n("table"),M=n("caption"),y=H(D),v=h(),m=n("tr"),L=n("th"),g=H(k),b=n("th"),B=H(q),R=n("th"),K=H(N),W=n("th"),S=H(X),Y=h();for(let T=0;T<F.length;T+=1)F[T].c()},l(T){e=o(T,"H3",{});var j=i(e);l=I(j,s),j.forEach(a),f=d(T),E=o(T,"P",{});var U=i(E);$=I(U,c),U.forEach(a),_=d(T),w=o(T,"DIV",{});var P=i(w);p=o(P,"TABLE",{});var z=i(p);M=o(z,"CAPTION",{});var le=i(M);y=I(le,D),le.forEach(a),v=d(z),m=o(z,"TR",{});var x=i(m);L=o(x,"TH",{});var ee=i(L);g=I(ee,k),ee.forEach(a),b=o(x,"TH",{});var V=i(b);B=I(V,q),V.forEach(a),R=o(x,"TH",{});var A=i(R);K=I(A,N),A.forEach(a),W=o(x,"TH",{});var O=i(W);S=I(O,X),O.forEach(a),x.forEach(a),Y=d(z);for(let G=0;G<F.length;G+=1)F[G].l(z);z.forEach(a),P.forEach(a)},m(T,j){te(T,e,j),t(e,l),te(T,f,j),te(T,E,j),t(E,$),te(T,_,j),te(T,w,j),t(w,p),t(p,M),t(M,y),t(p,v),t(p,m),t(m,L),t(L,g),t(m,b),t(b,B),t(m,R),t(R,K),t(m,W),t(W,S),t(p,Y);for(let U=0;U<F.length;U+=1)F[U]&&F[U].m(p,null)},p(T,[j]){if(j&1&&s!==(s=T[0]("errorLevel.title")+"")&&C(l,s),j&1&&c!==(c=T[0]("errorLevel.description")+"")&&C($,c),j&1&&D!==(D=T[0]("errorLevel.caption")+"")&&C(y,D),j&1&&k!==(k=T[0]("errorLevel.header.name")+"")&&C(g,k),j&1&&q!==(q=T[0]("errorLevel.header.number")+"")&&C(B,q),j&1&&N!==(N=T[0]("errorLevel.header.function")+"")&&C(K,N),j&1&&X!==(X=T[0]("errorLevel.header.message")+"")&&C(S,X),j&2){Z=Oe(T[1]);let U;for(U=0;U<Z.length;U+=1){const P=Gl(T,Z,U);F[U]?F[U].p(P,j):(F[U]=Jl(P),F[U].c(),F[U].m(p,null))}for(;U<F.length;U+=1)F[U].d(1);F.length=Z.length}},i:ne,o:ne,d(T){T&&(a(e),a(f),a(E),a(_),a(w)),ll(F,T)}}}function ur(r,e,s){let l;Pe(r,He,E=>s(0,l=E));let f;return r.$$.update=()=>{r.$$.dirty&1&&s(1,f=[{name:"Tiny",number:!1,function:!1,description:l("errorLevel.message.tiny")},{name:"Medium",number:!0,function:!1,description:l("errorLevel.message.medium")},{name:"Full",number:!0,function:!0,description:l("errorLevel.message.full")}])},[l,f]}class fr extends de{constructor(e){super(),pe(this,e,ur,ir,he,{})}}function Kl(r,e,s){const l=r.slice();return l[2]=e[s],l}function Ql(r){let e,s,l=(r[2].number?r[2].number:"_")+"",f,E,c,$=r[2].type+"",_,w,p,M=r[2].tiny+"",D,y,v,m=r[2].medium+"",L,k,g,b=r[2].full+"",q,B;return{c(){e=n("tr"),s=n("td"),f=H(l),E=h(),c=n("td"),_=H($),w=h(),p=n("td"),D=H(M),y=h(),v=n("td"),L=H(m),k=h(),g=n("td"),q=H(b),B=h(),this.h()},l(R){e=o(R,"TR",{});var N=i(e);s=o(N,"TD",{class:!0});var K=i(s);f=I(K,l),K.forEach(a),E=d(N),c=o(N,"TD",{class:!0});var W=i(c);_=I(W,$),W.forEach(a),w=d(N),p=o(N,"TD",{});var X=i(p);D=I(X,M),X.forEach(a),y=d(N),v=o(N,"TD",{});var S=i(v);L=I(S,m),S.forEach(a),k=d(N),g=o(N,"TD",{});var Y=i(g);q=I(Y,b),Y.forEach(a),B=d(N),N.forEach(a),this.h()},h(){Q(s,"class","center"),Q(c,"class","center")},m(R,N){te(R,e,N),t(e,s),t(s,f),t(e,E),t(e,c),t(c,_),t(e,w),t(e,p),t(p,D),t(e,y),t(e,v),t(v,L),t(e,k),t(e,g),t(g,q),t(e,B)},p(R,N){N&2&&l!==(l=(R[2].number?R[2].number:"_")+"")&&C(f,l),N&2&&$!==($=R[2].type+"")&&C(_,$),N&2&&M!==(M=R[2].tiny+"")&&C(D,M),N&2&&m!==(m=R[2].medium+"")&&C(L,m),N&2&&b!==(b=R[2].full+"")&&C(q,b)},d(R){R&&a(e)}}}function cr(r){let e,s=r[0]("errorMessage.title")+"",l,f,E,c,$,_=r[0]("errorMessage.caption")+"",w,p,M,D="<th>Number</th> <th>Type</th> <th>Tiny</th> <th>Medium</th> <th>Full</th>",y,v=Oe(r[1]),m=[];for(let L=0;L<v.length;L+=1)m[L]=Ql(Kl(r,v,L));return{c(){e=n("h3"),l=H(s),f=h(),E=n("div"),c=n("table"),$=n("caption"),w=H(_),p=h(),M=n("tr"),M.innerHTML=D,y=h();for(let L=0;L<m.length;L+=1)m[L].c();this.h()},l(L){e=o(L,"H3",{});var k=i(e);l=I(k,s),k.forEach(a),f=d(L),E=o(L,"DIV",{class:!0});var g=i(E);c=o(g,"TABLE",{});var b=i(c);$=o(b,"CAPTION",{});var q=i($);w=I(q,_),q.forEach(a),p=d(b),M=o(b,"TR",{"data-svelte-h":!0}),ce(M)!=="svelte-xbgyaj"&&(M.innerHTML=D),y=d(b);for(let B=0;B<m.length;B+=1)m[B].l(b);b.forEach(a),g.forEach(a),this.h()},h(){Q(E,"class","tableWrapper")},m(L,k){te(L,e,k),t(e,l),te(L,f,k),te(L,E,k),t(E,c),t(c,$),t($,w),t(c,p),t(c,M),t(c,y);for(let g=0;g<m.length;g+=1)m[g]&&m[g].m(c,null)},p(L,[k]){if(k&1&&s!==(s=L[0]("errorMessage.title")+"")&&C(l,s),k&1&&_!==(_=L[0]("errorMessage.caption")+"")&&C(w,_),k&2){v=Oe(L[1]);let g;for(g=0;g<v.length;g+=1){const b=Kl(L,v,g);m[g]?m[g].p(b,k):(m[g]=Ql(b),m[g].c(),m[g].m(c,null))}for(;g<m.length;g+=1)m[g].d(1);m.length=v.length}},i:ne,o:ne,d(L){L&&(a(e),a(f),a(E)),ll(m,L)}}}function mr(r,e,s){let l;Pe(r,He,E=>s(0,l=E));let f;return r.$$.update=()=>{r.$$.dirty&1&&s(1,f=[{number:1,type:"input",tiny:l("errorMessage.tiny.1-2"),medium:l("errorMessage.medium.1"),full:l("errorMessage.full.1")},{number:2,type:"input",tiny:l("errorMessage.tiny.1-2"),medium:l("errorMessage.medium.2"),full:l("errorMessage.full.2")},{number:3,type:"syntax",tiny:l("errorMessage.tiny.3-11"),medium:l("errorMessage.medium.3-8"),full:l("errorMessage.full.3")},{number:4,type:"syntax",tiny:l("errorMessage.tiny.3-11"),medium:l("errorMessage.medium.3-8"),full:l("errorMessage.full.4")},{number:5,type:"syntax",tiny:l("errorMessage.tiny.3-11"),medium:l("errorMessage.medium.3-8"),full:l("errorMessage.full.5")},{number:6,type:"syntax",tiny:l("errorMessage.tiny.3-11"),medium:l("errorMessage.medium.3-8"),full:l("errorMessage.full.6")},{number:7,type:"syntax",tiny:l("errorMessage.tiny.3-11"),medium:l("errorMessage.medium.3-8"),full:l("errorMessage.full.7")},{number:8,type:"syntax",tiny:l("errorMessage.tiny.3-11"),medium:l("errorMessage.medium.3-8"),full:l("errorMessage.full.8")},{number:9,type:"syntax",tiny:l("errorMessage.tiny.3-11"),medium:l("errorMessage.medium.9"),full:l("errorMessage.full.9")},{number:10,type:"syntax",tiny:l("errorMessage.tiny.3-11"),medium:l("errorMessage.medium.10"),full:l("errorMessage.full.10")},{number:11,type:"syntax",tiny:l("errorMessage.tiny.3-11"),medium:l("errorMessage.medium.11"),full:l("errorMessage.full.11")},{number:12,type:"calculate",tiny:l("errorMessage.tiny.12"),medium:l("errorMessage.medium.12"),full:l("errorMessage.full.12")},{number:0,type:"calculator",tiny:l("errorMessage.tiny.0"),medium:l("errorMessage.medium.0"),full:l("errorMessage.full.0")}])},[l,f]}class hr extends de{constructor(e){super(),pe(this,e,mr,cr,he,{})}}function dr(r){let e,s,l=r[0]("error.title")+"",f,E,c,$=r[0]("error.description")+"",_,w,p,M,D,y;return p=new fr({}),D=new hr({}),{c(){e=n("section"),s=n("h2"),f=H(l),E=h(),c=n("p"),_=H($),w=h(),$e(p.$$.fragment),M=h(),$e(D.$$.fragment),this.h()},l(v){e=o(v,"SECTION",{id:!0});var m=i(e);s=o(m,"H2",{});var L=i(s);f=I(L,l),L.forEach(a),E=d(m),c=o(m,"P",{});var k=i(c);_=I(k,$),k.forEach(a),w=d(m),Le(p.$$.fragment,m),M=d(m),Le(D.$$.fragment,m),m.forEach(a),this.h()},h(){Q(e,"id","secError")},m(v,m){te(v,e,m),t(e,s),t(s,f),t(e,E),t(e,c),t(c,_),t(e,w),Me(p,e,null),t(e,M),Me(D,e,null),y=!0},p(v,[m]){(!y||m&1)&&l!==(l=v[0]("error.title")+"")&&C(f,l),(!y||m&1)&&$!==($=v[0]("error.description")+"")&&C(_,$)},i(v){y||(be(p.$$.fragment,v),be(D.$$.fragment,v),y=!0)},o(v){we(p.$$.fragment,v),we(D.$$.fragment,v),y=!1},d(v){v&&a(e),Te(p),Te(D)}}}function pr(r,e,s){let l;return Pe(r,He,f=>s(0,l=f)),[l]}class _r extends de{constructor(e){super(),pe(this,e,pr,dr,he,{})}}function vr(r){let e,s,l=r[0]("formula.title")+"",f,E,c,$=r[0]("formula.description")+"",_,w,p,M=r[0]("formula.format.title")+"",D,y,v,m=r[0]("formula.format.width.description")+"",L,k,g,b,q,B=r[0]("formula.format.width.example")+"",R,N,K,W=r[0]("formula.format.character.description")+"",X,S,Y,Z,F=r[0]("formula.format.character.example1")+"",T,j,U,P=r[0]("formula.format.character.example2")+"",z,le,x,ee=r[0]("formula.format.character.defineInteger")+"",V,A,O,G=r[0]("formula.format.character.defineReal")+"",se,ie,oe,ue=r[0]("formula.format.decimalPoint.description")+"",me,fe,_e,ve,ge=r[0]("formula.format.decimalPoint.example")+"",Ut,Ae,ye,_t=r[0]("formula.format.parentheses.description")+"",kt,Re,Se,qe,vt=r[0]("formula.format.parentheses.example")+"",Ot,Fe,je=r[0]("formula.specification.title")+"",gt,At,Be,ze=r[0]("formula.specification.description")+"",Et,yt,Ve,We=r[0]("formula.specification.space.description")+"",$t,Rt,Ge,Je,Ke,Lt=r[0]("formula.specification.space.example")+"",St,Qe,Xe=r[0]("formula.specification.number.description")+"",Mt,qt,Ye,Ze,xe,bt=r[0]("formula.specification.number.example")+"",Ft,et,tt=r[0]("formula.invalid.title")+"",wt,jt,lt,rt=r[0]("formula.invalid.description")+"",Tt,Bt,at,nt,Pt=r[0]("formula.invalid.parenthesis.beforeNumber")+"",zt,Ie,rl="<li><code>6/2(1+2)</code>, <code>(6/2)(1+2)</code></li>",Vt,ot,st,Ht=r[0]("formula.invalid.parenthesis.afterNumber")+"",Wt,Ce,al="<li><code>(1+2)3</code>, <code>(6/2)(1+2)</code></li>",Gt,it,ut,It=r[0]("formula.invalid.parenthesis.notPair")+"",Jt,De,nl="<li><code>(1+2</code>, <code>1+2)</code></li>",Kt,ft,ct=r[0]("formula.invalid.endOperator")+"",Ct,Qt,Ne,ol="<li><code>1+2+</code></li>",Xt,mt,ht=r[0]("formula.invalid.notOperator")+"",Dt,Yt,Ue,sl="<li><code>1 2 3</code></li> <li><code>1 2 + 3</code></li>",Zt,dt,pt,Nt=r[0]("formula.invalid.zeroDivide")+"",xt,ke,il="<li><code>1/0</code></li>";return{c(){e=n("section"),s=n("h2"),f=H(l),E=h(),c=n("p"),_=H($),w=h(),p=n("h3"),D=H(M),y=h(),v=n("p"),L=H(m),k=h(),g=n("ul"),b=n("li"),q=new re(!1),R=h(),N=n("p"),K=new re(!1),X=h(),S=n("ul"),Y=n("li"),Z=new re(!1),T=h(),j=n("li"),U=new re(!1),z=h(),le=n("li"),x=new re(!1),V=h(),A=n("li"),O=new re(!1),se=h(),ie=n("p"),oe=new re(!1),me=h(),fe=n("ul"),_e=n("li"),ve=new re(!1),Ut=h(),Ae=n("p"),ye=new re(!1),kt=h(),Re=n("ul"),Se=n("li"),qe=new re(!1),Ot=h(),Fe=n("h3"),gt=H(je),At=h(),Be=n("p"),Et=H(ze),yt=h(),Ve=n("p"),$t=H(We),Rt=h(),Ge=n("ul"),Je=n("li"),Ke=new re(!1),St=h(),Qe=n("p"),Mt=H(Xe),qt=h(),Ye=n("ul"),Ze=n("li"),xe=new re(!1),Ft=h(),et=n("h3"),wt=H(tt),jt=h(),lt=n("p"),Tt=H(rt),Bt=h(),at=n("p"),nt=new re(!1),zt=h(),Ie=n("ul"),Ie.innerHTML=rl,Vt=h(),ot=n("p"),st=new re(!1),Wt=h(),Ce=n("ul"),Ce.innerHTML=al,Gt=h(),it=n("p"),ut=new re(!1),Jt=h(),De=n("ul"),De.innerHTML=nl,Kt=h(),ft=n("p"),Ct=H(ct),Qt=h(),Ne=n("ul"),Ne.innerHTML=ol,Xt=h(),mt=n("p"),Dt=H(ht),Yt=h(),Ue=n("ul"),Ue.innerHTML=sl,Zt=h(),dt=n("p"),pt=new re(!1),xt=h(),ke=n("ul"),ke.innerHTML=il,this.h()},l(J){e=o(J,"SECTION",{id:!0});var u=i(e);s=o(u,"H2",{});var ul=i(s);f=I(ul,l),ul.forEach(a),E=d(u),c=o(u,"P",{});var fl=i(c);_=I(fl,$),fl.forEach(a),w=d(u),p=o(u,"H3",{});var cl=i(p);D=I(cl,M),cl.forEach(a),y=d(u),v=o(u,"P",{});var ml=i(v);L=I(ml,m),ml.forEach(a),k=d(u),g=o(u,"UL",{});var hl=i(g);b=o(hl,"LI",{});var dl=i(b);q=ae(dl,!1),dl.forEach(a),hl.forEach(a),R=d(u),N=o(u,"P",{});var pl=i(N);K=ae(pl,!1),pl.forEach(a),X=d(u),S=o(u,"UL",{});var Ee=i(S);Y=o(Ee,"LI",{});var _l=i(Y);Z=ae(_l,!1),_l.forEach(a),T=d(Ee),j=o(Ee,"LI",{});var vl=i(j);U=ae(vl,!1),vl.forEach(a),z=d(Ee),le=o(Ee,"LI",{});var gl=i(le);x=ae(gl,!1),gl.forEach(a),V=d(Ee),A=o(Ee,"LI",{});var El=i(A);O=ae(El,!1),El.forEach(a),Ee.forEach(a),se=d(u),ie=o(u,"P",{});var $l=i(ie);oe=ae($l,!1),$l.forEach(a),me=d(u),fe=o(u,"UL",{});var Ll=i(fe);_e=o(Ll,"LI",{});var Ml=i(_e);ve=ae(Ml,!1),Ml.forEach(a),Ll.forEach(a),Ut=d(u),Ae=o(u,"P",{});var bl=i(Ae);ye=ae(bl,!1),bl.forEach(a),kt=d(u),Re=o(u,"UL",{});var wl=i(Re);Se=o(wl,"LI",{});var Tl=i(Se);qe=ae(Tl,!1),Tl.forEach(a),wl.forEach(a),Ot=d(u),Fe=o(u,"H3",{});var Pl=i(Fe);gt=I(Pl,je),Pl.forEach(a),At=d(u),Be=o(u,"P",{});var Hl=i(Be);Et=I(Hl,ze),Hl.forEach(a),yt=d(u),Ve=o(u,"P",{});var Il=i(Ve);$t=I(Il,We),Il.forEach(a),Rt=d(u),Ge=o(u,"UL",{});var Cl=i(Ge);Je=o(Cl,"LI",{});var Dl=i(Je);Ke=ae(Dl,!1),Dl.forEach(a),Cl.forEach(a),St=d(u),Qe=o(u,"P",{});var Nl=i(Qe);Mt=I(Nl,Xe),Nl.forEach(a),qt=d(u),Ye=o(u,"UL",{});var Ul=i(Ye);Ze=o(Ul,"LI",{});var kl=i(Ze);xe=ae(kl,!1),kl.forEach(a),Ul.forEach(a),Ft=d(u),et=o(u,"H3",{});var Ol=i(et);wt=I(Ol,tt),Ol.forEach(a),jt=d(u),lt=o(u,"P",{});var Al=i(lt);Tt=I(Al,rt),Al.forEach(a),Bt=d(u),at=o(u,"P",{});var yl=i(at);nt=ae(yl,!1),yl.forEach(a),zt=d(u),Ie=o(u,"UL",{"data-svelte-h":!0}),ce(Ie)!=="svelte-zfqxlt"&&(Ie.innerHTML=rl),Vt=d(u),ot=o(u,"P",{});var Rl=i(ot);st=ae(Rl,!1),Rl.forEach(a),Wt=d(u),Ce=o(u,"UL",{"data-svelte-h":!0}),ce(Ce)!=="svelte-15otzaf"&&(Ce.innerHTML=al),Gt=d(u),it=o(u,"P",{});var Sl=i(it);ut=ae(Sl,!1),Sl.forEach(a),Jt=d(u),De=o(u,"UL",{"data-svelte-h":!0}),ce(De)!=="svelte-oxrdnd"&&(De.innerHTML=nl),Kt=d(u),ft=o(u,"P",{});var ql=i(ft);Ct=I(ql,ct),ql.forEach(a),Qt=d(u),Ne=o(u,"UL",{"data-svelte-h":!0}),ce(Ne)!=="svelte-1g6ae20"&&(Ne.innerHTML=ol),Xt=d(u),mt=o(u,"P",{});var Fl=i(mt);Dt=I(Fl,ht),Fl.forEach(a),Yt=d(u),Ue=o(u,"UL",{"data-svelte-h":!0}),ce(Ue)!=="svelte-mcicd8"&&(Ue.innerHTML=sl),Zt=d(u),dt=o(u,"P",{});var jl=i(dt);pt=ae(jl,!1),jl.forEach(a),xt=d(u),ke=o(u,"UL",{"data-svelte-h":!0}),ce(ke)!=="svelte-qxx12h"&&(ke.innerHTML=il),u.forEach(a),this.h()},h(){q.a=null,K.a=null,Z.a=null,U.a=null,x.a=null,O.a=null,oe.a=null,ve.a=null,ye.a=null,qe.a=null,Ke.a=null,xe.a=null,nt.a=null,st.a=null,ut.a=null,pt.a=null,Q(e,"id","secFormula")},m(J,u){te(J,e,u),t(e,s),t(s,f),t(e,E),t(e,c),t(c,_),t(e,w),t(e,p),t(p,D),t(e,y),t(e,v),t(v,L),t(e,k),t(e,g),t(g,b),q.m(B,b),t(e,R),t(e,N),K.m(W,N),t(e,X),t(e,S),t(S,Y),Z.m(F,Y),t(S,T),t(S,j),U.m(P,j),t(S,z),t(S,le),x.m(ee,le),t(S,V),t(S,A),O.m(G,A),t(e,se),t(e,ie),oe.m(ue,ie),t(e,me),t(e,fe),t(fe,_e),ve.m(ge,_e),t(e,Ut),t(e,Ae),ye.m(_t,Ae),t(e,kt),t(e,Re),t(Re,Se),qe.m(vt,Se),t(e,Ot),t(e,Fe),t(Fe,gt),t(e,At),t(e,Be),t(Be,Et),t(e,yt),t(e,Ve),t(Ve,$t),t(e,Rt),t(e,Ge),t(Ge,Je),Ke.m(Lt,Je),t(e,St),t(e,Qe),t(Qe,Mt),t(e,qt),t(e,Ye),t(Ye,Ze),xe.m(bt,Ze),t(e,Ft),t(e,et),t(et,wt),t(e,jt),t(e,lt),t(lt,Tt),t(e,Bt),t(e,at),nt.m(Pt,at),t(e,zt),t(e,Ie),t(e,Vt),t(e,ot),st.m(Ht,ot),t(e,Wt),t(e,Ce),t(e,Gt),t(e,it),ut.m(It,it),t(e,Jt),t(e,De),t(e,Kt),t(e,ft),t(ft,Ct),t(e,Qt),t(e,Ne),t(e,Xt),t(e,mt),t(mt,Dt),t(e,Yt),t(e,Ue),t(e,Zt),t(e,dt),pt.m(Nt,dt),t(e,xt),t(e,ke)},p(J,[u]){u&1&&l!==(l=J[0]("formula.title")+"")&&C(f,l),u&1&&$!==($=J[0]("formula.description")+"")&&C(_,$),u&1&&M!==(M=J[0]("formula.format.title")+"")&&C(D,M),u&1&&m!==(m=J[0]("formula.format.width.description")+"")&&C(L,m),u&1&&B!==(B=J[0]("formula.format.width.example")+"")&&q.p(B),u&1&&W!==(W=J[0]("formula.format.character.description")+"")&&K.p(W),u&1&&F!==(F=J[0]("formula.format.character.example1")+"")&&Z.p(F),u&1&&P!==(P=J[0]("formula.format.character.example2")+"")&&U.p(P),u&1&&ee!==(ee=J[0]("formula.format.character.defineInteger")+"")&&x.p(ee),u&1&&G!==(G=J[0]("formula.format.character.defineReal")+"")&&O.p(G),u&1&&ue!==(ue=J[0]("formula.format.decimalPoint.description")+"")&&oe.p(ue),u&1&&ge!==(ge=J[0]("formula.format.decimalPoint.example")+"")&&ve.p(ge),u&1&&_t!==(_t=J[0]("formula.format.parentheses.description")+"")&&ye.p(_t),u&1&&vt!==(vt=J[0]("formula.format.parentheses.example")+"")&&qe.p(vt),u&1&&je!==(je=J[0]("formula.specification.title")+"")&&C(gt,je),u&1&&ze!==(ze=J[0]("formula.specification.description")+"")&&C(Et,ze),u&1&&We!==(We=J[0]("formula.specification.space.description")+"")&&C($t,We),u&1&&Lt!==(Lt=J[0]("formula.specification.space.example")+"")&&Ke.p(Lt),u&1&&Xe!==(Xe=J[0]("formula.specification.number.description")+"")&&C(Mt,Xe),u&1&&bt!==(bt=J[0]("formula.specification.number.example")+"")&&xe.p(bt),u&1&&tt!==(tt=J[0]("formula.invalid.title")+"")&&C(wt,tt),u&1&&rt!==(rt=J[0]("formula.invalid.description")+"")&&C(Tt,rt),u&1&&Pt!==(Pt=J[0]("formula.invalid.parenthesis.beforeNumber")+"")&&nt.p(Pt),u&1&&Ht!==(Ht=J[0]("formula.invalid.parenthesis.afterNumber")+"")&&st.p(Ht),u&1&&It!==(It=J[0]("formula.invalid.parenthesis.notPair")+"")&&ut.p(It),u&1&&ct!==(ct=J[0]("formula.invalid.endOperator")+"")&&C(Ct,ct),u&1&&ht!==(ht=J[0]("formula.invalid.notOperator")+"")&&C(Dt,ht),u&1&&Nt!==(Nt=J[0]("formula.invalid.zeroDivide")+"")&&pt.p(Nt)},i:ne,o:ne,d(J){J&&a(e)}}}function gr(r,e,s){let l;return Pe(r,He,f=>s(0,l=f)),[l]}class Er extends de{constructor(e){super(),pe(this,e,gr,vr,he,{})}}function $r(r){let e,s,l=r[0]("result.title")+"",f,E,c,$=r[0]("result.error.description")+"",_,w,p,M,D,y=r[0]("result.error.detail")+"",v,m,L=r[0]("result.decimalPlace.description")+"",k,g,b,q="<li><code>1/3 = 0.3333333333</code></li> <li><code>1/2048 = 0.0004882813</code></li>",B,R,N=r[0]("result.rounding.description")+"",K,W,X,S,Y=r[0]("result.rounding.numberOfDigits")+"",Z,F,T,j="<code>65535/1234 = 53.10777958</code>";return{c(){e=n("section"),s=n("h2"),f=H(l),E=h(),c=n("p"),_=H($),w=h(),p=n("ul"),M=n("li"),D=new re(!1),v=h(),m=n("p"),k=H(L),g=h(),b=n("ul"),b.innerHTML=q,B=h(),R=n("p"),K=H(N),W=h(),X=n("ul"),S=n("li"),Z=H(Y),F=h(),T=n("li"),T.innerHTML=j,this.h()},l(U){e=o(U,"SECTION",{id:!0});var P=i(e);s=o(P,"H2",{});var z=i(s);f=I(z,l),z.forEach(a),E=d(P),c=o(P,"P",{});var le=i(c);_=I(le,$),le.forEach(a),w=d(P),p=o(P,"UL",{});var x=i(p);M=o(x,"LI",{});var ee=i(M);D=ae(ee,!1),ee.forEach(a),x.forEach(a),v=d(P),m=o(P,"P",{});var V=i(m);k=I(V,L),V.forEach(a),g=d(P),b=o(P,"UL",{"data-svelte-h":!0}),ce(b)!=="svelte-1e7lhya"&&(b.innerHTML=q),B=d(P),R=o(P,"P",{});var A=i(R);K=I(A,N),A.forEach(a),W=d(P),X=o(P,"UL",{});var O=i(X);S=o(O,"LI",{});var G=i(S);Z=I(G,Y),G.forEach(a),F=d(O),T=o(O,"LI",{"data-svelte-h":!0}),ce(T)!=="svelte-pm4lef"&&(T.innerHTML=j),O.forEach(a),P.forEach(a),this.h()},h(){D.a=null,Q(e,"id","secResult")},m(U,P){te(U,e,P),t(e,s),t(s,f),t(e,E),t(e,c),t(c,_),t(e,w),t(e,p),t(p,M),D.m(y,M),t(e,v),t(e,m),t(m,k),t(e,g),t(e,b),t(e,B),t(e,R),t(R,K),t(e,W),t(e,X),t(X,S),t(S,Z),t(X,F),t(X,T)},p(U,[P]){P&1&&l!==(l=U[0]("result.title")+"")&&C(f,l),P&1&&$!==($=U[0]("result.error.description")+"")&&C(_,$),P&1&&y!==(y=U[0]("result.error.detail")+"")&&D.p(y),P&1&&L!==(L=U[0]("result.decimalPlace.description")+"")&&C(k,L),P&1&&N!==(N=U[0]("result.rounding.description")+"")&&C(K,N),P&1&&Y!==(Y=U[0]("result.rounding.numberOfDigits")+"")&&C(Z,Y)},i:ne,o:ne,d(U){U&&a(e)}}}function Lr(r,e,s){let l;return Pe(r,He,f=>s(0,l=f)),[l]}class Mr extends de{constructor(e){super(),pe(this,e,Lr,$r,he,{})}}function br(r){let e,s,l,f,E,c,$,_,w;return s=new sr({}),f=new Er({}),c=new Mr({}),_=new _r({}),{c(){e=n("main"),$e(s.$$.fragment),l=h(),$e(f.$$.fragment),E=h(),$e(c.$$.fragment),$=h(),$e(_.$$.fragment),this.h()},l(p){e=o(p,"MAIN",{class:!0});var M=i(e);Le(s.$$.fragment,M),l=d(M),Le(f.$$.fragment,M),E=d(M),Le(c.$$.fragment,M),$=d(M),Le(_.$$.fragment,M),M.forEach(a),this.h()},h(){Q(e,"class","svelte-1v4dcde")},m(p,M){te(p,e,M),Me(s,e,null),t(e,l),Me(f,e,null),t(e,E),Me(c,e,null),t(e,$),Me(_,e,null),w=!0},p:ne,i(p){w||(be(s.$$.fragment,p),be(f.$$.fragment,p),be(c.$$.fragment,p),be(_.$$.fragment,p),w=!0)},o(p){we(s.$$.fragment,p),we(f.$$.fragment,p),we(c.$$.fragment,p),we(_.$$.fragment,p),w=!1},d(p){p&&a(e),Te(s),Te(f),Te(c),Te(_)}}}class wr extends de{constructor(e){super(),pe(this,e,null,br,he,{})}}function Tr(r){let e,s,l,f,E,c,$;return f=new ar({}),c=new wr({}),{c(){e=n("meta"),s=n("meta"),l=h(),$e(f.$$.fragment),E=h(),$e(c.$$.fragment),this.h()},l(_){const w=er("svelte-1pu25jq",document.head);e=o(w,"META",{name:!0,content:!0}),s=o(w,"META",{name:!0,content:!0}),w.forEach(a),l=d(_),Le(f.$$.fragment,_),E=d(_),Le(c.$$.fragment,_),this.h()},h(){Q(e,"name","robots"),Q(e,"content","none"),Q(s,"name","description"),Q(s,"content","Sistēma goim-karkeis abaesik")},m(_,w){t(document.head,e),t(document.head,s),te(_,l,w),Me(f,_,w),te(_,E,w),Me(c,_,w),$=!0},p:ne,i(_){$||(be(f.$$.fragment,_),be(c.$$.fragment,_),$=!0)},o(_){we(f.$$.fragment,_),we(c.$$.fragment,_),$=!1},d(_){_&&(a(l),a(E)),a(e),a(s),Te(f,_),Te(c,_)}}}class Cr extends de{constructor(e){super(),pe(this,e,null,Tr,he,{})}}export{Cr as component};
