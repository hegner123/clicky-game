(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(2),c=a.n(o),r=(a(14),a(3)),s=a(4),l=a(7),m=a(5),u=a(8);function g(e){var t=e.fluid,a=e.children;return i.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function d(e){var t=e.fluid,a=e.children;return i.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function p(e){var t=e.size,a=e.styles,n=e.children;return i.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")+" "+a},n)}var v=function(){return i.a.createElement("div",{className:"container-fluid p-0 m-0"},i.a.createElement("div",{className:"jumbotron text-center"},i.a.createElement("h1",null,"Clicky Game")))};var h=function(e){return i.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},i.a.createElement("span",{className:"navbar-brand"},"Clicky Game"),e.children)};var f=function(e){return i.a.createElement("div",{className:"row"},e.children)};var k=function(e){return i.a.createElement("div",{className:"col-12 col-md-4 text-center mt-5"},i.a.createElement("img",{src:e.image,className:"img-fluid ",alt:"...",onClick:function(){return e.clicked(e.id)}}))},b=a(6);var E=function(e){return i.a.createElement("div",{className:"ml-auto"},i.a.createElement("div",{className:"ml-auto"},i.a.createElement("span",null,i.a.createElement("strong",null,"Score:"),e.score),i.a.createElement("span",{className:"ml-5"},i.a.createElement("strong",null,"TopScore:"),e.topScore)))},w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={friends:b,playState:"none",score:0,topScore:0,guesses:3,clicked:[]},a.clicked=function(e){var t=a.state.clicked,n=a.state.score,i=a.state.topScore;t.includes(e)?(console.log(t),console.log("fuck"),n>i?(a.setState({topScore:n}),a.setState({score:0}),a.setState({clicked:[]})):(a.setState({score:0}),a.setState({clicked:[]}))):(a.setState({score:n+1}),n>i&&a.setState({topScore:n}),console.log(n),console.log(i),t.push(e)),a.shuffle()},a.shuffle=function(){return a.state.friends.sort((function(e,t){return.5-Math.random()}))},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(h,null,i.a.createElement(E,{score:this.state.score,topScore:this.state.topScore})),i.a.createElement(v,null),i.a.createElement(g,null,i.a.createElement(d,null,i.a.createElement(p,{size:"12"},i.a.createElement(f,null,this.state.friends.map((function(t){return i.a.createElement(k,{clicked:e.clicked,id:t.id,key:t.id,image:t.image})})))))))}}]),t}(n.Component);var y=function(){return i.a.createElement(w,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e){e.exports=JSON.parse('[{"id":1,"name":"SpongeBob","image":"https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014","occupation":"Fry Cook","location":"A Pineapple Under the Sea"},{"id":2,"name":"Mr. Krabs","image":"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131","occupation":"Restaurant Owner","location":"A Giant Anchor"},{"id":3,"name":"Squidward","image":"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626","occupation":"Cashier","location":"An Easter Island Head"},{"id":4,"name":"Dexter","image":"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png","occupation":"Boy Genius","location":"A Secret Laboratory"},{"id":5,"name":"Courage","image":"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423","occupation":"A Cowardly Dog","location":"Nowhere, Kansas"},{"id":6,"name":"Doug Funnie","image":"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511","occupation":"Student","location":"Bluffington"},{"id":7,"name":"Bugs Bunny","image":"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607","occupation":"Looney Toon","location":"A Rabbit Burrow"},{"id":8,"name":"Johnny Bravo","image":"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist","occupation":"Ladies Man","location":"Aron City"},{"id":9,"name":"Tommy Pickles","image":"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641","occupation":"Adventurer","location":"California"},{"id":10,"name":"Rocko","image":"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416","occupation":"Cashier","location":"O-Town, California"},{"id":11,"name":"Captain Planet","image":"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836","occupation":"Superhero","location":"Earth"},{"id":12,"name":"Ickis","image":"http://static.tvtropes.org/pmwiki/pub/images/ickis.png","occupation":"Ahhhh! A Real Monster!","location":"Under a City Dump"}]')},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.1b9c2c52.chunk.js.map