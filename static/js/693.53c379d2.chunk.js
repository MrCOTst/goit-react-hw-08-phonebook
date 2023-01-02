"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[693],{9602:function(n,e,t){t.d(e,{v:function(){return r}});var r={save:function(n,e){try{var t=JSON.stringify(e);localStorage.setItem(n,t)}catch(r){console.log("Error during saving ".concat(n," to local strage; "),r.message)}},load:function(n){try{var e=localStorage.getItem(n);return null===e?void 0:JSON.parse(e)}catch(t){console.log("Error during getting ".concat(n," from localStorage: "),t.message)}},del:function(n){try{localStorage.removeItem(n)}catch(e){console.log("Error during deleting ".concat(n,"! from localStorage: "),e.message)}}}},8693:function(n,e,t){t.r(e),t.d(e,{default:function(){return z}});var r,a,o,s,i,c,l,u=t(5861),d=t(885),p=t(7757),x=t.n(p),f=t(7689),g=t(2791),m=t(9085),h=t(9062),b=t(168),v=t(6444),w=v.ZP.form(r||(r=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: auto;\n  padding: 20px;\n  border: 2px solid #dbb858;\n  border-radius: 10px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  background-color: #e5e7c5;\n"]))),Z=v.ZP.label(a||(a=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1, 875;\n"]))),y=(v.ZP.p(o||(o=(0,b.Z)(["\n  font-weight: 700;\n  font-size: 20px;\n"]))),v.ZP.input(s||(s=(0,b.Z)(["\n  font: inherit;\n  padding: 8px;\n  margin: 8px 0 8px 0;\n  max-width: 80%;\n  border-radius: 8px;\n  border-color: blue;\n"])))),k=v.ZP.button(i||(i=(0,b.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n  margin-right: auto;\n  padding: 8px 8px 8px 8px;\n  border-radius: 4px;\n  border: none;\n  height: 30px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1, 875;\n  text-transform: uppercase;\n  background-color: #2196f3;\n  color: #ffffff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover,\n  :focus {\n    border: 2px solid;\n    background-color: #21d4f3;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n    transform: scale(1.01);\n  }\n"]))),P=v.ZP.input(c||(c=(0,b.Z)(["\n  margin-right: 8px;\n  width: 24px;\n  height: 24px;\n  border: 1px solid black;\n"]))),S=v.ZP.label(l||(l=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  margin: 0 0 10px 0;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1, 875;\n"]))),j=t(9602),A=t(184);function O(){var n=(0,g.useState)(""),e=(0,d.Z)(n,2),t=e[0],r=e[1],a=(0,g.useState)(""),o=(0,d.Z)(a,2),s=o[0],i=o[1],c=(0,g.useState)(!0),l=(0,d.Z)(c,2),p=l[0],b=l[1],v=(0,f.s0)(),O=(0,h.wY)().data,z=(0,h.Lr)(),C=(0,d.Z)(z,1)[0],I="contact-for-render-state",N=function(n){switch(n.target.name){case"name":r(n.target.value);break;case"number":i(n.target.value);break;default:return}},T=function(){var n=(0,u.Z)(x().mark((function n(e){var a,o,c;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),a=t.toLowerCase(),o=O.find((function(n){return n.name.toLowerCase()===a})),!o){n.next=8;break}return m.Am.info("".concat(t," is already in contacts!"),{position:m.Am.POSITION.TOP_CENTER}),n.abrupt("return");case 8:return n.prev=8,n.next=11,C({name:t,number:s});case 11:if(j.v.load(I)){n.next=14;break}return j.v.save(I,[]),n.abrupt("return");case 14:(c=j.v.load(I)).push({name:t,number:s,personal:p}),j.v.save(I,c),m.Am.success("".concat(t," successfully added!"),{position:m.Am.POSITION.TOP_RIGHT}),n.next=24;break;case 20:n.prev=20,n.t0=n.catch(8),m.Am.error("Error adding data!",{position:m.Am.POSITION.TOP_LEFT}),console.log(n.t0);case 24:r(""),i(""),v("/");case 27:case"end":return n.stop()}}),n,null,[[8,20]])})));return function(e){return n.apply(this,arguments)}}();return(0,A.jsxs)(w,{onSubmit:T,children:[(0,A.jsxs)(S,{children:[(0,A.jsx)(P,{type:"checkbox",checked:p,onChange:function(){return b(!p)}}),"Personal contact"]}),(0,A.jsxs)(Z,{children:["Name",(0,A.jsx)(y,{type:"text",name:"name",value:t,onChange:N,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,A.jsxs)(Z,{children:["Number",(0,A.jsx)(y,{type:"tel",name:"number",value:s,onChange:N,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,A.jsx)(k,{type:"submit",children:"Add contact"})]})}function z(){return(0,A.jsx)("main",{children:(0,A.jsx)(O,{})})}}}]);
//# sourceMappingURL=693.53c379d2.chunk.js.map