(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[432],{339:(e,s,a)=>{Promise.resolve().then(a.bind(a,4119))},6046:(e,s,a)=>{"use strict";var t=a(6658);a.o(t,"useParams")&&a.d(s,{useParams:function(){return t.useParams}}),a.o(t,"useRouter")&&a.d(s,{useRouter:function(){return t.useRouter}})},4119:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>m,runtime:()=>h});var t=a(5155),i=a(6046),r=a(6962),l=a(4408),c=a(728),n=a(133),d=a(7370),o=a(7396);let h="edge",x=[{id:1,name:"Cash Back Master",cashback:"5%",annualFee:0,creditScore:"Excellent",type:"Cashback",bank:"CreditBank",description:"Earn top-tier cash back on all your purchases with no annual fee.",pros:["High cashback rate","No annual fee","Welcome bonus available"],cons:["Requires excellent credit","Foreign transaction fees apply"],imageUrl:"/placeholder.svg?height=300&width=500"},{id:2,name:"Travel Elite",cashback:"3%",annualFee:95,creditScore:"Good",type:"Travel",bank:"Voyager Financial",description:"Unlock premium travel perks and earn miles on every purchase.",pros:["Travel insurance included","Airport lounge access","No foreign transaction fees"],cons:["Annual fee","Lower rewards on non-travel purchases"],imageUrl:"/placeholder.svg?height=300&width=500"}];function m(){let e=parseInt((0,i.useParams)().id),s=x.find(s=>s.id===e);return s?(0,t.jsxs)("div",{className:"min-h-screen flex flex-col",children:[(0,t.jsx)(r.Y,{}),(0,t.jsx)("main",{className:"flex-grow container mx-auto px-4 py-8",children:(0,t.jsxs)(c.Zp,{className:"mb-8",children:[(0,t.jsxs)(c.aR,{children:[(0,t.jsx)(c.ZB,{className:"text-3xl",children:s.name}),(0,t.jsxs)(c.BT,{children:[s.type," Card | ",s.creditScore," Credit Score"]})]}),(0,t.jsxs)(c.Wu,{className:"grid md:grid-cols-2 gap-8",children:[(0,t.jsx)("div",{children:(0,t.jsx)(n.default,{cardNumber:s.id.toString().padStart(16,"0"),cardholderName:s.name.toUpperCase(),expirationDate:"12/25",bankName:"Creditful",bankLogo:"/placeholder.svg?height=32&width=96",cardType:s.type.toLowerCase(),bgColor:"bg-gradient-to-r from-".concat("Cashback"===s.type?"purple-400 to-pink-600":"Travel"===s.type?"blue-400 to-teal-500":"Rewards"===s.type?"green-400 to-cyan-500":"Student"===s.type?"yellow-400 to-orange-500":"Business"===s.type?"indigo-400 to-purple-500":"red-400 to-yellow-500"),textColor:"white",pattern:"Cashback"===s.type?"circles":"Travel"===s.type?"triangles":"Rewards"===s.type?"hexagons":"Student"===s.type?"waves":"Business"===s.type?"circles":"triangles"})}),(0,t.jsxs)("div",{className:"space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Card Details"}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Cashback:"})," ",s.cashback]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Annual Fee:"})," $",s.annualFee]}),(0,t.jsxs)("p",{children:[(0,t.jsx)("strong",{children:"Issuing Bank:"})," ",s.bank]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Description"}),(0,t.jsx)("p",{children:s.description})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Pros"}),(0,t.jsx)("ul",{className:"list-disc list-inside",children:s.pros.map((e,s)=>(0,t.jsx)("li",{children:e},s))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-semibold mb-2",children:"Cons"}),(0,t.jsx)("ul",{className:"list-disc list-inside",children:s.cons.map((e,s)=>(0,t.jsx)("li",{children:e},s))})]})]})]}),(0,t.jsxs)("div",{className:"flex justify-between mt-8",children:[(0,t.jsx)(d.$,{asChild:!0,variant:"outline",children:(0,t.jsx)(o.default,{href:"/compare?ids=".concat(e),children:"Compare"})}),(0,t.jsx)(d.$,{children:"Apply Now"})]})]})}),(0,t.jsx)(l.w,{})]}):(0,t.jsx)("div",{children:"Card not found"})}},133:(e,s,a)=>{"use strict";a.d(s,{default:()=>d});var t=a(5155),i=a(2115),r=a(47),l=a(6233),c=a(7396);let n={circles:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",triangles:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M3 0v1.5L1.5 3H0v3h1.5L3 7.5V9h3V7.5L7.5 6H9V3H7.5L6 1.5V0H3zm16 0v1.5L17.5 3H16v3h1.5L19 7.5V9h3V7.5L23.5 6H25V3H23.5L22 1.5V0H19zm16 0v1.5L33.5 3H32v3h1.5L35 7.5V9h3V7.5L39.5 6H41V3H39.5L38 1.5V0H35zM3 16v1.5L1.5 19H0v3h1.5L3 23.5V25h3V23.5L7.5 22H9V19H7.5L6 17.5V16H3zm16 0v1.5L17.5 19H16v3h1.5L19 23.5V25h3V23.5L23.5 22H25V19H23.5L22 17.5V16H19zm16 0v1.5L33.5 19H32v3h1.5L35 23.5V25h3V23.5L39.5 22H41V19H39.5L38 17.5V16H35zM3 32v1.5L1.5 35H0v3h1.5L3 39.5V41h3V39.5L7.5 38H9V35H7.5L6 33.5V32H3zm16 0v1.5L17.5 35H16v3h1.5L19 39.5V41h3V39.5L23.5 38H25V35H23.5L22 33.5V32H19zm16 0v1.5L33.5 35H32v3h1.5L35 39.5V41h3V39.5L39.5 38H41V35H39.5L38 33.5V32H35zM3 48v1.5L1.5 51H0v3h1.5L3 55.5V57h3V55.5L7.5 54H9V51H7.5L6 49.5V48H3zm16 0v1.5L17.5 51H16v3h1.5L19 55.5V57h3V55.5L23.5 54H25V51H23.5L22 49.5V48H19zm16 0v1.5L33.5 51H32v3h1.5L35 55.5V57h3V55.5L39.5 54H41V51H39.5L38 49.5V48H35z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",hexagons:"url(\"data:image/svg+xml,%3Csvg width='24' height='40' viewBox='0 0 24 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 40L2 38V2L0 0h24v2L22 4v34l2 2H0zM0 0l2 2v36l-2 2V0zm24 0l-2 2v36l2 2V0zM2 2h20v36H2V2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",waves:"url(\"data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E\")"},d=e=>{let{id:s,cardNumber:a,cardholderName:d,expirationDate:o,bankName:h,bankLogo:x,cardType:m,bgColor:v,textColor:f,pattern:u}=e,[p,g]=(0,i.useState)({x:0,y:0,show:!1});return(0,t.jsx)(c.default,{href:"/explore/".concat(s),children:(0,t.jsxs)(r.P.div,{className:"w-96 h-56 rounded-xl relative text-".concat(f," shadow-2xl perspective-1000 cursor-pointer overflow-hidden"),whileHover:{rotateY:15,scale:1.05},transition:{type:"spring",stiffness:300,damping:20},onClick:e=>{let s=e.currentTarget.getBoundingClientRect();g({x:e.clientX-s.left,y:e.clientY-s.top,show:!0}),setTimeout(()=>g({x:0,y:0,show:!1}),500)},children:[(0,t.jsx)(r.P.div,{className:"absolute inset-0 ".concat(v," rounded-xl opacity-80"),initial:{opacity:.5},animate:{opacity:.8},transition:{duration:.5}}),(0,t.jsx)(r.P.div,{className:"absolute inset-0 rounded-xl",style:{backgroundImage:n[u],backgroundSize:"cover"},initial:{opacity:0},animate:{opacity:1},transition:{duration:.5}}),p.show&&(0,t.jsx)(r.P.div,{className:"absolute rounded-full bg-white",initial:{width:0,height:0,x:p.x,y:p.y,opacity:.5},animate:{width:500,height:500,x:p.x-250,y:p.y-250,opacity:0},transition:{duration:.5}}),(0,t.jsxs)("div",{className:"relative w-full h-full flex flex-col justify-between backdrop-blur-sm rounded-xl p-6 overflow-hidden",children:[(0,t.jsxs)("div",{className:"flex justify-between items-start z-10",children:[(0,t.jsx)(r.P.img,{src:x,alt:"".concat(h," logo"),className:"h-8 object-contain",whileHover:{scale:1.1}}),(0,t.jsx)(r.P.div,{className:"text-lg font-bold",whileHover:{scale:1.1},children:h})]}),(0,t.jsxs)("div",{className:"space-y-4 z-10",children:[(0,t.jsx)(r.P.div,{className:"flex items-center space-x-2",whileHover:{scale:1.05},children:(0,t.jsx)(l.A,{className:"w-8 h-8"})}),(0,t.jsx)(r.P.div,{className:"text-2xl font-bold tracking-wider",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},children:(e=>"amex"===m?"".concat(e.slice(0,4)," ").concat(e.slice(4,10)," ").concat(e.slice(10,15)):"".concat(e.slice(0,4)," ").concat(e.slice(4,8)," ").concat(e.slice(8,12)," ").concat(e.slice(12,16)))(a)}),(0,t.jsxs)("div",{className:"flex justify-between items-center",children:[(0,t.jsxs)(r.P.div,{whileHover:{scale:1.05},children:[(0,t.jsx)("div",{className:"text-xs opacity-75",children:"Cardholder Name"}),(0,t.jsx)("div",{className:"font-semibold",children:d})]}),(0,t.jsxs)(r.P.div,{whileHover:{scale:1.05},children:[(0,t.jsx)("div",{className:"text-xs opacity-75",children:"Expires"}),(0,t.jsx)("div",{className:"font-semibold",children:o})]}),(0,t.jsx)(r.P.div,{whileHover:{rotate:360},transition:{duration:.5},children:(()=>{switch(m){case"visa":return(0,t.jsx)("svg",{className:"w-12 h-8",viewBox:"0 0 48 16",fill:f,children:(0,t.jsx)("path",{d:"M44.89 16H37.94L42.49 0H49.44L44.89 16ZM34.72 0L28.02 11.11L26.06 2.19C25.74 0.86 24.74 0 23.61 0H13.69L13.5 0.86C15.33 1.27 17 1.95 18.5 2.88L23.29 16H30.36L40.35 0H34.72ZM0 0L0.05 0.51C4.69 1.59 9.09 3.39 13.09 5.87L11.26 16H18.37L23.25 0H0Z"})});case"mastercard":return(0,t.jsxs)("svg",{className:"w-12 h-8",viewBox:"0 0 48 30",fill:"none",children:[(0,t.jsx)("circle",{cx:"15",cy:"15",r:"15",fill:"#EB001B"}),(0,t.jsx)("circle",{cx:"33",cy:"15",r:"15",fill:"#F79E1B"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 27C28.4183 24.5359 31.5 19.6458 31.5 14C31.5 8.35416 28.4183 3.46411 24 1C19.5817 3.46411 16.5 8.35416 16.5 14C16.5 19.6458 19.5817 24.5359 24 27Z",fill:"#FF5F00"})]});case"amex":return(0,t.jsx)("svg",{className:"w-12 h-8",viewBox:"0 0 48 48",fill:f,children:(0,t.jsx)("path",{d:"M48 36H0V12H48V36ZM2.52 33.48H45.48V14.52H2.52V33.48ZM14.16 18.24H11.76V24.72H7.2V18.24H4.8V28.56H7.2V26.16H11.76V28.56H14.16V18.24ZM16.68 28.56H19.08V21.12H22.08L24.48 28.56H27.12L24.48 20.76C25.92 20.16 26.76 19.08 26.76 17.64C26.76 15.48 25.2 14.4 22.8 14.4H16.68V28.56ZM19.08 16.68H22.2C23.4 16.68 24.12 17.04 24.12 18C24.12 18.96 23.4 19.32 22.2 19.32H19.08V16.68ZM29.16 28.56H31.56V25.2H35.04C37.44 25.2 39.24 23.76 39.24 21.36C39.24 18.96 37.44 17.52 35.04 17.52H29.16V28.56ZM31.56 19.8H34.44C35.64 19.8 36.6 20.28 36.6 21.36C36.6 22.44 35.64 22.92 34.44 22.92H31.56V19.8ZM41.28 28.56H43.68V17.52H41.28V28.56Z"})})}})()})]})]})]})]})})}},4408:(e,s,a)=>{"use strict";a.d(s,{w:()=>r});var t=a(5155),i=a(7396);function r(){return(0,t.jsx)("footer",{className:"bg-[#1B1212] text-[#FFFFFF] mt-12 border-t border-[#FFFFFF20]",children:(0,t.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-semibold mb-4",children:"Creditful"}),(0,t.jsx)("p",{className:"text-sm opacity-80",children:"Explore the best credit cards tailored for you."})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-md font-semibold mb-4",children:"Quick Links"}),(0,t.jsxs)("ul",{className:"space-y-2",children:[(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/",className:"text-sm opacity-80 hover:opacity-100 transition-opacity",children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/explore",className:"text-sm opacity-80 hover:opacity-100 transition-opacity",children:"Explore Cards"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"#calculators",className:"text-sm opacity-80 hover:opacity-100 transition-opacity",children:"Calculators"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"#blog",className:"text-sm opacity-80 hover:opacity-100 transition-opacity",children:"Blog"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-md font-semibold mb-4",children:"Legal"}),(0,t.jsxs)("ul",{className:"space-y-2",children:[(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"#",className:"text-sm opacity-80 hover:opacity-100 transition-opacity",children:"Terms of Service"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"#",className:"text-sm opacity-80 hover:opacity-100 transition-opacity",children:"Privacy Policy"})})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-md font-semibold mb-4",children:"Connect"}),(0,t.jsxs)("ul",{className:"space-y-2",children:[(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"#",className:"text-sm opacity-80 hover:opacity-100 transition-opacity",children:"Twitter"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"#",className:"text-sm opacity-80 hover:opacity-100 transition-opacity",children:"Facebook"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"#",className:"text-sm opacity-80 hover:opacity-100 transition-opacity",children:"Instagram"})})]})]})]}),(0,t.jsx)("div",{className:"mt-8 pt-8 border-t border-[#FFFFFF20] text-center",children:(0,t.jsx)("p",{className:"text-sm opacity-80",children:"\xa9 2024 Creditful. All rights reserved."})})]})})}},6962:(e,s,a)=>{"use strict";a.d(s,{Y:()=>n});var t=a(5155),i=a(7396),r=a(7370),l=a(1757),c=a(6710);function n(){return(0,t.jsx)("header",{className:"bg-[#1B1212] shadow-md sticky top-0 z-50 border-b border-[#FFFFFF20]",children:(0,t.jsxs)("div",{className:"container mx-auto px-4 py-4 flex items-center justify-between",children:[(0,t.jsx)(i.default,{href:"/",className:"text-2xl font-bold text-[#FFFFFF]",children:"Finckr"}),(0,t.jsx)("nav",{className:"hidden md:block",children:(0,t.jsxs)("ul",{className:"flex space-x-6",children:[(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/",className:"text-[#FFFFFF80] hover:text-[#FFFFFF] transition-colors",children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/explore",className:"text-[#FFFFFF80] hover:text-[#FFFFFF] transition-colors",children:"Explore"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/calculators",className:"text-[#FFFFFF80] hover:text-[#FFFFFF] transition-colors",children:"Calculators"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/blog",className:"text-[#FFFFFF80] hover:text-[#FFFFFF] transition-colors",children:"Blog"})}),(0,t.jsx)("li",{children:(0,t.jsx)(i.default,{href:"/card-gallery",className:"text-[#FFFFFF80] hover:text-[#FFFFFF] transition-colors",children:"Card Gallery"})})]})}),(0,t.jsxs)("div",{className:"hidden md:flex space-x-4",children:[(0,t.jsx)(r.$,{asChild:!0,variant:"outline",className:"group border-[#FFFFFF40] text-[#FFFFFF] hover:bg-[#FFFFFF20]",children:(0,t.jsxs)(i.default,{href:"/card-wizard",children:[(0,t.jsx)(l.A,{className:"mr-2 h-4 w-4 group-hover:animate-pulse"}),"Card Wizard"]})}),(0,t.jsx)(r.$,{className:"bg-[#FFFFFF] text-[#1B1212] hover:bg-[#FFFFFF80]",children:"Sign Up"})]}),(0,t.jsx)("button",{className:"md:hidden text-[#FFFFFF]",children:(0,t.jsx)(c.A,{size:24})})]})})}},7370:(e,s,a)=>{"use strict";a.d(s,{$:()=>d});var t=a(5155),i=a(2115),r=a(2317),l=a(1027),c=a(7849);let n=(0,l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef((e,s)=>{let{className:a,variant:i,size:l,asChild:d=!1,...o}=e,h=d?r.DX:"button";return(0,t.jsx)(h,{className:(0,c.cn)(n({variant:i,size:l,className:a})),ref:s,...o})});d.displayName="Button"},728:(e,s,a)=>{"use strict";a.d(s,{BT:()=>d,Wu:()=>o,ZB:()=>n,Zp:()=>l,aR:()=>c});var t=a(5155),i=a(2115),r=a(7849);let l=i.forwardRef((e,s)=>{let{className:a,...i}=e;return(0,t.jsx)("div",{ref:s,className:(0,r.cn)("rounded-xl border bg-card text-card-foreground shadow",a),...i})});l.displayName="Card";let c=i.forwardRef((e,s)=>{let{className:a,...i}=e;return(0,t.jsx)("div",{ref:s,className:(0,r.cn)("flex flex-col space-y-1.5 p-6",a),...i})});c.displayName="CardHeader";let n=i.forwardRef((e,s)=>{let{className:a,...i}=e;return(0,t.jsx)("div",{ref:s,className:(0,r.cn)("font-semibold leading-none tracking-tight",a),...i})});n.displayName="CardTitle";let d=i.forwardRef((e,s)=>{let{className:a,...i}=e;return(0,t.jsx)("div",{ref:s,className:(0,r.cn)("text-sm text-muted-foreground",a),...i})});d.displayName="CardDescription";let o=i.forwardRef((e,s)=>{let{className:a,...i}=e;return(0,t.jsx)("div",{ref:s,className:(0,r.cn)("p-6 pt-0",a),...i})});o.displayName="CardContent",i.forwardRef((e,s)=>{let{className:a,...i}=e;return(0,t.jsx)("div",{ref:s,className:(0,r.cn)("flex items-center p-6 pt-0",a),...i})}).displayName="CardFooter"},7849:(e,s,a)=>{"use strict";a.d(s,{cn:()=>r});var t=a(3463),i=a(9795);function r(){for(var e=arguments.length,s=Array(e),a=0;a<e;a++)s[a]=arguments[a];return(0,i.QP)((0,t.$)(s))}}},e=>{var s=s=>e(e.s=s);e.O(0,[839,33,271,441,517,358],()=>s(339)),_N_E=e.O()}]);