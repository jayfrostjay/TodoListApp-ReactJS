(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{33:function(t,e,n){t.exports=n(61)},60:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(28),c=n.n(r),l=n(17),i=n(6),s=n(7),u=n(8),d=n(9),p=n(13),m=n(10),f=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:a.props.todo.completed?"line-through":"none"}},a}return Object(s.a)(n,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,e)})," "," ",n,o.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:h},"x")))}}]),n}(a.Component),h={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",float:"right",borderRadius:"50%",cursor:"pointer"},b=f,v=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){return Object(i.a)(this,n),e.call(this,t)}return Object(s.a)(n,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e,n){return o.a.createElement(b,{key:e.id,todo:e,delTodo:t.props.delTodo,markComplete:t.props.markComplete})}))}}]),n}(a.Component),y=n(29),g=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={title:""},t.onChange=function(e){return t.setState(Object(y.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo...",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{className:"btn",type:"submit",value:"Submit",style:{flex:"1"}}))}}]),n}(a.Component);var E={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},j={color:"#fff",textDecoration:"none"},k=function(){return o.a.createElement("header",{style:E},o.a.createElement("h1",null,"TodoList"),o.a.createElement(p.b,{style:j,to:"/"},"Home")," | ",o.a.createElement(p.b,{style:j,to:"/about"},"About"))};var O=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"ReactJS - Basic TodoList App v1.0.0"))},x=n(63),C=n(32),S=n.n(C),T=(n(60),function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id==e&&(t.completed=!t.completed),t}))})},t.delTodo=function(e){t.setState({todos:Object(l.a)(t.state.todos.filter((function(t){return t.id!==e})))})},t.addTodo=function(e){var n={id:Object(x.a)(),title:e,complete:!1};t.setState({todos:[].concat(Object(l.a)(t.state.todos),[n])})},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;S.a.get("http://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(k,null),o.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g,{addTodo:t.addTodo}),o.a.createElement(v,{todos:t.state.todos,markComplete:t.markComplete,delTodo:t.delTodo}))}}),o.a.createElement(m.a,{path:"/about",component:O}))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.99f65a39.chunk.js.map