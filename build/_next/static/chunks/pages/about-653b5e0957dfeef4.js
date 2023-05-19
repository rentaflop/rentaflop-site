(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{4364:function(e,r,n){"use strict";n.d(r,{Z:function(){return F}});var t=n(6509),o=n(1225),i=n(7294);n(5697);var a=n(6010),s=n(7828),l=n(6791),u=n(7890),d=n(3353),c=n(3831),h=n(7999),p=n(3412),f=n(934),g=n(8739),m=n(5664),y=n(742);function w(e){return(0,m.Z)("MuiLink",e)}let x=(0,y.Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]);var v=n(5893);let b=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=e=>Z[e]||e,k=e=>{let{classes:r,component:n,focusVisible:t,underline:o}=e,i={root:["root",`underline${(0,d.Z)(o)}`,"button"===n&&"button",t&&"focusVisible"]};return(0,s.Z)(i,w,r)},W=(0,c.ZP)(g.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{let{ownerState:n}=e;return[r.root,r[`underline${(0,d.Z)(n.underline)}`],"button"===n.component&&r.button]}})(({theme:e,ownerState:r})=>{let n=(0,l.D)(e,`palette.${j(r.color)}`)||r.color;return(0,o.Z)({},"none"===r.underline&&{textDecoration:"none"},"hover"===r.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===r.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==n?(0,u.Fq)(n,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===r.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${x.focusVisible}`]:{outline:"auto"}})}),D=i.forwardRef(function(e,r){let n=(0,h.Z)({props:e,name:"MuiLink"}),{className:s,color:l="primary",component:u="a",onBlur:d,onFocus:c,TypographyClasses:g,underline:m="always",variant:y="inherit"}=n,w=(0,t.Z)(n,b),{isFocusVisibleRef:x,onBlur:Z,onFocus:j,ref:D}=(0,p.Z)(),[F,_]=i.useState(!1),B=(0,f.Z)(r,D),N=e=>{Z(e),!1===x.current&&_(!1),d&&d(e)},C=e=>{j(e),!0===x.current&&_(!0),c&&c(e)},q=(0,o.Z)({},n,{color:l,component:u,focusVisible:F,underline:m,variant:y}),T=k(q);return(0,v.jsx)(W,(0,o.Z)({className:(0,a.Z)(T.root,s),classes:g,color:l,component:u,onBlur:N,onFocus:C,ref:B,ownerState:q,variant:y},w))});var F=D},512:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n(3842)}])},1871:function(e,r,n){"use strict";n.d(r,{Z:function(){return g}});var t=n(5893),o=n(7294),i=n(5017),a=n(5011),s=n(6720),l=n(7737),u=n(1565),d=n(1163),c=n.n(d),h=n(3443),p=n(9008),f=n.n(p);function g(e){return(0,o.useEffect)(function(){var e="User hit "+c().pathname;e=window.innerWidth>768?e:e+" from mobile device",(0,h.TW)(e,"INFO")},[]),(0,t.jsxs)(t.Fragment,{children:[e.title&&(0,t.jsxs)(f(),{children:[(0,t.jsx)("title",{children:e.title+" | rentaflop | Cloud Render Farm"}),(0,t.jsx)("meta",{property:"og:description",content:e.description},"og:description"),(0,t.jsx)("meta",{name:"description",content:e.description},"description")]}),(0,t.jsx)(l.Z,{theme:u.Z,children:(0,t.jsxs)("div",{className:"App",style:{backgroundColor:"#FBFBFB"},children:[(0,t.jsx)(s.ZP,{}),(0,t.jsx)(i.Z,{}),e.children,(0,t.jsx)(a.Z,{})]})})]})}},3842:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return d}});var t=n(5893);n(7294);var o=n(4364),i=n(8739),a=n(3264),s=n(3443),l=n(1871),u=(0,a.Z)(o.Z)({textDecoration:"none","&:hover":{textDecoration:"underline"}});function d(){var e=(0,t.jsx)(i.Z,{component:"h1",variant:"h4",align:"center",fontWeight:"600",gutterBottom:!0,children:"About Us"}),r=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Z,{component:"h2",variant:"h6",align:"left",fontWeight:"600",paddingTop:"24px",gutterBottom:!0,children:"Rentaflop helps 3D artists render animations faster and cheaper"}),(0,t.jsx)(i.Z,{align:"left",paragraph:!0,children:"Have your ever lowered the samples or resolution to meet a deadline? It's frustrating. Rentaflop render farm puts underutilized hardware to work rendering your projects so you can create animations without sacrificing quality. Our on-demand, cloud rendering service leverages graphics cards across the globe to give you fast and affordable rendering. You'll never have to worry about meeting your deadline or budget again!"}),(0,t.jsx)(i.Z,{component:"h2",variant:"h6",align:"left",fontWeight:"600",gutterBottom:!0,children:"Why we're unique"}),(0,t.jsx)(i.Z,{align:"left",paragraph:!0,children:"We're the only render farm that pays hardware providers around the world to render your work. Millions of underutilized graphics cards represent untapped potential for helping animators render their work faster and cheaper. When you render with rentaflop, you can either tap into these resources for maximum savings or utilize our own and trusted partners' hardware for added security."}),(0,t.jsx)(i.Z,{component:"h2",variant:"h6",align:"left",fontWeight:"600",gutterBottom:!0,children:"How it works"}),(0,t.jsx)(i.Z,{align:"left",paragraph:!0,children:"Like other render farms, but better. Simply upload your project, along with any assets. Our price calculator gives you the exact render price, render time estimate, and a few sample frames for free! When you're ready to run the full rendering, we quickly and affordably render your work, giving you the ability to rapidly improve your 3D creations without high expenses. Whether you're a studio or freelance artist, rentaflop helps you meet deadlines and lower costs to outperform your competitors."}),(0,t.jsx)(i.Z,{component:"h2",variant:"h6",align:"left",fontWeight:"600",gutterBottom:!0,children:"Learn more"}),(0,t.jsxs)(i.Z,{align:"left",paragraph:!0,children:["To learn more about how we render your work, check out the ",(0,t.jsx)(u,{href:"/rendering",children:"rendering"})," page. To read about our pricing tiers and security levels, please see ",(0,t.jsx)(u,{href:"/pricing",children:"pricing"}),"."]}),(0,t.jsxs)(i.Z,{align:"left",paragraph:!0,children:["If you have an Nvidia graphics card and would like to make money without lifting a finger, please read about ",(0,t.jsx)(u,{href:"/blog/hosting",children:"becoming a host"}),". Your hardware can pay for itself while helping 3D artists render their projects."]}),(0,t.jsxs)(i.Z,{align:"left",paragraph:!0,children:["For the latest rentaflop news, or to read a variety of things about software development and startups, check out our ",(0,t.jsx)(u,{href:"/blog",children:"blog"}),"."]}),(0,t.jsxs)(i.Z,{align:"left",paragraph:!0,children:["What are your questions? Please see the ",(0,t.jsx)(u,{href:"/faq",children:"faq"}),"."]})]});return(0,t.jsx)(l.Z,{title:"About Us",description:"Why is rentaflop unique? Learn more about how our new technology utilizes hardware around the world for your render.",children:(0,t.jsx)(s.$V,{title:e,body:r})})}}},function(e){e.O(0,[464,433,774,888,179],function(){return e(e.s=512)}),_N_E=e.O()}]);