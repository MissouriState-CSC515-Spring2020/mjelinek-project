(this["webpackJsonpmjelinek-photoapp"]=this["webpackJsonpmjelinek-photoapp"]||[]).push([[4],{58:function(e,t,a){"use strict";a.r(t);var n=a(17),r=a(18),l=a(20),i=a(19),c=a(21),o=a(0),s=a.n(o),u=a(53),d=a(54),m=a(55),p=(a(16),function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={results:[],url:[],isLoaded:!1},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.googleapis.com/youtube/v3/search?part=id&q=lastweektonight&type=video&maxResults=6&order=date&key=AIzaSyAAN7bkXlpi5pqkVlJaXVmciwrNYN1RdSY").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,results:t.items,url:"https://www.youtube.com/embed/"})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.results,r=e.url;return t?s.a.createElement("div",null,"Error in loading"):a?(document.title="Most Recent Videos",s.a.createElement(u.a,null,s.a.createElement("div",null,s.a.createElement("h1",{align:"center"},"Recent Videos")),s.a.createElement(d.a,null,s.a.createElement(m.a,{xs:12,md:6,lg:4},s.a.createElement("a",{href:"/details"},s.a.createElement("div",{className:"row"},n.map((function(e){return s.a.createElement("div",{key:e.id},s.a.createElement("div",{className:"col s3"},s.a.createElement("iframe",{title:"myFrame",src:r+e.id.videoId})))})))))))):s.a.createElement("div",null,"Loading ...")}}]),t}(s.a.Component));t.default=p}}]);
//# sourceMappingURL=4.dcba97a6.chunk.js.map