"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[436,541],{9436:function(e,n,t){t.r(n),t.d(n,{default:function(){return P}});t(2791);var a=t(1405),s=t(6351),r=t(153),i=t(885),c=t(9e3),o=t(5705),l=t(936),d=t(3360),u="ContactForm_submit__eYq7N",m="ContactForm_label__-cVXI",h="ContactForm_input__Bl93P",x="ContactForm_btn__wll+u",_=t(3329),j=function(){var e=(0,l.Tn)(),n=(0,i.Z)(e,2),t=n[0],a=n[1].isLoading,s=(0,l.wY)();return(0,_.jsx)(o.J9,{initialValues:{name:"",number:""},onSubmit:function(e,n){var a,i=e.name,c=e.number,o=n.resetForm;(null===(a=s.data)||void 0===a?void 0:a.find((function(e){return e.name.toLowerCase()===i.toLowerCase()})))?r.Am.error("".concat(i," is already in contact")):(t({name:i,number:c}),r.Am.success("\u0421ontact with ".concat(i," added")),o())},children:(0,_.jsxs)(o.l0,{className:u,children:[(0,_.jsxs)("label",{className:m,children:["Name",(0,_.jsx)(o.gN,{className:h,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,_.jsxs)("label",{className:m,children:["Number",(0,_.jsx)(o.gN,{className:h,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,_.jsxs)(d.Z,{className:x,variant:"outline-danger",type:"submit",children:[" ",a?(0,_.jsx)("span",{children:"Loading..."}):(0,_.jsx)("span",{children:"Add contact"})," ",(0,_.jsx)(c.Coe,{})]})]})})},p=t(5440),b="FilterComponent_label__JxYeB",f="FilterComponent_input__RS54z",g=function(){var e=(0,a.I0)();return(0,_.jsxs)("label",{className:b,children:["Find contacts by name",(0,_.jsx)("input",{className:f,type:"text",onChange:function(n){e((0,p.M)(n.target.value))}})]})},N=t(8535),C=t(4583),v=function(){return(0,_.jsx)(C.g4,{height:"100",width:"100",color:"violet",ariaLabel:"loading"})},L=t(1398),w={list:"ContactList_list__csErn",contact:"ContactList_contact__0STHS",btn:"ContactList_btn__6Piat"},k=function(){var e=(0,l.zr)(),n=(0,i.Z)(e,2),t=n[0],a=n[1].isLoading,o=(0,l.wY)(),u=o.data,m=o.isFetching,h=(0,N.v9)(s.zK).toLowerCase().trim(),x=null===u||void 0===u?void 0:u.map((function(e){return e.name.toLowerCase().includes(h)&&e})).filter((function(e){return!1!==e})).sort((function(e,n){return e.name.localeCompare(n.name)}));return(0,_.jsxs)(L.Z,{className:w.list,children:[x&&!m&&x.map((function(e){var n=e.id,s=e.name,i=e.number;return(0,_.jsxs)(L.Z.Item,{className:w.contact,children:[(0,_.jsx)("span",{children:(0,_.jsx)(c.qNd,{})}),(0,_.jsxs)("p",{children:[s,":"]}),(0,_.jsx)("p",{children:i}),(0,_.jsxs)(d.Z,{type:"button",className:w.btn,onClick:function(){return function(e,n){t(e),r.ZP.success("Contact ".concat(n," has been deleted"))}(n,s)},disabled:a,variant:"outline-danger",children:[a?(0,_.jsx)("span",{children:"Deliting..."}):(0,_.jsx)("span",{children:"Delete"}),(0,_.jsx)(c.HLd,{className:w.icon})]})]},n)})),!0===m&&(0,_.jsx)(v,{})]})},F=t(1541),P=function(){var e=(0,a.v9)(s.M7);return(0,_.jsxs)("div",{children:[!e&&(0,_.jsx)(F.default,{}),e&&(0,_.jsxs)("div",{children:[(0,_.jsx)("h1",{children:"Phonebook"}),(0,_.jsx)(j,{}),(0,_.jsx)("h2",{children:"Contacts"}),(0,_.jsx)(g,{}),(0,_.jsx)(k,{}),(0,_.jsx)(r.x7,{})]})]})}},1541:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var a=t(3504),s="HomePage_title__UFLA3",r="HomePage_logo__kUDLi",i="HomePage_container__uNu-e",c="HomePage_link__-d+Of",o=t(3329),l=function(){return(0,o.jsx)("div",{className:i,children:(0,o.jsxs)("h2",{className:s,children:["Welcome to ",(0,o.jsx)("span",{className:r,children:"Phonebook"}),"! ",(0,o.jsx)("br",{}),(0,o.jsx)(a.OL,{className:c,to:"/register",children:"Register"}),"or",(0,o.jsx)(a.OL,{className:c,to:"/login",children:"login"}),", please."]})})}}}]);
//# sourceMappingURL=436.27c11caf.chunk.js.map