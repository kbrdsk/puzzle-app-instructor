(this["webpackJsonpinstructor-app"]=this["webpackJsonpinstructor-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(0),a=n(1),s=n.n(a),i=n(11),u=n.n(i),o=n(6),l=n(2),p=n.n(l),d=n(4),v=n(5);function f(e){var t=e.students,n=Object(a.useState)(t),s=Object(r.a)(n,2),i=s[0],u=s[1];return Object(c.jsxs)("div",{className:"student-list-container",children:[Object(c.jsx)(j,Object(v.a)(Object(v.a)({},e),{},{setDisplayedStudents:u})),Object(c.jsx)("input",{type:"text",placeholder:"Filter",onChange:function(e){var n=e.target.value.split(" "),r=t.filter((function(e){var t=e.first,r=e.last;return n.every((function(e){var n=new RegExp(e,"i");return t.match(n)||r.match(n)}))}));u(r)}}),Object(c.jsx)("ul",{className:"student-list",children:i.map(h.bind(null,e))})]})}function j(e){var t=e.students,n=e.setStudents,r=e.setDisplayedStudents,a=function(){var e=Object(d.a)(p.a.mark((function e(){var c,a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat("https://immense-everglades-63113.herokuapp.com/api","/students"),e.next=3,fetch(c,{headers:{authorization:"testingpw"}});case 3:if(!(a=e.sent).ok){e.next=18;break}return e.prev=5,e.next=8,a.json();case 8:s=e.sent.map((function(e){return t.find((function(t){var n=t.first,r=t.last;return n===e.first&&r===e.last}))||e})),n(s),r(s),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0);case 16:e.next=19;break;case 18:console.log("HTTP error, status = "+a.status);case 19:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)("button",{className:"refresh-students",onClick:a,children:"Refresh"})}function h(e,t){var n=e.students,r=e.setStudents,a=t.first,s=t.last,i=t.active;return Object(c.jsxs)("li",{children:[m(a)," ",m(s)," ",Object(c.jsx)("input",{type:"checkbox",name:"active",id:"".concat(a,"_").concat(s,"-active"),defaultChecked:!!i,onChange:function(){t.active=!i,r(Object(o.a)(n))}})]},"".concat(a," ").concat(s))}function m(e){return e.replace(/^./,(function(e){return e.toUpperCase()}))}var b=n(10);function x(e){var t=e.data,n=t.size,r=function(e){var t=e.size,n=e.cages,r=e.work;return Array(Math.pow(t,2)).fill(null).map((function(){for(var e=arguments.length,c=new Array(e),a=0;a<e;a++)c[a]=arguments[a];var s=c[1],i=Math.floor(s/t),u=s%t,o=z({col:i,row:u}),l=r.find(o),p=n.find((function(e){return e.squares.find(o)})),d=w({col:i,row:u},p),v=p.squares.every((function(e){return e.col>=i&&(e.row>=u||e.col>i)})),f=v?p.result:null,j=v?p.operation:null,h=l?l.value:null;return{col:i,row:u,value:h,neighbors:d,result:f,operation:j}}))}(t);return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"puzzle-container",size:n,children:Object(c.jsx)("div",{className:"grid-container",size:n,children:r.map(O)})})})}function O(e){var t="calcudoku-square "+e.neighbors.join(" ");return Object(c.jsxs)("div",{className:t,children:[Object(c.jsxs)("div",{className:"cage-indicator",children:[e.result,e.operation]}),Object(c.jsx)("input",{type:"number",value:e.value||"",disabled:!0})]})}function w(e,t){var n=[],r={"n-up":{col:e.col-1,row:e.row},"n-down":{col:e.col+1,row:e.row},"n-left":{col:e.col,row:e.row-1},"n-right":{col:e.col,row:e.row+1}};for(var c in r){var a=z(r[c]);t.squares.find(a)&&n.push(c)}return n}function z(e){var t=e.col,n=e.row;return function(e){return e.col===t&&e.row===n}}function g(e){var t=e.data,n=t.description,r=t.work;return Object(c.jsxs)("div",{className:"logic",children:[Object(c.jsx)("p",{className:"description",children:n}),Object(c.jsx)("p",{className:"work",children:r})]})}function k(e){var t=e.data,n=t.work,s=Object(a.useState)(t.workPosition||0),i=Object(r.a)(s,2),u=i[0],o=i[1],l=t.size,p=l.cols,d=l.rows,v=t.beginstate,f=t.neighborType,j=function(e){var t=e.row,n=e.col;switch(f){case"x":return[{row:t-1,col:n-1},{row:t+1,col:n+1},{row:t+1,col:n-1},{row:t-1,col:n+1},{row:t,col:n}];default:return[{row:t-1,col:n},{row:t+1,col:n},{row:t,col:n-1},{row:t,col:n+1},{row:t,col:n}]}},h=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];var s=r[1],i=j({row:e,col:s}),o=n.slice(0,u).filter((function(e){return i.some(N(e))})),l=(o.length+(v.some(N({row:e,col:s}))?1:0))%2>0,p="light-square ".concat(l?"active":"inactive");return Object(c.jsx)("div",{className:p})},m=function(e){return o(e)};return Object(c.jsxs)("div",{className:"light-puzzle-container",children:[Object(c.jsx)("div",{className:"light-grid",cols:p,rows:d,children:new Array(d).fill(null).map((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[1];return Object(c.jsx)("div",{className:"grid-row",children:Array(p).fill(null).map(h.bind(null,r))})}))}),Object(c.jsxs)("div",{className:"controller",children:[Object(c.jsx)(q,{jump:function(){return m(0)},isactive:u>0}),Object(c.jsx)(y,{step:function(){return m(Math.max(u-1,0))},isactive:u>0}),Object(c.jsx)(S,{step:function(){return m(Math.min(u+1,n.length))},isactive:u<n.length}),Object(c.jsx)(C,{jump:function(){return m(n.length)},isactive:u<n.length})]})]})}function N(e){var t=e.row,n=e.col;return function(e){return e.col===n&&e.row===t}}function y(e){var t=e.step,n=e.isactive;return Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2048",height:"2048",viewBox:"0 0 2048 2048",onClick:t,className:"step back nav-button",isactive:n.toString(),children:Object(c.jsx)("path",{d:"M1344 576v896q0 26-19 45t-45 19-45-19l-448-448q-19-19-19-45t19-45l448-448q19-19 45-19t45 19 19 45z"})})}function q(e){var t=e.jump,n=e.isactive;return Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2048",height:"2048",viewBox:"0 0 2048 2048",onClick:t,className:"jump back nav-button",isactive:n.toString(),children:Object(c.jsx)("path",{d:"M1811 269q19-19 32-13t13 32v1472q0  26-13 32t-32-13l-710-710q-8-9-13-19v710q0  26-13 32t-32-13l-710-710q-19-19-19-45t19-45l710-710q19-19  32-13t13 32v710q5-11 13-19z"})})}function S(e){var t=e.step,n=e.isactive;return Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2048",height:"2048",viewBox:"0 0 2048 2048",onClick:t,className:"step forward nav-button",isactive:n.toString(),children:Object(c.jsx)("path",{d:"M1280 1024q0 26-19 45l-448 448q-19 19-45  19t-45-19-19-45v-896q0-26 19-45t45-19 45  19l448 448q19 19 19 45z"})})}function C(e){var t=e.jump,n=e.isactive;return Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2048",height:"2048",viewBox:"0 0 2048 2048",onClick:t,className:"jump forward nav-button",isactive:n.toString(),children:Object(c.jsx)("path",{d:"M237 1779q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710  710q8 8 13 19v-710q0-26 13-32t32 13l710 710q19 19 19 45t-19  45l-710 710q-19 19-32 13t-13-32v-710q-5 10-13 19z"})})}var M={calcudoku:function(e){return Object(c.jsx)(x,{data:e})},logic:function(e){return Object(c.jsx)(g,{data:e})},light:function(e){return Object(c.jsx)(k,{data:e})}},I={activepuzzle:!0,puzzleName:"calcudoku",puzzleId:"4x4beginner1"};function A(e){var t=Object(a.useState)(new Map),n=Object(r.a)(t,2),s=n[0],i=n[1],u=Object(a.useState)(new Map),l=Object(r.a)(u,2),f=l[0],j=l[1],h=Object(a.useState)(new Map),m=Object(r.a)(h,2),x=m[0],O=m[1],w=Object(a.useState)(new Map),z=Object(r.a)(w,2),g=z[0],k=z[1],N=Object(a.useMemo)((function(){return e.students.filter((function(e){return e.active}))}),[e.students]);Object(a.useEffect)((function(){j((function(t){var n=new Map(t);return e.students.forEach((function(e){n.has(e)||n.set(e,I)})),n}))}),[e.students,j]);var y=Object(a.useCallback)(function(){var e=Object(d.a)(p.a.mark((function e(t){var n,r,c,a,s,i,u,o,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.first,r=t.last,c=f.get(t),a=c.activepuzzle,s=c.puzzleName,i=c.puzzleId,u=a?"activepuzzle":"".concat(s,"/").concat(i),o="https://immense-everglades-63113.herokuapp.com/api"+"/students/".concat(n,"_").concat(r,"/").concat(u),e.next=6,fetch(o,{headers:{authorization:"testingpw"}});case 6:return l=e.sent,e.next=9,l.json();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[f]),q=Object(a.useCallback)(function(){var e=Object(d.a)(p.a.mark((function e(t){var n,r,c,a,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.first,r=t.last,c=f.get(t),a=c.puzzleName,s="https://immense-everglades-63113.herokuapp.com/api"+"/students/".concat(n,"_").concat(r,"/").concat(a,"/completed"),e.next=5,fetch(s,{headers:{authorization:"testingpw"}});case 5:return i=e.sent,e.next=8,i.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[f]),S=Object(a.useCallback)(function(){var e=Object(d.a)(p.a.mark((function e(t,n){var r,c,a,i,u,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.first,c=t.last,a=s.get(t),i=a.puzzleName,u=a.puzzleId,o="https://immense-everglades-63113.herokuapp.com/api"+"/students/".concat(r,"_").concat(c,"/").concat(i,"/").concat(u,"/completed"),fetch(o,{method:"PUT",headers:{"Content-Type":"application/json",authorization:"testingpw"},body:JSON.stringify({completed:n})});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[s]),C=Object(a.useCallback)(function(){var e=Object(d.a)(p.a.mark((function e(t){var n,r,c,a,s,i,u,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.first,r=t.last,c="https://immense-everglades-63113.herokuapp.com/api"+"/students/".concat(n,"_").concat(r,"/activepuzzle"),e.next=4,fetch(c,{headers:{authorization:"testingpw"}});case 4:return a=e.sent,e.next=7,a.json();case 7:if(s=e.sent,i=s.puzzleName,u=s.puzzleId,l=Object(b.a)(s,["puzzleName","puzzleId"]),i){e.next=13;break}return e.abrupt("return");case 13:O((function(e){var n=e.get(t)||{},r=n[i]||{},c=r[u]||[];if(!c[0]||JSON.stringify(Object(v.a)({puzzleId:u},l))!==JSON.stringify(c[0].data)){r[u]=[{data:Object(v.a)({puzzleId:u},l),timestamp:Date.now()}].concat(Object(o.a)(c)),n[i]=r;var a=new Map(e);return a.set(t,n),a}return e}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[O]),A=Object(a.useCallback)(Object(d.a)(p.a.mark((function e(){var t,n,c,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Promise.all(N.map(function(){var e=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(t),e.next=3,y(t);case 3:return n=e.sent,e.abrupt("return",[t,n]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),Promise.all(N.map(function(){var e=Object(d.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t);case 2:return n=e.sent,e.abrupt("return",[t,n]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))]);case 2:t=e.sent,n=Object(r.a)(t,2),c=n[0],a=n[1],i((function(e){var t=new Map(e);return c.forEach((function(e){return t.set.apply(t,Object(o.a)(e))})),t})),k((function(e){var t=new Map(e);return a.forEach((function(e){return t.set.apply(t,Object(o.a)(e))})),t})),console.log("refreshed");case 9:case"end":return e.stop()}}),e)}))),[N,i,y,C,k,q]);Object(a.useEffect)((function(){A();var e=setInterval(A,2e3);return function(){return clearInterval(e)}}),[A]);var E=function(t,n,r){var c=Object(v.a)({},f.get(t));c[n]=r,"puzzleName"===n&&(c.puzzleId=e.puzzleDirectory[r][0]);var a=new Map(f);a.set(t,c),j(a)},J=function(e){var t=s.get(e)||{},n=t.puzzleName,r=t.completed,a=Object(b.a)(t,["puzzleName","completed"]),i=M[n];return i?Object(c.jsxs)("div",{className:"student-puzzle",children:[i(a),Object(c.jsxs)("div",{className:"completion",children:["Completed:"," ",Object(c.jsx)("span",{className:"completed-check ".concat(r?"complete":"incomplete"),onClick:function(){return S(e,!r)},children:r?"\u2713":"\u25ef"})]})]}):null},P=function(e){var t=x.get(e);if(!t)return null;var n=e.first,r=e.last,a=Object.keys(t).flatMap((function(e){return Object.keys(t[e]).map((function(n){var r=t[e][n][0],c=r.data.puzzleId,a=r.timestamp;return{puzzleName:e,puzzleId:c,timestamp:a}}))})).sort((function(e,t){return e.timestamp>t.timestamp?-1:1}));return Object(c.jsx)("select",{name:"history-select",className:"history-select",id:"history-".concat(n,"-").concat(r),onChange:function(t){var n=JSON.parse(t.target.value),r=n.puzzleName,c=n.puzzleId;E(e,"puzzleName",r),E(e,"puzzleId",c)},children:a.map((function(e){var t=e.puzzleName,n=e.puzzleId,r=e.timestamp,a=new Date(r).toLocaleTimeString();return Object(c.jsxs)("option",{value:JSON.stringify({puzzleName:t,puzzleId:n}),children:[n," ",a]})}))})},_=function(t){var n=e.puzzleDirectory,r=f.get(t).puzzleName,a=s.get(t),i=g.get(t),u=r?n[r]:[];return Object(c.jsxs)("div",{className:"puzzle-select",children:[Object(c.jsx)("select",{name:"type-select",id:"type-select",value:r,onChange:function(e){return E(t,"puzzleName",e.target.value)},children:Object.keys(n).map((function(e){return Object(c.jsx)("option",{value:e,children:e})}))}),Object(c.jsx)("ul",{children:u.map((function(e){var n=!!i&&g.get(t)[e],r=!!a&&a.puzzleId===e;return Object(c.jsxs)("li",{onClick:function(){return E(t,"puzzleId",e)},className:r?"active":"",children:[Object(c.jsx)("span",{className:"completed-check ".concat(n?"complete":"incomplete"),onClick:function(){return S(t,!n)},children:n?"\u2713":"\u25cb "}),e]})}))})]})},T=function(e){var t=x.get(e)||{};return Object.keys(t).some((function(e){return Object.keys(t[e]).some((function(n){var r=t[e][n][0].timestamp;return Date.now()-r<6e4}))}))};return Object(c.jsx)("ul",{className:"puzzle-display",children:N.map((function(e){var t=e.first,n=e.last,r=f.get(e),a=r?r.activepuzzle:null;return Object(c.jsxs)("li",{className:"student-display",children:[Object(c.jsxs)("div",{className:"student-header",children:[Object(c.jsxs)("div",{className:"student-name",children:[D(t)," ",D(n)]}),Object(c.jsx)("div",{className:"activity-indicator",children:T(e)?null:"Inactive"}),P(e),Object(c.jsxs)("div",{className:"show-active",children:["Show Active Puzzle:",Object(c.jsx)("input",{type:"checkbox",name:"active",id:"".concat(t,"_").concat(n,"-active"),checked:!!a,onChange:function(){return E(e,"activepuzzle",!a)}})]})]}),_(e),J(e)]},"".concat(t,"_").concat(n))}))})}function D(e){return e.replace(/^./,(function(e){return e.toUpperCase()}))}n(18);var E={calcudoku:["4x4beginner1","4x4beginner2","4x4beginner3","4x4beginner4","4x4beginner5","4x4intermediate1","4x4intermediate2","4x4intermediate3","4x4intermediate4","4x4expert1","4x4expert2","4x4expert3","5x5beginner1","5x5beginner2","5x5intermediate1"],logic:["wolfgoatcabbage","torch","goldboxes","10coins","socks","childrenboat","applesandoranges","averybobbycam","bear","hats"],light:["small","medium","large","smallx","mediumx","largex"].flatMap((function(e){return Array.from({length:5},(function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var c=n[1];return"".concat(e).concat(c+1)}))}))};function J(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)(f,{students:n,setStudents:s}),Object(c.jsx)(A,{students:n,puzzleDirectory:E})]})}u.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(J,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.12c01bbb.chunk.js.map