"use strict";$(document).ready(function(){var i=function(){function s(t,i){for(var e=0;e<i.length;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(t,i,e){return i&&s(t.prototype,i),e&&s(t,e),t}}();function r(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var e=document.querySelector("header#top nav.items"),s=document.querySelector("header#top nav ul"),n=(document.querySelector("header#top nav ul li"),document.querySelectorAll("header#top nav ul li a")),o=document.querySelector(".nav-toggle"),h=document.querySelector("body section"),t=!1;function a(t){for(var i=0;isNaN(t.offsetTop)||(i+=t.offsetTop),t=t.offsetParent;);return i}e.classList.add("nav-nobg"),o.addEventListener("click",function(){!function(t){if(t){s.setAttribute("style","width: 0px;");for(var i=0;i<n.length;i++)n[i].setAttribute("style","right: -200px;");console.log("umbau"),o.classList.remove("is-open")}else{s.setAttribute("style","width: 200px;");for(var e=0;e<n.length;e++)n[e].setAttribute("style","right: 0;");o.classList.add("is-open")}}(t),t=!t}),window.addEventListener("scroll",function(t){window.pageYOffset>a(h)-e.offsetHeight/2&&window.pageYOffset<a(h)+h.offsetHeight-e.offsetHeight/2?e.classList.remove("nav-bg"):e.classList.add("nav-bg")}),$("body").scrollspy({target:"header#top"}),$("header#top a").on("click",function(t){if(""!==this.hash){var i=600,e=0;t.preventDefault();var s=this.hash;"#work"==s&&(e=$(s).height()/2-$(window).height()/2+60),"#contact"==s&&(e=999,i=800),$("html, body").animate({scrollTop:$(s).offset().top+e},i,function(){})}});var l=function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;this.img=i,this.section=t;var h=this;this.sketch=function(e){var s=h.section,n=h.img,o=void 0;e.preload=function(){null!=n&&(o=e.loadImage(n))},e.setup=function(){e.createCanvas(s.width(),s.outerHeight()),null!=n&&o.loadPixels(),e.noLoop()},e.draw=function(){e.background(13,18,24),null!=n&&e.image(o,0,0,s.width(),s.outerHeight()),e.stroke(255);for(var t=0;t<e.width;t++){var i=e.noise(.02*t,10);e.line(t,e.height-50+80*i,t,e.height)}},e.windowResized=function(){e.resizeCanvas(s.width(),s.outerHeight())}}},d=function(m){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:10,x=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;this.section=m,this.val=t,this.img=x,this.sketch=function(d){var c=void 0,u={pos:{x:m.outerWidth()/2,y:0},size:{width:m.outerWidth()/2}},f=[],w=[],p=t,g=void 0;d.setup=function(){d.createCanvas(m.outerWidth(),m.outerHeight()),d.background(255),new y(0,0,50),null!=x&&(c=window.innerWidth<=480?new k(x,0,0,200,170):new k(x,0,0,500,430)),g=screen.width<=480?30:50;for(var t=0;t<p;t++){var i=d.random(u.pos.x,2*u.pos.x-50),e=d.random(0,m.outerHeight()),s=d.random(-1.5,1.5),n=d.random(-1.5,1.5);0==s&&(s=1),0==n&&(n=1),f[t]=new y(i,e,g,s,n)}for(var o=0;o<p;o++){var h=d.random(0,u.pos.x-50),r=d.random(0,m.outerHeight()),a=d.random(-1.5,1.5),l=d.random(-1.5,1.5);0==a&&(a=1),0==l&&(l=1),w[o]=new v(o,h,r,g,a,l)}d.frameRate(60)},d.draw=function(){d.background(255),null!=x&&(c.update(),c.draw()),d.strokeWeight(4),d.stroke(156,205,207);for(var t=0;t<w.length;t++){var i=w[t];i.update(),i.draw()}for(var e=0;e<f.length;e++){var s=!1;f[e].noFill(),f[e].update(),f[e].draw();for(var n=0;n<f.length;n++)e!=n&&f[e].intersectCircle(f[n])&&(s=!0);s?f[e].stroke([0,98,255]):f[e].stroke([156,205,207])}},d.windowResized=function(){window.innerWidth<=480?(p=5,g=30):(p=10,g=50),u={pos:{x:m.outerWidth()/2,y:0},size:{width:m.outerWidth()/2}},window.innerWidth<=480?(k.width=200,k.height=170):(k.width=500,k.height=430),1200<=window.innerWidth&&(k.width=700,k.height=630),d.resizeCanvas(m.outerWidth(),m.outerHeight())};var v=function(){function h(t,i,e,s){var n=4<arguments.length&&void 0!==arguments[4]?arguments[4]:2,o=5<arguments.length&&void 0!==arguments[5]?arguments[5]:2;r(this,h),this.text=t,this.x=i+50,this.y=e+50,this.size=s,this.speedX=n,this.speedY=o,this.fillColor=[156,205,207]}return i(h,[{key:"draw",value:function(){d.noStroke(),d.fill(this.fillColor),d.textSize(this.size),d.text(this.text,this.x,this.y)}},{key:"update",value:function(){this.x+=this.speedX,this.y+=this.speedY,this.intersectWall()}},{key:"intersectWall",value:function(){this.x>=u.pos.x-this.size/2&&(this.x=u.pos.x-this.size/2,this.speedX*=-1),this.x<=0&&(this.x=0,this.speedX*=-1),this.y>=d.height&&(this.y=d.height,this.speedY*=-1),this.y-this.size<=0&&(this.y=this.size,this.speedY*=-1)}}]),h}(),y=function(){function o(t,i,e){var s=3<arguments.length&&void 0!==arguments[3]?arguments[3]:2,n=4<arguments.length&&void 0!==arguments[4]?arguments[4]:2;r(this,o),this.x=t+50,this.y=i+50,this.size=e,this.speedX=s,this.speedY=n,this.fillColor=0,this.strokeColor=0}return i(o,[{key:"draw",value:function(){d.stroke(this.strokeColor),this.noFill?d.noFill():d.fill(this.fillColor),d.ellipse(this.x,this.y,this.size,this.size)}},{key:"update",value:function(){this.x+=this.speedX,this.y+=this.speedY,this.intersectWall()}},{key:"noFill",value:function(t){return t}},{key:"fill",value:function(t){this.fillColor=t}},{key:"stroke",value:function(t){this.strokeColor=t}},{key:"intersectCircle",value:function(t){return d.dist(this.x,this.y,t.x,t.y)<this.size/2+t.size/2}},{key:"intersectWall",value:function(){this.x>=d.width-this.size/2&&(this.x=d.width-this.size/2,this.speedX=-1*this.speedX),this.x<=u.pos.x+this.size/2&&(this.x=u.pos.x+this.size/2,this.speedX=-1*this.speedX),this.y>=d.height-this.size/2&&(this.y=d.height-this.size/2,this.speedY=-1*this.speedY),this.y<=this.size/2&&(this.y=this.size/2,this.speedY=-1*this.speedY)}}]),o}(),k=function(){function o(t,i,e,s,n){r(this,o),this.img=d.loadImage(t),this.x=i,this.y=e,this.width=s,this.height=n}return i(o,[{key:"draw",value:function(){d.image(this.img,this.x,this.y,this.width,this.height)}},{key:"update",value:function(){this.x=d.width/2-this.width/2,this.y=d.height/2-this.height/2}},{key:"followY",value:function(t,i){this.y<t&&(this.y+=i),this.y>t&&(this.y-=i)}}]),o}()}};document.querySelector("section#work"),document.querySelectorAll("section#work article");$(".contact-btn").on("click",function(){$("html, body").animate({scrollTop:$("html").height()},800,function(){})});var c=$("section#about"),u=$("section#skill");if(c.length){var f=new l(c,"/img/particles.jpg").sketch;new p5(f,"about")}if(u.length){$(window).width()<960&&4;var w=new d(u,7,"/img/white-brain.jpg");new p5(w.sketch,"skill")}for(var p=$("section#work"),g=$(".work-wrapper"),v=$(".work-group"),y=$(".work-paginator"),k=g.children().length,m=0,x=v.length/1-1,z=!0,b=0;b<k;b++)$(".work-paginator ul").append("\n    <li><a>"+(b+1)+"</a></li>\n    ");function C(t){var i=$(".work-paginator ul li:nth-child("+t+")");$(".work-paginator ul li").removeClass("selected"),i.addClass("selected")}y.css("top","-"+(p.height()/2-70)+"px"),$(window).resize(function(){y.css("top","-"+(p.height()/2-70)+"px")}),C(1),$(".work-paginator ul li").click(function(){var t;C($(this).index()+1),m=$(this).index(),t="-"+v.width()*m+"px",v.css({left:t})}),$(".work-paginator .icon-arrow-left").click(function(){z&&(z=!1,0<m?(m--,v.css({left:"+="+v.width()})):(m=x,v.css({left:"-"+v.width()*(k-1)+"px"})),window.setTimeout(function(){z=!0},300)),C(m+1)}),$(".work-paginator .icon-arrow-right").click(function(){z&&(z=!1,m<x?(m++,v.css({left:"-="+v.width()})):(m=0,v.css({left:"0px"})),window.setTimeout(function(){z=!0},300)),C(m+1)});var W=$("section#first"),Y=$("section#post-content");if(W.length){var H=new l(W,"/img/particles.jpg").sketch;new p5(H,"first")}if(Y.length&&960<$(window).width())new d(Y,10)});
//# sourceMappingURL=app.js.map
