(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,a,t){e.exports=t(535)},409:function(e,a,t){},418:function(e,a,t){},427:function(e,a,t){},436:function(e,a,t){},445:function(e,a,t){},454:function(e,a,t){},463:function(e,a,t){},472:function(e,a,t){},481:function(e,a,t){},490:function(e,a,t){},499:function(e,a,t){},508:function(e,a,t){},517:function(e,a,t){},526:function(e,a,t){},535:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(54),r=t.n(c),o=(t(175),t(11)),l=t(12),s=t(14),d=t(13),m=t(15),u=t(16),p=t(538),f=t(536),h=t(539),g=t(24),b=t.n(g),v=t(537),E=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(s.a)(this,Object(d.a)(a).call(this))).handleActive=function(){e.setState({active:!e.state.active})},e.handleToTop=function(){b()(".wrapper").animate({scrollTop:0},150)},e.handleClick=function(a,t,n){if(t===n)a.preventDefault();else if(e.props.resetMenu(!1),t.includes("menu")&&n.includes("menu")){var i=document.getElementsByClassName("menuHeader")[0].clientHeight-119;e.props.menuNavFixed&&b()(".wrapper").animate({scrollTop:i},0)}else e.handleToTop()},e.handleMobileClick=function(){e.setState({isOpen:!e.state.isOpen})},e.handleMobileLogoClick=function(a,t,n){if(e.state.isOpen&&e.handleMobileClick(),"/"===t)a.preventDefault();else if(e.props.resetMenu(!1),t.includes("menu")&&n.includes("menu")){var i=document.getElementsByClassName("menuHeader")[0].clientHeight-119;e.props.menuNavFixed&&b()(".wrapper").animate({scrollTop:i},0)}else e.handleToTop()},e.handleMobileLinkClick=function(a,t,n){if(e.handleMobileClick(),t===n)a.preventDefault();else if(e.props.resetMenu(!1),t.includes("menu")&&n.includes("menu")){var i=document.getElementsByClassName("menuHeader")[0].clientHeight-119;e.props.menuNavFixed&&b()(".wrapper").animate({scrollTop:i},0)}else e.handleToTop()},e.mobileNavbar=function(a,t,n,c,r){var o={width:"".concat(a,"px"),background:r?"#ffa500":"none"};return i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{style:o,className:"mainNav mobileNav "+(n?"fixed ":"")},i.a.createElement("div",{className:"seoulContainer"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(v.a,{to:"/",exact:!0,onClick:function(a){e.handleMobileLogoClick(a,t.pathname,"/")}},i.a.createElement("div",null,i.a.createElement("img",{src:"/images/logo-white-h60.png",alt:""}),i.a.createElement("img",{src:"/images/horizontal-white-h38.png",alt:""}))))),i.a.createElement("div",{className:"mobile-nav-button "+(r?"change ":""),onClick:e.handleMobileClick},i.a.createElement("div",{className:"bar1"}),i.a.createElement("div",{className:"bar2"}),i.a.createElement("div",{className:"bar3"})))),i.a.createElement("div",{className:"pop-up "+(r?"show ":""),style:{top:c}},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(v.a,{to:"/",exact:!0,activeClassName:"active",onClick:function(a){e.handleMobileLinkClick(a,t.pathname,"/")}},"Home")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/menu",activeClassName:"active",onClick:function(a){e.handleMobileLinkClick(a,t.pathname,"/menu")}},"Menu")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/contact",activeClassName:"active",onClick:function(a){e.handleMobileLinkClick(a,t.pathname,"/contact")}},"Contact")))))},e.navbar=function(a,t,n){return i.a.createElement("nav",{style:{width:"".concat(a,"px")},className:"mainNav "+(n?"fixed":"")},i.a.createElement("div",{className:"seoulContainer"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(v.a,{to:"/",exact:!0,onClick:function(a){e.handleClick(a,t.pathname,"/")}},i.a.createElement("div",null,i.a.createElement("img",{src:"/images/logo-white-h60.png",alt:""}),i.a.createElement("img",{src:"/images/horizontal-white-h38.png",alt:""})))),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/",exact:!0,activeClassName:"active",onClick:function(a){e.handleClick(a,t.pathname,"/")}},"Home")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/menu",activeClassName:"active",onClick:function(a){e.handleClick(a,t.pathname,"/menu")}},"Menu")),i.a.createElement("li",null,i.a.createElement(v.a,{to:"/contact",activeClassName:"active",onClick:function(a){e.handleClick(a,t.pathname,"/contact")}},"Contact")))))},e.state={fixed:!1,isOpen:!1},e.handleMobileClick=e.handleMobileClick.bind(Object(u.a)(Object(u.a)(e))),e}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=e.width,t=e.location,n=e.mainNavHeight,i=this.state,c=i.fixed,r=i.isOpen;return a<767?this.mobileNavbar(a,t,c,n,r):this.navbar(a,t,c)}}],[{key:"getDerivedStateFromProps",value:function(e,a){return e.fixed!==a.fixed&&{fixed:e.fixed}}}]),a}(n.Component),y=t(379),k=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("loaded")[0],a=document.getElementsByClassName("loadedButton")[0];setTimeout(function(){e.classList.add("animate")},400),setTimeout(function(){a.classList.add("animate")},1800)}},{key:"render",value:function(){return i.a.createElement("header",{className:"landingHeader"},i.a.createElement("div",{className:"loaded"},i.a.createElement("h1",null,"Seoul Food Take-Out"),i.a.createElement("h4",null,"The Most Authentic Korean Food in Toronto"),i.a.createElement(y.a,{to:"/menu",className:"loadedButton"},"MENU")))}}]),a}(n.Component),N=t(168),w=function(e){var a={background:"url('".concat(e.item.image,"') center center / cover no-repeat")};return console.log("right"),i.a.createElement("div",{className:"right-item"},i.a.createElement("div",{style:a,className:"right-item-inner",onClick:function(){e.currentItem(e.item,e.index)}},i.a.createElement("div",{className:"content"},"*Everyday"===e.item.day?i.a.createElement("h5",{className:"everyday"},e.item.day):i.a.createElement("h5",null,e.item.day))))},T=[{id:"d6cd108c-b69d-493d-b76c-bd311aa9e981",id2:"d7b98faf-9dbd-471c-a6fd-92a318a702be",name:"Chicken Curry",description:"(chicken slices, vegetable chunks with curry sauce & rice)",day:"Monday",image:"/images/menu/hot-food/chicken_curry.jpg",regularPrice:"$8.85",price:5.99},{id:"737b7f91-81ed-4a04-bf63-51fc75f3d154",id2:"981c9fe9-4cf6-4f2d-bf2d-bf1e2fbdfb8a",name:"Mega Donkatsu",description:"(pork cutlet with dontkatsu sauce, vegetables & rice)",image:"/images/menu/hot-food/pork_donkatsu.jpg",day:"Tuesday",regularPrice:"$9.95",price:6.99},{id:"2827fca0-f53b-4917-b6a0-d5fc1cdb8e0f",id2:"c903d320-e0c4-465b-b117-613624f47ad0",name:"Bulgogi Bowl",description:"(shredded beef marinated in speical sauce & rice)",day:"Wednesday",image:"/images/menu/hot-food/bulgogi2.jpg",regularPrice:"$8.85",price:6.99},{id:"6e3abb5a-4890-408a-8f26-794681b33bcd",id2:"dfce9d87-cc9f-40b8-902c-235e28162687",name:"Spicy Pork",nameDescription:"wrap / dinner",description:"(shredded bacon and pork belly marinated in spicy sauce & rice)",day:"Thursday",image:"/images/menu/hot-food/spicy_pork2.jpg",regularPrice:"$7.85",price:6.29},{id:"209e6024-d932-4698-82a8-c5520dfab9cf",id2:"695a8db9-16f4-4c90-97a5-afa6c2c89d9d",name:"Bibimbap Bowl",description:"(rice with saut\xe9ed seasoned vegetables and spicy red pepper paste)",description2:"Add Extra Protein for $2.00",day:"Friday",image:"/images/menu/hot-food/bibimbap.jpg",regularPrice:"$7.99",price:6.99},{id:"79658249-4cf8-46a0-b04f-7ab8a8c85147",id2:"f89f43b4-6fc0-4a29-8417-36f0646d6d1b",name:"Chicken Leg",description:"(chicken leg & rice)",day:"*Everyday",image:"/images/menu/hot-food/chicken_leg.jpg",regularPrice:"$8.35",price:6.99}],S=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).setCurrentItem=function(e,a){t.setState({curItem:e}),t.leftItemRef.current&&t.leftItemRef.current.classList.add("animate"),setTimeout(function(){t.leftItemRef.current&&t.leftItemRef.current.classList.remove("animate")},1e3),t.rightItemRef.current&&(t.rightItemRef.current.querySelector(".active").classList.remove("active"),t.rightItemRef.current.children[0].children[a].classList.add("active"))},t.state={curItem:T[0]},t.leftItemRef=i.a.createRef(),t.rightItemRef=i.a.createRef(),t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.rightItemRef.current.children[0].children[0].classList.add("active")}},{key:"shouldComponentUpdate",value:function(e,a){return this.state.curItem!==a.curItem}},{key:"render",value:function(){var e=this,a=this.state.curItem,t={background:"url('".concat(a.image,"') center center / cover no-repeat")};return i.a.createElement("div",{className:"daily-specials"},i.a.createElement("h1",{className:"h1-heading-center mtb-10"},"Daily Special"),i.a.createElement("div",{style:{background:'url("/images/rose-hr-260.jpg")',backgroundSize:"cover",width:"200px",height:"24px",margin:"0 auto"}}),i.a.createElement("div",{className:"seoulContainer"},i.a.createElement("div",{className:"right",ref:this.rightItemRef},i.a.createElement("div",{className:"right-inner"},T.map(function(a,t){return i.a.createElement(w,{key:a.id,currentItem:e.setCurrentItem,item:a,index:t},a.day)}))),this.state&&a&&i.a.createElement("div",{style:Object(N.a)({},t),className:"left",ref:this.leftItemRef,onTransitionEnd:function(e){console.log("ended")},key:a.id2},i.a.createElement("div",{className:"content"},i.a.createElement("p",{className:"left-day"},a.day),i.a.createElement("p",{className:"left-name"},a.name),i.a.createElement("p",{className:"left-desc"},a.description)))))}}]),a}(n.Component),C=function(e){var a=e.property,t=a.index,n=a.name,c=a.feedback,r=a.date;return i.a.createElement("div",{id:"t-card-".concat(t),className:"t-card"},i.a.createElement("div",{className:"feedback"},i.a.createElement("p",null,i.a.createElement("i",{className:"fas fa-quote-left"})," ",c," ",i.a.createElement("i",{className:"fas fa-quote-right"}))),i.a.createElement("h5",null,n),i.a.createElement("p",null,r))},j={properties:[{id:"ad46e0a3-b756-4b79-bc0e-ad57b1454f1c",index:0,name:"Jenny Wang",feedback:"This is the best bang for your buck when it comes to korean food takeout. For the price you get way more than expected. Food is good too, You can't go wrong when choosing to eat here.",date:"11/5/2018"},{id:"9e9dd4cc-aa89-44f9-bdcb-f84168980bb3",index:1,name:"Sam C.",feedback:"Very good mom and pop shop for korean food. This isn't a food stand, more of a takeout only with nowhere to sit to eat. You just stand outside and place your order and it is ready within minutes. I'm sure many have mentioned this but they are super generous with proportions. If you are on a budget, you can buy 1 meal and split with a friend.",date:"9/11/2018"},{id:"c82c70e6-6166-4848-be57-fbcc2d686608",index:2,name:"Kelly Lee",feedback:"I was referred here by my friend, and I was skeptical at first, since it is just literally a small kitchen that you order out of. After trying their chicken leg meal, I was pleasantly surprised. The food was delicious! and the amount they give, I couldn't finish the meal in one sitting! For the price it can't be beat!",date:"6/18/2018"},{id:"dbe57c5b-e0e3-4ad5-943d-c259003da7b3",index:3,name:"Brandon K.",feedback:"I tried the steak sandwich from this place for the first time, and I was in love. Very good flavor, price is amazing, and the owner is such a friendly woman. I would recommend this place to everyone.",date:"6/7/2018"},{id:"5c10d3d3-3f54-4c84-a41c-5cfc191f70e8",index:4,name:"Sandra G.",feedback:"After discovering this place by chance walking to work, it has become my regular go to place for lunch. Cheap, fresh, delicious, and the owner is so friendly.",date:"4/16/2018"},{id:"8f02b172-643d-4fa6-a05e-315f8440542e",index:5,name:"Felicita Zulauf",feedback:"Had the spicy pork dish with my friend, yes it is enough for 2 people. Delicous spicy pork and the price was just too good.",date:"4/9/2018"},{id:"6cc351d8-f234-4da5-8fec-9074f05bf03a",index:6,name:"Kevin R.",feedback:"Bulgogi! that is all you need to know, bulgogi! That is my favorite Korean dish, and I can't get enough. While this wasn't the best bulgogi I had, it was definitely the cheapest and was above average in taste. For the money, you won't find a better deal for bulgogi.",date:"2/22//2018"},{id:"fc8b5570-801e-41b2-9d89-5ac4fcd1e228",index:7,name:"Philip Tran",feedback:"The owner is nice, the food is good, and the portions are very generous. Easily can split the meal into 2 meals. Great go to place when you are sick of eating in.",date:"11/5/2018"}]},O=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).timeout=0,t.slideTime=15e3,t.startAutoSlides=function(){t.timeout=setInterval(t.changeActiveSlide,t.slideTime)},t.pauseAutoSlides=function(){clearInterval(t.timeout)},t.handleMouseEnter=function(){t.pauseAutoSlides()},t.handleMouseLeave=function(){t.startAutoSlides()},t.changeActiveSlide=function(){var e=t.state.property.index+1;e<=j.properties.length-1?t.setState({property:j.properties[e]}):t.setState({property:j.properties[0]})},t.prevButton=function(){var e=t.state.property.index-1;t.setState({property:j.properties[e]})},t.nextButton=function(){var e=t.state.property.index+1;t.setState({property:j.properties[e]})},t.handleTouchStart=function(e){t.pauseAutoSlides()},t.handleTouchEnd=function(e){t.startAutoSlides()},t.state={properties:j.properties,property:j.properties[0]},t.changeActiveSlide=t.changeActiveSlide.bind(Object(u.a)(Object(u.a)(t))),t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.startAutoSlides()}},{key:"componentWillUnmount",value:function(){this.pauseAutoSlides()}},{key:"render",value:function(){var e=this.state,a=e.properties,t=e.property;return i.a.createElement("div",{className:"testimonials"},i.a.createElement("div",{className:"seoulContainer",onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},i.a.createElement("h1",null,"Testimonials"),i.a.createElement("hr",{className:"prettyHr"}),i.a.createElement("div",{className:"m-cards-slider"},i.a.createElement("div",{className:"m-cards-slider-wrapper",ref:this.testimonials,style:{transform:"translateX(-".concat(t.index*(100/a.length),"%)")}},a.map(function(e){return i.a.createElement(C,{key:e.id,property:e})}))),i.a.createElement("div",{className:"button-box"},i.a.createElement("button",{onClick:this.prevButton,disabled:0===t.index},"Prev"),i.a.createElement("button",{onClick:this.nextButton,disabled:t.index===j.properties.length-1},"Next"))))}}]),a}(n.Component),M=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.resetTop(!1)}},{key:"shouldComponentUpdate",value:function(e,a){return!1}},{key:"render",value:function(){return console.log("home"),i.a.createElement(i.a.Fragment,null,i.a.createElement(k,null),i.a.createElement(S,null),i.a.createElement(O,null))}}]),a}(n.Component),x=t(163),B=t(164),F=t(111),I=[{id:"f68336c7-6606-4672-827a-5ffdc786ea97",name:"Daily Special",url:"/menu"},{id:"aec04adb-a9cf-42b2-b562-2424bccd8046",name:"Hot Food",url:"/menu/hot-food"},{id:"961847d0-7699-43b2-9ba7-820fb66d2ee0",name:"Wraps & Sandwiches",url:"/menu/wraps-and-sandwiches"},{id:"ab160288-afa1-46fe-a139-041e6b7c9e24",name:"Street Food",url:"/menu/street-food"},{id:"cde27486-e719-402c-99d5-663c1654ca0e",name:"Salad",url:"/menu/salad"},{id:"29978d5c-9198-44c7-a23e-4a7051c0f7af",name:"Soup",url:"/menu/soup"},{id:"f5e7ede6-103b-4e9a-a015-cfd69dc20a0b",name:"Beverage",url:"/menu/beverage"}],A=[{id:"a2622dfc-5899-4640-80cb-7409854262e5",path:"/menu",title:"Daily Special",data:[{id:"d6cd108c-b69d-493d-b76c-bd311aa9e981",name:"Chicken Curry",description:"(chicken slices, vegetable chunks with curry sauce & rice)",day:"Monday",image:"/images/menu/hot-food/chicken_curry.jpg",regularPrice:"$8.85",price:5.99},{id:"0314592a-d95f-476b-a958-aa2693938a3d",name:"Mega Donkatsu",description:"(pork cutlet with dontkatsu sauce, vegetables & rice)",image:"/images/menu/hot-food/pork_donkatsu.jpg",day:"Tuesday",regularPrice:"$9.95",price:6.99},{id:"1a07c361-32e6-4cfd-8f22-3141524c1cd3",name:"Bulgogi Bowl",description:"(shredded beef marinated in speical sauce & rice)",day:"Wednesday",image:"/images/menu/hot-food/bulgogi2.jpg",regularPrice:"$8.85",price:6.99},{id:"77e061a4-aa88-4e03-9b94-90acc89941d0",name:"Spicy Pork",nameDescription:"wrap / dinner",description:"(shredded bacon and pork belly marinated in spicy sauce & rice)",day:"Thursday",image:"/images/menu/hot-food/spicy_pork2.jpg",regularPrice:"$7.85",price:6.29},{id:"fdd6809c-de4b-4542-a2ab-c705f1717c86",name:"Bibimbap Bowl",description:"(rice with saut\xe9ed seasoned vegetables and spicy red pepper paste)",description2:"Add Extra Protein for $2.00",day:"Friday",image:"/images/menu/hot-food/bibimbap.jpg",regularPrice:"$7.99",price:6.99},{id:"511e67b0-c79d-40d9-b1b6-c66a110e83cc",name:"Chicken Leg",description:"(chicken leg & rice)",day:"*Everyday",image:"/images/menu/hot-food/chicken_leg.jpg",regularPrice:"$8.35",price:6.99}]},{id:"96b0212a-2aa1-4827-b7d9-c5b3fd0d0554",path:"/menu/beverage",title:"Beverage",data:[{id:"14be753e-a50e-4e2d-bd3e-88299aab3a23",name:"Apple Cider",nameDescription:"(one size)",image:"",price:2.25},{id:"efe33bf7-5284-4363-8815-6e26712d43a4",name:"Pop, Bottled Water",image:"/images/menu/beverage/pop_water.jpg",price:"1.25 or up"}]},{id:"1e6c1ffa-17ef-4b9d-9ad5-2788697c0d9f",path:"/menu/hot-food",title:"Hot Food",data:[{id:"d6cd108c-b69d-493d-b76c-bd311aa9e981",name:"Bulgogi Bowl",description:"(shredded beef marinated in speical sauce)",image:"/images/menu/hot-food/bulgogi.jpg",price:8.85},{id:"92c522a8-333d-4a24-9a49-adb3e12f4828",name:"Spicy Pork",description:"(shredded bacon and pork belly marinated in spicy sauce)",image:"/images/menu/hot-food/spicy_pork.jpg",price:7.85},{id:"426551b3-d3fc-42ab-92a9-74abc82e1e34",name:"Chicken Bowl",description:"(Korean style spicy chicken)",image:"",price:8.85},{id:"8658ae43-a45c-4741-b4c3-7cfcf3dab525",name:"Chicken Stir Fry",description:"(stir fry chicken, mix vegetables & rice)",day:"Friday only",image:"/images/menu/hot-food/bento_chicken.jpg",price:8.85},{id:"36be65b4-71b2-4bec-aada-6d85c62a95c4",name:"Chicken Curry",description:"",day:"Monday only",image:"/images/menu/hot-food/chicken_curry.jpg",price:7.85},{id:"31694f68-ef3b-4a4f-b43c-36008edfbdda",name:"Mega Donkatsu",description:"(pork cutlet)",image:"/images/menu/hot-food/pork_donkatsu.jpg",price:8.85},{id:"01a86aeb-ee0a-45e7-b40c-f818c8529f20",name:"Mega Chicken Katsu",description:"(chicken cutlet)",image:"",price:9.95},{id:"7ce2c5ee-b346-4d0c-9e62-67bb36fa6988",name:"Fish Katsu",description:"(breaded basa fillet)",day:"Thursday only",image:"",price:7.85},{id:"11c326a5-b057-4f4c-a788-08853b6dbc9c",name:"Yum Yum Fried Chicken",description:"(w/ spicy sauce)",day:"Wednesday only",image:"/images/menu/hot-food/yumyum_fried_chicken.jpg",price:8.85},{id:"85469afd-8dc3-4a6e-910b-2b925751cee1",name:"Bibimbap",description:"(rice with saut\xe9ed seasoned vegetables and spicy red pepper paste)",description2:"Add Extra Protein for $2.00",image:"/images/menu/hot-food/bibimbap.jpg",price:6.99},{id:"43a77627-0630-4fe9-9e2d-8b8348cdeccd",name:"Chicken Leg",description:"(w/ garlic oil sauce)",image:"/images/menu/hot-food/chicken_leg.jpg",price:8.35},{id:"15937a0d-fbb6-47ee-8a06-c37362505957",name:"Chicken Strips",description:"(w/ garlic oil sauce)",image:"",price:8.35},{id:"0ab078b2-fe12-411c-8e21-f57f8d54c8f8",name:"Bento Box",nameDescription:"Beef",description:"",image:"",price:6.99},{id:"8c856f73-838b-47f0-87ba-c7fb43e4f362",name:"Bento Box",nameDescription:"Spicy Pork",description:"",image:"",price:6.99},{id:"4e7fe8cc-ee32-423f-a567-b09e00658dfa",name:"Bento Box",nameDescription:"Spicy Chicken",description:"",image:"",price:6.99},{id:"baf27bc1-2d44-4b41-8e31-c71e67d6c985",name:"Bento Box",nameDescription:"Vegetable",description:"",image:"",price:6.65}]},{id:"18dcdd67-7e74-4c00-8ccf-4b040a0209ca",path:"/menu/wraps-and-sandwiches",title:"Wraps & Sandwiches",data:[{id:"86c133d4-81b9-46a4-be06-77d39130f1ab",name:"Steak Sandwich",description:"(w/ provolone cheese)",image:"/images/menu/sandwich/steak_sandwich.jpg",price:6.39},{id:"433e87b2-8cad-44b7-a528-4ebf4b1bad9f",name:"Veggie Delight",description:"(w/ avocado and cheese)",image:"",price:5.25},{id:"9e3f6848-5f81-4854-9ee9-125f1acb7395",name:"Kimchi Bulgogi",description:"(w/ cheese)",image:"",price:8.85},{id:"37b4e72a-f01c-4a99-ae32-61e50db3af23",name:"Kimchi Spicy Pork",description:"(w/ cheese)",image:"",price:7.85},{id:"c6058f49-1076-4567-bf15-4a84d0443969",name:"Beef Patty Sandwich",description:"(w/ lettuce, tomato)",image:"/images/menu/sandwich/beef_patty_sandwich.jpg",price:3.99},{id:"1c641838-5877-4985-9970-096995d00987",name:"Beef Patty",nameDescription:"w/ Coco bread",description:"",image:"",price:3.15}]},{id:"e5001983-718a-4a3f-94f3-8daced27c7c2",path:"/menu/salad",title:"Salad",data:[{id:"41673421-0819-4557-84c6-498f1cb83d67",name:"Garden salad",nameDescription:"w/ tofu",description:"",image:"/images/menu/salad/fruit_salad.jpg",price:5.99},{id:"4ce70e3b-c64c-498a-8daa-b36b705eacbd",name:"Pasta Salad",description:"",image:"/images/menu/salad/pasta_salad.jpg",price:4.99},{id:"d0cb48c7-c506-4ef4-8587-c5871778c7ed",name:"Fresh Roll",description:"w/ rice paper, cucumber, carrot, avocado",image:"/images/menu/salad/fresh_roll.jpg",price:4.43}]},{id:"a42018aa-2df2-49f4-9978-10c31c694092",path:"/menu/soup",title:"Soup",data:[{id:"e090cd12-9944-4d32-84a5-0367465415f9",name:"Red Thai Chicken Soup",description:"(w/ coconut milk)",image:"/images/menu/soup/red_thai_chicken_soup.jpg",price:4.43},{id:"ce1ae195-6cfb-4527-9a9c-004ecab07ea0",name:"Soondubu Soup",description:"(soft tofu w/ spicy sauce & vegetable base)",image:"/images/menu/soup/soondubu.jpg",price:4.43},{id:"89cfd766-b5ee-4cf5-a85a-3cd171bbc6e7",name:"U-don Soup",description:"",description2:"*Add extra protein for $2.00",image:"/images/menu/soup/udon.jpg",price:5.25},{id:"c37ca76c-8ae2-4737-909e-6d30d80fd3d6",name:"Wonton Soup",description:"",image:"/images/menu/soup/wonton_soup.jpg",price:4.43}]},{id:"d1b71ddf-736c-4df5-b13f-23fb0b6b0b39",path:"/menu/street-food",title:"Street Food",data:[{id:"fabcc756-3ce1-44d9-8fd7-2d98a4673d17",name:"Gimbap",description:"(Korean maki roll w/ optional spicy mayo)",image:"/images/menu/street-food/gimbap.jpg",price:4.43},{id:"88e70052-4ea8-43e8-989a-0a0cc86d4135",name:"Japchae",description:"(Korean glass noodle w/ vegetables)",image:"/images/menu/street-food/japchae.jpg",price:4.43},{id:"e532ed78-1386-4bfe-ade8-b4b0b1977b4e",name:"Steamed Kimchi Dumpling",description:"",image:"/images/menu/street-food/fried_veggie_dumpling2.jpg",price:4.43},{id:"20d40e14-0db7-44fa-9585-5916f6f80c3d",name:"Steamed Beef Dumpling",description:"",image:"/images/menu/street-food/steamed_beef_dumpling.jpg",price:4.43},{id:"5e6324ed-9a1e-4ec7-8b88-1c988c9a90cb",name:"Fried Veggie Dumpling",description:"",image:"/images/menu/street-food/fried_veggie_dumpling.jpg",price:4.43},{id:"f34a5edb-229f-4460-ad4c-e4ab167deb84",name:"Patty",nameDescription:"Beef or Vegetable",description:"",image:"/images/menu/street-food/beef_patty.jpg",price:2},{id:"5a8f3db7-f66b-4017-80ca-bfde154899e5",name:"Chicken Patty",description:"",image:"/images/menu/street-food/beef_patty.jpg",price:2.25},{id:"bfbac631-6530-47a1-8169-034430201165",name:"Spring Roll",description:"",image:"/images/menu/street-food/spring_roll.jpg",price:3}]}],P=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("menuHeader")[0].clientHeight-120;this.props.fixed&&b()(".wrapper").animate({scrollTop:e},0)}},{key:"shouldComponentUpdate",value:function(e,a){return!1}},{key:"render",value:function(){var e=this.props.data;return i.a.createElement("div",{className:"menuContentBox"},i.a.createElement("h1",{className:"title"},e.title),i.a.createElement("div",{style:{background:'url("/images/rose-hr-260.jpg")',backgroundSize:"cover",width:"260px",height:"31px",margin:"0 auto"}}),i.a.createElement("div",{className:"itemsBox"},i.a.createElement("div",{className:"itemBoxGrid"},e.data.map(function(e){return i.a.createElement("div",{className:"itemBox",key:e.id},i.a.createElement("div",{className:"imageBox"},i.a.createElement("img",{src:e.image,alt:e.name,title:e.name})),i.a.createElement("div",{className:"contentBox"},i.a.createElement("div",{className:"name"},e.name,e.nameDescription&&i.a.createElement("span",{className:"nameDescription"},e.nameDescription),e.day&&i.a.createElement("span",{className:"day"},e.day)),i.a.createElement("div",{className:"description"},e.description),i.a.createElement("div",{className:"price"},e.regularPrice&&i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:"striked"},e.regularPrice),i.a.createElement("span",null,"\xa0\xa0")),!e.regularPrice&&i.a.createElement("span",{className:"dollar-sign"},"$"),e.price)))}))))}}]),a}(n.Component);function D(){var e=Object(x.a)(["\n  position: relative;\n  .fadeMenu {\n  }\n  .fadeMenu-enter {\n    opacity: 0;\n  }\n\n  .fadeMenu-enter.fadeMenu-enter-active {\n    opacity: 1;\n    /* transition: opacity 400ms linear 200ms; */\n    transition: all 400ms;\n  }\n  .fadeMenu-exit {\n    top: 0;\n    left: 0;\n    position: absolute;\n    opacity: 0;\n  }\n  .fadeMenu-exit.fadeMenu-exit-active {\n    opacity: 0;\n    /* transition: opacity 200ms linear; */\n    transition: all 400ms;\n  }\n"]);return D=function(){return e},e}var H=B.a.div(D()),L=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).handleMenuNav=function(){var e="ontouchstart"in document.documentElement,a=t.state.width;t.setState({fixed:!1,width:a,isTouch:e});var n=t.menuNav.current.offsetTop;t.props.menuNavbar(n)},t.state={fixed:!1,width:0,isTouch:!1},t.menuNav=i.a.createRef(),t.handleMenuNav=t.handleMenuNav.bind(Object(u.a)(Object(u.a)(t))),t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.resetTop(!1),this.props.scrollTop(),this.handleMenuNav()}},{key:"render",value:function(){var e=this.props,a=e.fixed,t=e.width,n=e.mainNavHeight,c=this.state.isTouch,r={width:c?"100%":"".concat(t,"px")},o={width:c?"100%":"".concat(t,"px"),top:n},l=t<768;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"header menuHeader"},i.a.createElement("h2",null,"Authentic Home Style Korean Food Made To Go"),i.a.createElement("nav",{ref:this.menuNav,style:a?o:r,className:"menuNav "+(a?"fixed ":"")},i.a.createElement("div",{className:"seoulContainer slider-wrapper"},i.a.createElement("div",{className:"slider-inner"},i.a.createElement("ul",{className:"slider "+(l?"":"center ")},I.map(function(e,a){return i.a.createElement("li",{key:a},i.a.createElement(v.a,{exact:!0,to:e.url,activeClassName:"menu-nav-active",key:e.id},e.name))})))))),i.a.createElement("div",{className:"fullWidthContainer"},i.a.createElement("div",{className:"seoulContainer-m menu-container"},i.a.createElement(f.a,{render:function(e){var n=e.location;return i.a.createElement(H,null,i.a.createElement(F.TransitionGroup,null,i.a.createElement(F.CSSTransition,{classNames:"fadeMenu",key:n.key,timeout:{enter:400,exit:400}},i.a.createElement(h.a,{location:n},A.map(function(e,n){return i.a.createElement(f.a,{key:e.path,exact:!0,path:e.path,render:function(){return i.a.createElement(P,{key:e.id,data:e,fixed:a,isTouch:c,isMobile:t<1024})}})})))))}}))))}}]),a}(n.Component),_=function(){return i.a.createElement("div",{className:"store-hours"},i.a.createElement("h3",null,"Store Hours"),i.a.createElement("div",{className:"store-hours-items"},i.a.createElement("div",{className:"store-hours-item"},i.a.createElement("div",{className:"item item-1"},"Monday"),i.a.createElement("div",{className:"item item-2 green"},"8:00AM ~ 6:00PM")),i.a.createElement("div",{className:"store-hours-item"},i.a.createElement("div",{className:"item item-1"},"Tuesday"),i.a.createElement("div",{className:"item item-2 green"},"8:00AM ~ 6:00PM")),i.a.createElement("div",{className:"store-hours-item"},i.a.createElement("div",{className:"item item-1"},"Wednesday"),i.a.createElement("div",{className:"item item-2 green"},"8:00AM ~ 6:00PM")),i.a.createElement("div",{className:"store-hours-item"},i.a.createElement("div",{className:"item item-1"},"Thursday"),i.a.createElement("div",{className:"item item-2 green"},"8:00AM ~ 6:00PM")),i.a.createElement("div",{className:"store-hours-item"},i.a.createElement("div",{className:"item item-1"},"Friday"),i.a.createElement("div",{className:"item item-2 green"},"8:00AM ~ 6:00PM")),i.a.createElement("div",{className:"store-hours-item"},i.a.createElement("div",{className:"item item-1"},"Saturday - Sunday"),i.a.createElement("div",{className:"item item-2 darkRed"},"CLOSED")),i.a.createElement("div",{className:"store-hours-item"},i.a.createElement("div",{className:"item item-1"},"Statutory Holidays"),i.a.createElement("div",{className:"item item-2 darkRed"},"CLOSED"))))},R=function(){return i.a.createElement("div",{className:"store-logo"},i.a.createElement("img",{src:"/images/horizontal-with-icon-black.png",alt:"Seoul Food Take-Out Logo",title:"Seoul Food Take-Out Logo"}))},W=function(){return i.a.createElement("div",{className:"store-info"},i.a.createElement(R,null),i.a.createElement("h3",null,"Location"),i.a.createElement("div",{className:"store-info-items"},i.a.createElement("div",{className:"store-info-item"},i.a.createElement("div",{className:"item item-1"},i.a.createElement("a",{href:"https://www.google.com/maps/place/Seoul+Food+Take-Out/@43.6719658,-79.3768762,15z/data=!4m5!3m4!1s0x0:0xe57c456e3a4c6ee4!8m2!3d43.6719658!4d-79.3768762",target:"blank",title:"click for a larger map"},i.a.createElement("i",{className:"fas fa-map-marked-alt info-item"}))),i.a.createElement("div",{className:"item item-2"},i.a.createElement("p",{className:"info-item address-tex"},"606 Sherbourne St, Toronto, ON M4X-1X6"))),i.a.createElement("div",{className:"store-info-item"},i.a.createElement("div",{className:"item item-1"},i.a.createElement("a",{href:"tel:4164500519",title:"click to dial"},i.a.createElement("i",{className:"fas fa-phone info-item"}))),i.a.createElement("div",{className:"item item-2"},i.a.createElement("p",{className:"info-item phone-text"},"(416) 450-0519")))))},z=t(167),$=t.n(z),K=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(s.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).marker=function(e,a){return new a.Marker({position:{lat:43.6719658,lng:-79.3768762},map:e,title:"Seoul Food Take-Out"})},t.getMapOptions=function(e){return{streetViewControl:!1,scaleControl:!0,fullscreenControl:!0,scrollwheel:!1,styles:[{featureType:"poi.business",elementType:"labels",stylers:[{visibility:"on"}]}],gestureHandling:"cooperative",disableDoubleClickZoom:!0,minZoom:13,maxZoom:19,mapTypeControl:!0,mapTypeControlOptions:{style:e.MapTypeControlStyle.HORIZONTAL_BAR,position:e.ControlPosition.BOTTOM_CENTER,mapTypeIds:[e.MapTypeId.ROADMAP,e.MapTypeId.SATELLITE,e.MapTypeId.HYBRID]},zoomControl:!0,clickableIcons:!1}},t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"store-map"},i.a.createElement($.a,{bootstrapURLKeys:{key:"AIzaSyC9qr00vRspSrQUYXL8LCforFPZzcx3ifM"},defaultCenter:this.props.center,defaultZoom:this.props.zoom,options:this.getMapOptions,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(a){var t=a.map,n=a.maps;e.marker(t,n)}}))}}]),a}(i.a.Component);K.defaultProps={center:{lat:43.6719658,lng:-79.3768762},zoom:15};var q=K,U=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.resetTop(!1)}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"header contactHeader"}),i.a.createElement("div",{className:"seoulContainer-m info-box"},i.a.createElement("h2",{style:{textAlign:"center"}},"Seoul Food Take-Out is conveniently located across Sherbourne station"),i.a.createElement("div",{className:"info-items"},i.a.createElement(_,null),i.a.createElement(W,null))),i.a.createElement("div",{className:"seoulContainer-m map-box"},i.a.createElement(q,null)))}}]),a}(n.Component),G=function(e){return i.a.createElement("button",{className:"toTop "+(e.show?"active":""),onClick:e.totoTop},i.a.createElement("i",{className:"fas fa-chevron-up"}))},V=function(e){return i.a.createElement("div",{className:"footer-item about"},i.a.createElement("div",{className:"heading"},i.a.createElement("h1",null,"About"),i.a.createElement("img",{src:"/images/horizontal-logo-white-h80.png",alt:"Seoul Food Take Out Logo",className:"logo"})),i.a.createElement("p",null,"Seoul Food Take-Out was born from ",i.a.createElement("span",null,"Mrs. Park"),"'s love of cooking. This isn't your typical restaurant, just a take-out only food stop with ",i.a.createElement("span",null,"Mrs. Park")," as the sole chef. She pours her love and soul into every dish she makes. With generous portions and authentic Korean cooking, you don't want to miss out. Come visit the one and only Seoul Food Take-Out today, you won't regret it."),!e.location.location.pathname.includes("menu")&&i.a.createElement(y.a,{className:"amazingMenu",to:"/menu",onClick:function(a){e.location.location.pathname.includes("menu")?a.preventDefault():b()(".wrapper").animate({scrollTop:0},0)}},"Our Amazing Menu"))},Y=function(e){return i.a.createElement("div",{className:"footer-item hours "+(e.location.location.pathname.includes("contact")&&"hide ")},i.a.createElement("h1",null,"Business Hours"),i.a.createElement("hr",null),i.a.createElement("div",{className:"time"},i.a.createElement("div",null,i.a.createElement("span",null,"Monday :"),i.a.createElement("span",null,"8:00AM ~ 6:00PM")),i.a.createElement("div",null,i.a.createElement("span",null,"Tuesday :"),i.a.createElement("span",null,"8:00AM ~ 6:00PM")),i.a.createElement("div",null,i.a.createElement("span",null,"Wednesday :"),i.a.createElement("span",null,"8:00AM ~ 6:00PM")),i.a.createElement("div",null,i.a.createElement("span",null,"Thursday :"),i.a.createElement("span",null,"8:00AM ~ 6:00PM")),i.a.createElement("div",null,i.a.createElement("span",null,"Friday :"),i.a.createElement("span",null,"8:00AM ~ 6:00PM")),i.a.createElement("div",{className:"closed"},i.a.createElement("span",null,"Saturday - Sunday :"),i.a.createElement("span",null,"CLOSED")),i.a.createElement("div",{className:"closed"},i.a.createElement("span",null,"Statutory Holidays :"),i.a.createElement("span",null,"CLOSED"))))},Z=function(e){return i.a.createElement("div",{className:"footer-item info "+(e.location.location.pathname.includes("contact")&&" hide ")},i.a.createElement("h1",null,"Store Info"),i.a.createElement("div",{className:"info-items"},i.a.createElement("p",{className:"address info-item"},i.a.createElement("a",{href:"https://www.google.com/maps/place/Seoul+Food+Take-Out/@43.6719658,-79.3768762,15z/data=!4m5!3m4!1s0x0:0xe57c456e3a4c6ee4!8m2!3d43.6719658!4d-79.3768762",target:"blank",title:"click for a larger map"},i.a.createElement("i",{className:"fas fa-map-marked-alt"})),"606 Sherbourne St, Toronto, ON M4X-1X6"),i.a.createElement("p",{className:"phone info-item"},i.a.createElement("a",{href:"tel:4164500519",title:"click to dial"},i.a.createElement("i",{className:"fas fa-phone"})),"(416) 450-0519"),!e.location.location.pathname.includes("contact")&&i.a.createElement(y.a,{className:"moreInfo",to:"/contact",onClick:function(a){e.location.location.pathname.includes("contact")?a.preventDefault():b()(".wrapper").animate({scrollTop:0},0)}},"More Information")))},X=function(){return i.a.createElement("div",{className:"copy-right"},i.a.createElement("p",null,"Copyright \xa9 ",(new Date).getFullYear()," Seoul Food Take-Out. All rights reserved."))},J=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("footer",{className:"master-footer"},i.a.createElement("div",{className:"seoulContainer"},i.a.createElement("div",{className:"footer-header"},i.a.createElement(V,{location:e}),i.a.createElement(Y,{location:e}),i.a.createElement(Z,{location:e}))),i.a.createElement(X,null)))},Q=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(d.a)(a).call(this,e))).handleResize=function(){t.setWidthAndHeight()},t.setWidthAndHeight=function(){var e=t.wrapper.current.clientWidth;if(t.setState({clientWidth:e}),t.wrapper.current.querySelector(".mainNav")){var a=t.wrapper.current.querySelector(".mainNav").clientHeight;t.setState({mainNavHeight:a})}b()(".wrapper").animate({scrollTop:t.wrapper.current.scrollTop-1})},t.resetMenu=function(e){t.setState({menuNavFixed:e})},t.handleScroll=function(){if(t.wrapper.current.querySelector(".menuNav")){var e=t.wrapper.current.querySelector(".menuHeader"),a=t.wrapper.current.querySelector(".menuNav"),n=e.clientHeight-a.clientHeight;t.setState({menuNavOffsetTop:n})}var i=t.wrapper.current.scrollTop,c=t.state,r=c.menuNavOffsetTop,o=c.mainNavHeight;i>0?(t.setState({fixed:!0}),i>400?t.setState({toTop:!0}):t.setState({toTop:!1})):t.setState({fixed:!1}),t.wrapper.current.querySelector(".menuNav")&&(i>=r-o?t.setState({menuNavFixed:!0}):t.setState({menuNavFixed:!1}))},t.menuNavbar=function(e){t.setState({menuNavOffsetTop:e})},t.resetToTop=function(e){t.setState({toTop:e})},t.scrollToTop=function(){b()(".wrapper").animate({scrollTop:0},300)},t.state={toTop:!1,fixed:!1,clientWidth:0,menuNavFixed:!1,mainNavHeight:70,menuNavOffsetTop:0},t.wrapper=i.a.createRef(),t.handleScroll=t.handleScroll.bind(Object(u.a)(Object(u.a)(t))),t.menuNavbar=t.menuNavbar.bind(Object(u.a)(Object(u.a)(t))),t.scrollToTop=t.scrollToTop.bind(Object(u.a)(Object(u.a)(t))),t.restToTop=t.resetToTop.bind(Object(u.a)(Object(u.a)(t))),t}return Object(m.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize),this.setWidthAndHeight()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){var e=this,a=this.state,t=a.clientWidth,n=a.fixed,c=a.menuNavFixed,r=a.mainNavHeight,o=a.toTop;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"wrapper",ref:this.wrapper,onScroll:this.handleScroll},i.a.createElement(p.a,null,i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{render:function(a){var o=a.location;return i.a.createElement(i.a.Fragment,null,i.a.createElement(E,{fixed:n,menuNavFixed:c,width:t,location:o,resetMenu:e.resetMenu,mainNavHeight:r}),i.a.createElement(h.a,null,i.a.createElement(f.a,{exact:!0,path:"/",render:function(){return i.a.createElement(M,{resetTop:e.resetToTop,scrollTop:e.scrollToTop})}}),i.a.createElement(f.a,{path:"/menu",render:function(){return i.a.createElement(L,{fixed:c,width:t,menuNavbar:e.menuNavbar,mainNavHeight:r,resetMenu:e.resetMenu,resetTop:e.resetToTop,scrollTop:e.scrollToTop})}}),i.a.createElement(f.a,{exact:!0,path:"/contact",render:function(){return i.a.createElement(U,{resetTop:e.resetToTop,scrollTop:e.scrollToTop})}})),i.a.createElement(J,{location:o,reset:e.resetToTop}))}}))),i.a.createElement(G,{show:o,totoTop:this.scrollToTop})))}}]),a}(n.Component);t(409),t(418),t(427),t(436),t(445),t(454),t(463),t(472),t(481),t(490),t(499),t(508),t(517),t(526);r.a.render(i.a.createElement(Q,null),document.getElementById("root"))}},[[170,2,1]]]);
//# sourceMappingURL=main.ffff27cd.chunk.js.map