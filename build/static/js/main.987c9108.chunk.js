(this.webpackJsonpweshop=this.webpackJsonpweshop||[]).push([[0],{215:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(50),a=n.n(s),i=(n(96),n(2)),l=n.n(i),o=n(7),d=n(6),j=(n(98),n.p+"static/media/logo-icon.33e25ed1.png"),u=n(0);function h(e){var t=e.category,n=t.length>0&&t.map((function(e,t){var n=e.replace(/\s/g,"-");return Object(u.jsxs)("div",{className:" px-2 fs-24 my-3",children:[Object(u.jsx)("div",{className:"mb-2",children:Object(u.jsx)("img",{src:j,alt:j,height:"200",width:"200"})}),Object(u.jsx)("a",{className:"btn",href:"category/".concat(n),children:e})]},t)}));return Object(u.jsxs)("div",{className:"container my-5 py-5",children:[Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"Categories"})}),t.length>0?Object(u.jsx)("div",{className:"cursor-pointer row justify-content-center py-5",children:n}):Object(u.jsx)("div",{className:"fs-18  py-5",children:"Please wait! Fetching Categories"})]})}function m(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),n=t[0],r=t[1],s=function(){var e=localStorage.getItem("login");r("admin"===e)};return Object(c.useEffect)((function(){s()}),[n]),Object(c.useEffect)((function(){s()})),Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:"bg-light border-bottom-nav",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row py-3",children:[Object(u.jsx)("div",{className:" col-6 text-left  ff-montserrat fs-20 fw-500 ",children:Object(u.jsx)("a",{className:"op-9 btn ff-montserrat fs-20 fw-500 f-style-normal f-stretch-normal lh2-0 l-spacing-normal fc-black31 mr-1",href:"/",children:"We Shop"})}),!0===n?Object(u.jsx)("div",{onClick:function(){localStorage.removeItem("login"),r(!1)},className:"col-6 text-right",children:Object(u.jsx)("a",{href:"/",className:"op-9 btn ff-montserrat fs-20 fw-500 f-style-normal f-stretch-normal lh2-0 l-spacing-normal fc-black31 mr-1",children:"Logout"})}):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"col-6 text-right",children:Object(u.jsx)("a",{href:"/login ",className:"op-9 btn ff-montserrat fs-20 fw-500 f-style-normal f-stretch-normal lh2-0 l-spacing-normal fc-black31 mr-1",children:"Login"})})})]})})})})}var f=n(82),b=n.n(f);function p(e,t){var n=e;return e.length>t&&(n=e.slice(0,t)+".."),n}function x(e){var t=e.product,n=e.handleProductClick,c=e.idx;return Object(u.jsx)("div",{className:"mb-3 mt-4 px-3 border p-5",children:Object(u.jsx)("div",{className:"col-6 ",children:Object(u.jsxs)("div",{onClick:function(e){return n(e)},className:"",children:[Object(u.jsx)("a",{href:"/product/".concat(t.id),children:Object(u.jsx)(b.a,{offset:300,children:t.image&&Object(u.jsx)("img",{height:"300px",width:"200px",src:t.image,alt:t.title})})}),Object(u.jsx)("a",{href:"/product/".concat(t.id),className:" fs-18 text-decoration-none fc-blue-link text-center text-nowrap text-center  mt-5 py-3 ",children:p(t.title,15)}),Object(u.jsxs)("p",{className:"fc-red229  text-center",children:[t.price,"$"]})]})})},c)}var O=function(e){var t=e.productsList,n=function(e){},c=t.length>0&&t.map((function(e,t){return Object(u.jsx)(x,{idx:t,truncateString:p,handleProductClick:n||null,product:e})}));return Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("div",{className:"fs-24 fc-red ff-montserrat my-5 fw-500",children:"Products"}),Object(u.jsx)("div",{className:"row mx-2 ml-4",children:c})]})},v=n(83),g=n.n(v),w=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.json();case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",void 0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g()(t,{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=5;break}return e.next=3,w(t);case 3:throw n=e.sent,new Error(n?n.detail:"Something went wrong");case 5:return e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("https://fakestoreapi.com/products");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("https://fakestoreapi.com/products/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=n(34),C=n(3);function P(e){var t=e.productsList,n=t.length>0&&t.filter((function(e){return"women clothing"===e.category?e:null})),c=n.length>0&&n.map((function(e,t){return Object(u.jsx)(x,{idx:t,product:e})}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"fs-24 fc-red ff-montserrat my-5 fw-500",children:Object(u.jsx)("h2",{children:"Womens Clothing"})}),Object(u.jsx)("div",{className:"row justify-content-center mx-2 ml-4",children:n.length>0?c:Object(u.jsx)("div",{children:"Please wait"})})]})}function L(e){var t=e.productsList,n=t.length>0&&t.filter((function(e){return"men clothing"===e.category?e:null})),c=function(){},r=n.length>0&&n.map((function(e,t){return Object(u.jsx)(x,{idx:t,handleProductClick:c,product:e})}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"fs-24 fc-red ff-montserrat my-5 fw-500",children:Object(u.jsx)("h2",{children:"Mens Clothing"})}),Object(u.jsx)("div",{className:"row justify-content-center mx-2 ml-4",children:r.length>0?r:Object(u.jsx)("div",{children:"Please wait"})})]})}function F(e){var t=e.productsList,n=t.length>0&&t.filter((function(e){return"jewelery"===e.category?e:null})),c=function(){},r=n.length>0&&n.map((function(e,t){return Object(u.jsx)(x,{idx:t,handleProductClick:c,product:e})}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"fs-24 fc-red ff-montserrat my-5 fw-500",children:Object(u.jsx)("h2",{children:"Jewelery"})}),Object(u.jsx)("div",{className:"row justify-content-center mx-2 ml-4",children:r.length>0?r:Object(u.jsx)("div",{children:"Please wait"})})]})}function E(e){var t=e.productsList,n=t.length>0&&t.filter((function(e){return"electronics"===e.category?e:null})),c=function(){},r=n.length>0&&n.map((function(e,t){return Object(u.jsx)(x,{idx:t,handleProductClick:c,product:e})}));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"fs-24 fc-red ff-montserrat my-5 fw-500",children:Object(u.jsx)("h2",{children:"Electronics"})}),Object(u.jsx)("div",{className:"row justify-content-center mx-2 ml-4",children:r.length>0?r:Object(u.jsx)("div",{children:"Please wait"})})]})}function I(){var e=Object(c.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(C.g)().id,a=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(s);case 3:(t=e.sent)&&r(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0,"Something went wrong");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){a()}),[]),Object(u.jsx)("div",{children:n?Object(u.jsxs)("div",{className:"container py-3",children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("h1",{className:"ff-montserrat fw-normal f-style-normal f-stretch-normal lh1-38 l-spacing-normal fs-24 fc-black31 mb-0",children:n&&n.title})})}),Object(u.jsx)("div",{className:"row justify-content-center mt-3",children:Object(u.jsx)("div",{className:"d-inline op-9 ff-barlow fs-26 fw-600 f-style-normal f-stretch-condensed lh0-8 l-spacing-normal fc-black31",children:Object(u.jsx)("img",{src:n.image,height:"500px",width:"500px"})})}),Object(u.jsxs)("div",{className:"d-inline op-9 ff-barlow fs-26 fw-600 f-style-normal f-stretch-condensed lh0-8 l-spacing-normal fc-black31",children:[n.price,Object(u.jsx)("span",{className:"",children:" $"})]}),Object(u.jsx)("div",{className:"row cursor-pointer",children:Object(u.jsx)("div",{className:"col-12 btn  fc-red229 fw-bold",children:"Add to cart"})}),Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-12",children:[Object(u.jsx)("div",{className:"op-9 ff-montserrat fs-16 fw-600 f-style-normal f-stretch-normal lh1-5 l-spacing0-16 fc-black31 mb-2 mt-3",children:"Product Highlights"}),Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:n.description}})]})})]}):Object(u.jsx)("div",{className:"fs-20 ",children:"Please Wait"})})}var T=n(38),A=n(22),M=function(e){var t=e.title,n=(e.onPress,Object(A.b)().submitForm);return Object(u.jsx)("div",{onClick:n,children:Object(u.jsx)("button",{type:"submit",className:"btn",children:t.toUpperCase()})})};var q=function(e){var t=e.initialValues,n=e.onSubmit,c=e.validationSchema,r=e.children;return Object(u.jsx)(A.a,{validationSchema:c,initialValues:t,onSubmit:n,children:function(){return Object(u.jsx)(u.Fragment,{children:r})}})},z=n(54),B=n(91),H=function(e){var t=e.error;return e.visible&&t?Object(u.jsx)("div",{children:t}):null},J=function(e){e.style;var t=e.name,n=e.className,c=Object(B.a)(e,["style","name","className"]),r=Object(A.b)(),s=r.handleChange,a=r.setFieldTouched,i=r.errors,l=r.touched;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(z.a)(Object(z.a)({},c),{},{type:t,className:n,onChange:s,onBlur:function(){return a(t)}})),Object(u.jsx)(H,{error:i[t],visible:l[t]})]})},R=function(e){Object.assign({},e);var t=Object(C.f)(),n=T.a().shape({email:T.b().required().email("Invalid email format").label("Email"),password:T.b().required("Password is Required").min(6).label("Password")});return Object(u.jsxs)(q,{className:"container",validationSchema:n,initialValues:{email:"",password:""},onSubmit:function(e){var n;"admin@xyz.com"===(n=e).email&&"Admin_007"===n.password&&(localStorage.setItem("login","admin"),t.push("/admin"))},children:[Object(u.jsx)("div",{children:Object(u.jsx)(J,{id:"email",placeholder:"Email",name:"email"})}),Object(u.jsx)("div",{className:" mt-3",children:Object(u.jsx)(J,{id:"password",name:"password",placeholder:"Password"})}),Object(u.jsx)("div",{className:"my-4",children:Object(u.jsx)(M,{title:"Login"})})]})};function V(){return Object(u.jsxs)("div",{className:"container border mt-5",children:[Object(u.jsx)("div",{className:"fs-24 fc-red ff-montserrat my-5 fw-500",children:Object(u.jsx)("h2",{children:"Login"})}),Object(u.jsx)(R,{name:"email"})]})}var W=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N("https://fakestoreapi.com/users?limit=5");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=n(90),U=n.n(_);function $(){var e=this,t=Object(c.useState)([]),n=Object(d.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)({}),i=Object(d.a)(a,2),j=i[0],h=i[1],m=Object(c.useState)(!1),f=Object(d.a)(m,2),b=f[0],p=f[1],x=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W();case 3:(t=e.sent)&&s(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),O=function(e){h(e),p(!0)};Object(c.useEffect)((function(){x()}),[]);var v=r.length>0&&r.map((function(t,n){return Object(u.jsx)("div",{onClick:O.bind(e,t),className:"col-10",children:Object(u.jsx)("div",{className:" p-2 d-flex",children:Object(u.jsxs)("div",{className:"border w-25 h-5",children:[Object(u.jsx)("img",{className:"border-radius-50",alt:"random",height:"50px",src:"https://randomuser.me/api/portraits/thumb/men/75.jpg"}),Object(u.jsxs)("span",{className:"px-3",children:["Name: ",t.name.firstname]})]})})},n)})),g=function(){p(!1)};return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"container fs-24 fc-red ff-montserrat my-5 fw-500",children:"Admin Panel"}),Object(u.jsx)("div",{className:"row",children:v&&v||Object(u.jsx)("div",{children:"Please wait"})}),Object(u.jsx)(U.a,{closeTimeoutMS:300,ariaHideApp:!1,isOpen:b,onRequestClose:g.bind(this),contentLabel:"Mobile Input",style:{content:{width:"441px",top:"50%",left:"50%",right:"auto",bottom:"10%",height:"40%",marginRight:"-50%",transform:"translate(-50%, -50%)"},overlay:{background:"rgba(0,0,0,0.7)"}},children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"py-2",children:["Name:"," ","".concat(j.name&&j.name.firstname," ").concat(j.name&&j.name.lastname," ")]}),Object(u.jsxs)("div",{className:"py-2",children:["Email: ",j.email]}),Object(u.jsxs)("div",{className:"py-2",children:["Contact: ",j.phone]}),Object(u.jsxs)("div",{className:"py-2",children:["Username: ",j.username]}),Object(u.jsxs)("div",{children:["Address:"," ","\n            ".concat(j.address&&j.address.street,",\n            ").concat(j.address&&j.address.number,",\n            ").concat(j.address&&j.address.city,",\n            zipcode:").concat(j.address&&j.address.zipcode,"\n\n            ")]}),Object(u.jsx)("div",{className:"row mt-5",children:Object(u.jsx)("div",{onClick:g.bind(this),className:"col-12",children:Object(u.jsx)("button",{className:" mt-3 w-100 h-40  ff-barlow fs-16 fw-bold f-style-normal f-stretch-condensed lh-normal l-spacing3-2 text-uppercase",children:"Cancel"})})})]})})]})}var D=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)([]),a=Object(d.a)(s,2),i=a[0],j=a[1],f=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y();case 3:t=e.sent,n=[],t.length>0&&(c=t,r(t),c.forEach((function(e){n.includes(e.category)||n.push(e.category)})),j(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0,"Something went wrong! ".concat(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){f()}),[]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(m,{}),Object(u.jsx)(S.a,{children:Object(u.jsxs)(C.c,{children:[Object(u.jsx)(C.a,{path:"/admin",children:Object(u.jsx)($,{})}),Object(u.jsx)(C.a,{exact:!0,path:"/",children:Object(u.jsx)(h,{category:i.length>0&&i})}),Object(u.jsx)(C.a,{exact:!0,path:"/category/men-clothing",children:Object(u.jsx)(L,{productsList:n.length>0&&n})}),Object(u.jsx)(C.a,{path:"/category/women-clothing",children:Object(u.jsx)(P,{productsList:n.length>0&&n})}),Object(u.jsx)(C.a,{path:"/category/jewelery",children:Object(u.jsx)(F,{productsList:n.length>0&&n})}),Object(u.jsx)(C.a,{path:"/category/electronics",children:Object(u.jsx)(E,{productsList:n.length>0&&n})}),Object(u.jsx)(C.a,{path:"/products",children:Object(u.jsx)(O,{productsList:n.length>0&&n})}),Object(u.jsx)(C.a,{path:"/product/:id",children:Object(u.jsx)(I,{})}),Object(u.jsx)(C.a,{path:"/login",children:Object(u.jsx)(V,{})})]})})]})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,216)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))},K=document.getElementById("root");a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(D,{})}),K),G()},96:function(e,t,n){},98:function(e,t,n){}},[[215,1,2]]]);
//# sourceMappingURL=main.987c9108.chunk.js.map