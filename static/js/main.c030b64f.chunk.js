(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,n,t){e.exports=t(371)},369:function(e,n,t){},371:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(80),o=t.n(r),c=(t(161),t(15)),d=t(16),l=t(18),u=t(17),m=t(19),s=t(39),p=t(8),f=t(374),h=t(372),g=t(375),b=t(7),v=t(55),x=t.n(v);function w(){var e=Object(p.a)(["\n  @import url('https://fonts.googleapis.com/css?family=Amatic+SC');\n  /* font-family: 'Amatic SC', cursive; */\n  @import url('https://fonts.googleapis.com/css?family=Seaweed+Script');\n  /* font-family: 'Seaweed Script', cursive; */\n  @import url('https://fonts.googleapis.com/css?family=Leckerli+One');\n  /* font-family: 'Leckerli One', cursive; */\n  @import url('https://fonts.googleapis.com/css?family=Playfair+Display');\n  /* font-family: 'Playfair Display', serif; */\n  /* html {\n    box-sizing: border-box;\n    font-size: 10px;\n  } */\n  html,\n  body,\n  #root {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n  *{\n    margin: 0;\n    padding: 0;\n  }\n  ul {\n    list-style: none;\n  }\n  a {\n    text-decoration: none;\n    color: ",';\n  }\n  *, *:before, *:after {\n    /* box-sizing: inherit;\n    outline: none;\n    border: none; */\n    -webkit-overflow-scrolling: touch;\n  }\n  body {\n    /* margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    line-height: 2; */\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n    /* -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; */\n    /* overflow-x: hidden;\n    overflow-y: scroll; */\n  }\n\n  code {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n    monospace;\n  }\n']);return w=function(){return e},e}var y={lightRed:"#dc3522",veryLightRed:"#ff2929",red:"#D80000",darkRed:"#8B0000",prettyPink:"#cf3472",yellow:"#ffe866",green:"008B00",black:"#393939",lightBlue:"#0080ff",darkNavy:"#232D3E",grey:"#3A3A3A",lightGrey:"#E1E1E1",orange:"#e87c03",lightOrange:"#FFA500",offWhite:"#EDEDED",maxWidth:"1000px",bs:"0 12px 24px 0 rgba(0, 0, 0, 0.09)",fontAmatic:"font-family: 'Amatic SC', cursive;",fontLeckerli:"font-family: 'Leckerli One', cursive;",fontSeaweed:"font-family: 'Seaweed Script', cursive;",fontPlayfair:"font-family: 'Playfair Display', serif;"},k=Object(b.b)(w(),function(e){return e.theme.black}),E=t(373);function j(){var e=Object(p.a)(["\n  background: ",";\n  /* background: ","; */\n  width: 100%;\n  margin: 0 auto;\n  padding: ",";\n  /* overflow-x: hidden; */\n  overflow: hidden;\n  position: relative;\n  @media (min-width: 576px) {\n    max-width: 540px;\n  }\n  @media (min-width: 768px) {\n    max-width: 720px;\n  }\n  @media (min-width: 992px) {\n    max-width: 960px;\n  }\n  @media (min-width: 1460px) {\n    max-width: 1430px;\n  }\n"]);return j=function(){return e},e}var O=b.c.div(j(),function(e){return e.backgroundColor?e.backgroundColor:"none"},function(e){return e.backgroundUrl?"url('".concat(e.backgroundUrl,"')"):"none"},function(e){return e.padding?"".concat(e.padding):"0"});function N(){var e=Object(p.a)(["\n  &."," {\n    color: ",";\n  }\n"]);return N=function(){return e},e}function S(){var e=Object(p.a)(["\n  position: fixed;\n  background: ",";\n  width: ",";\n  left: 0;\n  top: 0;\n  z-index: 100;\n  transition: background 300ms;\n  ul {\n    display: flex;\n    justify-content: center;\n    li {\n      padding: 0.5rem 1rem;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      &:first-child {\n        margin-right: ",";\n      }\n\n      a {\n        font-size: 18px;\n        text-transform: uppercase;\n        font-weight: 500;\n        height: 60px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        transition: color 300ms ease-in-out;\n        color: ",";\n\n        div {\n          display: flex;\n          align-items: flex-end;\n          & > *:nth-child(2) {\n            margin-left: ",";\n          }\n          img {\n            width: auto;\n            object-fit: cover;\n          }\n          img:nth-child(1) {\n            height: ",";\n          }\n          img:nth-child(2) {\n            height: ",";\n          }\n        }\n      }\n    }\n  }\n"]);return S=function(){return e},e}var C=b.c.nav(S(),function(e){return e.backgroundFixed?e.theme.lightOrange:"transparent"},function(e){return"".concat(e.width,"px")},function(e){return e.mobile?"0.5rem":"1rem"},function(e){return e.backgroundFixed?e.theme.offWhite:"#f2f2f2"},function(e){return e.mobile?"5px":"10px"},function(e){return e.mobile?"50px":"60px"},function(e){return e.mobile?"30px":"38px"}),z=Object(b.c)(E.a).attrs({activeClassName:"active"})(N(),"active",function(e){return e.theme.darkRed}),B=function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(l.a)(this,Object(u.a)(n).call(this))).handleActive=function(){e.setState({active:!e.state.active})},e.handleToTop=function(){x()(".wrapper").animate({scrollTop:0},150)},e.state={fixed:!1},e}return Object(m.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.width,a=n.location,r=this.state.fixed,o=t<768;return i.a.createElement(C,{backgroundFixed:r,width:t,mobile:o,className:"mainNav"},i.a.createElement(O,null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(E.a,{to:"/",onClick:function(n){"/"===a.pathname?n.preventDefault():(e.props.resetMenu(!1),e.handleToTop())}},i.a.createElement("div",null,i.a.createElement("img",{src:"/images/logo-white-h60.png",alt:""}),i.a.createElement("img",{src:"/images/horizontal-white-h38.png",alt:""})))),i.a.createElement("li",null,i.a.createElement(z,{to:"/menu",activeClassName:"active",onClick:function(n){a.pathname.includes("/menu")?n.preventDefault():(e.props.resetMenu(!1),e.handleToTop())}},"Menu")),i.a.createElement("li",null,i.a.createElement(z,{to:"/contact",activeClassName:"active",onClick:function(n){"/contact"===a.pathname?n.preventDefault():(e.props.resetMenu(!1),e.handleToTop())}},"Contact")))))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return e.fixed!==n.fixed&&{fixed:e.fixed}}}]),n}(a.Component),T=t(368);function F(){var e=Object(p.a)(["\n  width: 100%;\n  min-height: 100vh;\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),\n    url('/images/landing-header-background.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: top center;\n  position: relative;\n  div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(0);\n    transition: all 1000ms;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    opacity: 0;\n    &.animate {\n      opacity: 1;\n      transform: translate(-50%, -50%) scale(1);\n    }\n    * {\n      text-align: center;\n    }\n    h1 {\n      font-family: 'Amatic SC', cursive;\n      font-size: 64px;\n      line-height: 1;\n      color: #fff;\n      max-width: 840px;\n    }\n    h2 {\n      font-family: 'Amatic SC', cursive;\n      font-size: 50px;\n      color: #fff;\n      max-width: 740px;\n    }\n    h4 {\n      margin-top: 20px;\n      font-family: 'Amatic SC', cursive;\n      color: #fff;\n      font-size: 24px;\n      line-height: 1.4;\n      max-width: 640px;\n    }\n    a {\n      margin-top: 20px;\n      padding: 10px 30px;\n      background: ",";\n      color: #f2f2f2;\n      border: 1px solid ",";\n      border-radius: 30px;\n      outline: none;\n      transition: background 300ms linear, color 300ms linear, opacity 500ms;\n      opacity: 0;\n      &:hover {\n        background: ",";\n        color: ",";\n      }\n      &.animate {\n        opacity: 1;\n      }\n    }\n    @media (max-width: 767px) and (orientation: portrait) {\n      h1 {\n        font-size: 48px;\n        line-height: 1;\n      }\n      h4 {\n        line-height: 1.2;\n      }\n    }\n  }\n"]);return F=function(){return e},e}var M=b.c.header(F(),function(e){return e.theme.lightRed},function(e){return e.theme.lightRed},function(e){return e.theme.offWhite},function(e){return e.theme.lightRed}),H=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("loaded")[0],n=document.getElementsByClassName("loadedButton")[0];setTimeout(function(){e.classList.add("animate")},400),setTimeout(function(){n.classList.add("animate")},1800)}},{key:"render",value:function(){return i.a.createElement(M,null,i.a.createElement("div",{className:"loaded"},i.a.createElement("h1",null,"Seoul Food Take Out"),i.a.createElement("h4",null,"The Most Authentic Korean Food in Toronto"),i.a.createElement(T.a,{to:"/menu",className:"loadedButton"},"MENU")))}}]),n}(a.Component),R=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(H,null))}}]),n}(a.Component),D=[{id:"aec04adb-a9cf-42b2-b562-2424bccd8046",name:"Hot Food",url:"/menu/hot-food"},{id:"961847d0-7699-43b2-9ba7-820fb66d2ee0",name:"Wraps & Sandwiches",url:"/menu/wraps-and-sandwiches"},{id:"ab160288-afa1-46fe-a139-041e6b7c9e24",name:"Street Food",url:"/menu/street-food"},{id:"cde27486-e719-402c-99d5-663c1654ca0e",name:"Salad",url:"/menu/salad"},{id:"29978d5c-9198-44c7-a23e-4a7051c0f7af",name:"Soup",url:"/menu/soup"},{id:"f5e7ede6-103b-4e9a-a015-cfd69dc20a0b",name:"Beverage",url:"/menu/beverage"}],A=[{id:"96b0212a-2aa1-4827-b7d9-c5b3fd0d0554",path:"/menu/beverage",title:"Beverage",data:[{id:"14be753e-a50e-4e2d-bd3e-88299aab3a23",name:"Apple Cider (one size)",image:"",price:2.25},{id:"efe33bf7-5284-4363-8815-6e26712d43a4",name:"Pop, Water",image:"",price:"$1.25 or up"}]},{id:"1e6c1ffa-17ef-4b9d-9ad5-2788697c0d9f",path:"/menu/hot-food",title:"Hot Food",data:[{id:"d6cd108c-b69d-493d-b76c-bd311aa9e981",name:"Bulgogi Bowl",description:"(shredded beef marinated in speical sauce)",image:"/images/menu/appetizer/agedashi_tofu.jpg",price:8.85},{id:"92c522a8-333d-4a24-9a49-adb3e12f4828",name:"Spicy Pork",description:"(shredded bacon and pork belly marinated in spicy sauce)",image:"/images/menu/appetizer/agedashi_tofu.jpg",price:7.85},{id:"426551b3-d3fc-42ab-92a9-74abc82e1e34",name:"Chicken Bowl",description:"(Korean style spicy chicken)",image:"/images/menu/appetizer/agedashi_tofu.jpg",price:8.85},{id:"8658ae43-a45c-4741-b4c3-7cfcf3dab525",name:"Chicken Stir Fry (Friday only)",description:"",image:"/images/menu/appetizer/agedashi_tofu.jpg",price:8.85},{id:"36be65b4-71b2-4bec-aada-6d85c62a95c4",name:"Chicken Curry (Monday only)",description:"",image:"/images/menu/appetizer/agedashi_tofu.jpg",price:7.85},{id:"31694f68-ef3b-4a4f-b43c-36008edfbdda",name:"Mega Donkatsu",description:"(pork cutlet)",image:"/images/menu/appetizer/agedashi_tofu.jpg",price:8.85},{id:"01a86aeb-ee0a-45e7-b40c-f818c8529f20",name:"Mega Chicken Katsu",description:"(chicken cutlet)",image:"/images/menu/appetizer/agedashi_tofu.jpg",price:9.95},{id:"7ce2c5ee-b346-4d0c-9e62-67bb36fa6988",name:"Fish Katsu (Thursday only)",description:"(breaded basa fillet)",image:"/images/menu/appetizer/agedashi_tofu.jpg",price:7.85},{id:"11c326a5-b057-4f4c-a788-08853b6dbc9c",name:"Yum Yum Fried Chicken (Wednesday only)",description:"(w/ spicy sauce)",image:"/images/menu/appetizer/agedashi_tofu.jpg",price:8.85},{id:"85469afd-8dc3-4a6e-910b-2b925751cee1",name:"Bibimbap",description:"(rice with saut\xe9ed seasoned vegetables and spicy red pepper paste)",description2:"Add Extra Protein for $2.00",image:"/images/menu/appetizer/agedashi_tofu.jpg",price:6.99},{id:"43a77627-0630-4fe9-9e2d-8b8348cdeccd",name:"Chicken Leg",description:"(w/ garlic oil sauce)",image:"/images/menu/appetizer/agedashi_tofu.jpg",price:8.35},{id:"15937a0d-fbb6-47ee-8a06-c37362505957",name:"Chicken Strips",description:"(w/ garlic oil sauce)",image:"/images/menu/appetizer/agedashi_tofu.jpg",price:8.35},{id:"8e7d1bc7-8137-4330-9ec4-31c798dcbae3",name:"Bentobox",items:[{id:"baf27bc1-2d44-4b41-8e31-c71e67d6c985",name:"Bento Box (Vegetable)",description:"",image:"",price:6.65},{id:"0ab078b2-fe12-411c-8e21-f57f8d54c8f8",name:"Bento Box (Beef)",description:"",image:"",price:6.99},{id:"8c856f73-838b-47f0-87ba-c7fb43e4f362",name:"Bento Box (Spicy Pork)",description:"",image:"",price:6.99},{id:"4e7fe8cc-ee32-423f-a567-b09e00658dfa",name:"Bento Box (Spicy Chicken)",description:"",image:"",price:6.99}]}]},{id:"18dcdd67-7e74-4c00-8ccf-4b040a0209ca",path:"/menu/wraps-and-sandwiches",title:"Wraps & Sandwiches",data:[{id:"433e87b2-8cad-44b7-a528-4ebf4b1bad9f",name:"Veggie Delight",description:"(w/ avocado and cheese)",price:5.25},{id:"9e3f6848-5f81-4854-9ee9-125f1acb7395",name:"Kimchi Bulgogi",description:"(w/ cheese)",price:8.85},{id:"37b4e72a-f01c-4a99-ae32-61e50db3af23",name:"Kimchi Spicy Pork",description:"(w/ cheese)",price:7.85},{id:"86c133d4-81b9-46a4-be06-77d39130f1ab",name:"Steak Sandwich",description:"(w/ provolone cheese)",price:6.39},{id:"c6058f49-1076-4567-bf15-4a84d0443969",name:"Beef Patty Sandwich",description:"(w/ lettuce, tomato)",price:3.99},{id:"1c641838-5877-4985-9970-096995d00987",name:"Beef Patty w/ Coco bread",description:"",price:3.15}]},{id:"e5001983-718a-4a3f-94f3-8daced27c7c2",path:"/menu/salad",title:"Salad",data:[{id:"41673421-0819-4557-84c6-498f1cb83d67",name:"Garden salad w/ Tofu",description:"",price:5.99},{id:"4ce70e3b-c64c-498a-8daa-b36b705eacbd",name:"Pasta Salad",description:"",price:4.99},{id:"d0cb48c7-c506-4ef4-8587-c5871778c7ed",name:"Fresh Roll",description:"w/ rice paper, cucumber, carrot, avocado",price:4.43}]},{id:"a42018aa-2df2-49f4-9978-10c31c694092",path:"/menu/soup",title:"Soup",data:[{id:"e090cd12-9944-4d32-84a5-0367465415f9",name:"Red Thai Chicken Soup",description:"(w/ coconut milk)",price:4.43},{id:"ce1ae195-6cfb-4527-9a9c-004ecab07ea0",name:"Soondubu",description:"(soft tofu w/ spicy sauce & vegetable base)",price:4.43},{id:"89cfd766-b5ee-4cf5-a85a-3cd171bbc6e7",name:"U-don Soup",description:"",description2:"*Add extra protein for $2.00",price:5.25},{id:"c37ca76c-8ae2-4737-909e-6d30d80fd3d6",name:"Wonton Soup",description:"",price:4.43}]},{id:"d1b71ddf-736c-4df5-b13f-23fb0b6b0b39",path:"/menu/street-food",title:"Street Food",data:[{id:"fabcc756-3ce1-44d9-8fd7-2d98a4673d17",name:"Gimbap",description:"(Korean maki roll w/ optional spicy mayo)",price:4.43},{id:"88e70052-4ea8-43e8-989a-0a0cc86d4135",name:"Japchae",description:"(Korean glass noodle w/ vegetables)",price:4.43},{id:"e532ed78-1386-4bfe-ade8-b4b0b1977b4e",name:"Steamed Kimchi Dumpling",description:"",price:4.43},{id:"20d40e14-0db7-44fa-9585-5916f6f80c3d",name:"Steamed Beef Dumpling",description:"",price:4.43},{id:"5e6324ed-9a1e-4ec7-8b88-1c988c9a90cb",name:"Fried Veggie Dumpling",description:"",price:4.43},{id:"f34a5edb-229f-4460-ad4c-e4ab167deb84",name:"Beef or Vegetable Patty",description:"",price:2},{id:"5a8f3db7-f66b-4017-80ca-bfde154899e5",name:"Chicken Patty",description:"",price:2.25},{id:"bfbac631-6530-47a1-8169-034430201165",name:"Spring Roll",description:"",price:3}]}];function P(){var e=Object(p.a)(["\n  margin: 0 auto;\n  display: block;\n  unicode-bidi: isolate;\n  margin-block-start: 0.5em;\n  margin-block-end: 0.5em;\n  margin-inline-start: auto;\n  margin-inline-end: auto;\n  overflow: hidden;\n  border-style: inset;\n  border-width: 1px;\n  max-width: 260px;\n  padding: 0;\n  border: none;\n  /* border-top: medium double #888; */\n  border-top: medium double ",";\n  color: #888;\n  text-align: center;\n  overflow: visible;\n  z-index: 0;\n  position: relative;\n  &:after {\n    content: '\xa7';\n    display: inline-block;\n    position: absolute;\n    color: ",";\n    top: -2.2rem;\n    left: 50%;\n    transform: translateX(-50%) rotate(25deg);\n    font-size: 2rem;\n    padding: 0 0.2rem;\n    background: #fff;\n    text-align: center;\n\n    z-index: 1;\n  }\n"]);return P=function(){return e},e}var U=b.c.hr(P(),function(e){return e.theme.darkRed},function(e){return e.theme.darkRed});t(369);function W(){var e=Object(p.a)(["\n  margin: 1rem auto;\n"]);return W=function(){return e},e}var _=b.c.div(W()),L=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("menuHeader")[0].clientHeight-120;this.props.fixed&&x()(".wrapper").animate({scrollTop:e},0)}},{key:"shouldComponentUpdate",value:function(e,n){return!1}},{key:"render",value:function(){var e=this.props.data;return console.log("menucontent"),i.a.createElement(_,{className:"menuContentBox"},i.a.createElement("h1",null,e.title.toUpperCase()),i.a.createElement(U,null),i.a.createElement("div",{className:"itemsBox"},i.a.createElement("div",{className:"itemBoxGrid"},e.data.map(function(e){return i.a.createElement("div",{className:"itemBox",key:e.id},i.a.createElement("div",{className:"imageBox"},i.a.createElement("img",{src:e.image,alt:e.name,title:e.name})),i.a.createElement("div",{className:"contentBox"},i.a.createElement("div",{className:"name"},e.name),i.a.createElement("div",{className:"description"},e.description),i.a.createElement("div",{className:"price"},"$",e.price)))}))))}}]),n}(a.Component);function K(){var e=Object(p.a)(["\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),\n    url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  /* object-fit: cover; */\n  /* background-attachment: fixed; */\n  width: 100%;\n  position: relative;\n  height: 400px;\n  @media (min-height: 1200px) {\n    height: 600px;\n    background-size: 100% 600px;\n  }\n  @media (max-width: 767px) and (orientation: portrait) {\n    height: 260px;\n  }\n"]);return K=function(){return e},e}var q=b.c.header(K(),function(e){return e.backgroundUrl});function G(){var e=Object(p.a)(["\n  width: 100%;\n  /* background-image: ","; */\n  ","\n  ","\n  padding: ",";\n\n"]);return G=function(){return e},e}var V=b.c.div(G(),function(e){return e.backgroundUrl?"url('".concat(e.backgroundUrl,"') repeat"):"none"},function(e){return e.backgroundUrl&&"background-image: url('".concat(e.backgroundUrl,"');")},function(e){return e.backgroundRepeat&&"background-repeat: ".concat(e.backgroundRepeat,";")},function(e){return e.padding?"".concat(e.padding):"0"});function $(){var e=Object(p.a)(["\n  background: ",";\n  width: 100%;\n  margin: 0 auto;\n  /* padding: ","; */\n  padding: 8px;\n  @media (min-width: 576px) {\n    max-width: 540px;\n    padding: 16px;\n  }\n\n  @media (min-width: 768px) {\n    max-width: 720px;\n    padding: 24px;\n  }\n\n  @media (min-width: 992px) {\n    max-width: 960px;\n    padding: 32px;\n  }\n\n  @media (min-width: 1200px) {\n    max-width: 1140px;\n  }\n"]);return $=function(){return e},e}var J=b.c.div($(),function(e){return e.backgroundColor?e.backgroundColor:"none"},function(e){return e.padding?"".concat(e.padding):"0"});function I(){var e=Object(p.a)(["\n  z-index: 1;\n  left: 0;\n  bottom: 0;\n  /* width: ","px; */\n  width: 100%;\n  /* position: ","; */\n  /* "," */\n  height: 54px;\n  /* background: ","; */\n  /* background: ","; */\n  transition: all 300ms;\n  display: flex;\n  align-items: center;\n  * {\n    overflow: hidden;\n  }\n  .slider-wrapper {\n    z-index: 2;\n    display: flex;\n    justify-content: center;\n    height: 48px;\n      .slider-inner {\n        z-index: 4;\n        background: ",";\n        position: relative;\n        overflow-x: scroll;\n        height: 70px;\n        width: 640px;\n        ul.slider {\n          z-index: 5;\n          display: flex;\n          flex-direction: row;\n          align-items: center;\n          justify-content: 'flex-start';\n          flex-wrap: nowrap;\n          left: ",";\n          transform: ",";\n          position: absolute;\n          height: 70px;\n          /* top: -11px; */\n          top: -11px;\n          li {\n            margin-left: 6px;\n            border-radius: 20px;\n            height: 40px;\n            padding: 2px 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            &:last-child {\n              margin-right: 6px;\n            }\n            a {\n              width: 100%;\n              height: 100%;\n              font-family: 'Leckerli One', cursive;\n              /* font-family: 'Amatic SC', cursive; */\n              font-size: 16px;\n              /* font-weight: bold; */\n              /* padding: 6px 8px; */\n              padding: 0 10px;\n              height: 40px;\n              display: flex;\n              align-items: center;\n              border-radius: inherit;\n              transition: all 300ms ease-in-out;\n              white-space: nowrap;\n              color: ",";\n              &.menu-nav-active {\n                /* background: ","; */\n                background: ",";\n                color: ",";\n              } \n            }\n          }\n        \n      }\n    }\n  }\n"]);return I=function(){return e},e}var X=b.c.nav(I(),function(e){return e.width},function(e){return e.fixed?"fixed":"absolute"},function(e){return e.fixed&&"top: ".concat(e.mainNavHeight,"px;")},function(e){return e.theme.lightOrange},function(e){return e.fixed?e.theme.lightOrange:"none"},function(e){return e.theme.lightGrey},function(e){return e.shouldBeCentered?"50%":0},function(e){return e.shouldBeCentered?"translateX(-50%)":9},function(e){return e.theme.darkRed},function(e){return e.theme.lightRed},function(e){return e.theme.darkRed},function(e){return e.theme.offWhite}),Y=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(l.a)(this,Object(u.a)(n).call(this,e))).handleMenuNav=function(){var e=t.props.width;t.setState({fixed:!1,width:e});var n=t.menuNav.current.offsetTop;t.props.menuNavbar(n)},t.state={fixed:!1,width:0},t.menuNav=i.a.createRef(),t.handleMenuNav=t.handleMenuNav.bind(Object(s.a)(Object(s.a)(t))),t}return Object(m.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){this.handleMenuNav()}},{key:"render",value:function(){var e=this.state,n=e.fixed,t=e.width,a=this.props.mainNavHeight,r={width:"".concat(t,"px"),position:"absolute",background:"none"},o={width:"".concat(t,"px"),position:"fixed",top:a},c=!(t<513);return console.log("menu"),i.a.createElement(i.a.Fragment,null,i.a.createElement(q,{backgroundUrl:"/images/menu/menu-header-bg2.jpg",className:"menuHeader"},i.a.createElement(X,{ref:this.menuNav,style:n?o:r,backgroundFixed:n,width:t,mainNavHeight:a,shouldBeCentered:c,className:"menuNav"},i.a.createElement(O,{className:"slider-wrapper"},i.a.createElement("div",{className:"slider-inner"},i.a.createElement("ul",{className:"slider"},D.map(function(e,n){return i.a.createElement("li",{key:n},i.a.createElement(E.a,{to:e.url,activeClassName:"menu-nav-active",key:e.id},e.name))})))))),i.a.createElement(V,{backgroundUrl:"/images/menu-outer-bg.gif",backgroundRepeat:"repeat",padding:"1rem 0 1rem 0"},i.a.createElement(J,{backgroundColor:"#fff",padding:"2rem"},i.a.createElement(h.a,{render:function(e){var t=e.location;return i.a.createElement(g.a,{location:t},A.map(function(e,a){return i.a.createElement(h.a,{key:t.key,exact:!0,path:e.path,render:function(){return i.a.createElement(L,{key:e.id,data:e,fixed:n})}})}))}}))),i.a.createElement("div",{style:{minHeight:"100vh"},className:"konto"}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){return e.fixed!==n.fixed?{fixed:e.fixed}:e.width!==n.width&&{width:e.width}}}]),n}(a.Component),Q=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(q,{background:"/images/menu/menu-header-bg2.jpg"},i.a.createElement("h1",null,"Catering Page")),i.a.createElement("div",{style:{minHeight:"200vh"},className:"konto"}))}}]),n}(a.Component),Z=function(e){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(q,{backgroundUrl:"/images/contact-header.jpg"},i.a.createElement("p",null,"contact page!!!")))}}]),n}(a.Component);function ee(){var e=Object(p.a)(["\n  z-index: 3;\n  position: fixed;\n  right: -10%;\n  bottom: -10%;\n  transition: all 500ms;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(35, 45, 62, 0.7);\n  color: #fff;\n\n  cursor: pointer;\n  transition: all 300ms ease;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  &:hover {\n    background: rgba(35, 45, 62, 1);\n    color: rgba(255, 255, 255, 1);\n  }\n  &:active {\n    transform: scale(0.8);\n  }\n  .fa-chevron-up {\n    color: #fff;\n  }\n\n  /* z-index: 3;\n  opacity: 0.3;\n  background-color: #cf3472;\n  width: 40px;\n  height: 40px;\n  position: fixed;\n  bottom: -10%;\n  right: -10%;\n  border-radius: 5px;\n  border: none;\n  outline: none !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  transition: all 300ms ease-in-out;\n  &:active {\n    transform: scale(0.9);\n  }\n  &:hover {\n    opacity: 1;\n  }\n  .fa-chevron-up {\n    color: #fff;\n  } */\n\n  ","\n"]);return ee=function(){return e},e}var ne=b.c.a(ee(),function(e){return e.active&&"right: 2%; bottom: 2%"}),te=function(e){return i.a.createElement(ne,{active:e.active,onClick:e.totoTop},i.a.createElement("i",{className:"fas fa-chevron-up"}))};function ae(){var e=Object(p.a)(["\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),\n    url(",");\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center center;\n  width: 100%;\n  position: relative;\n  height: 400px;\n  @media (min-height: 1200px) {\n    height: 600px;\n    background-size: 100% 600px;\n  }\n  @media (max-width: 767px) and (orientation: portrait) {\n    height: 260px;\n  }\n"]);return ae=function(){return e},e}var ie=b.c.footer(ae(),function(e){return e.backgroundUrl}),re=function(){return i.a.createElement(ie,null,"footer")};function oe(){var e=Object(p.a)(["\n  z-index: 1000;\n  /* position: fixed; */\n  width: 100%;\n  height: 100%;\n  overflow-x: hidden;\n  overflow-y: scroll;\n"]);return oe=function(){return e},e}var ce=b.c.div(oe()),de=function(e){function n(){var e;return Object(c.a)(this,n),(e=Object(l.a)(this,Object(u.a)(n).call(this))).handleResize=function(){e.setWidthAndHeight()},e.setWidthAndHeight=function(){var n=e.wrapper.current.clientWidth,t=e.wrapper.current.querySelector(".mainNav").clientHeight;e.setState({clientWidth:n,mainNavHeight:t}),x()(".wrapper").animate({scrollTop:e.wrapper.current.scrollTop-1})},e.resetMenu=function(n){e.setState({menuNavFixed:n})},e.handleScroll=function(){if(e.wrapper.current.querySelector(".menuNav")){var n=e.wrapper.current.querySelector(".menuHeader"),t=e.wrapper.current.querySelector(".menuNav"),a=n.clientHeight-t.clientHeight;e.setState({menuNavOffsetTop:a})}var i=e.wrapper.current.scrollTop,r=e.state,o=r.menuNavOffsetTop,c=r.mainNavHeight;i>0?(e.setState({fixed:!0}),i>400?e.setState({toTop:!0}):e.setState({toTop:!1})):e.setState({fixed:!1}),e.wrapper.current.querySelector(".menuNav")&&(i>=o-c?e.setState({menuNavFixed:!0}):e.setState({menuNavFixed:!1}))},e.menuNavbar=function(n){e.setState({menuNavOffsetTop:n})},e.scrollToTop=function(){x()(".wrapper").animate({scrollTop:0},300)},e.state={toTop:!1,fixed:!1,clientWidth:0,menuNavFixed:!1,mainNavHeight:0,menuNavOffsetTop:0},e.wrapper=i.a.createRef(),e.handleScroll=e.handleScroll.bind(Object(s.a)(Object(s.a)(e))),e.menuNavbar=e.menuNavbar.bind(Object(s.a)(Object(s.a)(e))),e}return Object(m.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),this.setWidthAndHeight()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this,n=this.state,t=n.clientWidth,a=n.fixed,r=n.menuNavFixed,o=n.mainNavHeight,c=n.toTop;return i.a.createElement(b.a,{theme:y},i.a.createElement(i.a.Fragment,null,i.a.createElement(ce,{className:"wrapper",ref:this.wrapper,onScroll:this.handleScroll},i.a.createElement(k,null),i.a.createElement(f.a,null,i.a.createElement(h.a,{render:function(n){var c=n.location;return i.a.createElement(i.a.Fragment,null,i.a.createElement(B,{fixed:a,width:t,location:c,resetMenu:e.resetMenu}),i.a.createElement(g.a,null,i.a.createElement(h.a,{exact:!0,path:"/",render:function(){return i.a.createElement(R,null)}}),i.a.createElement(h.a,{path:"/menu",render:function(){return i.a.createElement(Y,{fixed:r,width:t,menuNavbar:e.menuNavbar,mainNavHeight:o,resetMenu:e.resetMenu})}}),i.a.createElement(h.a,{path:"/catering",render:function(){return i.a.createElement(Q,{width:t,mainNavHeight:o,resetMenu:e.resetMenu})}}),i.a.createElement(h.a,{exact:!0,path:"/contact",render:function(){return i.a.createElement(Z,null)}})))}})),i.a.createElement(re,null),i.a.createElement(te,{active:c,totoTop:this.scrollToTop}))))}}]),n}(a.Component);o.a.render(i.a.createElement(de,null),document.getElementById("root"))}},[[156,2,1]]]);
//# sourceMappingURL=main.c030b64f.chunk.js.map