(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(6757)}])},3630:function(e,t,n){"use strict";var s=n(5893);t.Z=function(e){var t=e.children;return(0,s.jsx)("div",{className:"container mx-auto px-5",children:t})}},3821:function(e,t,n){"use strict";var s=n(5893);t.Z=function(e){e.preview;var t=e.children;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"min-h-screen",children:(0,s.jsx)("main",{children:t})})})}},1871:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var s=n(5893);n(7294);var l=n(5017),r=n(5011),i=n(6720),c=n(7737),a=n(1565),d=n(9008),x=n.n(d);function o(e){return(0,s.jsxs)(s.Fragment,{children:[e.title&&(0,s.jsxs)(x(),{children:[(0,s.jsx)("title",{children:e.title+" | rentaflop | Online Cloud Render Farm"}),(0,s.jsx)("meta",{property:"og:description",content:e.description},"og:description"),(0,s.jsx)("meta",{name:"description",content:e.description},"description")]}),(0,s.jsx)(c.Z,{theme:a.Z,children:(0,s.jsxs)("div",{className:"App",style:{backgroundColor:"#FBFBFB"},children:[(0,s.jsx)(i.ZP,{}),(0,s.jsx)(l.Z,{}),e.children,(0,s.jsx)(r.Z,{})]})})]})}},6757:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return N},default:function(){return w}});var s=n(5893),l=n(3630),r=n(8420),i=n(7049),c=function(e){var t=e.dateString,n=(0,r.Z)(t);return(0,s.jsx)("time",{dateTime:t,children:(0,i.Z)(n,"MM/dd/yyyy")})},a=n(4184),d=n.n(a),x=n(1664),o=n.n(x),m=n(5675),h=n.n(m),g=function(e){var t=e.title,n=e.src,l=e.slug,r=(0,s.jsx)(h(),{src:n,alt:"Cover Image for ".concat(t),className:d()("shadow-sm",{"hover:shadow-2xl transition-shadow duration-200":l}),width:650,height:315});return(0,s.jsx)("div",{className:"sm:mx-0",children:l?(0,s.jsx)(o(),{as:"/blog/".concat(l),href:"/blog/[slug]","aria-label":t,children:r}):r})},u=function(e){var t=e.title,n=e.coverImage,l=e.date,r=e.excerpt,i=e.slug;return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"mb-5",children:(0,s.jsx)(g,{slug:i,title:t,src:n})}),(0,s.jsx)("h3",{className:"text-3xl mb-3 leading-snug",children:(0,s.jsx)(o(),{as:"/blog/".concat(i),href:"/blog/[slug]",className:"text-[#0288D1]/60 hover:underline",children:t})}),(0,s.jsx)("div",{className:"text-lg mb-4",children:(0,s.jsx)(c,{dateString:l})}),(0,s.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:r})]})},j=function(e){var t=e.posts;return(0,s.jsxs)("section",{children:[(0,s.jsx)("section",{className:"flex-col md:flex-row flex text-left md:justify-between mt-8 mb-16 md:mb-12",children:(0,s.jsx)("h3",{className:"text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8",children:"Archives"})}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32",children:t.map(function(e){return(0,s.jsx)(u,{title:e.title,coverImage:e.coverImage,date:e.date,slug:e.slug,excerpt:e.excerpt},e.slug)})})]})},f=function(e){var t=e.title,n=e.coverImage,l=e.date,r=e.excerpt,i=e.slug;return(0,s.jsxs)("section",{children:[(0,s.jsx)("div",{className:"mb-5",children:(0,s.jsx)(g,{title:t,src:n,slug:i})}),(0,s.jsx)("div",{className:"md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8",children:(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"mb-4 text-4xl lg:text-5xl leading-tight",children:(0,s.jsx)(o(),{as:"/blog/".concat(i),href:"/blog/[slug]",className:"text-[#0288D1]/60 hover:underline",children:t})}),(0,s.jsx)("div",{className:"mb-4 md:mb-0 text-lg",children:(0,s.jsx)(c,{dateString:l})}),(0,s.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:r})]})})]})},p=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("section",{className:"flex-col md:flex-row flex text-left md:justify-between mt-16",children:(0,s.jsx)("h1",{className:"text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-80",children:"Welcome to Rentaflop's Blog"})}),(0,s.jsx)("section",{className:"flex-col md:flex-row flex text-left md:justify-between mb-16 md:mb-12",children:(0,s.jsx)("h4",{className:"text-center md:text-left text-lg mt-5 ",children:"We hope you enjoy our content on Blender and the latest rentaflop news!"})}),(0,s.jsx)("section",{className:"flex-col md:flex-row flex text-left md:justify-between mt-16 mb-16 md:mb-12",children:(0,s.jsx)("h3",{className:"text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8",children:"Read the latest..."})})]})},v=n(3821),b=n(1871),N=!0;function w(e){var t=e.allPosts,n=t[0],r=t.slice(1);return(0,s.jsx)(b.Z,{title:"Blog",description:"Read the latest rentaflop news. Learn about new features, partnerships, and all things 3D animation.",children:(0,s.jsx)(v.Z,{children:(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(p,{}),n&&(0,s.jsx)(f,{title:n.title,coverImage:n.coverImage,date:n.date,slug:n.slug,excerpt:n.excerpt}),r.length>0&&(0,s.jsx)(j,{posts:r})]})})})}}},function(e){e.O(0,[953,951,433,774,888,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);