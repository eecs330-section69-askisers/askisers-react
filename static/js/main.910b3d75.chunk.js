(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},5415:function(e,t,a){e.exports=a(5557)},5420:function(e,t,a){},5421:function(e,t,a){},5523:function(e,t,a){},5557:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(16),o=a.n(r),l=(a(5420),a(18)),i=a(19),c=a(21),u=a(20),d=a(22),p=(a(100),a(69),a(24)),m=a(17),h=a(53),v=a(68),w=a.n(v),E=(a(101),a(5421),a(37)),g=a.n(E),f=a(35),b=a.n(f),y=a(36),C=a.n(y),k=a(26),O=a.n(k),S=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log("Question: "+this.props.question),s.a.createElement(b.a,{style:{backgroundColor:"#011627",boxShadow:"0px 0px 0px #81d4f9",padding:"10px"}},s.a.createElement(C.a,{id:"cardHeader",avatar:s.a.createElement(O.a,{rounded:!0}," ",s.a.createElement(g.a,null)," "),title:this.props.question,subheader:this.props.votes}),s.a.createElement(p.b,{style:{backgroundColor:"#fdecea",borderRadius:"0px 0px 5px 5px"}},s.a.createElement(p.f,{component:"p",children:this.props.desc})))}}]),t}(n.Component),q=(a(5523),a(66)),Q=a.n(q),N=a(67),U=a.n(N),j=a(45),A=a.n(j),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).resetUpvotes=function(){a.setState({upvotes:0})},a.handleUpvote=function(){var e=a.state.upvotes,t=a.state.upvoted,n=a.state.downvoted;t?(e-=1,t=!1,n=!1):n?(e+=2,t=!0,n=!1):(e+=1,t=!0,n=!1),a.setState({upvotes:e,upvoted:t,downvoted:n})},a.handleDownvote=function(){var e=a.state.upvotes,t=a.state.upvoted,n=a.state.downvoted;t?(e-=2,t=!1,n=!0):n?(e+=1,t=!1,n=!1):(e-=1,t=!1,n=!0),a.setState({upvotes:e,upvoted:t,downvoted:n})},a.state={upvotes:0,upvoted:!1,downvoted:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(b.a,{style:this.props.answered?{}:{display:"none"}},s.a.createElement(C.a,{id:"cardHeader",avatar:s.a.createElement(O.a,{rounded:!0}," ",s.a.createElement(g.a,null)," "),subheader:this.state.upvotes}),s.a.createElement(Q.a,{onChange:this.resetUpvotes},this.props.answerText),s.a.createElement(U.a,{disableActionSpacing:!0},s.a.createElement(A.a,{onClick:this.handleUpvote},s.a.createElement(h.a,null)),s.a.createElement(A.a,{onClick:this.handleDownvote},s.a.createElement(h.b,null)))))}}]),t}(n.Component),D=a(98),T=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"LogoHeader",style:{backgroundColor:"#e71d36"}},s.a.createElement("div",{id:"LogoTitle"},"Askisers"))}}]),t}(n.Component),B=a(23),I=a.n(B),R=a(46),W=a.n(R),K=a(50),P=a.n(K),H=a(48),L=a.n(H),F=a(49),Y=a.n(F),J=a(47),M=a.n(J),_=a(38),V=a.n(_),$=a(51),z=a.n($),G=a(52),X=a.n(G),Z=function(e){function t(e){var a;Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).drawerToggle=function(){a.setState({drawerOpen:!a.state.drawerOpen})},a.handleOpen=function(){a.setState({addQuestion:!0})},a.handleClose=function(){var e=[{question:a.state.newQuestion,desc:a.state.newDesc,upvotes:0,time:a.state.numPosts}];a.setState({questions:a.state.questions.concat(e),addQuestion:!1,numPosts:a.state.numPosts+1}),console.log("New set of questions: "+a.state.questions)},a.handleAnsOpen=function(){var e=a.state.answeredQs;e[a.state.currKey]=!1,a.setState({addAnswer:!0,answeredQs:e})},a.handleAnsClose=function(){var e=a.state.answeredQs;e[a.state.currKey]=!0,a.answer.current.resetUpvotes(),a.setState({addAnswer:!1,answeredQs:e})},a.handleUpvote=function(e){var t=a.state.upvotedQs,n=a.state.questions,s=e.currentTarget.getAttribute("value"),r=a.state.activeUpvotes;console.log(e.target),t[s]?(n[s].upvotes-=1,a.state.isAnswerable&&a.state.currKey===s&&(r=n[s].upvotes),t[s]=!1):(n[s].upvotes+=1,a.state.isAnswerable&&a.state.currKey===s&&(r=n[s].upvotes),t[s]=!0),a.setState({questions:n,upvotedQs:t,activeUpvotes:r})},a.setNewQuestion=function(e){a.setState({newQuestion:e.target.value}),console.log("new value of state: "+a.state.newQuestion)},a.setNewDesc=function(e){a.setState({newDesc:e.target.value}),console.log("new value of state: "+a.state.newDesc)},a.setNewAnswer=function(e){var t=a.state.answers;t[a.state.currKey]=e.target.value,a.setState({answers:t})},a.sortByUpvotes=function(){console.log("SORTED BY UPVOTES!");var e=a.state.questions;e.sort(function(e,t){return e.upvotes-t.upvotes}),a.setState({questions:e})},a.sortByChron=function(){console.log("SORTED BY TIME!");var e=a.state.questions;e.sort(function(e,t){return e.time-t.time}),a.setState({questions:e})},a.generateQuestions=function(){var e=a.state.questions;console.log("QUESTION ARRAY: "+e[0].question);for(var t=[],n=e.length-1;n>=0;n--){var r=e[n];t.push(s.a.createElement("div",{className:"question"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"columnA"},s.a.createElement(p.d,{onClick:a.handleUpvote,value:n},s.a.createElement(h.a,{value:n})),s.a.createElement("p",{style:{margin:0}},r.upvotes)),s.a.createElement("div",{id:"main-question",className:"columnB",value:n,onClick:a.viewQuestion},r.question))))}return t},a.viewQuestion=function(e){var t=e.target.getAttribute("value");a.setState({currKey:t,previewQuestion:!a.state.previewQuestion,activeQuestion:a.state.questions[t].question,activeDesc:a.state.questions[t].desc,activeUpvotes:a.state.questions[t].upvotes,isAnswerable:!0})};var n=[],r=[],o=[];a.answer=s.a.createRef();for(var i=0;i<D.length;i++)n.push(""),r.push(!1),o.push(!1);return console.log(n),a.state={currKey:0,previewQuestion:!1,questions:D,answers:n,answeredQs:r,upvotedQs:o,activeQuestion:"Hi "+a.props.name+", click on a question in the sidebar to view it.",activeDesc:"By the way, you look great today!",activeUpvotes:"",isAnswerable:!1,addQuestion:!1,addAnswer:!1,drawerOpen:!1,numPosts:4,sorting:"chronological"},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.fullScreen,t=this.props.classes,a=s.a.createElement("div",{className:"sideDrawer"},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("center",null,s.a.createElement(O.a,null,this.props.name[0]),s.a.createElement("h1",null,s.a.createElement("div",{className:"userName"},this.props.name)),s.a.createElement("div",{className:"className"},this.props.class)));return s.a.createElement("div",null,s.a.createElement(W.a,{fullScreen:e,open:this.state.addQuestion,onClose:this.handleClose,"aria-labelledby":"responsive-dialog-title"},s.a.createElement(M.a,{id:"responsive-dialog-title"},"Create a new post"),s.a.createElement(L.a,null,s.a.createElement(Y.a,null,s.a.createElement(V.a,{onChange:this.setNewQuestion,id:"standard-full-width",label:"Enter your question below:",style:{margin:8,width:500},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}})," "),s.a.createElement(Y.a,null,s.a.createElement(V.a,{onChange:this.setNewDesc,id:"standard-full-width",label:"Enter a detailed description below:",style:{margin:8,width:500},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}})," ")),s.a.createElement(P.a,null,s.a.createElement(I.a,{onClick:this.handleClose,variant:"contained",color:"primary"},"Done"))),s.a.createElement(p.a,{position:"static",style:{backgroundColor:"#e71d36",color:"#ffffff"}},s.a.createElement(p.e,null,s.a.createElement(p.d,{onClick:this.drawerToggle,className:t.menuButton},s.a.createElement(w.a,null)),s.a.createElement(T,null))),s.a.createElement(p.c,{open:this.state.drawerOpen,onClose:this.drawerToggle},a),s.a.createElement("div",{id:"sidebarsteve",className:"Sidebar-Wrapper"},s.a.createElement("br",null),s.a.createElement("center",null,s.a.createElement(z.a,{variant:"extended",onClick:this.sortByChron},s.a.createElement(X.a,null,"access_time"),"Sort by Date"),s.a.createElement(z.a,{variant:"extended",onClick:this.sortByUpvotes},s.a.createElement(X.a,null,"arrow_upward"),"Sort by Upvotes"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(I.a,{onClick:this.handleOpen,variant:"contained",style:{backgroundColor:"#e71d36",color:"#ffffff"}},"Create a new post")),s.a.createElement("br",null),this.generateQuestions()),s.a.createElement("div",null,s.a.createElement(S,{question:this.state.activeQuestion,votes:this.state.activeUpvotes,desc:this.state.activeDesc}),s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("center",null,s.a.createElement(I.a,{variant:"contained",color:"primary",onClick:this.handleAnsOpen,style:this.state.isAnswerable?{}:{display:"none"}},"Answer this question")),s.a.createElement(W.a,{open:this.state.addAnswer,onClose:this.handleAnsClose,"aria-labelledby":"form-dialog-title"},s.a.createElement(M.a,{id:"form-dialog-title"},"Answering"),s.a.createElement(L.a,null,s.a.createElement(V.a,{onChange:this.setNewAnswer,id:"standard-full-width",label:"Enter your answer below:",style:{margin:8,width:500},placeholder:"",helperText:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}})," "),s.a.createElement(P.a,null,s.a.createElement(I.a,{onClick:this.handleAnsClose,color:"primary"},"Done")))),s.a.createElement("br",null),s.a.createElement(x,{ref:this.answer,answered:this.state.answeredQs[this.state.currKey],answerText:this.state.answers[this.state.currKey]})))}}]),t}(n.Component),ee=Object(m.withStyles)(function(e){return{menuButton:{color:"white"}}})(Z),te=function(e){return s.a.createElement("div",{id:"signUpHeader",style:{backgroundColor:"#E71D36"}},s.a.createElement("div",{id:"signUpHeaderTitle",style:{color:"#FDFFFC"}},"Askisers"))},ae=function(e){return s.a.createElement("div",{className:"signUpRow",style:{padding:"10px"}},s.a.createElement("input",{style:{border:"#E71D36"},id:e.id,type:"checkbox"}),s.a.createElement("label",{htmlFor:e.id},e.label))},ne=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).openDashboard=function(){console.log("Head over to dashboard"),a.setState({activeScreen:"Dashboard"})},a.updateName=function(e){a.setState({name:e.target.value}),console.log("New name: "+a.state.name)},a.updateClass=function(e){a.setState({class:e.target.value}),console.log("New class: "+a.state.class)},a.state={name:"",username:"",password:"",activeScreen:"Login",class:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){console.log("Current screen: "+this.state.activeScreen);var e=this.state.activeScreen;return s.a.createElement("div",null,"Login"===e?s.a.createElement("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -50%)"}},s.a.createElement("div",{id:"signUpContainer"},s.a.createElement("div",{id:"signUpHeader",style:{backgroundColor:"#e71d36"}},s.a.createElement(te,null)),s.a.createElement("div",{className:"signUpRow"},s.a.createElement("input",{onChange:this.updateName,type:"text",placeholder:"First and last name"})),s.a.createElement("div",{className:"signUpRow"},s.a.createElement("input",{type:"text",placeholder:"Username"})),s.a.createElement("div",{className:"signUpRow"},s.a.createElement("input",{type:"password",placeholder:"Password"})),s.a.createElement("div",{className:"signUpRow"},s.a.createElement("input",{onChange:this.updateClass,type:"text",placeholder:"Class Name"})),s.a.createElement(ae,{id:"terms",label:"I agree to the terms and conditions"}))," ",s.a.createElement("center",null,s.a.createElement("button",{onClick:this.openDashboard,id:"signUpButton",style:{backgroundColor:"#E71D36",borderRadius:"5px",color:"#fdffc"}},"Sign up"))):"Dashboard"===e?s.a.createElement(ee,{name:this.state.name,class:this.state.class}):null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,t,a){},98:function(e){e.exports=[{question:"If I have an isosceles triangle, what do I do with my other triangles?",desc:"I would prefer an instructor answer.",upvotes:7,time:0},{question:"What do I need to learn how to add?",desc:"I've been trying for weeks now!!!",upvotes:10,time:1},{question:"Why is the pythagorean theorem useful? When would we use it?",desc:"I get that if we know the lengths of two sides of a right angled triangle, we can find the length of the third side. (But remember it only works on right angled triangles!). But when would we actually use it? ",upvotes:13,time:2},{question:"What was the percentage of increase for Q6 in the exam?",desc:"My parents run a warehouse, so we would really appreciate an answer to this question.",upvotes:7,time:3}]}},[[5415,1,2]]]);
//# sourceMappingURL=main.910b3d75.chunk.js.map