!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/js",n(n.s=0)}([function(t,e,n){"use strict";var i=o(n(1)),r=o(n(2));function o(t){return t&&t.__esModule?t:{default:t}}n(3);for(var a=document.getElementById("canvas"),s=a.getContext("2d"),u=new i.default(a),c=[],f=new r.default(0,0,30,"green"),l=0;l<30;l++)c.push(new r.default(300+200*Math.cos(2*l*Math.PI/30),300+200*Math.sin(2*l*Math.PI/30)));!function t(){window.requestAnimationFrame(t),s.clearRect(0,0,600,600),f.setPos(u.x,u.y),f.draw(s),function(t){s.beginPath();for(var e=0,n=t.length;e<=n;++e){var i=t[e+0>=n?e+0-n:e+0],r=t[e+1>=n?e+1-n:e+1];s.quadraticCurveTo(i.x,i.y,.5*(i.x+r.x),.5*(i.y+r.y))}s.fillStyle="orange",s.fill()}(c),c.forEach((function(t){t.think(u)}))}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=0,this.y=0;var i=e.getBoundingClientRect();e.onmousemove=function(t){n.x=t.clientX-i.left,n.y=t.clientY-i.top}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var r=function(){function t(e,n,i,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e||0,this.y=n||0,this.originalX=e||0,this.originalY=n||0,this.radius=i||2,this.color=r||"#ff5735",this.vx=0,this.vy=0,this.friction=.9,this.springFactor=.09}return i(t,[{key:"setPos",value:function(t,e){this.x=t,this.y=e}},{key:"think",value:function(t){var e=this.x-t.x,n=this.y-t.y,i=Math.sqrt(e*e+n*n);if(i<30){var r=Math.atan2(n,e),o=t.x+30*Math.cos(r),a=t.y+30*Math.sin(r);this.vx+=o-this.x,this.vy+=a-this.y}var s=-(this.x-this.originalX),u=-(this.y-this.originalY);this.vx+=s*this.springFactor,this.vy+=u*this.springFactor,this.vx*=this.friction,this.vy*=this.friction,this.x+=this.vx,this.y+=this.vy,console.log(i)}},{key:"draw",value:function(t){t.save(),t.beginPath(),t.fillStyle=this.color,t.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),t.fill(),t.closePath(),t.restore()}}]),t}();e.default=r},function(t,e){}]);
//# sourceMappingURL=app.js.map