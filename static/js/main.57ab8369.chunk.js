(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){t.exports=a(34)},21:function(t,e,a){},23:function(t,e,a){},25:function(t,e,a){},34:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(9),i=a.n(c),r=(a(21),a(1)),l=a(2),s=a(5),u=a(3),d=a(4),m=a(6),h=(a(23),a(10)),p=(a(25),a(11)),b=a.n(p),f=function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={active:null},a.config={},a.mapHandler=function(t){var e=t.target.dataset.name;a.config=Object(h.a)({},e,{fill:"blue"}),a.setState({active:e})},a.componentDidUpdate=function(t,e){e.active!==a.state.active&&a.props.handleStateChange(a.state.active)},a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"Map"},o.a.createElement(b.a,{customize:this.config,onClick:this.mapHandler,width:this.props.width}))}}]),e}(n.Component),v=a(7),g=a.n(v),w=a(12),y=a.n(w),O=a(13),j=a.n(O),k={chart:{type:"bubble",plotBorderWidth:1,zoomType:"xy"},legend:{enabled:!1},title:{text:"Loan details per state"},subtitle:{text:'Source: <a href="https://www.lendingclub.com/info/download-data.action/">Lending Club</a>'},xAxis:{gridLineWidth:1,title:{text:"Income"},labels:{format:"{value}"},plotLines:[{color:"black",dashStyle:"dot",width:2,value:65,label:{rotation:0,y:15,style:{fontStyle:"italic"},text:"Safe fat intake 65g/day"},zIndex:3}]},yAxis:{startOnTick:!1,endOnTick:!1,title:{text:"Loan Amount"},labels:{format:"{value}"},maxPadding:.2},tooltip:{useHTML:!0,headerFormat:"<p>",pointFormat:"<b>{point.z} loans</b>",footerFormat:"</table>",followPointer:!0},plotOptions:{series:{dataLabels:{enabled:!0,format:"{point.name}"}}},series:[{}]},x=a(14),E=a.n(x);y()(g.a);var S={moving:"#7cb5ec",house:"#434348",medical:"#90ed7d",vacation:"#f7a35c",debt_consolidation:"#8085e9",credit_card:"#f15c80",small_business:"#e4d354",major_purchase:"#2b908f",home_improvement:"#f45b5b",car:"#91e8e1"},D=function(t){function e(){return Object(r.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidUpdate",value:function(){var t=g.a.charts[0].series[0],e=this.props.loanData.map(function(t){return{x:t.avg_income,y:t.avg_loan,z:t.count,color:S[t.purpose],name:E()(t.purpose)}});t.setData(e)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(j.a,{highcharts:g.a,options:k}))}}]),e}(n.Component),C="https://stormy-escarpment-35450.herokuapp.com",L=function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(o)))).state={stateData:null},a.changeState=function(t){var e=Object(m.a)(Object(m.a)(a));fetch("".concat(C,"/states/").concat(t)).then(function(t){return t.json()}).then(function(t){return e.setState({stateData:t})})},a}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"column"},o.a.createElement(f,{handleStateChange:this.changeState,width:500})),o.a.createElement("div",{class:"column"},o.a.createElement(D,{loanData:this.state.stateData})))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.57ab8369.chunk.js.map