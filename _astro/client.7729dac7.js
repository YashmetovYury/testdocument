import{r as e}from"./index.03be2d59.js";import{r as E}from"./index.840e397f.js";var l,d,f=E;d=f.createRoot,l=f.hydrateRoot;const n=({value:t,name:r})=>t?e.createElement("astro-slot",{name:r,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:t}}):null;n.shouldComponentUpdate=()=>!1;function x(t){for(const r in t)if(r.startsWith("__reactContainer"))return r}const H=t=>(r,a,{default:o,...m},{client:p})=>{if(!t.hasAttribute("ssr"))return;const s={identifierPrefix:t.getAttribute("prefix")};for(const[u,y]of Object.entries(m))a[u]=e.createElement(n,{value:y,name:u});const i=e.createElement(r,a,o!=null?e.createElement(n,{value:o}):o),c=x(t);return c&&delete t[c],p==="only"?e.startTransition(()=>{d(t,s).render(i)}):e.startTransition(()=>{l(t,i,s)})};export{H as default};
