(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["task"],{"00b8":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!isEditing"}]},[t._v(" "+t._s(t.task.title+" ("+t.task.project+") ")+" "),n("button",{on:{click:t.showForm}},[t._v(" Edit ")]),n("button",{on:{click:function(e){return t.deleteTask(t.task)}}},[t._v(" Delete ")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}]},[n("div",{staticClass:"form"},[n("label",[t._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.task.title,expression:"task.title"}],attrs:{type:"text"},domProps:{value:t.task.title},on:{input:function(e){e.target.composing||t.$set(t.task,"title",e.target.value)}}})]),n("div",{staticClass:"form"},[n("label",[t._v("Project")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.task.project,expression:"task.project"}],attrs:{type:"text"},domProps:{value:t.task.project},on:{input:function(e){e.target.composing||t.$set(t.task,"project",e.target.value)}}})]),n("div",[n("button",{on:{click:t.hideForm}},[t._v(" Close ")])])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing&&t.task.done,expression:"!isEditing && task.done"}]},[t._v(" Completed ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing&&!t.task.done,expression:"!isEditing && !task.done"}],on:{click:function(e){return t.completeTask(t.task)}}},[t._v(" Pending ")])])},s=[]},1508:function(t,e,n){"use strict";n("2f55")},"1d21":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"latask"},[n("task-list",{attrs:{tasks:t.tasks}}),n("creer-task",{on:{"creer-task":t.CreerTask}})],1)},s=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header"},[n("p",[t._v(" Completed Tasks: "+t._s(t.tasks.filter((function(t){return!0===t.done})).length)+" ")]),n("p",[t._v(" Pending Tasks: "+t._s(t.tasks.filter((function(t){return!1===t.done})).length)+" ")])]),n("div",t._l(t.tasks,(function(e,i){return n("task",{key:i,attrs:{task:e},on:{"delete-task":t.deleteTask,"complete-task":t.completeTask}})})),1)])},a=[],o=(n("c975"),n("a434"),n("7ea3")),c={name:"TaskList",props:["tasks"],components:{Task:o["default"]},methods:{deleteTask:function(t){var e=this.tasks.indexOf(t);this.tasks.splice(e,1)},completeTask:function(t){var e=this.tasks.indexOf(t);this.tasks[e].done=!0}}},l=c,u=n("2877"),d=Object(u["a"])(l,r,a,!1,null,null,null),v=d.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"create"}},[n("button",{directives:[{name:"show",rawName:"v-show",value:!t.isCreating,expression:"!isCreating"}],on:{click:t.openForm}},[t._v(" Add ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isCreating,expression:"isCreating"}]},[n("div",{staticClass:"content"},[n("div",{staticClass:"form"},[n("label",[t._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.titleText,expression:"titleText"}],attrs:{type:"text"},domProps:{value:t.titleText},on:{input:function(e){e.target.composing||(t.titleText=e.target.value)}}})]),n("div",{staticClass:"form"},[n("label",[t._v("Project")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.projectText,expression:"projectText"}],attrs:{type:"text"},domProps:{value:t.projectText},on:{input:function(e){e.target.composing||(t.projectText=e.target.value)}}})]),n("div",[n("button",{on:{click:t.sendForm}},[t._v(" Create ")]),n("button",{on:{click:t.closeForm}},[t._v(" Cancel ")])])])])])},p=[],m={name:"CreerTask",data:function(){return{titleText:"",projectText:"",isCreating:!1}},methods:{openForm:function(){this.isCreating=!0},closeForm:function(){this.isCreating=!1},sendForm:function(){if(this.titleText.length>0&&this.projectText.length>0){var t=this.titleText,e=this.projectText;this.$emit("creer-task",{title:t,project:e,done:!1}),this.titleText="",this.projectText="",this.isCreating=!1}}}},k=m,h=(n("1508"),Object(u["a"])(k,f,p,!1,null,null,null)),x=h.exports,g={name:"latask",components:{TaskList:v,CreerTask:x},data:function(){return{tasks:[{title:"Task A",project:"Project A",done:!1},{title:"Task B",project:"Project B",done:!0},{title:"Task C",project:"Project C",done:!1},{title:"Task D",project:"Project D",done:!1}]}},methods:{CreerTask:function(t){this.tasks.push(t)}}},T=g,C=Object(u["a"])(T,i,s,!1,null,null,null);e["default"]=C.exports},"1dde":function(t,e,n){var i=n("d039"),s=n("b622"),r=n("2d00"),a=s("species");t.exports=function(t){return r>=51||!i((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"2f55":function(t,e,n){},"65f0":function(t,e,n){var i=n("861d"),s=n("e8b5"),r=n("b622"),a=r("species");t.exports=function(t,e){var n;return s(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?i(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"68a7":function(t,e,n){"use strict";var i=n("9438"),s=n.n(i);e["default"]=s.a},"7ea3":function(t,e,n){"use strict";var i=n("00b8"),s=n("68a7"),r=n("2877"),a=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,null,null);e["default"]=a.exports},8418:function(t,e,n){"use strict";var i=n("c04e"),s=n("9bf2"),r=n("5c6c");t.exports=function(t,e,n){var a=i(e);a in t?s.f(t,a,r(0,n)):t[a]=n}},9438:function(t,e){},a434:function(t,e,n){"use strict";var i=n("23e7"),s=n("23cb"),r=n("a691"),a=n("50c4"),o=n("7b0b"),c=n("65f0"),l=n("8418"),u=n("1dde"),d=n("ae40"),v=u("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,m=Math.min,k=9007199254740991,h="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!v||!f},{splice:function(t,e){var n,i,u,d,v,f,x=o(this),g=a(x.length),T=s(t,g),C=arguments.length;if(0===C?n=i=0:1===C?(n=0,i=g-T):(n=C-2,i=m(p(r(e),0),g-T)),g+n-i>k)throw TypeError(h);for(u=c(x,i),d=0;d<i;d++)v=T+d,v in x&&l(u,d,x[v]);if(u.length=i,n<i){for(d=T;d<g-i;d++)v=d+i,f=d+n,v in x?x[f]=x[v]:delete x[f];for(d=g;d>g-i+n;d--)delete x[d-1]}else if(n>i)for(d=g-i;d>T;d--)v=d+i-1,f=d+n-1,v in x?x[f]=x[v]:delete x[f];for(d=0;d<n;d++)x[d+T]=arguments[d+2];return x.length=g-i+n,u}})},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},ae40:function(t,e,n){var i=n("83ab"),s=n("d039"),r=n("5135"),a=Object.defineProperty,o={},c=function(t){throw t};t.exports=function(t,e){if(r(o,t))return o[t];e||(e={});var n=[][t],l=!!r(e,"ACCESSORS")&&e.ACCESSORS,u=r(e,0)?e[0]:c,d=r(e,1)?e[1]:void 0;return o[t]=!!n&&!s((function(){if(l&&!i)return!0;var t={length:-1};l?a(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,u,d)}))}},c975:function(t,e,n){"use strict";var i=n("23e7"),s=n("4d64").indexOf,r=n("a640"),a=n("ae40"),o=[].indexOf,c=!!o&&1/[1].indexOf(1,-0)<0,l=r("indexOf"),u=a("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!l||!u},{indexOf:function(t){return c?o.apply(this,arguments)||0:s(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,n){var i=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}}}]);
//# sourceMappingURL=task.18704e03.js.map