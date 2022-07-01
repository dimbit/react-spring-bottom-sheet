import e from"@reach/portal";import n,{useRef as t,useDebugValue as r,useEffect as a,useLayoutEffect as o,useState as i,useCallback as c,useMemo as s,useImperativeHandle as l,forwardRef as u}from"react";import{useMachine as d}from"@xstate/react";import{useSpring as p,interpolate as y,animated as m,config as g}from"react-spring";import{useDrag as v,rubberbandIfOutOfBounds as S}from"react-use-gesture";import{createFocusTrap as f}from"focus-trap";import{disableBodyScroll as h,enableBodyScroll as E}from"body-scroll-lock";import{ResizeObserver as b}from"@juggle/resize-observer";import{Machine as R,assign as w}from"xstate";function x(){return x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},x.apply(this,arguments)}function C(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n.indexOf(t=o[r])>=0||(a[t]=e[t]);return a}const O="undefined"!=typeof window?o:a;function N(e,n,t){return n=(n=+n)==n?n:0,t=(t=+t)==t?t:0,(e=+e)==e&&(e=(e=e<=t?e:t)>=n?e:n),e}function H(e){const n=Math.round(e);if(Number.isNaN(e))throw new TypeError("Found a NaN! Check your snapPoints / defaultSnap / snapTo ");return n}const D={box:"border-box"};function k(e,{label:n,enabled:t,resizeSourceRef:a}){let[o,s]=i(0);r(`${n}: ${o}`);const l=c(e=>{s(e[0].borderBoxSize[0].blockSize),a.current="element"},[a]);return O(()=>{if(!e.current||!t)return;const n=new b(l);return n.observe(e.current,D),()=>{n.disconnect()}},[e,l,t]),t?o:0}function z(e=1e3){return new Promise(n=>setTimeout(n,e))}const P={DRAG:{target:"#overlay.dragging",actions:"onOpenEnd"}},A={RESIZE:{target:"#overlay.resizing",actions:"onOpenEnd"}},L=R({id:"overlay",initial:"closed",context:{initialState:"CLOSED"},states:{closed:{on:{OPEN:"opening",CLOSE:void 0}},opening:{initial:"start",states:{start:{invoke:{src:"onOpenStart",onDone:"transition"}},transition:{always:[{target:"immediately",cond:"initiallyOpen"},{target:"smoothly",cond:"initiallyClosed"}]},immediately:{initial:"open",states:{open:{invoke:{src:"openImmediately",onDone:"activating"}},activating:{invoke:{src:"activate",onDone:"#overlay.opening.end"},on:x({},P,A)}}},smoothly:{initial:"visuallyHidden",states:{visuallyHidden:{invoke:{src:"renderVisuallyHidden",onDone:"activating"}},activating:{invoke:{src:"activate",onDone:"open"}},open:{invoke:{src:"openSmoothly",onDone:"#overlay.opening.end"},on:x({},P,A)}}},end:{invoke:{src:"onOpenEnd",onDone:"done"},on:{CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:x({},{CLOSE:{target:"#overlay.closing",actions:"onOpenCancel"}}),onDone:"open"},open:{on:{DRAG:"#overlay.dragging",SNAP:"snapping",RESIZE:"resizing"}},dragging:{on:{SNAP:"snapping"}},snapping:{initial:"start",states:{start:{invoke:{src:"onSnapStart",onDone:"snappingSmoothly"},entry:[w({y:(e,{payload:{y:n}})=>n,velocity:(e,{payload:{velocity:n}})=>n,snapSource:(e,{payload:{source:n="custom"}})=>n})]},snappingSmoothly:{invoke:{src:"snapSmoothly",onDone:"end"}},end:{invoke:{src:"onSnapEnd",onDone:"done"},on:{RESIZE:"#overlay.resizing",SNAP:"#overlay.snapping",CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:{SNAP:{target:"snapping",actions:"onSnapEnd"},RESIZE:{target:"#overlay.resizing",actions:"onSnapCancel"},DRAG:{target:"#overlay.dragging",actions:"onSnapCancel"},CLOSE:{target:"#overlay.closing",actions:"onSnapCancel"}},onDone:"open"},resizing:{initial:"start",states:{start:{invoke:{src:"onResizeStart",onDone:"resizingSmoothly"}},resizingSmoothly:{invoke:{src:"resizeSmoothly",onDone:"end"}},end:{invoke:{src:"onResizeEnd",onDone:"done"},on:{SNAP:"#overlay.snapping",CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:{RESIZE:{target:"resizing",actions:"onResizeEnd"},SNAP:{target:"snapping",actions:"onResizeCancel"},DRAG:{target:"#overlay.dragging",actions:"onResizeCancel"},CLOSE:{target:"#overlay.closing",actions:"onResizeCancel"}},onDone:"open"},closing:{initial:"start",states:{start:{invoke:{src:"onCloseStart",onDone:"deactivating"},on:{OPEN:{target:"#overlay.open",actions:"onCloseCancel"}}},deactivating:{invoke:{src:"deactivate",onDone:"closingSmoothly"}},closingSmoothly:{invoke:{src:"closeSmoothly",onDone:"end"}},end:{invoke:{src:"onCloseEnd",onDone:"done"},on:{OPEN:{target:"#overlay.opening",actions:"onCloseCancel"}}},done:{type:"final"}},on:{CLOSE:void 0,OPEN:{target:"#overlay.opening",actions:"onCloseCancel"}},onDone:"closed"}},on:{CLOSE:"closing"}},{actions:{onOpenCancel:(e,n)=>{},onSnapCancel:(e,n)=>{},onResizeCancel:(e,n)=>{},onCloseCancel:(e,n)=>{},onOpenEnd:(e,n)=>{},onSnapEnd:(e,n)=>{},onRezizeEnd:(e,n)=>{}},services:{onSnapStart:async()=>{await z()},onOpenStart:async()=>{await z()},onCloseStart:async()=>{await z()},onResizeStart:async()=>{await z()},onSnapEnd:async()=>{await z()},onOpenEnd:async()=>{await z()},onCloseEnd:async()=>{await z()},onResizeEnd:async()=>{await z()},renderVisuallyHidden:async(e,n)=>{await z()},activate:async(e,n)=>{await z()},deactivate:async(e,n)=>{await z()},openSmoothly:async(e,n)=>{await z()},openImmediately:async(e,n)=>{await z()},snapSmoothly:async(e,n)=>{await z()},resizeSmoothly:async(e,n)=>{await z()},closeSmoothly:async(e,n)=>{await z()}},guards:{initiallyClosed:({initialState:e})=>"CLOSED"===e,initiallyOpen:({initialState:e})=>"OPEN"===e}}),T=["children","sibling","className","footer","header","open","initialState","lastSnapRef","initialFocusRef","onDismiss","maxHeight","defaultSnap","snapPoints","blocking","scrollLocking","style","onSpringStart","onSpringCancel","onSpringEnd","reserveScrollBarGap","expandOnContentDrag"],M=["velocity"],I=["onRest","config"],{tension:F,friction:G}=g.default,Z=n.forwardRef(function(e,o){let{children:u,sibling:g,className:b,footer:R,header:w,open:D,initialState:z,lastSnapRef:P,initialFocusRef:A,onDismiss:Z,maxHeight:q,defaultSnap:V=$,snapPoints:Y=j,blocking:K=!0,scrollLocking:J=!0,style:Q,onSpringStart:U,onSpringCancel:W,onSpringEnd:X,reserveScrollBarGap:_=K,expandOnContentDrag:ee=!1}=e,ne=C(e,T);const{ready:te,registerReady:re}=function(){const[e,n]=i(!1),[t,r]=i({}),o=c(e=>(r(n=>x({},n,{[e]:!1})),()=>{r(n=>x({},n,{[e]:!0}))}),[]);return a(()=>{const e=Object.values(t);0!==e.length&&e.every(Boolean)&&n(!0)},[t]),{ready:e,registerReady:o}}(),ae=t(!1),oe=t(U),ie=t(W),ce=t(X);a(()=>{oe.current=U,ie.current=W,ce.current=X},[W,U,X]);const[se,le]=p(()=>({y:0,ready:0,maxHeight:0,minSnap:0,maxSnap:0})),ue=t(null),de=t(null),pe=t(null),ye=t(null),me=t(null),ge=t(null),ve=t(0),Se=t(),fe=t(!1),he=function(){const e=s(()=>"undefined"!=typeof window?window.matchMedia("(prefers-reduced-motion: reduce)"):null,[]),n=t(null==e?void 0:e.matches);return r(n.current?"reduce":"no-preference"),a(()=>{const t=e=>{n.current=e.matches};return null==e||e.addListener(t),()=>null==e?void 0:e.removeListener(t)},[e]),n}(),Ee=function({targetRef:e,enabled:n,reserveScrollBarGap:o}){const i=t({activate:()=>{throw new TypeError("Tried to activate scroll lock too early")},deactivate:()=>{}});return r(n?"Enabled":"Disabled"),a(()=>{if(!n)return i.current.deactivate(),void(i.current={activate:()=>{},deactivate:()=>{}});const t=e.current;let r=!1;i.current={activate:()=>{r||(r=!0,h(t,{allowTouchMove:e=>e.closest("[data-body-scroll-lock-ignore]"),reserveScrollBarGap:o}))},deactivate:()=>{r&&(r=!1,E(t))}}},[n,e,o]),i}({targetRef:de,enabled:te&&J,reserveScrollBarGap:_}),be=function({targetRef:e,enabled:n}){const o=t({activate:()=>{throw new TypeError("Tried to activate aria hider too early")},deactivate:()=>{}});return r(n?"Enabled":"Disabled"),a(()=>{if(!n)return o.current.deactivate(),void(o.current={activate:()=>{},deactivate:()=>{}});const t=e.current;let r=!1,a=[],i=[];o.current={activate:()=>{if(r)return;r=!0;const e=t.parentNode;document.querySelectorAll("body > *").forEach(n=>{if(n===e)return;let t=n.getAttribute("aria-hidden");null!==t&&"false"!==t||(a.push(t),i.push(n),n.setAttribute("aria-hidden","true"))})},deactivate:()=>{r&&(r=!1,i.forEach((e,n)=>{let t=a[n];null===t?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t)}),a=[],i=[])}}},[e,n]),o}({targetRef:ue,enabled:te&&K}),Re=function({targetRef:e,fallbackRef:n,initialFocusRef:o,enabled:i}){const c=t({activate:()=>{throw new TypeError("Tried to activate focus trap too early")},deactivate:()=>{}});return r(i?"Enabled":"Disabled"),a(()=>{if(!i)return c.current.deactivate(),void(c.current={activate:()=>{},deactivate:()=>{}});const t=n.current,r=f(e.current,{onActivate:void 0,initialFocus:o?()=>(null==o?void 0:o.current)||t:void 0,fallbackFocus:t,escapeDeactivates:!1,clickOutsideDeactivates:!1});let a=!1;c.current={activate:async()=>{a||(a=!0,await r.activate(),await new Promise(e=>setTimeout(()=>e(void 0),0)))},deactivate:()=>{a&&(a=!1,r.deactivate())}}},[i,n,o,e]),c}({targetRef:ue,fallbackRef:ge,initialFocusRef:A||void 0,enabled:te&&K&&!1!==A}),{minSnap:we,maxSnap:xe,maxHeight:Ce,findSnap:Oe}=function({contentRef:e,controlledMaxHeight:n,footerEnabled:o,footerRef:c,getSnapPoints:l,headerEnabled:u,headerRef:d,heightRef:p,lastSnapRef:y,ready:m,registerReady:g,resizeSourceRef:v}){const{maxHeight:S,minHeight:f,headerHeight:h,footerHeight:E}=function({contentRef:e,controlledMaxHeight:n,footerEnabled:o,footerRef:c,headerEnabled:l,headerRef:u,registerReady:d,resizeSourceRef:p}){const y=s(()=>d("contentHeight"),[d]),m=function(e,n,o){const c=s(()=>n("maxHeight"),[n]),[l,u]=i(()=>H(e)||"undefined"!=typeof window?window.innerHeight:0),d=l>0,p=t(0);return r(e?"controlled":"auto"),a(()=>{d&&c()},[d,c]),O(()=>{if(e)return u(H(e)),void(o.current="maxheightprop");const n=()=>{p.current||(p.current=requestAnimationFrame(()=>{u(window.innerHeight),o.current="window",p.current=0}))};return window.addEventListener("resize",n),u(window.innerHeight),o.current="window",c(),()=>{window.removeEventListener("resize",n),cancelAnimationFrame(p.current)}},[e,c,o]),l}(n,d,p),g=k(u,{label:"headerHeight",enabled:l,resizeSourceRef:p}),v=k(e,{label:"contentHeight",enabled:!0,resizeSourceRef:p}),S=k(c,{label:"footerHeight",enabled:o,resizeSourceRef:p}),f=Math.min(m-g-S,v)+g+S;r(`minHeight: ${f}`);const h=v>0;return a(()=>{h&&y()},[h,y]),{maxHeight:m,minHeight:f,headerHeight:g,footerHeight:S}}({contentRef:e,controlledMaxHeight:n,footerEnabled:o,footerRef:c,headerEnabled:u,headerRef:d,registerReady:g,resizeSourceRef:v}),{snapPoints:b,minSnap:R,maxSnap:w}=function(e,n){const t=[].concat(e).map(H).reduce((e,t)=>(e.add(N(t,0,n)),e),new Set),r=Array.from(t),a=Math.min(...r);if(Number.isNaN(a))throw new TypeError("minSnap is NaN");const o=Math.max(...r);if(Number.isNaN(o))throw new TypeError("maxSnap is NaN");return{snapPoints:r,minSnap:a,maxSnap:o}}(m?l({height:p.current,footerHeight:E,headerHeight:h,minHeight:f,maxHeight:S}):[0],S);return r(`minSnap: ${R}, maxSnap:${w}`),{minSnap:R,maxSnap:w,findSnap:function(e){let n;n="function"==typeof e?e({footerHeight:E,headerHeight:h,height:p.current,minHeight:f,maxHeight:S,snapPoints:b,lastSnap:y.current}):e;const t=H(n);return b.reduce((e,n)=>Math.abs(n-t)<Math.abs(e-t)?n:e,R)},maxHeight:S}}({contentRef:pe,controlledMaxHeight:q,footerEnabled:!!R,footerRef:me,getSnapPoints:Y,headerEnabled:!1!==w,headerRef:ye,heightRef:ve,lastSnapRef:P,ready:te,registerReady:re,resizeSourceRef:Se}),Ne=t(Ce),He=t(we),De=t(xe),ke=t(Oe),ze=t(0);O(()=>{Ne.current=Ce,De.current=xe,He.current=we,ke.current=Oe,ze.current=Oe(V)},[Oe,V,Ce,xe,we]);const Pe=c(e=>{let{onRest:n,config:{velocity:t=1}={}}=e,r=C(e.config,M),a=C(e,I);return new Promise(e=>le(x({},a,{config:x({velocity:t},r,{mass:1,tension:F,friction:Math.max(G,G+(G-G*t))}),onRest:(...t)=>{e(...t),null==n||n(...t)}})))},[le]),[Ae,Le]=d(L,{devTools:!1,actions:{onOpenCancel:c(()=>null==ie.current?void 0:ie.current({type:"OPEN"}),[]),onSnapCancel:c(e=>null==ie.current?void 0:ie.current({type:"SNAP",source:e.snapSource}),[]),onCloseCancel:c(()=>null==ie.current?void 0:ie.current({type:"CLOSE"}),[]),onResizeCancel:c(()=>null==ie.current?void 0:ie.current({type:"RESIZE",source:Se.current}),[]),onOpenEnd:c(()=>null==ce.current?void 0:ce.current({type:"OPEN"}),[]),onSnapEnd:c((e,n)=>null==ce.current?void 0:ce.current({type:"SNAP",source:e.snapSource}),[]),onResizeEnd:c(()=>null==ce.current?void 0:ce.current({type:"RESIZE",source:Se.current}),[])},context:{initialState:z},services:{onSnapStart:c(async(e,n)=>null==oe.current?void 0:oe.current({type:"SNAP",source:n.payload.source||"custom"}),[]),onOpenStart:c(async()=>null==oe.current?void 0:oe.current({type:"OPEN"}),[]),onCloseStart:c(async()=>null==oe.current?void 0:oe.current({type:"CLOSE"}),[]),onResizeStart:c(async()=>null==oe.current?void 0:oe.current({type:"RESIZE",source:Se.current}),[]),onSnapEnd:c(async(e,n)=>null==ce.current?void 0:ce.current({type:"SNAP",source:e.snapSource}),[]),onOpenEnd:c(async()=>null==ce.current?void 0:ce.current({type:"OPEN"}),[]),onCloseEnd:c(async()=>null==ce.current?void 0:ce.current({type:"CLOSE"}),[]),onResizeEnd:c(async()=>null==ce.current?void 0:ce.current({type:"RESIZE",source:Se.current}),[]),renderVisuallyHidden:c(async(e,n)=>{await Pe({y:ze.current,ready:0,maxHeight:Ne.current,maxSnap:De.current,minSnap:ze.current,immediate:!0})},[Pe]),activate:c(async(e,n)=>{ae.current=!0,await Promise.all([Ee.current.activate(),Re.current.activate(),be.current.activate()])},[be,Re,Ee]),deactivate:c(async()=>{Ee.current.deactivate(),Re.current.deactivate(),be.current.deactivate(),ae.current=!1},[be,Re,Ee]),openImmediately:c(async()=>{ve.current=ze.current,await Pe({y:ze.current,ready:1,maxHeight:Ne.current,maxSnap:De.current,minSnap:ze.current,immediate:!0})},[Pe]),openSmoothly:c(async()=>{await Pe({y:0,ready:1,maxHeight:Ne.current,maxSnap:De.current,minSnap:ze.current,immediate:!0}),ve.current=ze.current,await Pe({y:ze.current,ready:1,maxHeight:Ne.current,maxSnap:De.current,minSnap:ze.current,immediate:he.current})},[Pe,he]),snapSmoothly:c(async(e,n)=>{const t=ke.current(e.y);ve.current=t,P.current=t,await Pe({y:t,ready:1,maxHeight:Ne.current,maxSnap:De.current,minSnap:He.current,immediate:he.current,config:{velocity:e.velocity}})},[Pe,P,he]),resizeSmoothly:c(async()=>{const e=ke.current(ve.current);ve.current=e,P.current=e,await Pe({y:e,ready:1,maxHeight:Ne.current,maxSnap:De.current,minSnap:He.current,immediate:"element"!==Se.current||he.current})},[Pe,P,he]),closeSmoothly:c(async(e,n)=>{Pe({minSnap:ve.current,immediate:!0}),ve.current=0,await Pe({y:0,maxHeight:Ne.current,maxSnap:De.current,immediate:he.current}),await Pe({ready:0,immediate:!0})},[Pe,he])}});a(()=>{te&&Le(D?"OPEN":"CLOSE")},[D,Le,te]),O(()=>{(Ce||xe||we)&&Le("RESIZE")},[Ce,xe,we,Le]),a(()=>()=>{Ee.current.deactivate(),Re.current.deactivate(),be.current.deactivate()},[be,Re,Ee]),l(o,()=>({snapTo:(e,{velocity:n=1,source:t="custom"}={})=>{Le("SNAP",{payload:{y:ke.current(e),velocity:n,source:t}})},get height(){return ve.current}}),[Le]);const Te=t(null);a(()=>{const e=de.current,n=e=>{if(fe.current){if(Te.current){var n,t;const r=(null==(n=e.touches)?void 0:n[0].pageY)-(null==(t=Te.current.touches)?void 0:t[0].pageY);if(Math.abs(r)<2)return}e.preventDefault()}},t=n=>{Te.current=n,e.scrollTop<0&&(requestAnimationFrame(()=>{e.style.overflow="hidden",e.scrollTop=0,e.style.removeProperty("overflow")}),n.preventDefault())},r=()=>{Te.current=null};return ee&&(e.addEventListener("scroll",n),e.addEventListener("touchmove",n),e.addEventListener("touchstart",t),e.addEventListener("touchend",r)),()=>{e.removeEventListener("scroll",n),e.removeEventListener("touchmove",n),e.removeEventListener("touchstart",t),e.removeEventListener("touchend",r)}},[ee,de]);const Me=v(({args:[{closeOnTap:e=!1,isContentDragging:n=!1}={}]=[],cancel:t,direction:[,r],down:a,first:o,last:i,memo:c=se.y.getValue(),movement:[,s],tap:l,velocity:u})=>{const d=-1*s;if(!ae.current)return t(),c;if(Z&&e&&l)return t(),setTimeout(()=>Z(),0),c;if(l)return c;const p=c+d,y=d*u,m=Math.max(He.current,Math.min(De.current,p+2*y));if(!a&&Z&&r>0&&p+y<He.current/2)return t(),Z(),c;let g=a?Z||He.current!==De.current?S(p,Z?0:He.current,De.current,.55):p<He.current?S(p,He.current,2*De.current,.55):S(p,He.current/2,De.current,.55):m;return ee&&n?(g>=De.current&&(g=De.current),c===De.current&&de.current.scrollTop>0&&(g=De.current),fe.current=g<De.current):fe.current=!1,o&&Le("DRAG"),i?(Le("SNAP",{payload:{y:g,velocity:u>.05?u:1,source:"dragging"}}),c):(le({y:g,ready:1,maxHeight:Ne.current,maxSnap:De.current,minSnap:He.current,immediate:!0,config:{velocity:u}}),c)},{filterTaps:!0});if(Number.isNaN(De.current))throw new TypeError("maxSnapRef is NaN!!");if(Number.isNaN(He.current))throw new TypeError("minSnapRef is NaN!!");const Ie=function({spring:e}){const n=y([e.y,e.maxHeight],(e,n)=>`${Math.round(N(n-e,0,16))}px`),t=y([e.y,e.minSnap,e.maxSnap],(e,n,t)=>`${N(e,n,t)}px`),r=y([e.y,e.minSnap,e.maxSnap],(e,n,t)=>e<n?n-e+"px":e>t?t-e+"px":"0px"),a=y([e.y,e.maxSnap],(e,n)=>e>=n?Math.ceil(e-n):0);return{"--rsbs-content-opacity":y([e.y,e.minSnap],(e,n)=>{if(!n)return 0;const t=Math.max(n/2-45,0);return N((e-t)*(1/(Math.min(n/2+45,n)-t)+0),0,1)}),"--rsbs-backdrop-opacity":y([e.y,e.minSnap],(e,n)=>n?N(e/n,0,1):0),"--rsbs-antigap-scale-y":a,"--rsbs-overlay-translate-y":r,"--rsbs-overlay-rounded":n,"--rsbs-overlay-h":t}}({spring:se});/*#__PURE__*/return n.createElement(m.div,x({},ne,{"data-rsbs-root":!0,"data-rsbs-state":B.find(Ae.matches),"data-rsbs-is-blocking":K,"data-rsbs-is-dismissable":!!Z,"data-rsbs-has-header":!!w,"data-rsbs-has-footer":!!R,className:b,ref:ue,style:x({},Ie,Q,{opacity:se.ready})}),g,K&&/*#__PURE__*/n.createElement("div",x({key:"backdrop","data-rsbs-backdrop":!0},Me({closeOnTap:!0}))),/*#__PURE__*/n.createElement("div",{key:"overlay","aria-modal":"true",role:"dialog","data-rsbs-overlay":!0,tabIndex:-1,ref:ge,onKeyDown:e=>{"Escape"===e.key&&(e.stopPropagation(),Z&&Z())}},!1!==w&&/*#__PURE__*/n.createElement("div",x({key:"header","data-rsbs-header":!0,ref:ye},Me()),w),/*#__PURE__*/n.createElement("div",x({key:"scroll","data-rsbs-scroll":!0,ref:de},ee?Me({isContentDragging:!0}):{}),/*#__PURE__*/n.createElement("div",{"data-rsbs-content":!0,ref:pe},u)),R&&/*#__PURE__*/n.createElement("div",x({key:"footer",ref:me,"data-rsbs-footer":!0},Me()),R)))}),B=["closed","opening","open","closing","dragging","snapping","resizing"];function $({snapPoints:e,lastSnap:n}){return null!=n?n:Math.min(...e)}function j({minHeight:e}){return e}const q=["onSpringStart","onSpringEnd","skipInitialTransition"],V=u(function(r,a){let{onSpringStart:o,onSpringEnd:s,skipInitialTransition:l}=r,u=C(r,q);const[d,p]=i(!1),y=t(),m=t(null),g=t(l&&u.open?"OPEN":"CLOSED");O(()=>{if(u.open)return cancelAnimationFrame(y.current),p(!0),()=>{g.current="CLOSED"}},[u.open]);const v=c(async function(e){await(null==o?void 0:o(e)),"OPEN"===e.type&&cancelAnimationFrame(y.current)},[o]),S=c(async function(e){await(null==s?void 0:s(e)),"CLOSE"===e.type&&(y.current=requestAnimationFrame(()=>p(!1)))},[s]);return d?/*#__PURE__*/n.createElement(e,{"data-rsbs-portal":!0},/*#__PURE__*/n.createElement(Z,x({},u,{lastSnapRef:m,ref:a,initialState:g.current,onSpringStart:v,onSpringEnd:S}))):null});export{V as BottomSheet};
//# sourceMappingURL=index.modern.js.map
