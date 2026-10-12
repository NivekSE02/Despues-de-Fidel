import{r as a}from"./index.CVf8TyFT.js";var l={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=a,w=Symbol.for("react.element"),x=Symbol.for("react.fragment"),k=Object.prototype.hasOwnProperty,E=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function c(t,e,s){var r,o={},n=null,u=null;s!==void 0&&(n=""+s),e.key!==void 0&&(n=""+e.key),e.ref!==void 0&&(u=e.ref);for(r in e)k.call(e,r)&&!b.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:w,type:t,key:n,ref:u,props:o,_owner:E.current}}i.Fragment=x;i.jsx=c;i.jsxs=c;l.exports=i;var O=l.exports;/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.321.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),g=(t,e)=>{const s=a.forwardRef(({color:r="currentColor",size:o=24,strokeWidth:n=2,absoluteStrokeWidth:u,className:f="",children:p,...m},_)=>a.createElement("svg",{ref:_,...h,width:o,height:o,stroke:r,strokeWidth:u?Number(n)*24/Number(o):n,className:["lucide",`lucide-${R(t)}`,f].join(" "),...m},[...e.map(([d,y])=>a.createElement(d,y)),...Array.isArray(p)?p:[p]]));return s.displayName=`${t}`,s};export{g as c,O as j};
