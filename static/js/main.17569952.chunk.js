(this["webpackJsonpnavbar-dropdown-v1"]=this["webpackJsonpnavbar-dropdown-v1"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/img-CTF.b40f62cb.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-DI.c3e8df01.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-maze.7cee0f82.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-art.abd95666.jpeg"},,function(e,t,a){},function(e,t,a){},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/video-3.2dc28c9a.mp4"},function(e,t,a){e.exports=a.p+"static/media/img-resume.4f59ebdd.png"},function(e,t,a){e.exports=a.p+"static/media/img-RPG.9078269a.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-LaserTag.8b338307.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-sp.1fadf0b0.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-IR.630f2545.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-cake.ae02937c.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-ca.3d848b99.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-ball.33cb9116.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-tpf.5e86134c.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-sm.d9c1db86.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-iso.f338a0a2.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-witch.cd1a372a.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-multi.ea718231.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-game.55ff01ee.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-ai.4ee9ace3.jpg"},function(e,t,a){e.exports=a.p+"static/media/img-art.5cb5a3fa.jpg"},function(e,t,a){e.exports=a(53)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),c=a.n(r),l=a(18),s=a(3);a(45);var o=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!0),o=Object(l.a)(c,2),m=(o[0],o[1]),d=function(){return r(!1)},p=function(){window.innerWidth<=960?m(!1):m(!0)};return Object(n.useEffect)((function(){p()}),[]),window.addEventListener("resize",p),i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{className:"navbar"},i.a.createElement("div",{className:"navbar-container"},i.a.createElement(s.b,{to:"/Dai-website",className:"navbar-logo",onClick:d},"DAI IBRAHIM"),i.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!a)}},i.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),i.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},i.a.createElement("li",{className:"nav-item"},i.a.createElement(s.b,{to:"/Dai-website",className:"nav-links",onClick:d},"Home")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(s.b,{to:"/Classes",className:"nav-links",onClick:d},"Classes")),i.a.createElement("li",{className:"nav-item"},i.a.createElement(s.b,{to:"/portfolio",className:"nav-links",onClick:d},"Portfolio"))))))};a(14),a(15);var m=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",{className:"cards__item"},i.a.createElement(s.b,{className:"cards__item__link",to:{pathname:e.path}},i.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},i.a.createElement("img",{className:"cards__item__img",src:e.src})),i.a.createElement("div",{className:"cards__item__info"},i.a.createElement("h5",{className:"cards__item__text"},e.text)))))},d=a(9),p=a.n(d),u=a(10),h=a.n(u),g=a(11),b=a.n(g),f=a(12),E=a.n(f);var v=function(){return i.a.createElement("div",{id:"cards-section",className:"cards"},i.a.createElement("h1",null,"Featured Work"),i.a.createElement("div",{className:"cards__container"},i.a.createElement("div",{className:"cards__wrapper"},i.a.createElement("ul",{className:"cards__items"},i.a.createElement(m,{src:p.a,text:"A 4 player game where each player competes to get the hat and return it to their base to win.",label:"Multiplayer Game",path:"https://dai-ibrahim.github.io/CTF/"}),i.a.createElement(m,{src:h.a,text:"A demonstration of the dependency injection design pattern of programming.",label:"Design Patterns ",path:"https://dai-ibrahim.github.io/DependencyInjection/"})),i.a.createElement("ul",{className:"cards__items"},i.a.createElement(m,{src:b.a,text:"A program that auto generates a maze every second. Makes for a cool screensaver too!",label:"AI",path:"https://dai-ibrahim.github.io/Mazes_Prod/"}),i.a.createElement(m,{src:E.a,text:"A vector illustration of Sans from the Undertale video game series.",label:"Art",path:"https://daibrahim.artstation.com/projects/rR6qlE"})))))},_=(a(51),["btn--primary","btn--outline","btn--test"]),y=["btn--medium","btn--large"],x=function(e){var t=e.children,a=e.type,n=e.onClick,r=e.buttonStyle,c=e.buttonSize,l=_.includes(r)?r:_[0],o=y.includes(c)?c:y[0];return i.a.createElement(s.b,{to:"/portfolio#resume",className:"btn-mobile"},i.a.createElement("button",{className:"btn ".concat(l," ").concat(o),onClick:n,type:a},t))},N=(a(52),a(23)),j=a.n(N);var A=function(){return i.a.createElement("div",{className:"hero-container"},i.a.createElement("video",{src:j.a,autoPlay:!0,loop:!0,muted:!0}),i.a.createElement("h1",null,"Dai Ibrahim"),i.a.createElement("p",null,"Software Engineering Student at Embry-Riddle Aeronautical University"),i.a.createElement("div",{className:"hero-btns"},i.a.createElement(x,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"R\xc9SUM\xc9")))};var w=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(A,null),i.a.createElement("div",{id:"card-sections",className:"card-sec"},i.a.createElement(v,null)))},S=a(1),k=a(24),C=a.n(k),I=a(25),P=a.n(I),D=a(26),M=a.n(D),R=a(27),F=a.n(R),z=a(28),G=a.n(z),T=a(29),O=a.n(T),W=a(30),B=a.n(W),U=a(31),J=a.n(U),L=a(32),q=a.n(L),H=a(33),K=a.n(H),Q=a(34),V=a.n(Q),Y=a(35),Z=a.n(Y);var X=function(){return i.a.createElement("div",{id:"cards-section",className:"cards"},i.a.createElement("h2",null,"Dai's Portfolio"),i.a.createElement("div",{className:"cards__container"},i.a.createElement("div",{className:"cards__wrapper"},i.a.createElement("div",{id:"resume"},i.a.createElement("h1",null,"R\xc9SUM\xc9"),i.a.createElement("ul",{className:"cards__items"},i.a.createElement(m,{src:C.a,text:"Dai's Engineering Resume",label:"PDF",path:"https://drive.google.com/file/d/1-bMMrbKJdjhkO21A2-0VWjsWFWZ3f-fG/view?usp=sharing"}))),i.a.createElement("div",{id:"mp"},i.a.createElement("h1",null,"Multiplayer Game Systems"),i.a.createElement("ul",{className:"cards__items"},i.a.createElement(m,{src:p.a,text:"A 4 player game where each player competes to get the hat and return it to their base to win.",label:"Capture the Flag",path:"https://dai-ibrahim.github.io/CTF/"}),i.a.createElement(m,{src:P.a,text:"A multiplayer game where players collect gold and kill enemies. Collect more gold and kill your enemies.",label:"RPG",path:"https://dai-ibrahim.github.io/RPG_Prod/"})," ",i.a.createElement(m,{src:M.a,text:"A battle royle game but with a twist! It's actually laser tag.",label:"Battle Royale",path:"https://dai-ibrahim.github.io/BattleRoyale_Production/"}))),i.a.createElement("div",{id:"ge"},i.a.createElement("h1",null,"Game Engines and Design Patterns"),i.a.createElement("ul",{className:"cards__items"},i.a.createElement(m,{src:h.a,text:"A demonstration of the dependency injection design pattern of programming.",label:"Dependency Injection",path:"https://dai-ibrahim.github.io/DependencyInjection/"}),i.a.createElement(m,{src:F.a,label:"Spacial Partition",text:"A demonstration of the spacial partition optimization design pattern. Also makes for a cool screensaver.",path:"https://dai-ibrahim.github.io/CS434_SpatialPartition_Prod/"}),i.a.createElement(m,{src:G.a,text:"A demonstration of the command design pattern. Drive around Garbage city and try not to crash. If you do, you will get an instant replay of your mistakes.",label:"Instant Replay",path:"https://dai-ibrahim.github.io/CS434_Instant_Replay/"}),i.a.createElement(m,{src:O.a,text:"A demonstration of the decorator design pattern. You get to be a baker and make the cakes of your dreams! (well only like 2 types of cakes)",label:"Decorator Pattern",path:"https://dai-ibrahim.github.io/Cake_Decorator/"}))),i.a.createElement("div",{id:"ai"},i.a.createElement("h1",null,"Artificial Intellegence"),i.a.createElement("ul",{className:"cards__items"},i.a.createElement(m,{src:b.a,text:"A program that auto generates a maze every second. Makes for a cool screensaver too!",label:"Auto Mazes",path:"https://dai-ibrahim.github.io/Mazes_Prod/"}),i.a.createElement(m,{src:B.a,text:"A demostration of collsion avoidance in games.",label:"Collision Avoidance",path:"https://dai-ibrahim.github.io/CS455_Collision_Avoidance_Production/"}),i.a.createElement(m,{src:J.a,text:"A demostration of movement and physics prediction in AI. The program predicts the trajectory of the balls as they arrive to their final destination.",label:"Firing Solutions",path:"https://dai-ibrahim.github.io/FiringSolution/"}),i.a.createElement(m,{src:q.a,text:"A demonstration of tactical pathfinding using Dijkstra's algorithm and weight analysis.",label:"Tactical Pathfinding",path:"https://dai-ibrahim.github.io/CS455_Tactical_Path_Finding/"}))),i.a.createElement("div",{id:"art"},i.a.createElement("h1",null,"Digital Art"),i.a.createElement("ul",{className:"cards__items"},i.a.createElement(m,{src:E.a,text:"A vector illustration of Sans from the Undertale video game series.",label:"Sans",path:"https://daibrahim.artstation.com/projects/rR6qlE"}),i.a.createElement(m,{src:K.a,text:"A digital painting of Miles Morales as Spiderman from Spider-Man: Into The Spider-Verse.",label:"Spider-Man",path:"https://daibrahim.artstation.com/projects/rABg6e"}),i.a.createElement(m,{src:V.a,text:"A vector illustration of city in isometric view.",label:"Iso-City",path:"https://daibrahim.artstation.com/projects/8l4KQq"}),i.a.createElement(m,{src:Z.a,text:"A digtal painting of a witch cooking in front of a window.",label:"Little Witch",path:"https://daibrahim.artstation.com/projects/PoJLQ8?album_id=2129994"}))))))},$=a(36),ee=a.n($),te=a(37),ae=a.n(te),ne=a(38),ie=a.n(ne),re=a(39),ce=a.n(re);var le=function(){return i.a.createElement("div",{id:"cards-section",className:"cards"},i.a.createElement("h1",null,"Classes"),i.a.createElement("div",{className:"cards__container"},i.a.createElement("div",{className:"cards__wrapper"},i.a.createElement("ul",{className:"cards__items"},i.a.createElement(m,{src:ee.a,text:"Multiplayer Game Systems",label:"SIM 450",path:"/portfolio#mp"}),i.a.createElement(m,{src:ae.a,text:"Game Engine Architecture",label:"SIM 335",path:"/portfolio#ge"})),i.a.createElement("ul",{className:"cards__items"},i.a.createElement(m,{src:ie.a,text:"Artificial Intelligence",label:"CS 455",path:"/portfolio#ai"}),i.a.createElement(m,{src:ce.a,text:"Digital Illustration",label:"SIM 115",path:"/portfolio#art"})))))};var se=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,null,i.a.createElement(o,null),i.a.createElement(S.c,null,i.a.createElement(S.a,{path:"/Dai-website",exact:!0,component:w}),i.a.createElement(S.a,{path:"/portfolio",component:X}),i.a.createElement(S.a,{path:"/classes",component:le}))))};c.a.render(i.a.createElement(se,null),document.getElementById("root"))}],[[40,1,2]]]);
//# sourceMappingURL=main.17569952.chunk.js.map