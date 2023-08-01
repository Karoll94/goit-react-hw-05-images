import{n as C,R as o,s as P,P as y,j as t,L as B,u as D,r as v,a as G,b as R,c as w,B as b,O as F,N as H}from"./index-efa7a843.js";import{C as k,a as O}from"./api-d1d0431c.js";import{T as d}from"./Typography-e4a9190f.js";const M=C("img")({width:200,height:"100%",objectFit:"cover",objectPosition:"center"}),A=C("ul")({listStyle:"none",display:"flex",padding:0,gap:"16px"});var E={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},L=o.createContext&&o.createContext(E),i=globalThis&&globalThis.__assign||function(){return i=Object.assign||function(e){for(var a,n=1,r=arguments.length;n<r;n++){a=arguments[n];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},i.apply(this,arguments)},$=globalThis&&globalThis.__rest||function(e,a){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)a.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n};function N(e){return e&&e.map(function(a,n){return o.createElement(a.tag,i({key:n},a.attr),N(a.child))})}function U(e){return function(a){return o.createElement(W,i({attr:i({},e.attr)},a),N(e.child))}}function W(e){var a=function(n){var r=e.attr,s=e.size,c=e.title,u=$(e,["attr","size","title"]),x=s||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),o.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,u,{className:l,style:i(i({color:e.color||n.color},n.style),e.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),c&&o.createElement("title",null,c),e.children)};return L!==void 0?o.createElement(L.Consumer,null,function(n){return a(n)}):a(E)}function q(e){return U({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}}]})(e)}const J=P(B)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
    scale: 1.2;
  }
`,S=({to:e,children:a})=>t.jsxs(J,{to:e,className:"back",children:[t.jsx(q,{size:"24"}),a]});S.propTypes={to:y.object,children:y.node};const K="https://image.tmdb.org/t/p/",I=P(H)`
  color: #1976d2;

  &.active {
    color: orange;
    scale: 1.3;
  }
`,Z=()=>{var p;const{movieId:e}=D(),[a,n]=v.useState({}),[r,s]=v.useState(!1),c=G(),u=((p=c.state)==null?void 0:p.from)??"/";v.useEffect(()=>{(async()=>{try{s(!0),await O.fakePromise(300);const h=await O.getMovieDetails(e);n(h)}catch(h){console.log(h)}finally{s(!1)}})()},[e]);const{title:x,name:l,release_date:m,overview:T,genres:g,poster_path:f,vote_average:_}=a,z=(_*10).toFixed(2);return t.jsx(t.Fragment,{children:r?t.jsx(R,{}):t.jsx(k,{children:t.jsxs("div",{children:[t.jsxs(w,{sx:{display:"flex",alignItems:"center",gap:2,overflow:"hidden",mt:5,p:2},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[t.jsx(S,{to:u,children:"Go Back"}),t.jsx(M,{src:f?`${K}w200${f}`:"https://via.placeholder.com/200/",alt:"mi imagen",width:200,sx:{height:"100%",objectFit:"cover"}}),!f&&t.jsx("p",{style:{textAlign:"center"},children:"Image not available"})]}),t.jsxs(b,{sx:{flexGrow:1,display:"grid",gap:1},children:[t.jsxs(d,{variant:"h5",children:[x||l," (",m==null?void 0:m.substring(0,4),")"]}),t.jsxs(d,{variant:"p",children:["User score: ",z,"%"]}),t.jsx(d,{variant:"h5",children:"Oveview"}),t.jsx(d,{variant:"p",children:T}),t.jsx(d,{variant:"h5",children:"Genres"}),t.jsx(A,{children:g&&g.length&&g.map(({id:j,name:h})=>t.jsx("li",{children:h},j))})]})]}),t.jsx(k,{maxWidth:"xs",children:t.jsx(w,{sx:{display:"flex",alignItems:"center",gap:2,overflow:"hidden",mt:2,p:2},children:t.jsxs(b,{sx:{flexGrow:1,display:"grid",gap:1},children:[t.jsx(d,{variant:"h5",children:"Additional Information"}),t.jsxs("ul",{style:{listStyle:"none"},children:[t.jsx("li",{children:t.jsx(I,{to:"cast",state:{...c.state},children:"Cast"})}),t.jsx("li",{children:t.jsx(I,{to:"reviews",state:{...c.state},children:"Reviews"})})]})]})})}),t.jsx(F,{})]})})})};export{Z as default};
