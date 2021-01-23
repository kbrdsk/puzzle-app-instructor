(this["webpackJsonpinstructor-app"]=this["webpackJsonpinstructor-app"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n(0),c=n(1),s=n.n(c),i=n(13),o=n.n(i),u=n(6),l=n(3),d=n.n(l),p=n(5),h=n(2);function f(e){var t=e.students,n=Object(c.useState)(t),s=Object(r.a)(n,2),i=s[0],o=s[1];return Object(a.jsxs)("div",{className:"student-list-container",children:[Object(a.jsx)(j,Object(h.a)(Object(h.a)({},e),{},{setDisplayedStudents:o})),Object(a.jsx)("input",{type:"text",placeholder:"Filter",onChange:function(e){var n=e.target.value.split(" "),r=t.filter((function(e){var t=e.first,r=e.last;return n.every((function(e){var n=new RegExp(e,"i");return t.match(n)||r.match(n)}))}));o(r)}}),Object(a.jsx)("ul",{className:"student-list",children:i.map(b.bind(null,e))})]})}function j(e){var t=e.students,n=e.setStudents,r=e.setDisplayedStudents,c=function(){var e=Object(p.a)(d.a.mark((function e(){var a,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat("https://immense-everglades-63113.herokuapp.com/api","/students"),e.next=3,fetch(a,{headers:{authorization:"testingpw"}});case 3:if(!(c=e.sent).ok){e.next=18;break}return e.prev=5,e.next=8,c.json();case 8:s=e.sent.map((function(e){return t.find((function(t){var n=t.first,r=t.last;return n===e.first&&r===e.last}))||e})),n(s),r(s),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0);case 16:e.next=19;break;case 18:console.log("HTTP error, status = "+c.status);case 19:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("button",{className:"refresh-students",onClick:c,children:"Refresh"})}function b(e,t){var n=e.students,r=e.setStudents,c=t.first,s=t.last,i=t.active;return Object(a.jsxs)("li",{children:[m(c)," ",m(s)," ",Object(a.jsx)("input",{type:"checkbox",name:"active",id:"".concat(c,"_").concat(s,"-active"),defaultChecked:!!i,onChange:function(){t.active=!i,r(Object(u.a)(n))}})]},"".concat(c," ").concat(s))}function m(e){return e.replace(/^./,(function(e){return e.toUpperCase()}))}var v=n(10);function g(e){var t=e.data,n=t.size,r=function(e){var t=e.size,n=e.cages,r=e.work;return Array(Math.pow(t,2)).fill(null).map((function(){for(var e=arguments.length,a=new Array(e),c=0;c<e;c++)a[c]=arguments[c];var s=a[1],i=Math.floor(s/t),o=s%t,u=z({col:i,row:o}),l=r.find(u),d=n.find((function(e){return e.squares.find(u)})),p=x({col:i,row:o},d),h=d.squares.every((function(e){return e.col>=i&&(e.row>=o||e.col>i)})),f=h?d.result:null,j=h?d.operation:null,b=l?l.value:null;return{col:i,row:o,value:b,neighbors:p,result:f,operation:j}}))}(t);return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"puzzle-container",size:n,children:Object(a.jsx)("div",{className:"grid-container",size:n,children:r.map(O)})})})}function O(e){var t="calcudoku-square "+e.neighbors.join(" ");return Object(a.jsxs)("div",{className:t,children:[Object(a.jsxs)("div",{className:"cage-indicator",children:[e.result,e.operation]}),Object(a.jsx)("input",{type:"number",value:e.value||"",disabled:!0})]})}function x(e,t){var n=[],r={"n-up":{col:e.col-1,row:e.row},"n-down":{col:e.col+1,row:e.row},"n-left":{col:e.col,row:e.row-1},"n-right":{col:e.col,row:e.row+1}};for(var a in r){var c=z(r[a]);t.squares.find(c)&&n.push(a)}return n}function z(e){var t=e.col,n=e.row;return function(e){return e.col===t&&e.row===n}}function w(e){var t=e.data,n=t.description,r=t.work;return Object(a.jsxs)("div",{className:"logic",children:[Object(a.jsx)("p",{className:"description",children:n}),Object(a.jsx)("p",{className:"work",children:r})]})}function y(e){var t=e.data,n=t.work,s=Object(c.useState)(t.workPosition||0),i=Object(r.a)(s,2),o=i[0],u=i[1],l=t.size,d=l.cols,p=l.rows,h=t.beginstate,f=t.neighborType,j=function(e){var t=e.row,n=e.col;switch(f){case"x":return[{row:t-1,col:n-1},{row:t+1,col:n+1},{row:t+1,col:n-1},{row:t-1,col:n+1},{row:t,col:n}];default:return[{row:t-1,col:n},{row:t+1,col:n},{row:t,col:n-1},{row:t,col:n+1},{row:t,col:n}]}},b=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),c=1;c<t;c++)r[c-1]=arguments[c];var s=r[1],i=j({row:e,col:s}),u=n.slice(0,o).filter((function(e){return i.some(k(e))})),l=(u.length+(h.some(k({row:e,col:s}))?1:0))%2>0,d="light-square ".concat(l?"active":"inactive");return Object(a.jsx)("div",{className:d})},m=function(e){return u(e)};return Object(a.jsxs)("div",{className:"light-puzzle-container",children:[Object(a.jsx)("div",{className:"light-grid",cols:d,rows:p,children:new Array(p).fill(null).map((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[1];return Object(a.jsx)("div",{className:"grid-row",children:Array(d).fill(null).map(b.bind(null,r))})}))}),Object(a.jsxs)("div",{className:"controller",children:[Object(a.jsx)(N,{jump:function(){return m(0)},isactive:o>0}),Object(a.jsx)(M,{step:function(){return m(Math.max(o-1,0))},isactive:o>0}),Object(a.jsx)(C,{step:function(){return m(Math.min(o+1,n.length))},isactive:o<n.length}),Object(a.jsx)(I,{jump:function(){return m(n.length)},isactive:o<n.length})]})]})}function k(e){var t=e.row,n=e.col;return function(e){return e.col===n&&e.row===t}}function M(e){var t=e.step,n=e.isactive;return Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2048",height:"2048",viewBox:"0 0 2048 2048",onClick:t,className:"step back nav-button",isactive:n.toString(),children:Object(a.jsx)("path",{d:"M1344 576v896q0 26-19 45t-45 19-45-19l-448-448q-19-19-19-45t19-45l448-448q19-19 45-19t45 19 19 45z"})})}function N(e){var t=e.jump,n=e.isactive;return Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2048",height:"2048",viewBox:"0 0 2048 2048",onClick:t,className:"jump back nav-button",isactive:n.toString(),children:Object(a.jsx)("path",{d:"M1811 269q19-19 32-13t13 32v1472q0  26-13 32t-32-13l-710-710q-8-9-13-19v710q0  26-13 32t-32-13l-710-710q-19-19-19-45t19-45l710-710q19-19  32-13t13 32v710q5-11 13-19z"})})}function C(e){var t=e.step,n=e.isactive;return Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2048",height:"2048",viewBox:"0 0 2048 2048",onClick:t,className:"step forward nav-button",isactive:n.toString(),children:Object(a.jsx)("path",{d:"M1280 1024q0 26-19 45l-448 448q-19 19-45  19t-45-19-19-45v-896q0-26 19-45t45-19 45  19l448 448q19 19 19 45z"})})}function I(e){var t=e.jump,n=e.isactive;return Object(a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2048",height:"2048",viewBox:"0 0 2048 2048",onClick:t,className:"jump forward nav-button",isactive:n.toString(),children:Object(a.jsx)("path",{d:"M237 1779q-19 19-32 13t-13-32v-1472q0-26 13-32t32 13l710  710q8 8 13 19v-710q0-26 13-32t32 13l710 710q19 19 19 45t-19  45l-710 710q-19 19-32 13t-13-32v-710q-5 10-13 19z"})})}var P=n(9);function S(e){var t=e.data,n=e.hideDescription,s=e.hideStartPos,i=Object(c.useRef)(null),o=t.height,u=t.width,l=t.work,d=t.stickWidth,p=t.description,h=t.startingConfiguration,f=Object(c.useCallback)((function(e){if(e.clearRect(0,0,u,o),e.beginPath(),e.lineWidth=d,e.lineCap="round",!s){e.strokeStyle="#0b032d22";var t,n=Object(P.a)(h);try{for(n.s();!(t=n.n()).done;){var a=Object(r.a)(t.value,2),c=a[0],i=a[1];e.moveTo(c.x,c.y),e.lineTo(i.x,i.y)}}catch(v){n.e(v)}finally{n.f()}e.stroke()}var p,f=Object(P.a)(l);try{for(f.s();!(p=f.n()).done;){var j=Object(r.a)(p.value,2),b=j[0],m=j[1];e.beginPath(),e.lineWidth=d,e.strokeStyle="#0b032d",e.moveTo(b.x,b.y),e.lineTo(m.x,m.y),e.stroke()}}catch(v){f.e(v)}finally{f.f()}}),[l,o,u,d,h]);return Object(c.useEffect)((function(){var e=i.current.getContext("2d");f(e)}),[f]),Object(a.jsxs)("div",{className:"matchstick",children:[n?null:Object(a.jsx)("p",{children:p}),Object(a.jsx)("canvas",{id:"mathcstick-canvas",ref:i,height:o,width:u})]})}var q=n(16);function T(e){var t=e.data,n=t.height,r=t.width,s=(t.selectionProximity,t.unitLength),i=t.objective,o=t.startingCenter,u=t.objectiveCenter,l=t.work,d=Object(c.useRef)(null);return Object(c.useEffect)((function(){!function(e){var t=e.ctx,n=e.width,r=e.height,a=e.objective,c=e.shapes,s=e.vertexSelection,i=e.shapeSelection,o=e.objectiveCenter,u=e.unitLength;t.clearRect(0,0,n,r),a.forEach(F.bind(null,t,o,u)),c.forEach(L.bind(null,t)),s?(t.beginPath(),t.arc(s.x,s.y,6,0,2*Math.PI),t.fillStyle="#c1b4fa",t.shadowBlur=4,t.shadowColor=t.fillStyle,t.fill(),t.shadowBlur=0,t.shadowColor="#0b032d"):i&&L(t,Object(h.a)(Object(h.a)({},i),{},{color:"#c1b4fa"}))}({ctx:d.current.getContext("2d"),height:n,width:r,shapes:E({unitLength:s,startingCenter:o,work:l}),objective:i,objectiveCenter:u,unitLength:s})}),[n,r,l,i,u,s,o]),Object(a.jsx)("div",{className:"tangram display-container",children:Object(a.jsx)("canvas",{id:"tangram-canvas",ref:d,height:n,width:r})})}function E(e){var t=e.unitLength,n=e.startingCenter,r=e.work,a=Object(h.a)(Object(h.a)({},function(e){var t=e.startingCenter,n=e.unitLength;return{largeTriangle1:{center:{x:t.x,y:t.y+2*n*Math.sin(Math.PI/8)/Math.sin(5*Math.PI/8)},angle:-Math.PI/2},largeTriangle2:{center:{x:t.x-2*n*Math.sin(Math.PI/8)/Math.sin(5*Math.PI/8),y:t.y},angle:0},mediumTriangle:{center:{x:t.x+n*(Math.sqrt(2)-Math.sin(Math.PI/8)/Math.sin(5*Math.PI/8)),y:t.y-n*(Math.sqrt(2)-Math.sin(Math.PI/8)/Math.sin(5*Math.PI/8))},angle:-Math.PI/4},square:{center:{x:t.x,y:t.y-n*Math.sqrt(2)/2},angle:0},parallelogram:{center:{x:t.x+n*(3*Math.sqrt(2)/4),y:t.y+n*(Math.sqrt(2)/4)},angle:-Math.PI/4},smallTriangle1:{center:{x:t.x-n*Math.sqrt(2)/2,y:t.y-n*(Math.sqrt(2)/2+Math.sin(Math.PI/8)/Math.sin(5*Math.PI/8))},angle:Math.PI/2},smallTriangle2:{center:{x:t.x+n*(Math.sin(Math.PI/8)/Math.sin(5*Math.PI/8)),y:t.y},angle:Math.PI}}}({unitLength:t,startingCenter:n})),r);return[D(Object(h.a)(Object(h.a)({},a.largeTriangle1),{},{color:"#7d99ed",size:2*t,name:"largeTriangle1"})),D(Object(h.a)(Object(h.a)({},a.largeTriangle2),{},{color:"#70c2df",size:2*t,name:"largeTriangle2"})),D(Object(h.a)(Object(h.a)({},a.mediumTriangle),{},{color:"#9edfe5",size:t*Math.sqrt(2),name:"mediumTriangle"})),R(Object(h.a)(Object(h.a)({},a.square),{},{color:"#c3ebef",size:t})),_(Object(h.a)(Object(h.a)({},a.parallelogram),{},{color:"#3f2fa5",size:t})),D(Object(h.a)(Object(h.a)({},a.smallTriangle1),{},{color:"#6146d9",size:t,name:"smallTriangle1"})),D(Object(h.a)(Object(h.a)({},a.smallTriangle2),{},{color:"#7e6cfb",size:t,name:"smallTriangle2"}))]}function A(e){var t=e.shape,n=e.relAngle,r=e.distanceFromCenter,a={relAngle:n};return Object.defineProperty(a,"x",{get:function(){return t.center.x+Math.cos(t.angle+n)*r}}),Object.defineProperty(a,"y",{get:function(){return t.center.y+Math.sin(t.angle+n)*r}}),a}function D(e){var t=e.size,n=e.center,r=e.angle,a=e.color,c=e.name,s=t*Math.sin(Math.PI/8)/Math.sin(5*Math.PI/8),i=t*Math.sin(Math.PI/4)/Math.sin(5*Math.PI/8),o={center:n,color:a,angle:r,name:c};return o.vertices=[{relAngle:0,distanceFromCenter:s},{relAngle:5*Math.PI/8,distanceFromCenter:i},{relAngle:-5*Math.PI/8,distanceFromCenter:i}].map((function(e){return A(Object(h.a)(Object(h.a)({},e),{},{shape:o}))})),o}function R(e){var t=e.size,n=e.center,r=e.angle,a=e.color,c=t*Math.sqrt(2)/2,s={center:n,color:a,angle:r,name:"square"};return s.vertices=Array.from({length:4},(function(e,t){return A({shape:s,distanceFromCenter:c,relAngle:t*Math.PI/2})})),s}function _(e){var t=e.size,n=e.center,r=e.angle,a=e.color,c=t/2,s=t/Math.sin(Math.atan2(2,1)),i={center:n,color:a,angle:r,name:"parallelogram"};return i.vertices=[{relAngle:0,distanceFromCenter:c},{relAngle:-Math.atan2(2,1),distanceFromCenter:s},{relAngle:Math.PI,distanceFromCenter:c},{relAngle:-(Math.PI+Math.atan2(2,1)),distanceFromCenter:s}].map((function(e){return A(Object(h.a)(Object(h.a)({},e),{},{shape:i}))})),i}function L(e,t){var n=Object(q.a)(t.vertices),r=n[0],a=n.slice(1),c=t.color;t.center;e.beginPath(),e.moveTo(r.x,r.y),a.forEach((function(t){return e.lineTo(t.x,t.y)})),e.closePath(),e.fillStyle=c,e.fill()}function F(e,t,n,a){var c=a.map((function(e){var a=Object(r.a)(e,2),c=a[0],s=a[1];return[t.x+n*c,t.y+n*s]}));e.beginPath();var s=Object(q.a)(c),i=s[0],o=s.slice(1);e.moveTo.apply(e,Object(u.a)(i)),o.forEach((function(t){return e.lineTo.apply(e,Object(u.a)(t))})),e.closePath(),e.fillStyle="#0b032d",e.fill()}function J(e){var t=e.data,n=Object(c.useRef)(null),s=t.work,i=Object(c.useCallback)((function(e){e.clearRect(0,0,1024,1024),e.beginPath(),e.lineWidth=6,e.lineCap="round",e.stroke();var t,n=Object(P.a)(s);try{for(n.s();!(t=n.n()).done;){var a=Object(r.a)(t.value,2),c=a[0],i=a[1];e.beginPath(),e.lineWidth=6,e.strokeStyle="#0b032d",e.moveTo(c.x,c.y),e.lineTo(i.x,i.y),e.stroke()}}catch(o){n.e(o)}finally{n.f()}}),[s]);return Object(c.useEffect)((function(){var e=n.current.getContext("2d");i(e)}),[i]),Object(a.jsx)("div",{className:"stick-image-guess",children:Object(a.jsx)("canvas",{style:{height:256,width:256},id:"mandelbrot-canvas",ref:n,height:1024,width:1024})})}var B={calcudoku:function(e){return Object(a.jsx)(g,{data:e})},logic:function(e){return Object(a.jsx)(w,{data:e})},light:function(e){return Object(a.jsx)(y,{data:e})},matchstick:function(e){return Object(a.jsx)(S,{data:e,hideDescription:!0,hideStartPos:!0})},tangram:function(e){return Object(a.jsx)(T,{data:e})}};function U(e){var t=e.children,n=Object(c.useRef)(document.createElement("div"));return Object(c.useEffect)((function(){var e,t,r=window.open("");return r.document.body.appendChild(n.current),e=document,t=r.document,Array.from(e.styleSheets).forEach((function(n){try{if(n.cssRules){var r=e.createElement("style");Array.from(n.cssRules).forEach((function(t){r.appendChild(e.createTextNode(t.cssText))})),t.head.appendChild(r)}else{var a=e.createElement("link");a.rel="stylesheet",a.href=n.href,t.head.appendChild(a)}}catch(c){}})),function(){return r.close()}}),[]),Object(i.createPortal)(t,n.current)}function W(e){var t=e.showStudentNames,n=e.puzzleData,r=e.students,c=function(e){var t=n.get(e)||{},r=t.puzzleName,c=Object(v.a)(t,["puzzleName"]),s=B[r];return s?Object(a.jsx)("div",{className:"student-puzzle",children:s(c)}):null};return Object(a.jsx)(U,{children:Object(a.jsx)("ul",{className:"classroom-view",children:r.map((function(e){var n=e.first,r=e.last;return Object(a.jsxs)("li",{children:[t?Object(a.jsxs)("div",{className:"student-name",children:[G(n)," ",G(r)]}):null,c(e)]},"".concat(n,"_").concat(r))}))})})}function G(e){return e.replace(/(?<=\W|^)./g,(function(e){return e.toUpperCase()}))}function H(e){var t=e.groupNumber,n=e.renderStudentDisplay,s=e.studentList,i=e.postStudentMessage,o=e.deleteStudentMessages,u=function(){return s.filter((function(e){return e.group===t}))},l=Object(c.useState)(null),h=Object(r.a)(l,2),f=h[0],j=h[1];function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=function(e){var t=e.first,n=e.last;return"".concat(t,"_").concat(n)},n={designer:e?t(e):"no_designer",guessers:u().filter((function(t){return t!==e})).map(t)};u().forEach((function(e){i(e,n,{puzzleName:"stick-image",puzzleId:"workspace"})}))}return Object(a.jsxs)("div",{className:"group",children:[Object(a.jsx)("ul",{className:"student-list",children:s.map((function(e){var n=e.first,r=e.last,c=e.group;return Object(a.jsxs)("li",{onClick:function(){c===t?(f===e&&j(null),o(e,{puzzleName:"stick-image",puzzleId:"workspace"}),delete e.group,b()):e.group=t},style:c===t?{backgroundColor:"#aaa"}:{},children:[V(n)," ",V(r)," ",Object(a.jsx)("span",{className:"completed-check ".concat(f===e?"complete":"incomplete"),onClick:function(){var n=Object(p.a)(d.a.mark((function n(r){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.stopPropagation(),e.group!==t){n.next=6;break}return j(e),n.next=5,Promise.all(u().map(function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(t,{puzzleName:"stick-image",puzzleId:"workspace"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:b(e);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),children:f===e?"\u2713":"\u25ef"})]},"".concat(n," ").concat(r))}))}),Object(a.jsx)("button",{onClick:b,children:"Set Group"}),Object(a.jsx)("ul",{className:"puzzle-display",children:u().map(n)}),Object(a.jsx)("hr",{})]})}function V(e){return e.replace(/^./,(function(e){return e.toUpperCase()}))}var K={calcudoku:function(e){return Object(a.jsx)(g,{data:e})},logic:function(e){return Object(a.jsx)(w,{data:e})},light:function(e){return Object(a.jsx)(y,{data:e})},matchstick:function(e){return Object(a.jsx)(S,{data:e})},tangram:function(e){return Object(a.jsx)(T,{data:e})},"stick-image":function(e){return Object(a.jsx)(J,{data:e})}},Q={activepuzzle:!0,puzzleName:"calcudoku",puzzleId:"4x4beginner1"};function X(e){var t=Object(c.useState)(new Map),n=Object(r.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)(new Map),l=Object(r.a)(o,2),f=l[0],j=l[1],b=Object(c.useState)(new Map),m=Object(r.a)(b,2),g=m[0],O=m[1],x=Object(c.useState)(new Map),z=Object(r.a)(x,2),w=z[0],y=z[1],k=Object(c.useState)(!1),M=Object(r.a)(k,2),N=M[0],C=M[1],I=Object(c.useState)(0),P=Object(r.a)(I,2),S=P[0],q=P[1],T=Object(c.useMemo)((function(){return e.students.filter((function(e){return e.active}))}),[e.students]);Object(c.useEffect)((function(){j((function(t){var n=new Map(t);return e.students.forEach((function(e){n.has(e)||n.set(e,Q)})),n}))}),[e.students,j]);var E=Object(c.useCallback)(function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r,a,c,s,i,o=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:f.get(t),r=n.puzzleName,a=n.puzzleId,c=t.first,s=t.last,i="https://immense-everglades-63113.herokuapp.com/api"+"/students/".concat(c,"_").concat(s,"/")+"".concat(r,"/").concat(a,"/")+"messages",e.next=5,fetch(i,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:"instructor"})});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[f]),A=Object(c.useCallback)(function(){var e=Object(p.a)(d.a.mark((function e(t,n){var r,a,c,s,i,o,u=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=u.length>2&&void 0!==u[2]?u[2]:f.get(t),a=r.puzzleName,c=r.puzzleId,s=t.first,i=t.last,o="https://immense-everglades-63113.herokuapp.com/api"+"/students/".concat(s,"_").concat(i,"/")+"".concat(a,"/").concat(c,"/")+"messages",fetch(o,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:"instructor",message:n})});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[f]),D=Object(c.useCallback)(function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r,a,c,s,i,o,u,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.first,r=t.last,a=f.get(t),c=a.activepuzzle,s=a.puzzleName,i=a.puzzleId,o=c?"activepuzzle":"".concat(s,"/").concat(i),u="https://immense-everglades-63113.herokuapp.com/api"+"/students/".concat(n,"_").concat(r,"/").concat(o),e.next=6,fetch(u,{headers:{authorization:"testingpw"}});case 6:return l=e.sent,e.next=9,l.json();case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[f]),R=Object(c.useCallback)(function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r,a,c,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.first,r=t.last,a=f.get(t),c=a.puzzleName,s="https://immense-everglades-63113.herokuapp.com/api"+"/students/".concat(n,"_").concat(r,"/").concat(c,"/completed"),e.next=5,fetch(s,{headers:{authorization:"testingpw"}});case 5:return i=e.sent,e.next=8,i.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[f]),_=Object(c.useCallback)(function(){var e=Object(p.a)(d.a.mark((function e(t,n){var r,a,c,i,o,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.first,a=t.last,c=s.get(t),i=c.puzzleName,o=c.puzzleId,u="https://immense-everglades-63113.herokuapp.com/api"+"/students/".concat(r,"_").concat(a,"/").concat(i,"/").concat(o,"/completed"),fetch(u,{method:"PUT",headers:{"Content-Type":"application/json",authorization:"testingpw"},body:JSON.stringify({completed:n})});case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[s]),L=Object(c.useCallback)(function(){var e=Object(p.a)(d.a.mark((function e(t){var n,r,a,c,s,i,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.first,r=t.last,a="https://immense-everglades-63113.herokuapp.com/api"+"/students/".concat(n,"_").concat(r,"/activepuzzle"),e.next=4,fetch(a,{headers:{authorization:"testingpw"}});case 4:return c=e.sent,e.next=7,c.json();case 7:if(s=e.sent,i=s.puzzleName,o=s.puzzleId,l=Object(v.a)(s,["puzzleName","puzzleId"]),i){e.next=13;break}return e.abrupt("return");case 13:O((function(e){var n=e.get(t)||{},r=n[i]||{},a=r[o]||[];if(!a[0]||JSON.stringify(Object(h.a)({puzzleId:o},l))!==JSON.stringify(a[0].data)){r[o]=[{data:Object(h.a)({puzzleId:o},l),timestamp:Date.now()}].concat(Object(u.a)(a)),n[i]=r;var c=new Map(e);return c.set(t,n),c}return e}));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[O]),F=Object(c.useCallback)(Object(p.a)(d.a.mark((function e(){var t,n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Promise.all(T.map(function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(t),e.next=3,D(t);case 3:return n=e.sent,e.abrupt("return",[t,n]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),Promise.all(T.map(function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(t);case 2:return n=e.sent,e.abrupt("return",[t,n]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))]);case 2:t=e.sent,n=Object(r.a)(t,2),a=n[0],c=n[1],i((function(e){var t=new Map(e);return a.forEach((function(e){return t.set.apply(t,Object(u.a)(e))})),t})),y((function(e){var t=new Map(e);return c.forEach((function(e){return t.set.apply(t,Object(u.a)(e))})),t})),console.log("refreshed");case 9:case"end":return e.stop()}}),e)}))),[T,i,D,L,y,R]);Object(c.useEffect)((function(){F();var e=setInterval(F,2e3);return function(){return clearInterval(e)}}),[F]);var J=function(t,n,r){var a=Object(h.a)({},f.get(t));a[n]=r,"puzzleName"===n&&(a.puzzleId=e.puzzleDirectory[r][0]);var c=new Map(f);c.set(t,a),j(c)},B=function(e){var t=s.get(e)||{},n=t.puzzleName,r=t.completed,c=Object(v.a)(t,["puzzleName","completed"]),i=K[n];return i?Object(a.jsxs)("div",{className:"student-puzzle",children:[i(c),Object(a.jsxs)("div",{className:"completion",children:["Completed:"," ",Object(a.jsx)("span",{className:"completed-check ".concat(r?"complete":"incomplete"),onClick:function(){return _(e,!r)},children:r?"\u2713":"\u25ef"})]})]}):null},U=function(e){var t=g.get(e);if(!t)return null;var n=e.first,r=e.last,c=Object.keys(t).flatMap((function(e){return Object.keys(t[e]).map((function(n){var r=t[e][n][0],a=r.data.puzzleId,c=r.timestamp;return{puzzleName:e,puzzleId:a,timestamp:c}}))})).sort((function(e,t){return e.timestamp>t.timestamp?-1:1}));return Object(a.jsx)("select",{name:"history-select",className:"history-select",id:"history-".concat(n,"-").concat(r),onChange:function(t){var n=JSON.parse(t.target.value),r=n.puzzleName,a=n.puzzleId;J(e,"puzzleName",r),J(e,"puzzleId",a)},children:c.map((function(e){var t=e.puzzleName,n=e.puzzleId,r=e.timestamp,c=new Date(r).toLocaleTimeString();return Object(a.jsxs)("option",{value:JSON.stringify({puzzleName:t,puzzleId:n}),children:[n," ",c]})}))})},G=function(t){var n=e.puzzleDirectory,r=f.get(t).puzzleName,c=s.get(t),i=w.get(t),o=r?n[r]:[];return Object(a.jsxs)("div",{className:"puzzle-select",children:[Object(a.jsx)("select",{name:"type-select",id:"type-select",value:r,onChange:function(e){return J(t,"puzzleName",e.target.value)},children:Object.keys(n).map((function(e){return Object(a.jsx)("option",{value:e,children:e})}))}),Object(a.jsx)("ul",{children:o.map((function(e){var n=!!i&&w.get(t)[e],r=!!c&&c.puzzleId===e;return Object(a.jsxs)("li",{onClick:function(){return J(t,"puzzleId",e)},className:r?"active":"",children:[Object(a.jsx)("span",{className:"completed-check ".concat(n?"complete":"incomplete"),onClick:function(){return _(t,!n)},children:n?"\u2713":"\u25cb "}),e]})}))})]})},V=function(e){var t=g.get(e)||{};return Object.keys(t).some((function(e){return Object.keys(t[e]).some((function(n){var r=t[e][n][0].timestamp;return Date.now()-r<6e4}))}))},X=function(e){var t=e.first,n=e.last,r=f.get(e),c=r?r.activepuzzle:null;return Object(a.jsxs)("li",{className:"student-display",children:[Object(a.jsxs)("div",{className:"student-header",children:[Object(a.jsxs)("div",{className:"student-name",children:[Y(t)," ",Y(n)]}),Object(a.jsx)("div",{className:"activity-indicator",children:V(e)?null:"Inactive"}),U(e),Object(a.jsxs)("div",{className:"show-active",children:["Show Active Puzzle:",Object(a.jsx)("input",{type:"checkbox",name:"active",id:"".concat(t,"_").concat(n,"-active"),checked:!!c,onChange:function(){return J(e,"activepuzzle",!c)}})]})]}),G(e),B(e)]},"".concat(t,"_").concat(n))};return Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){return C(!N)},children:"Classroom View"}),N?Object(a.jsx)(W,{showStudentNames:!1,puzzleData:s,students:T}):null,Object(a.jsx)("button",{onClick:function(){return q(S+1)},children:"Add Group"}),Object(a.jsx)("button",{onClick:function(){T.forEach((function(e){e.group===S&&delete e.group})),q(S-1)},children:"Remove Group"}),Array.from({length:S},(function(e,t){return Object(a.jsx)(H,{groupNumber:t+1,studentList:T,renderStudentDisplay:X,postStudentMessage:A,deleteStudentMessages:E})})),Object(a.jsx)("ul",{className:"puzzle-display",children:T.filter((function(e){return!e.group})).map(X)})]})}function Y(e){return e.replace(/^./,(function(e){return e.toUpperCase()}))}n(23);var Z={calcudoku:["4x4beginner1","4x4beginner2","4x4beginner3","4x4beginner4","4x4beginner5","4x4intermediate1","4x4intermediate2","4x4intermediate3","4x4intermediate4","4x4expert1","4x4expert2","4x4expert3","5x5beginner1","5x5beginner2","5x5intermediate1"],logic:["wolfgoatcabbage","torch","goldboxes","10coins","socks","childrenboat","applesandoranges","averybobbycam","bear","hats"],light:["small","medium","large","smallx","mediumx","largex"].flatMap((function(e){return Array.from({length:5},(function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=n[1];return"".concat(e).concat(a+1)}))})),matchstick:["fish","donkey","squares1","squares2","squares3","squares4","squares5"],tangram:["triangle","rectangle","trapezoid","twotriangles","twosquares","cube","hexagon","incompleterectangle"],"stick-image":["workspace"]};function $(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(a.jsxs)("div",{className:"app",children:[Object(a.jsx)(f,{students:n,setStudents:s}),Object(a.jsx)(X,{students:n,puzzleDirectory:Z})]})}o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)($,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.01201573.chunk.js.map