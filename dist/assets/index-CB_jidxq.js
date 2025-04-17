import{r as n,a as j}from"./vendor-YsBxPMQB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();var p={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=n,N=Symbol.for("react.element"),w=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,_=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function h(o,r,i){var a,t={},s=null,c=null;i!==void 0&&(s=""+i),r.key!==void 0&&(s=""+r.key),r.ref!==void 0&&(c=r.ref);for(a in r)C.call(r,a)&&!M.hasOwnProperty(a)&&(t[a]=r[a]);if(o&&o.defaultProps)for(a in r=o.defaultProps,r)t[a]===void 0&&(t[a]=r[a]);return{$$typeof:N,type:o,key:s,ref:c,props:t,_owner:_.current}}d.Fragment=w;d.jsx=h;d.jsxs=h;p.exports=d;var e=p.exports,x,u=j;x=u.createRoot,u.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var O={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),l=(o,r)=>{const i=n.forwardRef(({color:a="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:c,className:f="",children:m,...y},g)=>n.createElement("svg",{ref:g,...O,width:t,height:t,stroke:a,strokeWidth:c?Number(s)*24/Number(t):s,className:["lucide",`lucide-${A(o)}`,f].join(" "),...y},[...r.map(([b,v])=>n.createElement(b,v)),...Array.isArray(m)?m:[m]]));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=l("BrainCircuit",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=l("Code2",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=l("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=l("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=l("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]),q="/assets/accueil-BjYzpZMO.png",z=[{hashtag:"#Dev_web&mobile",description:"Du code de sortie: Sites web et apps mobiles performants, sur-mesure, et évolutifs.",icon:e.jsx(R,{className:"w-8 h-8"}),bgColor:"bg-orange-100"},{hashtag:"#Data&Tech",description:"Tech it real ! Comment ça marche ? On connecte les points pour vous.",icon:e.jsx(E,{className:"w-8 h-8"}),bgColor:"bg-blue-100"},{hashtag:"#Product_design",description:"Des interfaces qui décoiffent ! On dessine avec passion et on code ce qu'on dessine !",icon:e.jsx(L,{className:"w-8 h-8"}),bgColor:"bg-pink-100"},{hashtag:"#Product_management",description:"Un bon produit, c'est 80% de la réussite. On s'en occupe !",icon:e.jsx(D,{className:"w-8 h-8"}),bgColor:"bg-purple-100"}];function S(){return e.jsxs("div",{className:"min-h-screen bg-white font-inter",children:[e.jsxs("div",{className:"relative h-screen",children:[e.jsx("div",{className:"absolute inset-0",children:e.jsx("img",{src:q,alt:"Woman with VR headset",className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"relative h-full",children:[e.jsx("nav",{className:"container mx-auto px-6 py-6",children:e.jsx("div",{className:"text-white text-2xl font-bold",children:"Xamle"})}),e.jsxs("div",{className:"container mx-auto px-6 h-full flex flex-col justify-between",children:[e.jsx("div",{className:"pt-20",children:e.jsxs("h1",{className:"text-5xl md:text-7xl font-bold text-white mb-6",children:["Façonnons vos",e.jsx("br",{}),"succès ensemble !"]})}),e.jsx("div",{className:"pb-40",children:e.jsxs("a",{href:"mailto:contact@xamle.io?subject=Demande de devis&body=Bonjour,%0D%0A%0D%0AJe souhaite obtenir un devis pour mon projet.%0D%0A%0D%0AMerci de me recontacter pour en discuter.%0D%0A%0D%0ACordialement,",className:"inline-flex bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors items-center gap-2",children:["Je veux un devis ",e.jsx(P,{className:"w-5 h-5"})]})})]})]})]}),e.jsx("div",{className:"py-20 bg-gray-50",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsx("h2",{className:"text-4xl font-bold mb-8",children:"We are Xamle"}),e.jsx("p",{className:"text-xl text-gray-600 max-w-3xl",children:"Votre partenaire privilégié de CO-création qui transforme dans chaque étape de votre processus de transformation digital."}),e.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16",children:z.map((o,r)=>e.jsxs("div",{className:`${o.bgColor} rounded-3xl p-8 transition-transform hover:-translate-y-1`,children:[e.jsx("div",{className:"mb-4",children:o.icon}),e.jsx("h3",{className:"text-lg font-semibold mb-2",children:o.hashtag}),e.jsx("p",{className:"text-gray-700",children:o.description})]},r))})]})})]})}x(document.getElementById("root")).render(e.jsx(n.StrictMode,{children:e.jsx(S,{})}));
