!function(t){function e(e){for(var n,a,s=e[0],u=e[1],c=e[2],l=0,h=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&h.push(r[a][0]),r[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(d&&d(e);h.length;)h.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,s=1;s<o.length;s++){var u=o[s];0!==r[u]&&(n=!1)}n&&(i.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},r={0:0},i=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=u;i.push([126,1]),o()}({112:function(t,e,o){},126:function(t,e,o){"use strict";o.r(e);o(30),o(98),o(111),o(112);var n=o(51),r=o(11),i=(o(72),o(77),o(78),o(79),o(80),o(82),o(84),o(50),o(122),o(88),o(89),o(90),o(91),o(92),o(2)),a=(o(125),function(t,e,o,n){return Math.sqrt(Math.pow(t-e,2)+Math.pow(o-n,2))});function s(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function c(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var d=function(){function t(e,o,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var a=200/r;this.r=(10+15*Math.random())*a,this.r=this.r<5?5:this.r,this.pos={x:e,y:o},this.updating=!0,n&&(this.virus=!0,this.fill=n.color,this.r*=2,this.id=n.id),this.body=i.Bodies.circle(e,o,this.r/1.4),i.Body.setMass(this.body,3/a),n&&i.Body.applyForce(this.body,this.body.position,{x:Math.random()/1e3,y:Math.random()/1e3})}var e,o,n;return e=t,(o=[{key:"contagion",value:function(t){var e=this;t.forEach((function(t){a(t.body.position.x,e.body.position.x,t.body.position.y,e.body.position.y)<(e.r+t.r)/1.2&&e.virus&&!t.virus&&Math.random()>.8&&!e.updating&&!t.immu&&(e.fill[3]>200&&e.id&&(window.samplers[e.id].volume.value=-3-100/(e.r+e.fill[3]/5),window.samplers[e.id].triggerAttack(e.fill[2])),setTimeout((function(){t.id=e.id,t.virus=!0,t.mother={position:e.body.position},t.fill=[].concat(s(e.fill.slice(0,3)),[Math.abs(e.fill[3]-30)+10]),setTimeout((function(){Math.random()>.7&&(t.virus=!1,Math.random()>.6&&t.fill[3]<150&&(t.immu=!0),setTimeout((function(){t.immu=!1}),3e3)),Math.random()>.97&&t.fill[3]>100&&(t.died=!0,window.sampler2.triggerAttack(130+2*(t.r-20)))}),3e3)}),Math.pow(1500/e.fill[3],2)))}))}},{key:"changePos",value:function(){if(Math.random()>.5){this.updating=!0;var t={x:.03*(Math.random()-.5),y:.03*(Math.random()-.5)};i.Body.applyForce(this.body,this.body.position,t)}}},{key:"display",value:function(t){this.body.angularVelocity<.005&&(this.updating=!1),this.died?i.Body.applyForce(this.body,this.body.position,{x:0,y:.01}):this.immu&&i.Body.applyForce(this.body,this.body.position,{x:0,y:-3e-4}),t.push(),t.translate(this.body.position.x,this.body.position.y),t.rotate(this.body.angle),this.virus?t.fill(this.fill):this.immu?t.fill([255,255,255,255*t.noise(this.body.position.y)]):t.fill([255,255,255,3*this.r]),this.died?(t.fill(0),t.rect(0,0,2*this.r)):t.ellipse(0,0,2*this.r),t.stroke(255,3*this.r),t.pop(),t.push(),this.mother&&a(this.mother.position.x,this.body.position.x,this.mother.position.y,this.body.position.y)<3*this.r&&(t.strokeWeight(this.r/2),t.stroke(s(this.fill.slice(0,4))),t.line(this.body.position.x,this.body.position.y,this.mother.position.x,this.mother.position.y)),t.pop()}}])&&c(e.prototype,o),n&&c(e,n),t}();function l(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);"Object"===o&&t.constructor&&(o=t.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}var f=function(t){var e=t,o=i.Engine.create();o.world.gravity.y=0,e.start=function(){e.loop(),i.Engine.run(o),document.querySelector(".landing").style.display="none"},e.lastKey=localStorage.getItem("last-key")||"notok",e.thisKey="OK".concat(Date()),e.get=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.lastKey;return JSON.parse(localStorage.getItem(t))||[]},e.save=function(t,e){localStorage.setItem(e,JSON.stringify(t)),localStorage.setItem("last-key",e)};var n=!0,r=[],a=[],s=3,u=[],c={color:[120*Math.random(),120*Math.random(),120*Math.random(),255],r:80,text:"virus ".concat(s)},h=!1;e.setup=function(){var t,n,s,u,c;e.createCanvas(e.windowWidth,e.windowHeight),t=i.Bodies.rectangle(0,0,10,4e3,{isStatic:!0}),n=i.Bodies.rectangle(e.width,0,10,4e3,{isStatic:!0}),s=i.Bodies.rectangle(0,0,4e3,10,{isStatic:!0}),u=i.Bodies.rectangle(0,e.height,4e3,10,{isStatic:!0}),c=i.MouseConstraint.create(o,{constraint:{stiffness:.2,render:{visible:!1}}}),i.World.add(o.world,[t,n,s,u,c]),e.scaleRef=(e.width+e.height)/2,e.background(0),e.noStroke(),e.strokeCap(e.SQUARE),e.rectMode(e.CENTER),e.textAlign(e.CENTER),e.textSize(40);for(var l=0;l<230;l+=1)r[l]=new d(e.random(0,e.width),e.random(0,e.height),!1,1e3/(e.width+e.height)*230),i.World.add(o.world,r[l].body),a[l]={x:e.random(0,e.width),y:e.random(0,e.height)}},e.draw=function(){e.background(200,200,200),e.noFill(),r.forEach((function(t){t.updating||t.contagion(r),h&&t.changePos(),t.display(e)})),e.push(),e.fill([].concat(l(c.color.slice(0,3)),[100])),e.ellipse(e.mouseX,e.mouseY,c.r)},e.addVirusMouse=function(){var t={color:c.color,id:s-1},n=new d(e.mouseX,e.mouseY,t,230);r.push(n),a.push({x:e.mouseX,y:e.mouseY}),i.World.add(o.world,n.body),setTimeout((function(){c.color=s>0?[120*Math.random(),120*Math.random(),120*Math.random(),255]:[100,100,100,100],c.text="virus ".concat(s)}),50)},e.handleTouchEnd=function(t){if(h=!1,t.preventDefault(),s>0&&e.mouseX+e.mouseY>10)e.addVirusMouse(),s-=1;else{c={color:[100,100,100,100],r:40,text:""},1;var o=0;r.forEach((function(t){Math.random()>.95&&t.virus&&!t.died&&(t.died=!0,window.sampler2.triggerAttack(130+2*(t.r-20)),o+=1)})),u.push(o)}},e.keyPressed=function(){switch(e.keyCode){case 32:e.saveCapture();break;case 78:n?(e.noLoop(),n=!n):(e.loop(),n=!n)}},e.saveCapture=function(){e.pixelDensity()>1&&e.saveCanvas(document.querySelector("canvas"),"ok".concat(Date()),"png")},e.windowResized=function(){e.resizeCanvas(e.windowWidth,e.windowHeight)};window.addEventListener("touchstart",(function(){h=!0}),{passive:!1}),window.addEventListener("touchend",e.handleTouchEnd,{passive:!1}),window.addEventListener("mousedown",(function(){h=!0}),{passive:!1}),window.addEventListener("mouseup",e.handleTouchEnd,{passive:!1}),document.addEventListener("ontouchmove",(function(t){t.preventDefault()}),{passive:!1}),document.addEventListener("touchmove",(function(t){t.preventDefault()}),{passive:!1})},p=o(94),y=o.n(p),m=o(95),v=o.n(m),w=void 0;function b(t,e,o,n,r,i,a){try{var s=t[i](a),u=s.value}catch(t){return void o(t)}s.done?e(u):Promise.resolve(u).then(n,r)}function g(t){return function(){var e=this,o=arguments;return new Promise((function(n,r){var i=t.apply(e,o);function a(t){b(i,n,r,a,s,"next",t)}function s(t){b(i,n,r,a,s,"throw",t)}a(void 0)}))}}var M=new r.Sampler({D3:v.a},{onload:function(){w.isLoaded=!0}}).chain(new r.Volume(-10),r.Master);window.samplers=[];for(var S=0;S<3;S++)window.samplers[S]=new r.Sampler({E3:y.a},{onload:function(){w.isLoaded=!0}}).chain(new r.Volume(-14),r.Master);window.sampler2=M,n.disableFriendlyErrors=!0,document.querySelector("html").addEventListener("click",g(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.start();case 2:new n(f).start();case 4:case"end":return t.stop()}}),t)}))),{once:!0})},94:function(t,e,o){t.exports=o.p+"src/sound/chasing.mp3"},95:function(t,e,o){t.exports=o.p+"src/sound/light.mp3"}});
//# sourceMappingURL=app.fbc7e376.js.map