(this.webpackJsonpkanbanboard=this.webpackJsonpkanbanboard||[]).push([[0],{25:function(e,A,t){},30:function(e,A,t){},32:function(e,A,t){"use strict";t.r(A);var n=t(0),c=t.n(n),a=t(10),s=t.n(a),i=(t(25),t(11)),r=t(35),l=t(36),o=t(19),j=t(40),d=t(38),u=t(41),g=t(37),b=t(39),m=t(6);var f=function(){var e,A,t=Object(n.useState)([{name:"Derrick",list:["Derrick Lorem Ipsum 2"]},{name:"Maxwell",list:["Maxwell Lorem Ipsum","Maxwell Lorem Ipsum 2"]},{name:"Zazza",list:["Zazza Lorem Ipsum","Zazza Lorem Ipsum 2"]},{name:"Sam",list:["Sam Lorem Ipsum","Sam Lorem Ipsum 2"]}]),c=Object(i.a)(t,2),a=c[0],s=c[1],f=Object(n.useState)(!1),O=Object(i.a)(f,2),h=O[0],y=O[1],k=Object(n.useState)(""),v=Object(i.a)(k,2),B=v[0],x=v[1],D=Object(n.useState)(null),S=Object(i.a)(D,2),E=S[0],Q=S[1],p=Object(n.useState)(null),C=Object(i.a)(p,2),I=C[0],w=C[1],P=Object(n.useState)(!1),N=Object(i.a)(P,2),J=N[0],M=N[1],U=Object(n.useState)([]),L=Object(i.a)(U,2),F=L[0],T=L[1],Z=function(e){if(e){if(!B)return;if(J){var A=a;A[E].list[I]=B,s(A),x("")}else{var t=a;t[E].list.push(B),s(t),x("")}}y(!1)},V=function(e){Q(e),x(""),M(!1),y(!0)},R=function(e,A){e.preventDefault();var t,n=a,c=n[F[0]].list.splice(F[1],1);n[A].list.push(c[0]),t=n,setTimeout((function(){s(t)}),10),T([])};return Object(m.jsxs)("div",{children:[Object(m.jsx)(r.a,{fluid:"true",children:Object(m.jsx)(l.a,{className:"py-5 justify-content-center",children:Object(m.jsx)(o.a,{sm:"11",children:Object(m.jsx)(l.a,{className:"justify-content-center",children:a.map((function(e,A){return Object(m.jsx)(o.a,{md:"9",onDragOver:function(e){return function(e){e.preventDefault()}(e)},className:"mb-5",lg:"6",xl:"3",children:Object(m.jsx)(j.a,{className:"shadow border-0 rounded-0",children:Object(m.jsxs)(j.a.Body,{children:[Object(m.jsx)(j.a.Title,{children:e.name}),Object(m.jsxs)(d.a,{variant:"flush",onDropCapture:function(e){R(e,A)},children:[e.list.length>0&&Object(m.jsx)("div",{children:e.list.map((function(e,t){return Object(m.jsx)(d.a.Item,{className:"c-grab",onDragStart:function(e){!function(e,A,t){T([A,t])}(0,A,t)},draggable:"true",children:Object(m.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{alt:"grip line",draggable:"false",width:"10",className:"mr-3",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAAB0dHS0tLR5eXm3t7fc3NygoKD29vZjY2PAwMBmZmbS0tJOTk5VVVXx8fE7OztAQEBubm4REREeHh4nJyeoqKgLCwvQ0NCDg4MWFhY0NDTr6+tbW1vg4OCZmZnPBvjCAAABN0lEQVR4nO3cWVJCQRBFwQKZQZFJFBz2v0slJFyBRUU3mSs497frxYsAAAAAAAAAAAAAAAAAAAAgxWQ6GvZnNJ1c983mg14tZ5eB6+qMVOufhc/VEak2EYvqhmSLWFYnJNvGrjoh2T6qC9JZ2D4L22dh+yxsn4Xts7B9FrYvDtUFyQ4xqk5INopVdUKySXT+ULO9PJg+Vlckevp99J4eq0OS7F7+Dher8UN/xqubHn8AAAAAAID/0fvdotvb0/F6e+r+ftj3DXgY8VrdkGwSw+qEZG+xr05Idr6Db6KqA9JZ2D4L22dh+yxsn4Xts7B9d7DwVF2Q7NT5M81gsIxxdUKyRcS5uiHVJiLeqyNSXf5PE7OP6ow089n1Wf/zq8//RH3e9PgDAAAAAAAAAAAAAAAAAABwR74BUD07ZJeHcfMAAAAASUVORK5CYII="}),e]}),Object(m.jsx)("div",{className:"c-pointer",children:Object(m.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAT0SURBVHic7Z29i11FGIefN4ggfqS1S5FeAik2yaYT3E0jWFiKEGzsYu//kHQ2KljbpYkbLP0sAmIppE+ZvSsELPa1uOeEbPbjnq+ZeWfu74Hp9pwZzvPswJ579h5zd0QczMyAz4A94DrwPvA38AT4xt3/WXQ+BRAHM7sCfAd8eM6PvAC+Bh64+/EicyqAGJjZDnAAXB7w4w+BT939v7nzXpp7AjGfTv5jhskH+Bj40czenDu3AiiMmd1gLf+9kYcuEoECKEgn/4Dx8ntmR6AACrGA/J5ZESiAApjZTZaR3zM5AgWQmQTyeyZFoAAyYma3WMt/N9EUoyNQAJno5P9EOvk9oyJQABkws13yyO8ZHIECSEwn/xH55PcMikABJKTAb/7rbIxAASTCzG6zlv9O4aVcGIECSMdV4O3Si+g4NwIFkAh3/wH4AojyceuZESiAhLj79wSPQM8DZMDM7gLfAlZ6LR0PgU/c/Vg7QAaC7gT3QDtAVoLtBC+Aa9oBMhJsJ3gL+FIBTMTMrk45LlgE1xXABLqbPH+Z2f0pxweK4AMFMJJO/iPWd/juVR7BMwUwgtfk99QcwRMFMJBz5PfUGsEB7q6xYQC3gaNO0kXj/ow57gLHA+ZYavwMWPGLG32MkF9TBM+BK+5O8QsceUyQX0MEh8DOy/lKX+SoA9idKD9yBCfkK4B08iNGcAjcODVP6YsdbSwoP1IEZ8pXAOnlR4jgXPkKII/8khGsgJsXnrv0hY8wMsgvEcFG+Qogr/ycEayAW4POWVrAlsnPEcFg+VsdQEH5KSNYAbujzlVaREH5q4LyU0RwNFb+VgYQSP6SEUyS7+7b9VBowX/U3MQDd/9qyoFm9jnw1N1/mXT8tgQQWH7P5AjmsBUPhFQgH2Y8VDKH5gPovpkjuvye7BE0HUDGr2VZkqwRNBtApfJ7skXQZACVy+/JEkFzATQivyd5BE39GdiY/J5/gWvu/jTFyZvZARqWfyeVfGgkgMblT7rDN5TqA5D8eVQdgOTPp9oAJH8ZqgxA8pejugAkf1neyD3hHBqWv+/uv5aYvJodQPLTUEUA3WtWJD8B4QN45R07kp+A0AFIfnrCBiD5eQgZgOTnI1wAkp+XUAE0Kv+IoPIhUAANy78TVT4ECUDyy1E8AMkvS9EAGr3DV418KBjAK/KXfot2SaqSD4U+DWxY/r67/1Z6IWPIvgNIfiyyBmBmN5D8UGQLoJN/gOSHIksAkh+X5AFIfmySBiD58UkWgOTXQZIAJL8eFg9A8uti0QAkvz4WC0Dy62SRACS/XmYHIPl1MysAya+fyR8HNyx/z91/L72QXEzaASS/HUYHYGY7SH4zjAqgk/8YyW+GwQFIfpsMCkDy22VjAJLfNhcGIPntc24Akr8dnBlAo/JXSP4pTgXQsPx9yT/NiQAkf/t4GUCjd/gkfwOX4IT8y2WXsyiSPwADWpW/5+5/lF5IdAx4juRvLcb6DdatIPkjKf4VMQsi+RNoJQDJn0gLAUj+DGoPQPJnUnMAkr8AtQYg+QtRYwCSvyC1BSD5C1NTAJKfgFoCkPxE1BCA5CckegCSn5jIbw5dAR+5+5+lF9IyUXcAyc9ExAAkPyPRApD8zEQKQPILECUAyS9EhAAkvyClA5D8wpQMQPIDUCqAQyQ/BCUCOGR9e1fyA5A7AMkPRs4AJD8g/wNzi7NgWL0dxgAAAABJRU5ErkJggg==",draggable:"false",alt:"edit",width:"10",title:"edit",onClick:function(){!function(e,A){Q(e),w(A),M(!0),x(a[e].list[A]),y(!0)}(A,t)}})})]})},t)}))}),0===e.list.length&&Object(m.jsx)(d.a.Item,{onClick:function(){return V(A)},children:"Add or Drop Item"})]}),Object(m.jsx)(u.a,{variant:"secondary",className:"rounded-0 mt-3",size:"sm",block:!0,onClick:function(){return V(A)},children:"Add Task"})]})})},"tasks"+A)}))})})})}),Object(m.jsxs)(g.a,{className:"rounded-0",show:h,onHide:function(){Z(!1)},children:[Object(m.jsx)(g.a.Header,{closeButton:!0,children:Object(m.jsx)(g.a.Title,{children:J?"Edit ".concat(null===(e=a[E])||void 0===e?void 0:e.name,"'s task"):"Add task to ".concat(null===(A=a[E])||void 0===A?void 0:A.name)})}),Object(m.jsx)(g.a.Body,{children:Object(m.jsxs)(b.a.Group,{children:[Object(m.jsx)(b.a.Label,{children:"Task"}),Object(m.jsx)(b.a.Control,{value:B,onChange:function(e){return x(e.target.value)},type:"text"})]})}),Object(m.jsx)(g.a.Footer,{children:Object(m.jsx)(u.a,{variant:"primary",block:!0,className:"rounded-0",onClick:function(){Z(!0)},children:J?"Edit task":"Add task"})})]})]})};t(30);var O=function(){return Object(m.jsx)(f,{})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(A){var t=A.getCLS,n=A.getFID,c=A.getFCP,a=A.getLCP,s=A.getTTFB;t(e),n(e),c(e),a(e),s(e)}))};t(31);s.a.render(Object(m.jsx)(c.a.Suspense,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),h()}},[[32,1,2]]]);
//# sourceMappingURL=main.a7ea0250.chunk.js.map