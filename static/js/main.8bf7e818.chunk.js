(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={input:"filter_input___My0r",label:"filter_label__3tWCV",wrapper:"filter_wrapper__2ClHc"}},11:function(t,e,n){t.exports={card:"app_card__Qy4Wv",title:"app_title__VzRfB"}},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(15),o=n.n(i),l=(n(21),n(13)),s=n(2),u=n(5),b=n(6),m=n(8),p=n(7),d=n(23),h=n(9),j=n.n(h),f=function(t){var e=t.contacts,n=t.onDelete;return Object(a.jsx)("ul",{className:j.a.wrapper,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{className:j.a.item,children:[c,": ",r,Object(a.jsx)("button",{id:e,className:j.a.button,onClick:n,children:"Delete"})]},e)}))})},O=n(4),_=n(3),v=n.n(_),x=Object(d.a)(),C=Object(d.a)(),g=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInput=function(e){var n=Object(O.a)({},e.target.name,e.target.value);t.setState((function(t){return Object(s.a)(Object(s.a)({},t),n)}))},t.onSubmitForm=function(e){e.preventDefault(),(0,t.props.handleSubmit)(t.state),t.setState({name:"",number:""})},t}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.onSubmitForm,className:v.a.wrapper,children:[Object(a.jsx)("label",{htmlFor:x,className:v.a.label,children:"Name"}),Object(a.jsx)("input",{name:"name",type:"text",onChange:this.handleInput,value:this.state.name,id:x,className:v.a.input}),Object(a.jsx)("label",{htmlFor:C,className:v.a.label,children:"Number"}),Object(a.jsx)("input",{name:"number",type:"text",onChange:this.handleInput,value:this.state.number,id:C,className:v.a.input}),Object(a.jsx)("button",{className:v.a.button,children:"Add contact"})]})}}]),n}(c.Component),F=n(10),N=n.n(F),w=Object(d.a)(),y=function(t){var e=t.value,n=t.onChangeInput;return Object(a.jsxs)("div",{className:N.a.wrapper,children:[Object(a.jsx)("label",{htmlFor:w,className:N.a.label,children:"Find contacts by name"}),Object(a.jsx)("input",{name:"filter",value:e,onChange:n,id:w,className:N.a.input})]})},S=n(11),I=n.n(S),L=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.handleFilterInput=function(e){var n={filter:e.target.value};t.setState((function(t){return Object(s.a)(Object(s.a)({},t),n)}))},t.handleSubmit=function(e){var n=t.state.contacts;if(""!==e.name)if(n.find((function(t){return t.name===e.name})))alert("".concat(e.name," is already in contacts"));else{var a={id:Object(d.a)(),name:e.name,number:e.number};t.setState((function(t){var e=Object(s.a)({},t);return e.contacts=[].concat(Object(l.a)(e.contacts),[a]),e}))}else alert("Input is empty")},t.onDelete=function(e){t.setState((function(t){var n=Object(s.a)({},t);return n.contacts=Object(l.a)(n.contacts.filter((function(t){return t.id!==e.target.id}))),n}))},t}return Object(b.a)(n,[{key:"handleFilter",value:function(){var t=this.state,e=t.filter,n=t.contacts;return e?n.filter((function(t){return t.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())})):n}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:I.a.card,children:[Object(a.jsx)("h1",{className:I.a.title,children:"Phonebook"}),Object(a.jsx)(g,{handleSubmit:this.handleSubmit}),Object(a.jsx)("h2",{className:I.a.title,children:"Contacts"}),Object(a.jsx)(y,{value:this.state.filter,onChangeInput:this.handleFilterInput}),Object(a.jsx)(f,{contacts:this.handleFilter(),onDelete:this.onDelete})]})}}]),n}(c.Component),k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),k()},3:function(t,e,n){t.exports={input:"contactForm_input__KDKCL",label:"contactForm_label__FZd93",button:"contactForm_button__2BU3o",wrapper:"contactForm_wrapper__UPyN4"}},9:function(t,e,n){t.exports={button:"contactList_button__2-4AA",wrapper:"contactList_wrapper__2M9Ci",item:"contactList_item__YYrq6"}}},[[22,1,2]]]);
//# sourceMappingURL=main.8bf7e818.chunk.js.map