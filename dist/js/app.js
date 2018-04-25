"use strict";var _createClass=function(){function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var nav=document.querySelector("header#top nav.items"),navListParrent=document.querySelector("header#top nav ul"),navList=document.querySelector("header#top nav ul li"),navListItems=document.querySelectorAll("header#top nav ul li a"),navToggle=document.querySelector(".nav-toggle"),firstSection=document.querySelector("body section"),headerShow=!1;function getOffsetTop(e){for(var t=0;isNaN(e.offsetTop)||(t+=e.offsetTop),e=e.offsetParent;);return t}function navShow(e){if(e){navListParrent.setAttribute("style","width: 0px;");for(var t=0;t<navListItems.length;t++)navListItems[t].setAttribute("style","right: -200px;");console.log("umbau"),navToggle.classList.remove("is-open")}else{navListParrent.setAttribute("style","width: 200px;");for(var i=0;i<navListItems.length;i++)navListItems[i].setAttribute("style","right: 0;");navToggle.classList.add("is-open")}}nav.classList.add("nav-nobg"),navToggle.addEventListener("click",function(){navShow(headerShow),headerShow=!headerShow}),window.addEventListener("scroll",function(e){window.pageYOffset>getOffsetTop(firstSection)-nav.offsetHeight/2&&window.pageYOffset<getOffsetTop(firstSection)+firstSection.offsetHeight-nav.offsetHeight/2?nav.classList.remove("nav-bg"):nav.classList.add("nav-bg")});for(var aboutSection={e:document.getElementById("about"),id:"about",size:{width:document.getElementById("about").offsetWidth,height:document.getElementById("about").offsetHeight}},aboutSketch=function(i){var s=void 0;i.preload=function(){s=i.loadImage("/img/particles.jpg")},i.setup=function(){i.createCanvas(aboutSection.size.width,aboutSection.size.height),s.loadPixels(),i.noLoop()},i.draw=function(){i.background(13,18,24),i.image(s,0,0,aboutSection.size.width,aboutSection.size.height),i.stroke(255);for(var e=0;e<i.width;e++){var t=i.noise(.02*e,10);i.line(e,i.height-50+80*t,e,i.height)}},i.windowResized=function(){aboutSection.size.width=aboutSection.e.offsetWidth,aboutSection.size.height=aboutSection.e.offsetHeight,i.resizeCanvas(aboutSection.size.width,aboutSection.size.height)}},showAboutSketch=new p5(aboutSketch,aboutSection.id),sectionWork=document.querySelector("section#work"),workArticles=document.querySelectorAll("section#work article"),skillSection={e:document.getElementById("skill"),id:"skill",size:{width:document.getElementById("skill").offsetWidth,height:document.getElementById("skill").offsetHeight}},skillSketch=function(d){var c=void 0,u={pos:{x:skillSection.e.offsetWidth/2,y:0},size:{width:skillSection.e.offsetWidth/2}},f=[],g=[],p=void 0,v=void 0;d.setup=function(){d.createCanvas(skillSection.e.offsetWidth,skillSection.e.offsetHeight),d.background(255),new k(0,0,50),c=window.innerWidth<=480?new m(d.loadImage("/img/white-brain.jpg"),0,0,200,170):new m(d.loadImage("/img/white-brain.jpg"),0,0,500,430),screen.width<=480?(p=4,v=30):(p=4,v=50);for(var e=0;e<p;e++){var t=d.random(u.pos.x,2*u.pos.x-50),i=d.random(0,skillSection.e.offsetHeight),s=d.random(-1.5,1.5),o=d.random(-1.5,1.5);0==s&&(s=1),0==o&&(o=1),f[e]=new k(t,i,v,s,o)}for(var n=0;n<p;n++){var h=d.random(0,u.pos.x-50),a=d.random(0,skillSection.e.offsetHeight),r=d.random(-1.5,1.5),l=d.random(-1.5,1.5);0==r&&(r=1),0==l&&(l=1),g[n]=new w(n,h,a,v,r,l)}d.frameRate(60)},d.draw=function(){d.background(255),c.update(),c.draw(),d.strokeWeight(4),d.stroke(156,205,207);for(var e=0;e<g.length;e++){var t=g[e];t.update(),t.draw()}for(var i=0;i<f.length;i++){var s=!1;f[i].noFill(),f[i].update(),f[i].draw();for(var o=0;o<f.length;o++)i!=o&&f[i].intersectCircle(f[o])&&(s=!0);s?f[i].stroke([0,98,255]):f[i].stroke([156,205,207])}},d.windowResized=function(){p=window.innerWidth<=480?5:10,u={pos:{x:skillSection.e.offsetWidth/2,y:0},size:{width:skillSection.e.offsetWidth/2}},window.innerWidth<=480?(c.width=200,c.height=170):(c.width=500,c.height=430),1200<=window.innerWidth&&(c.width=700,c.height=630),d.resizeCanvas(skillSection.e.offsetWidth,skillSection.e.offsetHeight)};var w=function(){function h(e,t,i,s){var o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:2,n=5<arguments.length&&void 0!==arguments[5]?arguments[5]:2;_classCallCheck(this,h),this.text=e,this.x=t+50,this.y=i+50,this.size=s,this.speedX=o,this.speedY=n,this.fillColor=[156,205,207]}return _createClass(h,[{key:"draw",value:function(){d.noStroke(),d.fill(this.fillColor),d.textSize(this.size),d.text(this.text,this.x,this.y)}},{key:"update",value:function(){this.x+=this.speedX,this.y+=this.speedY,this.intersectWall()}},{key:"intersectWall",value:function(){this.x>=u.pos.x-this.size/2&&(this.x=u.pos.x-this.size/2,this.speedX*=-1),this.x<=0&&(this.x=0,this.speedX*=-1),this.y>=d.height&&(this.y=d.height,this.speedY*=-1),this.y-this.size<=0&&(this.y=this.size,this.speedY*=-1)}}]),h}(),k=function(){function n(e,t,i){var s=3<arguments.length&&void 0!==arguments[3]?arguments[3]:2,o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:2;_classCallCheck(this,n),this.x=e+50,this.y=t+50,this.size=i,this.speedX=s,this.speedY=o,this.fillColor=0,this.strokeColor=0}return _createClass(n,[{key:"draw",value:function(){d.stroke(this.strokeColor),this.noFill?d.noFill():d.fill(this.fillColor),d.ellipse(this.x,this.y,this.size,this.size)}},{key:"update",value:function(){this.x+=this.speedX,this.y+=this.speedY,this.intersectWall()}},{key:"noFill",value:function(e){return e}},{key:"fill",value:function(e){this.fillColor=e}},{key:"stroke",value:function(e){this.strokeColor=e}},{key:"intersectCircle",value:function(e){return d.dist(this.x,this.y,e.x,e.y)<this.size/2+e.size/2}},{key:"intersectWall",value:function(){this.x>=d.width-this.size/2&&(this.x=d.width-this.size/2,this.speedX=-1*this.speedX),this.x<=u.pos.x+this.size/2&&(this.x=u.pos.x+this.size/2,this.speedX=-1*this.speedX),this.y>=d.height-this.size/2&&(this.y=d.height-this.size/2,this.speedY=-1*this.speedY),this.y<=this.size/2&&(this.y=this.size/2,this.speedY=-1*this.speedY)}}]),n}(),m=function(){function n(e,t,i,s,o){_classCallCheck(this,n),this.img=e,this.x=t,this.y=i,this.width=s,this.height=o}return _createClass(n,[{key:"draw",value:function(){d.image(this.img,this.x,this.y,this.width,this.height)}},{key:"update",value:function(){this.x=d.width/2-this.width/2,this.y=d.height/2-this.height/2}},{key:"followY",value:function(e,t){this.y<e&&(this.y+=t),this.y>e&&(this.y-=t)}}]),n}()},showSkillSketch=new p5(skillSketch,skillSection.id),workWrapper=$(".work-wrapper"),group=$(".work-group"),groupLength=workWrapper.children().length,visible=1,index=0,endIndex=group.length/visible-1,i=0;i<groupLength;i++)$(".work-paginator ul").append("\n    <li><a href='#work'>"+(i+1)+"</a></li>");function updatePaginatorNumbers(e){var t=$(".work-paginator ul li:nth-child("+e+")");$(".work-paginator ul li").removeClass("selected"),t.addClass("selected")}updatePaginatorNumbers(1),$(".work-paginator ul li").click(function(){updatePaginatorNumbers($(this).index()+1),index=$(this).index()+1,console.log($(this).index())}),$(".work-paginator .icon-arrow-left").click(function(){0<index?(index--,group.animate({left:"+="+group.width()})):(index=endIndex,group.animate({left:"-"+group.width()*(groupLength-1)})),updatePaginatorNumbers(index+1)}),$(".work-paginator .icon-arrow-right").click(function(){index<endIndex?(index++,group.animate({left:"-="+group.width()})):(index=0,group.animate({left:"0px"})),updatePaginatorNumbers(index+1)}),$(document).ready(function(){document.querySelectorAll('a[href^="#"]').forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})})});
//# sourceMappingURL=app.js.map
