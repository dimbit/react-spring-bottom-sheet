var e=require("@reach/portal"),n=require("react"),r=require("@xstate/react"),t=require("react-spring"),o=require("react-use-gesture"),a=require("focus-trap"),i=require("body-scroll-lock"),c=require("@juggle/resize-observer"),u=require("xstate");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=/*#__PURE__*/s(e),f=/*#__PURE__*/s(n);function d(){return d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},d.apply(this,arguments)}function v(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n.indexOf(r=a[t])>=0||(o[r]=e[r]);return o}var p="undefined"!=typeof window?n.useLayoutEffect:n.useEffect;function m(e,n,r){return n=(n=+n)==n?n:0,r=(r=+r)==r?r:0,(e=+e)==e&&(e=(e=e<=r?e:r)>=n?e:n),e}function y(e){var n=Math.round(e);if(Number.isNaN(e))throw new TypeError("Found a NaN! Check your snapPoints / defaultSnap / snapTo ");return n}var h={box:"border-box"};function g(e,r){var t=r.label,o=r.enabled,a=r.resizeSourceRef,i=n.useState(0),u=i[0],s=i[1];n.useDebugValue(t+": "+u);var l=n.useCallback(function(e){s(e[0].borderBoxSize[0].blockSize),a.current="element"},[a]);return p(function(){if(e.current&&o){var n=new c.ResizeObserver(l);return n.observe(e.current,h),function(){n.disconnect()}}},[e,l,o]),o?u:0}function S(e){return void 0===e&&(e=1e3),new Promise(function(n){return setTimeout(n,e)})}var b={DRAG:{target:"#overlay.dragging",actions:"onOpenEnd"}},E={RESIZE:{target:"#overlay.resizing",actions:"onOpenEnd"}},P=u.Machine({id:"overlay",initial:"closed",context:{initialState:"CLOSED"},states:{closed:{on:{OPEN:"opening",CLOSE:void 0}},opening:{initial:"start",states:{start:{invoke:{src:"onOpenStart",onDone:"transition"}},transition:{always:[{target:"immediately",cond:"initiallyOpen"},{target:"smoothly",cond:"initiallyClosed"}]},immediately:{initial:"open",states:{open:{invoke:{src:"openImmediately",onDone:"activating"}},activating:{invoke:{src:"activate",onDone:"#overlay.opening.end"},on:d({},b,E)}}},smoothly:{initial:"visuallyHidden",states:{visuallyHidden:{invoke:{src:"renderVisuallyHidden",onDone:"activating"}},activating:{invoke:{src:"activate",onDone:"open"}},open:{invoke:{src:"openSmoothly",onDone:"#overlay.opening.end"},on:d({},b,E)}}},end:{invoke:{src:"onOpenEnd",onDone:"done"},on:{CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:d({},{CLOSE:{target:"#overlay.closing",actions:"onOpenCancel"}}),onDone:"open"},open:{on:{DRAG:"#overlay.dragging",SNAP:"snapping",RESIZE:"resizing"}},dragging:{on:{SNAP:"snapping"}},snapping:{initial:"start",states:{start:{invoke:{src:"onSnapStart",onDone:"snappingSmoothly"},entry:[u.assign({y:function(e,n){return n.payload.y},velocity:function(e,n){return n.payload.velocity},snapSource:function(e,n){var r=n.payload.source;return void 0===r?"custom":r}})]},snappingSmoothly:{invoke:{src:"snapSmoothly",onDone:"end"}},end:{invoke:{src:"onSnapEnd",onDone:"done"},on:{RESIZE:"#overlay.resizing",SNAP:"#overlay.snapping",CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:{SNAP:{target:"snapping",actions:"onSnapEnd"},RESIZE:{target:"#overlay.resizing",actions:"onSnapCancel"},DRAG:{target:"#overlay.dragging",actions:"onSnapCancel"},CLOSE:{target:"#overlay.closing",actions:"onSnapCancel"}},onDone:"open"},resizing:{initial:"start",states:{start:{invoke:{src:"onResizeStart",onDone:"resizingSmoothly"}},resizingSmoothly:{invoke:{src:"resizeSmoothly",onDone:"end"}},end:{invoke:{src:"onResizeEnd",onDone:"done"},on:{SNAP:"#overlay.snapping",CLOSE:"#overlay.closing",DRAG:"#overlay.dragging"}},done:{type:"final"}},on:{RESIZE:{target:"resizing",actions:"onResizeEnd"},SNAP:{target:"snapping",actions:"onResizeCancel"},DRAG:{target:"#overlay.dragging",actions:"onResizeCancel"},CLOSE:{target:"#overlay.closing",actions:"onResizeCancel"}},onDone:"open"},closing:{initial:"start",states:{start:{invoke:{src:"onCloseStart",onDone:"deactivating"},on:{OPEN:{target:"#overlay.open",actions:"onCloseCancel"}}},deactivating:{invoke:{src:"deactivate",onDone:"closingSmoothly"}},closingSmoothly:{invoke:{src:"closeSmoothly",onDone:"end"}},end:{invoke:{src:"onCloseEnd",onDone:"done"},on:{OPEN:{target:"#overlay.opening",actions:"onCloseCancel"}}},done:{type:"final"}},on:{CLOSE:void 0,OPEN:{target:"#overlay.opening",actions:"onCloseCancel"}},onDone:"closed"}},on:{CLOSE:"closing"}},{actions:{onOpenCancel:function(e,n){},onSnapCancel:function(e,n){},onResizeCancel:function(e,n){},onCloseCancel:function(e,n){},onOpenEnd:function(e,n){},onSnapEnd:function(e,n){},onRezizeEnd:function(e,n){}},services:{onSnapStart:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onOpenStart:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onCloseStart:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onResizeStart:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onSnapEnd:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onOpenEnd:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onCloseEnd:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},onResizeEnd:function(){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},renderVisuallyHidden:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},activate:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},deactivate:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},openSmoothly:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},openImmediately:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},snapSmoothly:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},resizeSmoothly:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}},closeSmoothly:function(e,n){try{return Promise.resolve(S()).then(function(){})}catch(e){return Promise.reject(e)}}},guards:{initiallyClosed:function(e){return"CLOSED"===e.initialState},initiallyOpen:function(e){return"OPEN"===e.initialState}}}),R=["children","sibling","className","footer","header","open","initialState","lastSnapRef","initialFocusRef","onDismiss","maxHeight","defaultSnap","snapPoints","blocking","scrollLocking","style","onSpringStart","onSpringCancel","onSpringEnd","reserveScrollBarGap","expandOnContentDrag","onScroll"],C=["velocity"],k=["onRest","config"],x=t.config.default,O=x.tension,D=x.friction,N=f.default.forwardRef(function(e,c){var u=e.children,s=e.sibling,l=e.className,h=e.footer,S=e.header,b=e.open,E=e.initialState,x=e.lastSnapRef,N=e.initialFocusRef,j=e.onDismiss,A=e.maxHeight,L=e.defaultSnap,M=void 0===L?H:L,T=e.snapPoints,I=void 0===T?z:T,F=e.blocking,q=void 0===F||F,B=e.scrollLocking,G=void 0===B||B,V=e.style,Z=e.onSpringStart,Y=e.onSpringCancel,K=e.onSpringEnd,J=e.reserveScrollBarGap,Q=void 0===J?q:J,U=e.expandOnContentDrag,W=void 0!==U&&U,X=e.onScroll,$=v(e,R),_=function(){var e=n.useState(!1),r=e[0],t=e[1],o=n.useState({}),a=o[0],i=o[1],c=n.useCallback(function(e){return i(function(n){var r;return d({},n,((r={})[e]=!1,r))}),function(){i(function(n){var r;return d({},n,((r={})[e]=!0,r))})}},[]);return n.useEffect(function(){var e=Object.values(a);0!==e.length&&e.every(Boolean)&&t(!0)},[a]),{ready:r,registerReady:c}}(),ee=_.ready,ne=_.registerReady,re=n.useRef(!1),te=n.useRef(Z),oe=n.useRef(Y),ae=n.useRef(K);n.useEffect(function(){te.current=Z,oe.current=Y,ae.current=K},[Y,Z,K]);var ie,ce,ue=t.useSpring(function(){return{y:0,ready:0,maxHeight:0,minSnap:0,maxSnap:0}}),se=ue[0],le=ue[1],fe=n.useRef(null),de=n.useRef(null),ve=n.useRef(null),pe=n.useRef(null),me=n.useRef(null),ye=n.useRef(null),he=n.useRef(0),ge=n.useRef(),Se=n.useRef(!1),be=(ie=n.useMemo(function(){return"undefined"!=typeof window?window.matchMedia("(prefers-reduced-motion: reduce)"):null},[]),ce=n.useRef(null==ie?void 0:ie.matches),n.useDebugValue(ce.current?"reduce":"no-preference"),n.useEffect(function(){var e=function(e){ce.current=e.matches};return null==ie||ie.addListener(e),function(){return null==ie?void 0:ie.removeListener(e)}},[ie]),ce),Ee=function(e){var r=e.targetRef,t=e.enabled,o=e.reserveScrollBarGap,a=n.useRef({activate:function(){throw new TypeError("Tried to activate scroll lock too early")},deactivate:function(){}});return n.useDebugValue(t?"Enabled":"Disabled"),n.useEffect(function(){if(!t)return a.current.deactivate(),void(a.current={activate:function(){},deactivate:function(){}});var e=r.current,n=!1;a.current={activate:function(){n||(n=!0,i.disableBodyScroll(e,{allowTouchMove:function(e){return e.closest("[data-body-scroll-lock-ignore]")},reserveScrollBarGap:o}))},deactivate:function(){n&&(n=!1,i.enableBodyScroll(e))}}},[t,r,o]),a}({targetRef:de,enabled:ee&&G,reserveScrollBarGap:Q}),Pe=function(e){var r=e.targetRef,t=e.enabled,o=n.useRef({activate:function(){throw new TypeError("Tried to activate aria hider too early")},deactivate:function(){}});return n.useDebugValue(t?"Enabled":"Disabled"),n.useEffect(function(){if(!t)return o.current.deactivate(),void(o.current={activate:function(){},deactivate:function(){}});var e=r.current,n=!1,a=[],i=[];o.current={activate:function(){if(!n){n=!0;var r=e.parentNode;document.querySelectorAll("body > *").forEach(function(e){if(e!==r){var n=e.getAttribute("aria-hidden");null!==n&&"false"!==n||(a.push(n),i.push(e),e.setAttribute("aria-hidden","true"))}})}},deactivate:function(){n&&(n=!1,i.forEach(function(e,n){var r=a[n];null===r?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r)}),a=[],i=[])}}},[r,t]),o}({targetRef:fe,enabled:ee&&q}),Re=function(e){var r=e.targetRef,t=e.fallbackRef,o=e.initialFocusRef,i=e.enabled,c=n.useRef({activate:function(){throw new TypeError("Tried to activate focus trap too early")},deactivate:function(){}});return n.useDebugValue(i?"Enabled":"Disabled"),n.useEffect(function(){if(!i)return c.current.deactivate(),void(c.current={activate:function(){},deactivate:function(){}});var e=t.current,n=a.createFocusTrap(r.current,{onActivate:void 0,initialFocus:o?function(){return(null==o?void 0:o.current)||e}:void 0,fallbackFocus:e,escapeDeactivates:!1,clickOutsideDeactivates:!1}),u=!1;c.current={activate:function(){try{return u?Promise.resolve():(u=!0,Promise.resolve(n.activate()).then(function(){return Promise.resolve(new Promise(function(e){return setTimeout(function(){return e(void 0)},0)})).then(function(){})}))}catch(e){return Promise.reject(e)}},deactivate:function(){u&&(u=!1,n.deactivate())}}},[i,t,o,r]),c}({targetRef:fe,fallbackRef:ye,initialFocusRef:N||void 0,enabled:ee&&q&&!1!==N}),Ce=function(e){var r=e.getSnapPoints,t=e.heightRef,o=e.lastSnapRef,a=e.ready,i=function(e){var r=e.contentRef,t=e.controlledMaxHeight,o=e.footerEnabled,a=e.footerRef,i=e.headerEnabled,c=e.headerRef,u=e.registerReady,s=e.resizeSourceRef,l=n.useMemo(function(){return u("contentHeight")},[u]),f=function(e,r,t){var o=n.useMemo(function(){return r("maxHeight")},[r]),a=n.useState(function(){return y(e)||"undefined"!=typeof window?window.innerHeight:0}),i=a[0],c=a[1],u=i>0,s=n.useRef(0);return n.useDebugValue(e?"controlled":"auto"),n.useEffect(function(){u&&o()},[u,o]),p(function(){if(e)return c(y(e)),void(t.current="maxheightprop");var n=function(){s.current||(s.current=requestAnimationFrame(function(){c(window.innerHeight),t.current="window",s.current=0}))};return window.addEventListener("resize",n),c(window.innerHeight),t.current="window",o(),function(){window.removeEventListener("resize",n),cancelAnimationFrame(s.current)}},[e,o,t]),i}(t,u,s),d=g(c,{label:"headerHeight",enabled:i,resizeSourceRef:s}),v=g(r,{label:"contentHeight",enabled:!0,resizeSourceRef:s}),m=g(a,{label:"footerHeight",enabled:o,resizeSourceRef:s}),h=Math.min(f-d-m,v)+d+m;n.useDebugValue("minHeight: "+h);var S=v>0;return n.useEffect(function(){S&&l()},[S,l]),{maxHeight:f,minHeight:h,headerHeight:d,footerHeight:m}}({contentRef:e.contentRef,controlledMaxHeight:e.controlledMaxHeight,footerEnabled:e.footerEnabled,footerRef:e.footerRef,headerEnabled:e.headerEnabled,headerRef:e.headerRef,registerReady:e.registerReady,resizeSourceRef:e.resizeSourceRef}),c=i.maxHeight,u=i.minHeight,s=i.headerHeight,l=i.footerHeight,f=function(e,n){var r=[].concat(e).map(y).reduce(function(e,r){return e.add(m(r,0,n)),e},new Set),t=Array.from(r),o=Math.min.apply(Math,t);if(Number.isNaN(o))throw new TypeError("minSnap is NaN");var a=Math.max.apply(Math,t);if(Number.isNaN(a))throw new TypeError("maxSnap is NaN");return{snapPoints:t,minSnap:o,maxSnap:a}}(a?r({height:t.current,footerHeight:l,headerHeight:s,minHeight:u,maxHeight:c}):[0],c),d=f.snapPoints,v=f.minSnap,h=f.maxSnap;return n.useDebugValue("minSnap: "+v+", maxSnap:"+h),{minSnap:v,maxSnap:h,findSnap:function(e){var n=y("function"==typeof e?e({footerHeight:l,headerHeight:s,height:t.current,minHeight:u,maxHeight:c,snapPoints:d,lastSnap:o.current}):e);return d.reduce(function(e,r){return Math.abs(r-n)<Math.abs(e-n)?r:e},v)},maxHeight:c}}({contentRef:ve,controlledMaxHeight:A,footerEnabled:!!h,footerRef:me,getSnapPoints:I,headerEnabled:!1!==S,headerRef:pe,heightRef:he,lastSnapRef:x,ready:ee,registerReady:ne,resizeSourceRef:ge}),ke=Ce.minSnap,xe=Ce.maxSnap,Oe=Ce.maxHeight,De=Ce.findSnap,Ne=n.useRef(Oe),we=n.useRef(ke),He=n.useRef(xe),ze=n.useRef(De),je=n.useRef(0);p(function(){Ne.current=Oe,He.current=xe,we.current=ke,ze.current=De,je.current=De(M)},[De,M,Oe,xe,ke]);var Ae=n.useCallback(function(e){var n=e.onRest,r=e.config,t=(r=void 0===r?{}:r).velocity,o=void 0===t?1:t,a=v(r,C),i=v(e,k);return new Promise(function(e){return le(d({},i,{config:d({velocity:o},a,{mass:1,tension:O,friction:Math.max(D,D+(D-D*o))}),onRest:function(){var r=[].slice.call(arguments);e.apply(void 0,r),null==n||n.apply(void 0,r)}}))})},[le]),Le=r.useMachine(P,{devTools:!1,actions:{onOpenCancel:n.useCallback(function(){return null==oe.current?void 0:oe.current({type:"OPEN"})},[]),onSnapCancel:n.useCallback(function(e){return null==oe.current?void 0:oe.current({type:"SNAP",source:e.snapSource})},[]),onCloseCancel:n.useCallback(function(){return null==oe.current?void 0:oe.current({type:"CLOSE"})},[]),onResizeCancel:n.useCallback(function(){return null==oe.current?void 0:oe.current({type:"RESIZE",source:ge.current})},[]),onOpenEnd:n.useCallback(function(){return null==ae.current?void 0:ae.current({type:"OPEN"})},[]),onSnapEnd:n.useCallback(function(e,n){return null==ae.current?void 0:ae.current({type:"SNAP",source:e.snapSource})},[]),onResizeEnd:n.useCallback(function(){return null==ae.current?void 0:ae.current({type:"RESIZE",source:ge.current})},[])},context:{initialState:E},services:{onSnapStart:n.useCallback(function(e,n){try{return Promise.resolve(null==te.current?void 0:te.current({type:"SNAP",source:n.payload.source||"custom"}))}catch(e){return Promise.reject(e)}},[]),onOpenStart:n.useCallback(function(){try{return Promise.resolve(null==te.current?void 0:te.current({type:"OPEN"}))}catch(e){return Promise.reject(e)}},[]),onCloseStart:n.useCallback(function(){try{return Promise.resolve(null==te.current?void 0:te.current({type:"CLOSE"}))}catch(e){return Promise.reject(e)}},[]),onResizeStart:n.useCallback(function(){try{return Promise.resolve(null==te.current?void 0:te.current({type:"RESIZE",source:ge.current}))}catch(e){return Promise.reject(e)}},[]),onSnapEnd:n.useCallback(function(e,n){try{return Promise.resolve(null==ae.current?void 0:ae.current({type:"SNAP",source:e.snapSource}))}catch(e){return Promise.reject(e)}},[]),onOpenEnd:n.useCallback(function(){try{return Promise.resolve(null==ae.current?void 0:ae.current({type:"OPEN"}))}catch(e){return Promise.reject(e)}},[]),onCloseEnd:n.useCallback(function(){try{return Promise.resolve(null==ae.current?void 0:ae.current({type:"CLOSE"}))}catch(e){return Promise.reject(e)}},[]),onResizeEnd:n.useCallback(function(){try{return Promise.resolve(null==ae.current?void 0:ae.current({type:"RESIZE",source:ge.current}))}catch(e){return Promise.reject(e)}},[]),renderVisuallyHidden:n.useCallback(function(e,n){try{return Promise.resolve(Ae({y:je.current,ready:0,maxHeight:Ne.current,maxSnap:He.current,minSnap:je.current,immediate:!0})).then(function(){})}catch(e){return Promise.reject(e)}},[Ae]),activate:n.useCallback(function(e,n){try{return re.current=!0,Promise.resolve(Promise.all([Ee.current.activate(),Re.current.activate(),Pe.current.activate()])).then(function(){})}catch(e){return Promise.reject(e)}},[Pe,Re,Ee]),deactivate:n.useCallback(function(){try{return Ee.current.deactivate(),Re.current.deactivate(),Pe.current.deactivate(),re.current=!1,Promise.resolve()}catch(e){return Promise.reject(e)}},[Pe,Re,Ee]),openImmediately:n.useCallback(function(){try{return he.current=je.current,Promise.resolve(Ae({y:je.current,ready:1,maxHeight:Ne.current,maxSnap:He.current,minSnap:je.current,immediate:!0})).then(function(){})}catch(e){return Promise.reject(e)}},[Ae]),openSmoothly:n.useCallback(function(){try{return Promise.resolve(Ae({y:0,ready:1,maxHeight:Ne.current,maxSnap:He.current,minSnap:je.current,immediate:!0})).then(function(){return he.current=je.current,Promise.resolve(Ae({y:je.current,ready:1,maxHeight:Ne.current,maxSnap:He.current,minSnap:je.current,immediate:be.current})).then(function(){})})}catch(e){return Promise.reject(e)}},[Ae,be]),snapSmoothly:n.useCallback(function(e,n){try{var r=ze.current(e.y);return he.current=r,x.current=r,Promise.resolve(Ae({y:r,ready:1,maxHeight:Ne.current,maxSnap:He.current,minSnap:we.current,immediate:be.current,config:{velocity:e.velocity}})).then(function(){})}catch(e){return Promise.reject(e)}},[Ae,x,be]),resizeSmoothly:n.useCallback(function(){try{var e=ze.current(he.current);return he.current=e,x.current=e,Promise.resolve(Ae({y:e,ready:1,maxHeight:Ne.current,maxSnap:He.current,minSnap:we.current,immediate:"element"!==ge.current||be.current})).then(function(){})}catch(e){return Promise.reject(e)}},[Ae,x,be]),closeSmoothly:n.useCallback(function(e,n){try{return Ae({minSnap:he.current,immediate:!0}),he.current=0,Promise.resolve(Ae({y:0,maxHeight:Ne.current,maxSnap:He.current,immediate:be.current})).then(function(){return Promise.resolve(Ae({ready:0,immediate:!0})).then(function(){})})}catch(e){return Promise.reject(e)}},[Ae,be])}}),Me=Le[0],Te=Le[1];n.useEffect(function(){ee&&Te(b?"OPEN":"CLOSE")},[b,Te,ee]),p(function(){(Oe||xe||ke)&&Te("RESIZE")},[Oe,xe,ke,Te]),n.useEffect(function(){return function(){Ee.current.deactivate(),Re.current.deactivate(),Pe.current.deactivate()}},[Pe,Re,Ee]),n.useImperativeHandle(c,function(){return{snapTo:function(e,n){var r=void 0===n?{}:n,t=r.velocity,o=void 0===t?1:t,a=r.source,i=void 0===a?"custom":a;Te("SNAP",{payload:{y:ze.current(e),velocity:o,source:i}})},get height(){return he.current}}},[Te]);var Ie=n.useRef(null);n.useEffect(function(){var e=de.current,n=function(e){if(Se.current){if(Ie.current){var n,r,t=(null==(n=e.touches)?void 0:n[0].pageY)-(null==(r=Ie.current.touches)?void 0:r[0].pageY);if(Math.abs(t)<2)return}e.preventDefault()}},r=function(n){Ie.current=n,e.scrollTop<0&&(requestAnimationFrame(function(){e.style.overflow="hidden",e.scrollTop=0,e.style.removeProperty("overflow")}),n.preventDefault())},t=function(){Ie.current=null};return W&&(e.addEventListener("scroll",n),e.addEventListener("touchmove",n),e.addEventListener("touchstart",r),e.addEventListener("touchend",t)),function(){e.removeEventListener("scroll",n),e.removeEventListener("touchmove",n),e.removeEventListener("touchstart",r),e.removeEventListener("touchend",t)}},[W,de]);var Fe=o.useDrag(function(e){var n=e.args,r=(n=void 0===n?[]:n)[0],t=(r=void 0===r?{}:r).closeOnTap,a=void 0!==t&&t,i=r.isContentDragging,c=void 0!==i&&i,u=e.cancel,s=e.direction[1],l=e.down,f=e.first,d=e.last,v=e.memo,p=void 0===v?se.y.getValue():v,m=e.tap,y=e.velocity,h=-1*e.movement[1];if(!re.current)return u(),p;if(j&&a&&m)return u(),setTimeout(function(){return j()},0),p;if(m)return p;var g=p+h,S=h*y,b=Math.max(we.current,Math.min(He.current,g+2*S));if(!l&&j&&s>0&&g+S<we.current/2)return u(),j(),p;var E=l?j||we.current!==He.current?o.rubberbandIfOutOfBounds(g,j?0:we.current,He.current,.55):g<we.current?o.rubberbandIfOutOfBounds(g,we.current,2*He.current,.55):o.rubberbandIfOutOfBounds(g,we.current/2,He.current,.55):b;return W&&c?(E>=He.current&&(E=He.current),p===He.current&&de.current.scrollTop>0&&(E=He.current),Se.current=E<He.current):Se.current=!1,f&&Te("DRAG"),d?(Te("SNAP",{payload:{y:E,velocity:y>.05?y:1,source:"dragging"}}),p):(le({y:E,ready:1,maxHeight:Ne.current,maxSnap:He.current,minSnap:we.current,immediate:!0,config:{velocity:y}}),p)},{filterTaps:!0});if(Number.isNaN(He.current))throw new TypeError("maxSnapRef is NaN!!");if(Number.isNaN(we.current))throw new TypeError("minSnapRef is NaN!!");var qe=function(e){var n,r=e.spring,o=t.interpolate([r.y,r.maxHeight],function(e,n){return Math.round(m(n-e,0,16))+"px"}),a=t.interpolate([r.y,r.minSnap,r.maxSnap],function(e,n,r){return m(e,n,r)+"px"}),i=t.interpolate([r.y,r.minSnap,r.maxSnap],function(e,n,r){return e<n?n-e+"px":e>r?r-e+"px":"0px"}),c=t.interpolate([r.y,r.maxSnap],function(e,n){return e>=n?Math.ceil(e-n):0}),u=t.interpolate([r.y,r.minSnap],function(e,n){if(!n)return 0;var r=Math.max(n/2-45,0);return m((e-r)*(1/(Math.min(n/2+45,n)-r)+0),0,1)}),s=t.interpolate([r.y,r.minSnap],function(e,n){return n?m(e/n,0,1):0});return(n={})["--rsbs-content-opacity"]=u,n["--rsbs-backdrop-opacity"]=s,n["--rsbs-antigap-scale-y"]=c,n["--rsbs-overlay-translate-y"]=i,n["--rsbs-overlay-rounded"]=o,n["--rsbs-overlay-h"]=a,n}({spring:se});/*#__PURE__*/return f.default.createElement(t.animated.div,d({},$,{"data-rsbs-root":!0,"data-rsbs-state":w.find(Me.matches),"data-rsbs-is-blocking":q,"data-rsbs-is-dismissable":!!j,"data-rsbs-has-header":!!S,"data-rsbs-has-footer":!!h,className:l,ref:fe,style:d({},qe,V,{opacity:se.ready})}),s,q&&/*#__PURE__*/f.default.createElement("div",d({key:"backdrop","data-rsbs-backdrop":!0},Fe({closeOnTap:!0}))),/*#__PURE__*/f.default.createElement("div",{key:"overlay","aria-modal":"true",role:"dialog","data-rsbs-overlay":!0,tabIndex:-1,ref:ye,onKeyDown:function(e){"Escape"===e.key&&(e.stopPropagation(),j&&j())}},!1!==S&&/*#__PURE__*/f.default.createElement("div",d({key:"header","data-rsbs-header":!0,ref:pe},Fe()),S),/*#__PURE__*/f.default.createElement("div",d({key:"scroll","data-rsbs-scroll":!0,onScroll:X,ref:de},W?Fe({isContentDragging:!0}):{}),/*#__PURE__*/f.default.createElement("div",{"data-rsbs-content":!0,ref:ve},u)),h&&/*#__PURE__*/f.default.createElement("div",d({key:"footer",ref:me,"data-rsbs-footer":!0},Fe()),h)))}),w=["closed","opening","open","closing","dragging","snapping","resizing"];function H(e){var n=e.lastSnap;return null!=n?n:Math.min.apply(Math,e.snapPoints)}function z(e){return e.minHeight}var j=["onSpringStart","onSpringEnd","skipInitialTransition"],A=n.forwardRef(function(e,r){var t=e.onSpringStart,o=e.onSpringEnd,a=e.skipInitialTransition,i=v(e,j),c=n.useState(!1),u=c[0],s=c[1],m=n.useRef(),y=n.useRef(null),h=n.useRef(a&&i.open?"OPEN":"CLOSED");p(function(){if(i.open)return cancelAnimationFrame(m.current),s(!0),function(){h.current="CLOSED"}},[i.open]);var g=n.useCallback(function(e){return Promise.resolve(null==t?void 0:t(e)).then(function(){"OPEN"===e.type&&cancelAnimationFrame(m.current)})},[t]),S=n.useCallback(function(e){return Promise.resolve(null==o?void 0:o(e)).then(function(){"CLOSE"===e.type&&(m.current=requestAnimationFrame(function(){return s(!1)}))})},[o]);return u?/*#__PURE__*/f.default.createElement(l.default,{"data-rsbs-portal":!0},/*#__PURE__*/f.default.createElement(N,d({},i,{lastSnapRef:y,ref:r,initialState:h.current,onSpringStart:g,onSpringEnd:S}))):null});exports.BottomSheet=A;
//# sourceMappingURL=index.js.map
