(this.webpackJsonpepicturevc=this.webpackJsonpepicturevc||[]).push([[0],{106:function(e,t,a){},107:function(e,t,a){e.exports=a.p+"static/media/Halloween.46909fdb.png"},108:function(e,t,a){},109:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(17),r=a.n(l),s=a(1),i=a(2),o=a(4),m=a(3),u=a(10),d=a(7),p=a(48),h=a.n(p),v=(a(69),a(70),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e={};if(!e)return null;e.access_token?this.props.setToken(e.access_token):window.location.href="https://api.imgur.com/oauth2/authorize?client_id=1a6ecb5718c9147&response_type=token"}},{key:"render",value:function(){return c.a.createElement("div",{className:"Authenti"})}}]),a}(c.a.Component)),E=a(27),f=a.n(E),g=(a(71),a(33),a(72),a(28)),b=a.n(g),N=a(51),y=a(32),k=a(29),w=a.n(k),_=(a(88),new w.a({accessKey:"1UztB7I03nWCD6gKbD52wwdrqyQC9yKiUEAIy9xZPP0"}));function O(){var e=Object(n.useState)(""),t=Object(y.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)([]),s=Object(y.a)(r,2),i=s[0],o=s[1],m=function(){var e=Object(N.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),_.search.photos(a).then(k.toJson).then((function(e){o(e.results)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement("form",{className:"form",onSubmit:m},c.a.createElement("input",{type:"text",name:"query",className:"input",placeholder:"Images, #tags, @users oh my !",value:a,onChange:function(e){return l(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"button"},c.a.createElement("img",{href:"/",src:"https://s.imgur.com/desktop-assets/desktop-assets/icon-search.94d41ef40ad4e47162607d90122c892f.svg",alt:""}))),c.a.createElement("div",{className:"card-list"},i.map((function(e){return c.a.createElement("div",{className:"card",key:e.id},c.a.createElement("img",{className:"card--image",alt:e.alt_description,src:e.urls.full,width:"50%",height:"50%"}))}))))}var j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"browser"},c.a.createElement(M,null),c.a.createElement("div",{className:"container"},c.a.createElement(u.c,{exact:!0,to:"/"},c.a.createElement("img",{alt:""})),c.a.createElement(O,null)))}}]),a}(n.Component),C=a(6),S=a.n(C),I=(a(106),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleClick=function(e){e.preventDefault(),n.setState({show:!n.state.show})},n.state={account:[],show:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;S()({method:"get",url:"https://api.imgur.com/3/account/EpictureVC",headers:{authorization:"Client-ID 1a6ecb5718c9147"}}).then((function(t){e.setState({account:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",{id:"avatar"},c.a.createElement("a",{href:"",onClick:this.handleClick,style:{display:"block",position:"relative"}},c.a.createElement("img",{className:"account_img",src:this.state.account.avatar,alt:" "})),c.a.createElement("div",null,this.state.show?c.a.createElement(D,null):null))}}]),a}(n.Component)),D=function(){return c.a.createElement("div",{id:"dropdown_list"},c.a.createElement("div",{className:"dropdown_option_group"},c.a.createElement("a",{href:"https://epicture-vc.netlify.app/",className:"dropdown_option"},"Home"),c.a.createElement("a",{href:"https://epicture-favorite.netlify.app/",className:"dropdown_option"},"Favorites"),c.a.createElement("a",{href:"",className:"dropdown_option"},"Comments"),c.a.createElement("a",{href:"",className:"dropdown_option"},"About"),c.a.createElement("a",{href:"https://epicture-image.netlify.app/",className:"dropdown_option"},"Images"),c.a.createElement("a",{href:"",className:"dropdown_option"},"Albums")),c.a.createElement("div",{className:"dropdown_option_group dropdown_option_group_footer"},c.a.createElement("a",{href:"",className:"dropdown_option"},c.a.createElement("img",{className:"settings",src:"https://s.imgur.com/desktop-assets/desktop-assets/icon-settings.7399c1dde71a66bb11f5674b02f8a5f1.svg",alt:""}),c.a.createElement("span",null,"Settings")),c.a.createElement("a",{href:v,className:"dropdown_option"},c.a.createElement("img",{className:"sign-out",src:"https://s.imgur.com/desktop-assets/desktop-assets/icon-sign-out.21a5a43e3814a8148874cef50962eedf.svg",alt:""}),c.a.createElement(u.c,{to:"/"},c.a.createElement("span",null,"Sign Out")))),c.a.createElement("div",{className:"top_arrow"}))},x=I,M=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"header_main"},c.a.createElement("div",null,c.a.createElement(u.c,{exact:!0,to:"https://epicture-vc.netlify.app/"},c.a.createElement("img",{src:"https://s.imgur.com/desktop-assets/desktop-assets/Navbar-logo.bcf646386406b43008da913e901b916d.svg",alt:""}))),c.a.createElement("div",{className:"header_icon"},c.a.createElement("span",null,"EpictureVC ")),c.a.createElement("div",{className:"avatar_header"},c.a.createElement(x,null))))}}]),a}(n.Component),B=a(53),T=a.n(B),A=(a(107),a(108),a(45),a(109),a(20)),z=a.n(A),R=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={popular:[],loaded:!1},n}return Object(i.a)(a,[{key:"componentWillReceiveProps",value:function(e){var t=this;S.a.get(e.url).then((function(e){t.setState({popular:e.data.data,loaded:!0})}))}},{key:"render",value:function(){if(!this.state.popular)return null;var e=this.state.popular.filter((function(e){return e.images&&e.images[0].link.length>1?e.images[0].link:null})).map((function(e,t){return c.a.createElement("div",{id:"grid_column",key:t},c.a.createElement(u.b,{to:"/viewpicture/".concat(e.id)},c.a.createElement("div",{className:"post_item_media"},e.images&&"4"===e.images[0].link.substr(e.images[0].link.length-1)?c.a.createElement(P,{sr:e.images?e.images[0].link:null}):c.a.createElement(V,{sr:e.images?e.images[0].link:null})),c.a.createElement("div",{id:"post-item-title_wrap"},c.a.createElement("div",{className:"post_title"},c.a.createElement("p",null,e.title)),c.a.createElement("div",{className:"post_ups_dws"},c.a.createElement("div",null,c.a.createElement("p",{className:"inner_icons"},c.a.createElement("i",{class:"fas fa-arrow-up"}),e.ups)),c.a.createElement("div",null,c.a.createElement("p",{className:"inner_icons"},c.a.createElement("i",{class:"fas fa-arrow-down"}),e.downs)),c.a.createElement("div",null,c.a.createElement("p",{className:"inner_icons"},c.a.createElement("i",{className:"fas fa-comment-dots"}),e.comment_count)),c.a.createElement("div",null,c.a.createElement("p",{className:"inner_icons"},c.a.createElement("i",{className:"fas fa-eye"}),e.views))))))}));return c.a.createElement("div",{className:"home_grid container"},this.state.loaded?e:c.a.createElement(z.a,{loaded:this.state.loaded,color:"blue"}))}}]),a}(n.Component),V=function(e){return c.a.createElement("img",{src:e.sr,alt:""})},P=function(e){return c.a.createElement("div",null,c.a.createElement("video",{controls:!0,autoPlay:!0,muted:!0},c.a.createElement("source",{src:e.sr,type:"video/mp4"})))},L=R,U=T.a,F=["POPULAR","RISING","NEWEST"],G=["MOST VIRAL","USER SUBMITTED","HIGHEST SCORING"],H=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e))._onSelect=function(){return"RISING"!==F[1]?null:(n.setState({val:"https://api.imgur.com/3/gallery/hot/rising/0?showViral=true&client_id=1a6ecb5718c9147"}),"NEWEST"!==F[2]?null:void n.setState({val:"https://api.imgur.com/3/gallery/hot/time/0?showViral=true&client_id=1a6ecb5718c9147"}))},n.state={selectedOption:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState({val:"https://api.imgur.com/3/gallery/hot/viral/0?showViral=true&client_id=1a6ecb5718c9147"})}},{key:"render",value:function(){var e=G[0],t=F[0],a=["Laugh, cry, learn. There\u2019s never a dull moment.","Is it GIF or GIF? Either way, we\u2019ve got the best of them.",'On the internet, nobody knows you"re a dog"',"You're already awesome."],n=a[Math.floor(a.length*Math.random())];return c.a.createElement("div",{style:{backgroundImage:"url(".concat(U,")"),height:"450px",backgroundSize:"cover"}},c.a.createElement(M,null),c.a.createElement("br",null),c.a.createElement("div",{className:"random-title"},c.a.createElement("span1",null,n)),c.a.createElement("div",{className:"container"},c.a.createElement("a",{href:"https://epicture-upload.netlify.app/",className:"ButtonLink",title:"New post"},c.a.createElement("img",{src:"https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.e31d38c8dcf98b5c9ce5483756923188.svg",alt:""}),c.a.createElement("span",null,"Upload Image"))),c.a.createElement("div",{className:"browsing"},c.a.createElement("a",{href:"https://epicture-browser.netlify.app/",className:"button_search",title:"Browser"},c.a.createElement("span",null,"Browser"))),c.a.createElement("div",{className:"content-wrapper"},c.a.createElement("div",{className:"content-inner"},c.a.createElement("div",null,c.a.createElement(f.a,{options:G,onChange:this._onSelect,value:e})),c.a.createElement("div",null,c.a.createElement(f.a,{options:F,onChange:this._onSelect,value:t}))),c.a.createElement("div",null,c.a.createElement(L,{url:this.state.val}))))}}]),a}(n.Component),W=(a(24),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={persons:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.a.get("https://api.imgur.com/3/account/EpictureVC/favorites/",{headers:{"Content-Type":"application/json",Authorization:"Bearer 91ce943a126245017ab9a4cc5db7041f5d664d3d"}}).then((function(t){var a=t.data.data;e.setState({persons:a})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement(M,null),c.a.createElement("div",{className:"titlee"},c.a.createElement("h1",null,"Your Favorites")),c.a.createElement("div",{className:"imageuser"},c.a.createElement("div",{className:""},"  ",c.a.createElement("div",{className:""},this.state.persons.map((function(e){return c.a.createElement("img",{className:"card--image",src:e.link,key:e.id})}))))))}}]),a}(n.Component)),q=(a(115),a(54)),J=a.n(q),K=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"uploadImage",value:function(){var e,t=new XMLHttpRequest,a=new FormData,n=document.getElementsByClassName("input-image")[0].files[0];a.append("image",n),t.open("POST","https://api.imgur.com/3/image/"),t.setRequestHeader("Authorization","Client-ID 1a6ecb5718c9147"),t.onreadystatechange=function(){var a=this;if(200===t.status&&4===t.readyState){var n=JSON.parse(t.responseText);e="https://i.imgur.com/".concat(n.data.id,".png"),fetch(e).then((function(e){return e.json()})).then((function(e){return a.setState({totalReactPackages:e.total})}));var c=document.createElement("div");c.className="image",document.getElementsByTagName("body")[0].appendChild(c);var l=document.createElement("a");l.className="image-link",l.href=e,document.getElementsByClassName("image")[0].appendChild(l);var r=document.createElement("p");r.className="image-url",r.innerHTML=e,document.getElementsByClassName("image-link")[0].appendChild(r);var s=document.createElement("img");s.className="image-src",s.src=e,document.getElementsByClassName("image")[0].appendChild(s)}},t.send(a)}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(M,null),c.a.createElement("h1",null,"Upload Image"),c.a.createElement("div",{className:"App-header"},c.a.createElement("img",{className:"imgupload",src:J.a}),c.a.createElement("form",null,c.a.createElement("input",{type:"file",className:"input-image",onChange:this.uploadImage.bind(this)}))))}}]),a}(n.Component),Y=(a(46),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleclick=function(e){e.preventDefault(),n.setState({load:!n.state.load})},n.state={comment:[],load:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;S()({method:"get",url:"https://api.imgur.com/3/gallery/".concat(this.props.id,"/comments"),headers:{authorization:"Client-ID 1a6ecb5718c9147"}}).then((function(t){e.setState({comment:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.comment.length;t++)if(this.state.comment[t].children.length)for(var a=0;a<this.state.comment[t].children.length;a++)e.push({author:this.state.comment[t].children[a].author,platform:this.state.comment[t].children[a].platform,points:this.state.comment[t].children[a].points,comment:this.state.comment[t].children[a].comment});var n=this.state.comment.map((function(e){return c.a.createElement("div",null,c.a.createElement("li",{className:"comment_list"},c.a.createElement("div",{className:"author"},c.a.createElement("span",{style:{fontWeight:"700",marginRight:"4px"}},e.author),c.a.createElement("span",null,"via ",c.a.createElement("a",{href:""},e.platform)),c.a.createElement("span",{style:{marginLeft:"18px"}},e.points,"pts")),c.a.createElement("div",null,e.comment)))}));return c.a.createElement("div",{className:"main_comments_body"},c.a.createElement("ul",null,n))}}]),a}(n.Component)),$=(a(116),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={pop:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.a.get("https://api.imgur.com/3/gallery/hot/viral/0?client_id=1a6ecb5718c9147").then((function(t){e.setState({pop:t.data.data})}))}},{key:"render",value:function(){var e=this.state.pop.filter((function(e){return e.images&&e.images[0].link.length>1?e.images[0].link:null})).map((function(e,t){return c.a.createElement("div",{className:"gridsub_column"},c.a.createElement("li",{key:t},c.a.createElement("div",{className:"post"},c.a.createElement("img",{src:e.images?e.images[0].link:null,alt:" ",width:"100px",height:"100px"})),c.a.createElement("div",{className:"title"},c.a.createElement("div",{className:"list-title"},e.title))))}));return c.a.createElement("div",{className:"popular_wrapper"},c.a.createElement("ul",null,e))}}]),a}(n.Component)),Q=(a(117),a(118),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).click=function(e){e.preventDefault(),n.setState({click:!n.state.click})},n.state={click:!1,account:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;S()({method:"get",url:"https://api.imgur.com/3/account/EpictureVC/favorites/",headers:{authorization:"Client-ID 1a6ecb5718c9147"}}).then((function(t){e.setState({account:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"header_main"},c.a.createElement("div",null,c.a.createElement(u.c,{exact:!0,to:"https://epicture-vc.netlify.app/"},c.a.createElement("img",{src:"https://s.imgur.com/desktop-assets/desktop-assets/Navbar-logo.bcf646386406b43008da913e901b916d.svg",alt:""}))),c.a.createElement("div",{className:"header_icon"},c.a.createElement("span",null,"EpictureVC ")),c.a.createElement("div",{className:"avatar_header"},c.a.createElement(x,null))),c.a.createElement("div",{className:"container"},c.a.createElement("a",{href:"",className:"ButtonLink",title:"New post"},c.a.createElement("img",{src:"https://s.imgur.com/desktop-assets/desktop-assets/icon-new-post.e31d38c8dcf98b5c9ce5483756923188.svg",alt:""}),c.a.createElement("span",null,"New post")),c.a.createElement("a",{href:"",className:"button_search",title:"Browser"},c.a.createElement("span",null,"Browser"))))}}]),a}(n.Component)),X=a(55),Z=a(136),ee=a(15),te=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={value:"",load:!1},n.handleChange=n.handleChange.bind(Object(ee.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(ee.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t={headers:{"Content-Type":"application/json",Authorization:"Bearer 1c32d824dab64e1848477807f95a814fa7237d3d"},data:{image_id:this.props.match.params.id,comment:this.state.value}};S.a.post("https://api.imgur.com/3/comment",t).then((function(e){e.data.data})).catch((function(e){console.log(e),console.log(e.data)})),alert("Com"+this.state.value),e.preventDefault()}},{key:"componentDidMount",value:function(){S.a.post("https://api.imgur.com/3/comment",{headers:{"Content-Type":"application/json",Authorization:"Bearer 91ce943a126245017ab9a4cc5db7041f5d664d3d"},data:{image_id:"${this.props.match.params.id}",comment:"${this.state.value}"}}).then((function(e){e.data.data})).catch((function(e){console.log(e),console.log(e.data)}))}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",null,"Com:",c.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),c.a.createElement("input",{type:"submit",value:"Envoyer"}))}}]),a}(n.Component),ae=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={view:[],loaded:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;S()({method:"get",url:"https://api.imgur.com/3/album/".concat(this.props.match.params.id),headers:{authorization:"Client-ID 1a6ecb5718c9147"}}).then((function(t){e.setState({view:t.data.data,loaded:!0})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e,t=[];if(this.state.view.images)for(var a=0;a<this.state.view.images.length;a++)t.push({link:this.state.view.images[a].link,de:this.state.view.images[a].description});return e=t.map((function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("div",{className:"post_image"},c.a.createElement("img",{src:e.link,style:{objectPosition:"80% 20%",objectFit:"cover"},alt:""})),c.a.createElement("div",{className:"post_img_meta"},c.a.createElement("p",null,e.de)))})),c.a.createElement("div",{className:"main_view_body"},c.a.createElement(Q,null),c.a.createElement(z.a,{loaded:this.state.loaded,color:"blue"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"post_container"},c.a.createElement("div",{className:"post_header"},c.a.createElement("div",{className:"post_title_container"},c.a.createElement("h1",{className:"post_title"},this.state.view.title),c.a.createElement("div",{className:"post_title_meta"},c.a.createElement("span",null,"by"),c.a.createElement("span",{className:"pseudo"},this.state.view.account_url)),c.a.createElement("br",null)),c.a.createElement("div",{className:"next_prev"},c.a.createElement("div",{className:"prev"},c.a.createElement("span",null,"<")),c.a.createElement("div",{className:"btn_action"},c.a.createElement("div",{className:"text"},"Next"),c.a.createElement("span",{className:"right_arrow"})))),c.a.createElement("div",{className:"post_images"},e),c.a.createElement("div",{className:"poster_action"},c.a.createElement("div",{className:"poster_inner"},c.a.createElement("div",null,c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-long-arrow-alt-up"})),c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-long-arrow-alt-down"})),c.a.createElement("span",null,c.a.createElement("i",{className:"fas fa-heart"}))),c.a.createElement("div",null)),c.a.createElement("div",{className:"allbum_views"},this.state.view.views," views")),c.a.createElement("div",{className:"popular_item_list"},c.a.createElement("div",{className:"header_side_list"},c.a.createElement("div",null,c.a.createElement("p",null,"MOST VIRAL IMAGES")),c.a.createElement("div",null,c.a.createElement("i",{className:"fas fa-th-list list"}),c.a.createElement("i",{className:"fas fa-th th"}))),c.a.createElement(X.Scrollbars,{style:{width:300,height:350}},c.a.createElement($,null))),c.a.createElement("div",{id:"new_comment"},c.a.createElement(te,null),c.a.createElement("div",{className:"summary"},c.a.createElement("div",null,c.a.createElement("a",{href:""},"Read the community rules")),c.a.createElement("div",null,c.a.createElement(Z.a,{disabled:!0},"Post")))),c.a.createElement("div",{className:"comment_header"},c.a.createElement("div",null,this.state.view.images_count," COMMENTS"),c.a.createElement("div",null,c.a.createElement("span",null,"Expand All"),c.a.createElement("span",null,"Best"))),c.a.createElement("div",{className:"comment_details_main"},c.a.createElement(Y,{id:this.props.match.params.id}))),"2020")))}}]),a}(n.Component),ne=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={persons:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.a.get("https://api.imgur.com/3/account/EpictureVC/images/",{headers:{"Content-Type":"application/json",Authorization:"Bearer 91ce943a126245017ab9a4cc5db7041f5d664d3d"}}).then((function(t){var a=t.data.data;e.setState({persons:a})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"header"},c.a.createElement(M,null),c.a.createElement("div",{className:"titlee"},c.a.createElement("h1",null,"Your Images")),c.a.createElement("div",{className:"imageuser"},c.a.createElement("div",{className:""},"  ",c.a.createElement("div",{className:""},this.state.persons.map((function(e){return c.a.createElement("img",{className:"card--image",src:e.link,key:e.id})}))))))}}]),a}(n.Component),ce=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={persons:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;S.a.post("https://api.imgur.com/3/account/EpictureVC/verifyemail",{headers:{Authorization:"Bearer d0759f969364482f33a18fd07dec636a95e04045"}}).then((function(t){var a=t.data.data,n=t.data.error;alert(n),e.setState({persons:a})})).catch((function(e){console.log(e.response.data),console.log(e.response.status),console.log(e.response.headers)}))}},{key:"render",value:function(){return c.a.createElement("button",{onClick:this.componentDidMount},"Verif")}}]),a}(n.Component),le=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/",exact:!0,component:v}),c.a.createElement(d.a,{path:"/home",component:H}),c.a.createElement(d.a,{path:"/viewpicture/:id",component:ae}),c.a.createElement(d.a,{path:"/favorites",component:W}),c.a.createElement(d.a,{path:"/browser",component:j}),c.a.createElement(d.a,{path:"/newpost",component:K}),c.a.createElement(d.a,{path:"/images",component:ne}),c.a.createElement(d.a,{path:"/verif",component:ce})),c.a.createElement(h.a,{text:"Move on the top",style:{backgroundColor:"#53565f",color:"#fff",border:"none",fontSize:"13px"}}),c.a.createElement("div",{className:"footer"},c.a.createElement("p",null,"\xa9 EPICTUREVC 2020")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,t,a){},33:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},53:function(e,t,a){e.exports=a.p+"static/media/Background.020d56b8.png"},54:function(e,t,a){e.exports=a.p+"static/media/unnamed.c30446ca.png"},56:function(e,t,a){e.exports=a(134)},69:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},70:function(e,t,a){},72:function(e,t,a){},88:function(e,t,a){}},[[56,1,2]]]);
//# sourceMappingURL=main.9d90f0de.chunk.js.map