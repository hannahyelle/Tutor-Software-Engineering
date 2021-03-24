(this["webpackJsonptutor-app"]=this["webpackJsonptutor-app"]||[]).push([[0],{17:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),r=n(9),c=n.n(r),o=(n(17),n(7)),i=n.n(o),u=n(8),p=n(3),l=n(4),d=n(6),h=n(5),b=n(12),j=n(1),f=new function e(){Object(p.a)(this,e),Object(j.h)(this,{loading:!0,isLoggedIn:!1,username:""})},g=n(2),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"submitButton",children:Object(g.jsx)("button",{className:"btn",disabled:this.props.disabled,onClick:function(){return e.props.onCLick()},children:this.props.text})})}}]),n}(a.a.Component),m=n(11),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"inputField",children:Object(g.jsx)("input",{className:"input",type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}})})}}]),n}(a.a.Component),x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var s;return Object(p.a)(this,n),(s=t.call(this,e)).state={username:"",password:"",buttonDisabled:!1},s}return Object(l.a)(n,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>12||this.setState(Object(m.a)({},e,t))}},{key:"resetForm",value:function(){this.setState({username:"",password:"",buttonDisabled:!1})}},{key:"doLogin",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.username){e.next=2;break}return e.abrupt("return");case 2:if(this.state.password){e.next=4;break}return e.abrupt("return");case 4:return this.setState({buttonDisabled:!0}),e.prev=5,e.next=8,fetch("/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})});case 8:return t=e.sent,e.next=11,t.json();case 11:(n=e.sent)&&n.success?(f.isLogginIn=!0,f.username=n.username):n&&!1===n.success&&(this.resetForm(),alert(n.msg)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0),this.resetForm();case 19:case"end":return e.stop()}}),e,this,[[5,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"login Form",children:[Object(g.jsx)(O,{type:"text",placeholder:"Username",value:this.state.username?this.state.username:"",onChange:function(t){return e.setInputValue("username",t)}}),Object(g.jsx)(O,{type:"text",placeholder:"Password",value:this.state.password?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),Object(g.jsx)(v,{text:"Login",disabled:this.state.buttonDisabled,onClick:function(){return e.doLogin()}})]})}}]),n}(a.a.Component),y=(n(21),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success?(f.loading=!1,f.isLoggedIn=!0,f.usernmae=n.username):(f.loading=!1,f.isLoggedIn=!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),f.loading=!1,f.isLoggedIn=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success&&(f.loading=!1,f.isLoggedIn=!1,f.usernmae=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return f.loading?Object(g.jsx)("div",{className:"app",children:Object(g.jsx)("div",{className:"container",children:"Loading, please wait.."})}):(f.isLoggedIn&&f.username,Object(g.jsx)("div",{clasName:"app",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsx)(x,{})})}))}}]),n}(a.a.Component)),k=Object(b.a)(y),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root")),w()}},[[22,1,2]]]);
//# sourceMappingURL=main.282c7f60.chunk.js.map