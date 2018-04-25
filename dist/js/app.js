"use strict";var _createClass=function(){function o(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var nav=document.querySelector("header#top nav.items"),navListParrent=document.querySelector("header#top nav ul"),navList=document.querySelector("header#top nav ul li"),navListItems=document.querySelectorAll("header#top nav ul li a"),navToggle=document.querySelector(".nav-toggle"),firstSection=document.querySelector("body section"),headerShow=!1;function getOffsetTop(t){for(var e=0;isNaN(t.offsetTop)||(e+=t.offsetTop),t=t.offsetParent;);return e}function navShow(t){if(t){navListParrent.setAttribute("style","width: 0px;");for(var e=0;e<navListItems.length;e++)navListItems[e].setAttribute("style","right: -200px;");console.log("umbau"),navToggle.classList.remove("is-open")}else{navListParrent.setAttribute("style","width: 200px;");for(var i=0;i<navListItems.length;i++)navListItems[i].setAttribute("style","right: 0;");navToggle.classList.add("is-open")}}nav.classList.add("nav-nobg"),navToggle.addEventListener("click",function(){navShow(headerShow),headerShow=!headerShow}),window.addEventListener("scroll",function(t){window.pageYOffset>getOffsetTop(firstSection)-nav.offsetHeight/2&&window.pageYOffset<getOffsetTop(firstSection)+firstSection.offsetHeight-nav.offsetHeight/2?nav.classList.remove("nav-bg"):nav.classList.add("nav-bg")});for(var aboutSection={e:document.getElementById("about"),id:"about",size:{width:document.getElementById("about").offsetWidth,height:document.getElementById("about").offsetHeight}},aboutSketch=function(i){var o=void 0;i.preload=function(){o=i.loadImage("/img/particles.jpg")},i.setup=function(){i.createCanvas(aboutSection.size.width,aboutSection.size.height),o.loadPixels(),i.noLoop()},i.draw=function(){i.background(13,18,24),i.image(o,0,0,aboutSection.size.width,aboutSection.size.height),i.stroke(255);for(var t=0;t<i.width;t++){var e=i.noise(.02*t,10);i.line(t,i.height-50+80*e,t,i.height)}},i.windowResized=function(){aboutSection.size.width=aboutSection.e.offsetWidth,aboutSection.size.height=aboutSection.e.offsetHeight,i.resizeCanvas(aboutSection.size.width,aboutSection.size.height)}},showAboutSketch=new p5(aboutSketch,aboutSection.id),sectionWork=document.querySelector("section#work"),workArticles=document.querySelectorAll("section#work article"),skillSection={e:document.getElementById("skill"),id:"skill",size:{width:document.getElementById("skill").offsetWidth,height:document.getElementById("skill").offsetHeight}},skillSketch=function(d){var c=void 0,u={pos:{x:skillSection.e.offsetWidth/2,y:0},size:{width:skillSection.e.offsetWidth/2}},f=[],g=[],p=void 0,w=void 0;d.setup=function(){d.createCanvas(skillSection.e.offsetWidth,skillSection.e.offsetHeight),d.background(255),new k(0,0,50),c=window.innerWidth<=480?new y(d.loadImage("/img/white-brain.jpg"),0,0,200,170):new y(d.loadImage("/img/white-brain.jpg"),0,0,500,430),screen.width<=480?(p=4,w=30):(p=4,w=50);for(var t=0;t<p;t++){var e=d.random(u.pos.x,2*u.pos.x-50),i=d.random(0,skillSection.e.offsetHeight),o=d.random(-1.5,1.5),s=d.random(-1.5,1.5);0==o&&(o=1),0==s&&(s=1),f[t]=new k(e,i,w,o,s)}for(var n=0;n<p;n++){var r=d.random(0,u.pos.x-50),h=d.random(0,skillSection.e.offsetHeight),a=d.random(-1.5,1.5),l=d.random(-1.5,1.5);0==a&&(a=1),0==l&&(l=1),g[n]=new v(n,r,h,w,a,l)}d.frameRate(60)},d.draw=function(){d.background(255),c.update(),c.draw(),d.strokeWeight(4),d.stroke(156,205,207);for(var t=0;t<g.length;t++){var e=g[t];e.update(),e.draw()}for(var i=0;i<f.length;i++){var o=!1;f[i].noFill(),f[i].update(),f[i].draw();for(var s=0;s<f.length;s++)i!=s&&f[i].intersectCircle(f[s])&&(o=!0);o?f[i].stroke([0,98,255]):f[i].stroke([156,205,207])}},d.windowResized=function(){p=window.innerWidth<=480?5:10,u={pos:{x:skillSection.e.offsetWidth/2,y:0},size:{width:skillSection.e.offsetWidth/2}},window.innerWidth<=480?(c.width=200,c.height=170):(c.width=500,c.height=430),1200<=window.innerWidth&&(c.width=700,c.height=630),d.resizeCanvas(skillSection.e.offsetWidth,skillSection.e.offsetHeight)};var v=function(){function r(t,e,i,o){var s=4<arguments.length&&void 0!==arguments[4]?arguments[4]:2,n=5<arguments.length&&void 0!==arguments[5]?arguments[5]:2;_classCallCheck(this,r),this.text=t,this.x=e+50,this.y=i+50,this.size=o,this.speedX=s,this.speedY=n,this.fillColor=[156,205,207]}return _createClass(r,[{key:"draw",value:function(){d.noStroke(),d.fill(this.fillColor),d.textSize(this.size),d.text(this.text,this.x,this.y)}},{key:"update",value:function(){this.x+=this.speedX,this.y+=this.speedY,this.intersectWall()}},{key:"intersectWall",value:function(){this.x>=u.pos.x-this.size/2&&(this.x=u.pos.x-this.size/2,this.speedX*=-1),this.x<=0&&(this.x=0,this.speedX*=-1),this.y>=d.height&&(this.y=d.height,this.speedY*=-1),this.y-this.size<=0&&(this.y=this.size,this.speedY*=-1)}}]),r}(),k=function(){function n(t,e,i){var o=3<arguments.length&&void 0!==arguments[3]?arguments[3]:2,s=4<arguments.length&&void 0!==arguments[4]?arguments[4]:2;_classCallCheck(this,n),this.x=t+50,this.y=e+50,this.size=i,this.speedX=o,this.speedY=s,this.fillColor=0,this.strokeColor=0}return _createClass(n,[{key:"draw",value:function(){d.stroke(this.strokeColor),this.noFill?d.noFill():d.fill(this.fillColor),d.ellipse(this.x,this.y,this.size,this.size)}},{key:"update",value:function(){this.x+=this.speedX,this.y+=this.speedY,this.intersectWall()}},{key:"noFill",value:function(t){return t}},{key:"fill",value:function(t){this.fillColor=t}},{key:"stroke",value:function(t){this.strokeColor=t}},{key:"intersectCircle",value:function(t){return d.dist(this.x,this.y,t.x,t.y)<this.size/2+t.size/2}},{key:"intersectWall",value:function(){this.x>=d.width-this.size/2&&(this.x=d.width-this.size/2,this.speedX=-1*this.speedX),this.x<=u.pos.x+this.size/2&&(this.x=u.pos.x+this.size/2,this.speedX=-1*this.speedX),this.y>=d.height-this.size/2&&(this.y=d.height-this.size/2,this.speedY=-1*this.speedY),this.y<=this.size/2&&(this.y=this.size/2,this.speedY=-1*this.speedY)}}]),n}(),y=function(){function n(t,e,i,o,s){_classCallCheck(this,n),this.img=t,this.x=e,this.y=i,this.width=o,this.height=s}return _createClass(n,[{key:"draw",value:function(){d.image(this.img,this.x,this.y,this.width,this.height)}},{key:"update",value:function(){this.x=d.width/2-this.width/2,this.y=d.height/2-this.height/2}},{key:"followY",value:function(t,e){this.y<t&&(this.y+=e),this.y>t&&(this.y-=e)}}]),n}()},showSkillSketch=new p5(skillSketch,skillSection.id),workWrapper=document.querySelector(".work-wrapper"),workWrapperWidth=parseInt(window.getComputedStyle(workWrapper,null).getPropertyValue("height"))+parseInt(window.getComputedStyle(workWrapper,null).getPropertyValue("margin")),workGroup=document.querySelectorAll(".work-group"),workGroupWidth=parseInt(window.getComputedStyle(workGroup[0],null).getPropertyValue("height"))+parseInt(window.getComputedStyle(workGroup[0],null).getPropertyValue("margin")),workPaginatorNum=document.querySelectorAll(".work-paginator ul li a"),worksPos={},_loop=function(t){var e=workPaginatorNum[t];console.log(t),e.addEventListener("click",function(){console.log(t),workWrapper.setAttribute("style","transform: translateX(-"+workWrapperWidth+"px)")})},i=0;i<workPaginatorNum.length;i++)_loop(i);workGroup.forEach(function(t){console.log(t)});
//# sourceMappingURL=app.js.map
