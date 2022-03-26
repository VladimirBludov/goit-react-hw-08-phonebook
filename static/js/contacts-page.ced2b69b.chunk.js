"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[141],{5822:function(n,e,t){t.d(e,{Z:function(){return u}});var r,i,a=t(168),o=t(5507),c=t(5751),s=c.ZP.section(r||(r=(0,a.Z)(["\n  margin: 30px 0 0;\n"]))),l=(0,c.ZP)(o.Z).attrs({level:2})(i||(i=(0,a.Z)(["\n  /* color: blueviolet; */\n  text-align: center;\n  margin-bottom: 15px;\n"]))),d=t(184);function u(n){var e=n.title,t=n.children;return(0,d.jsxs)(s,{children:[e&&(0,d.jsx)(l,{children:e}),t]})}},1322:function(n,e,t){t.r(e),t.d(e,{default:function(){return qn}});var r=t(9439),i=t(6106),a=t(1413),o=t(2791),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.67 371.67 0 00-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1-.4.2-.8.3-1.2.5-44.7 18.9-84.8 46-119.3 80.6a373.42 373.42 0 00-80.4 119.5A373.6 373.6 0 00137 888.8a8 8 0 008 8.2h59.9c4.3 0 7.9-3.5 8-7.8 2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 008.1.3zM512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 01340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 01683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521zM880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},name:"user-add",theme:"outlined"},s=t(3717),l=function(n,e){return o.createElement(s.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:e,icon:c}))};l.displayName="UserAddOutlined";var d,u,m,h,p,x,f,g,Z=o.forwardRef(l),v=t(5861),w=t(7757),b=t.n(w),j=t(577),y=function(n){return n.filter.value},C=function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)})).sort((function(n,e){return n.name.toLowerCase().localeCompare(e.name.toLowerCase())}))},P=function(n,e,t){var r=e.toLowerCase();return n.find((function(n){var e=n.name,i=n.number;return e.toLowerCase()===r&&i===t}))},k=t(3207),z=t(168),L=t(5751),S=t(349),A=t(4333),E=t(1358),F=(0,L.ZP)(S.Z).attrs({labelCol:{span:6},wrapperCol:{span:16},initialValues:{remember:!0}})(d||(d=(0,z.Z)(["\n  @media screen and (max-width: 767px) {\n    width: 70vw;\n    max-width: 350px;\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 1199px) {\n    width: 50vw;\n  }\n\n  @media screen and (min-width: 1200px) {\n    width: 30vw;\n  }\n"]))),N=(0,L.ZP)(F.Item).attrs({rules:[{required:!0,message:"Please input contact name!"},{pattern:new RegExp("^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$"),message:"Wrong format!"}]})(u||(u=(0,z.Z)([""]))),M=(0,L.ZP)(F.Item).attrs({rules:[{required:!0,message:"Please input contact number!"},{pattern:new RegExp("\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}"),message:"Wrong format!"}]})(m||(m=(0,z.Z)([""]))),_=(0,L.ZP)(A.Z).attrs({title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})(h||(h=(0,z.Z)([""]))),R=(0,L.ZP)(A.Z).attrs({title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})(p||(p=(0,z.Z)([""]))),B=L.ZP.div(x||(x=(0,z.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  margin-top: 20px;\n"]))),D=(0,L.ZP)(E.Z)(f||(f=(0,z.Z)(["\n  font-size: 16px;\n  height: auto;\n"]))),H=t(184);function T(n){var e=n.onClose,t=n.titleSubmit,i=void 0===t?"Submit":t,a=n.onSubmit,o=n.isLoading,c=n.name,s=void 0===c?"":c,l=n.number,d=void 0===l?"":l,u=(0,k.wY)().data,m=F.useForm(),h=(0,r.Z)(m,1)[0],p=function(){var n=(0,v.Z)(b().mark((function n(t){var r,i;return b().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.name,i=t.number,!P(u,r,i)){n.next=6;break}return j.Am.error("".concat(r," is already in contacts.")),h.resetFields(),n.abrupt("return");case 6:return n.next=8,a({name:r,number:i});case 8:h.resetFields(),e();case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,H.jsxs)(F,{form:h,onFinish:p,children:[(0,H.jsx)(N,{label:"Name",name:"name",initialValue:s,children:(0,H.jsx)(_,{value:s})}),(0,H.jsx)(M,{label:"Number",name:"number",initialValue:d,children:(0,H.jsx)(R,{value:d})}),(0,H.jsxs)(B,{children:[(0,H.jsx)(D,{type:"primary",htmlType:"submit",icon:(0,H.jsx)(Z,{}),loading:o,style:{marginRight:"10px"},children:i}),(0,H.jsx)(D,{type:"primary",danger:!0,onClick:function(){return e()},children:"Cancel"})]})]})}var q=L.ZP.ul(g||(g=(0,z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  margin: 0 0 30px 0;\n  padding: 0;\n\n  @media screen and (max-width: 767px) {\n    max-width: 480px;\n  }\n"]))),O={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},I=function(n,e){return o.createElement(s.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:e,icon:O}))};I.displayName="EditOutlined";var V=o.forwardRef(I),W={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},Y=function(n,e){return o.createElement(s.Z,(0,a.Z)((0,a.Z)({},n),{},{ref:e,icon:W}))};Y.displayName="DeleteOutlined";var J,U,$,G,K,Q,X,nn,en,tn,rn,an,on,cn=o.forwardRef(Y),sn=t(7492),ln=t(1817),dn=L.ZP.li(J||(J=(0,z.Z)(["\n  /* display: grid;\n  grid-template-columns: 1fr 2fr 2fr 1fr;\n  grid-gap: 2vw; */\n  padding: 5px;\n  align-items: center;\n  font-weight: 500;\n\n  background-color: #eee;\n\n  @media screen and (max-width: 767px) {\n    width: calc((100% - 15px) / 2);\n  }\n\n  @media screen and (min-width: 768px) and (max-width: 1199px) {\n    width: calc((100% - 45px) / 4);\n  }\n\n  @media screen and (min-width: 1200px) {\n    width: calc((100% - 75px) / 6);\n  }\n"]))),un=(0,L.ZP)(sn.C).attrs({src:ln,alt:"Avatar"})(U||(U=(0,z.Z)(["\n  width: 100%;\n  height: auto;\n  padding: 10px;\n"]))),mn=L.ZP.a($||($=(0,z.Z)(["\n  display: block;\n  text-decoration: none;\n"]))),hn=L.ZP.p(G||(G=(0,z.Z)(["\n  margin-bottom: 10px;\n  text-align: center;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 1em;\n"]))),pn=L.ZP.p(K||(K=(0,z.Z)(["\n  margin-bottom: 10px;\n  text-align: center;\n  font-size: 1em;\n  color: grey;\n"]))),xn=L.ZP.div(Q||(Q=(0,z.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 5px;\n"]))),fn=(0,L.ZP)(E.Z).attrs({type:"primary"})(X||(X=(0,z.Z)(["\n  width: calc((100% - 5px) / 2);\n\n  &:first-child:hover {\n    background-color: green;\n  }\n\n  &:last-child:hover {\n    background-color: red;\n  }\n"]))),gn=L.ZP.div(nn||(nn=(0,z.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),Zn=L.ZP.div(en||(en=(0,z.Z)(["\n  background-color: white;\n  padding: 30px;\n"]))),vn=t(4164),wn=t(5507),bn=document.querySelector("#modal-root"),jn=document.querySelector("html");function yn(n){var e=n.title,t=n.children,r=n.onClose;(0,o.useEffect)((function(){var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),jn.classList.add("disable-scroll"),function(){window.removeEventListener("keydown",n),jn.classList.remove("disable-scroll")}}),[r]);return(0,vn.createPortal)((0,H.jsx)(gn,{onClick:function(n){n.currentTarget===n.target&&r()},children:(0,H.jsxs)(Zn,{children:[(0,H.jsx)(wn.Z,{level:2,style:{textAlign:"center",marginBottom:"20px"},children:e}),t]})}),bn)}var Cn=L.ZP.button(tn||(tn=(0,z.Z)(["\n  display: inline-block;\n  cursor: pointer;\n  margin: 6px 12px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  border: solid #ff0000 2px;\n\n  &.primary {\n    background-color: #ff0000;\n    color: white;\n  }\n\n  &.secondary {\n    background-color: white;\n    color: #ff0000;\n  }\n"]))),Pn=L.ZP.div(rn||(rn=(0,z.Z)(["\n  // position: absolute;\n  // top: 50%;\n  // left: 50%;\n  // transform: translate(-50%, -50%);\n  background-color: white;\n  color: rgb(23, 2, 66);\n  border-radius: 24px;\n  border: solid #ff0000 6px;\n  padding: 12px 24px;\n  max-width: 400px;\n  text-align: center;\n"]))),kn=L.ZP.p(an||(an=(0,z.Z)(["\n  color: #ff0000;\n  font-weight: bold;\n  text-align: center;\n  font-size: 1.25em;\n  margin: 6px 0;\n"]))),zn=L.ZP.p(on||(on=(0,z.Z)([""])));function Ln(n){var e=n.onDelete,t=n.onClose;return(0,H.jsxs)(Pn,{role:"dialog",children:[(0,H.jsx)(kn,{className:"content",children:"Delete this item?"}),(0,H.jsxs)(zn,{className:"content",children:["This operation will permanently delete this item and all its dependencies. This action ",(0,H.jsx)("strong",{children:"cannot be undone"}),"."]}),(0,H.jsx)(Cn,{className:"secondary",onClick:t,children:"Oh no, bring me back"}),(0,H.jsx)(Cn,{className:"primary",onClick:e,children:"I understand, delete it"})]})}function Sn(n){var e=n.id,t=n.name,a=n.number,c=(0,o.useState)(!1),s=(0,r.Z)(c,2),l=s[0],d=s[1],u=(0,o.useState)(!1),m=(0,r.Z)(u,2),h=m[0],p=m[1],x=(0,k.Nt)(),f=(0,r.Z)(x,2),g=f[0],Z=f[1].isLoading,v=(0,k.wv)(),w=(0,r.Z)(v,2),b=w[0],y=w[1].isLoading;return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsxs)(dn,{children:[(0,H.jsxs)(mn,{href:"tel:".concat(a),children:[(0,H.jsx)(un,{}),(0,H.jsx)(hn,{children:t}),(0,H.jsx)(pn,{href:"tel:".concat(a),children:a})]}),(0,H.jsxs)(xn,{children:[(0,H.jsx)(i.Z,{title:"Edit",children:(0,H.jsx)(fn,{icon:(0,H.jsx)(V,{style:{fontSize:"20px"}}),loading:y,onClick:function(){return d(!0)}})}),(0,H.jsx)(i.Z,{title:"Delete",children:(0,H.jsx)(fn,{icon:(0,H.jsx)(cn,{style:{fontSize:"20px"}}),loading:Z,onClick:function(){return p(!0)}})})]})]}),l&&(0,H.jsx)(yn,{title:"Edit contact",onClose:function(){return d(!1)},children:(0,H.jsx)(T,{onClose:function(){return d(!1)},titleSubmit:"Edit",onSubmit:function(n){b({id:e,contact:n})},isLoading:y,name:t,number:a})}),h&&(0,H.jsx)(yn,{onClose:function(){return p(!1)},children:(0,H.jsx)(Ln,{onDelete:function(){p(!1),g(e).unwrap().catch((function(){j.Am.error("Sorry, the server is temporarily unavailable.")}))},onClose:function(){return p(!1)}})})]})}var An=t(728),En=t(2978);function Fn(){var n=(0,En.v9)(y),e=(0,k.wY)(void 0,{selectFromResult:function(e){var t=e.data,r=e.isFetching;return{contacts:t?C(t,n):[],isFetching:r}}}),t=e.contacts,r=e.isFetching,i=(0,o.useMemo)((function(){return t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,H.jsx)(Sn,{id:e,name:t,number:r},e)}))}),[t]);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(q,{children:i}),r&&(0,H.jsx)(An.Z,{})]})}var Nn,Mn,_n,Rn=t(5822),Bn=L.ZP.div(Nn||(Nn=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),Dn=L.ZP.label(Mn||(Mn=(0,z.Z)(["\n  font-size: 18px;\n  transition: color 250ms linear;\n  cursor: pointer;\n\n  &:hover {\n    color: gold;\n  }\n"]))),Hn=(0,L.ZP)(E.Z)(_n||(_n=(0,z.Z)(["\n  width: 48px;\n  height: 48px;\n  margin-bottom: 20px;\n  margin-left: 10px;\n  border: none;\n\n  &:hover {\n    background-color: gold;\n  }\n"]))),Tn=t(2152);function qn(){var n=(0,o.useState)(!1),e=(0,r.Z)(n,2),t=e[0],a=e[1],c=(0,k.Tn)(),s=(0,r.Z)(c,2),l=s[0],d=s[1].isLoading;return(0,H.jsxs)(Tn.Z,{children:[(0,H.jsxs)(Rn.Z,{title:"Contacts",children:[(0,H.jsx)(Bn,{children:(0,H.jsxs)(Dn,{children:["Create new contact",(0,H.jsx)(i.Z,{title:"Create new contact",children:(0,H.jsx)(Hn,{type:"primary",shape:"circle",icon:(0,H.jsx)(Z,{style:{fontSize:"24px"}}),onClick:function(){return a(!0)}})})]})}),(0,H.jsx)(Fn,{})]}),t&&(0,H.jsx)(yn,{title:"Create new contact",onClose:function(){return a(!1)},children:(0,H.jsx)(T,{onClose:function(){return a(!1)},titleSubmit:"Add contact",onSubmit:l,isLoading:d})})]})}},1817:function(n,e,t){n.exports=t.p+"static/media/avatar.10691648d79aa2f92514.png"}}]);
//# sourceMappingURL=contacts-page.ced2b69b.chunk.js.map