(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(7),o=n.n(s),a=(n(12),n(2)),i=n(3),u=n(5),h=n(4),l=(n(13),n(0));function j(e){return Object(l.jsx)("input",{className:"search-box",type:"search",placeholder:"search Monsters",onChange:e.onSearchChange})}n(15);var d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"mosnter",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),Object(l.jsx)("h2",{children:e.monster.name}),Object(l.jsx)("p",{children:e.monster.email})]})},b=(n(16),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return Object(l.jsx)("div",{className:"card-list",children:this.props.monsters.map((function(e){return Object(l.jsx)(d,{monster:e},e.id)}))})}}]),n}(c.Component)),m=(n(17),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,c=t.filter((function(e){return e.name.includes(n)}));return console.log("busqueda",n),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monsters Rolodex"}),Object(l.jsx)(j,{onSearchChange:this.onSearchChange}),Object(l.jsx)(b,{monsters:c})]})}}]),n}(c.Component)),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.dae2c26f.chunk.js.map