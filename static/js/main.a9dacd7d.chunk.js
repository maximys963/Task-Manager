(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{207:function(e,a,t){e.exports=t(384)},216:function(e,a,t){},337:function(e,a,t){},338:function(e,a,t){},339:function(e,a,t){},353:function(e,a,t){},354:function(e,a,t){},355:function(e,a,t){},358:function(e,a,t){},383:function(e,a,t){},384:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"changeName",function(){return w}),t.d(n,"changeEmail",function(){return y}),t.d(n,"changeTask",function(){return N}),t.d(n,"sendTask",function(){return T}),t.d(n,"addTask",function(){return C});var r={};t.r(r),t.d(r,"searchTask",function(){return G});var c={};t.r(c),t.d(c,"changePage",function(){return I});var o={};t.r(o),t.d(o,"toggleTask",function(){return K}),t.d(o,"toggleChange",function(){return W}),t.d(o,"taskChange",function(){return F});var i={};t.r(i),t.d(i,"changeUsername",function(){return B}),t.d(i,"changePassword",function(){return J}),t.d(i,"nameError",function(){return X}),t.d(i,"passwordError",function(){return q}),t.d(i,"validatedName",function(){return $}),t.d(i,"validatedPassword",function(){return z}),t.d(i,"logedAsAdmin",function(){return Q});var l=t(0),u=t.n(l),s=t(66),d=t.n(s),m=t(31),g=t(45),p=t(46),f=t(49),h=t(47),E=t(50),v=t(20),b=t(398),O=t(395),k=t(396),A=t(386),j="SEND_TASK",w=function(e){return{type:"CHANGE_NAME",value:e}},y=function(e){return{type:"CHANGE_EMAIL",value:e}},N=function(e){return{type:"CHANGE_TASK",value:e}},T=function(e){return{type:j,task:e}},C=function(e){return{type:"ADD_TASK",task:e}},_=t(173),D=t.n(_),x=(t(216),function(e){function a(){var e,t;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(f.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).addTask=function(e){var a=t.props,n=a.addTask,r=a.changeName,c=a.changeEmail,o=a.changeTask,i=D()();n(Object(v.a)({},e,{visible:!0,changed:!1,id:i,status:0})),r(""),c(""),o("")},t}return Object(E.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.changeName,n=a.changeEmail,r=a.changeTask,c=a.name,o=a.email,i=a.task;return u.a.createElement(b.a,{className:"form-container"},u.a.createElement(b.a.Group,{widths:"equal"},u.a.createElement(b.a.Field,{value:c,control:O.a,label:"User Name",placeholder:"User Name",onChange:function(e){return t(e.target.value)}}),u.a.createElement(b.a.Field,{value:o,control:O.a,label:"Email",placeholder:"Email",onChange:function(e){return n(e.target.value)}})),u.a.createElement(b.a.Field,{value:i,control:k.a,label:"Task",placeholder:"Write your task here ...",onChange:function(e){return r(e.target.value)}}),u.a.createElement(b.a.Field,{control:A.a,onClick:function(){return e.addTask({username:c,email:o,text:i})}},"Create"))}}]),a}(l.Component)),S=Object(m.b)(function(e){return{name:e.formReducer.name,email:e.formReducer.email,task:e.formReducer.task}},n)(x),R=t(400),G=function(e){return{type:"SEARCH",string:e}},P=(t(337),Object(m.b)(null,r)(function(e){var a=e.searchTask;return u.a.createElement("div",{className:"search-container"},u.a.createElement(O.a,{className:"search-input",icon:"search",placeholder:"Search...",onChange:function(e){return a(e.target.value)}}))})),M=t(394),H=(t(338),function(e){function a(){return Object(g.a)(this,a),Object(f.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this.props,a=e.username,t=e.email,n=e.status,r=e.adm_permission,c=e.text,o=e.toggleTask,i=e.toggleChange,l=e.taskChange,s=e.changed;return u.a.createElement(R.a,{color:10===n?"grey":"green"},u.a.createElement(R.a.Content,null,u.a.createElement(R.a.Header,null,a),u.a.createElement(R.a.Meta,null,t),u.a.createElement(R.a.Description,{onClick:function(){return!0===r?i():null},style:10===n?{textDecoration:"line-through"}:{textDecoration:"none"}},c),!0===r&&!0===s?u.a.createElement("div",null,u.a.createElement(k.a,{className:"change-textarea",autoHeight:!0,value:c,onChange:function(e){return l(e)}}),u.a.createElement(A.a,{style:{marginTop:"10px"},inverted:!0,color:"green",onClick:function(){return i()}},"Change")):null),!0===r?u.a.createElement(R.a.Content,{extra:!0,className:"card-bottom"},u.a.createElement("label",null,"Done"),u.a.createElement(M.a,{toggle:!0,checked:10===n,onChange:function(){return o()}})):null)}}]),a}(l.Component)),L=t(399),I=function(e){return{type:"CHANGE_PAGE",page:e}},V=(t(339),Object(m.b)(function(e){return{defaultPage:e.pagination.currentPage}},c)(function(e){var a=e.amount,t=e.defaultPage,n=e.changePage;return u.a.createElement("div",{className:"pagination-container"},u.a.createElement(L.a,{defaultActivePage:t,totalPages:Math.ceil(a/3),onPageChange:function(e,a){var t=a.activePage;return n(t)}}))})),K=function(e){return{type:"TOGGLE_TASK",payload:e}},W=function(e){return{type:"TOGGLE_CHANGE",id:e}},F=function(e){return{type:"TASK_CHANGE",payload:e}},U=(t(353),Object(m.b)(function(e){return{tasks:e.mainReducer,adm_permission:e.login.admin,currentPage:e.pagination.currentPage}},o)(function(e){var a=e.tasks,t=e.adm_permission,n=e.toggleTask,r=e.toggleChange,c=e.currentPage,o=e.taskChange;return u.a.createElement("div",{className:"tasklist-container"},u.a.createElement(P,null),u.a.createElement(R.a.Group,{className:"tasklist-group"},a.slice(3*c-3,3*c).map(function(e,a){return!0===e.visible?u.a.createElement(H,{key:a,username:e.username,email:e.email,status:e.status,id:e.id,text:e.text,changed:e.changed,taskChange:function(a){return o({id:e.id,text:a.target.value})},toggleChange:function(){return r(e.id)},toggleTask:function(){return n({id:e.id,status:e.status})},adm_permission:t}):null})),u.a.createElement(V,{amount:a.length}))})),B=function(e){return{type:"CHANGE_USERNAME",value:e}},J=function(e){return{type:"CHANGE_PASSWORD",value:e}},X=function(e){return{type:"NAME_ERROR",toggle:e}},q=function(e){return{type:"PASSWORD_ERROR",toggle:e}},$=function(e){return{type:"VALIDATED_NAME",toggle:e}},z=function(e){return{type:"VALIDATED_PASSWORD",toggle:e}},Q=function(){return{type:"ADMIN_LOGIN"}},Y=(t(354),function(e){function a(){var e,t;Object(g.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(f.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).validation=function(e){var a=t.props,n=a.nameError,r=a.passwordError,c=a.validatedName,o=a.validatedPassword;"username"===e.placeholder?"admin"===e.value?(n(!1),c(!0)):n(!0):"password"===e.placeholder&&("123"===e.value?(r(!1),o(!0)):r(!0))},t.loginToggle=function(){var e=t.props,a=e.nameDidValidated,n=e.passwordDidValidated,r=e.logedAsAdmin;console.log(a),console.log(n),a&&n&&(console.log("you are logged"),r())},t}return Object(E.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.changeUsername,n=a.changePassword,r=a.username,c=a.password,o=a.invalidName,i=a.invalidPassword;return u.a.createElement(b.a,{className:"login-container"},u.a.createElement(b.a.Field,null,u.a.createElement("label",null,"User name"),u.a.createElement("input",{placeholder:"username",value:r,onChange:function(e){return t(e.target.value)},onBlur:function(a){return e.validation(a.target)}})),u.a.createElement("div",{style:{color:"tomato"}},o?"invalid user":null),u.a.createElement(b.a.Field,null,u.a.createElement("label",null,"Password"),u.a.createElement("input",{value:c,placeholder:"password",type:"password",onChange:function(e){return n(e.target.value)},onBlur:function(a){return e.validation(a.target)}}),u.a.createElement("div",{style:{color:"tomato"}},i?"invalid password":null)),u.a.createElement(A.a,{basic:!0,color:"green",className:"login-button",type:"submit",onClick:this.loginToggle},"Log In"))}}]),a}(l.Component)),Z=Object(m.b)(function(e){return{username:e.login.user,password:e.login.password,invalidName:e.login.nameError,invalidPassword:e.login.passwordError,nameDidValidated:e.login.nameDidValidated,passwordDidValidated:e.login.passwordDidValidated}},i)(Y),ee=t(397),ae=(t(355),function(){return u.a.createElement("div",{className:"menu-container"},u.a.createElement(ee.a,{to:"/Task-Manager",className:"link"},"All tasks"),u.a.createElement(ee.a,{to:"/Task-Manager/form",className:"link"},"Create task"),u.a.createElement(ee.a,{to:"/Task-Manager/login",className:"link"},"Sign in"))}),te=t(401),ne=t(403),re=t(402),ce=(t(358),function(e){function a(){return Object(g.a)(this,a),Object(f.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(E.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return u.a.createElement(te.a,null,u.a.createElement("div",{className:"App"},u.a.createElement(ae,null),u.a.createElement(ne.a,null,u.a.createElement(re.a,{exact:!0,path:"/Task-Manager",component:U}),u.a.createElement(re.a,{path:"/Task-Manager/form",component:S}),u.a.createElement(re.a,{path:"/Task-Manager/login",component:Z}))))}}]),a}(l.Component)),oe=t(42),ie=t(194),le="FETCH_DATA",ue="WRITE_TO_STORE",se=t(36),de=[{email:"rob@gmail.com",id:"213",status:10,text:"relax",username:"Roberto",visible:!0,changed:!1},{email:"kim@gmail.com",id:"214",status:0,text:"relax",username:"Kim",visible:!0,changed:!1},{email:"aang@gmail.com",id:"215",status:0,text:"Bring balance",username:"Anng",visible:!0,changed:!1},{email:"john_doe@gmail.com",id:"216",status:0,text:"Lorem ipsum dolor sit amet",username:"John Doe",visible:!0,changed:!1},{email:"enakin_skywalker@gmail.com",id:"217",status:0,text:"Lorem ipsum dolor sit amet",username:"Enakin Skywalker",visible:!0,changed:!1}],me={name:"",email:"",task:""},ge={admin:!1,user:"",password:"",nameError:!1,passwordError:!1,nameDidValidated:!1,passwordDidValidated:!1},pe={currentPage:1},fe=t(32),he=t.n(fe),Ee=t(99),ve=t.n(Ee),be=t(52),Oe=he.a.mark(we),ke=he.a.mark(ye),Ae="Maxim";function je(e){var a=new FormData;return a.append("username",e.name),a.append("email",e.email),a.append("text",e.task),ve()({url:"https://uxcandy.com/~shapoval/test-task-backend/create?developer=".concat(Ae),crossDomain:!0,method:"POST",mimeType:"multipart/form-data",contentType:!1,processData:!1,data:a,dataType:"json"})}function we(e){var a;return he.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(be.b)(je,e.task);case 2:a=t.sent,console.log(a.data);case 4:case"end":return t.stop()}},Oe,this)}function ye(){return he.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(be.d)(j,we);case 2:case"end":return e.stop()}},ke,this)}var Ne=he.a.mark(xe),Te=he.a.mark(Se),Ce=he.a.mark(Re),_e="Maxim";function De(){return console.log("here"),ve()({url:"https://uxcandy.com/~shapoval/test-task-backend/?developer=".concat(_e),method:"GET"})}function xe(){var e,a;return he.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(be.b)(De);case 2:return e=t.sent,console.log(e.data.message.tasks),a=e.data.message.tasks.map(function(e){return Object(v.a)({},e,{visible:!0,changed:!1})}),console.log(a),t.next=8,Object(be.c)({type:ue,data:a});case 8:case"end":return t.stop()}},Ne,this)}function Se(){return he.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(be.d)(le,xe);case 2:case"end":return e.stop()}},Te,this)}function Re(){return he.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(be.a)([Se(),ye()]);case 2:case"end":return e.stop()}},Ce,this)}var Ge=Object(oe.c)({mainReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case ue:return[].concat(Object(se.a)(e),Object(se.a)(a.data));case"TOGGLE_TASK":var t=e.findIndex(function(e){return e.id===a.payload.id});return[].concat(Object(se.a)(e.slice(0,t)),[Object(v.a)({},e[t],{status:10===a.payload.status?0:10})],Object(se.a)(e.slice(t+1)));case"TASK_CHANGE":var n=e.findIndex(function(e){return e.id===a.payload.id});return[].concat(Object(se.a)(e.slice(0,n)),[Object(v.a)({},e[n],{text:a.payload.text})],Object(se.a)(e.slice(n+1)));case"TOGGLE_CHANGE":var r=e.findIndex(function(e){return e.id===a.id});return[].concat(Object(se.a)(e.slice(0,r)),[Object(v.a)({},e[r],{changed:!e[r].changed})],Object(se.a)(e.slice(r+1)));case"SEARCH":var c=e.map(function(e){return-1===e.username.toLowerCase().indexOf(a.string.toLowerCase())?Object(v.a)({},e,{visible:!1}):Object(v.a)({},e,{visible:!0})});return Object(se.a)(c);case"ADD_TASK":return e.concat(a.task);default:return e}},formReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE_NAME":return Object(v.a)({},e,{name:a.value});case"CHANGE_EMAIL":return Object(v.a)({},e,{email:a.value});case"CHANGE_TASK":return Object(v.a)({},e,{task:a.value});default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE_USERNAME":return Object(v.a)({},e,{user:a.value});case"CHANGE_PASSWORD":return Object(v.a)({},e,{password:a.value});case"NAME_ERROR":return Object(v.a)({},e,{nameError:a.toggle});case"PASSWORD_ERROR":return Object(v.a)({},e,{passwordError:a.toggle});case"VALIDATED_NAME":return Object(v.a)({},e,{nameDidValidated:a.toggle});case"VALIDATED_PASSWORD":return Object(v.a)({},e,{passwordDidValidated:a.toggle});case"ADMIN_LOGIN":return Object(v.a)({},e,{admin:!0});default:return e}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CHANGE_PAGE":return Object(v.a)({},e,{currentPage:a.page});default:return e}}}),Pe=Object(ie.a)(),Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.d,He=Object(oe.e)(Ge,{},Me(Object(oe.a)(Pe)));Pe.run(Re),He.dispatch({type:le});t(383),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(u.a.createElement(function(){return u.a.createElement(m.a,{store:He},u.a.createElement(ce,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[207,1,2]]]);
//# sourceMappingURL=main.a9dacd7d.chunk.js.map