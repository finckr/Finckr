"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[148],{8867:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(7401).A)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},767:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(7401).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},6352:(e,t,n)=>{n.d(t,{C1:()=>D,bL:()=>E});var r=n(2115),o=n(8068),i=n(8166),a=n(3610),l=n(1488),d=n(858),s=n(7510),u=n(7028),c=n(3360),f=n(5155),p="Checkbox",[m,h]=(0,i.A)(p),[v,w]=m(p),g=r.forwardRef((e,t)=>{let{__scopeCheckbox:n,name:i,checked:d,defaultChecked:s,required:u,disabled:p,value:m="on",onCheckedChange:h,form:w,...g}=e,[b,y]=r.useState(null),E=(0,o.s)(t,e=>y(e)),D=r.useRef(!1),R=!b||w||!!b.closest("form"),[j=!1,P]=(0,l.i)({prop:d,defaultProp:s,onChange:h}),C=r.useRef(j);return r.useEffect(()=>{let e=null==b?void 0:b.form;if(e){let t=()=>P(C.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}},[b,P]),(0,f.jsxs)(v,{scope:n,state:j,disabled:p,children:[(0,f.jsx)(c.sG.button,{type:"button",role:"checkbox","aria-checked":S(j)?"mixed":j,"aria-required":u,"data-state":k(j),"data-disabled":p?"":void 0,disabled:p,value:m,...g,ref:E,onKeyDown:(0,a.m)(e.onKeyDown,e=>{"Enter"===e.key&&e.preventDefault()}),onClick:(0,a.m)(e.onClick,e=>{P(e=>!!S(e)||!e),R&&(D.current=e.isPropagationStopped(),D.current||e.stopPropagation())})}),R&&(0,f.jsx)(x,{control:b,bubbles:!D.current,name:i,value:m,checked:j,required:u,disabled:p,form:w,style:{transform:"translateX(-100%)"},defaultChecked:!S(s)&&s})]})});g.displayName=p;var b="CheckboxIndicator",y=r.forwardRef((e,t)=>{let{__scopeCheckbox:n,forceMount:r,...o}=e,i=w(b,n);return(0,f.jsx)(u.C,{present:r||S(i.state)||!0===i.state,children:(0,f.jsx)(c.sG.span,{"data-state":k(i.state),"data-disabled":i.disabled?"":void 0,...o,ref:t,style:{pointerEvents:"none",...e.style}})})});y.displayName=b;var x=e=>{let{control:t,checked:n,bubbles:o=!0,defaultChecked:i,...a}=e,l=r.useRef(null),u=(0,d.Z)(n),c=(0,s.X)(t);r.useEffect(()=>{let e=l.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(u!==n&&t){let r=new Event("click",{bubbles:o});e.indeterminate=S(n),t.call(e,!S(n)&&n),e.dispatchEvent(r)}},[u,n,o]);let p=r.useRef(!S(n)&&n);return(0,f.jsx)("input",{type:"checkbox","aria-hidden":!0,defaultChecked:null!=i?i:p.current,...a,tabIndex:-1,ref:l,style:{...e.style,...c,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function S(e){return"indeterminate"===e}function k(e){return S(e)?"indeterminate":e?"checked":"unchecked"}var E=g,D=y},3301:(e,t,n)=>{n.d(t,{Q6:()=>Y,bL:()=>T,zi:()=>B,CC:()=>U});var r=n(2115);function o(e,[t,n]){return Math.min(n,Math.max(t,e))}var i=n(3610),a=n(8068),l=n(8166),d=n(1488),s=n(4256),u=n(858),c=n(7510),f=n(3360),p=n(9741),m=n(5155),h=["PageUp","PageDown"],v=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],w={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},g="Slider",[b,y,x]=(0,p.N)(g),[S,k]=(0,l.A)(g,[x]),[E,D]=S(g),R=r.forwardRef((e,t)=>{let{name:n,min:a=0,max:l=100,step:s=1,orientation:u="horizontal",disabled:c=!1,minStepsBetweenThumbs:f=0,defaultValue:p=[a],value:w,onValueChange:g=()=>{},onValueCommit:y=()=>{},inverted:x=!1,form:S,...k}=e,D=r.useRef(new Set),R=r.useRef(0),j="horizontal"===u?C:M,[P=[],A]=(0,d.i)({prop:w,defaultProp:p,onChange:e=>{var t;null===(t=[...D.current][R.current])||void 0===t||t.focus(),g(e)}}),_=r.useRef(P);function I(e,t){let{commit:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{commit:!1},r=(String(s).split(".")[1]||"").length,i=o(function(e,t){let n=Math.pow(10,t);return Math.round(e*n)/n}(Math.round((e-a)/s)*s+a,r),[a,l]);A(function(){var e,r;let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=[...e];return r[n]=t,r.sort((e,t)=>e-t)}(o,i,t);if(e=a,!(!((r=f*s)>0)||Math.min(...e.slice(0,-1).map((t,n)=>e[n+1]-t))>=r))return o;{R.current=a.indexOf(i);let e=String(a)!==String(o);return e&&n&&y(a),e?a:o}})}return(0,m.jsx)(E,{scope:e.__scopeSlider,name:n,disabled:c,min:a,max:l,valueIndexToChangeRef:R,thumbs:D.current,values:P,orientation:u,form:S,children:(0,m.jsx)(b.Provider,{scope:e.__scopeSlider,children:(0,m.jsx)(b.Slot,{scope:e.__scopeSlider,children:(0,m.jsx)(j,{"aria-disabled":c,"data-disabled":c?"":void 0,...k,ref:t,onPointerDown:(0,i.m)(k.onPointerDown,()=>{c||(_.current=P)}),min:a,max:l,inverted:x,onSlideStart:c?void 0:function(e){let t=function(e,t){if(1===e.length)return 0;let n=e.map(e=>Math.abs(e-t)),r=Math.min(...n);return n.indexOf(r)}(P,e);I(e,t)},onSlideMove:c?void 0:function(e){I(e,R.current)},onSlideEnd:c?void 0:function(){let e=_.current[R.current];P[R.current]!==e&&y(P)},onHomeKeyDown:()=>!c&&I(a,0,{commit:!0}),onEndKeyDown:()=>!c&&I(l,P.length-1,{commit:!0}),onStepKeyDown:e=>{let{event:t,direction:n}=e;if(!c){let e=h.includes(t.key)||t.shiftKey&&v.includes(t.key),r=R.current;I(P[r]+s*(e?10:1)*n,r,{commit:!0})}}})})})})});R.displayName=g;var[j,P]=S(g,{startEdge:"left",endEdge:"right",size:"width",direction:1}),C=r.forwardRef((e,t)=>{let{min:n,max:o,dir:i,inverted:l,onSlideStart:d,onSlideMove:u,onSlideEnd:c,onStepKeyDown:f,...p}=e,[h,v]=r.useState(null),g=(0,a.s)(t,e=>v(e)),b=r.useRef(void 0),y=(0,s.jH)(i),x="ltr"===y,S=x&&!l||!x&&l;function k(e){let t=b.current||h.getBoundingClientRect(),r=O([0,t.width],S?[n,o]:[o,n]);return b.current=t,r(e-t.left)}return(0,m.jsx)(j,{scope:e.__scopeSlider,startEdge:S?"left":"right",endEdge:S?"right":"left",direction:S?1:-1,size:"width",children:(0,m.jsx)(A,{dir:y,"data-orientation":"horizontal",...p,ref:g,style:{...p.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:e=>{let t=k(e.clientX);null==d||d(t)},onSlideMove:e=>{let t=k(e.clientX);null==u||u(t)},onSlideEnd:()=>{b.current=void 0,null==c||c()},onStepKeyDown:e=>{let t=w[S?"from-left":"from-right"].includes(e.key);null==f||f({event:e,direction:t?-1:1})}})})}),M=r.forwardRef((e,t)=>{let{min:n,max:o,inverted:i,onSlideStart:l,onSlideMove:d,onSlideEnd:s,onStepKeyDown:u,...c}=e,f=r.useRef(null),p=(0,a.s)(t,f),h=r.useRef(void 0),v=!i;function g(e){let t=h.current||f.current.getBoundingClientRect(),r=O([0,t.height],v?[o,n]:[n,o]);return h.current=t,r(e-t.top)}return(0,m.jsx)(j,{scope:e.__scopeSlider,startEdge:v?"bottom":"top",endEdge:v?"top":"bottom",size:"height",direction:v?1:-1,children:(0,m.jsx)(A,{"data-orientation":"vertical",...c,ref:p,style:{...c.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:e=>{let t=g(e.clientY);null==l||l(t)},onSlideMove:e=>{let t=g(e.clientY);null==d||d(t)},onSlideEnd:()=>{h.current=void 0,null==s||s()},onStepKeyDown:e=>{let t=w[v?"from-bottom":"from-top"].includes(e.key);null==u||u({event:e,direction:t?-1:1})}})})}),A=r.forwardRef((e,t)=>{let{__scopeSlider:n,onSlideStart:r,onSlideMove:o,onSlideEnd:a,onHomeKeyDown:l,onEndKeyDown:d,onStepKeyDown:s,...u}=e,c=D(g,n);return(0,m.jsx)(f.sG.span,{...u,ref:t,onKeyDown:(0,i.m)(e.onKeyDown,e=>{"Home"===e.key?(l(e),e.preventDefault()):"End"===e.key?(d(e),e.preventDefault()):h.concat(v).includes(e.key)&&(s(e),e.preventDefault())}),onPointerDown:(0,i.m)(e.onPointerDown,e=>{let t=e.target;t.setPointerCapture(e.pointerId),e.preventDefault(),c.thumbs.has(t)?t.focus():r(e)}),onPointerMove:(0,i.m)(e.onPointerMove,e=>{e.target.hasPointerCapture(e.pointerId)&&o(e)}),onPointerUp:(0,i.m)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&(t.releasePointerCapture(e.pointerId),a(e))})})}),_="SliderTrack",I=r.forwardRef((e,t)=>{let{__scopeSlider:n,...r}=e,o=D(_,n);return(0,m.jsx)(f.sG.span,{"data-disabled":o.disabled?"":void 0,"data-orientation":o.orientation,...r,ref:t})});I.displayName=_;var K="SliderRange",L=r.forwardRef((e,t)=>{let{__scopeSlider:n,...o}=e,i=D(K,n),l=P(K,n),d=r.useRef(null),s=(0,a.s)(t,d),u=i.values.length,c=i.values.map(e=>G(e,i.min,i.max)),p=u>1?Math.min(...c):0,h=100-Math.max(...c);return(0,m.jsx)(f.sG.span,{"data-orientation":i.orientation,"data-disabled":i.disabled?"":void 0,...o,ref:s,style:{...e.style,[l.startEdge]:p+"%",[l.endEdge]:h+"%"}})});L.displayName=K;var H="SliderThumb",N=r.forwardRef((e,t)=>{let n=y(e.__scopeSlider),[o,i]=r.useState(null),l=(0,a.s)(t,e=>i(e)),d=r.useMemo(()=>o?n().findIndex(e=>e.ref.current===o):-1,[n,o]);return(0,m.jsx)(z,{...e,ref:l,index:d})}),z=r.forwardRef((e,t)=>{let{__scopeSlider:n,index:o,name:l,...d}=e,s=D(H,n),u=P(H,n),[p,h]=r.useState(null),v=(0,a.s)(t,e=>h(e)),w=!p||s.form||!!p.closest("form"),g=(0,c.X)(p),y=s.values[o],x=void 0===y?0:G(y,s.min,s.max),S=function(e,t){return t>2?"Value ".concat(e+1," of ").concat(t):2===t?["Minimum","Maximum"][e]:void 0}(o,s.values.length),k=null==g?void 0:g[u.size],E=k?function(e,t,n){let r=e/2,o=O([0,50],[0,r]);return(r-o(t)*n)*n}(k,x,u.direction):0;return r.useEffect(()=>{if(p)return s.thumbs.add(p),()=>{s.thumbs.delete(p)}},[p,s.thumbs]),(0,m.jsxs)("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[u.startEdge]:"calc(".concat(x,"% + ").concat(E,"px)")},children:[(0,m.jsx)(b.ItemSlot,{scope:e.__scopeSlider,children:(0,m.jsx)(f.sG.span,{role:"slider","aria-label":e["aria-label"]||S,"aria-valuemin":s.min,"aria-valuenow":y,"aria-valuemax":s.max,"aria-orientation":s.orientation,"data-orientation":s.orientation,"data-disabled":s.disabled?"":void 0,tabIndex:s.disabled?void 0:0,...d,ref:v,style:void 0===y?{display:"none"}:e.style,onFocus:(0,i.m)(e.onFocus,()=>{s.valueIndexToChangeRef.current=o})})}),w&&(0,m.jsx)(X,{name:null!=l?l:s.name?s.name+(s.values.length>1?"[]":""):void 0,form:s.form,value:y},o)]})});N.displayName=H;var X=e=>{let{value:t,...n}=e,o=r.useRef(null),i=(0,u.Z)(t);return r.useEffect(()=>{let e=o.current,n=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value").set;if(i!==t&&n){let r=new Event("input",{bubbles:!0});n.call(e,t),e.dispatchEvent(r)}},[i,t]),(0,m.jsx)("input",{style:{display:"none"},...n,ref:o,defaultValue:t})};function G(e,t,n){return o(100/(n-t)*(e-t),[0,100])}function O(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}var T=R,U=I,Y=L,B=N}}]);